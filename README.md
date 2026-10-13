# Pika — court booking app

Design project for **Pika**, a 6-venue Pickleball chain in Ho Chi Minh City. Customers see real court availability, pick their own court, book single sessions or weekly series, buy prepaid hour packages, earn points towards three tiers, and redeem points for gifts. **Payment happens at the counter — there is no payment surface in the app.**

iOS first · 390 × 844 · light mode · English · customer app only.

---

## Where this stands

Run through an 8-phase / 17-step design kit. **Steps 01–12 are done; Gates 1–5 are approved.**

| Phase | Steps | State |
|---|---|---|
| 1–3 · Research & structure | 01–06 | done |
| 4 · Visual direction | 07–09 | done |
| 5 · Design system | 10–11 | done |
| 6 · Final UI | 12–13 | 12 done, ready for Claude Design |
| 7 · Figma | 14–15 | not started |
| 8 · Delivery | 16–17 | not started |

`_progress.md` is the authoritative record — read it first. `CLAUDE.md` is the operating contract for anyone (or any agent) continuing the work.

---

## The folders

| Folder | What is in it |
|---|---|
| `01-brief/` | The client's original brief |
| `02-assets/` | Logo, Inter (18 TTF, SIL OFL), Lucide (1,996 SVG, ISC), moodboard references, and the 24 project images `IMG01`–`IMG24` |
| `03-research/` | Steps 01–08: intake, brief analysis, market, personas, features & sitemap, user flows, palette, moodboard. **`08-moodboard.md` is the style contract** |
| `04-proof-ui/` | `proof-5-screens.html` — S07 · S12 · S14 · S19 · S27 at 390 × 844. **This is the visual contract** |
| `05-tokens/` | 550 W3C design tokens in three tiers (Primitive 178 → Semantic 242 → Component 130), plus `token-mapping.md` tracing every one back to the proof |
| `06-figma-plugins/` | Two Figma plugins: `pika-importoken` builds the Variables collections, `pika-foundation-style` builds Text Styles, Effect Styles and the Foundation board |
| `07-claude-design-input/` | `master-spec.md` — all 46 screens with layout, content, actions and states — plus the image inventory and the Claude Design prompt |
| `08-final-ui/` | The full UI build (pending) |
| `09-handoff/` | Developer handoff (pending) |

---

## The rules that shape every screen

Three decisions came out of a long revision loop. Each one has a reason, and changing one changes the look of the whole product.

1. **One lime surface per screen.** `#C6F024` may fill exactly one element. Where that slot is spent, an accent becomes type (`lime-800`) or a border — raw lime is 1.32:1 on white and is never used as type. This is why the active tab is navy, not lime.
2. **A four-step spacing rhythm**, not one uniform gap: attached 6 / peer 12 / group 20 / section 32. Every gap answers *what is the relationship between these two things?* A filter is always `section` from its results. Uniform spacing is what made the first attempt unreadable.
3. **Glass only on what overlays scrolling content** — the floating tab bar and the sticky booking bar. Glass on a static card is decoration pretending to be structure.

Every contrast figure in this project was computed by script, not judged by eye. Eight failures found that way became real design changes — the full list is in `_progress.md` under Step 09.

---

## Using the Figma plugins

Figma → Plugins → Development → Import plugin from manifest → pick each `manifest.json`.

Run order matters:

1. **Import Tokens** — load `05-tokens/1-primitive.json`, `2-semantic.json`, `3-component.json` in that order. An alias only resolves once its target collection exists.
2. **Foundation & Styles → Effect tab** — builds the 4 Elevation styles.
3. **Foundation & Styles → Text Style tab** — builds the 14 text styles.
4. **Foundation & Styles → Foundation tab** — draws the board, last, because it reads the Effect styles made in step 2.

The 8 gradients import as STRING variables holding their exact CSS. Figma Variables cannot hold a gradient, and no safe automatic conversion exists — `gradient.page` alone stacks two radials and a linear with offset centres — so the Paint Styles are built by hand.

---

## Still open

| | |
|---|---|
| **Q-BR1** | No vector logo. Consequences: no transparency, no clean scaling, baked-in white padding, and the app icon cannot be made properly |
| **Q-F10** | What happens to unused package hours at expiry. Default in force: lost, with a 7-day reminder |
| **Q-F11** | Whether the counter needs a scannable code for a booking. Default: no, gift redemption only |
| **Q-C1 / Q-C2 / Q-C4** | Gift images, venue photos, and whether all six venues price alike — all client content |

Venue and gift images in `02-assets/images/` are stand-ins at the right aspect ratios; client content replaces them at the same file names.
