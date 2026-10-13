# Token mapping — proof HTML → Semantic → Primitive

Generated in **Step 10**. Every `:root` variable in `04-proof-ui/proof-5-screens.html` and the token it became.
Step 13 updates this file after the final UI.

A `—` in the Semantic column means the variable is a raw ramp step with no role of its own: it lives in Primitive and is reached through a Semantic role elsewhere.

| proof `:root` | value in the proof | Semantic | Primitive |
|---|---|---|---|
| `--c-primary-50` | `#EFF6FF` | — | `color.navy.50` |
| `--c-primary-100` | `#E5EDF8` | — | `color.navy.100` |
| `--c-primary-200` | `#C7DBF6` | — | `color.navy.200` |
| `--c-primary-300` | `#AEC3E1` | — | `color.navy.300` |
| `--c-primary-400` | `#94AAC8` | — | `color.navy.400` |
| `--c-primary-500` | `#7A90AF` | — | `color.navy.500` |
| `--c-primary-600` | `#627895` | — | `color.navy.600` |
| `--c-primary-700` | `#4A5D78` | — | `color.navy.700` |
| `--c-primary-800` | `#33435A` | — | `color.navy.800` |
| `--c-primary-900` | `#0C1E36` | — | `color.navy.900` |
| `--c-secondary-100` | `#DBF0FB` | — | `color.sky.100` |
| `--c-secondary-700` | `#2E6F8E` | — | `color.sky.700` |
| `--c-secondary-800` | `#104861` | — | `color.sky.800` |
| `--c-accent-50` | `#EEFDCD` | — | `color.lime.50` |
| `--c-accent-100` | `#E4F4C1` | — | `color.lime.100` |
| `--c-accent-200` | `#C6F024` | — | `color.lime.200` |
| `--c-accent-300` | `#AED321` | — | `color.lime.300` |
| `--c-accent-400` | `#94BA00` | — | `color.lime.400` |
| `--c-accent-500` | `#7B9F00` | — | `color.lime.500` |
| `--c-accent-600` | `#648500` | — | `color.lime.600` |
| `--c-accent-700` | `#4C6900` | — | `color.lime.700` |
| `--c-accent-800` | `#354D00` | — | `color.lime.800` |
| `--c-neutral-0` | `#FEFFFF` | — | `color.neutral.0` |
| `--c-neutral-50` | `#F4F5F7` | — | `color.neutral.50` |
| `--c-neutral-100` | `#EBECED` | — | `color.neutral.100` |
| `--c-neutral-200` | `#D7D9DC` | — | `color.neutral.200` |
| `--c-neutral-300` | `#BFC2C4` | — | `color.neutral.300` |
| `--c-neutral-400` | `#A6A8AB` | — | `color.neutral.400` |
| `--c-neutral-500` | `#8C8F91` | — | `color.neutral.500` |
| `--c-neutral-600` | `#747679` | — | `color.neutral.600` |
| `--c-neutral-700` | `#5A5C5E` | — | `color.neutral.700` |
| `--c-neutral-800` | `#404244` | — | `color.neutral.800` |
| `--c-neutral-900` | `#1A2733` | — | `color.neutral.900` |
| `--c-success` | `#157A46` | `color.status.success-fg` | `color.positive.500` |
| `--c-success-tint` | `#E6F3EC` | `color.status.success-bg` | `color.positive.50` |
| `--c-warning` | `#8A5200` | `color.status.warning-fg` | `color.warning.500` |
| `--c-warning-tint` | `#FBF1E3` | `color.status.warning-bg` | `color.warning.50` |
| `--c-error` | `#B3332A` | `color.status.error-fg` | `color.negative.500` |
| `--c-wash-1` | `#F9FDF1` | — | `color.wash.1` |
| `--c-wash-2` | `#F2F7F4` | `color.bg.app-fallback` | `color.wash.2` |
| `--c-wash-3` | `#EDF2F8` | — | `color.wash.3` |
| `--gradient-page` | `radial-gradient(90% 44% at 86% -4%, rgba(…` | `color.bg.app` | `gradient.page` |
| `--gradient-hero-accent` | `linear-gradient(142deg,#DCFB69 0%,#C6F024…` | `color.bg.hero-accent` | `gradient.hero-accent` |
| `--gradient-hero-ink` | `linear-gradient(150deg,#1B3758 0%,#0C1E36…` | `color.bg.hero-ink` | `gradient.hero-ink` |
| `--gradient-glow-accent` | `radial-gradient(118% 86% at 86% 2%, rgba(…` | `color.bg.hero-glow-accent` | `gradient.glow-accent` |
| `--gradient-glow-ink` | `radial-gradient(120% 88% at 84% 4%, rgba(…` | `color.bg.hero-glow-ink` | `gradient.glow-ink` |
| `--gradient-card` | `linear-gradient(170deg, rgba(254,255,255,…` | `color.bg.surface-card` | `gradient.card` |
| `--gradient-tile-ink` | `linear-gradient(150deg,#1B3758 0%,#0C1E36…` | `color.bg.tile-ink` | `gradient.tile-ink` |
| `--gradient-tile-sky` | `linear-gradient(150deg,#2E6F8E 0%,#104861…` | `color.bg.tile-sky` | `gradient.tile-sky` |
| `--stack-edge-1` | `var(--c-accent-300)` | PRESENTATION-ONLY | alias of --c-accent-300; the stacked hero edge is a component decision, built in Step 15 |
| `--stack-edge-2` | `var(--c-primary-300)` | PRESENTATION-ONLY | alias of --c-primary-300; same |
| `--glass-bar-bg` | `rgba(252,254,250,.72)` | `color.bg.glass-bar` | `color.transparent.white-72` |
| `--glass-bar-border` | `rgba(12,30,54,.08)` | `color.border.glass` | `color.transparent.ink-08` |
| `--glass-blur` | `saturate(185%) blur(22px)` | UNMAPPED | backdrop-filter has no Figma Variable equivalent; applied as a background-blur effect in Step 15 |
| `--glass-circle-light` | `rgba(254,255,255,.16)` | `color.bg.glass-well` | `color.transparent.white-16` |
| `--glass-circle-light-border` | `rgba(254,255,255,.22)` | `color.border.glass-well` | `color.transparent.white-22` |
| `--glass-circle-dark` | `rgba(254,255,255,.46)` | `color.bg.glass-well-light` | `color.transparent.white-46` |
| `--glass-circle-dark-border` | `rgba(254,255,255,.60)` | `color.border.glass-well` | `color.transparent.white-60` |
| `--glass-inset-ink` | `rgba(254,255,255,.13)` | `color.bg.glass-inset-ink` | `color.transparent.white-13` |
| `--glass-inset-ink-border` | `rgba(254,255,255,.18)` | `color.border.line-on-navy` | `color.transparent.white-18` |
| `--glass-inset-accent` | `rgba(12,30,54,.80)` | `color.bg.glass-inset-lime` | `color.transparent.ink-80` |
| `--color-text-on-glass` | `var(--c-neutral-800)` | `color.content.on-glass` | `color.neutral.800` |
| `--color-text-primary` | `var(--c-neutral-900)` | `color.content.primary` | `color.neutral.900` |
| `--color-text-secondary` | `var(--c-neutral-700)` | `color.content.secondary` | `color.neutral.700` |
| `--color-text-unavailable` | `var(--c-neutral-700)` | `color.content.unavailable` | `color.neutral.700` |
| `--color-text-inverse` | `var(--c-neutral-0)` | `color.content.on-navy` | `color.neutral.0` |
| `--color-text-inverse-muted` | `var(--c-primary-300)` | `color.content.on-navy-muted` | `color.navy.300` |
| `--color-text-on-accent` | `var(--c-neutral-900)` | `color.content.on-lime` | `color.neutral.900` |
| `--color-text-on-accent-muted` | `var(--c-accent-800)` | `color.content.on-lime-sub` | `color.lime.800` |
| `--color-surface-recessed` | `rgba(12,30,54,.045)` | `color.bg.recessed` | `color.transparent.ink-045` |
| `--color-surface-ghost` | `rgba(12,30,54,.05)` | `color.bg.ghost` | `color.transparent.ink-05` |
| `--color-surface-ghost-strong` | `rgba(12,30,54,.06)` | `color.bg.ghost-strong` | `color.transparent.ink-06` |
| `--color-track-empty` | `rgba(254,255,255,.22)` | `color.bg.track-empty` | `color.transparent.white-22` |
| `--color-border-divider` | `rgba(12,30,54,.08)` | `color.border.divider` | `color.transparent.ink-08` |
| `--color-border-control` | `var(--c-neutral-600)` | `color.border.line` | `color.neutral.600` |
| `--color-border-selected` | `var(--c-primary-900)` | `color.border.selected` | `color.navy.900` |
| `--color-action-primary-bg` | `var(--c-primary-900)` | `color.action.primary-bg` | `gradient.hero-ink` |
| `--color-action-primary-fg` | `var(--c-neutral-0)` | `color.action.primary-fg` | `color.neutral.0` |
| `--color-accent-surface` | `var(--c-accent-200)` | `color.bg.lime` | `color.lime.200` |
| `--color-accent-surface-soft` | `var(--c-accent-50)` | `color.bg.lime-subtle` | `color.lime.50` |
| `--color-accent-text` | `var(--c-accent-800)` | `color.content.accent` | `color.lime.800` |
| `--color-status-success-fg` | `var(--c-success)` | `color.status.success-fg` | `color.positive.500` |
| `--color-status-success-bg` | `var(--c-success-tint)` | `color.status.success-bg` | `color.positive.50` |
| `--color-status-warning-fg` | `var(--c-warning)` | `color.status.warning-fg` | `color.warning.500` |
| `--color-status-warning-bg` | `var(--c-warning-tint)` | `color.status.warning-bg` | `color.warning.50` |
| `--tab-active-bg` | `var(--gradient-hero-ink)` | `color.action.primary-bg` | `gradient.hero-ink` |
| `--tab-active-stroke` | `var(--c-accent-200)` | `color.icon.accent-on-ink` | `color.lime.200` |
| `--tab-active-label` | `var(--color-text-primary)` | `color.content.primary` | `color.neutral.900` |
| `--space-1` | `2px` | — | `space.2` |
| `--space-2` | `4px` | — | `space.4` |
| `--space-3` | `8px` | — | `space.8` |
| `--space-4` | `12px` | — | `space.12` |
| `--space-5` | `16px` | — | `space.16` |
| `--space-6` | `20px` | — | `space.20` |
| `--space-7` | `24px` | — | `space.24` |
| `--space-8` | `32px` | — | `space.32` |
| `--space-9` | `40px` | — | `space.40` |
| `--space-gutter` | `18px` | `spacing.layout.screen-edge` | `space.18` |
| `--gap-attached` | `6px` | `spacing.rhythm.attached` | `space.6` |
| `--gap-peer` | `12px` | `spacing.rhythm.peer` | `space.12` |
| `--gap-group` | `20px` | `spacing.rhythm.group` | `space.20` |
| `--gap-section` | `32px` | `spacing.rhythm.section` | `space.32` |
| `--radius-xs` | `8px` | `radius.cell` | `radius.8` |
| `--radius-sm` | `12px` | `radius.chip-box` | `radius.12` |
| `--radius-md` | `16px` | `radius.input` | `radius.16` |
| `--radius-lg` | `22px` | `radius.card` | `radius.22` |
| `--radius-xl` | `28px` | `radius.hero` | `radius.28` |
| `--radius-2xl` | `34px` | `radius.screen` | `radius.34` |
| `--radius-full` | `999px` | `radius.pill` | `radius.full` |
| `--font-family` | `Inter,-apple-system,system-ui,sans-serif` | `typography.body.font-family` | `font.family.sans` |
| `--font-size-micro` | `11px` | `typography.micro.font-size` | `font.size.11` |
| `--font-size-caption` | `12px` | `typography.caption.font-size` | `font.size.12` |
| `--font-size-label` | `13px` | `typography.label.font-size` | `font.size.13` |
| `--font-size-body` | `15px` | `typography.body.font-size` | `font.size.15` |
| `--font-size-body-lg` | `17px` | `typography.body-lg.font-size` | `font.size.17` |
| `--font-size-title` | `20px` | `typography.title.font-size` | `font.size.20` |
| `--font-size-heading` | `24px` | `typography.heading.font-size` | `font.size.24` |
| `--font-size-display` | `32px` | `typography.display.font-size` | `font.size.32` |
| `--font-size-hero` | `44px` | `typography.hero.font-size` | `font.size.44` |
| `--font-size-amount` | `52px` | `typography.amount.font-size` | `font.size.52` |
| `--font-weight-regular` | `400` | — | `font.weight.regular` |
| `--font-weight-medium` | `500` | — | `font.weight.medium` |
| `--font-weight-semibold` | `600` | — | `font.weight.semibold` |
| `--font-weight-bold` | `700` | — | `font.weight.bold` |
| `--line-height-tight` | `1.08` | `typography.hero.line-height` | `font.lineHeight.tight` |
| `--line-height-snug` | `1.28` | `typography.heading.line-height` | `font.lineHeight.snug` |
| `--line-height-normal` | `1.45` | `typography.body.line-height` | `font.lineHeight.normal` |
| `--letter-spacing-caps` | `.07em` | `typography.microcaps.letter-spacing` | `font.letterSpacing.wide` |
| `--letter-spacing-tight` | `-.02em` | `typography.heading.letter-spacing` | `font.letterSpacing.tight` |
| `--shadow-card` | `0 2px 10px rgba(12,30,54,.05)` | `elevation.card` | `shadow.offset / blur / color` |
| `--shadow-hero` | `0 12px 30px rgba(12,30,54,.14)` | `elevation.hero` | `shadow.offset / blur / color` |
| `--shadow-hero-accent` | `0 12px 30px rgba(140,180,10,.26)` | `elevation.hero-accent` | `shadow.offset / blur / color` |
| `--shadow-bar` | `0 10px 34px rgba(12,30,54,.14)` | `elevation.bar` | `shadow.offset / blur / color` |
| `--icon-sm` | `16px` | `sizing.icon.sm` | `sizing.16` |
| `--icon-md` | `20px` | `sizing.icon.md` | `sizing.20` |
| `--icon-lg` | `24px` | `sizing.icon.lg` | `sizing.24` |
| `--icon-tab` | `22px` | `sizing.icon.tab` | `sizing.22` |
| `--size-touch` | `52px` | `sizing.control.button` | `sizing.52` |
| `--size-frame-w` | `390px` | `sizing.frame.width` | `sizing.390` |
| `--size-frame-h` | `844px` | `sizing.frame.height` | `sizing.844` |
| `--size-bar-h` | `66px` | `sizing.control.tab-bar` | `sizing.66` |
| `--size-bar-inset` | `14px` | `spacing.layout.bar-inset` | `sizing.14` |
| `--size-statusbar-h` | `47px` | `sizing.control.statusbar` | `sizing.47` |
| `--size-notch-w` | `162px` | `sizing.frame.notch-w` | `sizing.162` |
| `--size-notch-h` | `31px` | `sizing.frame.notch-h` | `sizing.32` |
| `--color-device-notch` | `#000000` | `color.bg.device-notch` | `color.static.black` |
| `--font-size-statusbar` | `15px` | `typography.statusbar.font-size` | `font.size.15` |
| `--size-fab` | `56px` | REMOVED | the floating + button was dropped at Gate 4, option A |
| `--border-width-hairline` | `1px` | `border.width.default` | `borderWidth.1` |
| `--border-width-control` | `1.5px` | `border.width.ring` | `borderWidth.1-5` |
| `--border-width-selected` | `2px` | `border.width.strong` | `borderWidth.2` |
| `--progress-to-smash` | `31%` | UNMAPPED | screen content (one member progress figure), not a design decision |
| `--page-bg` | `#0E1116` | OUT OF PRODUCT | the dark board the proof frames sit on |
| `--page-fg` | `#E8EAED` | OUT OF PRODUCT | same |
| `--page-muted` | `#9AA0A6` | OUT OF PRODUCT | same |
| `--page-faint` | `#6E757C` | OUT OF PRODUCT | same |

