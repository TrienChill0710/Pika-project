# Step 15 · Figma MCP: components, swap & token matching

> **Phase 7 · Figma** — role: Design Technologist (Figma MCP)
> **Output:** component masters + bound screens in the Figma file · additions to `05-tokens/3-component.json` → **Gate 7**
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## §0 · Project details — read them, don't type them

| | Where it comes from |
|---|---|
| Figma file link | `_progress.md` (ask the user only if it is not there) |
| Page with the imported screens | `Screens` (Step 14) |
| Page for the component masters | `Components` — create it if missing |
| Platform — touch or web/desktop | `03-research/02-brief-analysis.md` · frame lock |
| Frame / content width | same frame lock |
| Icon source | `03-research/08-moodboard.md` · Icons LOCKED |
| Shared components expected | `07-claude-design-input/master-spec.md` · Shared components |
| References | `08-final-ui/final-ui.html` · `05-tokens/` |

---

# TASK — turn the imported screens into real, token-bound components

## §1 · Stop if any of these is false

Check all of them first. If one fails, **stop and say which one** — do not work around it.

- The Figma link opens and the imported screens are on the `Screens` page.
- The 3 variable collections exist (Primitive · Semantic · Component) with **0 broken aliases**.
- The text styles and effect styles exist, and they use the project font (no silent fallback).
- The icons from the locked icon source are in the file as components on the `Icons` page, each flattened to one vector layer named `Vector` (Step 14). If not, create them first from the real SVGs — never redraw.
- A `Screens Backup` page exists (Step 14). If not, duplicate `Screens` now, before any swap. Never edit the backup.

**Never build a component from memory or from a description.** The imported screens are what you rebuild.

## §2 · Source of truth

1. **The imported Figma layers** — geometry, styling, content.
2. `final-ui.html` and `master-spec.md` — only to decide *what* is a component, which states it needs, and to settle anything the layers lost in import.

If the layers and this prompt disagree, **the layers win** — say so in the turn report.

## §3 · Inventory first — then wait

Before building anything, list the components you will build:

- A component = something that repeats across screens **or** has states (button, input, tab, chip, list row, card shell, top bar, bottom tab bar, dialog…).
- **Not** a component: one-off layout, a whole screen section with real content, an image by itself.
- Name by what it is, not where it lives: `List row`, not `Booking row`. One component with properties, not five look-alike components.
- Group them `Group/Name` (e.g. `Button/Primary`, `Input/Text field`, `Navigation/Tab bar`).

Report with the **INVENTORY** block in §7 and **wait for approval.**

## §4 · Build order and batch size

- **Small parts first, then the parts made of them.** Icons, buttons, inputs, chips → list rows, cards → top bar, tab bar, dialogs. A parent must use instances of children that already exist.
- **3–5 components per turn.** One component always comes with **all** its states — never half now, half later.
- Split evenly: 11 components = 4·4·3, not 5·5·1.

## §5 · Four operations per component — in this order

**1 · Rename.** Import strips names. Name the master `Group/Name` and name its layers clearly (`Label`, `Icon left`, `Container`…).

**2 · Rebuild the auto-layout.** This is the step most often skipped and it causes the most damage. A part lifted out of a screen keeps that screen's widths. Reset it:
- every row, column and gap is auto-layout — no manual positions, no spacer layers;
- each child is **Hug**, **Fill** or **Fixed** on purpose; Fill only inside a parent that has real space to fill;
- a full-width component is built and checked at the locked frame's content width, not stretched across the page.

**3 · Bind tokens.**
- Fill, stroke, radius, spacing, text colour → variables. Every text layer → a **Text Style**, never a local font. Shadows → effect styles.
- A component value goes **Component → Semantic → Primitive**. Never bind straight to a Primitive.
- **A needed Component variable is missing?** Create it in the `Component` collection, alias it to the right Semantic variable, bind it, and add the same entry to `05-tokens/3-component.json`. List every addition in the turn report. If no suitable Semantic variable exists, **do not guess a colour** — report it as missing.
- Icons are instances of the icon components, never pasted paths.

**4 · Add the states.** The screens rarely show them, which is why this step exists.
- **Touch:** `Pressed` · `Disabled`. **Web/desktop:** `Hover` · `Pressed` · `Focus` · `Disabled`. Do not add `Hover` to a touch product.
- Plus the component's own states from the spec: e.g. input `Empty · Filled · Error`, tab `Active · Inactive`, toggle `On · Off`.
- An interaction state and a value are **two properties**, never one list (`State=Pressed` × `Selected=On`).
- Active/selected changes colour and surface — it never swaps the icon for a different icon style.
- A component that nobody can touch has no interaction states — say so in the report.

