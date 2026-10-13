# Step 17 · Developer handoff

> **Phase 8 · Delivery** — role: Product designer + Delivery lead
> **Output:** `09-handoff/` → **Gate 8**
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- The Figma file · `07-claude-design-input/master-spec.md` · `03-research/05-features-sitemap.md` · `06-user-flows.md` · `05-tokens/` · `02-assets/`

## Stop if

- Step 16 still has open dead ends the user has not accepted.

## Part 1 — tidy the Figma file

1. **Pages & sections by flow**; a cover page (first page) with project name, date, status and a short page guide; a page for components and one for the foundation board. `Screens Backup` stays last and is labelled "designer only — do not build from it".
2. **Names:** every frame `S## · Name`; no `Frame 123`, `Group 45` in components or screens; component layers named clearly.
3. **Component descriptions:** one line of purpose + a `Don't use:` line (when to use something else), on every master.
4. **Dev Mode:** check measurements read as variables, not raw numbers. **"Ready for dev" cannot be set through MCP** — do not try a workaround: list it as a user task ("select the screen frames → Dev Mode → Mark as ready for dev") in the turn report and in `dev-handoff.md`.

## Part 2 — write `09-handoff/dev-handoff.md`

```
# <Project> — developer handoff
## Links              Figma file · prototype start points per flow
## Platform & frame   device, frame size, orientation, modes, UI language
## Tokens             how the 3 JSON files map to code; Light/Dark switch
## Screens            per S##: purpose · states · behaviour · validation rules · edge cases
## Components         list with variants/states; which are private
## Flows              per FL##: steps and branches (link to prototype)
## Assets             static files included here; runtime assets and their size/ratio rules
## Accessibility      touch targets: any control under 44 pt (iOS) / 48 dp (Android) keeps its look but gets a 44/48 tap area; contrast already checked
## Open questions     anything still an ASSUMPTION or unanswered
```

## Part 3 — collect the package in `09-handoff/`

- `dev-handoff.md` · `master-spec.md` (copy) · `tokens/` (the 3 JSON files) · `assets/`:
  - `logo/` — the logo **and the dark-surface logo** if the app has Dark mode or dark headers (say which file goes on which surface);
  - `icons/` — the icons actually used: the union of icon names in `08-final-ui/final-ui.html` and the icon instances on the `Screens` and `Components` pages (incl. default icons inside component properties), copied from `02-assets/icons/` with the icon licence;
  - `illustrations/` — static art only (3D illustrations, badges) per the master-spec image slots; photos and products are runtime content and stay out;
  - `fonts/` — only the weights used, with the font licence (if the font ships with the app).
- Only what this project uses — no unused icons, no sample files.
- **Measure the package:** icons packaged = icons used (0 extra, 0 missing) · `tokens/` and `master-spec.md` identical to their sources · 0 runtime sample images.
- **Open questions also carry Step 15 leftovers:** values with no token (e.g. a control size, a pressed opacity, transparent gradient stops) and states skipped in Step 13.

## Output — in the turn report

```
Figma tidy: unnamed layers left 0 · descriptions <n>/<n> · Ready for dev: user task
09-handoff/: <file list>
Open questions carried to devs: <n>
```

## Check before handing back

- [ ] A developer understands it on first open.
- [ ] All static assets included (incl. the dark-surface logo if there is one); nothing unused — measured.
- [ ] Controls under 44 pt / 48 dp are listed with their tap area.
- [ ] Every open question is written down, not hidden.

## End of turn

End-of-turn block → **GATE 8**: every flow runs and the package is complete. On approval record Gate 8 = `APPROVED` in `_progress.md`. Only then hand it to developers.
