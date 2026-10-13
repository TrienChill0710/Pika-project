# Step 04 · User groups & personas

> **Phase 2 · Market & users** — role: UX researcher
> **Output:** `03-research/04-users.md` → **Gate 2**
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `01-brief/` · `03-research/02-brief-analysis.md` · `03-research/03-business.md`

## Stop if

- `03-business.md` does not exist.

## Do

1. **List every user group** — including behind-the-scenes roles (staff, manager, admin, partner). For each: who they are, what they do in the product, and whether this project designs screens for them (in scope / out of scope — from the brief, or `ASSUMPTION`).
2. **Prioritise:** one **primary** group (the product fails if it fails them), then secondary. One line why.
3. **One persona per in-scope group.** Behaviour, not demographics:

   | Field | Content |
   |---|---|
   | Name + role | |
   | Goal with the product | |
   | Key tasks (top 3) | |
   | Habits & current workaround | how they do it today |
   | Pain points | |
   | Expectations | what "good" feels like |
   | Tech level | low / medium / high + what that means for UI |
   | Context of use | device · place · hurry vs relaxed · one hand? · connection |

4. **Anti-persona** — who the product is **not** for, so scope does not creep.
5. **Design implications** — 5–8 lines: "Because the primary user ___, the UI must ___" (text size, steps per task, language, density…).

## Output — `03-research/04-users.md`

```
# 04 · Users
## User groups      (table: group · role · in/out of scope · priority)
## Personas         (one table each)
## Anti-persona
## Design implications
## Assumptions
```

## Check before handing back

- [ ] No group forgotten — admin / staff roles considered.
- [ ] Exactly one primary group.
- [ ] Personas describe behaviour and context, not just age and job.
- [ ] Every persona links to tasks the product must support.

## End of turn

End-of-turn block → **GATE 2**: the user reviews Steps 03–04, answers open questions and approves. Record Gate 2 = `APPROVED` in `_progress.md`. Stop.
