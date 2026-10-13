# 03 · Business & market

**Date:** 2026-10-10
**Step:** 03 · Business, market, competitors & North Star — Phase 2 · Market & users
**Reads:** `01-brief/00-pika-brief.png` · `03-research/02-brief-analysis.md` (Gate 1 approved, frame locked)
**Web access:** available — competitor facts are sourced, each with a link. Anything not sourced is marked `ASSUMPTION`.

---

## Business model (one sentence)

Pika's customers pay the venue **at the counter** for court hours — by the hour at $18 off-peak or $36 peak, or in advance as a prepaid block of hours — and the app makes the chain money not by taking payment but by **moving booking off the phone and onto self-service**, which cuts staff time (brief ¶3), fills the 54 % of weekly slots that are off-peak, and uses points and tiers to make a regular player book at a Pika venue rather than a competitor's.

The key structural fact: **the app is a cost-saving and retention tool, not a revenue channel.** No money moves through it. Every design decision should be judged against staff time saved and bookings retained, not against conversion to payment.

---

## Domain operations & stakeholders

### How the business runs today vs with the app

| Stage | Today (from the brief) | With the app |
|---|---|---|
| Discover availability | Customer calls, messages or asks staff; staff checks a sheet or system | Customer opens the court × time grid for a venue and date |
| Choose | Staff reads out what is free; customer picks | Customer picks the cell — court and time — themselves |
| Confirm | Staff writes it down, tells the customer | App confirms instantly; push + in-app record |
| Remind | Staff may or may not call | Automatic reminder before the slot |
| Play | Customer turns up | Same |
| Pay | At the counter | **At the counter — unchanged** |
| Points | "difficult for us to manage … customer reward points efficiently" (¶3) | Credited automatically after the session is played (A02) |
| Cancel | Phone call to staff | In-app, free up to 24 h before |

The brief's own complaint is the whole of row 1–4: *"This process sometimes takes time and makes it difficult for us to manage available time slots, fixed bookings, membership packages, and customer reward points efficiently."* Four of those five named pains live in this table.

### Stakeholders

| Stakeholder | What they need from the product | In scope for v1? |
|---|---|---|
| **Customer / player** | See what is actually free, book in under a minute, know where to go and what it costs, not lose their regular slot, see points add up | **Yes — the only app being designed** |
| **Front-desk staff** | Fewer calls; a booking list they can trust; a customer who already knows the price and the court number | Indirectly — the app's job is to reduce their load. No staff UI in v1 (Gate 1) |
| **Venue manager** | Off-peak slots filled; no-shows down; members retained | Indirectly — through tier benefits and reminders |
| **Chain owner / client** | Fewer staff hours on booking; a reason for players to stay with Pika | The North Star below is written for this stakeholder |
| **Gift / stock handler** | Knows which gift to hand over and to whom | Redemption screen must produce something staff can verify at the counter — `ASSUMPTION`: a redemption code or QR |

### Rules that shape the UI

| Rule | Where it comes from | UI consequence |
|---|---|---|
| Payment is at the counter, never in the app | Gate 1 | No card entry, no stored cards, no PCI surface. **But**: every confirmation must state the amount due and that it is paid at the venue |
| Free cancellation up to 24 h before | Gate 1 | The 24 h boundary must be visible on the booking detail, not buried in terms. After the boundary, the cancel action changes state rather than disappearing |
| Points credited after play, not at booking | A02 | A "pending points" state exists on every upcoming booking |
| Account registration and login | Brief bullet 1 | Personal data is collected → a privacy policy and terms screen are needed (`ASSUMPTION`, Q-T2 unanswered) |
| No age restriction stated | — | `ASSUMPTION`: no age gate in v1 |

---

## Competitors

Five products, three categories: consumer marketplace, club-management software with a member app, and local Vietnamese booking apps.

