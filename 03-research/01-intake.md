# 01 · Intake

**Date:** 2026-10-10
**Step:** 01 · Intake & input check — Phase 1 · Brief
**Project:** Pika — Pickleball court booking app

---

## Inputs found

| Input | Where | Required | Status | Note |
|---|---|---|---|---|
| Client brief | `01-brief/` | Yes — STOP without it | ✅ | `00-pika-brief.png` — 242 KB, letter from the client, English, fully legible |
| Logo (SVG/PNG, real file) | `02-assets/logo/` | Yes | ✅ | `01-pika-logo.png` — 1254 × 1254 px, 8-bit RGB, **no alpha channel** (solid white background) |
| Logo for dark surfaces (light / transparent version) | `02-assets/logo/` | If Dark mode or dark headers are planned | ⚠ | Not provided — raised as client question Q1 |
| Moodboard, 2–4 images | `02-assets/moodboard/` | Yes | ⚠ | **5 images** — one over the 2–4 range; see Warnings |
| Icons — SVG files or `icon-library.txt` | `02-assets/icons/` | Yes (one of the two) | ✅ | Option A — real SVG files: `04-lucide/`, 1,996 SVG, single library, outline style only, `LICENSE` (ISC) + `CREDITS.txt` present |
| Font — font files or `font-name.txt` | `02-assets/fonts/` | Yes (one of the two) | ✅ | Option A — real font files: Inter, 18 TTF (Thin 100 → Black 900, roman + italic), SIL Open Font License |

### Full inventory

**`01-brief/`**
- `00-pika-brief.png` — 242 KB, PNG — client letter: company runs a chain of Pickleball courts, requests UI/UX consultation for a customer-facing court booking app.
- `README.md` — kit instructions, not project content.

**`02-assets/logo/`**
- `01-pika-logo.png` — 850 KB, PNG 1254 × 1254, RGB without alpha — wordmark "Pika", bold italic; the letter **i** dot is a pickleball; the bowl of the **P** is a paddle face with a grip.

**`02-assets/moodboard/`** (top level)
- `344f646cd3dacbdb1a0980af4cb8b599.jpg` — AI chat app, black surface, lime-green accent blocks, pastel purple/pink secondary cards, pill chips.
- `438bc1c11a8998434fd55a2bdd889b0a.jpg` — hydration tracker, periwinkle/violet, large rounded cards, weekday date strip, circular progress ring, 4-item bottom tab bar with raised centre action.
- `5343c600d981f2e0297ec0ef9d3db933.jpg` — quiz/learning app, cream + orange, 3D character illustrations, leaderboard podium, coin rewards, achievement card.
- `876bde024a5a525b833cccd7c111d072.jpg` — wellness app, coral/orange gradient score card, streak banner, mood selector dial, horizontal chip carousel, floating bottom nav.
- `b2721e8f7c568fd714f646a478294471.jpg` — learning app, blue/white, 3D illustration hero, progress rings on cards, segmented filter chips, 5-item bottom tab bar.

**`02-assets/icons/04-lucide/`**
- 1,996 SVG icons, outline style, 8 sub-folders.
- `LICENSE` — ISC, commercial use permitted. `README-lucide.md`, `CREDITS.txt`, `tags.json`.

**`02-assets/fonts/`**
- Inter — 18 TTF: Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black, each with an italic. SIL OFL, commercial use permitted.

**`02-assets/images/`** — empty (correct; filled by the user in Step 12).
**`02-assets/moodboard/screens/`** — empty (correct; filled by the user in Step 08).

---

## Warnings

