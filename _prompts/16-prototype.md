# Step 16 · Prototype

> **Phase 8 · Delivery** — role: Product designer (Figma MCP)
> **Output:** a clickable Figma prototype
> **Base prompt** — never edited for a project. Shared rules and the end-of-turn block: `_prompts/README.md`.

---

## Reads

- `03-research/06-user-flows.md` (every FL## with its steps and branches) · `03-research/05-features-sitemap.md` (S## list)
- The Figma file — link in `_progress.md`

## Stop if

- Gate 7 is not `APPROVED` in `_progress.md`.

## Do

1. **Top-level frames.** Prototype targets must be top-level frames. Move every screen out of sections / groups to the top level of its page (keep the flow arrangement by position). Say how many were moved. Work on `Screens` only — `Screens Backup` gets no interactions.
2. **Map frames to S##.** Table: frame name → S##. Any S## with no frame, or frame with no S##, is listed.
3. **Wire each flow** in `06-user-flows.md`, one at a time:
   - Happy path first, then every branch: error, cancel, empty, confirm.
   - Interactions on the actual tap target (the button instance, the row), not the whole screen.
   - Back actions return to where the user came from.
   - Sheets / dialogs as overlays where the UI shows them that way.
   - Tab bar items go to their top-level screens on every screen that has the tab bar.
   - Loading frames auto-advance (after delay, ~1.2 s) to the loaded frame; sheets slide in from the bottom; pushes slide from the side; the rest dissolve.
4. **Starting point per flow**, named after the flow (`FL01 · Sign up`).
   - **Each starting point needs its own frame** — Figma refuses two starting points on the same frame. When two flows begin on the same screen (e.g. both start on Home), start the second one on its first *distinct* screen (or a state frame of it) and say which in the report.
   - **State frames no flow reaches** (loading, empty, error, offline…) get their own starting point named `FL## · S## <state>`, so a reviewer can open every frame. Ask the user once whether to add these; default yes.
5. **Check the links by script, then click through.**
   - **Graph check (measured):** read every reaction in the file and walk each flow's happy path from its starting point. Report: happy paths reachable `<n>/<n>`, dead ends (a frame with no way out that is not a final screen) `0`, unreachable frames (no incoming link and no starting point) `0`.
   - **Present-mode click-through:** MCP cannot click through Present mode. The user spot-checks a few flows; list this as a user task in the report — never tick it yourself.
   - List dead ends, wrong targets, missing back.
6. **Anything uncertain** (a branch the flows don't define, a tap target with no destination) → list it for the user; do not invent a destination.

## Output — in the turn report

```
Frames moved to top level: <n>
Flows wired: <n>/<n>   Interactions: <n>
Starting points: <n> flows + <n> state/branch = <n> (each on its own frame)
Graph check: happy paths <n>/<n> · dead ends <n> · unreachable frames <n>
Present-mode click-through: user to spot-check
Dead ends found → fixed: <list>   Still open: <list>
Uncertain (needs your decision): <list>
```

## Check before handing back

- [ ] Every flow runs start to finish.
- [ ] Every flow has a starting point, each on a different frame.
- [ ] Graph check run by script: 0 dead ends, 0 unreachable frames (or each one listed).
- [ ] Every branch in Step 06 is wired or listed as open.

## End of turn

End-of-turn block (Next: Step 17) → stop.
