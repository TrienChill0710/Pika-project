# 07 · Palette

**Date:** 2026-10-10
**Step:** 07 · Colour palette from the logo — Phase 4 · Visual direction
**Reads:** `02-assets/logo/01-pika-logo.png` · `02-brief-analysis.md` (frame LOCKED: light mode only) · `03-business.md` · `04-users.md`
**Preview:** `03-research/07-palette-options.html` — the three options side by side, with the real screens of this product

---

## Logo colours

**Source: sampled from the PNG** (`01-pika-logo.png`, 1254 × 1254, RGB). No vector file was supplied (Q-BR1 unanswered), so values were measured by counting pixels with the white background excluded, not picked by eye.

| Hex | Role in the logo | Share of the coloured area |
|---|---|---|
| `#0C1E36` | The wordmark "Pika" — letterforms | Largest by far |
| `#C6F024` | The paddle face inside the **P**, and the ball above the **i** | Second |
| `#84D80C` | A greener second tone inside the ball | Minor |

The logo also exists as `02-pika-logo-dark.png` (navy plate) and `03-pika-logo-dark-transparent.png` (white wordmark, lime paddle, genuinely transparent — measured 58.0 % fully transparent pixels). Dark mode is out of scope for this version; those files are for the next one.

## Brand read

Navy and lime is a **sports-equipment** pairing, not a wellness or lifestyle one — it reads as kit, court markings and high-visibility gear. Navy supplies the seriousness that makes a booking feel real; lime supplies the energy and is the only colour in the system that moves.

That fits the business read from Step 03 better than it first appears. The product's job is not to excite — it is to make a booking feel **settled** (G01: the counter moment) — and navy does that. Lime's job is narrower and more valuable: it is the only colour available to mark the one thing that matters on a screen, which in this product is almost always *the slot you are about to take* or *the progress you are making toward a tier*.

The risk, which the numbers below confirm: **lime at `#C6F024` is 1.32:1 against white.** It can never be text on a light surface. Any palette that forgets this will produce beautiful mockups and an unreadable app.

---

## The three options

Each ramp is generated in OKLab, so steps are perceptually even rather than naively lightened; the real logo hex is **snapped into the ramp** at its nearest step rather than approximated.

### Option A · Logo-faithful

The logo, unedited. Deep navy carries the UI, lime is reserved for the one thing that matters on each screen.

The logo colour itself sits at **primary-900** and **accent-200** — it is in the ramp, not approximated by it.

| Step | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| **Primary** | `#EFF6FF` | `#E5EDF8` | `#C7DBF6` | `#AEC3E1` | `#94AAC8` | `#7A90AF` | `#627895` | `#4A5D78` | `#33435A` | `#0C1E36` |
| **Secondary** | `#E6F9FF` | `#DBF0FB` | `#ADE2FE` | `#91CBEA` | `#73B1D2` | `#5897B8` | `#3F7E9E` | `#2E6F8E` | `#104861` | `#0D2D3C` |
| **Accent** | `#EEFDCD` | `#E4F4C1` | `#C6F024` | `#AED321` | `#94BA00` | `#7B9F00` | `#648500` | `#4C6900` | `#354D00` | `#213000` |

| Step | 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Neutral** | `#FEFFFF` | `#F4F5F7` | `#EBECED` | `#D7D9DC` | `#BFC2C4` | `#A6A8AB` | `#8C8F91` | `#747679` | `#5A5C5E` | `#404244` | `#1A2733` | `#000000` |

**Status colours:** success `#157A46` · warning `#8A5200` · error `#B3332A` · info `#245C77`

**Contrast — every number computed with the WCAG 2.1 relative-luminance formula:**

