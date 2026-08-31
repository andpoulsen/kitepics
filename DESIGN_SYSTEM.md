# Kitepics Design System

This is a small CSS-first design system for the static Kitepics site. Svelte components provide the presentation structure, while the design tokens keep the existing nautical poster identity consistent across future edits.

## Principles

- Preserve the editorial, nautical poster character.
- Prefer existing tokens and component rules over new one-off values.
- Keep the site lightweight: Svelte and Vite build a static output for GitHub Pages.
- Keep map styling scoped to the `ChartBackground.svelte` SVG because it is specific to that illustration.

## Tokens

Tokens live in `src/site.css` under `:root`.

### Color

| Token | Use |
| --- | --- |
| `--color-paper` | Main page background |
| `--color-paper-light`, `--color-paper-mid`, `--color-paper-deep`, `--color-paper-soft` | Paper and map background layers |
| `--color-ink`, `--color-ink-deep` | Body and heading text |
| `--color-ink-soft`, `--color-ink-note` | Supporting and note text |
| `--color-panel`, `--color-panel-subtle` | Intro and pick card surfaces |
| `--color-border`, `--color-border-soft`, `--color-border-card` | Component borders |
| `--color-rank`, `--color-star` | Rank badges and rating stars |

Use the most specific semantic token available. Add a new token only when a value represents a distinct design role.

### Typography

- `--font-body` is used for reading text.
- `--font-display` is used for titles, labels, tags, and headings.
- `--font-smallcaps` is used for metadata and footer text.
- `--font-size-title-*` defines the responsive page title range.
- The remaining `--font-size-*` tokens cover body, caption, heading, note, and footer sizes.

### Spacing and shape

- `--space-xs` through `--space-footer` cover recurring gaps and padding.
- `--content-width` controls the page's maximum width.
- `--border-thin` and `--border-emphasis` define border weights.
- `--radius-small`, `--radius-medium`, and `--radius-large` define the site's restrained corner radius scale.
- `--breakpoint-mobile` documents the mobile layout threshold used by the media query.

## Components

| Component | Selector or markup | Guidance |
| --- | --- | --- |
| Page shell | `.page` | Centers content and controls the page width and outer spacing. |
| Header | `header`, `.chart-label`, `.subtitle`, `.position-line` | Uses display typography and the paper divider treatment. |
| Intro block | `.intro` | A centered italic summary on the panel surface. |
| Section title | `.section-title`, `.section-title span` | Uses small caps and horizontal rules. |
| Pick list | `.picks` | Maintains the vertical rhythm between selected photos. |
| Pick card | `src/components/PickCard.svelte`, `.pick`, `.pick.reverse`, `.pick.portrait` | Renders one data object with the two-column editorial layout and responsive stacking. |
| Image frame | `.pick-image`, `.pick-image a`, `.pick-image img` | Keeps images clickable, framed, and visually consistent. |
| Metadata | `.filename`, `.tag`, `.stars` | Uses small caps, restrained borders, and the star token. |
| Pick copy | `.pick-text`, `.pick-text h2`, `.pick-text p`, `.note` | Keeps heading, body, and editorial note hierarchy consistent. |
| Decorative compass | `.compass-wrap` | Provides a quiet closing ornament after the selection. |
| Footer | `footer` | Uses small caps, a top rule, and the footer color token. |

## Content model

Photo content lives in `src/data/picks.js`. Each pick owns its rank, image metadata, rating, tag, body paragraphs, editorial note, and optional layout flags. `PickCard.svelte` owns the repeated markup, so adding or removing a pick only requires changing the data array.

## Responsive behavior

The desktop layout uses two columns for pick cards. At `720px` and below, cards become a single column and reverse ordering is reset so every image and its copy follow the same reading order.

## Change checklist

1. Reuse a token before adding a raw color, size, border, or shadow value.
2. Apply component changes to the relevant existing selector.
3. Check both desktop and mobile layouts.
4. Confirm all ten images still load and remain clickable.
5. Run the local browser check and the post-merge GitHub Pages check described in `AGENTS.md`.
