# 05-tokens/ — 3-tier W3C token files

1-primitive.json → raw values (colors, sizes, radius, font…)
2-semantic.json  → roles, Light/Dark modes (points to primitive)
3-component.json → a mandatory baseline of common component values (points to semantic)

Rules:

- Never skip a level. Changing the brand starts at Primitive and flows through aliases.
- Step 10 rewrites project-specific Primitive and Semantic values. It updates the baseline Component aliases but never deletes the mandatory generic component groups.
- Step 13 re-syncs Primitive and Semantic from the final UI. Components do not exist in Figma yet, so do not invent project-specific Component tokens here.
- Step 15 builds the real components with Figma MCP. For every component and variant, inspect the properties, create any missing variables in the Figma `Component` collection, alias them to Semantic variables, bind them, and mirror the additions back into `3-component.json`.
- A Component token must represent a reusable component decision. Do not create one-off screen-content tokens.

Also here:

- `token-mapping.md` — every proof / final-UI CSS variable → the token it became (Step 10, updated in Step 13). Lets anyone trace a value from the HTML to Figma.
