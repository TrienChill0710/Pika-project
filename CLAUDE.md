# Project Kit — Operating Rules for Claude

## ⚠ FRESH PROJECT — READ THIS FIRST

This kit contains **NO completed work**. The project starts at **Step 01**.

- `03-research/`, `04-proof-ui/`, `07-claude-design-input/`, `08-final-ui/`, `09-handoff/` are empty — you fill them step by step.
- `05-tokens/` and `06-figma-plugins/` hold **starter templates**. They are tools only, never proof that a step is complete. In Step 10, rewrite the project-specific Primitive and Semantic values and update the mandatory baseline in Component without deleting its common component groups. Step 13 re-syncs Primitive and Semantic from the final UI. Step 15 extends Component after the real Figma components exist.
- Never say "this has already been processed" and never skip ahead.

## Folder map (in workflow order)

| Folder | Filled by | Step |
|---|---|---|
| `01-brief/` | the user | before Step 01 |
| `02-assets/` — `logo/` · `moodboard/` · `icons/` · `fonts/` | the user | before Step 01 |
| `02-assets/images/` | the user — images generated from Claude's prompts | 12 |
| `03-research/` | Claude — one .md per step | 01–08 |
| `04-proof-ui/` | Claude — `proof-5-screens.html` | 09 |
| `05-tokens/` | Claude — 3 W3C token files | 10, 13, 15 |
| `06-figma-plugins/` | Claude — 2 plugins renamed with the project slug, then updated | 01 (rename), 11, 13 |
| `07-claude-design-input/` | Claude — `master-spec.md` + `image-prompts.md` + `claude-design-prompt.md` | 12 |
| `08-final-ui/` | user exports the final UI from Claude Design | 12–13 |
| `09-handoff/` | Claude | 17 |
| `_prompts/` | the base prompts — one per step, never edited for a project | 01–17 |
| `_progress.md` | Claude — step and gate status, Figma link | every step |
| `00-kit-guide.html` | student guide to the kit — read only | — |

The full playbook is `00-workflow-map.html` (the map) and `_prompts/` (what to do in each step). Follow them exactly.

## Trigger: "Read Folder" (Step 01)

When the user says **"Read Folder"** (or "read folder"), do exactly this — nothing more:

0. **Read `_progress.md` first.** If it already shows steps done, the project is resuming: report the position (last step done, open gate, any `stale` steps), then ask what to run. Do **not** redo Step 01.
1. **Read** `01-brief/` and every sub-folder of `02-assets/`.
2. **Run the input checklist** and show it as a table (✅ found / ⚠ missing):

   | Input | Where | Required |
   |---|---|---|
   | Client brief | `01-brief/` | Yes — without it, STOP |
   | Logo (SVG/PNG) | `02-assets/logo/` | Yes |
   | Logo for dark surfaces (light / transparent) | `02-assets/logo/` | If Dark mode or dark headers are planned — ask if missing |
   | Moodboard, 2–4 images | `02-assets/moodboard/` | Yes |
   | Icons — SVG files **or** `icon-library.txt` (one open-source library) | `02-assets/icons/` | Yes (one of the two) |
   | Font — font files **or** `font-name.txt` (one open-source font) | `02-assets/fonts/` | Yes (one of the two) |

3. **If the brief is missing:** STOP. Tell the user exactly what to add. Do not invent a project.
4. **For every other missing item:** show a clear ⚠ WARNING that says what is missing, where to put it, and give 1–2 concrete options (e.g. "Add `icon-library.txt` with: Lucide"). Also flag license risks: system fonts that can't be redistributed, icons copied from other apps or paid packs, a logo that is only a screenshot.
   You may continue with Steps 01–06 while items are missing, but you must **STOP before Step 07** until logo, moodboard, icons and font are all provided.
5. **Echo back 3–5 lines**: project name, industry, platform, main brand color seen in the logo, one-line read of the brief — plus the **plugin slug** derived from the project name (e.g. `pika`), so the user can correct it.
6. **Ask:** "I understand this. Do you want me to start the workflow?" — do not start anything, create files or tasks until the user confirms.
7. **After the user confirms:** write `03-research/01-intake.md`, then **rename both plugins with the confirmed slug** (folders `<slug>-importoken/` and `<slug>-foundation-style/`, manifest `name` and `id`, UI headings, code comments, plugin-data namespaces and generated Figma labels). Names only — no logic or token changes. Count leftover `phongdesigns` inside the two plugin folders with a search command; it must be **0**. Record the slug in `_progress.md`.