| Competitor | Type | Strengths | Weaknesses | UX patterns worth using | Link |
|---|---|---|---|---|---|
| **Playtomic** | Direct — consumer app for padel & pickleball, the category leader | Booking described as a three-step flow; finds nearby courts; player level system; match-finding connects players; stats and reservation history | Built around a marketplace of many clubs, so a single chain's identity and membership benefits are diluted; level/match features add weight a single-venue booker does not need | The **three-step booking promise** is the bar for speed. Reservation history as a first-class screen. A player profile that accumulates something over time | [playtomic.com](https://playtomic.com/) |
| **CourtReserve** | Indirect — club management SaaS with a branded member app | Reservation rules per member type and court type; **prepaid packages for court time with automated balance management**; flexible membership tiers with benefits and restrictions; reminders and confirmations explicitly aimed at reducing no-shows; branded app option | Member app is a front end on an operations system — dense, admin-shaped; identity is the software vendor's unless the club pays for branding | **Prepaid packages with a visible remaining balance** — direct validation of A05. Reminder/confirmation messaging framed as no-show reduction. Membership tiers carrying booking *restrictions and privileges*, not just discounts | [courtreserve.com/features](https://courtreserve.com/features/) |
| **Playbypoint** | Indirect — club management SaaS, pickleball/tennis/padel | **Waitlists and priority access** as club-configurable features; custom membership tiers with automated renewal; split payments between players; white-label app on iOS, Android and mobile web; check-in through the club app | Payment-centric (Stripe, CardConnect) — most of that surface is irrelevant to a pay-at-counter chain; club-first, not player-first | **Waitlist + priority access** is exactly the pattern for a chain where 46 % of slots are peak — the answer to Q-F6 if the client wants it. **Check-in** is a pattern worth stealing for the pay-at-counter moment | [playbypoint.com](https://www.playbypoint.com/) |
| **Champick: Đặt sân** | Direct — Vietnamese pickleball booking app | Courts on a map; view schedule → pick slot → pay in app; booking history and status; direct messaging with court owners; events, mini games, tournaments; DUPR skill-rating link; users upload transfer receipts to court owners | Too few ratings on the App Store to show a score — unproven; community/event features crowd the core booking job; the "upload a transfer receipt" flow shows how clumsy payment is when it is bolted on | **Map-first venue discovery** for a 6-venue chain. The receipt-upload workaround is an argument *for* Pika's cleaner pay-at-counter stance, not against it | [App Store](https://apps.apple.com/us/app/id6720738960) |
| **ALOBO — Quản lý sân thể thao** | Indirect — Vietnamese sports-venue management app | Local-market incumbent for venue management | Operator-facing; little evidence of a strong player-side experience — **`ASSUMPTION — not verified in depth`**, only the App Store listing was found | Confirms the local market is served by operator tools rather than player-first products — the gap Pika can take | [App Store](https://apps.apple.com/vn/app/id6479625204) |

---

## Category patterns

Things users will expect because the category already does them. Breaking one of these costs usability; following them costs nothing.

| # | Pattern | Evidence |
|---|---|---|
| C01 | **Bottom tab bar, 4–5 items** | Every moodboard reference uses one; standard for iOS consumer apps |
| C02 | **Date strip across the top of the availability view** | Hydration and wellness references in the moodboard; universal in booking products |
| C03 | **Booking history as a first-class screen**, split upcoming / past | Playtomic (reservation history), Champick (booking history and status) |
| C04 | **Confirmation screen + push, then a retrievable record** | CourtReserve's confirmations and reminders; A07 |
| C05 | **A reminder before the session, framed as no-show reduction** | CourtReserve states this purpose explicitly |
| C06 | **Venue discovery by map or distance** | Playtomic ("courts near you"), Champick (map) |
| C07 | **Prepaid balance shown as a remaining quantity, not a cash amount** | CourtReserve's package balance management; fits A05 — "12 hours left", not "$216 left" |
| C08 | **A profile that accumulates something** — level, points, tier | Playtomic levels; the brief's own points and tiers (bullets 6, 8) |
| C09 | **Price visible before committing** | Universal; and here it carries real weight, since $18 vs $36 is a 2× difference |

---

## Gaps & opportunity

Three things competitors do badly that Pika can win on. Each is a design brief, not a slogan.

### G01 · Nobody designs for the pay-at-the-counter moment

Every competitor treats payment as something the app swallows: Stripe and CardConnect at Playbypoint, in-app payment at Champick — and when it does not fit, Champick's users resort to **uploading a transfer receipt to the court owner**. Pika's constraint is the opposite: no payment at all. Instead of hiding that, the app can make the counter moment smooth — the confirmation states the exact amount due, the booking card carries it, and arriving at the venue means showing one screen. **This is the product's sharpest differentiator and it comes free with the constraint the client already set.**

### G02 · Club software gives members an admin screen, not a player screen

CourtReserve and Playbypoint are operations systems first; the member app inherits that shape — member types, reservation rules, billing. Pika has no operations burden to carry (no admin side, no payments), so the player screen can be genuinely player-shaped: what is free tonight, at my venue, on my court, at what price.

### G03 · Off-peak is the chain's unsold inventory and no competitor merchandises it

52 of 112 weekly slots per court are peak; **54 % are off-peak** and priced at half. None of the competitors surfaces "cheaper now" as a design idea — their price display is neutral. Pika's grid can carry the price difference visually, so off-peak reads as an offer rather than a leftover. Combined with a tier multiplier, this is the one place where the app can measurably move revenue instead of only saving cost.

---

## North Star & supporting metrics

**North Star: self-service bookings completed per active member per month.**

"Completed" = the session was played, not merely booked — which matches how points are credited (A02) and makes the metric immune to no-show inflation. "Self-service" = made in the app without staff. "Per active member per month" normalises for the chain growing, so the number says whether the *product* works, not whether marketing worked.

It is the right North Star because it is the only number that rises when, and only when, all three parties win at once: the customer got a court they wanted, staff did not touch the booking, and the venue earned the hour.

| Supporting metric | What it tells the client | Why it is not the North Star |
|---|---|---|
| **Share of all bookings made in the app** (vs phone, message, walk-in) | Direct answer to Q-B1 — how much staff load actually moved | A ratio, so it can rise while total bookings fall |
| **Off-peak fill rate** (off-peak slots booked ÷ off-peak slots open) | Whether G03 is working — the only metric tied to new revenue rather than saved cost | Measures inventory, not product value to a member |
| **No-show rate** | Whether reminders (C05) and after-play points (A02) are doing their job | A hygiene metric; it should fall, but a low number alone proves nothing |
| **12-week member retention** (booked in week 1, still booking in week 12) | Whether tiers and points create the habit the brief wants | Too slow to steer design decisions week to week |

`ASSUMPTION`: no baseline exists for any of these, since the client has no product document (brief ¶7) and no existing scheme (Q-U3 default). The first 8 weeks after launch set the baseline.

---

## Design implications

1. **Because no money moves through the app, the confirmation screen is the most important screen in the product** — it must state the amount due, that it is paid at the counter, which venue, and which court. If one screen is over-designed in Step 09, it is this one.
2. **Because 54 % of slots are off-peak and priced at half, price belongs inside the grid cell, not on a later screen** — the $18 / $36 difference has to be visible at the moment of choosing, or the chain's only revenue lever is invisible.
3. **Because the user picks the court (Gate 1) and there are 6 courts × 16 slots, the availability grid is the hardest layout in the product** — courts as fixed rows, time as a horizontally scrolling axis, 390 pt wide. Step 09 must prove this screen works before anything else is designed.
4. **Because competitors promise three-step booking (Playtomic), four steps is the ceiling here** — venue, date+time, court, confirm. Any fifth step has to justify itself.
5. **Because points are credited after play (A02), every upcoming booking carries a pending state** — My Bookings needs Upcoming / Past, and the past item is where points land. This turns history into a reward surface rather than a receipt drawer.
6. **Because a prepaid package is a balance of hours (A05, validated by CourtReserve), the Membership screen leads with "hours remaining", not with money** — and the booking flow must show when a booking will draw on that balance instead of cash.
7. **Because tiers are earned over a rolling 12 months and the top tier takes a twice-weekly player ~9 months, progress has to be visible every time the user opens the app** — a static badge will not sustain a nine-month goal; the profile needs a progress indicator with the next threshold named.
8. **Because the chain has 6 venues and players keep to a home venue (Q-U1 default), the home screen opens on the user's usual venue rather than a venue list** — discovery exists for the newcomer (A08) but must not tax the regular.

---

## Assumptions

| # | Assumption | Basis |
|---|---|---|
| A14 | Gift redemption produces a code or QR the counter staff can verify | No redemption mechanism is described anywhere in the brief; something must bridge app and counter |
| A15 | No age gate or minor-specific handling in v1 | Not mentioned in the brief; Q-T2 unanswered |
| A16 | A privacy policy and terms screen are required because accounts are created | Brief bullet 1 implies personal data; Q-T2 unanswered |
| A17 | ALOBO is operator-facing with a weak player side | **Not verified in depth** — only an App Store listing was found. Lower confidence than the other four competitors |
| A18 | No baseline exists for any North Star or supporting metric | Brief ¶7: "we do not have a detailed product document yet" |
| A19 | Off-peak is 54 % of open slots (112 − 52 of 112) | Computed from the user's own peak definition in Gate 1, not stated by the client |
| A20 | Players keep to one home venue | Q-U1 default, accepted by the user; not verified with real customers |

Carried from Step 02 and still in force: A01, A02, A03, A04-R, A05, A06, A07, A08, A09, A10, A11, A12, A13.
