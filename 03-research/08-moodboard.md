# 08 · Moodboard

**Date:** 2026-10-10 · **updated 2026-10-12** (style direction revised during the 08 ↔ 09 loop, before Gate 4)
**Step:** 08 · Moodboard & screen references — Phase 4 · Visual direction
**Reads:** `02-assets/moodboard/` (5 images) · `02-assets/moodboard/screens/` (43 images) · `02-assets/icons/04-lucide/` · `02-assets/fonts/` · `05-features-sitemap.md` · `06-user-flows.md` · `07-palette.md` (Option A **LOCKED**)

> **This file is the style contract.** Step 09 builds from it, Step 10 reads it alongside `04-proof-ui/proof-5-screens.html` to extract tokens, and Step 13 re-syncs against it. Where this file and the proof HTML disagree, this file is wrong and must be fixed first.

---

## Style in words

### The five style references, each in one line

| File | What it is | What it contributes |
|---|---|---|
| `344f646…jpg` | AI chat app — black surface, lime-green blocks, pastel secondary cards | **Colour behaviour**: one saturated accent doing all the work |
| `438bc1c…jpg` | Hydration tracker — periwinkle, large rounded cards, weekday strip, progress ring | **Structure**: the date strip and the progress meter |
| `5343c60…jpg` | Quiz app — cream + orange, 3D characters, leaderboard, coin rewards | **Reward language** only, heavily filtered |
| `876bde0…jpg` | Wellness app — coral gradient score card, streak banner, glass tab bar | **The grammar adopted on 2026-10-12** — see below |
| `b2721e8…jpg` | Learning app — blue/white, progress rings, segmented chips, tab bar | **Density**: how much fits on one screen |

### The style, as rules a designer could follow without the images

| Attribute | The rule |
|---|---|
| **Page surface** | *Revised 2026-10-12.* The page is **never pure white**. It carries a soft wash — lime at the top, cooling to blue-grey at the bottom — plus two faint radial glows (lime top-right, teal bottom-left). Consequence: the floor for secondary text rises; neutral-600 fails on the darkest wash stop and neutral-700 is the minimum for body-size text |
| **Colour use** | Colour arrives in **blocks** — a card, a chip, a button — never as a tinted text background. **One saturated lime surface per screen**, and no more (see "The one-lime rule") |
| **Typography** | Strong weight contrast, moderate size contrast. Numbers get room and weight; a hero number carries its unit at a smaller size and lower opacity rather than the same size. Tabular figures everywhere numbers align |
| **Corner radius** | Large and consistent: cards 22, heroes 28, frames 34, buttons and chips fully rounded. Nothing square |
| **Density & spacing** | Governed by the four-step rhythm below. Generous, but *unevenly* generous — even rhythm is what made the first proof unreadable |
| **Depth** | Separation comes from surface colour, radius and a soft card shadow — not from heavy drop shadows. Heroes get a stronger shadow because they are heroes |
| **Gradient** | *Added 2026-10-12.* Depth inside **one hue**, never a second colour. One direction, ≤8–10% luminance travel. Permitted on: the navy surfaces, the lime hero and the lime action, and the faint card surface. A gradient that introduces a second hue breaks the one-lime rule and is not permitted |
| **Glass** | *Added 2026-10-12.* Only on elements that **overlay scrolling content** — in this product exactly two: the floating tab bar and the sticky booking bar. Plus small frosted blocks *inside* heroes, and circular frosted icon wells. Glass on a static card is decoration pretending to be structure, and is not permitted |
| **Stacked edges** | *Added 2026-10-12.* A hero card shows two thin edges peeking above it — one lime, one pale navy — as if it sits on a small stack. Heroes only |
| **Motif** | *Added 2026-10-12.* A pickleball court drawn in plain geometry (outer line, net, two kitchen lines, two centre service lines) sits at low opacity in the corner of a hero. It is **court geometry, never the logo redrawn**. One per screen, heroes only |
| **Imagery** | Photography of real courts. **No 3D character illustration** — wrong register for a booking product (see the anti-personas in Step 04) |
| **3D objects** | *Added 2026-10-12 (Step 12, user-supplied asset set).* 3D rendered **objects** — not characters — are permitted in two places only: **empty and error states**, where a photograph of a real court would read as content rather than as absence; and the **tier badge**. They are navy + lime, on a transparent ground, and carry no text. Still excluded, as the quiz reference always was: **characters, mascots, the podium and the coins** |
| **Iconography** | Outline, used sparingly, always beside a label — except in the tab bar, where the active icon is filled (see Icons) |
| **Overall feel in 3 words** | **Clear · energetic · settled** |

### The four-step rhythm — distance encodes relationship

*Added 2026-10-12, after the first proof spaced everything at one interval and became unreadable.*

