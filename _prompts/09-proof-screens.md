# Step 09 · Five proof screens

> **Phase 4 · Visual direction** — role: Senior UI designer
> **Output:** `04-proof-ui/proof-5-screens.html` → **Gate 4**
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `03-research/02-brief-analysis.md` (frame lock, modes) · `05-features-sitemap.md` · `06-user-flows.md`
- `03-research/07-palette.md` (LOCKED) · `08-moodboard.md` (style, layout patterns, icons, font)
- `02-assets/logo/` · `02-assets/icons/` · `02-assets/fonts/` · `02-assets/moodboard/screens/`

## Stop if

- Palette, icons or font are not LOCKED.

## Do

1. **Pick 5 screens that test different things** — and say why each:
   e.g. home/dashboard (hierarchy) · list (repetition, density) · detail (imagery, long content) · form (inputs, errors) · success / empty (feedback). Prefer the key screens that got references in Step 08. **Do not stop to ask** — build, and list the 5 with reasons in the report; the user can swap any of them at Gate 4.
2. **Build all 5 in ONE HTML file**, each in a frame of the locked size (e.g. 390 × 844), side by side, labelled `S## · Name`.
   - Follow each screen's **reference layout** from Step 08 for content and structure; follow the **style** from Step 08 for the look.
   - **Real content** from the domain — real-looking names, prices, dates. No lorem ipsum.
   - Real logo file, icons only from the locked source, the locked font.
   - **Photos and product images are placeholders**: a block at the real size and ratio, labelled with what goes there (e.g. `Venue photo`). Do not draw fake photos. The real images are generated in Step 12 from prompts Claude writes.
3. **Code rules** (Step 10 reads this file, so they are strict):
   - Every colour, spacing, radius, shadow, font size / weight / line height is a **CSS variable in `:root`** — named by role, e.g. `--color-surface-card`, `--space-4`, `--radius-md`, `--shadow-card`, `--font-size-body`.
   - Clean **semantic class names** (`.card`, `.btn-primary`, `.list-row`). **No inline styles.** No hard-coded hex outside `:root`.
   - If Dark mode is in scope: a `[data-theme="dark"]` block that changes **only colour variables**, and a toggle to preview it.
   - Show at least one interactive state per screen where it matters (pressed / selected / error / disabled).
4. **Self-review** against the moodboard before handing back: is it flat? Is the hierarchy clear? Does it look like the references? Fix before showing.
5. **Iterate** on feedback — if the style is off, adjust and regenerate the same file (no `-v2`). If the fix changes the palette or the moodboard style (not just this HTML), update `03-research/07-palette.md` or `08-moodboard.md` first, mark that step `done (updated)` in `_progress.md` with what changed, then regenerate. This 08 ↔ 09 loop is normal before Gate 4.

## Check before handing back

- [ ] 5 screens, different jobs, reasons written.
- [ ] Looks like the moodboard — not flat, clear depth and hierarchy.
- [ ] Palette, icons, font and logo exactly as locked.
- [ ] All values in `:root`; no inline styles; no stray hex.
- [ ] Text contrast still passes AA — re-computed by script on the real colour pairs used.
- [ ] Script check: no hex / rgb value outside `:root` (and the dark block); no `style="` attribute. Report the counts (must be 0).

## End of turn

End-of-turn block → **GATE 4**: the user approves the look. Record Gate 4 = `APPROVED` in `_progress.md`. Stop. Nothing in `05-tokens/` or `06-figma-plugins/` is touched before this gate.