## §6 · Check each component before the next one

Not at the end of the turn — **after every component.** A mistake found on the first one costs one fix; found on the fortieth it costs forty.

- [ ] Named `Group/Name`; variant properties are clear questions (`Size`, `State`, `Selected`) with closed value lists.
- [ ] All auto-layout, correct Hug / Fill / Fixed.
- [ ] No hard-coded colour, radius, spacing or font — everything bound.
- [ ] Every required state exists.
- [ ] *(Touch products only)* Touch target at least 44 × 44 (48 in a bar), measured on the frame, not the icon.
- [ ] Overrides still work on an instance: text, icon swap, show/hide.
- [ ] Survives long text and two lines: nothing clipped, nothing overlaps; truncation decided.
- [ ] *(Only if Dark mode is in scope — Step 02 frame lock)* Switching Light/Dark changes colour **only** — if size or spacing moves, something is bound wrong.
- [ ] Disabled is readable and not made with layer opacity; focus ring is visible and not clipped.
- [ ] Parents use instances of children, not copies.
- [ ] Every variant keeps its own text and label (e.g. `Free` / `Booked` / `Full`) — not the same default copied to all variants.
- [ ] Icon instances keep their colour after an icon swap. **Do not re-set a swap to the same icon** — that resets the colour override.

Report any line that fails instead of fixing it quietly.

## §7 · Reports and stops

**Before any master exists**
```
INVENTORY — <n> components found across <n> screens.
Groups: <Group> (<n>), <Group> (<n>) …
Build order: small parts → composites → bars/overlays
Batch plan: <n> turns — <turn 1: …> · <turn 2: …> …
Awaiting approval to start turn 1.
```

**After every turn**
```
TURN <n>/<total> — built <names> (<count>)
Rename · auto-layout · tokens · states: <all done | what failed and why>
Check (§6): <all pass | which line failed on which component>
New Component variables (also added to 3-component.json): <none | list>
Missing Semantic role: <none | component · property>
Layers differed from this prompt on: <none | what>
Next turn: <names>
```

**After every group** — screenshot the group, then:
```
GROUP <Group> COMPLETE — <n>/<n> components. Awaiting approval.
```
and **stop there.**

## §8 · After all masters are approved — swap & match

Only after the whole set is approved:

Work on the `Screens` page only. `Screens Backup` stays untouched — compare against it after every group.

1. **Swap** instances into the screens — **only UI chrome** (buttons, tabs, inputs, bars). **Never swap a card that holds real content**; that loses the data.
2. **Match** every remaining colour, font, radius and shadow on the screens to variables and styles. List anything that has no match instead of forcing one.
3. **Check these known breakages after each flow group** (compare with `Screens Backup`):
   - **Block buttons shrank to hug width** → restore Fill / the backup width.
   - **Single-line text wraps after a text style is applied** (e.g. a price or points label) → set it to auto width.
   - **Bottom sheets / bottom bars float 1–3 px above the frame bottom**, so their shadow shows as a grey line → close the gap to 0.
   - **Icons lost their colour** after a swap → re-apply the colour; never re-set the swap to the same icon.
   - **Status bars lost the time** → swap in the status-bar component.
4. **Expected leftovers — list, don't force.** Transparent gradient stops, the phone-frame presentation shadow, one-off text sizes and tiny radii (2–4 px) often have no token. Count them in the report as "unmatched (expected)"; only real UI values need a match.
5. Screenshot each flow group for review.

## §9 · Final report

1. Every planned component has a master — or which ones don't, and why.
2. The §6 checklist result per component.
3. Every Component variable added, confirmed in both Figma and `05-tokens/3-component.json`.
4. Everything still unbound or unmatched on the screens.
5. What had to be fixed by hand and what MCP got wrong.

End-of-turn block → **GATE 7**. On approval record Gate 7 = `APPROVED` in `_progress.md`. Stop.

## If MCP gets it wrong

It will, sometimes. Fix a few nodes by hand; for the same fix across many nodes, ask for it through MCP in one pass. See the "Figma MCP gotchas" table at the end of `00-workflow-map.html`.