## Summary

- Proof variables: **156**
- Mapped to a token: **147**
- Presentation-only / unmapped / out of product: **9** (each with its reason above)
- Missed by mistake: **0** ✅

## Limits carried into Step 14

| Thing | Limit | What Step 14 does |
|---|---|---|
| The 8 gradients | A Figma Variable cannot hold a gradient | Imported as STRING variables (the exact CSS, so nothing is lost). **Step 11 verdict:** no safe automatic conversion — `gradient.page` alone stacks 2 radials + 1 linear with offset centres — so the 8 **Paint Styles are built by hand in Step 14** |
| `--glass-blur` | No variable equivalent for `backdrop-filter` | Applied as a Figma background-blur effect on the two bar components in Step 15 |
| Line heights | Stored as unitless multipliers (1.08 / 1.28 / 1.45) | Written as a **PERCENT literal** (108 / 128 / 145%) by the Foundation plugin. It cannot be *bound*: Figma reads a bound FLOAT in the field's current unit, so 1.08 would mean 1.08%. Re-run Generate after changing a lineHeight token |
| Letter spacing | Stored as per-mille numbers (−2 / 0 / 7) | Maps **1:1 to Figma PERCENT** (−2% = −.02em, 7% = .07em), so it *is* bound. The plugin sets the unit to PERCENT before binding |
| The one-lime rule and the 4-step rhythm | Usage rules, not values | Stay in `03-research/08-moodboard.md`; the tokens only supply the values |
---

## Step 11 amendment (12/10)

Checking the two Figma plugins against this token set surfaced one wrong value and one
naming limit:

| Item | Before | After | Why |
|---|---|---|---|
| `primitive.font.style.semibold` | `"SemiBold"` | `"Semi Bold"` | Figma binds `fontStyle` to a STRING that must match a real style name. Inter calls its 600 weight **"Semi Bold"** (with a space); `"SemiBold"` would have rendered as a missing font on 5 of the 14 text styles. |
| `font.weight.*` (FLOAT 400–700) | — | kept, unused for binding | Figma text styles have no `fontWeight` field — only `fontStyle` (STRING). The numeric weights stay for the CSS/handoff side; `font.style.*` is what Figma binds. |

No other token value changed. 150 required token lookups by the two plugins were checked
against these files: **0 missing**.