| # | Issue | Risk | Fix |
|---|---|---|---|
| W1 | Logo is a raster PNG with **no transparency** — solid white background baked in | The logo shows a white box on any coloured or dark surface; it cannot be rescaled cleanly for Figma, app icon or large headers | Add the original **SVG** to `02-assets/logo/`. Fallback: a PNG with a real alpha channel at ≥ 2000 px. Not blocking — Step 07 can read the colours from the current file |
| W2 | **No logo version for dark surfaces** | The moodboard leans towards dark and saturated surfaces; without a light/transparent lockup, dark headers and any Dark mode are blocked later | Ask the client now (question Q1 below) for a white / lime lockup. Default if unanswered: use the navy logo on light surfaces only, and no Dark mode in v1 |
| W3 | **5 moodboard images** — the kit expects 2–4 | Five images across three unrelated colour worlds (black + lime neon / periwinkle + violet / cream + orange + 3D characters) make the visual direction ambiguous and will produce an inconsistent palette in Step 07 | Drop one or two images in Step 07–08 so the remaining set shares one direction. Default if unanswered: keep the black + lime reference as the lead, since it matches the logo's own navy + lime, and treat the others as layout references only |

**No licence risk found:** Lucide is ISC, Inter is SIL OFL — both permit commercial use. Icons are a single library in one outline style; no mixed or copied icon sets. No system/platform font (no SF Pro, Segoe UI) and no unlicensed paid font.

All four required asset groups (logo, moodboard, icons, font) are present, so **Step 07 is not blocked**. W1 and W2 are quality issues to resolve before Step 12.

---

## Echo-back

- **Project name:** Pika
- **Industry:** Sports & leisure — a chain of Pickleball courts (court booking / membership service)
- **Platform:** Mobile app — stated in the brief ("We would like to build a mobile app"). OS, device and frame are not stated → locked in Step 02. `ASSUMPTION` until then.
- **Main brand colours seen in the logo** (sampled from the pixels of `01-pika-logo.png`, white background excluded):
  - `#0C1E36` — dark navy, the wordmark; the largest coloured area → primary
  - `#C6F024` — lime yellow-green, the paddle face and the ball → accent
  - `#84D80C` — a greener lime, second tone inside the ball
- **One-line read of the brief:** The client's customers currently book courts by phone, message or through staff; they want a self-service mobile app covering court availability and booking, fixed recurring schedules, membership packages and tiers, reward points and gift redemption, booking management and notifications — and they also want advice on key user flows, the number of main screens, and the UI/UX process, timeline and cost.
- **Plugin slug:** `pika`

### What the brief does and does not contain

**In the brief (10 stated features):** account registration and login · list of courts and available time slots · booking a court for a specific date and time · booking multiple sessions on a fixed schedule · registering for membership packages · tracking reward points per booking · redeeming points for gifts (water bottles, towels, shoes, paddles) · membership tiers by level · managing booked court schedules · notifications for booking confirmations, reminders and promotions.

**Also stated:** follow the logo's colour direction; the feel should be "fresh, sporty, modern"; the client is open to recommendations on palette, typography and UI style; there is no detailed product document yet (early idea stage); the client asks for the key user flows, an estimated number of main screens, and the working process, timeline and preliminary cost.

**Not in the brief — carried to Step 02 as questions:** number and location of courts · opening hours and slot length · pricing and payment inside the app (no payment feature is listed, yet booking and membership packages imply one) · cancellation and no-show rules · the membership tier structure · iOS/Android/both · Vietnamese, English or bilingual · any existing system to integrate with · whether staff need an admin side.

---

## Plugins renamed

**Slug:** `pika` (confirmed by the user on 2026-10-10)

| Old | New |
|---|---|
| `06-figma-plugins/phongdesigns-importoken/` | `06-figma-plugins/pika-importoken/` |
| `06-figma-plugins/phongdesigns-foundation-style/` | `06-figma-plugins/pika-foundation-style/` |

Changed — names only, no logic and no token settings:
- `manifest.json` → `name`: "Pika — Import Tokens" / "Pika — Foundation & Styles"; `id`: `pika-importoken` / `pika-foundation-style`
- `ui.html` → plugin headings
- `code.js` → header comments; plugin-data namespaces `phongdesigns-generated` → `pika-generated`, `phongdesigns-type` → `pika-type`, `phongdesigns-record`, `phongdesigns-layers`, `phongdesigns-spec`, `phongdesigns-foundation` → the `pika-` equivalents
- `06-figma-plugins/README.md` → the two plugin names in the list (the explanatory paragraph keeps the word "phongdesigns" on purpose, to explain where the starter name came from)

