# Pika — Master spec

**Date:** 2026-10-12
**Step:** 12 · Master spec → Claude Design — Phase 6 · Final UI
**Status of the inputs it is built from:** Gate 1–5 all APPROVED. Palette LOCKED (Step 07, Option A). Style contract LOCKED (`03-research/08-moodboard.md`). Tokens LOCKED (`05-tokens/`, 550 tokens). Look LOCKED by `04-proof-ui/proof-5-screens.html`.

> **This file is the single source for Claude Design.** Where this file and a research file disagree, this file is wrong and must be fixed before building. Where this file and `proof-5-screens.html` disagree about *look*, the proof wins; about *content and structure*, this file wins.

---

## 1 · Product summary

- **What** — Pika: a court-booking app for a 6-venue Pickleball chain. Customers see real availability, pick their own court, book single sessions or weekly series, buy prepaid hour packages, earn points towards three tiers, and redeem points for gifts. Payment happens **at the counter**, never in the app.
- **For whom** — primary: the weekly regular who plays the same slot every week (persona P1, "Minh"). Secondary: the casual player asking "what's free tonight", the group organiser booking two courts, the first-timer who wants to see a price before signing up.
- **Platform** — iOS first, customer app only. No staff or admin screens.
- **Frame** — 390 × 844 pt, portrait, one size only.
- **Modes & language** — light mode only. English only. Currency `$`.

---

## 2 · Design foundation

Every value below exists as a token in `05-tokens/`. **Claude Design must declare these as CSS variables in `:root` and reference them with `var()` — no hex outside `:root`, no inline styles.** The variable names in the left column are the ones already used in `proof-5-screens.html`; keep them identical so Step 13 can re-sync.

### 2.1 Colour — roles, not hues

| CSS variable | Value | Token | Use |
|---|---|---|---|
| `--page-bg` | `--gradient-page` | `primitive.gradient.page` | The page surface. **Never pure white.** Lime wash at top, blue-grey at bottom, plus two faint radial glows |
| `--color-text-primary` | `#1A2733` | `neutral.900` | Headings, values, anything that must be read first |
| `--color-text-secondary` | `#5A5C5E` | `neutral.700` | Supporting text. **neutral-600 fails (4.05:1) on the darkest wash stop — 700 is the floor** |
| `--color-text-on-glass` | `#404244` | `neutral.800` | Text and icons on the glass bars (6.25:1 measured on the worst composite) |
| `--color-text-unavailable` | `neutral.600` on `neutral.100` | — | "Booked" / past slots. 5.68:1 — greyed, still legible |
| `--color-text-inverse` | `#FEFFFF` | `neutral.0` | Text on navy |
| `--color-text-inverse-muted` | `transparent.white-72` | — | Eyebrow and unit text on navy |
| `--color-accent-surface` | `#C6F024` | `lime.200` | **The one lime surface per screen.** A fill, never a text colour |
| `--color-accent-text` | `#354D00` | `lime.800` | Lime *as type* on light surfaces. Raw `#C6F024` is 1.32:1 on white and is never type |
| `--color-text-on-accent` | `#0C1E36` | `navy.900` | Text on the lime surface |
| `--color-action-primary-bg` | `--gradient-hero-accent` | — | The primary CTA |
| `--color-border-control` | `#747679` | `neutral.600` | Control boundaries (WCAG 1.4.11 — 4.18:1, moved up from a failing 2.98:1) |
| `--color-border-divider` | `#EBECED` | `neutral.100` | Hairlines inside cards. Decorative, exempt from 1.4.11 |
| `--color-border-selected` | `lime.200` | — | The selected court tile's ring |
| `--color-status-success-fg` / `-warning-fg` | `positive.500` / `warning.500` | — | Status chips only |

**Gradients** (8, all single-hue): `--gradient-page` · `--gradient-hero-ink` · `--gradient-hero-accent` · `--gradient-glow-ink` · `--gradient-glow-accent` · `--gradient-card` · `--gradient-tile-ink` · `--gradient-tile-sky`. A gradient that introduces a second hue is not permitted.

**Glass** — `--glass-bar-bg` + `--glass-bar-border` + `--glass-blur`, plus `--glass-circle-light` / `-dark` for frosted icon wells and `--glass-inset-ink` / `-accent` for frosted rows inside heroes. Permitted on **exactly two** elements: the floating tab bar and the sticky booking bar. Plus frosted blocks *inside* heroes and circular icon wells. Glass on a static card is not permitted.

### 2.2 Typography — Inter, LOCKED

14 roles, one per semantic token group. Tabular figures wherever numbers align (prices, points, times, court numbers).

| Role | Size / line-height / weight | Use |
|---|---|---|
| `amount` | 52 · 1.08 · 700 | The hero number: an amount due, hours remaining, a point balance |
| `hero` | 44 · 1.08 · 700 | Secondary hero numbers |
| `display` | 32 · 1.08 · 700 | Screen-level statement ("Court 4 is yours") |
| `heading` | 24 · 1.28 · 700 | Screen title in content, not in the nav bar |
| `title` | 20 · 1.28 · 700 | Card title, section title |
| `body-lg` | 17 · 1.28 · 600 | Row primary text, button label |
| `body` | 15 · 1.45 · 400 | Paragraph, description |
| `body-bold` | 15 · 1.45 · 600 | Row value, emphasised body |
| `label` | 13 · 1.45 · 500 | Field label, meta line |
| `label-bold` | 13 · 1.45 · 600 | Chip text, status text |
| `caption` | 12 · 1.45 · 500 | Helper text under a field |
| `micro` | 11 · 1.45 · 500 | Tab label, badge |
| `microcaps` | 11 · 1.45 · 600 · ls .07em · UPPERCASE | Eyebrow above a hero, status chip |
| `statusbar` | 15 · 1.28 · 600 | The iOS status bar clock only |

Fallback stack: `Inter, -apple-system, system-ui, sans-serif`.

### 2.3 Spacing — the four-step rhythm

**No gap is chosen by feel.** Every gap answers "what is the relationship between these two things?"

| Variable | Value | Meaning |
|---|---|---|
| `--gap-attached` | 6 | The panel **belongs to** the thing directly above it — court tiles under their selected slot |
| `--gap-peer` | 12 | **Equal rank** inside one group — booking cards, menu rows, a hero and its action |
| `--gap-group` | 20 | Two groups that **still belong together** — the amount card and the facts that qualify it |
| `--gap-section` | 32 | **Unrelated** sections — a filter and its results, one subject and the next |

`--space-gutter` = 20 (left/right page padding). A filter control is **always** `gap-section` from its result list — the date strip on S12 and the Upcoming/Past tabs on S19 alike.

### 2.4 Radius, depth, sizing

Radius: chips and buttons **full** · cards **22** · heroes **28** · frames **34** · small tiles **16** · inputs **12**.

Shadows — 4 levels, one layer each: `--shadow-card` (0 2 10, ink 5%) · `--shadow-hero` (0 12 30, ink 14%) · `--shadow-hero-accent` (0 12 30, lime 26%) · `--shadow-bar` (0 10 34, ink 14%). Separation comes from surface colour, radius and gradient — not from heavy shadows.

Sizing: status bar **47** · nav bar **44** · tab bar **66** (floating, 20 from the bottom) · minimum touch target **44** · tab icon **22** · interface icon **24** · inline icon **20** · chip icon **16**.

### 2.5 Icons & logo

- **Lucide only**, outline, stroke 2 at a 24 viewBox, round caps. If an icon does not exist in Lucide, the pattern changes — a second source is never added.
- **Tab bar:** all five icons are **outline**. The active one sits in a single navy gradient pill (46 × 32, fully rounded) and is stroked in `--tab-active-stroke` = `lime.200` — 9.16:1 on navy. The pill is the same for all five destinations. Icons: `house` · `calendar-plus` · `ticket` · `award` · `user`.
- **Logo:** `02-assets/logo/01-pika-logo.png` only, on white surfaces only — it has an opaque white background and wide baked-in padding. It appears on **S01 and S02 only**. Never on the navy heroes (no transparent version exists this release).
- **Court motif:** inline SVG geometry — outer line, net, two kitchen lines, two centre service lines — at low opacity in a hero's corner. **Court lines, never the logo redrawn.** Maximum one per screen, heroes only, and currently on 3 screens (S07, S14, S27); adding a fourth makes it wallpaper.

---

## 3 · Screens

**46 screens, S01–S46**, grouped by sitemap branch, in S## order. (S10, S18, S44 are MVP+ but live. 26 are MVP.)

> **Count correction.** `05-features-sitemap.md` carries the headline "46 screen codes · 44 live screens". That 44 is an arithmetic slip: it was the live count *before* S45 and S46 were appended in Step 06, and the headline was not re-added up. No code is marked `removed`, so the live count is **46**. This spec specifies all 46. `05-features-sitemap.md` should be corrected in Step 13; nothing downstream depends on the number except the sentence given to the client, which becomes "about 26 screens to launch, 46 for the full v1 experience including states."

**Reading the Actions column:** every tap target names its destination as `→ S##` or `→ state`. This is what makes the entry-point check in §5 possible.

**Sample content is fixed across the whole spec** so the screens read as one product: member **Minh**, tier **Volley**, **1,284** points, **6.5** hours remaining on a package, home venue **Pika District 7**, the regular slot **Court 4 · Tue 19:00–20:00**, price **$18** off-peak / **$36** peak (17:00–21:00 weekdays + all weekend). The six venues are **Pika District 7 · Pika Thao Dien · Pika Phu Nhuan · Pika Binh Thanh · Pika Tan Binh · Pika Go Vap**.

---

### Branch A · Launch & account (S01–S06, S46)

#### S01 · Splash
`parent —` · `flows FL01, FL02`

| | |
|---|---|
| **Purpose** | Cover the session check. The only screen with no user action. |
| **Layout** | Full-bleed `--gradient-hero-ink`. Centred: logo lockup on a white rounded plate (the logo needs a white background), court motif at 6% opacity bottom-right. Nothing else. |
| **Content** | The logo. No tagline, no version number. |
| **Actions** | None. Auto-advances: session found → `→ S07`; none → `→ S02`. |
| **States** | **default** = the only state. **loading** n/a — this screen *is* the loading state. **empty / error / success / disabled** n/a — no data, no input. If the session check fails the app treats it as "no session" and routes to S02; there is no error screen here. |
| **Notes** | No status bar (full-bleed). Minimum 600 ms so it does not flash. |

#### S02 · Welcome
`parent S01` · `flows FL01, FL02, FL11`

| | |
|---|---|
| **Purpose** | Three doors: create an account, sign in, or look around first. The third door is the conversion decision (Q-F9 default = browsing allowed). |
| **Layout** | Top → bottom: status bar · logo plate · `gap-section` · headline + one line of body · `gap-section` · hero image (IMG08, 16:9, radius 28, stacked edges) · `gap-group` · primary CTA · `gap-peer` · secondary text button · `gap-peer` · tertiary text link. |
| **Content** | Headline "Your court, when you want it." Body "See what's free at all six Pika venues, book the court you want, and pay at the counter." Primary **Create account**. Secondary **I already have an account**. Tertiary **Look around first**. |
| **Actions** | Create account `→ S03` · I already have an account `→ S03` (same screen, different copy state) · Look around first `→ S09` in browse mode. |
| **States** | **default** only. **loading / empty / error / success / disabled** n/a — nothing is fetched and nothing is submitted. |
| **Notes** | The lime slot on this screen is the primary CTA. Browse mode is a global flag: it changes S09/S11/S12 to read-only and makes S44 rise at the booking moment. |

#### S03 · Sign in — phone number
`parent S02` · `flows FL01, FL02`

| | |
|---|---|
| **Purpose** | Take a phone number and send an OTP. One field, no password (A29). |
| **Layout** | Nav bar with back · `gap-section` · heading + caption · `gap-group` · country-code select + phone input (one row) · `gap-attached` · helper caption · `gap-section` · primary CTA · `gap-group` · legal microcopy. |
| **Content** | Heading "What's your number?" Caption "We'll text you a 6-digit code. No password to remember." Field label "Phone number", placeholder "090 123 4567", prefix `+84`. Helper "Standard message rates may apply." CTA **Send code**. Legal "By continuing you agree to our Terms and Privacy Policy." |
| **Actions** | Back `→ S02` · Terms `→ S43` · Privacy `→ S43` · Send code `→ S04`. |
| **States** | **default** CTA disabled until the number is valid. **loading** spinner inside the CTA, label "Sending…", field locked. **error** invalid format — inline under the field, red text + red control border, CTA stays enabled so the user can retry. **empty** n/a — single input. **success** n/a — advancing to S04 is the confirmation. **disabled** the CTA, until the field is valid. |
| **Notes** | Numeric keyboard. The CTA sits above the keyboard, not under it. |

