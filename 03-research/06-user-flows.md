# 06 · User flows

**Date:** 2026-10-10
**Step:** 06 · User flows — Phase 3 · Structure → **Gate 3**
**Reads:** `03-research/04-users.md` · `03-research/05-features-sitemap.md`

13 flows, `FL01`–`FL13`. Flow codes are permanent, like S## codes. Three screens were added to the sitemap in this step (S44–S46) because branches demanded them — listed under "Sitemap changes".

---

## Flows

### FL01 · First launch & sign up

**User group** P4 first-timer · **Goal** get from "a colleague told me about this" to a usable account · **Entry** App Store install → S01
**Success =** the user has an account and a home venue, and is standing on the grid of a real venue.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Opens the app | Checks session; none found | S01 |
| 2 | Chooses "Create account", or "Look around first" | Routes to sign-up or to browsing (A30) | S02 |
| 3 | Enters phone number | Sends OTP | S03 |
| 4 | Enters the 6-digit code | Verifies, creates account | S04 |
| 5 | Enters name | Saves | S05 |
| 6 | Picks a home venue from the list | Saves; sets the Book tab default | S06 |
| 7 | — | Asks for notification permission, explaining it is for booking reminders | **S46** |
| 8 | — | Lands on Home with no bookings yet | S07 |

**Branches**
- **Error** → S04 · wrong or expired code, shown inline under the field with "Send again" · S03 · invalid number format, inline
- **Cancel** → S02 · abandoning sign-up at any point returns to Welcome; nothing is kept
- **Empty** → S07 · a brand-new Home has no upcoming booking: the empty state is a single "Book your first court" action, not a blank card
- **Loading** → inline on the OTP button; venue list on S06 uses a skeleton
- **Confirm** → S06 · the home venue choice is confirmed by the Book tab opening on it; no separate confirmation screen

*Deliberate omission: there is no onboarding carousel (Step 04 implication 5). S05–S06 carry the only setup that earns its place, and S46 explains notifications at the moment they become relevant rather than in a tutorial.*

---

### FL02 · Sign in, returning user

**User group** all · **Goal** get back in · **Entry** S01 with an expired session
**Success =** the user is on Home with their data.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Opens the app | Session expired → Welcome | S01 → S02 |
| 2 | Taps "Sign in", enters phone | Sends OTP | S03 |
| 3 | Enters code | Restores the account | S04 |
| 4 | — | Lands on Home | S07 |

**Branches**
- **Error** → S04 · wrong code inline; after 3 failures, "Try again in 60 seconds"
- **Cancel** → S02
- **Empty** → n/a — a returning account always has at least a profile
- **Loading** → inline on the button
- **Confirm** → n/a — arriving on Home is the confirmation

---

### FL03 · Book a court — the core flow ★

**User group** P1, P2p, P4 · **Goal** have a specific court at a specific time, and know what it costs · **Entry** Book tab, or Home → "Book a court", or S11 venue detail
**Success =** a confirmed booking showing venue, court, date, time and the amount due at the counter.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Taps the Book tab | Opens the grid on the home venue, today, scrolled to the next upcoming hour | **S12** |
| 2 | (optional) Changes the day on the date strip | Reloads the grid; days beyond the tier's booking window are visibly out of reach (A31) | S12 |
| 3 | (optional) Changes venue | Opens the switcher sheet, reloads the grid | S18 → S12 |
| 4 | Reads the cells — each shows its price and state | — | S12 |
| 5 | Taps a free cell | Selects it; shows court number, time and price in a bottom bar | S12 |
| 6 | Taps "Continue" | Holds the slot for a short window | S13 |
| 7 | Reviews venue, court, date, time, amount due — and whether it draws on package hours (F36) | — | S13 |
| 8 | Taps "Confirm booking" | Creates the booking, sends the confirmation push | S14 |
| 9 | Sees the confirmation: amount due, **pay at the venue**, court number | — | **S14** |

