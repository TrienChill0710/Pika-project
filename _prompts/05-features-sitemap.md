# Step 05 · Features & sitemap

> **Phase 3 · Structure** — role: Product Manager + Information Architect
> **Output:** `03-research/05-features-sitemap.md`
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `01-brief/` · `03-research/02-brief-analysis.md` (frame lock) · `03-business.md` · `04-users.md`

## Stop if

- Gate 2 is not `APPROVED` in `_progress.md`.

## Do

1. **Feature catalogue** — every feature, grouped by module:

   | ID | Module | Feature | Goal it serves | Persona | Tier | Source |
   |---|---|---|---|---|---|---|
   | F01 | Account | Sign in with phone | … | … | MVP | brief quote / ASSUMPTION |

   Tiers: **MVP** (launch cannot happen without it) · **MVP+** (soon after) · **P2** (later).
2. **No orphans.** A feature with no goal or persona is either removed or marked `ASSUMPTION` with a question for the client.
3. **Navigation model** for the locked device: tab bar / drawer / sidebar / top nav. Say how many top-level destinations and why (max 5 for a mobile tab bar).
4. **Sitemap tree** — every screen, numbered `S01, S02…`, nested under its parent. Codes are **permanent** once written (see README). On a re-run, keep existing codes; new screens take the next free number; dropped screens stay listed as `removed`. Include system screens: splash, onboarding, sign-in, empty, error, settings, profile, notifications.
5. **Screen list:**

   | S## | Screen | Parent | Features on it (F##) | Tier |

6. **Coverage check:** every MVP feature has at least one screen; important tasks are at most 2 taps from a top-level destination.

## Output — `03-research/05-features-sitemap.md`

```
# 05 · Features & sitemap
## Feature catalogue      (table)
## Navigation model
## Sitemap                (tree, S## codes)
## Screen list            (table)
## Coverage check         (feature → screen, gaps)
## Assumptions
```

## Check before handing back

- [ ] Every feature traces to a goal and a persona.
- [ ] Every feature has a place in the sitemap.
- [ ] S## codes are unique and used the same way everywhere.
- [ ] Nothing important is buried more than 2 levels deep.

## End of turn

End-of-turn block (Next: Step 06) → stop.
