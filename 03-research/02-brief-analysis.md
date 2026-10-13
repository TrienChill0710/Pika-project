# 02 · Brief analysis

**Date:** 2026-10-10
**Step:** 02 · Brief analysis & client questions — Phase 1 · Brief → **Gate 1**
**Source:** `01-brief/00-pika-brief.png` (single-page client letter, English) + user answers recorded in `03-research/01-intake.md`

Quotes below are verbatim from the brief image. "¶n" = the nth paragraph of the letter; "bullet n" = the nth item of the feature list.

---

## PRESENT

| # | Point | Verbatim quote | Source |
|---|---|---|---|
| P01 | Client is a Pickleball court chain | "Our company is currently operating a chain of Pickleball courts" | ¶2 |
| P02 | The ask is UI/UX consultation, not build | "we are looking for UI/UX design consultation for a court booking app for our customers" | ¶2 |
| P03 | Current booking is manual | "most customers book courts through phone calls, messages, or direct support from our staff" | ¶3 |
| P04 | The problem is time and manageability | "This process sometimes takes time and makes it difficult for us to manage available time slots, fixed bookings, membership packages, and customer reward points efficiently." | ¶3 |
| P05 | Target is a mobile app | "We would like to build a mobile app" | ¶4 |
| P06 | Core customer goal | "allows customers to proactively view court availability, book courts, and manage their membership benefits more easily" | ¶4 |
| P07 | Feature — auth | "Account registration and login" | bullet 1 |
| P08 | Feature — availability | "Viewing the list of courts and available time slots" | bullet 2 |
| P09 | Feature — single booking | "Booking a court for a specific date and time" | bullet 3 |
| P10 | Feature — recurring booking | "Booking multiple sessions based on a fixed schedule" | bullet 4 |
| P11 | Feature — membership packages | "Registering for membership packages" | bullet 5 |
| P12 | Feature — points earning | "Tracking reward points after each court booking" | bullet 6 |
| P13 | Feature — redemption, with named gifts | "Redeeming points for gifts such as water bottles, towels, shoes, or paddles" | bullet 7 |
| P14 | Feature — tiers | "Membership tier system based on different levels" | bullet 8 |
| P15 | Feature — booking management | "Managing booked court schedules" | bullet 9 |
| P16 | Feature — notifications, 3 kinds | "Receiving notifications for booking confirmations, reminders, and promotions" | bullet 10 |
| P17 | Logo is the colour source | "we would like the app interface to follow the color direction of the logo" | ¶6 |
| P18 | Brand adjectives | "with a fresh, sporty, and modern feeling" | ¶6 |
| P19 | Client is open on visual decisions | "we are also open to your recommendations on how to refine the color palette, typography, and overall UI style" | ¶6 |
| P20 | No product documentation exists | "we do not have a detailed product document yet, as the project is still in the early idea stage" | ¶7 |
| P21 | Client wants flows, screen count and IA advice | "We would appreciate your advice on the key user flows, the estimated number of main screens, and how to organize features such as court booking, membership packages, reward points, and notifications in a clear and user-friendly way." | ¶7 |
| P22 | Client wants process, timeline, cost | "We would also like to understand your working process, estimated timeline, and preliminary cost for the UI/UX design scope of this project." | ¶8 |

**22 points stated.** The brief is a feature list plus a visual direction — it contains no users, no numbers, no business rules.

---

## MISSING

Not stated anywhere in the brief. Items marked **answered** were resolved by the user in Step 01 and are no longer open; the rest become assumptions or client questions.

