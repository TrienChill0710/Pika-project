// Pika — Import Tokens Plugin
// Read 3 JSON files (primitive, semantic, component) → create Figma Variables
//
// Pika's token set (Step 10): Primitive 178 · Semantic 242 · Component 130 = 550.
// Colors are #RRGGBB or #RRGGBBAA (20 transparent tokens) — hexToRgba handles both.
// The 8 gradients are $type "string" → STRING variables (Figma Variables cannot hold a
// gradient). The string carries the exact CSS so nothing is lost, but it is documentation,
// not a usable fill: gradient.page alone stacks 2 radials + 1 linear with offset centres,
// which no safe automatic conversion handles. The 8 Paint Styles are built by hand in
// Figma at Step 14 — carried as a known limit in 05-tokens/token-mapping.md.
// Semantic and Component values are aliases only, so the 3-tier chain stays live in Figma.

figma.showUI(__html__, { width: 380, height: 620 });

function logUI(message, level) {
  figma.ui.postMessage({ type: 'log', message, level });
}

// Parse hex color "#RRGGBB" or "#RRGGBBAA" → {r, g, b, a}
function hexToRgba(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  const a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;
  return { r, g, b, a };
}

// Convert "{primitive.color.brand.500}" → "primitive/color/brand/500"
function refToPath(ref) {
  return ref.replace(/^\{/, '').replace(/\}$/, '').replace(/\./g, '/');
}

// Walk tree, collect all leaf tokens with $value
function collectTokens(obj, path = []) {
  const tokens = [];
  for (const key in obj) {
    if (key.startsWith('$')) continue;
    const val = obj[key];
    if (val && typeof val === 'object' && '$value' in val) {
      tokens.push({
        path: [...path, key],
        type: val.$type,
        value: val.$value
      });
    } else if (val && typeof val === 'object') {
      tokens.push(...collectTokens(val, [...path, key]));
    }
  }
  return tokens;
}

// Resolve modes: value can be plain or { Light: ..., Dark: ... }
function resolveModes(value, modeNames) {
  // Simple value (no modes)
  if (typeof value === 'string' || typeof value === 'number') {
    const result = {};
    for (const m of modeNames) result[m] = value;
    return result;
  }
  // Multi-mode value: { Light: "...", Dark: "..." }
  if (typeof value === 'object' && !Array.isArray(value)) {
    return value;
  }
  return value;
}

// Map JSON $type to Figma Variable type
function mapType(jsonType) {
  if (jsonType === 'color') return 'COLOR';
  if (jsonType === 'number') return 'FLOAT';
  if (jsonType === 'string') return 'STRING';
  return 'FLOAT';
}