#### S04 · OTP verification
`parent S03` · `flows FL01, FL02`

| | |
|---|---|
| **Purpose** | Verify the code and either restore the account or create it. |
| **Layout** | Nav bar with back · `gap-section` · heading + the number it was sent to · `gap-group` · 6 code boxes in a row · `gap-attached` · inline error slot · `gap-group` · resend row (countdown) · `gap-section` · primary CTA. |
| **Content** | Heading "Enter the code". Sub "Sent to +84 90 123 4567 · Change". Resend "Send again in 0:42" → after the countdown, "Send again" as a button. CTA **Verify**. |
| **Actions** | Back `→ S03` · Change `→ S03` · Send again `→ loading, countdown restarts` · Verify: new account `→ S05`; returning account `→ S07`. |
| **States** | **default** auto-focus box 1, auto-advance per digit. **loading** CTA spinner, boxes locked. **error** wrong or expired code — all six boxes take the red control border, inline "That code isn't right. Check it or send a new one." boxes clear, focus returns to box 1. After 3 failures the resend row becomes "Try again in 60 seconds" and the CTA disables. **empty / success** n/a. **disabled** CTA until 6 digits; CTA + resend after 3 failures. |
| **Notes** | One-time-code autofill. Paste fills all six boxes. |

#### S05 · Create profile
`parent S04` · `flows FL01`

| | |
|---|---|
| **Purpose** | Take the name. One field — this is not an onboarding carousel (Step 04 implication 5). |
| **Layout** | Nav bar, no back (the account exists now) · `gap-section` · heading + caption · `gap-group` · name input · `gap-section` · primary CTA. Step indicator "1 of 2" in the nav bar. |
| **Content** | Heading "What should we call you?" Caption "It's how the counter staff will greet you." Label "Your name", placeholder "Minh". CTA **Continue**. |
| **Actions** | Continue `→ S06`. |
| **States** | **default** CTA disabled until non-empty. **loading** CTA spinner on save. **error** save failed — inline "Couldn't save that. Try again." CTA becomes **Try again**. **empty / success** n/a. **disabled** CTA while the field is empty. |
| **Notes** | No skip. A nameless account breaks the counter interaction, which is the product's point. |

#### S06 · Choose home venue
`parent S05` · `flows FL01`

| | |
|---|---|
| **Purpose** | Set the venue the Book tab opens on (A22). This is what makes booking two taps for the regular. |
| **Layout** | Nav bar "2 of 2" · `gap-section` · heading + caption · `gap-group` · 6 venue rows (photo 56² radius 16, name, district, distance, chevron) at `gap-peer` · `gap-section` · primary CTA pinned to the bottom. |
| **Content** | Heading "Where do you usually play?" Caption "We'll open the app here. You can change it any time." Rows: Pika District 7 · 1.2 km · 6 courts; Pika Thao Dien · 3.4 km; Pika Phu Nhuan · 5.1 km; Pika Binh Thanh · 6.0 km; Pika Tan Binh · 7.8 km; Pika Go Vap · 9.3 km. CTA **Continue**. |
| **Actions** | A row `→ selected state` (ring + check, single-select) · Continue `→ S46`. |
| **States** | **default** nothing selected, CTA disabled. **loading** 6 skeleton rows at the real row height, so the list does not jump. **empty** n/a — there are always 6 venues. **error** list failed to load — a `factstrip` with "Couldn't load venues" and a **Retry** button; the CTA is replaced by **Skip for now** `→ S46`, because a missing venue list must not block account creation. **success** n/a — the Book tab opening here is the confirmation (FL01). **disabled** CTA until a row is selected. |
| **Notes** | Images: one per venue, IMG01–IMG06, cropped square. |

#### S46 · Notification permission primer
`parent S06` · `flows FL01`

| | |
|---|---|
| **Purpose** | Earn the iOS permission before the system asks it, so the single chance is not wasted (F49, F50). |
| **Layout** | Sheet over S07, radius 34 top corners. Grabber · **IMG14** at 88 px · `gap-group` · heading · `gap-peer` · 2-row benefit list (icon + line) · `gap-section` · primary CTA · `gap-peer` · secondary text button. |
| **Content** | Heading "Two notifications, that's all." Rows: `check-circle` "When a booking is confirmed — with your court number"; `clock` "A reminder before you play, so the court doesn't sit empty." Below in `caption`: "Promotions are off by default. You can change this in Settings." CTA **Allow notifications**. Secondary **Not now**. |
| **Actions** | Allow notifications `→ the iOS system prompt, then S07` · Not now `→ S07` · (both paths land on S07; the choice is recorded on S41). |
| **States** | **default** only. **loading / empty / error** n/a — nothing is fetched. **success** n/a — S07 is the destination either way. **disabled** n/a. |
| **Notes** | Must appear **after** the account exists and **before** Home, so the reason is concrete. Never shown twice. |

---

### Branch B · Home (S07–S08)

#### S07 · Home ★
`parent tab 1` · `flows FL01, FL02, FL04, FL12, FL13`

| | |
|---|---|
| **Purpose** | The regular's landing pad. Answers "what is already arranged" and offers the two-tap repeat. **Not** a discovery screen. |
| **Layout** | Status bar · header row (greeting left, notification bell with unread dot right) · `gap-group` · **next-booking hero** (`hero-ink`: stacked edges, court motif, eyebrow "NEXT SESSION", court + time at `display`, venue line, frosted caption row carrying the amount due) · `gap-peer` · **Book again** primary CTA (the screen's one lime surface) · `gap-group` · **fact strip** (points · tier progress, hairline-divided, neutral) · `gap-section` · section title "Tonight at Pika District 7" · `gap-peer` · venue card (IMG01, 16:9) with 3 free-slot chips · `gap-section` · bottom spacer for the floating tab bar · tab bar. |
| **Content** | "Good evening, Minh". Hero: NEXT SESSION / "Court 4 · 19:00" / "Tue 14 Oct · Pika District 7" / frosted row "$18 due at the counter". CTA "Book again — Court 4, Tue 19:00". Fact strip: "1,284 pts" + "Volley · 1,216 to Smash". Tonight chips: 20:00 $36 · 21:00 $36 · 06:00 tomorrow $18. |
| **Actions** | Bell `→ S08` · hero `→ S20` · Book again `→ S13` (pre-selected) · points fact `→ S27` · tier fact `→ S31` · section title `→ S12` · venue card `→ S11` · a slot chip `→ S12` with that slot preselected · tab bar `→ S07 / S12 / S19 / S27 / S39`. |
| **States** | **default** as above. **loading** hero and fact strip as skeletons at full height; the tab bar and header render immediately. **empty** (new account, FL01) the hero is replaced by a single `hero-accent` card "Book your first court" with a one-line body and the CTA inside it; "Book again" is **absent**, not disabled; the fact strip shows "0 pts · Rally" with the body "Points land after you play."; the Tonight section still renders. **error** booking data unavailable — the hero shows the last known booking with a `microcaps` tag "NOT UP TO DATE" and a quiet **Refresh**; the rest of the screen renders normally. **success** n/a — passive screen. **disabled** n/a. |
| **Notes** | Scrolls under the glass tab bar. The lime slot is spent on "Book again" — so the off-peak chips use a lime **border + `--color-accent-text`**, not a fill. The fact strip exists precisely so points and tier cannot compete with the hero. |

#### S08 · Notification centre
`parent S07` · `flows FL13` + content block

| | |
|---|---|
| **Purpose** | Retrieve what a push said (A07). A push cannot be re-read; this is where it lives. |
| **Layout** | Nav bar: back · title "Notifications" · "Mark all read" text action · `gap-section` · grouped list: day header (`microcaps`) then rows at `gap-peer`. Row: leading glass circle with a type icon · title (`body-lg`) · body (`label`) · time right-aligned · unread = a lime dot before the title and `--gradient-card` on the row. |
| **Content** | TODAY — `check-circle` "Booking confirmed" / "Court 4 · Tue 14 Oct, 19:00 · $18 at the counter" / 2h; `award` "+18 points" / "From Court 2, Sun 12 Oct" / 9h. THIS WEEK — `clock` "Playing in 2 hours" / "Court 4 · Pika District 7" / Tue; `gift` "New gift: Pika paddle" / "2,400 pts" / Mon. |
| **Actions** | Back `→ S07` · Mark all read `→ default state, all rows read` · a booking row `→ S20` · a points row `→ S33` · a gift row `→ S35` · a promotion row `→ S34`. |
| **States** | **default** as above. **loading** 5 skeleton rows. **empty** centred: **IMG14** at 96 px, "Nothing yet", body "Booking confirmations and reminders will appear here." **error** "Couldn't load notifications" in a `factstrip` + **Retry**. **success** n/a. **disabled** "Mark all read" is disabled when nothing is unread. |
| **Notes** | Newest first. Grouped by day, never by type — the user is looking for *when*, not *what kind*. |

---

### Branch C · Discovery & booking (S09–S18, S44, S45)

#### S09 · Venue list
`parent tab 2 (no home venue) / S02 browse` · `flows FL01, FL11`

| | |
|---|---|
| **Purpose** | The Book tab's entry for a user with no home venue, and the browse-mode landing. Answers "where can I play" and, for the casual player, "who has courts tonight" (F11). |
| **Layout** | Status bar · nav bar: title "Venues" · map toggle icon right · `gap-section` · segment "All venues / Free tonight" · `gap-section` · venue cards at `gap-peer`. Card: photo 16:9 radius 22 top · name (`title`) · district + distance (`label`) · price band chip "from $18" · a row of up to 3 free-slot chips · `gap-section` · tab bar. |
| **Content** | 6 cards — **IMG01, IMG02, IMG03, IMG04, IMG05, IMG06**, one per venue, cropped 16:9. Pika District 7 · 1.2 km · from $18 · 20:00 · 21:00 · 06:00. Pika Thao Dien · 3.4 km · from $18 · 19:00 · 20:00. Pika Phu Nhuan · 5.1 km · from $18 · "Full tonight". … |
| **Actions** | Map toggle `→ S10` · a card `→ S11` · a slot chip `→ S12` with that venue + slot preselected · segment `→ filtered state`. In browse mode the tab bar is replaced by a bottom bar "Create account to book" `→ S03`. |
| **States** | **default** as above. **loading** 3 skeleton cards at full height. **empty** only reachable under "Free tonight" — a `factstrip` "No free courts tonight at any venue", body "The earliest is 06:00 tomorrow at Pika District 7", action **See tomorrow** `→ S12`. Never an empty list with no exit. **error** "Couldn't load venues" + **Retry**; cached cards shown behind it with a NOT UP TO DATE tag if any exist. **success** n/a. **disabled** n/a. |
| **Notes** | Distance needs location permission; without it the distance line is omitted and the cards keep alphabetical order — no permission prompt on this screen. |

#### S10 · Venue map
`parent S09` · content block (C06)

| | |
|---|---|
| **Purpose** | Spatial discovery for the first-timer who thinks in geography, not in lists. |
| **Layout** | Full-bleed map. Floating glass nav bar at the top (back · "Venues" · list toggle). 6 pins; the selected pin is a lime marker. A bottom sheet card for the selected pin, at `--size-bar-h` above the bottom: photo 64² · name · distance · "from $18" · chevron. |
| **Content** | 6 pins across HCMC. Selected: Pika District 7 · 1.2 km · from $18 · 6 courts. |
| **Actions** | Back `→ S09` · list toggle `→ S09` · a pin `→ sheet updates to that venue` · the sheet card `→ S11`. |
| **States** | **default** map centred on the user, home venue pin selected. **loading** a `--color-surface-recessed` block the size of the map with a centred spinner. **empty** n/a — the 6 pins are fixed. **error** map tiles failed — the recessed block carries "Map unavailable" and a **Use the list instead** button `→ S09`. **success** n/a. **disabled** n/a. |
| **Notes** | No photo images of its own; the sheet reuses the venue's IMG##. The nav bar is glass here because it overlays the map — this is the only glass exception outside the tab bar and booking bar, and it is permitted because the map scrolls under it. |

#### S11 · Venue detail
`parent S09` · `flows FL11`

| | |
|---|---|
| **Purpose** | Let a first-timer decide, and reassure them about price and payment before they commit (A24). |
| **Layout** | Photo gallery 16:9 edge-to-edge with a glass back button and a page dot row · `gap-group` · name (`heading`) + address (`label`) · `gap-group` · **fact strip**: Hours · Courts · Price · `gap-section` · "Set as my home venue" row (switch) · `gap-section` · section "Today" + 4 free-slot chips · `gap-section` · section "Getting there" with address + **Open in Maps** row · `gap-section` · sticky bottom bar: **See all times** (primary). |
| **Content** | Pika District 7 · 12 Nguyen Luong Bang, District 7. Fact strip: "06:00–22:00" · "6 courts" · "$18 / $36 peak". Switch row "Open the app here" (off). Today chips: 20:00 · 21:00 · 06:00 tomorrow. |
| **Actions** | Back `→ S09` · gallery swipe `→ next image` · home-venue switch `→ on state, toast "Pika District 7 is now your home venue"` · a slot chip `→ S12` preselected · Open in Maps `→ outside the app` · See all times `→ S12`. |
| **States** | **default** as above. **loading** gallery as a recessed block, text as skeletons. **empty** no free slots today — the Today section reads "Nothing free today. The earliest is 06:00 tomorrow." and the chip row is replaced by one chip "06:00 tomorrow". **error** "Couldn't load this venue" + **Retry**, with the sticky bar hidden so the user cannot continue into a broken grid. **success** the home-venue toast. **disabled** the switch is disabled (and reads "Your home venue") when this venue is already the home venue. |
| **Notes** | Images: the venue's own IMG## as slide 1, IMG07 (court close-up) and IMG08 (evening floodlights) as slides 2–3, shared across all six venues. |

#### S12 · Court availability ★
`parent tab 2 / S11` · `flows FL03, FL04, FL05, FL08, FL11`

| | |
|---|---|
| **Purpose** | The core screen. Show what is actually free and let the user pick their own court — in four narrowing choices, not a 96-cell matrix (A04-R2; 13 references, none of which uses a matrix). |
| **Layout** | Status bar · app bar: venue name + chevron (the switcher) · `gap-section` · **date strip**: 7 horizontal date boxes, each with day-of-week, date number and "from $18"; days beyond the tier's booking window are visibly out of reach · `gap-section` · **period segment**: Morning / Afternoon / Evening · `gap-section` · **slot rows**: time left, price right, a state tag ("3 courts left" / "Booked") · under the selected row, at `gap-attached`, the **court panel**: 6 court tiles 3 × 2, taken ones badged "Booked", the selected one ringed in lime (the screen's one lime surface) · `gap-section` · bottom spacer · **sticky glass booking bar** when something is selected: selection summary left, **Continue** right, and a text action **Make it weekly**. |
| **Content** | Pika District 7. Dates Tue 14 → Mon 20, Tue selected. Evening selected. Rows: 17:00 $36 "2 courts left" · 18:00 $36 "Booked" · **19:00 $18 "3 courts left"** (selected) · 20:00 $36 "4 courts left" · 21:00 $36 "6 courts left". Court panel: Court 1 Booked · Court 2 · Court 3 Booked · **Court 4** selected · Court 5 · Court 6. Booking bar: "Court 4 · 19:00–20:00 · $18" + **Continue**. |
| **Actions** | Venue name `→ S18` · a date box `→ reloads the slot list` · a period `→ filters the slot list` · a slot row `→ reveals its court panel` · a court tile `→ selected state` (a second tile in the same slot = multi-select, FL08) · Continue `→ S13`, or `→ S44` in browse mode · Make it weekly `→ S15`. |
| **States** | **default** opens on the home venue, today, scrolled to the next upcoming hour. **loading** skeleton slot rows at the real row height — the grid's shape is identical every time, so its skeleton is honest. **empty** a *period* with nothing free: an in-grid `factstrip` naming the next period or day that has availability plus a jump to it ("Evening is full. Next free: 06:00 tomorrow" + **Go there**). Never an empty list with no exit. **error** `--color-text-unavailable` tags plus a top banner "Some courts may not be up to date" + **Refresh**; selection is blocked while stale. **offline** (F60) a glass banner under the app bar carrying **IMG16** at 28 px + "You're offline — showing what we last knew", the booking bar reads **Continue** disabled with the caption "Needs a connection". **success** n/a — S13 is the next step. **disabled** past slots and dates outside the booking window; the Continue button until a court is selected. |
| **Notes** | The slot row and its court panel are a single component pair at `gap-attached` — the attachment is what tells the user the tiles belong to that row. Taken slots stay in place, greyed; they are never removed, because a gap in the list reads as a loading failure. Only courts **within one slot** can be multi-selected (A33 superseded). |