| Token | Value | Meaning |
|---|---|---|
| `gap-attached` | **6px** | A panel that **belongs to** the thing directly above it — the court grid under its selected slot |
| `gap-peer` | **12px** | Items of **equal rank** inside one group — booking cards, menu rows, a hero and the action on it |
| `gap-group` | **20px** | Two groups that still **belong together** — the amount card and the facts that qualify it |
| `gap-section` | **32px** | **Unrelated** sections — a filter and its results, one subject and the next |

No spacing value is chosen by feel. Every gap answers "what is the relationship between these two things?" A filter control is always `gap-section` from its result list; this applies to the date strip on S12 and the Upcoming/Past tabs on S19 alike.

### The one-lime rule

The palette (Step 07, LOCKED) permits **one lime surface per screen**. That slot is spoken for on most screens:

| Screen | Where the lime slot goes |
|---|---|
| S07 | The "Book again" button — the primary persona's primary action |
| S12 | The selected court tile |
| S14 | Nothing — lime appears as **text** on the pay-at-the-counter line, not as a surface |
| S27 | The hours-remaining hero |

Consequences, all discovered in the 08 ↔ 09 loop:
- The tab bar's active state is **navy, not lime** — a lime pill would be the second lime element on every screen.
- The off-peak chip on S07 uses a lime **border and lime text**, not a lime fill.
- Where the accent must be type rather than a surface, it uses `accent-text` (accent-800), never the raw lime — `#C6F024` is 1.32:1 on white.
- **Icon-scale lime is exempt.** The lime stroke on the active tab icon and the lime ball inside a tier badge are marks, not surfaces: at 22–28 px neither reads as a colour block, so neither spends the screen's lime slot. A lime element only counts against the rule once it is large enough to be read as a *panel*.

### Where the style references disagree — W3 resolved

The five style images span three unrelated colour worlds. Roles assigned:

| Reference | Role |
|---|---|
| `344f646…` black + lime | **Leads on colour behaviour** — one saturated accent, held in reserve. Its dark surface is **not** adopted; the frame is locked to light mode |
| `876bde0…` wellness | ***Leads on the whole visual grammar*** *(promoted 2026-10-12 at the user's direction)* — tinted page wash, saturated gradient hero with stacked edges, frosted blocks inside heroes, glass circles holding icons, paired tiles, floating glass tab bar. **The grammar is adopted; the coral/lavender hues are not** |
| `438bc1c…` + `b2721e8…` | **Lead on structure** — date strip, meter, tab bar, card density. Colour ignored |
| `5343c60…` | **Reward language only**, heavily filtered: take the idea that progress is worth celebrating, leave the 3D characters, the podium and the coins |

**Still not permitted, whatever the reference does:** 3D character illustration · hue-to-hue gradients · glass on anything that does not overlay scrolling content · a second lime surface on one screen.

---

## Key screens & search keywords

Five proof screens, each proving something different:

| S## | What it proves |
|---|---|
| **S12** Court availability | The hardest layout: 6 courts × 16 slots on 390 pt |
| **S14** Booking confirmed | The product's differentiator — an amount that is *not* being paid now |
| **S07** Home | The primary persona's two-tap path sitting above discovery |
| **S27** Membership | Three numbers coexisting without three accents |
| **S19** My bookings | Repetition and density; the pending-points state |

| S## · Screen | Keywords | Where |
|---|---|---|
| S12 | `court booking` · `time slot picker` · `schedule grid` | Mobbin (Booking), Dribbble, Page Flows |
| S14 | `booking confirmation` · `pay at venue` · `ticket detail` | Mobbin (Confirmation), Dribbble |
| S07 | `booking app home` · `upcoming booking card` · `rewards summary` | Mobbin (Home), Pinterest |
| S27 | `membership benefits` · `loyalty tier` · `credit balance` | Mobbin (Rewards), Dribbble |
| S19 | `my bookings` · `reservation list` · `upcoming past tabs` | Mobbin (Orders), Page Flows |
| S16 | `recurring booking` · `multi date booking` · `weekly schedule list` | Dribbble, Mobbin |
| S20 | `reservation detail` · `booking summary` · `ticket screen` | Mobbin (Detail), Pinterest |
| S31 | `tier progress` · `loyalty levels` · `points progress` | Dribbble, Mobbin |
| S37 | `QR voucher` · `redeem reward` · `coupon code` | Mobbin, Dribbble |

Take **structure and content** from a reference, never colour or mood — the palette is already locked.

---

## Screen references — what was found and what it taught

**43 images across 5 folders**, far more than the 1–3 requested — which proved useful: with that many, patterns repeating across independent products separate cleanly from one designer's preference.

| Screen | Files | Sources |
|---|---|---|
| S07 | 10 | Dribbble/Pinterest concepts — tennis, sports, travel, fitness |
| S12 | 13 | 4 padel/tennis concepts + 8 real iOS products (Aaptiv, Best Buy, Cherrypick, Deliveroo, Marriott Bonvoy, Octopus Energy, Swiggy, Woolworths) |
| S14 | 5 | Beli, Fresha, Shazam, Superpower, TheFork |
| S19 | 9 | Beli, DoorDash, Grab Driver, IKEA, Nike, Shopify, Swiggy, Uber Eats, Urban Company |
| S27 | 6 | Chinese super-app membership centres + Western subscription screens |

### S12 — the references overturned A04-R

A04-R assumed a **court × time matrix**: 6 rows, 16 columns, 96 cells. **Not one of the 13 references does this.** All of them narrow progressively.

| Reference | Its sequence |
|---|---|
| Tennis concept | date chips → time-slot chips → price → Book; court as a separate tile grid |
| Padel concept | "Choose the date" → **"Select a court"** chip row `A1 · Booked-A2 · A3` |
| Padel concept | court tiles 3 × 2, taken ones badged "Booked" |
| Football concept | court tiles + indoor/outdoor legend → date chips → slot chips → price |
| **Woolworths** | date cards with **"From $0.00"** → **Morning/Afternoon/Evening** segment → slot rows with price and a capacity tag |
| **Swiggy** | date cards with "Sold out" → time-of-day group → time chips |
| **Marriott Bonvoy** | calendar with **the price under each date** |
| **Octopus Energy** | day-grouped slot blocks, unavailable ones reading "Fully Booked" in place |
| Cherrypick | collapsed rows carrying the price on the row itself |

**The layout S12 uses (A04-R2):** venue header → date strip, each date carrying "from $18" → period segment → slot rows with price right-aligned and a state tag → **court tiles revealed under the selected slot**, attached at `gap-attached`. Taken slots stay in place, greyed, never removed. The user still picks the court (Gate 1 stands); the flow is still four choices; no S## code changed. FL03 steps 4–6 are amended in `06-user-flows.md`.

### S14

| Reference | What it teaches |
|---|---|
| **Fresha** | The cancellation policy stated **in full, in bold, inline**, above the confirm button |
| **Beli / OpenTable** | Mark → title → bordered summary → one primary action, one quiet secondary |
| **Superpower** | Facts as an icon + label list with "View directions" and "Add to calendar" inline |
| **TheFork** | A summary pill carrying the whole booking, plus **"You will earn 100 Yums"** — the loyalty hook at the moment of booking |

**The one thing no reference does, and Pika must:** state an amount that is *not* being paid now. It needs the visual weight of a total and the label of an instruction. Resolution: the amount is the hero (52 px, on a navy gradient card with the court motif), and the instruction sits under it in a frosted row, in **lime text** — the only accent on the screen.

**Discovered in the loop:** two saturated tiles beside that hero (earn / cancel-until) competed with it. They are now a single neutral **fact strip**. See "Components discovered".

### S19

Tabs (DoorDash) rather than section headers, because Past grows long for a weekly regular. Each row: date block · venue and court · time · status chip · pending-points badge. The series appears as one row that expands. Swiggy's ticket card and Uber Eats' pill action row inform S20.

### S07

The 10 references split between *discovery* homes and *personal dashboard* homes. **Pika takes the dashboard** (Step 04 implication 1). Layout: greeting → next-booking hero → "Book again" → fact strip → "Tonight at your venue" section (venue, then its free slots).

### S27

Chinese membership centres are maximalist — gems, crowns, dense coupon grids. **Structure taken, decoration refused.** The level track from Xiaohongshu is the right model for F42: a nine-month goal needs a position on a line, not a percentage. Hours remaining is shown as a 10-segment meter, not ten blocks.

---

## Components discovered in the 08 ↔ 09 loop

These emerged from building, not from the references. Step 15 builds them in Figma.

| Component | Where | Why it exists |
|---|---|---|
| **Hero card** (`hero-ink` / `hero-accent`) | S07, S14, S27 | Stacked edges, gradient, court motif, optional frosted caption. The single most important object on a screen |
| **Fact strip** (`factstrip` / `fact`) | S07, S14 | Two or more supporting facts in one neutral card, divided by a hairline. Exists specifically so supporting information **cannot** compete with the hero. The first genuinely reused component in the system |
| **Frosted caption** (`hero-caption`) | S07, S14 | A single line inside a hero carrying its most important consequence. Lime text when the screen's lime slot is free, white when it is not |
| **Glass bar** (`tabbar` / `bookbar`) | all | The only two places glass is permitted |
| **Slot row + court panel** | S12 | The attached pair that replaced the matrix |

---

## Icons — LOCKED *(updated 2026-10-12)*

| Field | Value |
|---|---|
| Source | **Lucide** — `02-assets/icons/04-lucide/`, 1,996 SVG |
| Style, inactive | **Outline**, stroke 2 px at a 24 × 24 viewBox, round caps and joins |
| Style, **active tab** | ***Filled** (changed 2026-10-12 at the user's direction).* Lucide ships no filled variants, so the outline path is **filled with the icon colour and its interior strokes knocked out in the pill colour** — which is how a filled iOS tab icon is actually drawn. The result keeps the door in the house and the notches in the ticket |
| Active container | One **navy gradient pill**, 46 × 32, fully rounded — the same for all five destinations. Not lime (one-lime rule), and not five different colours (that version read as five separate components) |
| Default size | 24 interface · 20 inline · 22 tab · 16 in chips and badges |
| Colour | `text-secondary` by default; `text-on-glass` (neutral-800) on the glass bar; never raw lime |
| Licence | **ISC** — commercial use permitted |
| Rule | One library for the whole product. If an icon does not exist in Lucide, the pattern changes — a second source is never added |

## Font — LOCKED

| Field | Value |
|---|---|
| Family | **Inter** — `02-assets/fonts/`, 18 TTF |
| Weights used | **400 · 500 · 600 · 700**. The other five ship but are unused |
| Italics | Not used in the UI. The logo's italic is the logo's own |
| Fallback | `-apple-system` / SF Pro, then `system-ui`, `sans-serif` |
| Numerals | **Tabular figures** for prices, points, times and court numbers |
| Licence | **SIL Open Font License 1.1** |

## Assets — static / runtime

| Asset | Kind | Source | Notes |
|---|---|---|---|
| Logo — light lockup | static | `01-pika-logo.png` | Opaque white background; white surfaces only (W1). **It also carries wide white padding**, so it renders small at a given height — a third reason to want the vector |
| Logo — dark lockups | static | `02-` / `03-pika-logo-dark*.png` | Not used this version |
| App icon | static | Derived in Step 12 | `ASSUMPTION` — needs the vector to be made properly |
| Icons · font | static | Lucide · Inter, bundled | |
| Court motif | static | Inline SVG geometry | Court lines, not the logo |
| Illustrations / empty-state art | static | **Supplied by the user, Step 12** | 3D objects on a transparent ground, navy + lime. No characters, no coins, no podium. 10 objects: empty bookings · empty notifications · empty gifts · offline · booking confirmed · weekly series · points earned · 3 tier badges |
| Venue photos | runtime | **Supplied by the user, Step 12** — 6 venue photographs + 2 shared gallery shots. Client content (Q-C2) replaces them at deployment | IMG01–IMG08 |
| Court numbers · availability · prices | runtime | Booking data | Q-C4 asks whether all 6 venues price alike |
| Member name · points · tier · hours balance | runtime | Account data | |
| Gift catalogue images | runtime | **Supplied by the user, Step 12** — bottle, towel, shoes, paddle, one studio setup. Client content (Q-C1) replaces them at deployment | IMG09–IMG12 |
| Avatar | runtime | User upload, initials fallback | `ASSUMPTION` |
| Redemption code | runtime | Generated per redemption (A14) | A padel reference shows the right pattern: a barcode **plus** a short human-readable code, so staff can act when scanning fails |

---

## Open — carried to Step 10

- **Q-BR1** (vector logo) still unanswered. Three known consequences now: no transparency, no clean scaling, and the baked-in padding.
- The court motif currently appears on three heroes. If it later appears on more, it stops being an accent and becomes wallpaper — a limit to watch in Step 12.


---

## Amendment — 2026-10-12, Step 12: the tier badge (option B)

The user supplied a set of 3D objects, among them four metal shields. Decision taken,
recorded here because it changes a locked rule:

**The tier badge becomes a small 3D shield**: silver = Rally, gold = Volley, crystal = Smash.
It appears at **chip scale (24–28 px)** in the tier chip on S27 and S39, and at **64 px** in the
S31 tier hero. Nowhere else.

**What does NOT change:** the **tier track stays** — Rally — Volley — Smash as a position on a
line with the current points marked. The badge says *what you are*; the track says *how far the
next one is*, and a nine-month goal still needs a position on a line, not a trophy. Replacing
the track with the badge would have been a different decision (option C) and was declined.

**Why it is not a style break:** at chip scale a shield reads as a rank mark, not as a reward
animation. The register the Step 08 contract refused — the podium, the coins, the celebration
— is still refused: the trophy-and-coins object in the supplied set is **not used**, because
this file names coins and the podium explicitly.

A fourth shield (a rosette) was supplied but there are only three tiers. It is kept unused at
`02-assets/images/_held/` rather than forced onto a screen.
