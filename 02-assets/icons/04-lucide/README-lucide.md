# Lucide Icons — usage guide & compliant template reselling

## What's in this folder
- `svg/` — **1,995 Lucide icons** as SVG (v1.24.0), filename = canonical name (e.g. `house.svg`, `arrow-right.svg`).
- `lucide-sprite.svg` — a combined sprite, convenient for web embedding.
- `tags.json` — search keywords for each icon (search by meaning).
- `LICENSE` — **the original copyright, REQUIRED when packaging for sale.**

## License (plain-language summary)
Lucide uses the **ISC License**; some icons inherited from Feather use the **MIT License**. Both are "permissive" licenses — they **allow** you to:
- Use, modify, and combine icons in commercial products.
- Bundle the icons **inside** a template and sell it on a marketplace.
- Do this for free, without asking permission.

**The one and only condition (required):** the package for sale must **include the verbatim LICENSE file** (copyright + permission notice). Omitting it alone is a violation.

## Allowed / not allowed when selling a template

**Allowed:**
- Sell a template with Lucide icons built in (the icons are a *component* of the product).
- Recolor, resize, adjust strokes, and create variants from the icons.
- Package them as Figma components `Icon/<CanonicalName>`.

**Discouraged / not allowed:**
- **Do not** sell the Lucide icon set *standalone* as if it were your own product (selling "1995 Lucide icons" is reselling someone else's asset — against the spirit, even if the license technically permits copying).
- **Do not** credit yourself as author/owner of the icon set.
- **Do not** remove the `@license lucide-static ... ISC` line inside the SVG files.
- **Do not** mix Lucide with Material / Font Awesome / Phosphor in the same product (per your DS rule — keep a single icon system).

## What to do in the package for sale (checklist)
1. Create a `licenses/` folder (or `fonts-and-icons/licenses/`) in the package.
2. Copy this **`LICENSE`** file into it with a clear name: `LICENSE-lucide-icons.txt`.
3. In the **Start Here / Credits** document, add an attribution paragraph (see the included `CREDITS.txt`).
4. Do the same for fonts: include `LICENSE-plus-jakarta-sans.txt` + `LICENSE-inter.txt` (both SIL OFL 1.1).

## Notes per marketplace
Every platform (UI8, Envato, Creative Market, Figma Community, Gumroad) requires **declaring third-party assets + licenses** in the description or documentation. The safe approach: a single "Credits & Licenses" page listing Lucide (ISC), Feather (MIT), Plus Jakarta Sans (OFL), Inter (OFL) with source links. Still, re-read each platform's current terms before every publish.

## Using in Figma (matching your DS rule)
- Name components: `Icon/<CanonicalName>` — the exact canonical Lucide name (e.g. `Icon/house`, `Icon/arrow-right`).
- Missing a suitable icon → mark `ICON_MISSING`, create `Icon/Custom/<Name>` following the Lucide visual language (2px stroke, rounded), never taken from another icon system.

> I'm not a lawyer — this is practical guidance based on the ISC/MIT terms. For large deals or platform-specific terms, re-review the original license in the `LICENSE` file.
