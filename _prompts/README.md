# _prompts/ — the base prompts, one per step

17 prompts, one for each step in `00-workflow-map.html`. They are the **base**: the same in every copy of the kit, and **never edited for a project**.

## How a project uses them

1. Copy the whole kit for a new project, add the brief and assets, type **Read Folder**.
2. At each step Claude opens `_prompts/NN-….md` and follows it exactly.
3. The prompt never contains project details. It says **which files to read** (brief, earlier step outputs, tokens…), and the project details come from there. The only thing you ever type in is what no file can know — e.g. the Figma link in Steps 14–16.
4. Output goes to the folder the prompt names. Nothing is saved back into `_prompts/`.

If a prompt and `CLAUDE.md` disagree, `CLAUDE.md` wins — and the prompt should be fixed in the base kit, not in a project.

## The prompts

| File | Step | Phase | Output |
|---|---|---|---|
| `01-intake.md` | 01 Intake & input check | 1 Brief | `03-research/01-intake.md` |
| `02-brief-analysis.md` | 02 Brief analysis & client questions | 1 Brief · **Gate 1** | `03-research/02-brief-analysis.md` |
| `03-business.md` | 03 Business, market, competitors, North Star | 2 Market & users | `03-research/03-business.md` |
| `04-users.md` | 04 User groups & personas | 2 · **Gate 2** | `03-research/04-users.md` |
| `05-features-sitemap.md` | 05 Features & sitemap | 3 Structure | `03-research/05-features-sitemap.md` |
| `06-user-flows.md` | 06 User flows | 3 · **Gate 3** | `03-research/06-user-flows.md` |
| `07-palette.md` | 07 Colour palette from the logo | 4 Visual direction | `03-research/07-palette.md` + `07-palette-options.html` |
| `08-moodboard.md` | 08 Moodboard & screen references | 4 | `03-research/08-moodboard.md` |
| `09-proof-screens.md` | 09 Five proof screens | 4 · **Gate 4** | `04-proof-ui/proof-5-screens.html` |
| `10-tokens.md` | 10 Tokens from the proof screens | 5 Design system | `05-tokens/*.json` |
| `11-plugins.md` | 11 Update the 2 plugins | 5 · **Gate 5** | `06-figma-plugins/` |
| `12-master-spec.md` | 12 Master spec → image prompts → Claude Design → final UI | 6 Final UI | `07-claude-design-input/` + `02-assets/images/` + `08-final-ui/final-ui.html` |
| `13-review-resync.md` | 13 Review & re-sync foundation | 6 · **Gate 6** | `05-tokens/` · `06-figma-plugins/` |
| `14-figma-import.md` | 14 Import tokens, styles & screens | 7 Figma | Figma file |
| `15-figma-component.md` | 15 Components, swap & token matching | 7 · **Gate 7** | Figma file + `3-component.json` |
| `16-prototype.md` | 16 Prototype | 8 Delivery | Figma prototype |
| `17-handoff.md` | 17 Developer handoff | 8 · **Gate 8** | `09-handoff/` |

## Rules every prompt shares (written once, here)

### Where the project stands — `_progress.md`

- `_progress.md` at the kit root is the **only** record of progress. Read it before any step; update it at the end of every step and at every gate.
- **"Gate N is approved"** in any prompt means: `_progress.md` shows Gate N = `APPROVED`. Nothing else counts — not a chat message from an earlier session, not the existence of a file.
- A gate becomes `APPROVED` only when the user approves it in words. Record the date and what they changed or decided.
- The Figma link, once given, is written into `_progress.md` and read from there in Steps 15–17.

### When to stop — one rule for the whole kit

- **After every step:** end-of-turn block, then stop. The user says `continue` to run the next step.
- **After the last step of a phase:** stop at the **gate**. The user reviews, answers questions and says `approved`. Only then is the gate recorded and the next phase allowed.
- **Inside a step**, stop only where the prompt says "STOP and wait" (e.g. Step 08 references, Step 12 Claude Design export, Step 14 plugins).
- Never start a step whose "Stop if" is true. Never run two steps in one turn.

### Measure, don't eyeball

Any check that has a number is **computed by running code**, and the number goes in the report: contrast ratios, broken token aliases, leftover sample values, `phongdesigns` count, JSON validity, counts of screens / variables / styles in Figma (through MCP). A check that was not run is reported as `NOT RUN — why`, never ticked.

