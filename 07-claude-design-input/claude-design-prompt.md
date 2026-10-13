# Pika — the prompt to paste into Claude Design

**Date:** 2026-10-12 · **Step:** 12 · Part 2

---

## Files to attach, before pasting the prompt

| # | File | Why it is needed |
|---|---|---|
| 1 | `07-claude-design-input/master-spec.md` | The specification. Every screen, state, action and image slot. |
| 2 | `04-proof-ui/proof-5-screens.html` | **The look.** 5 approved screens at 390 × 844 with the real `:root`. This is the visual contract, not a suggestion. |
| 3 | `02-assets/logo/01-pika-logo.png` | The logo. Light surfaces only — it has an opaque white background. |
| 4 | `05-tokens/1-primitive.json` | Tier 1 tokens. |
| 5 | `05-tokens/2-semantic.json` | Tier 2 tokens — the role names. |
| 6 | `05-tokens/3-component.json` | Tier 3 tokens. |
| 7 | **All 24 files in `02-assets/images/`** | The `IMG##` slots — every one is filled, nothing is a placeholder. Do **not** attach `_held/`. |

**Do not attach:** the dark logo (`02-` / `03-pika-logo-dark*.png`) — not used this release. The Lucide SVG folder — 1,996 files; name the icons instead, Claude Design knows Lucide. The research files — `master-spec.md` already carries everything from them that matters.

**Images stay in `02-assets/images/`.** Never copy them into `07-claude-design-input/`.

---

## The prompt — copy everything below this line

---

Build the complete UI for **Pika**, an iOS court-booking app for a 6-venue Pickleball chain. Everything you need is in the attached files. **Ask me before building if anything in the spec is unclear** — I would rather answer three questions now than review 46 wrong screens.

### What to build

