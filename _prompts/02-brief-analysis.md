# Step 02 · Brief analysis & client questions

> **Phase 1 · Brief** — role: Product Manager / Business Analyst
> **Output:** `03-research/02-brief-analysis.md` → **Gate 1**
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `01-brief/` (all of it) · `03-research/01-intake.md`

## Stop if

- `01-intake.md` does not exist or the echo-back was not confirmed → go back to Step 01.

## Do

1. **Split the brief into three lists**, every line with a **verbatim quote** from the brief and where it is (file · page / line):
   - **PRESENT** — stated clearly.
   - **MISSING** — a product like this needs it, the brief does not say it (users, roles, payment, languages, offline, admin side, content source…).
   - **UNCLEAR** — stated, but can be read two ways. Give both readings.
2. **Assumptions.** For every MISSING / UNCLEAR point you must move past, write one `ASSUMPTION A##` — what you assume, why it is the safest default, and what changes if it is wrong.
3. **Client questions.** Only questions the **client** can answer (business, users, content, priorities) — never design questions you should decide yourself.
   - Group them: Business · Users · Features · Content & data · Brand · Technical.
   - Each question: why it matters + the default you will use if there is no answer.
   - Tag `[BLOCKER]` only when work after a named step cannot continue without it.
4. **Lock the frame.** Propose, with one-line reasons from the brief:

   | Decision | Proposal | Reason / quote |
   |---|---|---|
   | Product type | e.g. customer mobile app | |
   | Platform | iOS / Android / both / web | |
   | Primary device + device order | | |
   | Frame size | e.g. 390 × 844 | |
   | Orientation | portrait / landscape / both | |
   | Modes | Light only / Light + Dark | |
   | Language(s) of the UI | | |

## Output — `03-research/02-brief-analysis.md`

```
# 02 · Brief analysis
## PRESENT        table: point · verbatim quote · source
## MISSING        table: point · why it matters
## UNCLEAR        table: point · quote · reading A · reading B
## Assumptions    A01… : assumption · reason · impact if wrong
## Client questions   grouped; [BLOCKER] tags; default if unanswered
## Frame lock     the table above — marked PROPOSED until the user approves
```

## Check before handing back

- [ ] Every PRESENT line has an exact quote — no paraphrase dressed as a quote.
- [ ] Nothing from outside the brief appears without `ASSUMPTION`.
- [ ] No design question sent to the client.
- [ ] Platform, frame, orientation and device order all have a proposal.

## End of turn

End-of-turn block → **GATE 1**: the user answers the questions (or accepts the defaults) and approves the frame lock. Update the file with the answers, change PROPOSED → LOCKED, record Gate 1 = `APPROVED` in `_progress.md`, then stop.
