# EstateVisio Website Overhaul — Design Spec

**Date:** 2026-04-04  
**Status:** Approved  
**Project:** estatevisio-cinematic-site

---

## Overview

Overhaul the EstateVisio website to reflect expanded video production capabilities — from a cinematic tour service to a full real estate video production studio with three distinct capabilities: Cinematic Tour, Virtual Furnishing, and AI Avatar presenter. The redesign prioritises visual proof over text, a simple artsy luxury feel, and a leaner page structure.

---

## Positioning Shift

| Before | After |
|--------|-------|
| Cinematic tour service from photos | Real estate video production — three capabilities |
| Tour-focused copy throughout | All three capabilities presented as equal pillars |
| 6 pages (Home, Vision, Services, Gallery, Contact, Roadmap) | 4 pages (Home, Services, Gallery, Contact) |

---

## Pages

### Removed
- **Vision** — removed from nav. Content can return later if needed.
- **Roadmap** — removed from nav. Future-focused platform content not suited to a premium minimal site.

### Navigation (updated)
`Home · Services · Our Work · Contact`

---

## Page Designs

### 1. Home (`/`)

Section-by-section layout:

| # | Section | Details |
|---|---------|---------|
| 1 | **Hero** | Static background image. Headline: *"Your property. On film."* Subline: *"Cinematic tours. Virtual furnishing. Your AI avatar — all from photos, in 24 hours."* Two CTAs: "Get a Free Sample Video" + "See How It Works". Scroll indicator. |
| 2 | **Commercial video** | Full-width YouTube embed (main 60–90s combined video). Caption: *"Every frame began as a photo."* |
| 3 | **Three pillars** | Three cards side-by-side — Cinematic Tour, Virtual Furnishing, AI Avatar. Each card: icon, name, one-line description, link to corresponding sample video. Minimal text. Gold border on hover. |
| 4 | **Gallery teaser** | Grid of 4 YouTube video thumbnails (one per sample video). Capability label on each. "See all our work →" link to `/gallery`. |
| 5 | **CTA** | *"Send us photos. First video is free."* — links to `/contact`. |

### 2. Services (`/services`)

Three sections:

1. **Headline** — *"From photos to professional video."* One-liner: *"No crews. No scheduling. No site visits."*
2. **Three capabilities** — one section per capability (Cinematic Tour, Virtual Furnishing, AI Avatar). Each has: capability name, short description, YouTube embed of the corresponding sample video.
3. **CTA** — *"Ready to see it for yourself?"* → Get a Free Sample + Book a Call buttons.

Remove the current 3-step process layout (too process-heavy). Replace with capability-focused sections.

### 3. Gallery (`/gallery`)

- **Headline:** *"Three capabilities. One set of photos."*
- **Grid:** 4 YouTube video cards — one per sample video (Tour, Furnishing, Avatar, Combined).
- Each card: YouTube thumbnail, capability label, property name/location.
- No filters (too few videos currently).
- **CTA at bottom:** "Want us to make one for you?" → contact link.

### 4. Contact (`/contact`)

No changes. Already clean and functional.

---

## Sample Videos to Produce

| # | Title | Capability | Notes |
|---|-------|------------|-------|
| 1 | Luxury apartment · Sofia | Cinematic Tour | Smooth walkthrough, no narration, music only |
| 2 | Empty studio · before/after | Virtual Furnishing | Furniture appearing room by room — the contrast is the proof |
| 3 | Villa · AI agent presenter | AI Avatar | Digital twin of agent narrating the property |
| 4 | Combined showreel | All three | 60–90s, all capabilities in one video — this is the homepage hero video |

Video 4 (combined) is the main commercial video embedded on the homepage.  
All videos hosted on YouTube and embedded via YouTube player.

---

## Copy Changes

| Location | Old | New |
|----------|-----|-----|
| Hero headline | "Your listings, presented like never before." | "Your property. On film." |
| Hero subline | Tour-focused | "Cinematic tours. Virtual furnishing. Your AI avatar — all from photos, in 24 hours." |
| Service section subtitle | "Three capabilities no traditional videographer can offer." | Keep as-is |
| Gallery headline | "See what we've made" | "Three capabilities. One set of photos." |
| Throughout | Tour-only framing | Broader video production framing |

---

## What Does NOT Change

- Color scheme: charcoal, gold, warm-sand, terracotta, estate-teal
- Floating pill navigation style
- Typography: Poppins (headings) + Inter (body)
- Animation styles (fade-in-up, scale-in)
- Mobile navigation
- Contact page
- Language switcher (EN/BG)
- All existing UI components

---

## Constraints

- Retain existing Tailwind CSS design system exactly
- All videos embedded via YouTube (no self-hosted video files)
- Bilingual support (EN/BG) maintained — all new copy needs BG translations in `copy.ts`
- No new dependencies required
