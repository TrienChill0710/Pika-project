# Step 01 · Intake & input check

> **Phase 1 · Brief** — role: Product Manager / Business Analyst
> **Triggered by:** the user typing `Read Folder`
> **Output:** `03-research/01-intake.md` · both plugins in `06-figma-plugins/` renamed with the project slug
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `01-brief/` — every file (image, PDF, text, markdown). Read images and PDFs page by page, to the last line.
- `02-assets/logo/` · `02-assets/moodboard/` (top level only, not `screens/`) · `02-assets/icons/` · `02-assets/fonts/`
- `06-figma-plugins/` — folder names and `manifest.json` only (for the rename after confirmation)

## Stop if

- `01-brief/` holds nothing but its README → **STOP.** Say exactly: what to add (image, PDF or 5–10 lines of text), where (`01-brief/`), then "type Read Folder again". Do not invent a project. Do not create any file.

## Do

1. **Inventory every input.** For each file: name, type, size, and one line on what it is.
2. **Run the checklist** and show it as a table:

   | Input | Where | Required | Status | Note |
   |---|---|---|---|---|
   | Client brief | `01-brief/` | Yes — STOP without it | ✅ / ⚠ | file names |
   | Logo (SVG/PNG, real file) | `02-assets/logo/` | Yes | | |
   | Logo for dark surfaces (light / transparent version) | `02-assets/logo/` | If Dark mode or dark headers are planned | | ask if missing |
   | Moodboard, 2–4 images | `02-assets/moodboard/` | Yes | | count |
   | Icons — SVG files **or** `icon-library.txt` | `02-assets/icons/` | Yes (one of the two) | | which option |
   | Font — font files **or** `font-name.txt` | `02-assets/fonts/` | Yes (one of the two) | | which option |

3. **Warn for every ⚠** — what is missing, where it goes, and 1–2 concrete options (e.g. `icon-library.txt` → `Lucide`; `font-name.txt` → `Inter`). Say clearly: Steps 01–06 can run, but **Step 07 will not start** until logo, moodboard, icons and font are all in.
4. **Check quality and licence risk** — flag each one found:
   - logo is a screenshot or low-resolution raster (ask for SVG or a large PNG);
   - no logo version for dark surfaces (light or transparent) — ask now, as a client question; a dark-mode logo asked for only at Step 12 delays the handoff;
   - fewer than 2 or more than 4 moodboard images;
   - `icon-library.txt` names more than one library, or SVGs mix outline and filled styles;
   - a system / platform font that cannot be redistributed (e.g. SF Pro, Segoe UI), or a paid font with no licence;
   - icons that look copied from another app or a paid pack.
5. **Echo back** in 3–5 lines, using only what the files say:
   - Project name · Industry · Platform (or `UNCLEAR`) · Main brand colour seen in the logo (hex, approximate) · One-line read of the brief.
   - **Plugin slug** from the project name: lowercase, a–z 0–9 and hyphens only, short (e.g. "Green Café Hà Nội" → `green-cafe`). The user can correct it here.
   Anything guessed is marked `ASSUMPTION`.
6. **Ask:** "I understand this. Do you want me to start the workflow?" — and stop.

## Output — `03-research/01-intake.md`

Write the file only **after** the user confirms the echo-back. Then, in the same turn:

1. **Rename both plugins with the confirmed slug** — names only, never logic or token settings:
   - folders: `phongdesigns-importoken/` → `<slug>-importoken/`, `phongdesigns-foundation-style/` → `<slug>-foundation-style/`
   - `manifest.json` `name` (e.g. `<Project> — Import Tokens`) and `id` (e.g. `<slug>-importoken`)
   - UI headings in `ui.html`, header comments and plugin-data namespaces / generated Figma labels in `code.js` (e.g. `phongdesigns-type` → `<slug>-type`)
   - the plugin names in `06-figma-plugins/README.md`
2. **Measure:** count `phongdesigns` left inside the two plugin folders with a search command (e.g. `grep -ri phongdesigns 06-figma-plugins/*/ | wc -l` — the folder README keeps the word only to explain the starter name) — it must be **0**. Check both manifests are valid JSON.
3. Fill `_progress.md`: project name, plugin slug, Step 01 = done, current position.

**Resuming?** If `_progress.md` already shows steps done, do **not** redo Step 01 — report the current position from `_progress.md` (last step done, open gate, stale steps) and ask what to run.

```
# 01 · Intake
## Inputs found            (the checklist table)
## Warnings                (missing items + licence/quality risks, each with the fix)
## Echo-back               (the confirmed 3–5 lines + plugin slug)
## Plugins renamed        (slug · old → new folder names · "phongdesigns" left: 0)
## Confirmed by user       (date · what they corrected, if anything)
```

## Check before handing back

- [ ] Every row of the checklist has a status; nothing is assumed present.
- [ ] Every ⚠ has what / where / options.
- [ ] Echo-back uses only facts from the files; guesses marked `ASSUMPTION`.
- [ ] No task, file or step started before the user said yes.
- [ ] After yes: both plugin folders and manifests use the slug; `phongdesigns` left inside the two plugin folders = 0 (counted, not eyeballed); plugin logic unchanged.

## End of turn

Echo-back + question → stop. After the user confirms: write the file, rename the plugins, then the end-of-turn block with `Slug: <slug>   "phongdesigns" left: 0` in **Measured** (Next: Step 02).