**Branches**
- **Error** → S13 · the slot was taken while the user was deciding: an inline banner "Court 4 at 19:00 was just booked", with "Back to the grid" returning to S12 with that cell now marked taken. This is the most likely real-world failure and must not be a generic error screen
- **Error (network)** → **S45** · the booking could not be sent; the chosen slot is named, with Retry and "Back to the grid"
- **Cancel** → S12 · leaving S13 returns to the grid with the selection cleared and the hold released
- **Empty** → S12 · a day with nothing free shows an in-grid message naming the next day that has availability, plus a jump to it — never an empty grid with no exit
- **Loading** → S12 · skeleton rows per court, so the grid's shape is visible before the data lands (it is the same shape every time)
- **Confirm** → S14 · and the booking appears immediately under Bookings → Upcoming
- **Not signed in** (A30, from browsing) → **S44** · a sign-in sheet rises at step 6, not at step 1; after signing in the user returns to S13 with the selection intact

---

### FL04 · Book again — the primary user's primary action

**User group** P1 · **Goal** repeat last week without thinking · **Entry** Home
**Success =** the same court, same time, next week, booked in two taps.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Sees "Book again — Court 4, Tue 19:00" on Home | Pre-computes the next free equivalent slot | S07 |
| 2 | Taps it | Pre-selects that cell and goes straight to review | S13 |
| 3 | Confirms | Creates the booking | S14 |

**Branches**
- **Error** → S13 · the usual court is taken next week: the review screen opens with the nearest alternative already selected and clearly labelled as a substitution, with "Choose another" dropping to S12. **The flow never dead-ends into the grid without a suggestion**
- **Cancel** → S07
- **Empty** → S07 · a user with no booking history sees "Book a court" instead of "Book again" — the same slot on Home, different content
- **Loading** → inline on the Home card
- **Confirm** → S14

---

### FL05 · Create a recurring series

**User group** P1 · **Goal** stop arranging the same slot every week · **Entry** S12 after selecting a cell, or S13
**Success =** N weeks of the same slot booked, with any substituted courts already visible.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Selects a cell, taps "Make it weekly" | — | S12 |
| 2 | Chooses how many weeks | Checks each occurrence against availability | S15 |
| 3 | Reviews the per-occurrence list — each week with its court, substitutions marked (A12) | — | **S16** |
| 4 | Confirms | Creates the series | S17 |

**Branches**
- **Error** → S16 · some weeks have no court free at all at that time: those weeks are listed as "not available", the user confirms the rest or changes the time. The series is never silently shortened
- **Cancel** → S12
- **Empty** → n/a — a series cannot be started without a selected cell
- **Loading** → S16 · checking N weeks takes time; the list fills progressively rather than blocking
- **Confirm** → S17 · and the series appears under Bookings

---

### FL06 · Change one week of a series

**User group** P1 · **Goal** miss one week without losing the slot · **Entry** Bookings → series
**Success =** one occurrence cancelled, the rest untouched and visibly so.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Opens Bookings → Upcoming → the series | — | S19 → S23 |
| 2 | Finds the occurrence | Lists every occurrence with date and court | S23 |
| 3 | Taps "Skip this week" | Asks for confirmation, stating that the rest of the series is unaffected | S24 |
| 4 | Confirms | Releases that slot only | S23 |

**Branches**
- **Error** → S24 · the occurrence is inside 24 h: the sheet changes to explain that cancelling now is not free (same rule as FL07)
- **Cancel** → S23
- **Empty** → n/a
- **Loading** → inline
- **Confirm** → S23 · the skipped week stays in the list marked "skipped" rather than disappearing, so the user can see what they did

---

### FL07 · Cancel a booking

**User group** all · **Goal** release a court I cannot use · **Entry** Bookings → booking
**Success =** the booking is cancelled and the user knows whether it cost them anything.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Opens the booking | Shows detail, including the cancellation deadline as a date and time, not "24 hours" | S20 |
| 2 | Taps "Cancel booking" | Branches on the 24 h boundary | S21 or S22 |
| 3 | Confirms | Cancels; frees the slot | S19 |

**Branches**
- **Error** → S20 · cancellation failed: inline retry; the booking stays live
- **Cancel** (of the cancel) → S20
- **Empty** → n/a
- **Loading** → inline on the confirm button
- **Confirm** → **S21** before the boundary — plain confirmation, free · **S22** after the boundary — states what happens now (A01: a Volley or Smash member may have a monthly grace cancellation available, and it is offered here)
- *Design note:* S22 is where the tier benefit becomes concrete. It is the best argument in the product for climbing a tier, and it appears at the exact moment the user feels the cost.

---

### FL08 · Book two courts for a group