| # | Point | Why it matters | Status |
|---|---|---|---|
| M01 | Payment | A booking and a membership package both imply money changing hands; whether it happens in the app decides whether a whole checkout branch exists | **Answered** — pay at the counter only |
| M02 | Platform and device | Decides frame, components and gesture patterns | **Answered** — iOS first, 390 × 844, portrait |
| M03 | UI language and currency | Decides copy, string length and number formatting | **Answered** — English only, `$` |
| M04 | Scale — venues, courts, hours, slot length | Decides whether availability can be shown as a grid or needs progressive filtering | **Answered** — 6 venues × 6 courts, 06:00–22:00, 60-min slots |
| M05 | Cancellation / reschedule / no-show rules | Every booking screen needs to state them; they also drive the booking states | **Answered** — free cancellation up to 24 h |
| M06 | Admin or staff side | Doubles or halves the scope | **Answered** — customer app only |
| M07 | Pricing | Needed for real content on the booking screens and to size the point thresholds | **Answered** — $18/h normal, $36/h peak (17:00–21:00 and weekends) |
| M08 | Tier structure | The brief names tiers (P14) but defines nothing | **Answered** — 3 tiers, proposal accepted (see A01, revised thresholds) |
| M09 | Who the users are | No segment, age, skill level or behaviour given — personas in Step 04 rest entirely on assumption | **Open** → Q-U1, Q-U2 |
| M10 | What a "membership package" actually is | Named in P11 but never defined: prepaid hours? monthly unlimited? a discount card? Each is a different screen and a different flow | **Open** → `[BLOCKER]` Q-F1 |
| M11 | How a court is identified and whether the user picks one | "Viewing the list of courts" (P08) could mean the user chooses court #3, or just a time slot with a court assigned by staff | **Open** → `[BLOCKER]` Q-F2 |
| M12 | Group play — who else is on the court | Pickleball is 2v2; the brief never says whether a booking involves inviting other players or splitting cost | **Open** → Q-F3 |
| M13 | Gift catalogue and redemption logistics | P13 names 4 gift types but not how many items, the point cost, or whether a gift is collected at the venue or shipped | **Open** → Q-C1 |
| M14 | Content source — venue photos, names, addresses | Step 12 needs real or realistic content; the client has none documented (P20) | **Open** → Q-C2 |
| M15 | Existing systems to integrate with | A booking sheet, a POS, a CRM — affects nothing visually in v1 but changes the handoff | **Open** → Q-T1 |
| M16 | Accessibility and legal requirements | Decides whether contrast targets are AA or AAA and whether terms screens are needed | **Open** → Q-T2 |
| M17 | Success measure for the client | P04 implies "less staff time"; no target is stated | **Open** → Q-B1, feeds the North Star in Step 03 |
| M18 | Competitors or apps the client admires | The client gave a moodboard but no named competitor | **Open** → Q-B2, feeds Step 03 |

---

## UNCLEAR

| # | Point | Quote | Reading A | Reading B |
|---|---|---|---|---|
| U01 | "fixed bookings" / recurring booking | "Booking multiple sessions based on a fixed schedule" (bullet 4) | A recurring rule the customer sets — e.g. every Tuesday 19:00 for 8 weeks, created in one flow | A multi-select of several individual dates in one checkout, with no repeat rule |
| U02 | When reward points are earned | "Tracking reward points after each court booking" (bullet 6) | Points credited when the booking is **made** | Points credited after the session is **played and paid for at the counter** |
| U03 | What drives tier level | "Membership tier system based on different levels" (bullet 8) | Tier driven by accumulated **points** | Tier driven by a **paid membership package** the customer buys (P11) — i.e. tiers are a product, not an achievement |
| U04 | "manage their membership benefits" | "book courts, and manage their membership benefits more easily" (¶4) | A passive view — see my tier, my points, my perks | An active management surface — renew, upgrade, pause, cancel a package |
| U05 | Scope of "notifications" | "Receiving notifications for booking confirmations, reminders, and promotions" (bullet 10) | Push notifications only | Push **plus** an in-app notification centre with history |
| U06 | Who the "customers" are | "a court booking app for our customers" (¶2) | Anyone, including first-time walk-ins who have never played | Existing regulars of the chain, already known to staff |

U02 and U03 are the two that change the information architecture, so they are tagged `[BLOCKER]` below.

---

## Assumptions

