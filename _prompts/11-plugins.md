# Step 11 · Update the 2 Figma plugins

> **Phase 5 · Design system** — role: Design Systems Engineer
> **Output:** `06-figma-plugins/` (both plugins updated; already renamed in Step 01) → **Gate 5**
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `06-figma-plugins/<slug>-importoken/` and `<slug>-foundation-style/` — every file (`manifest.json`, `code.js`, `ui.html`). The slug is in `_progress.md` (set in Step 01).
- `05-tokens/*.json` (from Step 10) · `03-research/08-moodboard.md` (font) · `03-research/01-intake.md` (project name)

## Stop if

- Step 10 tokens are missing or have broken aliases.
- The plugin folders still start with `phongdesigns-` → the Step 01 rename was skipped: do it first (item 5 below), say so in the report, then continue.

## Do

1. **Confirm the project slug** from `_progress.md` (set in Step 01). State it. If the project name changed since Step 01, derive the new slug (lowercase, a–z 0–9 and hyphens only, short) and re-run the rename in item 5.
2. **Understand before editing.** Summarise in 3–5 lines what each plugin does and which token names it looks up (e.g. Foundation reads `font/family/sans`, typography roles, shadow tokens). Keep the mechanism — change settings and names, not the logic.
3. **Import Tokens plugin**
   - Check it imports Primitive → Semantic → Component in that order, with modes, and that every token name in the new JSON is handled (e.g. new groups, gradients).
   - Update anything hard-wired to the starter sample.
4. **Foundation & Styles plugin**
   - Point text styles at the new typography tokens and the locked font; effect styles at the new shadow tokens.
     Each shadow layer needs `x · y · blur · spread · color`; add an optional STRING `type` = `inner` for an inner shadow (e.g. a glass rim) — the plugin already turns it into `INNER_SHADOW`, so do not write new shadow code.
   - The Foundation board shows this project's colours, type scale, spacing, radius and shadows — no starter sample left.
5. **Re-check the rename** (done in Step 01) — the slug must be in: folder names · manifest `name` and `id` · UI headings · plugin-data namespaces · generated Figma labels / page and frame names. Any new text you add in items 3–4 uses the slug too. Count `phongdesigns` with a search command inside the two plugin folders (e.g. `grep -ri phongdesigns 06-figma-plugins/*/`), not by eye; the count must be **0**.
6. **Self-test by reading:** manifests valid JSON; no reference to a token name that no longer exists; no leftover sample value.

## Output

`06-figma-plugins/<slug>-importoken/` and `06-figma-plugins/<slug>-foundation-style/`, and in the turn report:
```
Slug: <slug>   "phongdesigns" left: 0
Token names the plugins look up — all found in 05-tokens: yes / <missing list>
Install: Figma → Plugins → Development → Import plugin from manifest → pick each manifest.json
```

## Check before handing back

- [ ] Both plugins read the new tokens and font.
- [ ] No sample data, no starter name left.
- [ ] Mechanism unchanged.

## End of turn

End-of-turn block → **GATE 5**. On approval record Gate 5 = `APPROVED` in `_progress.md`. Stop.