**User group** P3 · **Goal** two adjacent courts at the same hour, and one screen to share · **Entry** Book tab
**Success =** two bookings at the same time, shown together, legible in one screenshot.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Opens the grid | — | S12 |
| 2 | Taps a cell, then a second cell in the same time column | Both selected; the bottom bar shows 2 courts and the total | S12 |
| 3 | Continues | Review lists both courts and the combined amount | S13 |
| 4 | Confirms | Creates both bookings, linked | S14 |
| 5 | Screenshots the confirmation for the group chat | — | S14 / S20 |

**Branches**
- **Error** → S13 · one of the two was taken: the review names which one and offers the nearest free court, or booking just the one
- **Cancel** → S12
- **Empty** → n/a
- **Loading** → inline
- **Confirm** → S14 showing both courts in one frame — this is the screen that has to survive being screenshotted (Step 04 implication 6)
- **Constraint** `ASSUMPTION` A33: only cells in the **same time column** can be multi-selected. Selecting different times is a second booking, not a multi-booking — this keeps the interaction legible

---

### FL09 · Buy a package

**User group** P1 · **Goal** prepay a block of hours · **Entry** Membership tab
**Success =** a package reserved, with a clear statement that it becomes active when paid at the counter.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Opens Membership | Shows hours remaining, tier, points | S27 |
| 2 | Taps Packages | Lists packages: hours, price, validity | S28 |
| 3 | Opens one | Shows what it includes and when it expires | S29 |
| 4 | Taps "Reserve" | Creates a pending package | S30 |
| 5 | Reads: pay at the counter to activate | — | S30 |

**Branches**
- **Error** → S29 · reservation failed, inline retry
- **Cancel** → S28 · a pending package can be abandoned; it only becomes real when paid (A32)
- **Empty** → S27 · a member with no package sees what a package would do for them, not an empty balance card
- **Loading** → skeleton list on S28
- **Confirm** → S30 · and the pending package shows on S27 marked "not active yet"

---

### FL10 · Redeem a gift

**User group** P1 · **Goal** turn points into a paddle · **Entry** Membership tab
**Success =** a code the counter staff can act on.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Opens Membership → Gifts | Lists gifts with point costs; affordable ones are distinguishable at a glance | S34 |
| 2 | Opens a gift | Shows cost, what it is, where to collect | S35 |
| 3 | Taps "Redeem" | Asks to confirm the point spend | S36 |
| 4 | Confirms | Deducts points, issues a code | S37 |
| 5 | Shows the code at the counter | — | S37 |

**Branches**
- **Error** → S36 · not enough points (possible if points were spent elsewhere meanwhile): states the shortfall in points, not a generic failure
- **Cancel** → S35
- **Empty** → S34 · a user with too few points for anything sees the catalogue with costs and their distance from the cheapest item — the catalogue is the motivation, so it is never hidden
- **Loading** → skeleton grid
- **Confirm** → S37 · the code remains retrievable from S38, because a user will close the app before reaching the counter

---

### FL11 · Look around before committing

**User group** P4 · **Goal** see venues and prices without creating an account · **Entry** S02 "Look around first"
**Success =** the user understands where, when and how much — and meets the sign-in wall only when they decide to book.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Taps "Look around first" | Enters browse mode (A30, Q-F9 default) | S02 → S09 |
| 2 | Browses venues, opens one | Shows photos, address, hours, price band | S11 |
| 3 | Opens the grid | Full availability and prices, read-only | S12 |
| 4 | Taps a cell and continues | **Sign-in sheet rises** | **S44** |
| 5 | Signs in | Returns to S13 with the selection intact | S44 → S13 |

**Branches**
- **Error** → as FL01
- **Cancel** → S44 dismissed returns to S12 with the selection kept, not cleared
- **Empty** → as FL03
- **Loading** → as FL03
- **Confirm** → continues into FL03 from step 7

---

### FL12 · Check points and tier progress

**User group** P1 · **Goal** know how far the next tier is · **Entry** Home snapshot or Membership tab
**Success =** the user can name their next threshold and what it gives them.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Sees points and tier on Home | — | S07 |
| 2 | Taps through | Shows balance, tier, hours remaining | S27 |
| 3 | Opens the tier | Shows progress to the next threshold and the benefits it unlocks | S31 |
| 4 | (optional) Asks how tiers work | Explains the rolling 12 months | S32 |
| 5 | (optional) Opens points history | Earned and spent | S33 |