| Pair | Colours | Ratio | Needs | Verdict |
|---|---|---|---|---|
| Body text on background | `#1A2733` on `#FEFFFF` | **15.17:1** | ≥4.5 | ✅ pass |
| Secondary text on background | `#747679` on `#FEFFFF` | **4.55:1** | ≥4.5 | ✅ pass |
| Body text on surface card | `#1A2733` on `#F4F5F7` | **13.93:1** | ≥4.5 | ✅ pass |
| Primary CTA label on primary CTA | `#FEFFFF` on `#0C1E36` | **16.71:1** | ≥4.5 | ✅ pass |
| Second CTA label on second CTA | `#1A2733` on `#C6F024` | **11.5:1** | ≥4.5 | ✅ pass |
| Accent as TEXT on background | `#C6F024` on `#FEFFFF` | **1.32:1** | ≥4.5 | ⚠️ **by design — never do this** |
| Accent on primary — large/graphic | `#C6F024` on `#0C1E36` | **12.67:1** | ≥3.0 | ✅ pass |
| Large heading on background | `#404244` on `#FEFFFF` | **10.07:1** | ≥3.0 | ✅ pass |
| Icon on surface | `#747679` on `#F4F5F7` | **4.18:1** | ≥3.0 | ✅ pass |
| Divider (neutral-300) on surface | `#BFC2C4` on `#F4F5F7` | **1.64:1** | ≥3.0 | ➖ exempt (decorative divider, not a control boundary) |
| Control border token on surface | `#747679` on `#F4F5F7` | **4.18:1** | ≥3.0 | ✅ pass |
| Accent-dark as text on background | `#354D00` on `#FEFFFF` | **9.47:1** | ≥4.5 | ✅ pass |
| Success text on background | `#157A46` on `#FEFFFF` | **5.37:1** | ≥4.5 | ✅ pass |
| Error text on background | `#B3332A` on `#FEFFFF` | **6.12:1** | ≥4.5 | ✅ pass |
| Warning text on background | `#8A5200` on `#FEFFFF` | **6.38:1** | ≥4.5 | ✅ pass |

---

### Option B · Softer & friendlier

Navy lifted to a mid blue, lime toned down to a usable green, neutrals warmed. Calmer and kinder to a first-timer; less obviously sporty.

The logo colour itself sits at **primary-800** and **accent-500** — it is in the ramp, not approximated by it.

| Step | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| **Primary** | `#E8F8FF` | `#DDEEFF` | `#B4DEFF` | `#98C7F5` | `#7CADDD` | `#6293C3` | `#4A7AA9` | `#325F8A` | `#1D4E7A` | `#142B42` |
| **Secondary** | `#E3FBFB` | `#D8F2F2` | `#A5E7E8` | `#87D1D2` | `#68B8B9` | `#4FA3A5` | `#2E8587` | `#0F696B` | `#004D4F` | `#033032` |
| **Accent** | `#EAFDD9` | `#DFF4CD` | `#B9EC87` | `#9FD565` | `#83BC40` | `#6FA81E` | `#528800` | `#3A6C00` | `#254F00` | `#183200` |

| Step | 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Neutral** | `#FFFFFF` | `#F6F5F5` | `#ECECEB` | `#D9D9D8` | `#C2C1C1` | `#A8A8A7` | `#8F8E8E` | `#767675` | `#5C5C5B` | `#424241` | `#2A2724` | `#000000` |

**Status colours:** success `#276942` · warning `#8A5709` · error `#A83227` · info `#3C7E80`

**Contrast — every number computed with the WCAG 2.1 relative-luminance formula:**

| Pair | Colours | Ratio | Needs | Verdict |
|---|---|---|---|---|
| Body text on background | `#2A2724` on `#FFFFFF` | **14.85:1** | ≥4.5 | ✅ pass |
| Secondary text on background | `#767675` on `#FFFFFF` | **4.55:1** | ≥4.5 | ✅ pass |
| Body text on surface card | `#2A2724` on `#F6F5F5` | **13.65:1** | ≥4.5 | ✅ pass |
| Primary CTA label on primary CTA | `#FFFFFF` on `#325F8A` | **6.69:1** | ≥4.5 | ✅ pass |
| Second CTA label on second CTA | `#2A2724` on `#6FA81E` | **5.16:1** | ≥4.5 | ✅ pass |
| Accent as TEXT on background | `#6FA81E` on `#FFFFFF` | **2.88:1** | ≥4.5 | ⚠️ **by design — never do this** |
| Accent on primary — large/graphic | `#6FA81E` on `#142B42` | **5.02:1** | ≥3.0 | ✅ pass |
| Large heading on background | `#424241` on `#FFFFFF` | **10.06:1** | ≥3.0 | ✅ pass |
| Icon on surface | `#767675` on `#F6F5F5` | **4.18:1** | ≥3.0 | ✅ pass |
| Divider (neutral-300) on surface | `#C2C1C1` on `#F6F5F5` | **1.65:1** | ≥3.0 | ➖ exempt (decorative divider, not a control boundary) |
| Control border token on surface | `#8F8E8E` on `#F6F5F5` | **3.0:1** | ≥3.0 | ✅ pass |
| Accent-dark as text on background | `#254F00` on `#FFFFFF` | **9.56:1** | ≥4.5 | ✅ pass |
| Success text on background | `#276942` on `#FFFFFF` | **6.59:1** | ≥4.5 | ✅ pass |
| Error text on background | `#A83227` on `#FFFFFF` | **6.67:1** | ≥4.5 | ✅ pass |
| Warning text on background | `#8A5709` on `#FFFFFF` | **6.09:1** | ≥4.5 | ✅ pass |

