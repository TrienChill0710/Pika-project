# Step 12 · Master spec → Claude Design → final UI

> **Phase 6 · Final UI** — role: Product designer (Cowork writes, Claude Design builds)
> **Output:** `07-claude-design-input/master-spec.md` · `07-claude-design-input/image-prompts.md` · `07-claude-design-input/claude-design-prompt.md` · the user saves generated images in `02-assets/images/`, then exports `08-final-ui/final-ui.html`
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- Everything in `03-research/` · `04-proof-ui/proof-5-screens.html` · `05-tokens/` · `02-assets/` (including `02-assets/images/` once the user has generated them)

## Stop if

- Gate 5 is not `APPROVED` in `_progress.md`.

## Part 1 — `07-claude-design-input/master-spec.md` (the single source for Claude Design)

1. **Product summary** — 5 lines: what, for whom, platform, frame, modes, UI language.
2. **Design foundation** — locked palette (roles + hex), font and type scale, spacing, radius, shadows, icon source + style, logo usage (which file on light surfaces, which on dark). Point to the token names.
3. **Every screen**, grouped by sitemap branch, in S## order. For each:
   ```
   S## · Name            parent · flows using it (FL##)
   Purpose
   Layout                top → bottom sections (from the Step 08 reference pattern)
   Content               real sample content for each section
   Actions               every tap target → where it goes (S## / state)
   States                default · loading · empty · error · success · disabled — each described, or "n/a — why"
   Notes                 anything special (sticky, scroll, sheet, keyboard)
   ```
4. **Shared components** — the parts that repeat (button, input, list row, card, tab bar…), with their variants and states in words. This is what Step 15 later builds in Figma.
5. **Coverage** — every S## from Step 05 and every branch from Step 06 appears. List any that do not, with why. **Every screen has a way in:** at least one tap target on another screen (in its Actions) leads to it — a screen that exists only in the sitemap is listed as missing an entry.
6. **Image slots** — every place a screen shows a photo or product image (not icons, not the logo). One row each:

   | IMG## · name | Screens (S##) | What it shows | Aspect ratio · export size | File in `02-assets/images/` |
   |---|---|---|---|---|

   Codes `IMG01, IMG02…` are permanent, like `S##`. Reuse one image across screens where the content is the same (e.g. one venue photo for card, detail and banner at different crops).

## Part 1b — `07-claude-design-input/image-prompts.md` (images first, then Claude Design)

One ready-to-paste prompt per image slot, for an image generator (e.g. ChatGPT image generation). Each prompt states:
- **Subject and composition** — what is in the frame, camera angle, where empty space must stay for text or overlays in the UI.
- **Aspect ratio and size** — matching the slot (e.g. 16:9, 1600 × 900).
- **Look** — the approved Gate 4 style: lighting, mood, premium / glossy finish, and the LOCKED palette as colour direction (name the hex values).
- **Series consistency** — one shared style line repeated in every prompt, so all images look like one set.
- **Exclusions** — no text, no logos or brand marks, no watermarks, no real people's faces unless the brief needs them.
- **File name** to save: `02-assets/images/IMG##-name.png`.

Then tell the user: generate each image → save it with that file name → say **"images done"**. **Stop and wait.** If the user chooses to skip images, the slots stay labelled placeholders at the right size and the step continues.

## Part 2 — `07-claude-design-input/claude-design-prompt.md`

The prompt the user pastes into Claude Design. It must say:
- Build **every screen and state** in `master-spec.md`, one frame per screen at the locked size, labelled `S## · Name`, grouped by flow.
- **Match the proof screens exactly** — same look, spacing, depth; they are attached.
- Use the tokens as CSS variables in `:root` (names from `05-tokens/`); semantic class names; **no inline styles**; no hex outside `:root`.
- Use the attached logo as-is, only the locked icon source, only the locked font. Real content, no lorem ipsum.
- Use the attached images from `02-assets/images/` in their `IMG##` slots (cropped to the slot, never redrawn); any slot without a file stays a labelled placeholder at the right size.
- **No lazy-loaded images:** never use `loading="lazy"`; every image must load as soon as the page opens. (A long page with lazy images looks complete in a browser, but a one-shot capture such as html.to.design in Step 14 imports the lower screens without their images.)
- Mark repeated parts with the same class every time so they can become components.
- **Keep presentation out of the screens:** a device mockup, phone-frame shadow or canvas background goes on an outer wrapper, never inside the `S##` screen frame. Gradients use token colours; avoid fully transparent gradient stops. (These come into Figma in Step 14 as values with no token.)
- Export as **one HTML file**.
- Ask questions before building if anything in the spec is unclear.
Also list the files the user must attach: `master-spec.md`, `proof-5-screens.html`, the logo (and the dark-surface logo if there is one), the token files, and every image in `02-assets/images/`. Images stay in `02-assets/images/` — never copy them into `07-claude-design-input/`.

## Part 3 — guide the user (then wait)

Only after the images are saved (or skipped): tell the user, step by step: open Claude Design → attach the files (including the images) → paste the prompt → answer its questions → build → review → export one HTML → save it as `08-final-ui/final-ui.html` → say "done". **Stop and wait.**

## Check before handing back

- [ ] Every screen and every state from Steps 05–06 is in the spec.
- [ ] Every screen has at least one entry tap target listed on another screen.
- [ ] Foundation in the spec matches `05-tokens/` exactly.
- [ ] The prompt demands the proof look, `:root` variables, no inline styles, one HTML file.
- [ ] Every image slot has an `IMG##` code, a size, one prompt in `image-prompts.md` and a target file name; the chat lists the prompts so the user can copy them.

## End of turn

End-of-turn block (Next: Step 13, after `final-ui.html` is saved) → stop.
