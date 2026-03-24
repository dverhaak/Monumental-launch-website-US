
## Research Synthesis

### Monumental's Current Voice & Presence
From monumental.co and press coverage, the site is lean and direct. Headline: *"Automating on-site construction with robotics and software."* — no adjectives, no hype. The vision page leads with outcomes ("everyone can afford a high-quality house") not product specs. Projects page lists real buildings: Amsterdam canal walls, hotel in Bussum, care homes in Gouda. The fundraise announcement ($25M, Plural + Hummingbird) uses their own words "AI-powered" but coverage consistently notes the understatement of their positioning vs. the reality of deployment.

---

## Step 1 — Tone Principles (7)

1. **State facts, not claims.** "Deployed on 20+ projects in the Netherlands and UK" beats "proven technology."
2. **No adjectives that aren't earned.** If you can't back it with a number or a name, cut it.
3. **Short sentences carry confidence.** Monumental's own headline is 8 words. Follow that pattern.
4. **Europe as a quality signal, not a geography lesson.** Dutch and UK masonry standards are demanding. The fact Monumental operates there is evidence, not a claim.
5. **Let the work speak.** Real project names, real contractors, real locations. No renders or concept art.
6. **The company is not a startup. It's an operator.** Tone should feel closer to a contractor presenting a portfolio than a startup pitching investors.
7. **No urgency language.** No "don't miss out," no "sign up today." The CTA should feel like an introduction, not a sale.

---

## Step 2 — Page Structure

Six sections, single scroll:

1. **Hero** — Full-screen video (robot laying masonry on an actual site), minimal overlay text, one CTA
2. **Proof** — A tight grid of completed European projects with contractor names visible (signals credibility to US contractors)
3. **European Credibility** — A single, understated section explaining why building to European masonry standards matters
4. **What It Does** — Two or three functional facts about the robot: what it does, how it's deployed, what it replaces
5. **Category** — A single anchoring statement positioning Monumental as the defining company in construction robotics (no hype, just context)
6. **CTA** — A simple contact/interest form. Minimal fields. No demo booking calendar noise.

---

## Step 3 — Messaging Per Section

**1. Hero**
- Line: *"Construction robotics. Already at work."*
- Sub: *"Monumental robots are laying masonry on active job sites across the Netherlands and United Kingdom."*
- CTA button: *"Talk to us about your projects"*

**2. Proof**
- Heading: *"Active projects"*
- Content: 4–6 project cards showing real sites — project type, location, contractor name, country flag
- No copy needed beyond the facts. The data is the message.

**3. European Credibility**
- Heading: *"Built to European standards"*
- Body: *"European masonry requirements rank among the most demanding in the world. Monumental robots are certified and operating within those standards — on residential, commercial, and infrastructure projects."*
- No bullet points. One quiet paragraph.

**4. What It Does**
- Heading: *"How it works"*
- Three factual statements, no jargon:
  - *"The robot reads the build plan and lays block to spec, course by course."*
  - *"It deploys to an active site. No new infrastructure required."*
  - *"It works alongside your crew. It doesn't replace your project manager."*

**5. Category**
- Heading: *"The labor shortage isn't going away."*
- Body: *"The skilled masonry workforce in the US is shrinking. Monumental is the only company operating autonomous bricklaying robots at commercial scale. We're bringing that to the US."*
- No statistics. No footnotes. Just the honest state of things.

**6. CTA**
- Heading: *"Interested in bringing Monumental to your projects?"*
- Sub: *"We're speaking with US contractors now. Tell us about your work."*
- Form: Name, Company, State, Project type (dropdown: residential / commercial / infrastructure), Message field
- Submit: *"Send"*

---

## Step 4 — Design Direction

**Palette**
- Background: Off-white (`#F5F4F0`) — warm, architectural, not clinical
- Text: Near-black (`#1A1A1A`) — not pure black, feels considered
- Accent: Single muted tone, possibly a warm stone or slate (for section dividers and hover states)
- No gradients. No color fills on sections.

**Typography**
- Headlines: Serif (e.g. Playfair Display or similar editorial serif) — signals permanence and craftsmanship, not startup energy
- Body: Clean sans-serif (Inter or similar) — legible, modern, unobtrusive
- Type sizes: Large. 72–96px hero headline. Generous line height.

**Layout**
- Max width ~1200px, centered
- Horizontal rules to divide sections — no colored section backgrounds
- Lots of vertical breathing room (120–160px between sections)
- Project cards: clean grid, no shadows, no rounded corners — architectural, not app-like

**Imagery**
- Hero: Muted video overlay (dark scrim so text is legible)
- Project cards: Real site photography (placeholder images for now, to be swapped for actual photos)
- No icons. No illustrations. No stock photography.

**Motion**
- Subtle fade-in on scroll only
- No parallax, no marquees, no hero animations beyond the video itself

**Navigation**
- Sticky minimal nav: Logo left, single CTA right (*"Get in touch"*)
- No dropdown menus

---

## Implementation Plan

### 1. Set up design system & global styles
Update `index.css` with Monumental's palette (off-white background, near-black text, warm accent), import an editorial serif + Inter, and define spacing/typography tokens.

### 2. Build the Nav
Minimal sticky nav with the Monumental wordmark (left) and a single "Get in touch" anchor link (right). No hamburger. Mobile: same layout collapsed.

### 3. Build the Hero section
Full-viewport section with a looping background video (placeholder with a dark overlay), large serif headline (*"Construction robotics. Already at work."*), one-line subtext, and a CTA button that scrolls to the contact form.

### 4. Build the Proof / Projects section
A tight grid (3-column desktop, 1-column mobile) of 5–6 project cards. Each card: project photo, project name, type, location, contractor name, and a small country flag badge. No borders or shadows — clean edges only.

### 5. Build the European Standards section
Full-width section, single centered paragraph. Optional: a horizontal photo strip of a real build for visual texture.

### 6. Build the "How It Works" section
Three-column layout on desktop, stacked on mobile. Each column: a one-line fact + 2-sentence explanation. No icons.

### 7. Build the Category / Market Reality section
Single full-width text block, large type. The anchor statement. Minimal, editorial.

### 8. Build the CTA / Contact form section
Clean centered form with 5 fields. No modal. No calendly embed. Just a simple form that submits (Supabase or a mailto: fallback). Success state: a quiet confirmation message.

### 9. Mobile responsiveness pass
Ensure all sections reflow cleanly. Typography scales down gracefully. Form is easy to fill on mobile.
