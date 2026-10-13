# Step 14 · Import tokens, styles & screens into Figma

> **Phase 7 · Figma** — role: Design Technologist
> **Output:** the project Figma file with variables, styles and every screen
> The user runs the plugins by hand; Claude guides, then checks the result through Figma MCP.
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `05-tokens/*.json` · `06-figma-plugins/<slug>-*/` · `08-final-ui/final-ui.html` · `03-research/08-moodboard.md` (font) · `07-claude-design-input/master-spec.md` (flows, S## list)

## Ask the user for

- The **Figma file link** (a new file named after the project). Write it into `_progress.md` as soon as it is given — Steps 15–17 read it from there.

## Stop if

- Gate 6 is not `APPROVED` in `_progress.md`.

## Part 1 — guide the user, in this exact order

1. **Install the project font** on the computer and confirm Figma sees it. If Figma cannot see it, text styles will silently fall back — stop until fixed.
2. **Install the 2 plugins:** Figma → Plugins → Development → Import plugin from manifest → pick each `manifest.json` in `06-figma-plugins/`.
3. **Import Tokens plugin:** load `1-primitive.json` → `2-semantic.json` → `3-component.json`, **in that order**, then Import.
4. **Foundation & Styles plugin:** Check Status → Generate text styles → Generate effect styles → Generate foundation board.
5. **html.to.design:** import `08-final-ui/final-ui.html` with auto-layout on, onto a page named `Screens`. One frame per screen.

Then: "Say done and paste the Figma link." **Stop and wait.**

## Part 2 — check the file through Figma MCP

6. **Variables:** 3 collections (Primitive · Semantic · Component), modes correct (Light / Dark if in scope), **0 broken aliases**; counts match the JSON files.
7. **Styles:** every text style uses the project font — list any fallback; effect styles exist for every shadow token.
8. **Screens:** every S## from the spec has a frame; name frames `S## · Name`; arrange them in rows by flow (FL##) using sections.
9. **Import damage:** list frames with missing images, broken text, lost icons or layout that collapsed. Fix small ones; list the rest for the user. Check these known html.to.design problems on every frame:
   - status-bar glyphs (battery, signal) imported filled or distorted;
   - status-bar time (e.g. `9:41`) lost on some frames;
   - empty leftover frames (e.g. `Frame 1`) on the `Screens` page — delete them;
   - single-line labels that now wrap.
10. **Icons page — icons as components.** Create a page `Icons` and turn the locked icon set (from `02-assets/icons/`, the real SVGs — never redraw) into components named `icon/<name>`. **Flatten every icon to one vector layer named `Vector`** with the stroke/fill on that layer. Same layer name in every icon = a colour override survives an icon swap. Test it: colour one instance, swap it to another icon, the colour must stay.
11. **Screens Backup page.** Duplicate the finished `Screens` page as `Screens Backup` and never touch it again. Step 15 swaps and matches on `Screens` only; the backup is the reference for widths, labels and layout when something breaks.

## Output — in the turn report

```
Figma file: <link>
Variables: Primitive <n> · Semantic <n> · Component <n>   Broken aliases: 0
Text styles: <n> — font fallback: none / <list>   Effect styles: <n>
Screens: <n>/<n> imported, named and arranged by flow
Import damage: none / <list>
Icons: <n> components on Icons page, 1 vector "Vector" each — swap keeps colour: yes/no
Screens Backup: created, untouched
```

## Check before handing back

- [ ] 3 token collections, 0 broken aliases.
- [ ] Styles use the right font — no silent fallback.
- [ ] Every screen imported and named `S## · Name`.
- [ ] Icons page: every icon is a component with a single `Vector` layer; swap test passed.
- [ ] `Screens Backup` page exists.

## End of turn

End-of-turn block (Next: Step 15) → stop.