| # | Assumption | Why it is the safest default | What changes if it is wrong |
|---|---|---|---|
| **A01** | Tiers are earned by points over a rolling 12 months — 3 tiers: **Rally** 0 / **Volley** 750 / **Smash** 2,500 points. Earning 1 point per $1. Benefits are advance-booking window, a point multiplier, late-cancellation grace and peak priority | Resolves U03 towards reading A. An earned tier rewards the behaviour the client wants (frequent booking through the app) and costs the client nothing up front, unlike a sold tier. Thresholds are sized against the real prices — see the sanity check below | If tiers are actually sold (U03 reading B), the Profile section loses its progress UI and gains a purchase flow, and tiers merge into the membership package screens. Affects Steps 05, 06, 09, 12 |
| **A02** | Points are credited **after the session is played**, not at booking time | Resolves U02 towards reading B. With pay-at-the-counter there is no money at booking, so crediting at booking would reward no-shows. It also gives the client a soft no-show lever without a penalty rule | If points are credited at booking, the "pending points" state disappears from the booking card and the My Bookings screen gets simpler. Affects Steps 05, 06, 09 |
| **A03** | Recurring booking is a **repeat rule** — same weekday, same time, N weeks — created in one flow and managed as a series | Resolves U01 towards reading A. "fixed schedule" (bullet 4) reads as a repeating pattern, and it is the case that actually saves the staff time described in P04 | If it is only multi-date selection, the series-management screens and the "skip one occurrence" interaction disappear. Affects Steps 05, 06 |
| **A04** | ~~A booking is venue + date + time slot; the court is assigned automatically~~ → **REJECTED by the client (Gate 1, 2026-10-10).** A booking is **venue + date + time slot + a court the user picks**. The availability screen is a court × time grid and the booking flow carries an explicit court-selection step | No longer an assumption — answered. See "Gate 1 answers" below for the consequences | n/a — this is now a stated requirement |
| **A05** | A membership package is a **prepaid block of court hours** valid for a period, bought in the app and paid at the counter | Resolves M10 with the option that fits pay-at-the-counter and the existing points system. Monthly-unlimited would make points and tiers largely meaningless | If packages are discount cards or unlimited plans, the package screens, the price display on booking, and the relationship between packages and tiers all change. Affects Steps 05, 06, 09, 12 |
| **A06** | Booking is **single-player** — one person books and pays; no invitation, no split payment, no partner matching in v1 | Resolves M12. The brief never mentions other players; group features are a product in their own right | If group play is in scope, the booking flow gains participant handling and the product gains a social layer. Affects Steps 05, 06 |
| **A07** | Notifications are push **plus** an in-app notification centre with history | Resolves U05 towards reading B. Booking confirmations are records users look back at; a push alone cannot be retrieved | If push only, one screen is removed. Affects Step 05 |
| **A08** | Users include **first-time players** who have never been to a venue | Resolves U06 towards reading A. Designing for the newcomer also serves the regular; the reverse is not true | If the app is for known regulars only, onboarding and venue discovery shrink. Affects Steps 04, 05, 09 |
| **A09** | Membership benefits are **viewed and renewed**, not deeply managed (no pause, no plan switching) in v1 | Resolves U04 between the two readings, at the lighter end | If full self-service management is wanted, the Membership section grows several flows. Affects Step 05 |
| **A10** | Peak = **17:00–21:00 on weekdays and all day at weekends**, as stated by the user; peak is 52 of 112 weekly slots per court (46 %) | Taken from the user's Step 01 answer, extended only by computing the share | If the peak window differs, prices shown on the booking screen and the tier maths move. Affects Steps 05, 09 |
| **A11** | Content (venue names, addresses, photos, user names) is **realistic placeholder in English**, pending client content | M14 is unresolved and Step 09 needs content now | If real content arrives late, Step 12 screens need a content pass. Affects Step 12 |

### Sanity check on the tier thresholds (computed, not estimated)

Prices: $18 normal, $36 peak. Earning 1 point per $1. Peak share of open slots: 52 / 112 = 46 %.

| Player type | Spend per year | Points per year |
|---|---|---|
| 1 session/week, all off-peak | $936 | 936 |
| 1 session/week, 60 % peak | $1,498 | 1,498 |
| 2 sessions/week, 60 % peak | $2,995 | 2,995 |
| 3 sessions/week, 60 % peak | $4,493 | 4,493 |
| 3 sessions/week, all peak | $5,616 | 5,616 |

**The thresholds proposed in Step 01 (1,500 / 5,000) are too high at these prices.** A once-a-week player would need a full year to reach the middle tier, and the top tier would require roughly 3.3 sessions a week all year — under 5 % of players would ever see it, so the tier system would not change anyone's behaviour.

Revised in A01:

| Tier | Threshold | A once-a-week player (60 % peak) reaches it in | A twice-a-week player reaches it in |
|---|---|---|---|
| Rally | 0 | immediately | immediately |
| **Volley** | **750** | ~6 months | ~3 months |
| **Smash** | **2,500** | ~21 months (effectively out of reach) | ~9 months |

This makes the middle tier a realistic half-year goal for a regular player and the top tier a genuine commitment, which is what a tier system is for.

---

## Client questions

Numbered for reply by number. Each has the default used if there is no answer.

### Business

| # | Question | Why it matters | Default if unanswered |
|---|---|---|---|
| **Q-B1** | What would make this app a success for you in the first 6 months — fewer booking calls, more off-peak bookings, more memberships sold, or something else? | Sets the North Star metric in Step 03 and decides what the home screen pushes | Reduce staff-handled bookings; the app's job is to move manual bookings to self-service |
| **Q-B2** | Are there any booking apps — in sport or outside it — that you or your staff like? | Step 03 competitor analysis currently has no named reference | Analyse general court/class booking apps and the moodboard references |
| Q-B3 | Is there a launch date or event tied to this app? | Affects scope prioritisation | No fixed date; scope the full v1 |

### Users

| # | Question | Why it matters | Default if unanswered |
|---|---|---|---|
| **Q-U1** | Roughly who books today — casual players, regulars with a fixed weekly slot, coaches booking for groups, or companies? And roughly what share is each? | Personas in Step 04 are pure assumption without this; it also decides whether recurring booking is a headline feature or a corner case | Three groups: the weekly regular, the casual social player, and the organiser who books for a group |
| **Q-U2** | How often does a regular play, and do they always use the same venue? | Decides whether the home screen leads with "book again" or with venue discovery | Regulars play 1–3 times a week and keep to one home venue |
| Q-U3 | Do your customers already use a members card or a loyalty scheme today? | If something exists, points must map onto it | No existing scheme; this is the first |

### Features

| # | Question | Why it matters | Default if unanswered |
|---|---|---|---|
| **Q-F1** `[BLOCKER]` | **What exactly is a "membership package"?** Prepaid hours, a monthly unlimited plan, or a discount card? What does it cost and how long does it last? | M10. It decides whether the Membership section is a shop, a wallet or a status card — and the sitemap in Step 05 cannot be drawn without it | **A05**: a prepaid block of court hours valid for a period. Work continues on this assumption; **Step 05 (sitemap) is where a wrong answer costs the most** |
| **Q-F2** `[BLOCKER]` | **Do customers choose a specific court, or just a time slot?** | M11. Decides the shape of the central screen of the whole app | **A04**: time slot only, court assigned automatically and shown on the confirmation. Blocks **Step 06** if it turns out users must choose |
| **Q-F3** | Does one booking cover the whole court, or do people book a place in a session? Is there any need to invite the other players? | M12. Pickleball is 2v2, so this is a real possibility that would add a social layer | **A06**: whole court, single booker, no invitations in v1 |
| Q-F4 | Can a customer change a booking to another time, or only cancel and rebook? | Changes the booking-management screens | Cancel and rebook only, inside the 24-hour rule |
| Q-F5 | Should the tier be earned by points, or sold as a package? | U03. A01 assumes earned | **A01**: earned by points over a rolling 12 months |
| Q-F6 | Do you want a waitlist for full peak slots? | A real possibility given 46 % of slots are peak; adds one flow | Not in v1; note as a v2 opportunity |

### Content & data

| # | Question | Why it matters | Default if unanswered |
|---|---|---|---|
| **Q-C1** | What is in the gift catalogue, how many points does each item cost, and does the customer collect it at the venue or have it shipped? | M13. The redemption screens need a real catalogue; collection vs shipping is a different flow | 8–10 items, 500–5,000 points, collected at the venue |
| **Q-C2** | Can you provide venue names, addresses, opening hours and photos for the 6 venues? | M14. Step 12 needs real content; photos also set the visual tone | Realistic English placeholder content, venue photos generated in Step 12 |
| Q-C3 | Are venue names in English or Vietnamese? | The UI is English, but proper nouns may not be | English venue names |
| Q-C4 | What is the actual peak/off-peak price list — is $18 / $36 the same at all 6 venues? | Decides whether the venue list shows "from $18" or a single price | Same prices at all venues |

### Brand

