# Project memory

## Product intent & audience

- Personal portfolio for Aditya Patil: Freelance Web Developer, System Engineer Trainee at Infosys, Founder of PATIL GROUPS.
- Audience: potential clients, recruiters, collaborators.
- Single-page site with full sections (not a landing mockup); easy to maintain via one central data file.

## Brand personality & voice

- Premium, professional, confident. Natural English only.
- PATIL GROUPS branding used consistently; not stated to be a registered company.
- No fabricated clients, testimonials, awards, or achievements.

## Visual design & UX direction

- Theme: black, dark navy, metallic gold. PATIL GROUPS logo (gold/black, white background) placed on a white plaque in nav and footer.
- Elegant typography; two fonts loaded (specific families chosen during build).
- Smooth scrolling, subtle scroll-reveal animations, modern hover effects; avoid excessive animations/clutter.
- Generous spacing, clean layouts, premium visual hierarchy.
- Fully responsive: desktop, tablet, mobile. Mobile nav = full-screen menu.
- Nav is scroll-aware with active-section highlighting; “Hire Me” button scrolls to contact.
- Hero uses uploaded professional photograph + name + headline + CTA buttons.
- Reusable building blocks: ScrollReveal wrapper, SectionHeading, Logo, shared social icon mapping.
- Project cards: 16:9 thumbnails, `object-fit: cover`, consistent aspect ratios; no emojis/cartoon graphics.

## Decisions, constraints & rationale

- Stack: Vite + React, JSX, Tailwind CSS, lucide-react icons, `@/` path alias (confirmed configured in build + TS).
- No extra UI/icon packages unless requested.
- Projects use only provided links:
  - Zaika: live + GitHub provided; tech list empty (none provided).
  - Epilepsy AI assistant: no live/repo links; full details/tech provided.
  - Real Estate System: no links; tech/features provided.
- Resume: Download Resume button disabled as placeholder until PDF is added to `public/`.
- Certifications: issuer field optional (not provided for all).
- Corrected earlier over-reach: removed invented course title, Founder timeline, and unlisted Zaika tech.
- Production build + type check pass; visual layout/animations unverified in-browser.
- One Tailwind opacity value switched from 98 to 95 (non-default scale) for safety.
- Project thumbnails: user requested local images in `public/images`, but environment can't download Pexels photos; images currently load from Pexels URLs as workaround.
- Rock Paper Scissors: Pexels lacks a clean photo of three separate RPS objects; uses single wooden hand gesture instead.
- Visual confirmation in Preview unavailable in this environment.

## Open questions & assumptions

- Resume PDF pending; button to be wired once file added to `public/`.
- Uploaded photo and logo assumed present in project images folder; usage depends on correct filenames/paths.
- Zaika project tech stack not provided; left empty pending user input.
- Links for epilepsy and real estate projects not provided; none invented.
- Visual polish/animations not yet browser-verified.
- Project thumbnails still external Pexels URLs; user prefers local copies in `public/images` — pending when download capability available or user provides assets.
- All four project images need browser verification by user (blank areas possible if Pexels URLs fail).