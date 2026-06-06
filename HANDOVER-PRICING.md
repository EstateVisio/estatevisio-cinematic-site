# EstateVisio Pricing Page: Handover

## Where we are

**V15 is the current working version.** It lives at:
- Component: `components/pages/PricingV15.tsx` (298 lines)
- Route: `/[lang]/pricing-v15/`

V14 is the immediate predecessor (314 lines). V15 is a direct iteration of it with tighter copywriting aimed at Dutch real estate agents rather than generic "studios/agencies".

There is no canonical `/pricing` route yet. All versions are on versioned routes (`pricing-v1` through `pricing-v15`) while the design is being finalised.

---

## What V15 is

**Concept:** "Masthead Top": a 4-column grid where each card has:
- A dense compressed header block (number, name, price, sub-line, savings) in the top third
- A heavy horizontal rule bisecting the column
- An open, airy feature list in the lower two-thirds
- The visual tension of tight-then-open within one card is the design idea

**Color palette:** `charcoal` background, `gold` accents, `cloud-white` text at varying opacities.

**Packages (V15 copy, Dutch agent focus):**
| # | Name | Price | Target |
|---|------|-------|--------|
| 01 | Single Video | €40 | Testing service, one property at a time |
| 02 | 5-Video Pack | €180 (€36/video) | Agents listing 3–6 properties/month |
| 03 | 10-Video Pack | €340 (€34/video) | Agencies, consistent volume |
| 04 | Tailored | Let's talk | Large agencies, white-label |

**Add-ons:** Extended cut, extra revision, rush delivery, vertical format, subtitles, virtual furnishing, digital twin avatar.

**FAQ:** 4 items covering workflow, revision policy, team credit sharing, and price comparison vs traditional videographers.

---

## What's NOT done yet

The next session should invoke `design:taste` (now available, skills were fixed) and apply a design review pass to V15. Specific things to improve:

1. **Font sizes:** body text is `text-base` (16px). The `taste` skill mandates min 24px body on wide viewports. Review all text sizes.
2. **The `Reveal` animation:** uses inline `style` with `opacity`/`transform`. Consider whether this is the right pattern or if Framer Motion should replace it.
3. **Card min-height is hardcoded:** `min-h-[740px]` on each card. This may not hold gracefully at all breakpoints.
4. **No active pricing route:** once V15 is finalised, wire it to `/[lang]/pricing/page.tsx` (file doesn't exist yet, needs creating).
5. **Copywriting is EN only:** no BG translation keys. When the page goes live, BG copy needs to be added.

---

## Key files

```
components/pages/PricingV15.tsx          ← current working version
components/pages/PricingV14.tsx          ← previous version (reference)
app/[lang]/pricing-v15/page.tsx          ← route
app/[lang]/pricing-v14/page.tsx          ← previous route
```

---

## How to run the dev server

Dev server runs on the Hetzner VPS via process-compose. Use the `process-compose` skill to connect and check status. Do NOT start via `npm run dev` directly.

---

## Design skill to use

Invoke `design:taste` before making any visual changes. It's now properly registered, was broken in the previous session but is fixed as of 2026-05-29.

Invoke `design:impeccable` if building a new version from scratch.