| # | Question | Why it matters | Default if unanswered |
|---|---|---|---|
| **Q-BR1** | Is there a vector (SVG or AI) version of the logo? | W1. The PNG cannot scale cleanly for the app icon, large headers or Figma | Use the PNG as supplied; noted as a limitation in the handoff |
| Q-BR2 | Are there brand rules we must keep — clear space, approved colours, a tagline? | Avoids proposing a palette that breaks an existing rule | No rules beyond the logo colours |
| Q-BR3 | Is Dark mode wanted in a later version? | A01 ships light only; naming the tokens for a later dark mode costs nothing now if we know | Light only in v1; tokens named so dark can be added later without renaming |

### Technical

| # | Question | Why it matters | Default if unanswered |
|---|---|---|---|
| Q-T1 | Is there an existing booking system, POS or customer database to connect to? | M15. Affects the handoff, not the visuals | None; the app is the first system |
| Q-T2 | Any accessibility or legal requirement — WCAG level, terms, privacy policy screens? | M16. Decides contrast targets and whether legal screens are in the sitemap | WCAG 2.1 AA for text contrast; terms and privacy links in Profile |
| Q-T3 | Android after iOS — same release or later? | Decides whether components are built platform-neutral from the start | iOS first, components kept platform-neutral so Android follows cheaply |

**Blocking questions: 2** (Q-F1, Q-F2). Work continues on A04 and A05; both are cheap to change before Step 05 and expensive after Step 09.

---

## Frame lock — **PROPOSED**

| Decision | Proposal | Reason / quote |
|---|---|---|
| Product type | Customer-facing mobile app | "a court booking app for our customers" (¶2); customer app only, confirmed in Step 01 |
| Platform | **iOS first**, Android to follow | User answer, Step 01. Brief says only "a mobile app" (¶4) |
| Primary device + device order | iPhone 14 / 13 / 12 class → larger iPhones → Android phones | User answer, Step 01 |
| Frame size | **390 × 844** | User answer, Step 01. Designing at the smaller modern iPhone width means layouts scale up safely rather than breaking down |
| Orientation | **Portrait only** | One-handed booking on the move; no content in the brief needs landscape |
| Modes | **Light only** in this version | User answer, Step 01. Dark lockups are on file (`02-`, `03-pika-logo-dark*.png`) and tokens will be named so dark can be added later without renaming |
| Language(s) of the UI | **English only**, currency `$` | User answer, Step 01 |

Additional locks carried from Step 01, for the record: pay at the counter only · 6 venues × 6 courts (36 courts) · 06:00–22:00 · 60-minute slots · free cancellation up to 24 h before the slot · $18/h normal, $36/h peak (17:00–21:00 weekdays and all weekend).

**Status: PROPOSED** — becomes LOCKED when the user approves Gate 1.

---

## Gate 1 answers — 2026-10-10

| # | Question | Answer | Effect |
|---|---|---|---|
| **Q-F1** `[BLOCKER]` | What is a membership package? | **A prepaid block of court hours** | **A05 confirmed.** No change — the Membership section is a wallet of remaining hours plus a buy/renew flow |
| **Q-F2** `[BLOCKER]` | Do customers choose a specific court? | **Yes — the user picks the court** | **A04 rejected.** See below |
| Q-B1 | Definition of success | Default accepted | North Star in Step 03 is built on "reduce staff-handled bookings" |
| Q-U1 | Who books today | Default accepted | Step 04 personas: the weekly regular, the casual social player, the group organiser — all marked `ASSUMPTION` |
| Q-F3 | Group play | Default accepted | **A06 confirmed.** Whole court, single booker, no invitations in v1 |
| Q-C1 | Gift catalogue | Default accepted | 8–10 items, 500–5,000 points, collected at the venue — marked `ASSUMPTION`, to be replaced by the real catalogue |
| Q-C2 | Venue content | Default accepted | **A11 confirmed.** Realistic English placeholder; venue photos generated in Step 12 |
| Q-BR1 · Q-F6 · Q-BR3 | Vector logo · waitlist · later dark mode | Not answered | Defaults stand: PNG as supplied; no waitlist in v1; light only, tokens named so dark can be added later without renaming |

### Consequence of Q-F2 — the user picks the court

This is the single largest structural change from Gate 1. It replaces A04.

**What changes**

