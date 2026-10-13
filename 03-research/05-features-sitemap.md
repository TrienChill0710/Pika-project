# 05 · Features & sitemap

**Date:** 2026-10-10
**Step:** 05 · Features & sitemap — Phase 3 · Structure
**Reads:** `01-brief/00-pika-brief.png` · `02-brief-analysis.md` (frame LOCKED 390 × 844, iOS, portrait, light, English) · `03-business.md` · `04-users.md`

> **S## codes assigned here are permanent.** On any re-run, existing codes keep their meaning, new screens take the next free number, and dropped screens stay listed as `removed`. Every later file and the Figma file point at these codes.

This step is also the formal answer to the client's own question in the brief ¶7: *"your advice on the key user flows, the estimated number of main screens, and how to organize features such as court booking, membership packages, reward points, and notifications"*. The screen count is **44**, of which **26 are MVP**. (Updated in Step 06: S44–S46 added.)

---

## Feature catalogue

Tiers: **MVP** = launch is impossible without it · **MVP+** = ships soon after launch · **P2** = later.
Personas: **P1** weekly regular (primary) · **P2p** casual · **P3** group organiser · **P4** first-timer.

### Module A · Account & access

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F01 | Sign up with phone number + OTP | Get in without a password to forget | All | MVP | "Account registration and login" (bullet 1) |
| F02 | Sign in (returning user) | — | All | MVP | bullet 1 |
| F03 | Create profile: name, home venue | Lets the app open on the right venue (A22) | P1, P4 | MVP | `ASSUMPTION` from A22 |
| F04 | Browse venues and availability **before** signing up | A first-timer should see prices before committing to an account | P4 | MVP+ | `ASSUMPTION` — not in brief; Q-F9 below |
| F05 | Sign out | — | All | MVP | `ASSUMPTION` (standard) |
| F06 | Delete account | App Store requirement for apps with accounts | All | MVP | `ASSUMPTION — App Store policy` |

### Module B · Venue discovery

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F07 | Venue list with distance | Find where to play | P2p, P4 | MVP | "Viewing the list of courts" (bullet 2) |
| F08 | Venue map view | Category pattern C06 (Playtomic, Champick) | P2p, P4 | MVP+ | competitor evidence, Step 03 |
| F09 | Venue detail: photos, address, hours, price band | Decide between venues; reassure the first-timer | P4 | MVP | `ASSUMPTION` from A11, A24 |
| F10 | Set / change home venue | The regular should never choose a venue again | P1 | MVP | A22 |
| F11 | "Venues with free courts tonight" | Linh's actual question is *tonight*, not *which venue* | P2p | MVP+ | persona P2, Step 04 |

### Module C · Booking — the core

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F12 | **Court × time availability grid** — 6 courts × 16 slots, one venue, one day | See exactly what is free and pick the court | All | MVP | bullet 2 + Gate 1 (user picks the court) |
| F13 | Date strip, 7 days forward, bounded by the tier's booking window | Move between days without leaving the grid | All | MVP | C02 + A01 tier benefit |
| F14 | Price shown inside each cell ($18 / $36) | G03 — make off-peak visibly cheaper at the moment of choice | P2p, P4 | MVP | Step 03 implication 2, Step 04 implication 4 |
| F15 | Cell states: free · taken · past · selected | Tell the truth about availability | All | MVP | `ASSUMPTION` (standard) |
| F16 | Select 2+ cells in the same time column (adjacent courts) | Tuấn books two courts for 8 people | P3 | MVP+ | A23 |
| F17 | Booking review: venue, court, date, time, amount due at counter | Last check before committing | All | MVP | derived from Gate 1 (pay at counter) |
| F18 | Booking confirmation with amount due and "pay at the venue" | **G01 — the product's sharpest screen** | All | MVP | Gate 1 + Step 03 G01 |
| F19 | Book-again shortcut: repeat the last booking | P1's one-tap path; the primary user's primary action | P1 | MVP | Step 04 implication 1 |
| F20 | Switch venue from inside the grid | Linh's fallback when her venue is full | P2p | MVP+ | persona P2 |

### Module D · Recurring series

