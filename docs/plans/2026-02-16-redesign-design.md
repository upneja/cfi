# CFI Redesign — "The Scorecard"

## Summary
Ground-up redesign of the Constitutional Fidelity Index dashboard. Institutional authority aesthetic, progressive disclosure UX, table-based scorecard as the core interaction.

## Tech Stack
- Next.js (App Router, static export)
- Tailwind CSS
- Framer Motion (page transitions, accordions)
- TypeScript
- Custom SVG for radar chart and score bars

## Visual System
- **Palette:** stone-50 bg, slate-900 nav/text, indigo-700 accent, semantic score colors
- **Typography:** Source Serif 4 (display), Inter (body), JetBrains Mono (data)
- **Spacing:** max-w-6xl (1152px), 64px section gaps, 24-32px card padding
- **Motion:** Fade+slide page transitions, height-animated accordions, 150ms hovers

## Pages
1. **Home** — Hero + admin summary strip + headline findings + methodology teaser
2. **Scorecard** — Filterable/sortable table of all 26 EOs with inline score bars
3. **Evaluation Detail** — Verdict panel, radar chart, heatmap, lens accordions, steelman, raw JSON
4. **Methodology** — Dimensions, lenses, pipeline reference
5. **Scholars** — Resources, governance, architecture
6. **Papers** — Whitepaper + policy brief downloads

## Key UX Decisions
- Table over cards for the scorecard (enables comparison)
- Progressive disclosure on detail page (verdict → dimensions → narratives → raw data)
- Administration summary strip on home (cross-admin comparison at a glance)
- Accordion lens narratives (compare 1-3 at a time, not all-or-nothing)