---

### Option C · Bold court

Near-black ink and lime used as a full surface, not an accent — the black + lime neon direction of the leading moodboard reference.

The logo colour itself sits at **primary-900** and **accent-200** — it is in the ramp, not approximated by it.

| Step | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| **Primary** | `#F3F6F8` | `#EAECEF` | `#D4DAE0` | `#BCC2C9` | `#A2A9B0` | `#898F96` | `#70777E` | `#575D63` | `#3E4348` | `#0A0F14` |
| **Secondary** | `#E5FFD1` | `#DAF7C5` | `#ABF16C` | `#84D80C` | `#72C100` | `#56A700` | `#3E8D00` | `#257000` | `#0F5200` | `#0D3400` |
| **Accent** | `#EEFDCD` | `#E4F4C1` | `#C6F024` | `#AED321` | `#94BA00` | `#7B9F00` | `#648500` | `#4C6900` | `#354D00` | `#213000` |

| Step | 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Neutral** | `#FFFFFF` | `#F5F5F5` | `#ECECEC` | `#D9D9D9` | `#C1C1C2` | `#A8A8A8` | `#8E8E8F` | `#767676` | `#5C5C5C` | `#424242` | `#101418` | `#000000` |

**Status colours:** success `#117A45` · warning `#8A5800` · error `#B82E1F` · info `#1F6F96`

**Contrast — every number computed with the WCAG 2.1 relative-luminance formula:**

| Pair | Colours | Ratio | Needs | Verdict |
|---|---|---|---|---|
| Body text on background | `#101418` on `#FFFFFF` | **18.5:1** | ≥4.5 | ✅ pass |
| Secondary text on background | `#767676` on `#FFFFFF` | **4.54:1** | ≥4.5 | ✅ pass |
| Body text on surface card | `#101418` on `#F5F5F5` | **16.97:1** | ≥4.5 | ✅ pass |
| Primary CTA label on primary CTA | `#101418` on `#C6F024` | **14.0:1** | ≥4.5 | ✅ pass |
| Second CTA label on second CTA | `#FFFFFF` on `#101418` | **18.5:1** | ≥4.5 | ✅ pass |
| Accent as TEXT on background | `#C6F024` on `#FFFFFF` | **1.32:1** | ≥4.5 | ⚠️ **by design — never do this** |
| Accent on primary — large/graphic | `#C6F024` on `#0A0F14` | **14.56:1** | ≥3.0 | ✅ pass |
| Large heading on background | `#424242` on `#FFFFFF` | **10.05:1** | ≥3.0 | ✅ pass |
| Icon on surface | `#767676` on `#F5F5F5` | **4.17:1** | ≥3.0 | ✅ pass |
| Divider (neutral-300) on surface | `#C1C1C2` on `#F5F5F5` | **1.65:1** | ≥3.0 | ➖ exempt (decorative divider, not a control boundary) |
| Control border token on surface | `#8E8E8F` on `#F5F5F5` | **3.0:1** | ≥3.0 | ✅ pass |
| Accent-dark as text on background | `#354D00` on `#FFFFFF` | **9.49:1** | ≥4.5 | ✅ pass |
| Success text on background | `#117A45` on `#FFFFFF` | **5.39:1** | ≥4.5 | ✅ pass |
| Error text on background | `#B82E1F` on `#FFFFFF` | **6.09:1** | ≥4.5 | ✅ pass |
| Warning text on background | `#8A5800` on `#FFFFFF` | **6.04:1** | ≥4.5 | ✅ pass |

---

## Two findings that apply to every option

**1 · Lime is never text on a light surface.** `#C6F024` on white is **1.32:1** — roughly a quarter of what body text needs. This is not a flaw to fix; it is the nature of the colour. The system therefore carries two separate accent tokens:

- `accent-surface` — the real logo lime, used as a **background** with dark ink on top (11.5:1 in option A)
- `accent-text` — accent-800, used when the accent must be **type** (9.47:1 in option A)

