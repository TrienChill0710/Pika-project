# Step 13 · Review & re-sync foundation

> **Phase 6 · Final UI** — role: Design reviewer + Design Systems Engineer
> **Output:** updated `05-tokens/` · `06-figma-plugins/` · a clean `08-final-ui/final-ui.html` → **Gate 6**
> From here on, `final-ui.html` is the source of truth for screens, Primitive / Semantic tokens and plugin settings.
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `08-final-ui/final-ui.html` · `07-claude-design-input/master-spec.md` · `04-proof-ui/proof-5-screens.html` · `05-tokens/` · `06-figma-plugins/`

## Stop if

- `08-final-ui/final-ui.html` does not exist → remind the user of Step 12 Part 3 and stop.

## Part 1 — review

1. **Coverage table** — every S## and every state in the spec:

   | S## · Screen | In final UI? | States present | Way in (from S## · element) | Missing / wrong |

   **Way in — measure it:** for every screen, find at least one real tap target in `final-ui.html` on another screen that leads to it (button, row, tab, link). A screen reached only through the sitemap has **no way in** — list it as an issue now; Step 16 cannot wire a prototype link to a button that does not exist.

2. **Quality issues**, each with the screen and the exact element: off-style vs proof, broken layout, wrong icon style, wrong font, lorem ipsum, contrast failure, inline style or hex outside `:root`.
   - **Images load without scrolling — measure it:** open `final-ui.html` in a headless browser, wait, and **without scrolling** count `<img>` elements that have not loaded (`naturalWidth = 0`) and any `loading="lazy"`. Both must be **0**. If not, replace `loading="lazy"` with `loading="eager"` in the file (a small code-level fix — keep a backup as `final-ui.backup-step13.html`, list it) and measure again. Report `Images loaded without scrolling: <ok>/<total>`.
3. **How to fix:** for each issue, one precise note the user can send back to Claude Design (with a screenshot of the exact area). Small code-level fixes (a wrong variable, a stray hex) you may fix directly in `final-ui.html` — list every one.
4. **Stop and wait** if anything needs a Claude Design rebuild. Re-review after the new export.

## Part 2 — re-sync (only when the review is clean)

5. **Tokens:** read the final `:root` and real values. Run the same validation script as Step 10 afterwards and report its numbers. Update Primitive and Semantic so they match the final UI — same rules as Step 10 (aliases only, no sample values, Dark changes colour only). Report every value that changed from Step 10 and why.
6. **Component baseline:** keep every generic group in `3-component.json` and fix its aliases if Semantic names changed. **Do not create project-specific component tokens** and **no component documentation file** — components are built in Figma in Step 15.
7. **Plugins:** re-check both plugins against the updated tokens (token names, font, shadows). Update settings only.

## Output — in the turn report

```
Screens: <n>/<n> present   States: <n>/<n>   Issues open: <n>
Screens with a way in: <n>/<n>   No way in: <list or none>
Images loaded without scrolling: <n>/<n>   loading="lazy" left: 0
Fixed directly in final-ui.html: <list or none>
Tokens changed since Step 10: <list or none>
Broken aliases: 0   Component groups kept: <n>/<n>   Plugins in sync: yes
```

## Check before handing back

- [ ] No screen or state missing.
- [ ] Every screen has a way in from another screen (measured, not assumed).
- [ ] Primitive and Semantic match the final UI.
- [ ] Component baseline intact and ready for Step 15.

## End of turn

End-of-turn block → **GATE 6**. After this gate the UI moves into Figma; token changes later are expensive, so everything about tokens must be right now. On approval record Gate 6 = `APPROVED` in `_progress.md`. Stop.
