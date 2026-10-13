# 06-figma-plugins/ — 2 Figma plugins (tools, not outputs)

- pika-importoken        → imports the 3 token files into Figma Variables (Step 14)
- pika-foundation-style  → creates Text Styles + Effect Styles + a Foundation board (Step 14)

`phongdesigns` is only the default starter-kit name. In **Step 01**, as soon as you confirm the echo-back, Claude derives a safe project slug (e.g. `pika`) and replaces this starter name everywhere in both plugins: folder names, manifest `name` and `id`, UI headings, plugin-data namespaces and generated Figma labels — names only, no logic. So from day one each project's plugins are distinct in Figma. The list above is renamed too.
In Step 11, Claude updates the settings to match the project tokens and re-checks the count is 0. Step 13 syncs them again. Apart from the Step 01 rename, do not edit them before Step 11.
Matching the UI to tokens is done with Figma MCP in Step 15 — no plugin needed.

Install in Figma: Plugins → Development → Import plugin from manifest → pick manifest.json.