**Branches**
- **Error** → S27 · balance unavailable: the last known value is shown with a "not up to date" marker rather than a blank
- **Cancel** → n/a — nothing is being committed
- **Empty** → S33 · a new member has no history: shows how points are earned instead
- **Loading** → inline skeletons
- **Confirm** → n/a — read-only flow

---

### FL13 · Reminder → arrive → pay at the counter

This flow crosses outside the app, which is exactly why it matters: it is where G01 is won or lost.

**User group** all · **Goal** turn up at the right place and pay without friction · **Entry** push notification
**Success =** the user arrives knowing the court number and the amount, and the counter transaction takes seconds.

| # | User does | System does | Screen |
|---|---|---|---|
| 1 | Receives the reminder push | Fires at a set interval before the slot (F50) | — |
| 2 | Taps it | Opens the booking detail directly | S20 |
| 3 | Travels, arrives | — | — |
| 4 | Opens the app at the venue | Home surfaces today's booking at the top | S07 |
| 5 | Shows the booking detail at the counter | Court, time, amount due in one frame | S20 |
| 6 | Pays | — | outside the app |
| 7 | Plays; afterwards points are credited | Sends the points notification (F54); the booking moves to Past | S19 / S08 |

**Branches**
- **Error** → S20 · the booking cannot load at the venue (poor signal): the last known booking detail is cached and shown with its time — **this is the one screen that must work offline** (F60 extended)
- **Cancel** → n/a
- **Empty** → n/a
- **Loading** → cached first, refreshed silently
- **Confirm** → the points notification is the closing confirmation of the whole cycle
- **Open question** Q-F11 — whether the counter needs a scannable code here. The default is no; the staff look the booking up by name

---

## Screens outside flows

| Screen | Purpose | Main content | Actions |
|---|---|---|---|
| **S08** Notification centre | Retrieve what a push said (A07) | Confirmations, reminders, points credited, promotions — newest first, unread marked | Tap to open the related booking; mark all read |
| **S10** Venue map | Spatial discovery for the first-timer (C06) | Pins for the 6 venues, distance, a card for the selected pin | Open venue detail; switch back to list |
| **S38** Redemption history | Retrieve a code after closing the app | Past redemptions with status (collected / not yet) | Re-open a code |
| **S39** Profile | The non-task destination | Name, phone, home venue, tier badge | Edit; settings; help; legal; sign out; delete account |
| **S40** Edit profile | — | Name, phone | Save; cancel |
| **S41** Settings | Control the two things that affect daily use | Notification preferences per type (F53); home venue (F10) | Toggle; change venue |
| **S42** Help & FAQ | Answer P4's anxiety without a tutorial | How booking works · **how payment works** · cancellation rule · how points and tiers work · how packages work | Contact the venue |
| **S43** Terms & privacy | A16 | Legal text | — |
| **S45** Could not complete | A named, recoverable failure for booking actions | What failed, in the user's own terms ("Court 4 at 19:00 was not booked") | Retry; back to the grid |
| **S46** Notification permission primer | Explain before the system prompt, so the user says yes for a reason | Why reminders matter, what will be sent | Allow; not now |

---

## Sitemap changes

Three screens added in this step. **No existing code was renumbered.**

| New | Screen | Why the flows demanded it | Parent | Tier |
|---|---|---|---|---|
| **S44** | Sign-in sheet (in-context) | FL11 step 4 and FL03's "not signed in" branch. Browsing without an account (A30/Q-F9) only works if the sign-in wall appears at the moment of booking **and preserves the selection**. A full-screen redirect to S03 would lose it | S12 / S13 | MVP+ (ships with F04) |
| **S45** | Could not complete | FL03's network-failure branch. Every other error is inline; a failed booking submission is the one case where the user must be told explicitly that **nothing was booked** | S13 | MVP |
| **S46** | Notification permission primer | FL01 step 7. Reminders (F50) are a stated brief feature and the no-show lever; asking the iOS permission cold wastes the single chance to get it | S06 | MVP |

`05-features-sitemap.md` has been updated: these three rows are appended to the screen list, which now runs **S01–S46 · 44 live screens · 26 MVP**.

---

## Coverage matrix

Screen → flows that use it. Screens with no flow are covered by "Screens outside flows" above.

