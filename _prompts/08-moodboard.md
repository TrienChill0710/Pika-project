# Step 08 · Moodboard & screen references

> **Phase 4 · Visual direction** — role: Senior UI designer
> **Output:** `03-research/08-moodboard.md` · references in `02-assets/moodboard/screens/`
> **This step has a wait in the middle.** Part 1 → stop for the user → Part 2.
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `02-assets/moodboard/` (top-level style images) · `02-assets/icons/` · `02-assets/fonts/`
- `03-research/05-features-sitemap.md` · `06-user-flows.md` · `07-palette.md` (LOCKED)

## Stop if

- No palette is LOCKED in `07-palette.md`.

## Part 1 — style in words + search keywords

1. **Describe the style** of the moodboard images in words, one line each:
   colour use (how much of the primary, where) · typography (weights, sizes, contrast) · corner radius · density & spacing · shadows / depth · imagery (photo, illustration, 3D) · iconography · overall feel in 3 words.
   Where the images disagree, say so and propose which to follow.
2. **Pick the key screens** — at least the 5 you will propose for Step 09, plus any screen with an unusual layout. Use S## codes from the sitemap.
3. **Search keyword table**:

   | S## · Screen | What it must show | Keywords (3, short) | Where to search |
   |---|---|---|---|

   Keywords must be **short: 2–3 words each, 3 per screen** — long phrases return few or no results on Mobbin, Dribbble and Pinterest. Each keyword is either **domain + screen** (`car rental`, `booking app home`) or a **UI pattern** (`date picker`, `QR ticket`, `pricing plans`). No style words (colour, "minimal", "dark") — style comes from the palette, the reference only gives layout. The user searches them **one at a time**; tip: on Mobbin, combine a short keyword with the screen-type filter (Home, Checkout, Rewards…).
   Good: `court booking` · `time slot picker` · `QR ticket`. Too long: `minimal dark car app home dashboard`.
   Where to search: Mobbin (category + screen pattern filter), Dribbble, Behance, Pinterest, Page Flows.
4. **Tell the user exactly what to do:** save 1–3 references per screen into `02-assets/moodboard/screens/S##-name/` (e.g. `S05-car-detail/ref-1.png`), then say "done".

**STOP here and wait.**

## Part 2 — read the references and lock

5. **Check every folder** in `screens/`: which key screens have references, which are missing. Missing → ask once; the user may continue without.
6. **Per screen, write the layout pattern** from its references: sections top to bottom, main components, what is sticky, where the primary action is. Note anything in a reference that clashes with the locked palette or the style — follow the style, take only structure and content from the reference.
7. **Lock icons:** the client's SVG set, or the ONE library in `icon-library.txt`. State style (outline / filled), stroke width, default size. One style for the whole product.
8. **Lock the font:** family, weights available, fallback. Confirm the licence allows commercial use.
9. **Mark every asset** `static` (ships with the app: logo, icons, illustrations) or `runtime` (comes from data: product photos, avatars).

## Output — `03-research/08-moodboard.md`

```
# 08 · Moodboard
## Style in words
## Key screens & search keywords   (table)
## Screen references               (per S##: files found · layout pattern · what to take / ignore)
## Icons — LOCKED
## Font — LOCKED
## Assets — static / runtime
```

## Check before handing back

- [ ] Style described in words a designer could follow without the images.
- [ ] Every key screen has 3 short keywords (2–3 words each), and references or a note that it has none.
- [ ] Icon source and font locked, licence checked.

## End of turn

Part 1: keyword table + instructions → stop. Part 2: end-of-turn block (Next: Step 09) → stop.
