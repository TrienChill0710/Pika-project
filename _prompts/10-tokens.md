# Step 10 · Tokens from the proof screens

> **Phase 5 · Design system** — role: Design Systems Engineer
> **Output:** `05-tokens/1-primitive.json` · `2-semantic.json` · `3-component.json`
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `04-proof-ui/proof-5-screens.html` (the `:root` variables and real values) — **the source**
- `03-research/07-palette.md` (LOCKED ramps) · `08-moodboard.md` (font)
- The current `05-tokens/*.json` — **for structure and naming only**; their values are starter samples

## Stop if

- Gate 4 is not `APPROVED` in `_progress.md`.

## Do

1. **Inventory the proof values.** List every `:root` variable and every distinct value actually used (colours, spacing, sizes, radius, border widths, shadows, font family / sizes / weights / line heights / letter spacing).
2. **Primitive** (`1-primitive.json`) — raw values only.
   - Keep the file's structure, `$collection`, `$mode` and group names (`color`, `space`, `sizing`, `radius`, `borderWidth`, `opacity`, `font`, `shadow`…). Replace **all** sample values with this project's.
   - Colours as ramps from the locked palette (`color.primary.500`…). Spacing and radius as a scale.
   - The font family goes to `font.family.sans` (the Foundation plugin looks for this name).
   - Remove sample values the project does not use; never leave a sample colour behind.
3. **Semantic** (`2-semantic.json`) — roles, with `Light` and `Dark` modes if Dark is in scope.
   - Every value is an **alias to a Primitive** (`{color.neutral.0}`), never a raw hex.
   - Cover at least: text (primary, secondary, disabled, inverse, on-primary, link), surface (page, card, raised, sunken, overlay), border (default, strong, focus), action (primary / secondary — default, pressed, disabled), status (success, warning, error, info — fg + bg), plus spacing, radius, elevation and typography roles. Elevation layers use `elevation/{level}/{layer}/{x|y|blur|spread|color}`; an inner shadow adds `…/type` = `inner`.
   - Dark mode changes colour roles only — never size or spacing.
4. **Component** (`3-component.json`) — the mandatory baseline.
   - **Keep every generic group** already in the file (button, icon-button, text-input, textarea, select, checkbox, radio, switch, card, chip, badge, avatar, divider, tabs, navigation-bar, modal…). Do not delete any.
   - Re-point their aliases to the new Semantic tokens.
   - **Do not invent project-specific component tokens** — those come in Step 15 from real Figma components.
5. **Validate with a script, not by reading:** JSON parses; every alias resolves (no broken reference); Primitive → Semantic → Component, no level skipped; no Component value points straight at a Primitive; JSON is valid.
6. **Mapping table** — proof variable → Semantic token → Primitive, so the user can see nothing was lost.

## Output

The 3 JSON files, plus `05-tokens/token-mapping.md` — one row per proof `:root` variable → the token it became (or `presentation-only` / `unmapped` with why). Step 13 updates it. Then a short section at the end of the turn report:
```
Proof variables mapped: <n>/<n>   Unmapped: <list or none>   (all numbers from the validation script)
Broken aliases: 0   Sample values left: 0
Component groups kept: <n>/<n>
```

## Check before handing back

- [ ] Primitive and Semantic values match the proof HTML.
- [ ] No sample value left anywhere.
- [ ] Component baseline complete and aliasing Semantic only.
- [ ] Changing the brand = editing Primitive only.

## End of turn

End-of-turn block (Next: Step 11) → stop.