#### S13 · Booking review
`parent S12` · `flows FL03, FL04, FL05, FL08, FL11`

| | |
|---|---|
| **Purpose** | The last check before committing, and the one place the user learns whether this hour comes out of their package balance (F36). |
| **Layout** | Nav bar: back · "Review" · `gap-section` · summary card (`--gradient-card`, radius 22): venue · court · date · time · each as a label/value row divided by hairlines · `gap-group` · **package row**: "Uses 1 of your 6.5 prepaid hours" with a `clock` icon, or the amount if no package · `gap-group` · **amount block**: "Due at the counter" label + `$18` at `amount` size · `gap-group` · cancellation line, stated in full, in `body-bold`: "Free cancellation until Mon 13 Oct, 19:00." · `gap-section` · sticky bottom: **Confirm booking** (primary) · `gap-peer` · **Back to the grid** (quiet). |
| **Content** | Pika District 7 · Court 4 · Tue 14 Oct · 19:00–20:00. Package row "Uses 1 of your 6.5 prepaid hours — $0 at the counter". Amount: when a package covers it, `$0` with the sub-line "1 hour from your package"; otherwise `$18`. |
| **Actions** | Back `→ S12`, selection cleared, hold released · Confirm booking `→ S14` · Back to the grid `→ S12` · (FL04 substitution) **Choose another** `→ S12`. |
| **States** | **default** as above. **loading** the Confirm button spins, the card locks; a hold countdown is **not** shown (A34 — the hold is short and silent). **empty** n/a — a review always has a selection. **error (taken)** the most likely real-world failure: an inline banner at the top of the card, "Court 4 at 19:00 was just booked", with **Back to the grid** `→ S12` with that court now marked Booked. This is a banner on this screen, **not** a generic error screen. **error (network)** `→ S45`, because the user must be told explicitly that nothing was booked. **error (two courts, one taken)** the banner names which one and offers **Book Court 2 only** or **Pick another court** `→ S12`. **success** `→ S14`. **disabled** Confirm while loading. |
| **Notes** | FL04 enters here pre-selected, skipping S12 entirely; if the usual court is taken the nearest alternative is already selected and labelled "Court 2 instead of Court 4" — the flow never dead-ends into the grid without a suggestion. Multi-court (FL08) lists both courts as two rows and one combined amount. |

#### S14 · Booking confirmed ★
`parent S13` · `flows FL03, FL04, FL08`

| | |
|---|---|
| **Purpose** | The product's differentiator, in one frame: an amount that is **not** being paid now. It must have the visual weight of a total and the label of an instruction — and it must survive being screenshotted into a group chat. |
| **Layout** | Status bar · centred **IMG17** at 112 px (it replaces the glass-circle check — one success mark per screen) · `gap-group` · "Court 4 is yours" at `display` · `gap-peer` · venue · date · time in one `label` line · `gap-group` · **amount hero** (`hero-ink`: stacked edges, court motif, the amount at `amount` size, and under it a **frosted caption row** carrying "Pay at the counter when you arrive" in `--color-accent-text` lime — the only accent on the screen) · `gap-group` · **fact strip**: "Earn 18 pts after you play" · "Free cancellation until Mon 19:00" · `gap-section` · **Add to Calendar** (quiet, full width) · `gap-peer` · **Done** · `gap-section` · tab bar hidden. |
| **Content** | "Court 4 is yours" · "Pika District 7 · Tue 14 Oct · 19:00–20:00" · hero `$18` · frosted row "Pay at the counter when you arrive". |
| **Actions** | Add to Calendar `→ outside the app` · Done `→ S07` · (nothing else; this screen is deliberately a terminus). |
| **States** | **default** as above. **loading / error** n/a — this screen only exists after success; every failure path stops at S13 or S45. **empty / disabled** n/a. **success** = default. **multi-court variant (FL08)** the hero shows the combined amount and the title reads "Courts 4 and 5 are yours", with both court numbers as two lines inside the hero — this is the frame that has to survive a screenshot. |
| **Notes** | **No lime surface on this screen.** The lime slot is spent on *type* in the frosted row. The two saturated tiles that originally sat beside the hero competed with it and are now the neutral `factstrip` — this is the finding that created the component. |

#### S15 · Series setup
`parent S12` · `flows FL05`

| | |
|---|---|
| **Purpose** | Turn one selection into N weeks of the same slot. |
| **Layout** | Nav bar: back · "Make it weekly" · `gap-section` · **IMG18** at 72 px beside a read-only summary row of the base slot · `gap-section` · "How many weeks?" + a chip row 4 / 8 / 12 / Custom · `gap-group` · a stepper when Custom · `gap-group` · a plain-language echo of the range · `gap-section` · a `factstrip` explaining the substitution rule · `gap-section` · sticky **Check availability**. |
| **Content** | Base "Court 4 · Tue 19:00–20:00 · Pika District 7". Chips 4 · **8** · 12 · Custom. Echo "Tue 14 Oct → Tue 2 Dec, 8 sessions." Fact strip: "A series promises the time, not the court number. If Court 4 is taken one week, we'll put you on the nearest free court and show you which." |
| **Actions** | Back `→ S12` · a chip `→ selected state` · stepper `→ updates the echo` · Check availability `→ S16`. |
| **States** | **default** 8 weeks preselected. **loading** the CTA spins while the first occurrences are checked. **empty** n/a — a series cannot start without a selected cell. **error** n/a here; availability errors surface on S16. **success** `→ S16`. **disabled** the CTA while Custom is empty or zero. |
| **Notes** | The substitution rule (A12) is stated **before** the user commits, not after — this is why the fact strip is on this screen and not only on S16. |

#### S16 · Series preview
`parent S15` · `flows FL05`

| | |
|---|---|
| **Purpose** | Show every occurrence with its actual court, substitutions marked, **before** anything is booked. A series must never be silently shortened. |
| **Layout** | Nav bar: back · "8 sessions" · `gap-section` · a summary `factstrip`: sessions · total · substitutions · `gap-section` · the occurrence list at `gap-peer`. Row: date block left · court · time · a state tag right — tags: none (as requested) / `microcaps` lime-border "SUBSTITUTED" / `--color-text-unavailable` "NOT AVAILABLE" · `gap-section` · sticky bar: **Confirm 7 sessions** (the count excludes unavailable weeks) + a caption naming what is excluded. |
| **Content** | Fact strip "8 weeks · 7 bookable · $126 total". Rows: Tue 14 Oct Court 4 · 21 Oct Court 4 · 28 Oct **Court 2 SUBSTITUTED** · 4 Nov Court 4 · 11 Nov Court 4 · 18 Nov **NOT AVAILABLE** · 25 Nov Court 4 · 2 Dec Court 4. Caption under the CTA: "18 Nov has no free court at 19:00 and will be skipped." |
| **Actions** | Back `→ S15` · a SUBSTITUTED row `→ expands to name the original court` · Confirm `→ S17` · (when weeks are unavailable) **Change the time** `→ S12`. |
| **States** | **default** as above. **loading** the list fills **progressively**, week by week, with a counter "Checking 5 of 8…" — checking N weeks takes real time and must not block behind one spinner. **empty** n/a. **error (none bookable)** no week has a free court: the list is all NOT AVAILABLE, the CTA is replaced by **Change the time** `→ S12`, and a `factstrip` explains that nothing was booked. **error (network)** `→ S45`. **success** `→ S17`. **disabled** the CTA while the check is still running. |
| **Notes** | Substituted weeks are marked, not hidden; unavailable weeks are listed, not removed. Both are the point of this screen. |

#### S17 · Series confirmed
`parent S16` · `flows FL05`