The brief names "fixed bookings" as one of the five things the chain struggles to manage (¶3), so this is MVP, not a later nicety.

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F21 | Create a series: same weekday + time + court, N weeks | Minh stops messaging every Sunday | P1 | MVP | "Booking multiple sessions based on a fixed schedule" (bullet 4) + A03 |
| F22 | Per-occurrence preview before confirming, showing which weeks need a substituted court | A12 — a series promises the *time*, not the court number | P1 | MVP | A12 |
| F23 | Series detail: all occurrences, each with its court | Manage without endangering the rest | P1 | MVP | A03 |
| F24 | Skip or cancel **one** occurrence | "I can't make the 14th" | P1 | MVP | persona P1 pain point |
| F25 | Cancel the whole series | — | P1 | MVP+ | `ASSUMPTION` |
| F26 | Extend a series by N more weeks | Keeps the habit alive without re-creating it | P1 | MVP+ | `ASSUMPTION` from A03 |

### Module E · My bookings

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F27 | Upcoming / Past tabs | C03; and Past is where points land (A02) | All | MVP | bullet 9 + A02 |
| F28 | Booking detail — screenshot-worthy in one frame | P3 shares by screenshot today | P3, all | MVP | Step 04 implication 6 |
| F29 | Cancel a booking, with the 24-hour rule stated on the screen | Gate 1 rule made visible, not buried | All | MVP | Gate 1 |
| F30 | Post-24 h state: cancellation no longer free, action changes rather than vanishing | Honesty at the boundary | All | MVP | Step 03, rules table |
| F31 | Pending-points badge on upcoming bookings | A02 made visible | P1 | MVP | A02 |
| F32 | Add to iOS Calendar | Low cost, high value for a recurring habit | P1, P3 | P2 | `ASSUMPTION` |