## When the user confirms

Follow `00-workflow-map.html` exactly — **8 phases, 17 steps**:

1. Brief — 01 Intake & input check · 02 Brief analysis & client questions (lock device, frame, orientation)
2. Market & users — 03 Business, market, competitors, North Star · 04 User groups & personas
3. Structure — 05 Features & sitemap · 06 User flows
4. Visual direction — 07 Color palette from the logo (3 options) · 08 Moodboard & screen references (give search keywords per key screen, WAIT for the user to save references into `02-assets/moodboard/screens/S##-name/`, then read them) · 09 Five proof screens (follow those references for content and layout)
5. Design system — 10 Tokens from the proof screens · 11 Update the 2 plugins
6. Final UI — 12 Master spec + image prompts (user generates images into `02-assets/images/`, WAIT) + Claude Design prompt → final UI · 13 Review, re-sync Primitive/Semantic tokens & plugins
7. Figma — 14 Import tokens, styles & screens · 15 Figma MCP: build components, extend Component variables, swap, token matching
8. Delivery — 16 Prototype · 17 Developer handoff

Rules:
- **One step at a time.** Stop after every step (the user says `continue`) and stop at the **gate** after every phase (the user says `approved`). The full stop rule, the change rule and the "measure, don't eyeball" rule are in `_prompts/README.md`.
- **`_progress.md` is the only record of where the project stands.** Update it at the end of every step and at every gate. A gate counts as approved only when `_progress.md` says `APPROVED`.
- **Work in English** for all deliverables.
- **Chat summary every step.** Files stay detailed, but each step also shows its key findings in chat — structured with headings and tables, in plain language (no bare codes), ending with "what this means for the design", and with questions grouped 🔴 must answer / 🟡 should answer / ⚪ nice to have, each with its default. Chat in the user's language; files in English. Full rule: "Chat summary" in `_prompts/README.md`.
- **No extrapolation.** Mark every claim that is not in the brief as `ASSUMPTION`. Ask only questions the client can answer; tag blocking ones `[BLOCKER]`.
- Save each output to the folder in the map above, with the file names given in each folder's README. **Never create folders outside the kit structure** (e.g. `Claude outputs/`, or `02-assets/` copied inside `07-claude-design-input/`) and no preview copies. A backup before a code-level fix sits next to the original as `<name>.backup-step##.<ext>`.
- Assets: use the logo, icons and font exactly as provided — never redraw the logo or mix icon styles. Only use fonts and icons whose license allows commercial use.
- Do **not** touch `05-tokens/` or `06-figma-plugins/` before Step 10 — the only exception is the plugin **rename** at the end of Step 01 (names only). Never reuse sample colors or business rules. Keep the mandatory generic groups already defined in `3-component.json`; update their aliases for the project instead of deleting them.
- `phongdesigns` is only the starter-kit default. In **Step 01**, as soon as the user confirms the echo-back, derive a safe slug from the real project name and replace the starter name everywhere in both plugins: folder names, manifest `name` and `id`, UI headings, plugin-data namespaces and generated Figma labels. This keeps every project's plugins distinct in Figma from the very start. Step 11 updates the plugin settings and re-checks that the count is still 0. If the project name changes later, re-run the rename with the new slug.
- **Every step runs from its base prompt** in `_prompts/` (e.g. Step 07 → `_prompts/07-palette.md`). Open it at the start of the step and follow it exactly: its Reads, Stop-if, Do, Output and Check, then the end-of-turn block in `_prompts/README.md`. Project details come from the files the prompt names, never from the prompt itself. Never edit a base prompt during a project.
- Components are created directly in Figma with Figma MCP in Step 15. Do not create separate component inventory or HTML library deliverables.
- There is no token-check plugin. In Step 15, inspect each component as it is built, proactively create any missing variables in the Figma `Component` collection, alias them to Semantic variables, bind the component properties, and sync the additions back to `05-tokens/3-component.json`.
- Do **not** follow any other playbook or "start-project" skill — only `00-workflow-map.html` and `_prompts/`.