**Measured (commands run, not eyeballed):**
- `grep -ri phongdesigns 06-figma-plugins/*/ | wc -l` → **0**
- Identifier count before rename: 18 occurrences of `phongdesigns` inside the two plugin folders. After rename: 18 occurrences of `pika` — a one-to-one replacement, nothing dropped.
- Both `manifest.json` files parse as valid JSON (`python3 -c "json.load(...)"`).

---

## Confirmed by user

**2026-10-10** — user confirmed the echo-back and the slug `pika` with no corrections.

---

## User answers — 2026-10-10 (after the echo-back)

Recorded here as the source of truth; Step 02 locks them into the brief analysis.

| # | Question | Answer | Status |
|---|---|---|---|
| 1 | Payment in the app? | **Pay at the counter only** — no online payment, no card storage in v1 | Confirmed |
| 2 | Platform & frame | **iOS first**, frame **390 × 844** (iPhone 14/13/12 class), portrait | Confirmed — frame lock |
| 3 | Language & currency | **English only**, currency **$** | Confirmed |
| 4 | Venues, courts, hours, slot | **6 venues × 6 courts = 36 courts**; 06:00–22:00; 60-minute slots | Confirmed (hours and slot length were the proposed defaults, accepted) |
| 5 | Membership tiers | User delegated the proposal to the designer — see "Proposed tier system" below | Proposed, awaiting confirmation |
| 6 | Cancellation rule | **Free cancellation up to 24 h before the slot** | Confirmed |
| 7 | Admin side | **Customer app only** in this version | Confirmed |
| 8 | Logo files | Dark-surface logo added; **light mode only in this version** | Resolved — see Warnings update |
| 9 | Moodboard selection | No selection given — the Step 01 default applies | Default applies |

### Warnings — updated status

| # | Status |
|---|---|
| W1 · logo without transparency | **Partly resolved.** `03-pika-logo-dark-transparent.png` (1134 × 496, RGBA, measured 58.0 % fully transparent pixels) is a real transparent asset. The light-mode lockup `01-pika-logo.png` is still opaque RGB on white, which is acceptable because v1 ships light mode on white/near-white surfaces. Remaining risk: the light lockup cannot sit on a tinted card or a photo without showing a white box. Vector source still preferred before Step 14. User accepted PNG. |
| W2 · no dark-surface logo | **Resolved.** `02-pika-logo-dark.png` (opaque navy plate) and `03-pika-logo-dark-transparent.png` (white wordmark, lime paddle and ball, transparent background) are in `02-assets/logo/`. **Dark mode is out of scope for this version** — the dark lockup is kept for the next version and for dark headers if any appear. |
| W3 · 5 moodboard images | **Open — default applies.** The black + lime reference leads because it matches the logo's own navy + lime; the other four are treated as layout references only. Revisit at Step 07–08. |

### Proposed tier system — `ASSUMPTION`, not from the brief

Earning: **1 point per $1 spent** on court bookings and membership packages. Points are credited after the session is played, not at booking — the brief says "tracking reward points after each court booking", and pay-at-counter means a booking is only real revenue once the customer shows up. This also discourages no-shows without a penalty rule.

Tier is set by **points earned in a rolling 12 months**, not lifetime points, so the status keeps meaning something and active players are rewarded over dormant ones. Redeeming gifts spends the point balance but does not lower the tier.

| Tier | Threshold (points / 12 months) | Benefits |
|---|---|---|
| **Rally** | 0 — everyone starts here | Book up to 7 days ahead · earn points · redeem gifts |
| **Volley** | 1,500 | Book up to 14 days ahead · 1.25× points · 1 free cancellation inside 24 h per month |
| **Smash** | 5,000 | Book up to 30 days ahead · 1.5× points · priority on peak slots · birthday gift |

Names come from pickleball terms and are short enough for a badge. The benefit that matters most in a court-booking product is **how far ahead you may book** — peak evening slots are the scarce resource, so advance-booking windows make the tier felt every week, unlike a discount the customer sees once.

Open for Step 02: court pricing is still unknown, and without it the point thresholds above cannot be sanity-checked against how long a regular player takes to reach a tier.
