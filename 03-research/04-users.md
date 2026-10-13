# 04 · Users

**Date:** 2026-10-10
**Step:** 04 · User groups & personas — Phase 2 · Market & users → **Gate 2**
**Reads:** `01-brief/00-pika-brief.png` · `03-research/02-brief-analysis.md` · `03-research/03-business.md`

The brief names no users at all — "our customers" (¶2) is the only reference. Every group and persona below therefore rests on the Q-U1 / Q-U2 defaults the user accepted at Gate 1, and is marked `ASSUMPTION`. They are written to be falsifiable: each persona ends with the one observation that would prove it wrong.

---

## User groups

| Group | Role in the product | In scope? | Priority |
|---|---|---|---|
| **The weekly regular** | Books the same slot most weeks, often as a recurring series; the chain's revenue base | **In scope** | **PRIMARY** |
| **The casual social player** | Books irregularly, often at short notice, often evenings and weekends | In scope | Secondary |
| **The group organiser** | Books on behalf of 3 other players — a friend group, a work team, a coach with students | In scope | Secondary |
| **The first-timer** | Has never played at a Pika venue; needs to find a venue, understand pricing, and be reassured | In scope | Secondary — entry path into the other three |
| Front-desk staff | Take payment, hand over gifts, handle anything the app cannot. **The app's purpose is to reduce their workload**, but they get no screens | **Out of scope** (Gate 1: customer app only) | — |
| Venue manager | Watches off-peak fill, no-shows, member retention | **Out of scope** | — |
| Chain owner / client | Buys the design; the North Star is written for them | **Out of scope** | — |
| System administrator | Manages venues, courts, prices, gift catalogue, tiers | **Out of scope** — `ASSUMPTION`: handled in an existing back office or by hand until a v2 admin product exists | — |

**Primary group: the weekly regular.** If the regular cannot keep their slot without calling, nothing in the brief is solved — they are the people generating the repeat phone calls (¶3), the people "fixed bookings" (¶3) exists for, and the only group who will ever accumulate enough points to reach a tier (Step 02 maths: a twice-weekly player needs ~9 months to reach Smash). The casual player is a nice-to-have; the regular is the business.

---

## Personas

### P1 · Minh — the weekly regular **(PRIMARY)** `ASSUMPTION`

| Field | Content |
|---|---|
| **Name + role** | Minh, plays twice a week with the same three people |
| **Goal** | Keep his Tuesday and Thursday 19:00 slot on court 4, without having to arrange it every week |
| **Key tasks** | 1 · Rebook or extend his recurring series · 2 · Check and adjust a specific week when someone cannot make it · 3 · Watch points accumulate toward the next tier |
| **Habits & current workaround** | Messages the venue's number on Sunday evening to hold the week's slots; sometimes gets no reply until Monday; has the front-desk staff's number saved |
| **Pain points** | Not knowing if the slot is held until someone replies · losing the regular court to someone who called earlier · having to make a second message just to cancel one week |
| **Expectations** | The slot is simply his, visibly, weeks ahead. Changing one week takes seconds and does not endanger the rest of the series |
| **Tech level** | Medium — uses apps daily, no patience for setup; will never read onboarding |
| **Context of use** | iPhone · at home on the sofa Sunday evening, or in the car park just before playing · relaxed when booking the series, rushed when changing one week · one hand · good connection |
| **Would be proved wrong by** | Finding that regulars do not care which court they get — that would collapse the whole reason the user picks the court (Gate 1) |

### P2 · Linh — the casual social player `ASSUMPTION`

| Field | Content |
|---|---|
| **Name + role** | Linh, plays a few times a month when friends suggest it |
| **Goal** | Find any decent slot that works tonight or this weekend, near her, at a price she is happy with |
| **Key tasks** | 1 · See what is free tonight across nearby venues · 2 · Book quickly before the group chat moves on · 3 · Know exactly what she will pay at the counter |
| **Habits & current workaround** | Asks in the group chat, someone calls the venue, the plan collapses if the first choice is full |
| **Pain points** | Does not know peak from off-peak until she is told the price · no visibility of other venues when one is full · cannot judge whether 19:00 or 21:00 is the one still free |
| **Expectations** | Open the app, see tonight, book in under a minute. Price visible before committing |
| **Tech level** | High — but zero tolerance; if it takes more than a minute she goes back to the group chat |
| **Context of use** | iPhone · standing, walking, mid-conversation · hurried · one hand · possibly poor connection |
| **Would be proved wrong by** | Casual players booking days ahead rather than same-day — which would make the "tonight" view unnecessary |

### P3 · Tuấn — the group organiser `ASSUMPTION`

| Field | Content |
|---|---|
| **Name + role** | Tuấn, organises the Saturday game for a work group of 8, sometimes books two courts |
| **Goal** | Secure courts for a fixed group at a fixed time, and be able to tell everyone exactly where to go and what to bring money for |
| **Key tasks** | 1 · Book two adjacent courts at the same time · 2 · Forward or share the booking details with the group · 3 · Cancel in time when numbers fall short |
| **Habits & current workaround** | Calls ahead; screenshots the staff's confirmation message and posts it into the group chat |
| **Pain points** | Cannot see whether two courts are free at the same hour without asking · has to retype the details for the group · carries the cancellation risk alone |
| **Expectations** | Sees two free cells in the same column and books both. One screen worth sharing |
| **Tech level** | Medium-high |
| **Context of use** | iPhone · at his desk, planning ahead mid-week · relaxed but efficient · two hands · good connection |
| **Would be proved wrong by** | Groups booking one court and rotating players — then multi-court booking is a corner case, not a task |
| **Note** | A06 (whole court, single booker, no invitations) means Tuấn's sharing need is served by a **shareable booking detail**, not by in-app invitations. Keeping that line is what stops this persona from dragging a social layer into v1 |