| | |
|---|---|
| **Purpose** | The series equivalent of S14. Same job: one frame, screenshot-worthy, amount due but not paid. |
| **Layout** | As S14 (**IMG17** at 112 px), with the hero carrying the **total** and the frosted row carrying the per-session instruction. Under the fact strip, a collapsed "7 sessions" row that expands into the occurrence list. |
| **Content** | "Your Tuesdays are booked" · "Pika District 7 · Court 4 · 19:00 · 7 sessions" · hero `$126` · frosted row "Pay $18 at the counter each time you play". Fact strip: "Earn 126 pts across the series" · "1 week on Court 2". |
| **Actions** | 7 sessions row `→ expands` · Add to Calendar `→ outside the app` (adds all occurrences) · Done `→ S07` · View series `→ S23`. |
| **States** | **default** / **success** only, as S14. **loading / error / empty / disabled** n/a. |
| **Notes** | The amount is a total but the instruction is per-session — stating both is what stops the user expecting a single $126 payment. |

#### S18 · Venue switcher
`parent S12` · `flows FL03`

| | |
|---|---|
| **Purpose** | Linh's fallback: her venue is full, so she changes venue without leaving the grid. |
| **Layout** | Sheet, radius 34 top. Grabber · title "Switch venue" · `gap-section` · 6 rows at `gap-peer`: photo 48² (**IMG01–IMG06**, centre square crop) · name · distance · "3 free at 19:00" / "Full at 19:00" · a check on the current venue · `gap-section` · safe-area padding. |
| **Content** | The 6 venues, each carrying availability **for the slot the user is currently looking at** — this is what makes the sheet useful rather than a list of names. Pika District 7 ✓ current · Pika Thao Dien "2 free at 19:00" · Pika Phu Nhuan "Full at 19:00" … |
| **Actions** | A row `→ dismisses, S12 reloads on that venue, keeping the date and period` · grabber / backdrop `→ dismisses, nothing changes`. |
| **States** | **default** as above. **loading** the availability line per row is a short skeleton while the names render immediately. **empty** n/a. **error** the availability lines are omitted and a caption reads "Availability unavailable — tap a venue to see its times"; the rows stay tappable. **success** n/a — the reloaded grid is the confirmation. **disabled** the current venue's row. |
| **Notes** | Switching venue keeps the date and period, never resets them. |

#### S44 · Sign-in sheet (in-context)
`parent S12 / S13` · `flows FL03, FL11`

| | |
|---|---|
| **Purpose** | The sign-in wall at the moment of booking, **preserving the selection**. A full-screen redirect to S03 would lose it — which is the whole reason this screen exists. |
| **Layout** | Sheet over S12, radius 34 top. Grabber · title · `gap-peer` · a read-only chip carrying the held selection · `gap-section` · phone input · `gap-attached` · helper · `gap-section` · **Send code** · `gap-group` · legal microcopy. On submit the sheet swaps in place to the 6 OTP boxes — it does not push a new screen. |
| **Content** | Title "Almost there". Selection chip "Court 4 · Tue 14 Oct, 19:00 · $18". Helper "We'll text you a code. Your court is held while you sign in." |
| **Actions** | Send code `→ the OTP state of this same sheet` · Verify `→ S13` with the selection intact · grabber / backdrop `→ dismisses to S12 with the selection kept, not cleared` · Terms / Privacy `→ S43`. |
| **States** | **default** phone state. **loading** CTA spinner. **error** as S03/S04, inline inside the sheet. **empty** n/a. **success** `→ S13`. **disabled** CTA until the number is valid. |
| **Notes** | A new account arriving through this sheet still needs a name and a home venue — those are collected **after** the booking completes, as S05 → S06 pushed from S14, so the booking is never held hostage to profile setup. |

#### S45 · Could not complete
`parent S13` · `flows FL03`

| | |
|---|---|
| **Purpose** | The one error that earns its own screen: a booking submission that failed. The user must be told explicitly that **nothing was booked**. |
| **Layout** | Nav bar: close · `gap-section` · **IMG16** at 112 px · `gap-group` · heading · `gap-peer` · body naming the exact slot · `gap-group` · a `factstrip` stating the consequence · `gap-section` · **Try again** (primary) · `gap-peer` · **Back to the grid**. |
| **Content** | Heading "Court 4 at 19:00 was not booked". Body "We couldn't reach Pika District 7. Nothing was charged and nothing was reserved." Fact strip: "Your selection is still held for a few minutes" · "Tue 14 Oct · 19:00–20:00 · $18". |
| **Actions** | Try again `→ S13` and re-submits · Back to the grid `→ S12` · close `→ S12`. |
| **States** | **default** / **error** = the same thing; this screen *is* an error state with a screen of its own. **loading** Try again spins. **empty / success / disabled** n/a. |
| **Notes** | The failed slot is named in the user's own terms, never as an error code. This is the only generic-looking error screen in the product, and it is specific on purpose. |

---

### Branch D · My bookings (S19–S26)

#### S19 · My bookings ★
`parent tab 3` · `flows FL06, FL07, FL13`

| | |
|---|---|
| **Purpose** | Repetition and density: everything booked, and the one place points land. Tabs rather than section headers, because Past grows long for a weekly regular. |
| **Layout** | Status bar · nav bar "Bookings" · `gap-section` · **segment: Upcoming / Past** · `gap-section` (a filter is always `gap-section` from its results) · booking cards at `gap-peer`. Card: date block left (day-of-week over date number, `--gradient-tile-ink`) · venue + court · time · a status chip · a pending-points badge where relevant · chevron. A series is **one** card marked "Weekly · 7 sessions" that expands. · `gap-section` · tab bar. |
| **Content** | Upcoming: Tue 14 Oct · Pika District 7 · Court 4 · 19:00–20:00 · "+18 pts pending"; Weekly series · Court 4 · Tue 19:00 · 7 sessions; Sun 19 Oct · Pika Thao Dien · Court 2 · 08:00–09:00 · "+18 pts pending". Past: Sun 12 Oct · Court 2 · "+18 pts earned"; Tue 7 Oct · Court 4 · "+18 pts earned". |
| **Actions** | Segment `→ filtered state` · a booking card `→ S20` · a series card `→ S23` (chevron) or `→ expands in place` (the "7 sessions" row) · a pending-points badge `→ S33`. |
| **States** | **default** Upcoming. **loading** 3 skeleton cards at the real card height. **empty (Upcoming)** a `hero-accent` card "Nothing booked yet" with the body "Your next session will show up here" and a **Book a court** CTA inside it `→ S12`; IMG13. **empty (Past)** "Nothing played yet", body "Points land here after you play." No CTA — the Upcoming tab already carries it. **error** "Couldn't load your bookings" + **Retry**; cached cards behind it with a NOT UP TO DATE tag. **success** a toast after a cancellation arrives here: "Booking cancelled". **disabled** n/a. |
| **Notes** | The pending-points badge (F31) is what makes A02 visible: points are credited after the session is played, not at booking. The badge on Upcoming and the "earned" line on Past are the same component in two states. |

#### S20 · Booking detail
`parent S19` · `flows FL07, FL08, FL13`

| | |
|---|---|
| **Purpose** | The screen shown at the counter. Court, time and amount in one frame — and **the one screen that must work offline** (A36, F60 extended). |
| **Layout** | Nav bar: back · "Booking" · `gap-section` · **hero** (`hero-ink`, stacked edges, court motif): eyebrow "DUE AT THE COUNTER" · the amount at `amount` · frosted caption row with court + time · `gap-group` · **fact strip**: venue · date · status · `gap-group` · detail rows divided by hairlines: Court · Time · Booked on · Cancellation deadline (as a real date and time, never "24 hours") · Points · `gap-section` · **Add to Calendar** (quiet) · `gap-peer` · **Cancel booking** (quiet, `--c-error` text) · `gap-section`. |
| **Content** | Hero `$18` · frosted row "Court 4 · 19:00–20:00". Fact strip "Pika District 7" · "Tue 14 Oct" · "Confirmed". Rows: Court 4 · 19:00–20:00 · Booked Sun 12 Oct · "Free cancellation until Mon 13 Oct, 19:00" · "+18 pts after you play". |
| **Actions** | Back `→ S19` · Add to Calendar `→ outside the app` · Cancel booking `→ S21` before the deadline, `→ S22` after it · Points row `→ S33`. |
| **States** | **default** as above. **loading** hero as a skeleton; nothing else blocks. **empty** n/a. **error** cancellation failed — inline retry under the Cancel button, and **the booking stays live**. **error (offline at the venue)** the cached detail renders in full with a glass banner carrying **IMG16** at 28 px + "Offline — last updated 18:40" under the nav bar. This is the one screen whose offline state is a first-class design, not a fallback. **success** after cancelling `→ S19` with a toast. **past-booking variant** the amount hero is replaced by a neutral card reading "Paid at the counter", the status chip reads "Played", the Cancel action is **absent** (not disabled), and a "+18 pts earned" row replaces the pending line. **disabled** n/a. |
| **Notes** | Q-F11 default stands: no scannable code for a booking; the staff find it by name. If that reverses, a code block goes between the hero and the fact strip. |

#### S21 · Cancel booking — confirm
`parent S20` · `flows FL07`

| | |
|---|---|
| **Purpose** | Plain confirmation, before the 24-hour boundary: free, no consequence. |
| **Layout** | Sheet, radius 34 top. Grabber · title · `gap-peer` · body · `gap-group` · a read-only summary chip · `gap-section` · **Cancel booking** (destructive, `--c-error`) · `gap-peer` · **Keep it**. |
| **Content** | Title "Cancel this booking?" Body "It's free — you're more than 24 hours ahead. The court goes back for someone else." Chip "Court 4 · Tue 14 Oct, 19:00 · $18". |
| **Actions** | Cancel booking `→ S19` with a toast · Keep it / backdrop `→ S20`. |
| **States** | **default** as above. **loading** the destructive button spins. **error** inline inside the sheet, "Couldn't cancel. Try again." — the sheet stays open and the booking stays live. **empty** n/a. **success** `→ S19`. **disabled** n/a. |
| **Notes** | "Free" is stated as a fact, not as reassurance — the same sentence turns into a cost on S22. |

#### S22 · Cancel after the 24-hour boundary
`parent S20` · `flows FL07`

| | |
|---|---|
| **Purpose** | The honest version of S21, and **the best argument in the product for climbing a tier** — it appears at the exact moment the user feels the cost (A38). |
| **Layout** | Sheet, radius 34 top. Grabber · title · `gap-peer` · body stating what happens now · `gap-group` · **the grace card**: a `hero-accent` block when a grace cancellation is available, a neutral `factstrip` when it is not · `gap-section` · primary action · `gap-peer` · **Keep it**. |
| **Content** | **With grace (Volley/Smash):** title "You're inside 24 hours". Body "Cancelling now normally costs the booking. As a Volley member you have **1 free late cancellation this month** — this would use it." Grace card: "1 of 1 remaining · resets 1 Nov". Primary **Use it and cancel**. **Without grace (Rally, or already used):** body "Cancelling now means the $18 is still due at the counter." Fact strip: "Volley members get 1 free late cancellation a month" + **How tiers work** `→ S32`. Primary **Cancel anyway**. |
| **Actions** | Use it and cancel / Cancel anyway `→ S19` with a toast · How tiers work `→ S32` · Keep it / backdrop `→ S20`. |
| **States** | **default** = whichever of the two variants applies. **loading** the primary spins. **error** inline, booking stays live. **empty / disabled** n/a. **success** `→ S19` with a toast naming what was used: "Cancelled — late cancellation used". |
| **Notes** | The lime slot on this sheet goes to the grace card when it exists. When it does not, there is **no lime** on the sheet and the tier line is plain type with a link — a lime surface promoting a tier the user doesn't have would be selling at the wrong moment. |

#### S23 · Series detail
`parent S19` · `flows FL06`

| | |
|---|---|
| **Purpose** | Manage one week without endangering the rest. |
| **Layout** | Nav bar: back · "Weekly series" · `gap-section` · **IMG18** at 56 px in the summary strip's leading slot · summary `factstrip`: slot · remaining · total · `gap-section` · the occurrence list at `gap-peer`. Row: date block · court · a state tag (none / SUBSTITUTED / SKIPPED / PLAYED) · chevron · `gap-section` · **Extend series** (quiet) · `gap-peer` · **Cancel whole series** (quiet, `--c-error`). |
| **Content** | Fact strip "Tue 19:00 · Pika District 7" · "5 sessions left" · "$18 each". Rows: 14 Oct Court 4 PLAYED · 21 Oct Court 4 · 28 Oct Court 2 SUBSTITUTED · 4 Nov Court 4 SKIPPED · 11 Nov Court 4 · 25 Nov Court 4 · 2 Dec Court 4. |
| **Actions** | Back `→ S19` · a future occurrence `→ S24` · a past occurrence `→ S20` · Extend series `→ S26` · Cancel whole series `→ S25`. |
| **States** | **default** as above. **loading** 4 skeleton rows. **empty** n/a — a series always has occurrences. **error** "Couldn't load the series" + **Retry**. **success** a toast after a skip: "4 Nov skipped". **disabled** Extend is disabled with the caption "Beyond your booking window" when extending would pass the tier's limit — and the caption links `→ S31`. |
| **Notes** | A skipped occurrence **stays in the list marked SKIPPED** (A37). If it disappeared, the user could not tell a skip from a bug. |

