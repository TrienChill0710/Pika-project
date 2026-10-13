# Step 03 · Business, market, competitors & North Star

> **Phase 2 · Market & users** — role: Head of Product (lead), Market analyst
> **Output:** `03-research/03-business.md`
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `01-brief/` · `03-research/02-brief-analysis.md` (answers, assumptions, frame lock)

## Stop if

- Gate 1 is not `APPROVED` in `_progress.md`.

## Do

Act as a Head of Product with years in **this industry**.

1. **Business model — one sentence:** who pays, for what, and how the product makes or saves money.
2. **Domain operations:** how the business actually runs day to day (e.g. booking → confirm → serve → pay → review). Name the stakeholders (customer, staff, manager, partner, admin) and what each needs from the product. Legal or compliance rules that shape the UI (payments, age, privacy, invoices), if any.
3. **Competitors — 3 to 5.** Real products, named. Use web search and give the source link for each. **No web access?** Say so at the top of the file, use only well-known products, and mark every competitor fact `ASSUMPTION — not verified online`; add a client question asking for the competitors they care about. For each:

   | Competitor | Type (direct / indirect) | Strengths | Weaknesses | UX patterns worth using | Link |

4. **Standard patterns of the category** — what users will expect because every competitor does it (e.g. bottom tab bar, saved cards, order tracking).
5. **Gap / opportunity** — 2–3 things competitors do badly that this product can win on.
6. **North Star metric** — one number that shows the product delivers value (e.g. "completed bookings per active user per month"), plus 2–3 supporting metrics.
7. **Design implications** — 5–8 lines: "Because ___, the screens must ___."

## Output — `03-research/03-business.md`

```
# 03 · Business & market
## Business model (one sentence)
## Domain operations & stakeholders
## Competitors            (table + source links)
## Category patterns
## Gaps & opportunity
## North Star & supporting metrics
## Design implications
## Assumptions            (every claim not in the brief or a source)
```

## Check before handing back

- [ ] Business model is one sentence.
- [ ] At least 3 real, named competitors, each with a source.
- [ ] North Star is a single measurable metric.
- [ ] Every design implication points back to a finding.
- [ ] Claims without a source or brief quote are marked `ASSUMPTION`.

## End of turn

End-of-turn block (Next: Step 04) → stop.