### P4 · Hà — the first-timer `ASSUMPTION`

| Field | Content |
|---|---|
| **Name + role** | Hà, invited by a colleague, has never been to a Pika venue |
| **Goal** | Work out where to go, what it costs, and whether she is doing this right |
| **Key tasks** | 1 · Find the nearest venue and see what it looks like · 2 · Understand the price and that payment is at the counter · 3 · Complete a first booking without an account getting in the way |
| **Habits & current workaround** | Lets the colleague handle it; has never booked a court herself |
| **Pain points** | Does not know what a "slot" or "peak" means here · afraid of booking the wrong thing · unsure whether she needs to pay now |
| **Expectations** | Plain language, photos of the venue, an unambiguous statement of what happens next |
| **Tech level** | Medium |
| **Context of use** | iPhone · at home, evening, taking her time · relaxed · two hands · good connection |
| **Would be proved wrong by** | First-timers always arriving with a regular who books for them — then onboarding matters far less than A08 assumes |

---

## Anti-persona

Writing these down is what keeps scope from creeping, because each one is a plausible-sounding idea the client may raise later.

| Not for | Why not | What we therefore do not build |
|---|---|---|
| **The player looking for someone to play with** | Playtomic owns match-finding and the brief never mentions it. A single chain has too small a pool to make matching work | No match-finding, no player levels, no DUPR integration, no player profiles visible to others |
| **The competitive player tracking rating and stats** | Nothing in the brief; serving them turns a booking app into a sports-social product | No stats, no match results, no rankings |
| **Front-desk staff** | Explicitly out of scope at Gate 1 | No staff views, no check-in scanner UI, no booking-list management |
| **The walk-in who never books** | They are served by the counter, which is unchanged | No queue, no "is a court free right now" ticker beyond normal availability |
| **The spectator / event attendee** | Champick does events; the brief does not | No tournaments, no event tickets, no mini-games |
| **Players at other chains' venues** | Pika is one chain, not a marketplace | No third-party venues, no aggregated search |

---

## Design implications

1. **Because the primary user is a regular who repeats the same slot, the home screen's first action is "book again" — not "find a court".** Repeating last week should be one tap; discovery lives below it. This directly contradicts the instinct to make venue search the hero.
2. **Because the regular's recurring series is the thing the brief is actually trying to automate (¶3 "fixed bookings"), series management needs its own surface** — see the whole series, change one occurrence without touching the rest, and see which occurrences got a substituted court (A12). This is the feature most likely to be under-designed.
3. **Because the casual player books mid-conversation in under a minute, the booking flow must survive one-handed use with a thumb in the bottom third of a 390 × 844 frame** — primary actions anchored low, nothing critical in the top corners.
4. **Because two personas need price before committing (Linh explicitly, Hà anxiously), price is grid-cell content, not confirmation content** — reinforcing design implication 2 from Step 03 from a second direction.
5. **Because nobody will read onboarding (Minh will skip it, Linh has no patience), the app must teach through the booking flow itself** — peak/off-peak explained by colour and price in the grid, pay-at-counter explained on the confirmation, not in a tutorial.
6. **Because the group organiser shares bookings by screenshot today, the booking detail screen should be worth screenshotting** — venue, court, date, time, amount due, all legible in one frame without scrolling. This is cheaper than building sharing and serves the real behaviour.
7. **Because the first-timer does not know what "peak" means, the UI must never use a term the brief invented without showing its consequence** — the word "peak" always appears next to its price, never alone as a label.
8. **Because all four personas use one iPhone in portrait with possibly poor connection, every screen needs a defined loading and empty state** — "no courts free this day" and "cannot reach the venue list" are states the grid will hit regularly, and they are design work, not engineering afterthoughts.

---

## Assumptions

| # | Assumption | Basis | If wrong |
|---|---|---|---|
| A21 | Four user groups, with the weekly regular primary | Q-U1 default accepted at Gate 1; no customer research exists | Persona priority flips; if casual players dominate, the home screen leads with discovery instead of "book again" |
| A22 | Regulars play 1–3 times a week and keep to one home venue | Q-U2 default accepted at Gate 1 | If regulars rotate venues, venue switching becomes a primary navigation element |
| A23 | The group organiser books multiple courts at the same time | Derived from pickleball being 2v2 and group play being common; **not stated by the client** | If one booking always means one court, multi-court selection leaves the grid |
| A24 | First-timers reach the app on their own, not through a regular who books for them | A08, accepted at Gate 1 | Onboarding and venue discovery shrink substantially |
| A25 | No admin product exists; venues, prices, gifts and tiers are maintained outside the app | Gate 1 scope; Q-T1 unanswered | A v2 admin product changes nothing in this version's screens |
| A26 | Staff have no app-side tooling for verifying bookings or gift redemption at the counter | Gate 1 scope + A14 | If staff get a scanner, the user-side code/QR design must match it |

Carried and still in force: A01, A02, A03, A04-R, A05, A06, A07, A08, A09, A10, A11, A12, A13, A14–A20.