| Area | Before (A04) | After (answered) |
|---|---|---|
| Availability screen | A list of time slots for a venue on a date | A **court × time grid**: 6 courts down, the day's 16 slots across — 96 cells per venue per day |
| Booking flow | Venue → date → slot → confirm (3 choices) | Venue → date → slot → **court** → confirm (4 choices) |
| What "available" means | A slot is available if any court is free | Availability is per cell; the user sees exactly which court is free when |
| Confirmation screen | Court number revealed to the user | Court number is the user's own choice — it is a decision to review, not news |
| Booking card and notifications | Court number is incidental | Court number is primary information; it must appear on the card, the reminder and the detail screen |
| Recurring booking (A03) | Repeat the slot | Repeat the slot **and the court** — which raises a new rule: what happens when the chosen court is taken on one occurrence of the series? |

**What this costs**

- Fitting a 6 × 16 grid onto a 390 pt frame is the hardest layout problem in this product. At 6 courts the grid is workable — a horizontally scrolling time axis with fixed court labels on the left. It would not have been workable at 20 courts.
- A new open question appears, recorded as **Q-F7** below, because the client's answer creates it.

**New assumption replacing A04:**

| # | Assumption | Why | If wrong |
|---|---|---|---|
| **A04-R** | The grid shows **one venue, one day at a time**; courts are the rows and time is a horizontally scrolling axis; a cell shows price (off-peak / peak) and state (free / taken / past). The user may also reach the same booking by picking a slot first and then a court | Keeps the court choice explicit without forcing the user to scan 96 cells to find anything. Picking time first is how people actually think ("I want Tuesday evening"), picking the court second is a preference | If users mostly have a favourite court and want court-first, the grid becomes court-led and the home screen gains a "book my usual court" shortcut. Cheap to change before Step 09 |

### New question created by the Q-F2 answer

| # | Question | Why it matters | Default if unanswered |
|---|---|---|---|
| **Q-F7** | In a recurring booking, if the chosen court is already taken on one of the occurrences, should the app (a) book a different court for that occurrence, (b) skip that occurrence, or (c) refuse the whole series? | A03 + Q-F2 together make this unavoidable. It decides whether a series is a firm promise or a best effort, and it changes the recurring-booking confirmation screen | **(a)** — book another court at the same time and flag it clearly in the series summary, because the time matters more to a player than the court number |
| **Q-F8** | Are the 6 courts at a venue different in any way the customer cares about — indoor/outdoor, lighting, surface, a show court? | If courts are identical, court choice is habit; if they differ, the grid must show what differs, and that changes the cell design | Courts are identical; only the number distinguishes them |

Both are answerable later; neither blocks Step 03 or Step 04. They are needed before **Step 05**.

### Q-F7 / Q-F8 answered — 2026-10-10

| # | Answer | Becomes |
|---|---|---|
| **Q-F7** | Proposed default accepted — **(a)** in a recurring series, if the chosen court is taken on one occurrence, book another court at the same time and flag it clearly in the series summary | **A12** — a series is a promise about *time*, not about the court number. The recurring-booking confirmation must show per-occurrence court numbers, with substituted courts visibly marked |
| **Q-F8** | Proposed default accepted — **the 6 courts at a venue are identical**; only the number distinguishes them | **A13** — grid cells carry only price and state, no court attributes. If courts later differ (indoor/outdoor, lighting, surface), the cell design and the grid legend both change. Affects Steps 05, 09 |

---

## Frame lock — **LOCKED** (Gate 1 approved 2026-10-10)

| Decision | Locked value |
|---|---|
| Product type | Customer-facing mobile app |
| Platform | iOS first, Android to follow |
| Primary device + order | iPhone 14/13/12 class → larger iPhones → Android phones |
| Frame size | **390 × 844** |
| Orientation | Portrait only |
| Modes | Light only (dark lockups on file for a later version) |
| Language / currency | English only, `$` |

Carried locks: pay at the counter only · 6 venues × 6 courts (36 courts) · 06:00–22:00 · 60-minute slots · free cancellation up to 24 h · $18/h normal, $36/h peak (17:00–21:00 weekdays, all weekend) · tiers Rally 0 / Volley 750 / Smash 2,500 points over a rolling 12 months · **the user picks the court**.