### Module F · Membership packages

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F33 | Package catalogue: prepaid blocks of hours, price, validity | "Registering for membership packages" (bullet 5) + A05 | P1 | MVP | bullet 5 |
| F34 | Buy / reserve a package — paid at the counter | Consistent with Gate 1; no payment surface | P1 | MVP | Gate 1 + A05 |
| F35 | Hours-remaining balance, shown as hours not money | C07 (CourtReserve's package balance) | P1 | MVP | Step 03 C07 |
| F36 | Booking draws on the balance when one exists — shown during booking review | The user must know which hour they are spending | P1 | MVP | Step 03 implication 6 |
| F37 | Renew / top up | — | P1 | MVP+ | `ASSUMPTION` from A09 |
| F38 | Package history (bought, used, expired) | — | P1 | P2 | `ASSUMPTION` |

### Module G · Points, tiers & gifts

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F39 | Point balance | "Tracking reward points after each court booking" (bullet 6) | P1 | MVP | bullet 6 |
| F40 | Points credited after the session is played | A02 | P1 | MVP | A02 |
| F41 | Tier badge: Rally / Volley / Smash | "Membership tier system based on different levels" (bullet 8) | P1 | MVP | bullet 8 + A01 |
| F42 | Tier progress to the next threshold, visible on opening | 9-month goals die without visible progress | P1 | MVP | Step 03 implication 7 |
| F43 | Tier benefits explained: booking window, multiplier, grace cancellation, peak priority | A tier nobody understands changes nothing | P1 | MVP | A01 |
| F44 | Points history (earned / spent) | Trust in the balance | P1 | MVP+ | `ASSUMPTION` |
| F45 | Gift catalogue with point costs | "Redeeming points for gifts such as water bottles, towels, shoes, or paddles" (bullet 7) | P1 | MVP | bullet 7 |
| F46 | Redeem a gift → code or QR for the counter | A14 — something must bridge app and counter | P1 | MVP | A14 |
| F47 | Redemption history and status (collected / not yet) | — | P1 | MVP+ | `ASSUMPTION` from A14 |
| F48 | Rolling-12-month tier window explained | Otherwise a tier drop feels like a bug | P1 | MVP+ | A01 |

### Module H · Notifications

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F49 | Push: booking confirmation | bullet 10 | All | MVP | bullet 10 |
| F50 | Push: reminder before the session | C05 — framed as no-show reduction | All | MVP | bullet 10 + Step 03 C05 |
| F51 | Push: promotions | bullet 10 | All | MVP+ | bullet 10 |
| F52 | In-app notification centre with history | A07 — a push cannot be retrieved | All | MVP | A07 |
| F53 | Notification preferences per type | Stops promos poisoning the reminder channel | All | MVP+ | `ASSUMPTION` |
| F54 | Points-credited notification | Closes the loop opened by F31 | P1 | MVP+ | A02 |

### Module I · Profile & system

| ID | Feature | Goal it serves | Persona | Tier | Source |
|---|---|---|---|---|---|
| F55 | Profile: name, phone, home venue, tier | — | All | MVP | `ASSUMPTION` |
| F56 | Edit profile | — | All | MVP | `ASSUMPTION` |
| F57 | Help / FAQ — including "how payment works" | P4's main anxiety, answered without a tutorial | P4 | MVP | Step 04 implication 5 |
| F58 | Terms & privacy | A16 | All | MVP | A16 |
| F59 | Loading, empty and error states on every data screen | Step 04 implication 8 | All | MVP | Step 04 |
| F60 | Offline state on the grid | Linh may book on a weak connection | P2p | MVP+ | Step 04 |

**60 features · 40 MVP · 16 MVP+ · 4 P2.** No orphans: every feature names a goal and at least one persona.

---

## Navigation model

**Bottom tab bar, 5 destinations** — iOS standard, category pattern C01, and the maximum the guideline allows.

| Tab | Holds | Why it is top-level |
|---|---|---|
| **Home** | Upcoming booking · book-again · home venue · points snapshot · notification bell | The regular's landing pad. Step 04 implication 1: the first action is *book again*, not *find a court* |
| **Book** | Opens **directly on the home venue's grid for today**, with a venue switcher in the header | The core job. Opening on the grid rather than a venue list means a new booking is 1 tap from anywhere. For a user with no home venue (P4), it opens on the venue list instead |
| **Bookings** | Upcoming / Past, series | The brief's "Managing booked court schedules" (bullet 9); also where points land |
| **Membership** | Hours balance · packages · tier & points · gifts | The brief's "manage their membership benefits" (¶4) in one place. Keeping packages, tiers and points together is what makes the section coherent — they are all "what my relationship with Pika is worth" |
| **Profile** | Account, settings, notification preferences, help, legal | Everything that is not a task |

**Two decisions worth naming:**

1. **Home and Book are not redundant.** Home is personalised and answers "what is already arranged"; Book is a tool and answers "what is free". Merging them would force the regular to scroll past discovery to reach their own booking.
2. **Packages and rewards share one tab.** They could be split, but both answer the same user question and splitting them would push Profile or Book out of the bar.

Notifications are a **bell in the Home header**, not a tab — they are a check, not a destination.

---

## Sitemap

```
S01 Splash
S02 Welcome (sign up / sign in / browse first)
├── S03 Sign in — phone number
│   └── S04 OTP verification
└── S05 Create profile (name)
    └── S06 Choose home venue

S07 Home  ◀ TAB 1
├── S08 Notification centre
└── (entry points into S11, S17, S22)

S09 Venue list  ◀ TAB 2 entry for users with no home venue
├── S10 Venue map
└── S11 Venue detail
    └── S12 Court × time grid  ◀ TAB 2 default for users with a home venue  ★ core screen
        ├── S13 Booking review
        │   └── S14 Booking confirmed
        ├── S15 Make it recurring — series setup
        │   ├── S16 Series preview (per-occurrence courts, substitutions marked)
        │   └── S17 Series confirmed
        └── S18 Venue switcher (sheet)

S19 My bookings — Upcoming / Past  ◀ TAB 3
├── S20 Booking detail
│   ├── S21 Cancel booking — confirm
│   └── S22 Cancel after the 24-hour boundary — what happens now
└── S23 Series detail — all occurrences
    ├── S24 Skip or cancel one occurrence
    ├── S25 Cancel the whole series
    └── S26 Extend the series

S27 Membership overview — hours · tier · points  ◀ TAB 4
├── S28 Packages — catalogue
│   └── S29 Package detail
│       └── S30 Package reserved — pay at the counter
├── S31 Tier detail — benefits & progress
│   └── S32 How tiers work (rolling 12 months)
├── S33 Points history
└── S34 Gifts — catalogue
    └── S35 Gift detail
        └── S36 Redeem — confirm
            └── S37 Redemption code (show at the counter)
                └── S38 Redemption history

S39 Profile  ◀ TAB 5
├── S40 Edit profile
├── S41 Settings — notification preferences, home venue
├── S42 Help & FAQ — including how payment works
└── S43 Terms & privacy
```

**Deliberately not in the sitemap** — recorded so the decision is not re-opened by accident: no onboarding carousel (Step 04 implication 5 — nobody reads it; S05–S06 do the necessary work), no match-finding, no player levels, no stats, no events, no in-app payment, no staff screens, no waitlist (Q-F6 default).

---

## Screen list

| S## | Screen | Parent | Features | Tier |
|---|---|---|---|---|
| S01 | Splash | — | F59 | MVP |
| S02 | Welcome | S01 | F01, F02, F04 | MVP |
| S03 | Sign in — phone | S02 | F01, F02 | MVP |
| S04 | OTP verification | S03 | F01, F02 | MVP |
| S05 | Create profile | S04 | F03 | MVP |
| S06 | Choose home venue | S05 | F03, F10 | MVP |
| **S07** | **Home** | tab | F19, F31, F39, F41, F42, F52, F59 | MVP |
| S08 | Notification centre | S07 | F49, F50, F51, F52, F54, F59 | MVP |
| S09 | Venue list | tab | F07, F11, F59 | MVP |
| S10 | Venue map | S09 | F08 | MVP+ |
| S11 | Venue detail | S09 | F09, F10 | MVP |
| **S12** | **Court × time grid** ★ | tab / S11 | F12, F13, F14, F15, F16, F20, F59, F60 | MVP |
| S13 | Booking review | S12 | F17, F36 | MVP |
| **S14** | **Booking confirmed** ★ | S13 | F18, F49 | MVP |
| S15 | Series setup | S12 | F21 | MVP |
| S16 | Series preview | S15 | F22 | MVP |
| S17 | Series confirmed | S16 | F18, F22, F49 | MVP |
| S18 | Venue switcher (sheet) | S12 | F20 | MVP+ |
| S19 | My bookings | tab | F27, F31, F59 | MVP |
| S20 | Booking detail | S19 | F28, F29, F31, F32 | MVP |
| S21 | Cancel — confirm | S20 | F29 | MVP |
| S22 | Cancel after 24 h | S20 | F30 | MVP |
| S23 | Series detail | S19 | F23 | MVP |
| S24 | Skip / cancel one occurrence | S23 | F24 | MVP |
| S25 | Cancel whole series | S23 | F25 | MVP+ |
| S26 | Extend series | S23 | F26 | MVP+ |
| **S27** | **Membership overview** | tab | F35, F39, F41, F42, F59 | MVP |
| S28 | Packages catalogue | S27 | F33 | MVP |
| S29 | Package detail | S28 | F33, F34 | MVP |
| S30 | Package reserved — pay at counter | S29 | F34 | MVP |
| S31 | Tier detail | S27 | F41, F42, F43 | MVP |
| S32 | How tiers work | S31 | F48 | MVP+ |
| S33 | Points history | S27 | F44 | MVP+ |
| S34 | Gifts catalogue | S27 | F45 | MVP |
| S35 | Gift detail | S34 | F45 | MVP |
| S36 | Redeem — confirm | S35 | F46 | MVP |
| S37 | Redemption code | S36 | F46 | MVP |
| S38 | Redemption history | S34 | F47 | MVP+ |
| S39 | Profile | tab | F55, F05, F06 | MVP |
| S40 | Edit profile | S39 | F56 | MVP |
| S41 | Settings | S39 | F10, F53 | MVP |
| S42 | Help & FAQ | S39 | F57 | MVP |
| S43 | Terms & privacy | S39 | F58 | MVP |
| S44 | Sign-in sheet (in-context) | S12 / S13 | F02, F04 | MVP+ |
| S45 | Could not complete | S13 | F59 | MVP |
| S46 | Notification permission primer | S06 | F49, F50 | MVP |

> **Added in Step 06** (see `06-user-flows.md` → Sitemap changes). S44 keeps the selection alive when an anonymous browser hits the sign-in wall; S45 is the one error that needs its own screen, because the user must be told explicitly that nothing was booked; S46 earns the iOS notification permission before the system asks. No existing code was renumbered.

**46 screen codes · 44 live screens** (S10, S18, S44 are MVP+ but live). **26 are MVP** — close to the "estimated number of main screens" the client asked for in ¶7. The answer to give the client: **about 26 screens to launch, 44 for the full v1 experience including states.**

★ marks the two screens Step 03 identified as decisive: the grid (S12) and the confirmation (S14).

---

## Coverage check

**Every MVP feature has a screen.** Checked feature by feature; no MVP feature is unplaced.

**Depth check — important tasks from a top-level destination:**

| Task | Path | Taps from a tab |
|---|---|---|
| Repeat last week's booking | S07 → F19 → S13 → S14 | **2** ✅ |
| Book a new court at my venue | Book tab → S12 (opens on home venue) → cell → S13 | **2** ✅ |
| Check my next booking | S07 (on screen, no tap) or S19 | **0–1** ✅ |
| Cancel a booking | S19 → S20 → S21 | **2** ✅ |
| Change one week of my series | S19 → S23 → S24 | **2** ✅ |
| See my points and tier | S27 (on screen) or S07 snapshot | **0** ✅ |
| Redeem a gift | S27 → S34 → S35 → S36 | **3** ⚠ |
| Buy a package | S27 → S28 → S29 → S30 | **3** ⚠ |
| Find a venue as a first-timer | Book tab → S09 → S11 → S12 | **2** ✅ |

Two tasks sit at 3 taps. Both are deliberate: redeeming a gift and buying a package are **considered purchases**, not habitual actions, and both benefit from a detail screen before committing. Neither is a daily task for the primary persona. **No MVP task for P1 exceeds 2 taps.**

**Gaps found and left open:**

| Gap | Status |
|---|---|
| What a user sees when their tier drops at the end of a rolling 12-month window | F48 / S32 cover the explanation, but the drop *event* has no screen — `ASSUMPTION`: handled as a notification + a line on S31 |
| What happens to unused package hours at expiry | No screen, no rule — **Q-F10** below |
| Whether a package purchase can be cancelled before payment at the counter | No screen — `ASSUMPTION`: a reserved package can be abandoned silently; it only becomes real when paid |

---

## Assumptions

| # | Assumption | If wrong |
|---|---|---|
| A27 | 5-tab bottom navigation; Book opens on the home venue grid for users who have one | If users expect a venue list first, the Book tab's default changes — cheap before Step 09 |
| A28 | Packages, tiers, points and gifts belong in one "Membership" section | If the client sees packages as a shop and rewards as a game, the tab splits and Profile or Book is demoted |
| A29 | Phone + OTP authentication, no password | If email/password is required, S03–S04 change shape |
| A30 | Browsing without an account is allowed (F04) | If sign-in is mandatory first, P4's path shortens and S02 changes |
| A31 | Booking window limited by tier (7 / 14 / 30 days) bounds the date strip on S12 | A01 — if tiers are not earned, the date strip is uniform for everyone |
| A32 | A reserved package is not binding until paid at the counter | If it is binding, S30 needs a commitment warning and a cancellation path |

### New client questions

| # | Question | Why | Default |
|---|---|---|---|
| **Q-F9** | Can people browse venues, prices and availability **without** an account? | Decides whether P4 meets a sign-up wall before seeing a price — a significant conversion decision | Yes, browse freely; sign-in required only at the moment of booking |
| **Q-F10** | What happens to unused hours when a package expires? Lost, extended, or converted to points? | There is no screen for this because there is no rule; it will be the first support question | Lost at expiry, with a reminder notification 7 days before |
| **Q-F11** | Does the counter need a scannable code for a booking too, or only for gift redemption? | A14/A26. If bookings need check-in, S20 gains a code and the counter flow changes | Gift redemption only; a booking is found by name or phone at the counter |

Carried and still in force: A01–A26.
