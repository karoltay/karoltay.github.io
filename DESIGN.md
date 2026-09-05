# Design

## Source of truth
Status: Active. Date: 2026-09-05. Product surfaces: one-page Polish site at `/` and English equivalent at `/en/`. Evidence reviewed: `files_unpacked/PRD.md`, `files_unpacked/TECH_SPEC.md`, six supplied photographs and two supplied video links. No logo, speaker PDFs, testimonials, or established brand system were supplied.

## Brand
Expert, candid, senior, pragmatic and calm. Trust comes from operating-scale experience, named public events, clear mechanisms and restraint. Avoid generic AI imagery, neon cyberpunk, inflated claims, startup language and employer-specific information.

## Product goals
Let a CEO, CHRO or event organizer understand the speaker's point of view within two minutes and initiate an email. Provide public speaker materials once supplied. This is not a blog, training store, company brand or lead-gated funnel. Success signals are email clicks, PDF downloads and attributable QR/LinkedIn visits.

## Personas and jobs
Primary: CEO evaluating relevance and credibility on mobile. Secondary: CHRO and functional executives. Supporting: event organizer looking for topics and downloadable assets; compliance reviewer checking permissible claims.

## Information architecture
Persistent header with name, three anchors and language switcher. Hierarchy: thesis → five mechanisms → biography and operating-scale proof → speaking topics → event proof → materials → single contact close. Routes are `/` and `/en/`; both remain indexable and have hreflang links.

## Design principles
Lead with an argument, not a biography. Use editorial scale and whitespace to signal confidence. Make evidence scannable. Keep one dominant action. Use progressive enhancement so all content survives without JavaScript.

## Visual language
Deep ink backgrounds, warm paper surfaces, and restrained violet as the single accent. Georgia is used as a deploy-safe editorial serif until the final licensed/self-hosted font is chosen; Inter/system sans handles UI. Spacing is generous, corners are square, borders are thin, and elevation is rare. Motion is limited to soft scroll reveals. The formal color portrait anchors the hero; the black-and-white portrait supports the personal biography; the live-event image serves as the video poster.

## Components
Header, hero, eyebrow label, section heading, numbered truth row, metric, talk row, event badge, material card, contact block and footer. Tokens live as CSS custom properties in `src/styles/global.css`; content lives in paired JSON files.

## Accessibility
Target WCAG 2.1 AA. Semantic headings and lists, skip link, visible focus, selectable email, keyboard-operable controls, reduced-motion support, no content hidden behind JavaScript, and text contrast of at least 4.5:1.

## Responsive behavior
Mobile is primary. At 800px and below navigation links collapse, hero art recedes behind the copy, rows become two-column stacks, metrics become a 2×2 grid, and split sections become one column. Touch targets stay at least 44px where interactive.

## Interaction states
Content is immediately present on slow/offline-after-load connections. Scroll reveals progressively enhance it. Copy-email reports success briefly and has a legacy fallback. PDF cards are visibly unavailable until real files are supplied. A missing email client still leaves the address selectable.

## Content voice
First person, plain-spoken, executive-level and mechanism-led. Avoid hype, unverifiable POC statistics, the current employer's name, consulting jargon and promises of guaranteed outcomes. PL and EN must remain structurally paired.

## Implementation constraints
Astro 5 static output with Tailwind's Vite integration; no backend, CMS, SPA runtime or external fonts. Total client JavaScript is one small inline enhancement. Build must pass `astro check`. Replace the placeholder canonical domain before launch. Deploy target is Cloudflare Pages.

## Open questions
- [ ] Confirm final domain and replace `https://example.com` — owner: Taidi; blocks canonical URLs and launch.
- [ ] Supply final email — owner: Taidi; blocks real conversion.
- [ ] Confirm which supplied portrait should become the final OG image — owner: Taidi; affects sharing.
- [ ] Supply and authorize organizer testimonials/event logos — owner: Taidi; affects proof section.
- [ ] Supply both final PDFs — owner: Taidi; enables material downloads.
- [ ] Complete compliance review of public Accenture and Bank Pekao claims before launch — owner: Taidi/compliance.
- [ ] Choose final heading typeface after reviewing the live mockup — owner: Taidi.
