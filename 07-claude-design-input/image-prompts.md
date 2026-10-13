# Pika — image inventory

**Date:** 2026-10-12 · **Step:** 12 · Part 1b
**Status: CLOSED — nothing to generate.** The user supplied 25 images on 2026-10-12, plus 2 flat illustrations generated from the original briefs. **24 are in use, 2 are held, 1 was declined.**

> This file began as 15 generation prompts. It was replaced once the real images arrived, because a list of prompts for images that already exist is a trap: someone would eventually generate against it and overwrite the real set. What follows is the inventory and the rules for using it. The generation briefs are gone on purpose.

**Location:** `02-assets/images/` · **Held:** `02-assets/images/_held/`

---

## In use — 23 files

### Photographs · IMG01–IMG12, IMG23

| File | Slot | Register |
|---|---|---|
| `IMG01-venue-district7.png` | Home venue — indoor hall, bright, plants | 16:9 photo |
| `IMG02-venue-thao-dien.png` | Covered court, palms, waterfront | 16:9 photo |
| `IMG03-venue-phu-nhuan.png` | Rooftop at dusk, city skyline | 16:9 photo |
| `IMG04-venue-binh-thanh.png` | Indoor, multiple courts, low sun | 16:9 photo |
| `IMG05-venue-tan-binh.png` | Outdoor morning, trees, water | 16:9 photo |
| `IMG06-venue-go-vap.png` | Outdoor golden hour, bench with kit | 16:9 photo |
| `IMG07-court-detail.png` | Ball on the line, paddle behind | 4:3 photo, crop to 16:9 |
| `IMG08-court-evening.png` | **S02 hero** — night, string lights | 16:9 photo |
| `IMG09-gift-bottle.png` | Navy bottle, lime cap | 1:1 product |
| `IMG10-gift-towel.png` | Folded navy towel, lime stripe | 1:1 product |
| `IMG11-gift-shoes.png` | Court shoes, white / navy / lime | 1:1 product |
| `IMG12-gift-paddle.png` | Navy paddle, lime edge, ball | 1:1 product |
| `IMG23-equipment-group.png` | S29 header — four paddles at a net post, ball basket | 16:9 photo |

### The one diagram

| File | Slot | Register |
|---|---|---|
| `IMG24-package-diagram.png` | S27 empty (no package), S28 header | 16:9 transparent, flat vector |

Ten blocks under a bracket, 6.5 filled — the same figure as the balance it sits above. It is the only flat illustration in the set, and it gets a register of its own because it does a different job: it **teaches** what a package is, rather than signalling content or absence.

### 3D objects · IMG13–IMG22

| File | Slot | Register |
|---|---|---|
| `IMG13-empty-bookings.png` | S19 empty | 800² transparent |
| `IMG14-empty-notifications.png` | S08 empty, S46 primer | 800² transparent |
| `IMG15-empty-gifts.png` | S34 empty, S38 empty, S37 | 800² transparent |
| `IMG16-offline.png` | S12 offline, S20 offline, S45 | 800² transparent |
| `IMG17-booking-confirmed.png` | S14, S17, S30 | 1024² transparent |
| `IMG18-series-weekly.png` | S15, S16, S23, S26 | 1024² transparent |
| `IMG19-tier-rally.png` | Tier badge — silver | 800² transparent |
| `IMG20-tier-volley.png` | Tier badge — gold | 800² transparent |
| `IMG21-tier-smash.png` | Tier badge — crystal | 800² transparent |
| `IMG22-points-earned.png` | S33 empty | 800² transparent |

Full slot-to-screen assignment, with sizes and placement rules, is in `master-spec.md` §6. **That table is the contract; this file is the index.**

---

## The two registers, and why they do not mix

- **Photographs carry content.** A venue you could travel to, a gift you could hold. They appear where the screen is showing something that exists.
- **3D objects carry absence and state.** An empty list, a lost connection, a rank. They appear where the screen is showing that something is *not* there, or showing a status rather than a thing.
- **One flat diagram teaches.** IMG24 draws what a package is. It is deliberately the only one — a second flat illustration would start a third visual language.

Putting a photograph of a real court into an empty state makes the screen look full. That is the whole reason the second register exists — it is not decoration, it is the difference between "you have no bookings" and "here is a court".

A photograph is never used as an empty-state image. A 3D object is never used as venue or gift content. The single exception is **IMG23**, a photograph used as a decorative header on **S29 only** — a screen that is selling something, where a real photograph is the point.

---

## Rules for using the set

1. **Crop, never letterbox.** The venue photos run at 16:9 banner, 56 px square and 48 px square. All six keep the net and markings near centre, so a centre square crop holds.
2. **Never recolour, redraw or regenerate.** Including "just one" of the four gift shots — they sit in a 2-column grid where any mismatch is instantly visible.
3. **The 3D objects keep their transparent ground.** No plate, no circle, no card behind them. They sit directly on the page wash or on a card.
4. **One success mark per screen.** IMG17 *replaces* the Lucide glass-circle check on S14, S17 and S30. It does not sit beside it.
5. **The tier badge appears at 24 px (chip) and 64 px (S31 hero) only.** Not on S07, not on booking cards, not on S19.
6. **Distant figures stay.** IMG02, IMG04 and IMG08 contain people at a distance. A venue with people reads as open. No face is identifiable at any size used.

---

## Held and declined

| File | Status | Reason |
|---|---|---|
| `_held/_held-rosette-badge.png` | **held** | A fourth badge; there are three tiers. Kept rather than forced onto a screen. Available if a fourth tier is ever added. |
| `_held/_held-points-discs.png` | **held** | Three flat discs rising. On-brief and well made, but it does the same job as IMG22 on the same screen (S33 empty), and IMG22 belongs to the 3D set every other empty state uses. Kept in case that register is revisited. |
| trophy + coins + gift box | **declined, not imported** | `08-moodboard.md` names this register explicitly: *"take the idea that progress is worth celebrating, leave the 3D characters, the podium and the coins."* This object has both the coins and the podium. |

---

## If the client later replaces the photographs

Venue photos (**Q-C2**) and gift images (**Q-C1**) are client content in a real deployment. When they arrive, they replace IMG01–IMG12 **at the same file names and the same aspect ratios**, and the two rules that matter are: the venue shots must survive a centre square crop, and the four gift shots must share one background and one light direction. The 3D objects are ours and do not change.