#### S24 · Skip or cancel one occurrence
`parent S23` · `flows FL06`

| | |
|---|---|
| **Purpose** | "I can't make the 14th" — without touching the other weeks. |
| **Layout** | Sheet, radius 34 top. Grabber · title · `gap-peer` · a read-only occurrence chip · `gap-group` · a `factstrip` stating the rest of the series is unaffected · `gap-section` · **Skip this week** (primary) · `gap-peer` · **Keep it**. |
| **Content** | Title "Skip 4 November?" Chip "Court 4 · Tue 4 Nov, 19:00". Fact strip "The other 6 sessions are unaffected" · "The court goes back for that week only". |
| **Actions** | Skip this week `→ S23`, the row now marked SKIPPED · Keep it / backdrop `→ S23`. |
| **States** | **default** as above. **loading** the primary spins. **error** inline. **empty** n/a. **success** `→ S23` with a toast. **inside-24h variant** the sheet takes the S22 content: the grace card if available, otherwise the plain statement of cost — the rule is the same rule, stated in the same words. **disabled** n/a. |
| **Notes** | "Skip", not "cancel" — the word has to signal that the series survives. |

#### S25 · Cancel the whole series
`parent S23` · `flows FL06 (variant)`

| | |
|---|---|
| **Purpose** | The destructive action, made deliberately harder to reach than skipping one week. |
| **Layout** | Sheet, radius 34 top. Grabber · title · `gap-peer` · body naming exactly what will be released · `gap-group` · a `factstrip` listing the affected weeks and any late-cancellation consequence · `gap-section` · **Cancel all 5 sessions** (destructive) · `gap-peer` · **Keep the series**. |
| **Content** | Title "Cancel the whole series?" Body "5 remaining sessions will be released. Sessions you've already played are not affected." Fact strip "21 Oct · 28 Oct · 11 Nov · 25 Nov · 2 Dec" · "4 Nov is already skipped" · (when the next one is inside 24 h) "21 Oct is inside 24 hours — the $18 is still due". |
| **Actions** | Cancel all `→ S19` with a toast "Series cancelled" · Keep the series / backdrop `→ S23`. |
| **States** | **default** as above. **loading** the destructive button spins. **error** inline; the series stays live in full. **empty** n/a. **success** `→ S19`. **disabled** n/a. |
| **Notes** | The button names the count, not "Confirm" — the number is the last chance to notice the scale of the action. |

#### S26 · Extend the series
`parent S23` · content block (`ASSUMPTION`: entered from S23, no separate flow)

| | |
|---|---|
| **Purpose** | Keep the habit alive without re-creating it (F26). |
| **Layout** | As S15, with the base slot pre-filled from the existing series and a read-only line naming where it currently ends. |
| **Content** | Base "Court 4 · Tue 19:00 · Pika District 7". Read-only "Currently ends Tue 2 Dec". "Add how many weeks?" chips 4 · 8 · 12. Echo "Tue 9 Dec → Tue 27 Jan, 8 more sessions." Fact strip: the same substitution rule as S15, plus "Your Volley window lets you book 14 days ahead — later weeks are confirmed as they come into range." |
| **Actions** | Back `→ S23` · a chip `→ selected` · Check availability `→ S16` in extend mode (the preview shows only the new weeks) · Confirm on S16 `→ S23`, not S17. |
| **States** | **default** 8 preselected. **loading** CTA spins. **empty** n/a. **error** beyond the booking window — an inline caption on the chip row, "Volley lets you book 14 days ahead. Weeks past that are added automatically." and the chips stay enabled. **success** `→ S23` with a toast "8 sessions added". **disabled** the CTA when the chosen count adds nothing bookable. |
| **Notes** | Extend reuses S16 rather than having its own preview — the substitution problem is identical, so the screen should be. |

---

### Branch E · Membership (S27–S38)

#### S27 · Membership overview ★
`parent tab 4` · `flows FL09, FL10, FL12`