| S## | Screen | Flows |
|---|---|---|
| S01 | Splash | FL01, FL02 |
| S02 | Welcome | FL01, FL02, FL11 |
| S03 | Sign in | FL01, FL02 |
| S04 | OTP | FL01, FL02 |
| S05 | Create profile | FL01 |
| S06 | Home venue | FL01 |
| S07 | Home | FL01, FL02, FL04, FL12, FL13 |
| S08 | Notification centre | *content block* · FL13 |
| S09 | Venue list | FL01, FL11 |
| S10 | Venue map | *content block* |
| S11 | Venue detail | FL11 |
| **S12** | **Grid** ★ | FL03, FL04, FL05, FL08, FL11 |
| S13 | Booking review | FL03, FL04, FL05, FL08, FL11 |
| **S14** | **Confirmed** ★ | FL03, FL04, FL08 |
| S15 | Series setup | FL05 |
| S16 | Series preview | FL05 |
| S17 | Series confirmed | FL05 |
| S18 | Venue switcher | FL03 |
| S19 | My bookings | FL06, FL07, FL13 |
| S20 | Booking detail | FL07, FL08, FL13 |
| S21 | Cancel — free | FL07 |
| S22 | Cancel — after 24 h | FL07 |
| S23 | Series detail | FL06 |
| S24 | Skip one occurrence | FL06 |
| S25 | Cancel whole series | FL06 *(variant)* |
| S26 | Extend series | *content block* — `ASSUMPTION`: entered from S23, no separate flow |
| S27 | Membership overview | FL09, FL10, FL12 |
| S28 | Packages | FL09 |
| S29 | Package detail | FL09 |
| S30 | Package reserved | FL09 |
| S31 | Tier detail | FL12 |
| S32 | How tiers work | FL12 |
| S33 | Points history | FL12 |
| S34 | Gifts | FL10 |
| S35 | Gift detail | FL10 |
| S36 | Redeem confirm | FL10 |
| S37 | Redemption code | FL10 |
| S38 | Redemption history | *content block* |
| S39–S43 | Profile, edit, settings, help, legal | *content blocks* |
| S44 | Sign-in sheet | FL03, FL11 |
| S45 | Could not complete | FL03 |
| S46 | Notification primer | FL01 |

**No screen is left without either a flow or a content block.** Every MVP feature from Step 05 appears in at least one flow.

---

## Assumptions

| # | Assumption | If wrong |
|---|---|---|
| A33 | Multi-select is limited to cells in the same time column | If users want several times at once, the grid's selection model and the review screen both grow |
| A34 | A selected slot is held briefly while the user is on S13 | If there is no hold, the "taken while deciding" error in FL03 becomes common rather than rare, and the review screen needs a countdown |
| A35 | The reminder fires at one fixed interval before the slot | If users want to choose it, S41 gains a setting |
| A36 | The booking detail (S20) is cached for offline use at the venue | If not possible, FL13 step 5 fails exactly where the product's differentiator lives |
| A37 | A skipped occurrence stays visible in the series marked "skipped" | If it disappears, users cannot tell a skip from a bug |
| A38 | Tier grace cancellation (A01) is offered on S22 at the moment of need | If tiers are not earned (Q-F5 reversal), S22 loses its best content |

Carried and still in force: A01–A32.

---

## Amendment from Step 08 — FL03 steps 4–6

Step 08 read 13 references for S12 and found that **no court-booking product shows a court × time matrix**; all of them narrow progressively. A04-R is replaced by **A04-R2** (see `08-moodboard.md` → "S12 — the references overturn A04-R"). The flow keeps its shape — venue → date+slot → court → confirm, still 4 choices, still the user's own court — but steps 4–6 of FL03 are now:

| # | User does | System does | Screen |
|---|---|---|---|
| 4 | Picks a period — Morning / Afternoon / Evening | Filters the slot list to 5–6 rows | S12 |
| 5 | Taps a slot row (time left, price right, "3 courts left" tag) | Reveals the 6 court tiles for that slot; taken ones badged "Booked" | S12 |
| 6 | Taps a court tile, then "Continue" | Holds the slot and court | S12 → S13 |

Consequential changes elsewhere in this file:
- **FL03 empty branch** — "a day with nothing free" becomes "a *period* with nothing free", and the message names the next period or day that has availability.
- **FL08 (two courts)** — multi-select now happens among the **court tiles of one slot**, which is simpler than A33's same-column rule and makes A33 redundant in its original wording: selecting two courts at one time is the only multi-select that exists.
- **FL04 (book again)** — unchanged; it skips S12 entirely.

No S## code changes. Nothing downstream is stale, because Step 09 has not run.
