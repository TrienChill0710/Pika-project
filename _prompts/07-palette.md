# Step 07 · Colour palette from the logo — 3 options

> **Phase 4 · Visual direction** — role: Senior UI designer
> **Output:** `03-research/07-palette.md` + `03-research/07-palette-options.html`
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `02-assets/logo/` (the real file) · `03-research/02-brief-analysis.md` (modes, brand wishes) · `03-business.md` · `04-users.md`

## Stop if

- Gate 3 is not `APPROVED` in `_progress.md`.
- **Any of logo, moodboard, icons or font is still missing** in `02-assets/` → STOP, list what is missing (same wording as Step 01). This is the hard stop from `CLAUDE.md`.

## Do

1. **Read the logo.** Extract its colours as exact hex (from the SVG code if SVG; sampled if PNG — say which). Name the role of each (main mark, text, accent). Never alter the logo.
2. **Brand read** — 2–3 lines: what the logo colours say (calm, energetic, premium…) and whether that fits the users and business from Steps 03–04.
3. **Build 3 palette options**, each clearly different in direction (e.g. A = logo-faithful, B = softer / more neutral, C = bolder contrast). Each option contains:

   | Role | Hex | Ramp |
   |---|---|---|
   | Primary | from the logo | 50 → 900 (9–10 steps) |
   | Secondary | | ramp |
   | Accent | | ramp |
   | Neutral | | 0 → 1000 ramp for text, surfaces, borders |
   | Success · Warning · Error · Info | | each with a light background tint |

   If Dark mode is in scope (Step 02), show the Dark surfaces and text for each option too.
4. **Contrast (WCAG AA)** — **compute every ratio with a script** (WCAG relative-luminance formula), never estimate. For every option, a table with the real ratios:
   text on background (≥ 4.5:1) · large text (≥ 3:1) · primary button label on primary (≥ 4.5:1) · border/icon on surface (≥ 3:1) · status text on its tint. Any pair that fails is shown in red with the fix.
5. **Preview HTML** `07-palette-options.html`: the 3 options side by side; for each — swatches with hex, the ramps, and a small sample (header, card, primary + secondary button, input, status chips) in Light (and Dark if in scope). Self-contained, no external files except the project font if available.
6. **Recommend one** option in one line, then **ask the user to pick**.

## Output

`03-research/07-palette.md`:
```
# 07 · Palette
## Logo colours          (hex · role · source SVG/sampled)
## Brand read
## Option A / B / C      (roles, ramps, contrast table)
## Recommendation
## LOCKED                (filled after the user picks: option + any changes)
```
`03-research/07-palette-options.html` — the side-by-side preview.

## Check before handing back

- [ ] The primary of every option traces back to a logo colour.
- [ ] Contrast computed by script — real numbers; failures shown, not hidden.
- [ ] The 3 options are genuinely different, not three tints of one idea.
- [ ] Nothing is locked until the user picks.

## End of turn

End-of-turn block + "Which option — A, B or C (and any change)?" → stop. After the pick: fill LOCKED, then Next: Step 08.