Any screen that puts lime type on white is wrong, and the token names are what will stop it happening in Step 10.

**2 · Dividers and control borders are different problems.** A hairline divider at 1.65:1 is not a WCAG failure — WCAG 2.1 §1.4.11 governs boundaries that carry meaning, not decorative rules. But the outline of an input or a selectable grid cell **is** meaningful, so it needs its own darker token. In option A that token had to be moved from neutral-500 (2.98:1 — failing by two hundredths) to **neutral-600 (4.18:1)**. That single adjustment is the kind of thing that only surfaces when the ratios are computed rather than judged.

---

## Recommendation

**Option A · Logo-faithful**, with one idea borrowed from C.

The client asked for the interface to "follow the color direction of the logo" with a "fresh, sporty, and modern feeling" (brief ¶6). A does that literally, and it is the only option where the navy that dominates the logo also dominates the UI.

The deciding argument is the grid (S12). That screen has to show 96 cells at 390 pt and make three things instantly separable: free, taken, and *the price band*. A gives the most room to do that, because its accent is held in reserve — lime appears on the selected cell and nowhere else, so selection is unmistakable. **C is the most striking of the three and the most dangerous here**: with lime as a full surface colour, the grid loses its loudest signal, because everything is already loud. B is the safest and the least Pika — toning the lime down to `#6FA81E` buys readability the system does not need (A already has `accent-text` for that) and spends the brand's only distinctive asset to do it.

The idea worth borrowing from C: **C's near-black header reads more modern than A's navy header.** A's navy can take one step darker on large surfaces without losing its identity. That is a Step 09 refinement, not a palette change.

---

## LOCKED

**Option A · Logo-faithful** — chosen by the user on 2026-10-10, with no changes requested.

### The tokens this locks for Step 10

These are the decisions, not the full ramp. The ramps above are the source; Step 10 turns them into `1-primitive.json` and `2-semantic.json`.

| Semantic token | Value | Why this value and not another |
|---|---|---|
| `color.brand.primary` | `#0C1E36` | The logo navy itself, unaltered |
| `color.brand.accent-surface` | `#C6F024` | The logo lime itself — **background only**, never type |
| `color.brand.accent-text` | `#354D00` | The accent when it must be type: 9.47:1 on background |
| `color.action.primary.bg` | `#0C1E36` | 15.17:1 against its white label — the Confirm button on S13/S14 |
| `color.action.primary.fg` | `#FEFFFF` | |
| `color.action.secondary.bg` | `#C6F024` | Lime as the "Book again" surface — the primary persona's primary action (Step 04 implication 1) |
| `color.action.secondary.fg` | `#1A2733` | Dark ink on lime, 11.5:1 |
| `color.text.primary` | `#1A2733` | 15.17:1 |
| `color.text.secondary` | `#747679` | 4.55:1 — the floor for body text; nothing lighter may carry words |
| `color.surface.page` | `#FEFFFF` | |
| `color.surface.card` | `#F4F5F7` | |
| `color.border.divider` | `#BFC2C4` | Decorative only — exempt from 1.4.11 |
| `color.border.control` | `#747679` | **4.18:1 — moved up from neutral-500, which measured 2.98:1 and failed by two hundredths.** Input outlines and selectable grid cells use this |
| `color.status.success` | `#157A46` | 5.37:1 |
| `color.status.warning` | `#8A5200` | 6.38:1 |
| `color.status.error` | `#B3332A` | 6.12:1 |
| `color.status.info` | `#245C77` | |

### Rules that travel with this palette

1. **Lime is a surface, never a word on a light background.** `#C6F024` on white is 1.32:1. Use `accent-text` (`#354D00`) when the accent must be type.
2. **One lime element per screen.** The accent marks the single most important thing — the selected slot on S12, the "Book again" action on S07, the progress fill on S31. A second lime element on the same screen cancels the first.
3. **Control boundaries use `color.border.control`, dividers use `color.border.divider`.** They are not interchangeable; the first is an accessibility requirement, the second is decoration.
4. **Carried into Step 09 as an open refinement, not a palette change:** the header surface may go one step darker than `#0C1E36` on large areas, borrowing option C's near-black feel. To be judged on the real proof screens, not decided here.

### What this does not lock

Dark mode (out of scope this version) · typography (Inter is the only font supplied; sizes and weights are Step 10) · the moodboard direction (Step 08, where the 5 references are narrowed — W3 is still open).