Build **every screen and every state** listed in `master-spec.md` §3. That is **46 screens**, S01–S46, plus the states named on each one (default, loading, empty, error, success, disabled — each screen's entry says which apply and which are `n/a` and why).

- **One frame per screen**, each exactly **390 × 844**.
- Label every frame **`S## · Name`** — exactly as the spec names it, e.g. `S12 · Court availability`.
- Where a screen has distinct states that are worth seeing side by side (S07 default / empty / error · S12 default / loading / empty / offline · S19 upcoming / past / empty · S20 upcoming / past / offline · S22 with-grace / without-grace · S27 default / no-package · S35 affordable / unaffordable), build each as **its own frame**, labelled `S## · Name — <state>`.
- **Group the frames by flow**, in the order of `master-spec.md` §5.3, so the file reads as journeys rather than as an alphabetical pile. Put a text label above each group with the flow code and name (`FL03 · Book a court`).
- Sheets (S18, S21, S22, S24, S25, S36, S44, S46) are built as full 390 × 844 frames showing the sheet over a dimmed version of its parent screen — not as floating fragments.

### Match the proof screens exactly

`proof-5-screens.html` contains S07, S12, S14, S19 and S27, already approved. **Reproduce those five as they are** and derive the other 39 from them.

Match the proof's: page wash, gradients, glass treatment, hero cards with their stacked edges and court motif, the fact strip, corner radii, shadow levels, the real iOS status bar, the floating glass tab bar with its navy pill and lime outline icons, and above all its **spacing rhythm**.

If a screen in the spec seems to need a visual pattern that is not in the proof, use the nearest pattern that **is** in the proof rather than inventing one. Tell me where you had to do this.

### Tokens — the hard rules

- Declare **every** value as a CSS variable in `:root`, using the names already in `proof-5-screens.html`. The attached token JSON files are the source; `05-tokens/2-semantic.json` holds the role names.
- **No hex anywhere outside `:root`.** Not one.
- **No `rgba()` anywhere outside `:root`.** Transparent colours are tokens too — there are 20 of them.
- **No inline `style=` attributes.** Not one.
- Use **semantic class names** that describe the role, not the look: `.hero`, `.factstrip`, `.slot`, `.court`, `.tabbar` — never `.navy-card` or `.big-green-button`.
- The proof screens achieve 0 inline styles, 0 hex outside `:root`, 0 rgba outside `:root` and 537 `var()` uses. Hold that standard.

### Components — mark them

`master-spec.md` §4 lists 25 shared components with their class names. **Use the same class every single time a component appears**, across all 46 screens, with variants as extra classes (`.hero.hero-ink`, `.btn.btn-quiet`, `.tag.is-booked`). These classes are how these parts become Figma components later, so consistency here is worth more than cleverness.

### Content

- **Real content everywhere. No lorem ipsum, no "Label", no placeholder names.**
- The spec fixes the sample content so the whole app reads as one product: member **Minh**, tier **Volley**, **1,284** points, **6.5** prepaid hours, home venue **Pika District 7**, regular slot **Court 4 · Tue 19:00–20:00**, prices **$18** off-peak and **$36** peak. The six venues are **Pika District 7 · Pika Thao Dien · Pika Phu Nhuan · Pika Binh Thanh · Pika Tan Binh · Pika Go Vap**. Use these exact values — a different number on a different screen reads as a bug.
- English only. Currency `$`. Light mode only.
- **Tabular figures** on every price, point total, time, court number and date number.

### Images — all 24 are supplied, none is a placeholder

Use them in their `IMG##` slots exactly as `master-spec.md` §6 assigns them. **Crop to the slot — never redraw, recolour, regenerate or substitute an image.** Every slot in the spec has a real file; if you think one is missing, re-read §6 rather than inventing a placeholder.

**The set has two registers, and they must not be mixed:**

- **IMG01–IMG12 and IMG23 are photographs.** They carry *content* — a venue, a gift, equipment. They go where the screen is showing something that exists.
- **IMG13–IMG22 are 3D objects on a transparent ground.** They carry *absence and state* — an empty list, a lost connection, a rank. They go in empty states, error states, and the tier badge.
- **IMG24 is one flat diagram** (ten blocks, 6.5 filled) that teaches what a package is. It is the only one of its kind — do not invent more flat illustrations to match it.

Never put a photograph in an empty state: it makes the screen look full, which is the opposite of what the state is saying. Never put a 3D object where a venue or a gift belongs. The one exception is IMG23, a photograph used decoratively on the S29 and S42 headers — both non-empty screens.

**Four placement rules that are easy to get wrong:**

1. **One success mark per screen.** IMG17 *replaces* the Lucide glass-circle check on S14, S17 and S30 — it does not sit beside it.
2. **The 3D objects keep their transparent ground.** No plate, no circle, no card behind them. They sit directly on the page wash or on a card.
3. **The tier badge (IMG19 / IMG20 / IMG21) appears at 24 px in the tier chip and 64 px in the S31 hero. Nowhere else** — not on S07, not on booking cards, not on S19. The lime ball inside it is icon-scale and does **not** spend the screen's lime slot.
4. **Crop, never letterbox.** The venue photos run at 16:9, 56 px square and 48 px square; all six survive a centre square crop.

**Never use `loading="lazy"`, and never set an image to load on scroll or on intersection.** Every image must load as soon as the page opens. A long page with lazy images looks complete in a browser but a one-shot capture imports the lower screens without their images — which is exactly how this file will be brought into Figma.

Embed images with ordinary `<img src="...">` relative paths, or inline as `data:` URIs. Either is fine; mixed is fine.

### Icons, font, logo

- **Lucide only**, outline, stroke 2 at a 24 viewBox, round caps and joins. Inline the SVG. If an icon you want does not exist in Lucide, change the pattern — do not add a second icon source. Tab bar: `house` · `calendar-plus` · `ticket` · `award` · `user`.
- **Inter only**, weights 400 / 500 / 600 / 700. Fallback `-apple-system, system-ui, sans-serif`. No italics in the UI.
- **The logo appears on S01 and S02 only**, on a white plate, at the size the spec gives. It has an opaque white background and wide baked-in padding — do not try to key it out, do not place it on navy, do not scale it up to compensate.
- The **court motif** is inline SVG geometry (outer line, net, two kitchen lines, two centre service lines) at low opacity in a hero's corner. It is court geometry, **never the logo redrawn**. Maximum one per screen, heroes only.

### Keep presentation out of the screens

- A device mockup, phone-frame shadow, rounded phone bezel or canvas background goes on an **outer wrapper** element, never inside the `S##` screen frame. Anything inside the frame comes into Figma in Step 14 as a real layer with no token behind it.
- Gradients use **token colours only**, and stay within **one hue**. Avoid fully transparent gradient stops — use the lowest-opacity token stop instead, because a fully transparent stop imports into Figma as an untokenised value.
- No CSS filters, blend modes or transforms for decoration. `backdrop-filter` is permitted and only on the two glass bars, the frosted blocks inside heroes, and the glass circles.

### Design rules that are not negotiable

These came out of a long revision loop and each one has a reason:

1. **The one-lime rule** — exactly one element per screen may use `--color-accent-surface` as a **fill**. The assignments are in `master-spec.md` §4. Where the slot is already spent, an accent becomes **type** (`--color-accent-text`) or a **border**. Raw `#C6F024` is 1.32:1 on white and is never used as type.
2. **The four-step spacing rhythm** — `--gap-attached` 6 / `--gap-peer` 12 / `--gap-group` 20 / `--gap-section` 32. Every gap answers "what is the relationship between these two things?" A filter is **always** `gap-section` from its results. Do not use a single uniform spacing — that is what made the first attempt unreadable.
3. **The page is never pure white.** It always carries `--gradient-page`.
4. **Glass only on things that overlay scrolling content** — the floating tab bar, the sticky booking bar, the glass nav bar on the map, the frosted blocks inside heroes, and the glass circles. Glass on a static card is not permitted.
5. **Every screen has one clear focal point.** If two objects on a screen carry equal visual weight, the supporting one becomes a neutral **`.factstrip`**. This is what the fact strip exists for.
5b. **The tier track stays.** S27's tier card and S31's track show Rally — Volley — Smash as a position on a line with the current points marked. The badge says *what you are*; the track says *how far the next one is*. Do not replace the track with the badge.
6. **Secondary text is `--color-text-secondary` (neutral-700), never neutral-600** — 600 measures 4.05:1 on the darkest wash stop and fails.
7. **Taken, unavailable and dimmed items stay in place, greyed.** Never removed. A gap in a list reads as a loading failure.
8. **A disabled control always carries an explanation**, or is replaced by a block that explains instead. A dead button with no reason is a bug.

### Export

Export the whole thing as **one HTML file**. All CSS in one `<style>` block in the head; all SVG inline. One file, not a folder — Step 14 imports a single capture.

---

## End of prompt — stop copying here

---

## What to do with the result

1. Review the build **against `master-spec.md`**, not against taste: are all 46 screens there, are the state frames there, is every frame labelled `S## · Name`?
2. Spot-check the hard rules: search the exported HTML for `style="` (expect 0), for `#` outside the `:root` block (expect 0), for `rgba(` outside `:root` (expect 0), and for `loading="lazy"` (expect 0). Check that all 24 images resolve — a broken `src` shows as nothing at all in a one-shot capture.
3. Export one HTML file and save it as **`08-final-ui/final-ui.html`**.
4. Say **"done"**.

Step 13 then reviews the full UI and re-syncs the tokens from it — which is where the component coverage rises from today's 8 of 18 baseline groups, because inputs, selects, switches, modals, toasts and skeletons finally exist on real screens.