| | |
|---|---|
| **Purpose** | Three numbers — hours, points, tier — coexisting without three accents. "What my relationship with Pika is worth", in one screen. |
| **Layout** | Status bar · header "Membership" + **tier chip right (IMG19/20/21 at 24 px + the tier name)** · `gap-group` · **hours hero** (`hero-accent` — the screen's one lime surface: stacked edges, court motif, "6.5" at `amount` with "hours left" at a smaller size and lower opacity, a 10-segment meter beneath, and a frosted caption row "Expires 30 Nov") · `gap-group` · **fact strip**: points · tier progress · `gap-section` · section "Your tier" · `gap-peer` · tier progress card: a position on a line (not a percentage) from Rally through Volley to Smash, with the current position marked · `gap-section` · section "More" · `gap-peer` · nav rows: Packages · Points history · Gifts · Redemptions · `gap-section` · tab bar. |
| **Content** | Tier chip "Volley". Hero "6.5 hours left" · meter 6.5/10 · "Expires 30 Nov". Fact strip "1,284 pts" · "1,216 to Smash". Tier card: Rally 0 — **Volley 750** — Smash 2,500, marker at 1,284. Nav rows with meta: Packages "10-hour from $160" · Points history "1,284 pts" · Gifts "4 you can afford" · Redemptions "1 waiting at the counter". |
| **Actions** | Tier chip `→ S31` · hours hero `→ S28` · points fact `→ S33` · tier fact `→ S31` · tier card `→ S31` · Packages `→ S28` · Points history `→ S33` · Gifts `→ S34` · Redemptions `→ S38`. |
| **States** | **default** as above. **loading** hero and fact strip as skeletons; the nav rows render immediately. **empty (no package)** the hours hero is replaced by a `hero-accent` card that shows **what a package would do**, not an empty balance: "Prepay and play for less" · "10 hours for $160 — that's $16 an hour instead of $18" · a **See packages** CTA inside it; **IMG24** as the card's image — a diagram, not a photograph, because this card is a near-empty state. The fact strip and tier card are unchanged. **empty (new member)** fact strip "0 pts · Rally", tier marker at the start, "Points land after you play." **error** balance unavailable — the last known value renders with a `microcaps` "NOT UP TO DATE" tag and a quiet **Refresh**, never a blank. **success** a toast arriving from S30: "Package reserved". **pending-package variant** a quiet row under the hero: "10-hour package · not active yet — pay at the counter" `→ S30`. **disabled** n/a. |
| **Notes** | Hours are shown **as hours, never as money** (C07). The lime slot is the hours hero — so the tier chip, the tier card and every nav row are neutral (the badge's own lime ball is icon-scale and exempt, see §6), and "4 you can afford" on the Gifts row is plain `--color-accent-text`, not a lime fill. |

#### S28 · Packages catalogue
`parent S27` · `flows FL09`

| | |
|---|---|
| **Purpose** | Prepaid blocks of hours, with the per-hour saving visible at the moment of choice. |
| **Layout** | Nav bar: back · "Packages" · `gap-section` · **IMG24** at full width above the balance (it shows 6.5 of 10 blocks filled — the same figure as the balance below it) · a `factstrip` showing the current balance · `gap-section` · package cards at `gap-peer`. Card: hours at `hero` size · price · validity · an effective-per-hour line · a "Best value" `microcaps` tag on one · chevron · `gap-section`. |
| **Content** | Fact strip "6.5 hours left · expires 30 Nov". Cards: **5 hours** $85 · valid 60 days · "$17 an hour"; **10 hours** $160 · valid 90 days · "$16 an hour" · BEST VALUE; **20 hours** $300 · valid 180 days · "$15 an hour". |
| **Actions** | Back `→ S27` · a card `→ S29`. |
| **States** | **default** as above. **loading** 3 skeleton cards. **empty** n/a — the catalogue is fixed. **error** "Couldn't load packages" + **Retry**. **success** n/a. **disabled** n/a. |
| **Notes** | The per-hour line is the whole argument for a package; without it the cards are just three prices. Peak hours still cost peak — stated on S29, not here. |

#### S29 · Package detail
`parent S28` · `flows FL09`

| | |
|---|---|
| **Purpose** | What the package includes, when it expires, and what it does **not** cover — before reserving. |
| **Layout** | Nav bar: back · **IMG23** as a 16:9 band under the nav bar, radius 22 · `gap-group` · hero (`hero-ink`): "10 hours" at `amount`, "$160" under it, frosted row "$16 an hour instead of $18" · `gap-group` · **fact strip**: validity · per-hour · saving · `gap-section` · "What's included" list, icon + line · `gap-section` · "Good to know" list · `gap-section` · sticky bottom: **Reserve** (primary) + a caption "You pay at the counter". |
| **Content** | Fact strip "Valid 90 days" · "$16 / hour" · "Save $20". Included: `check` "10 hours at any Pika venue"; `check` "Hours never round up — a 1-hour booking uses 1 hour"; `check` "Stacks with your current balance". Good to know: `info` "Peak hours (17:00–21:00 and weekends) use 2 hours"; `info` "Unused hours are lost at expiry — we'll remind you 7 days before"; `info` "Becomes active when you pay at the counter". |
| **Actions** | Back `→ S28` · Reserve `→ S30`. |
| **States** | **default** as above. **loading** Reserve spins. **empty** n/a. **error** reservation failed — inline retry above the sticky bar; nothing is reserved. **success** `→ S30`. **disabled** n/a. |
| **Notes** | The peak-hour rule and the expiry rule are **"good to know", stated plainly on the screen before committing** — they are the two things that would otherwise become the first support questions (Q-F10 default: lost at expiry, with a 7-day reminder). |

#### S30 · Package reserved
`parent S29` · `flows FL09`

| | |
|---|---|
| **Purpose** | State clearly that the package is **not active yet** — it becomes real when paid at the counter (A32). |
| **Layout** | As S14: centred **IMG17** at 112 px · "10 hours reserved" at `display` · `gap-group` · amount hero (`hero-ink`) `$160` with a frosted row "Pay at the counter to activate" in `--color-accent-text` · `gap-group` · **fact strip**: what happens next · where · by when · `gap-section` · **Done** · `gap-peer` · **See packages**. |
| **Content** | Fact strip "Pay at any Pika venue counter" · "Your 10 hours appear once paid" · "Reservation is not binding — ignore it and it expires". |
| **Actions** | Done `→ S27` · See packages `→ S28`. |
| **States** | **default / success** only. **loading / error / empty / disabled** n/a. |
| **Notes** | **No lime surface** — as on S14, the accent is type in the frosted row. The honesty of "not binding" is deliberate: a reserved package that feels like a debt would stop people reserving. |

#### S31 · Tier detail
`parent S27` · `flows FL12`

| | |
|---|---|
| **Purpose** | Make the tier concrete: where I am, how far the next one is, and what it actually gives me. A tier nobody understands changes nothing. |
| **Layout** | Nav bar: back · "Your tier" · `gap-section` · **hero** (`hero-ink`, court motif): **IMG20 at 64 px** · eyebrow "CURRENT TIER" · "Volley" at `display` · "1,284 pts in the last 12 months" · frosted row "1,216 to Smash" · `gap-group` · the **tier track**: a horizontal line with three stops, the current position marked, each stop labelled with its threshold · `gap-section` · section "What Volley gives you" · `gap-peer` · 4 benefit rows, icon + label + value · `gap-section` · section "What Smash would add" · `gap-peer` · 4 rows, the differences only, in `--color-text-secondary` · `gap-section` · **How tiers work** (quiet, full width). |
| **Content** | Volley benefits: `calendar` "Book ahead" 14 days · `award` "Points" 1.25× · `shield` "Late cancellation" 1 free a month · `zap` "Peak priority" — (dash, not available). Smash adds: 30 days · 1.5× · 1 free a month (same) · peak priority · birthday gift. |
| **Actions** | Back `→ S27` · How tiers work `→ S32` · a benefit row `→ no action` (rows are informational, not tappable — nothing on this screen pretends to be a control). |
| **States** | **default** as above. **loading** hero and track as skeletons. **empty (Rally, 0 pts)** the hero badge is **IMG19** and the hero reads "Rally" with "Everyone starts here" and the frosted row "750 to Volley"; the benefits list still renders in full, so a new member can see what they already have. **error** points unavailable — the hero shows the last known total with a NOT UP TO DATE tag; the benefits list is static and always renders. **success / disabled** n/a. **top-tier variant (Smash)** the hero badge is **IMG21** and the frosted row reads "You're at the top tier" and the "What Smash would add" section is replaced by one line: "Your tier is held as long as you earn 2,500 points a year." |
| **Notes** | The benefit that matters most in a court-booking product is **how far ahead you may book** — so "Book ahead" is the first row, not the points multiplier. The track is a position on a line, not a percentage (Step 08: a nine-month goal needs a position, not a percent). |

#### S32 · How tiers work
`parent S31` · `flows FL12`

| | |
|---|---|
| **Purpose** | Explain the rolling 12-month window, so a tier drop never feels like a bug (F48). |
| **Layout** | Nav bar: back · "How tiers work" · `gap-section` · a prose block of 3 short paragraphs · `gap-section` · a thresholds table: tier · points · what it gives · `gap-section` · a `factstrip` worked example · `gap-section` · section "If your tier changes" + 2 rows. |
| **Content** | Paragraphs: how points are earned (1 point per $1 on bookings and packages, credited **after** you play); what sets the tier (points in the **last 12 months**, not lifetime); what spending points does (redeeming a gift spends the balance but **never** lowers the tier). Table: Rally 0 / Volley 750 / Smash 2,500. Worked example: "You've earned 1,284 points since Oct 2025. On 1 Nov, the points you earned in Oct 2025 drop out of the window." If your tier changes: "We'll tell you before it happens" · "You keep any gift you already redeemed". |
| **Actions** | Back `→ S31`. |
| **States** | **default** only — static content. **loading** n/a (the only dynamic value is the worked example's number; if it is unavailable, the example uses "750" and the generic wording). **empty / error / success / disabled** n/a. |
| **Notes** | Pure explanation, no action. Reached from S31 and from S22, where the same rule has just cost the user something. |

#### S33 · Points history
`parent S27` · `flows FL12`

| | |
|---|---|
| **Purpose** | Trust in the balance. Every point accounted for. |
| **Layout** | Nav bar: back · "Points" · `gap-section` · a `factstrip`: balance · earned this year · spent · `gap-section` · segment "All / Earned / Spent" · `gap-section` · day-grouped rows at `gap-peer`: glass circle with a type icon · title · sub-line · a signed value right-aligned, `+` in `--color-status-success-fg`, `−` in `--color-text-secondary`. |
| **Content** | Fact strip "1,284 pts" · "1,284 earned" · "0 spent". Rows: 12 Oct `check-circle` "Court 2 · Pika Thao Dien" "Played Sun 08:00" **+18**; 7 Oct "Court 4 · Pika District 7" **+18**; 1 Oct `package` "10-hour package" "Paid at the counter" **+160**; 28 Sep `award` "Volley bonus" "1.25× from 1 Oct" **+0**. |
| **Actions** | Back `→ S27` · segment `→ filtered` · a booking row `→ S20` · a redemption row `→ S37`. |
| **States** | **default** All. **loading** 5 skeleton rows. **empty** a new member has no history: centred **IMG22** at 96 px, "No points yet", and then **how points are earned** as a 3-row list — the empty state teaches, it does not apologise. **error** "Couldn't load your points" + **Retry**; the fact-strip balance still shows the last known value. **success** n/a. **disabled** the Spent segment is disabled when nothing has been spent, with no caption. |
| **Notes** | Points appear **dated by the day they were credited**, which is the day played — not the day booked. This is A02 made auditable. |

#### S34 · Gifts catalogue
`parent S27` · `flows FL10`

| | |
|---|---|
| **Purpose** | Turn points into something real. The catalogue is the motivation, so it is **never hidden** from a user who cannot afford anything yet. |
| **Layout** | Nav bar: back · "Gifts" · balance chip right · `gap-section` · segment "All / I can afford" · `gap-section` · a 2-column tile grid, `gap-peer` both ways. Tile: square image radius 16 · name (`label-bold`) · cost (`body-bold`, tabular) · affordable tiles show the cost in `--color-accent-text`; unaffordable tiles dim the image to 60% and show "280 more pts" in `--color-text-secondary` · `gap-section`. |
| **Content** | Balance chip "1,284 pts". Tiles: Pika water bottle 400 (IMG09) · Pika towel 600 (IMG10) · Court shoes 1,800 — "516 more pts" (IMG11) · Pika paddle 2,400 — "1,116 more pts" (IMG12). |
| **Actions** | Back `→ S27` · balance chip `→ S33` · a tile `→ S35` (affordable **and** unaffordable tiles are both tappable — the detail screen is where the shortfall is explained) · segment `→ filtered`. |
| **States** | **default** All. **loading** 4 skeleton tiles at the real tile height. **empty (catalogue)** **IMG15** at 96 px, "No gifts right now", body "New gifts are added through the year." **empty (I can afford, 0 affordable)** the catalogue still renders in full with a `factstrip` at the top: "You're 280 points from the water bottle" + "That's about 3 more sessions" — the distance from the cheapest item, not an empty grid. **error** "Couldn't load gifts" + **Retry**. **success** a toast arriving from S36. **disabled** the "I can afford" segment when nothing is affordable — but the message above explains why, rather than the segment silently doing nothing. |
| **Notes** | Unaffordable items are **dimmed, never removed**. Removing them removes the reason to earn points. |

#### S35 · Gift detail
`parent S34` · `flows FL10`

| | |
|---|---|
| **Purpose** | What it is, what it costs, where to collect it. |
| **Layout** | Nav bar: back, floating over the image · image 1:1 edge-to-edge · `gap-group` · name (`heading`) · `gap-peer` · cost row: the point cost at `hero` size + "pts" smaller and dimmer · `gap-group` · **fact strip**: your balance · after redeeming · collect at · `gap-section` · description paragraph · `gap-section` · "How to collect" 3-step list · `gap-section` · sticky bottom: **Redeem for 400 pts** (primary) + caption. |
| **Content** | Pika water bottle · 400 pts · IMG09. Fact strip "You have 1,284" · "884 left after" · "Any Pika counter". Description "750 ml stainless steel, Pika lime. Keeps cold for 12 hours." How to collect: "Redeem here" · "Show the code at the counter" · "Pick it up — codes don't expire". |
| **Actions** | Back `→ S34` · Redeem `→ S36`. |
| **States** | **default** as above. **loading** the image as a recessed block, text as skeletons. **empty** n/a. **error** "Couldn't load this gift" + **Retry**, sticky bar hidden. **success** n/a. **disabled / unaffordable variant** the primary button is replaced — not disabled — by a neutral block: "280 more points needed" with the body "About 3 more sessions at $18" and a quiet **How points work** `→ S32`. A disabled button with no explanation is the failure this avoids. |
| **Notes** | "Codes don't expire" is stated here because the user will close the app before reaching the counter (FL10 step 5) — it is the reason S38 exists. |

#### S36 · Redeem — confirm
`parent S35` · `flows FL10`

| | |
|---|---|
| **Purpose** | Confirm a point spend. The one irreversible action in the Membership branch. |
| **Layout** | Sheet, radius 34 top. Grabber · title · `gap-peer` · the gift as a chip (image 40² · name · cost) · `gap-group` · a `factstrip`: spending · balance after · tier unaffected · `gap-section` · **Redeem** (primary) · `gap-peer` · **Not now**. |
| **Content** | Title "Redeem the water bottle?" Fact strip "−400 pts" · "884 left" · "Your Volley tier is not affected". |
| **Actions** | Redeem `→ S37` · Not now / backdrop `→ S35`. |
| **States** | **default** as above. **loading** the primary spins. **error (not enough points)** possible if points were spent elsewhere meanwhile — the sheet states the **shortfall in points**, never a generic failure: "You now have 320 points. This gift needs 400 — 80 short." with **See gifts I can afford** `→ S34`. **error (network)** inline retry; nothing is spent. **empty** n/a. **success** `→ S37`. **disabled** n/a. |
| **Notes** | "Your tier is not affected" is on this sheet because it is the fear that stops a redemption: spending points must not look like losing status (F41/A01). |

#### S37 · Redemption code
`parent S36` · `flows FL10`

| | |
|---|---|
| **Purpose** | Something the counter staff can act on. The bridge between app and counter (A14). |
| **Layout** | Nav bar: close · `gap-section` · centred **IMG15** at 96 px · `gap-group` · "Water bottle is yours" at `display` · `gap-group` · **the code card** (white, radius 28, `--shadow-hero`): a barcode, and beneath it the same code as **large human-readable characters** in tabular figures · `gap-attached` · a caption "Show this at any Pika counter" · `gap-group` · **fact strip**: gift · points spent · balance · `gap-section` · **Done** · `gap-peer` · **See my redemptions**. |
| **Content** | Code `PK-4471-8302`. Fact strip "Pika water bottle" · "−400 pts" · "884 left". |
| **Actions** | close / Done `→ S34` · See my redemptions `→ S38`. |
| **States** | **default / success** only. **loading / empty / error / disabled** n/a — the code exists by the time this screen does. |
| **Notes** | **A barcode plus a short human-readable code**, so staff can act when scanning fails — the pattern a padel reference got right. The card is white, not navy: it has to scan. The code stays retrievable from S38 because the user will close the app before reaching the counter. |

#### S38 · Redemption history
`parent S34 / S27` · content block

| | |
|---|---|
| **Purpose** | Retrieve a code after closing the app. |
| **Layout** | Nav bar: back · "Redemptions" · `gap-section` · rows at `gap-peer`: image 48² · name · date · a status chip (WAITING / COLLECTED) · chevron. |
| **Content** | Pika water bottle · 12 Oct · **WAITING** · "PK-4471-8302"; Pika towel · 3 Aug · COLLECTED. |
| **Actions** | Back `→ S34` (or `→ S27` when entered from there) · a WAITING row `→ S37` with that code · a COLLECTED row `→ S37` read-only, the code dimmed and the caption replaced by "Collected 5 Aug". |
| **States** | **default** as above. **loading** 3 skeleton rows. **empty** **IMG15** at 96 px, "Nothing redeemed yet", body "Gifts you redeem will appear here with their codes." + **See gifts** `→ S34`. **error** "Couldn't load your redemptions" + **Retry**. **success** n/a. **disabled** n/a. |
| **Notes** | WAITING sorts above COLLECTED regardless of date — the reason the user opened this screen is almost always the uncollected one. |

---

### Branch F · Profile & system (S39–S43)

#### S39 · Profile
`parent tab 5` · content block

| | |
|---|---|
| **Purpose** | The non-task destination. Everything that is not a job to be done. |
| **Layout** | Status bar · header "Profile" · `gap-group` · identity card: avatar 64 (initials fallback) · name (`title`) · phone (`label`) · **tier chip (IMG19/20/21 at 24 px + name)** · `gap-group` · a `factstrip`: home venue · member since · `gap-section` · group 1 nav rows: Edit profile · Settings · `gap-section` · group 2: Help & FAQ · Terms & privacy · `gap-section` · group 3: Sign out · Delete account (`--c-error`) · `gap-section` · app version in `caption`, centred · tab bar. |
| **Content** | Minh · +84 90 123 4567 · Volley. Fact strip "Pika District 7" · "Member since Mar 2025". Version "Pika 1.0.0". |
| **Actions** | Edit profile `→ S40` · Settings `→ S41` · Help & FAQ `→ S42` · Terms & privacy `→ S43` · Sign out `→ a confirm sheet → S02` · Delete account `→ a confirm sheet, then a second typed confirmation → S02` · tier chip `→ S31` · home venue fact `→ S41`. |
| **States** | **default** as above. **loading** the identity card as a skeleton; the nav rows render immediately. **empty** n/a. **error** profile unavailable — the identity card shows the cached name with a NOT UP TO DATE tag; every nav row still works. **success** a toast arriving from S40: "Profile saved". **disabled** n/a. |
| **Notes** | Three groups separated by `gap-section`, because they answer three unrelated questions: who am I, how does the app behave, and how do I leave. Delete account is an App Store requirement and is deliberately two steps. |

#### S40 · Edit profile
`parent S39` · content block

| | |
|---|---|
| **Purpose** | Change the name. The phone number is the account identity and is changed through re-verification, not here. |
| **Layout** | Nav bar: Cancel · "Edit profile" · Save · `gap-section` · avatar with a **Change photo** text action centred · `gap-section` · name input · `gap-group` · phone row, read-only, with a **Change** text action · `gap-section`. |
| **Content** | Name "Minh". Phone "+84 90 123 4567 · Change". |
| **Actions** | Cancel `→ S39`, discarding changes (with a confirm sheet if the field is dirty) · Save `→ S39` with a toast · Change photo `→ the iOS photo picker` · Change (phone) `→ S03` in re-verification mode. |
| **States** | **default** Save disabled until something changes. **loading** Save spins, fields lock. **error** "Couldn't save. Try again." inline under the field; the entered value is kept. **empty** the name field cannot be emptied — Save disables and a caption reads "A name is needed for the counter". **success** `→ S39` with a toast. **disabled** Save, while the form is clean or invalid. |
| **Notes** | Avatar is a runtime asset with an initials fallback; no placeholder image is generated for it. |

#### S41 · Settings
`parent S39` · content block

| | |
|---|---|
| **Purpose** | The two things that actually affect daily use: which venue the app opens on, and which notifications arrive. |
| **Layout** | Nav bar: back · "Settings" · `gap-section` · section "Home venue" · `gap-peer` · a row showing the current venue with a chevron · `gap-section` · section "Notifications" · `gap-peer` · 4 switch rows, each with a label and a `caption` explaining it · `gap-section` · section "App" · `gap-peer` · Language (read-only "English") · a row linking to the iOS system notification settings. |
| **Content** | Home venue "Pika District 7". Switches: **Booking confirmations** on, caption "When a booking is made — with your court number"; **Session reminders** on, "Before you play, so the court doesn't sit empty"; **Points credited** on, "When points land after a session"; **Promotions** off, "Offers and new gifts". |
| **Actions** | Back `→ S39` · home venue row `→ a venue picker sheet, the S06 list as a sheet` · a switch `→ toggled state, saved immediately` · the system-settings row `→ outside the app`. |
| **States** | **default** as above. **loading** n/a — settings are local and render instantly. **empty** n/a. **error** a toggle failed to save — the switch reverts and an inline caption appears under that row: "Couldn't save. Try again." **success** no toast; the switch position is the confirmation. **disabled** all four switches are disabled, dimmed, with one `factstrip` above them: "Notifications are off for Pika in iOS Settings" + **Open Settings** — the case S46 was declined. |
| **Notes** | Promotions default **off**, as promised on S46. The reminder and the promotion channel are separate rows precisely so promos cannot poison the reminder channel. |

#### S42 · Help & FAQ
`parent S39` · content block

| | |
|---|---|
| **Purpose** | Answer the first-timer's anxiety without a tutorial — above all, **how payment works**. |
| **Layout** | Nav bar: back · "Help" · `gap-section` · a `hero-ink` card: "How paying works" with a frosted row "You always pay at the counter" (IMG07 is **not** used here — the hero carries the court motif instead) · `gap-group` · the accordion list at `gap-peer`: question row with a chevron, expanding to a body paragraph · `gap-section` · a contact `factstrip`: venue phone · hours · `gap-section` · **Call Pika District 7** (quiet). |
| **Content** | Questions, in this order: "How do I pay?" · "How does cancelling work?" · "How do points work?" · "What do the tiers do?" · "How do packages work?" · "What if my court is taken?" · "Can I book for someone else?" First answer: "Everywhere in the app, an amount means *due at the counter*. There's no card in Pika. Show your booking at the counter when you arrive and pay there — cash or card, at the venue's own terminal." |
| **Actions** | Back `→ S39` · a question row `→ expanded state` · Call `→ outside the app` · inline links inside answers `→ S32` (tiers), `→ S28` (packages). |
| **States** | **default** all collapsed. **loading** n/a — static content ships with the app. **empty / error** n/a. **success / disabled** n/a. |
| **Notes** | "How do I pay?" is first because it is P4's main anxiety and the product's most unusual behaviour. Nothing here is a tutorial the user has to finish. |

#### S43 · Terms & privacy
`parent S39 / S03 / S44` · content block

| | |
|---|---|
| **Purpose** | A16. Legal text, reachable from every place that asks the user to agree to it. |
| **Layout** | Nav bar: back · a segment "Terms / Privacy" · `gap-section` · long-form text: `heading` section titles, `body` paragraphs, `gap-group` between sections · a last-updated line in `caption` at the top. |
| **Content** | "Last updated 1 Oct 2026." Placeholder legal structure with real headings: Who we are · Your account · Bookings and payment · Cancellation · Membership packages · Points and gifts · Data we hold · Your rights · Contact. **The body text is supplied by the client** — the screen ships with the structure and a labelled placeholder paragraph per section. |
| **Actions** | Back `→ wherever it was opened from` · segment `→ switches document`. |
| **States** | **default** Terms. **loading / empty / error / success / disabled** n/a — static content. |
| **Notes** | Must be reachable without an account, because S03 and S44 link to it before sign-up completes. |

---

## 4 · Shared components

What repeats. **Claude Design must mark each with the same class every time it appears** — this is what lets Step 15 turn them into Figma components. Variants and states are in words; the look is in `proof-5-screens.html`.

| Component | Class | Variants | States | Appears on |
|---|---|---|---|---|
| **Status bar** | `.statusbar` | one | one — real iOS: notch, time, cellular, wifi, battery | every full screen |
| **Nav bar** | `.appbar` | title-only · back+title · back+title+action · venue+chevron (S12) · glass-over-content (S10) | default · scrolled (hairline appears) | all but S01, S07, S27, S39 |
| **Tab bar** | `.tabbar` | one — 5 items, floating glass | per item: active (navy pill, lime outline icon) · inactive · badged | S07, S09, S12, S19, S27, S39 |
| **Hero card** | `.hero` | `hero-ink` · `hero-accent` | default · with frosted caption · with badge · with motif · skeleton · stale (NOT UP TO DATE tag) | S07, S14, S17, S19-empty, S20, S27, S29, S30, S31, S42 |
| **Fact strip** | `.factstrip` / `.fact` | 2-fact · 3-fact · with icons · with an action | default · skeleton · error (carries a Retry) | S07, S11, S14, S16, S20, S23, S27, S28, S29, S30, S33, S35, S36, S37, S39, S41, S42 |
| **Frosted caption** | `.hero-caption` | lime text (the screen's lime slot is free) · white text (it is not) | default | S07, S14, S17, S20, S27, S29, S30, S31, S42 |
| **Primary button** | `.btn` | primary (lime gradient) · quiet · destructive | default · pressed · loading (spinner, label changes) · disabled · absent (replaced by an explanation block) | everywhere |
| **Chip** | `.chip` | filter · slot · price-band · status · tier · lime-outline | default · selected · unavailable · dimmed | S07, S09, S11, S12, S15, S19, S26, S28, S33, S34, S38, S39 |
| **Date box** | `.datebox` | with "from $18" (S12) · plain (S19, S23) | default · selected · out of booking window · disabled | S12, S19, S23 |
| **Slot row + court panel** | `.slot` + `.court` | — | slot: free · selected · booked · past. court tile: free · selected (lime ring) · booked (badge) | S12 |
| **Booking card** | `.booking` | single · series (expandable) | upcoming · past · pending-points · cancelled · skeleton | S19 |
| **Nav row** | `.nav-row` | label+chevron · label+meta+chevron · label+switch · label+value (read-only) | default · pressed · disabled-with-caption | S27, S39, S41, S42 |
| **List row** | `.row` | notification · points · redemption · occurrence · venue | default · unread · with status tag · skeleton | S08, S09, S16, S18, S23, S33, S38 |
| **Glass circle** | `.gcircle` | on light · on ink (`gcircle-onink`) | one | S08, S14, S30, S33, S37, S45, S46 |
| **Sheet** | `.sheet` | confirm · destructive confirm · picker · sign-in · primer | default · loading · inline error · swapped content (S44 phone→OTP) | S18, S21, S22, S24, S25, S36, S44, S46 |
| **Input** | `.input` | text · phone with prefix · OTP boxes · stepper | default · focused · filled · error (red control border + inline message) · disabled | S03, S04, S05, S15, S26, S40, S44 |
| **Switch** | `.switch` | one | off · on · disabled | S11, S41 |
| **Segment** | `.segment` / `.segment-item` | 2-up · 3-up | per item: selected · default · disabled | S09, S12, S19, S33, S34, S43 |
| **Meter** | `.meter` | 10-segment (hours) · track (tier) | filled per segment · position marker | S27, S31 |
| **Status tag** | `.tag` | microcaps on a surface | confirmed · played · waiting · collected · substituted · skipped · not-available · booked · stale | S16, S19, S20, S23, S38 |
| **Toast** | `.toast` | one | success · error | S11, S19, S23, S26, S27, S34, S39, S40 |
| **Skeleton** | `.skeleton` | row · card · hero · tile · text-line | one, shimmering | every data screen |
| **Code card** | `.codecard` | barcode + human-readable | active · collected (dimmed) | S37 |
| **Empty block** | `.empty` | teaching (with a list) · with CTA · plain | one | S08, S09, S19, S27, S33, S34, S38 |

**The one-lime rule, as a build instruction:** exactly one element per screen may use `--color-accent-surface` as a fill. Where the slot is already spent, an accent must become **type** (`--color-accent-text`) or a **border**. The assignments: S02 CTA · S07 Book again · S12 selected court tile · S14 **none** (lime as type) · S19-empty the hero · S22 the grace card only when it exists · S27 the hours hero · S30 **none** · S34 affordable costs as type.

---

## 5 · Coverage

### 5.1 Every screen is specified

**46 screens, S01–S46. All 46 have a full entry above with all seven fields filled. Missing: none.** S01–S46 is continuous — there is no gap and no code is `removed`. Checked by script, not by eye: 46 entries, 46 × 6 required fields present, 46 × 6 state rows present.

See the count correction at the head of §3: the "44" in `05-features-sitemap.md` is a stale figure from before S45–S46 were appended.

### 5.2 Every screen has a way in

Each row names at least one tap target on **another** screen that reaches it.

| S## | Reached from |
|---|---|
| S01 | app launch |
| S02 | S01 auto · S39 Sign out · S39 Delete account |
| S03 | S02 ×2 · S40 Change phone · S09 browse-mode bottom bar |
| S04 | S03 Send code |
| S05 | S04 (new account) · S14 (account created via S44) |
| S06 | S05 Continue |
| S07 | S01 · S04 (returning) · S46 ×2 · S14 Done · S17 Done · tab 1 |
| S08 | S07 bell |
| S09 | S02 Look around first · S10 list toggle · tab 2 (no home venue) |
| S10 | S09 map toggle |
| S11 | S07 venue card · S09 card · S10 sheet card |
| S12 | tab 2 · S07 section title · S07 slot chip · S11 See all times · S11 slot chip · S09 slot chip · S13 Back · S16 Change the time · S18 row · S19-empty CTA · S45 Back to the grid |
| S13 | S12 Continue · S07 Book again · S44 Verify · S45 Try again |
| S14 | S13 Confirm booking |
| S15 | S12 Make it weekly |
| S16 | S15 Check availability · S26 Check availability |
| S17 | S16 Confirm |
| S18 | S12 venue name |
| S19 | tab 3 · S21/S22/S24/S25 on success · S13 Confirm (the booking appears here) |
| S20 | S07 hero · S19 booking card · S23 past occurrence · S08 booking row · reminder push |
| S21 | S20 Cancel booking (before the deadline) |
| S22 | S20 Cancel booking (after the deadline) |
| S23 | S19 series card chevron · S17 View series |
| S24 | S23 future occurrence |
| S25 | S23 Cancel whole series |
| S26 | S23 Extend series |
| S27 | tab 4 · S07 points fact · S30 Done · S37 → S34 → S27 back |
| S28 | S27 hours hero · S27 Packages row · S27-empty CTA · S30 See packages · S42 inline link |
| S29 | S28 card |
| S30 | S29 Reserve · S27 pending-package row |
| S31 | S07 tier fact · S27 tier chip · S27 tier card · S27 tier fact · S23 disabled-Extend caption |
| S32 | S31 How tiers work · S22 How tiers work · S35 How points work · S42 inline link |
| S33 | S27 Points history · S27 points fact · S19 pending-points badge · S08 points row · S20 Points row · S34 balance chip |
| S34 | S27 Gifts row · S08 gift row · S36 See gifts I can afford · S37 Done · S38 See gifts |
| S35 | S34 tile · S08 gift row |
| S36 | S35 Redeem |
| S37 | S36 Redeem · S38 row · S33 redemption row |
| S38 | S34 → S27 Redemptions row · S37 See my redemptions |
| S39 | tab 5 |
| S40 | S39 Edit profile |
| S41 | S39 Settings · S39 home-venue fact |
| S42 | S39 Help & FAQ |
| S43 | S39 Terms & privacy · S03 legal · S44 legal |
| S44 | S12 Continue in browse mode · S13 in browse mode |
| S45 | S13 network error · S16 network error |
| S46 | S06 Continue |

**No screen exists only in the sitemap.** Every one of the 46 has at least one entry, and the table above was built row by row from the Actions fields, not from memory.

### 5.3 Every flow is covered

FL01 S01→S02→S03→S04→S05→S06→S46→S07 ✓ · FL02 S01→S02→S03→S04→S07 ✓ · FL03 S12→S13→S14, with S18, S44, S45 and the taken-slot banner ✓ · FL04 S07→S13→S14 with the substitution variant on S13 ✓ · FL05 S12→S15→S16→S17 ✓ · FL06 S19→S23→S24→S23 ✓ · FL07 S20→S21/S22→S19 ✓ · FL08 S12 multi-select→S13→S14 multi variant ✓ · FL09 S27→S28→S29→S30 ✓ · FL10 S34→S35→S36→S37→S38 ✓ · FL11 S02→S09→S11→S12→S44→S13 ✓ · FL12 S07→S27→S31→S32→S33 ✓ · FL13 push→S20→S07→S20 offline ✓.

### 5.4 Every MVP feature has a screen

F01–F06 S02–S06, S39 · F07–F11 S09, S10, S11, S41 · F12–F20 S12, S13, S18 · F21–F26 S15, S16, S17, S23, S24, S25, S26 · F27–F32 S19, S20, S21, S22, S14 · F33–F38 S27, S28, S29, S30 · F39–F48 S27, S31, S32, S33, S34, S35, S36, S37, S38 · F49–F54 S08, S46, S41 · F55–F60 S39, S40, S41, S42, S43, S45, and the state rows on every screen above.

**F32 (Add to Calendar)** is tier P2 but appears on S14, S17 and S20 because it costs nothing once the data is there. **F60 (offline)** is specified on S12 and S20 only — S20 is the one that must work (A36).

### 5.5 Known gaps, stated not hidden

| Gap | Status in this spec |
|---|---|
| The tier-**drop event** has no screen | `ASSUMPTION` carried: handled as a notification (S08) plus the "If your tier changes" rows on S32. No new screen. |
| What happens to unused package hours at expiry | **Q-F10** still open. Default written into S29 "Good to know": lost at expiry, 7-day reminder. If the client answers differently, S29 and S27 change. |
| Whether a reserved package can be cancelled | `ASSUMPTION` A32 written into S30: not binding, expires silently. No cancellation path. |
| Whether a booking needs a scannable code at the counter | **Q-F11** open. Default: no. If it reverses, S20 gains a code block between the hero and the fact strip. |
| Legal body text | Supplied by the client. S43 ships with structure + labelled placeholders. |
| App icon | Needs the vector logo (**Q-BR1**, still open). Not generated from the PNG. |

---

## 6 · Image slots — ALL SUPPLIED

**Status 2026-10-12: every slot is filled.** The user supplied 25 images; 23 are assigned below, 1 is held unused, 1 was declined. Nothing needs generating. Codes `IMG##` are permanent, like `S##`.

The set splits into two registers, and the split is deliberate:

- **IMG01–IMG12 · photographs.** Real courts and real products. These carry *content* — a venue you could go to, a gift you could hold.
- **IMG13–IMG22 · 3D objects.** Transparent ground, navy + lime, no text, no characters. These carry *absence and state* — an empty list, a lost connection, a rank. A photograph of a real court in an empty state would read as content and defeat the point; this is why the two registers do not mix.
- **IMG23** is a photograph used decoratively, the one exception, and only on the S29 header — a screen that is selling something, where a real photograph is the point. S42's hero stays motif-only, as its entry says.
- **IMG24 · one flat diagram.** Not a state icon and not content — it *teaches*, by drawing what a package is. That different job is why it is allowed a different register. It is the only one of its kind; a second flat illustration would start a third visual language and was held back instead.

### Photographs

| IMG## · name | Screens (S##) | What it shows | Aspect · px | File |
|---|---|---|---|---|
| **IMG01** · venue-district7 | S06, S07, S09, S11, S18 | Indoor hall, bright, white walls, plants — **the home venue** | 16:9 · 1600×900 | `IMG01-venue-district7.png` |
| **IMG02** · venue-thao-dien | S06, S09, S18 | Covered court, palms, waterfront | 16:9 · 1600×900 | `IMG02-venue-thao-dien.png` |
| **IMG03** · venue-phu-nhuan | S06, S09, S18 | Rooftop court at dusk, city skyline | 16:9 · 1600×900 | `IMG03-venue-phu-nhuan.png` |
| **IMG04** · venue-binh-thanh | S06, S09, S18 | Indoor, multiple courts, low sun through clerestory windows | 16:9 · 1600×900 | `IMG04-venue-binh-thanh.png` |
| **IMG05** · venue-tan-binh | S06, S09, S18 | Outdoor morning, trees, water beyond | 16:9 · 1600×900 | `IMG05-venue-tan-binh.png` |
| **IMG06** · venue-go-vap | S06, S09, S18 | Outdoor golden hour, bench with paddle and towel | 16:9 · 1600×900 | `IMG06-venue-go-vap.png` |
| **IMG07** · court-detail | S11 gallery slide 2 | Close detail — lime ball on the line, paddle behind | 4:3 · 1200×900 → crop 16:9 | `IMG07-court-detail.png` |
| **IMG08** · court-evening | **S02 hero**, S11 gallery slide 3 | Night court, string lights, water beyond. **Upper third is dark sky — the S02 headline sets over it in `--color-text-inverse`** | 16:9 · 1600×900 | `IMG08-court-evening.png` |
| **IMG09** · gift-bottle | S34, S35, S08 | Navy bottle, lime cap | 1:1 · 1024² | `IMG09-gift-bottle.png` |
| **IMG10** · gift-towel | S34, S35 | Folded navy towel, lime stripe | 1:1 · 1024² | `IMG10-gift-towel.png` |
| **IMG11** · gift-shoes | S34, S35 | White / navy / lime court shoes | 1:1 · 1024² | `IMG11-gift-shoes.png` |
| **IMG12** · gift-paddle | S34, S35, S08 | Navy paddle, lime edge, lime ball | 1:1 · 1024² | `IMG12-gift-paddle.png` |
| **IMG23** · equipment-group | **S29 header only** | Four paddles against a net post, ball basket | 16:9 · 1600×900 | `IMG23-equipment-group.png` |

### The one diagram

| IMG## · name | Screens (S##) | What it shows | Size | File |
|---|---|---|---|---|
| **IMG24** · package-diagram | **S27 empty (no package)**, S28 header | Ten rounded blocks in a row under a navy bracket; **6.5 filled lime**, the rest pale — the same figure as the balance it sits above | 16:9 · 1376×768 transparent | `IMG24-package-diagram.png` |

It replaces a photograph on S27's no-package card. A photograph of a real court on a card that says *you have no package* makes the screen look full, which is the one thing an empty state must not do.

**Crop note.** The venue photos are used at three sizes — 16:9 card banner, 56 px square (S06), 48 px square (S18). All six keep the net and court markings near the centre, so a centre square crop holds. Crop, never letterbox.

**People.** IMG02, IMG04 and IMG08 contain distant figures. Keep them: a venue with people in it reads as open for business, and at 48–56 px they are texture. No face is identifiable at any size used.

**Gift set consistency.** All four gift shots share one pale ground with a lime glow, one light direction, and an object filling ~70% of the square. They sit in a 2-column grid on S34, where any mismatch would be immediately visible — do not recolour or re-crop one of them alone.

### 3D objects — states, not content

| IMG## · name | Screens (S##) | What it shows | Size | File |
|---|---|---|---|---|
| **IMG13** · empty-bookings | **S19 empty (Upcoming)** | Navy paddle and lime ball on a small navy court tile | 1:1 · 800² transparent | `IMG13-empty-bookings.png` |
| **IMG14** · empty-notifications | **S08 empty**, S46 primer | Navy bell with a lime ball | 1:1 · 800² transparent | `IMG14-empty-notifications.png` |
| **IMG15** · empty-gifts | **S34 empty**, **S38 empty** | Open navy gift box, lime bow, one lime spark | 1:1 · 800² transparent | `IMG15-empty-gifts.png` |
| **IMG16** · offline | **S12 offline**, **S20 offline**, **S45** | Lime ball with a navy cloud and a struck-through wifi arc | 1:1 · 800² transparent | `IMG16-offline.png` |
| **IMG17** · booking-confirmed | S14, S17, S30 | Navy calendar with a lime tick, ball bouncing out | 1:1 · 1024² transparent | `IMG17-booking-confirmed.png` |
| **IMG18** · series-weekly | S15, S16, S23, S26 | A stack of calendars with a lime repeat arrow | 1:1 · 1024² transparent | `IMG18-series-weekly.png` |
| **IMG22** · points-earned | **S33 empty**, S08 points row | Lime ball with a navy tick disc and a few confetti marks | 1:1 · 800² transparent | `IMG22-points-earned.png` |

**IMG16 earns its place.** FL13 says S20 *must* work offline — it is the screen shown at the counter on a weak signal. Until now that state had no image of its own. It is also the right mark for S45, the one error with a screen to itself.

**Where IMG17 does and does not go.** S14 and S30 already open with a Lucide `check-circle` in a glass circle. IMG17 **replaces** that circle on S14, S17 and S30; it does not sit beside it. One success mark per screen.

### Tier badges — option B, approved 2026-10-12

| IMG## · name | Screens (S##) | What it shows | Size | File |
|---|---|---|---|---|
| **IMG19** · tier-rally | S27 chip, S31 hero, S39 chip | Silver shield, navy field, lime ball | 1:1 · 800² transparent | `IMG19-tier-rally.png` |
| **IMG20** · tier-volley | S27 chip, S31 hero, S39 chip | Gold shield with laurel, navy field, lime ball | 1:1 · 800² transparent | `IMG20-tier-volley.png` |
| **IMG21** · tier-smash | S27 chip, S31 hero, S39 chip | Crystal shield, navy field, lime ball | 1:1 · 800² transparent | `IMG21-tier-smash.png` |

Rendered at **24 px inside the tier chip** (S27 header, S39 identity card) and **64 px in the S31 hero**, beside the tier name. Nowhere else — not on S07, not on booking cards, not on S19.

**The tier track stays.** S27's tier card and S31's track are unchanged: Rally — Volley — Smash as a position on a line with the current points marked. The badge answers *what am I*; the track answers *how far is the next one*. A nine-month goal needs a position on a line, not a trophy. Replacing the track with the badge was considered and declined.

**The lime ball inside a badge does not spend the screen's lime slot.** At 24–28 px it is a mark, not a surface — the same exemption the lime stroke on the active tab icon already has. See `08-moodboard.md` → "The one-lime rule".

### Held and declined

| File | Status | Why |
|---|---|---|
| `_held/_held-rosette-badge.png` | **held, unused** | A fourth badge. There are three tiers. Kept rather than forced onto a screen; available if a fourth tier is ever added. |
| `_held/_held-points-discs.png` | **held, unused** | Three flat discs rising — on-brief and well made, but it does the same job as IMG22 on the same screen (S33 empty). IMG22 was kept because it belongs to the 3D set every other empty state uses. Kept in case the empty-state register is ever revisited. |
| trophy + coins + gift box | **declined, not imported** | `08-moodboard.md` names this register explicitly: *"take the idea that progress is worth celebrating, leave the 3D characters, the podium and the coins."* This object has both the coins and the podium. |

### Not an image slot

The avatar on S39/S40 (runtime upload, initials fallback) · the map on S10 (map tiles) · the barcode on S37 (generated per redemption) · the court motif (inline SVG geometry) · the app icon (needs the vector logo, **Q-BR1** still open).