async function importTokens(primitiveJson, semanticJson, componentJson) {
  logUI('━━━ Starting import ━━━');

  // ============ STEP 1: Create or get collections ============
  logUI('Creating collections...');

  const allCollections = await figma.variables.getLocalVariableCollectionsAsync();

  function findOrCreateCollection(name, modes) {
    let coll = allCollections.find(c => c.name === name);
    if (coll) {
      if (modes && modes.length === 1 && coll.modes.length === 1 && coll.modes[0].name === 'Mode 1') {
        coll.renameMode(coll.modes[0].modeId, modes[0]);
      }
      logUI(`  Collection "${name}" already exists, reusing.`);
      return coll;
    }
    coll = figma.variables.createVariableCollection(name);
    // Figma names the first mode "Mode 1" — rename it to the expected mode name
    if (modes && modes.length === 1 && coll.modes[0].name !== modes[0]) {
      coll.renameMode(coll.modes[0].modeId, modes[0]);
    }
    logUI(`  ✓ Created collection "${name}"`, 'ok');
    return coll;
  }

  // Collection names and mode names are read from the token files themselves
  // ($collection / $mode), never hard-wired. Pika ships light mode only
  // (Step 02 intake), so Semantic declares "$mode": "Light" = one mode.
  // Adding "Dark" later is a token-file change, no plugin edit.
  function modesOf(json, fallback) {
    if (json && Array.isArray(json.$modes) && json.$modes.length) return json.$modes;
    if (json && typeof json.$mode === 'string') return [json.$mode];
    return fallback;
  }
  function collNameOf(json, fallback) {
    return (json && typeof json.$collection === 'string') ? json.$collection : fallback;
  }

  const primModes = modesOf(primitiveJson, ['Default']);
  const semModes  = modesOf(semanticJson,  ['Light']);
  const compModes = modesOf(componentJson, ['Default']);

  const primCol = findOrCreateCollection(collNameOf(primitiveJson, 'Primitive'), primModes);
  const semCol  = findOrCreateCollection(collNameOf(semanticJson,  'Semantic'),  semModes);
  const compCol = findOrCreateCollection(collNameOf(componentJson, 'Component'), compModes);

  // Add any mode the file declares that the collection does not have yet
  for (const m of semModes) {
    if (!semCol.modes.find(x => x.name === m)) {
      semCol.addMode(m);
      logUI('  ✓ Added mode "' + m + '" to ' + semCol.name, 'ok');
    }
  }
  const semModeIds = {};
  for (const m of semModes) semModeIds[m] = semCol.modes.find(x => x.name === m).modeId;
  logUI('  Modes — ' + primCol.name + ': ' + primModes.join(' · ')
        + '  |  ' + semCol.name + ': ' + semModes.join(' · ')
        + '  |  ' + compCol.name + ': ' + compModes.join(' · '));

  // ============ STEP 2: Get all existing variables for re-use ============
  const allVars = await figma.variables.getLocalVariablesAsync();
  const varCache = {};  // name → variable

  function findVar(name, collectionId) {
    return allVars.find(v => v.name === name && v.variableCollectionId === collectionId);
  }

  // ============ STEP 3: Import PRIMITIVE ============
  logUI('━━━ Tier 1: Primitive ━━━');
  const primTokens = collectTokens(primitiveJson);
  let primCount = 0;

  for (const tok of primTokens) {
    const name = ['primitive', ...tok.path].join('/');
    const figmaType = mapType(tok.type);

    let variable = findVar(name, primCol.id);
    if (!variable) {
      variable = figma.variables.createVariable(name, primCol, figmaType);
    }

    // Primitive declares a single mode ($mode) — resolve it by name, fall back to the first
    const pm = primCol.modes.find(m => m.name === primModes[0]) || primCol.modes[0];
    const modeId = pm.modeId;
    if (figmaType === 'COLOR') {
      variable.setValueForMode(modeId, hexToRgba(tok.value));
    } else if (figmaType === 'FLOAT') {
      variable.setValueForMode(modeId, Number(tok.value));
    } else if (figmaType === 'STRING') {
      // font family / font style names / CSS gradients
      variable.setValueForMode(modeId, String(tok.value));
    }

    varCache[name] = variable;
    primCount++;
  }
  logUI(`✓ Imported ${primCount} primitive tokens`, 'ok');

  // ============ STEP 4: Import SEMANTIC (with Light/Dark modes) ============
  logUI('━━━ Tier 2: Semantic ━━━');
  const semTokens = collectTokens(semanticJson);
  let semCount = 0;

  // Refresh allVars after creating primitives
  const allVarsAfterPrim = await figma.variables.getLocalVariablesAsync();
  for (const v of allVarsAfterPrim) {
    varCache[v.name] = v;
  }

  for (const tok of semTokens) {
    const name = ['semantic', ...tok.path].join('/');
    const figmaType = mapType(tok.type);

    let variable = findVar(name, semCol.id);
    if (!variable) {
      // Refresh search
      const allVars2 = await figma.variables.getLocalVariablesAsync();
      variable = allVars2.find(v => v.name === name && v.variableCollectionId === semCol.id);
    }
    if (!variable) {
      variable = figma.variables.createVariable(name, semCol, figmaType);
    }

    const modeValues = resolveModes(tok.value, semModes);

    for (const modeName of semModes) {
      const modeId = semModeIds[modeName];
      const val = modeValues[modeName];

      if (val === undefined || val === null) {
        logUI(`  ⚠ ${name}: no value for mode "${modeName}"`, 'err');
      } else if (typeof val === 'string' && val.startsWith('{')) {
        // Reference to another variable
        const refPath = refToPath(val);
        const refVar = varCache[refPath];
        if (refVar) {
          variable.setValueForMode(modeId, {
            type: 'VARIABLE_ALIAS',
            id: refVar.id
          });
        } else {
          logUI(`  ⚠ Ref not found: ${refPath}`, 'err');
        }
      } else if (figmaType === 'COLOR') {
        variable.setValueForMode(modeId, hexToRgba(val));
      } else if (figmaType === 'FLOAT') {
        variable.setValueForMode(modeId, Number(val));
      } else if (figmaType === 'STRING') {
        variable.setValueForMode(modeId, String(val));
      }
    }

    varCache[name] = variable;
    semCount++;
  }
  logUI(`✓ Imported ${semCount} semantic tokens (mode: ${semModes.join(' + ')})`, 'ok');

  // ============ STEP 5: Import COMPONENT ============
  logUI('━━━ Tier 3: Component ━━━');
  const compTokens = collectTokens(componentJson);
  let compCount = 0;

  // Refresh cache
  const allVarsAfterSem = await figma.variables.getLocalVariablesAsync();
  for (const v of allVarsAfterSem) {
    varCache[v.name] = v;
  }

  for (const tok of compTokens) {
    const name = ['component', ...tok.path].join('/');
    const figmaType = mapType(tok.type);

    let variable = findVar(name, compCol.id);
    if (!variable) {
      const allVars3 = await figma.variables.getLocalVariablesAsync();
      variable = allVars3.find(v => v.name === name && v.variableCollectionId === compCol.id);
    }
    if (!variable) {
      variable = figma.variables.createVariable(name, compCol, figmaType);
    }

    const cm = compCol.modes.find(m => m.name === compModes[0]) || compCol.modes[0];
    const modeId = cm.modeId;
    const val = tok.value;

    if (typeof val === 'string' && val.startsWith('{')) {
      const refPath = refToPath(val);
      const refVar = varCache[refPath];
      if (refVar) {
        variable.setValueForMode(modeId, {
          type: 'VARIABLE_ALIAS',
          id: refVar.id
        });
      } else {
        logUI(`  ⚠ Ref not found: ${refPath}`, 'err');
      }
    } else if (figmaType === 'COLOR') {
      variable.setValueForMode(modeId, hexToRgba(val));
    } else if (figmaType === 'FLOAT') {
      variable.setValueForMode(modeId, Number(val));
    } else if (figmaType === 'STRING') {
      variable.setValueForMode(modeId, String(val));
    }

    varCache[name] = variable;
    compCount++;
  }
  logUI(`✓ Imported ${compCount} component tokens`, 'ok');

  // ============ DONE ============
  const total = primCount + semCount + compCount;
  logUI('━━━ DONE ━━━', 'ok');
  logUI(`Total: ${total} variables across 3 collections`);
  figma.notify(`✓ Imported ${total} variables`, { timeout: 3000 });
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'import') {
    try {
      await importTokens(msg.primitive, msg.semantic, msg.component);
    } catch (err) {
      logUI(`✗ Error: ${err.message}`, 'err');
      console.error(err);
      figma.notify(`Error: ${err.message}`, { error: true });
    }
  }
};
