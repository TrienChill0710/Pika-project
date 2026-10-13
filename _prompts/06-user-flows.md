# Step 06 · User flows

> **Phase 3 · Structure** — role: UX designer
> **Output:** `03-research/06-user-flows.md` → **Gate 3**
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `03-research/04-users.md` · `03-research/05-features-sitemap.md`

## Stop if

- `05-features-sitemap.md` does not exist.

## Do

1. **List the main flows** — every task a persona comes to do (e.g. sign up, search, book, pay, cancel, contact support). Name each `FL01, FL02…`.
2. **For each flow:**

   ```
   FL## · <name>
   User group · Goal · Entry point · Success = <what the user has at the end>
   | # | User does | System does | Screen (S##) |
   Branches:
     Error      → S## · what is shown · how to recover
     Cancel     → S## · where the user lands
     Empty      → S## · what is shown when there is no data
     Loading    → S## / inline
     Confirm    → S## · what is confirmed
   ```
   A branch that does not apply is written "n/a — why".
3. **Every state gets a screen or an inline state.** If a branch needs a screen that is not in the sitemap, **add it to the sitemap** with the next free S## (never renumber) and list it under "Sitemap changes".
4. **Screens outside any flow** (settings, profile, notifications, about…): one short block each — purpose, main content, actions.
5. **Coverage matrix:** rows = S##, columns = FL##, tick where used. Any screen used by no flow and not in point 4 is a question.

## Output — `03-research/06-user-flows.md`

```
# 06 · User flows
## Flows             (one block per FL##)
## Screens outside flows
## Sitemap changes   (new S## added, and why)
## Coverage matrix
## Assumptions
```
Also update `05-features-sitemap.md` if screens were added.

## Check before handing back

- [ ] Every flow states its goal and the problem it solves.
- [ ] Every branch (error, cancel, empty, loading, confirm) has a screen or "n/a — why".
- [ ] No feature and no screen left without a flow or a content block.

## End of turn

End-of-turn block → **GATE 3**: the user approves structure. Record Gate 3 = `APPROVED` in `_progress.md`. Stop.