### Screen codes never change

`S##` codes are assigned in Step 05 and are **permanent**. A new screen takes the next free number; a dropped screen stays in the list marked `removed`. Never renumber — every later file and the Figma file point at these codes. Same for flow codes `FL##`.

### If you change an earlier step

Re-running a step makes the steps built on it out of date. Mark them `stale — re-run` in `_progress.md`, tell the user, and re-open any gate they belong to.

| You change… | These become stale |
|---|---|
| 01 project name (plugin slug) | re-run the plugin rename (count `phongdesigns` / old slug = 0) · Figma file if Step 14 has run |
| 02 brief analysis / frame lock | 03 → 17 (everything) |
| 03 business · 04 users | 05 · 06 and everything after 07 that uses content |
| 05 features & sitemap · 06 flows | 09 (if the proof screens are affected) · 12 → 17 |
| 07 palette | 09 · 10 · 11 · 12 → 17 |
| 08 moodboard, icons or font | 09 · 10 · 11 · 12 → 17 |
| 09 proof screens | 10 · 11 · 12 → 17 |
| 10 tokens · 11 plugins | 12 → 17 |
| 12 spec / final UI · 13 re-sync | 14 → 17 |
| Anything once Step 14 has run | the Figma file must be re-checked (Step 14 Part 2) before continuing |

Small fixes that change no decision (a typo, a clearer sentence) do not make anything stale — say so in the report.

**The 08 ↔ 09 loop is not a staleness event.** While Gate 4 is still open, updating Step 07 or 08 after reviewing the proof screens is the normal way to tune the style: mark the step `done (updated)` with what changed and regenerate Step 09. Nothing after 09 exists yet, so nothing is stale.

### Always

- **One step per turn.** Never start the next step on your own.
- **Stop checks first.** Every prompt starts with "Stop if". If one is true, say which and stop — never work around it.
- **No extrapolation.** Anything not in the brief or a user answer is written `ASSUMPTION`. Questions only the client can answer; blocking ones tagged `[BLOCKER]`.
- **English** for every deliverable.
- **Assets as given.** Logo, icons and font are used exactly as provided; never redrawn, never mixed with another icon style.
- **Save to the named file.** Overwrite it if the step is re-run; never create `-v2`, `-final` copies.

### Chat summary — every step shows its key content in chat

The step file stays complete and detailed. But the user must **not** need to open a long file to understand the step or know what to do. So every step also puts its most valuable content **in the chat**, in the language the user is chatting in (the files stay in English).

**How to write it**

- **Structured and professional, not a one-liner.** Use short headings and tables. Follow the logic of the step, e.g. *understand the business → competitors → opportunities → how we measure success → what this means for the design*.
- **Plain language.** No bare codes (A03, M1, P2, B-A01…). If a code is needed, say what it is in words next to it.
- **Pick what matters.** Keep only the findings that change a decision or the design. Leave source lists, full quotes and long tables in the file.
- **End with "what this means for the design"** — 3–8 concrete points the next steps will apply ("Because ___, the screens will ___").
- **Questions for the user / client go in chat**, grouped by priority, each with the default Claude uses if there is no answer:

  | Group | Meaning |
  |---|---|
  | 🔴 **Must answer** | Blocking — work stops at a named step without it (the `[BLOCKER]` questions + any approval such as the frame lock) |
  | 🟡 **Should answer** | Changes screen content or flows; a default is used otherwise |
  | ⚪ **Nice to have** | Improves realism (real content, logo SVG…); safe to skip |

  Number the questions 1, 2, 3… in chat so the user can reply by number. Map the answers back to the file's own question numbers when recording them.
- A step with no questions says so in one line.

Then comes the end-of-turn block below.

### End-of-turn report — every step ends with this block

```
STEP NN · <name> — done
Files:        <every file written or changed>
Key result:   <2–4 lines, plain language — the full summary is in the chat above>
ASSUMPTIONS:  <n> (listed in the file)   ·   [BLOCKER] questions: <n>
Measured:     <the numbers from code, or NOT RUN — why>
_progress.md: updated
Next:         Step NN+1 · <name> — say "continue" to run it
              (or, at a phase end: GATE n — review the files above and say "approved")
```
