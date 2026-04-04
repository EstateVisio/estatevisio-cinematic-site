# EstateVisio Website Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul EstateVisio from a cinematic tour service to a real estate video production studio with three capability pillars (Tour, Furnishing, Avatar), updated copy, leaner navigation, and YouTube-embedded video proofs throughout.

**Architecture:** All changes are frontend-only within the existing React + Vite + Tailwind stack. Copy lives centrally in `copy.ts`. A new `YouTubeEmbed` component handles all video embeds. Pages are updated in-place — no new routes, no new dependencies.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Vite, react-router-dom v6, lucide-react, `copy.ts` for all bilingual text.

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/config/copy.ts` | Modify | Update hero copy, service feature copy, add gallery/capabilities copy |
| `src/App.tsx` | Modify | Redirect `/vision` to `/` |
| `src/components/Navigation.tsx` | Modify | Remove Vision from nav items |
| `src/components/MobileNav.tsx` | Modify | Remove Vision from nav items |
| `src/components/YouTubeEmbed.tsx` | **Create** | Reusable YouTube iframe with gold corner accents |
| `src/components/ServiceSection.tsx` | Modify | Three capability pillars (Tour, Furnishing, Avatar) with gallery links |
| `src/components/HeroSection.tsx` | Modify | Secondary CTA links to `/services` instead of scrolling |
| `src/pages/Index.tsx` | Modify | Remove AboutSection + VisionSection; update gallery teaser to 4 video thumbnail cards |
| `src/pages/Services.tsx` | Modify | Replace 3-step process with capability-focused sections, each with YouTube embed |
| `src/pages/Gallery.tsx` | Modify | New headline from copy, YouTube embeds via YouTubeEmbed component |

---

## Video IDs

The four sample videos don't exist yet. Every task that uses a video ID uses this constant block — replace IDs here once videos are uploaded to YouTube:

```tsx
// Defined at the top of each file that needs them
const VIDEO_IDS = {
  commercial: 'q3-Sk7rSWrs',    // existing main video — homepage VideoSection
  tour: 'q3-Sk7rSWrs',          // TODO: replace with Cinematic Tour sample
  furnishing: 'q3-Sk7rSWrs',    // TODO: replace with Virtual Furnishing sample
  avatar: 'q3-Sk7rSWrs',        // TODO: replace with AI Avatar sample
};
```

---

## Task 1: Update copy.ts — hero, service features, gallery, services capabilities

**Files:**
- Modify: `src/config/copy.ts`

- [ ] **Step 1: Update hero copy (title + subtitle)**

In `src/config/copy.ts`, replace the `hero` object:

```typescript
hero: {
  title: { en: "Your property. On film.", bg: "Вашият имот. На филм." },
  subtitle: {
    en: "Cinematic tours. Virtual furnishing. Your AI avatar — all from photos, in 24 hours.",
    bg: "Кинематографични разходки. Виртуално обзавеждане. Вашият AI аватар — всичко от снимки, до 24 часа.",
  },
  cta: { en: "Get a Free Sample Video", bg: "Получете безплатно примерно видео" },
  secondaryCta: { en: "See How It Works", bg: "Вижте как работи" },
},
```

- [ ] **Step 2: Update service features — replace with Tour, Furnishing, Avatar**

In `src/config/copy.ts`, replace the `service.features` block inside the existing `service` object:

```typescript
features: {
  reimagined: {
    title: { en: "Cinematic Tour", bg: "Кинематографична разходка" },
    description: {
      en: "Your photos become a smooth, film-like walkthrough of the property.",
      bg: "Снимките ви стават плавна, кинематографична разходка на имота.",
    },
  },
  spotlight: {
    title: { en: "Virtual Furnishing", bg: "Виртуално обзавеждане" },
    description: {
      en: "Empty apartments shown furnished, room by room — on video, not just photos.",
      bg: "Празните апартаменти показани обзаведени, стая по стая — на видео, не само на снимки.",
    },
  },
  avatar: {
    title: { en: "AI Avatar Presenter", bg: "AI Аватар Презентатор" },
    description: {
      en: "Your likeness and voice presenting the property — no camera needed.",
      bg: "Вашият облик и глас представят имота — без камера.",
    },
  },
},
```

- [ ] **Step 3: Add gallery page copy — new `galleryPage` key**

Add this new top-level key in `copy.ts` (after the existing `footer` key):

```typescript
galleryPage: {
  headline: { en: "Three capabilities. One set of photos.", bg: "Три възможности. Едни снимки." },
  subtitle: { en: "Every frame you see began as a photo.", bg: "Всяка сцена, която виждате, започна от снимка." },
  videos: {
    commercial: { en: "Main Showreel · All Capabilities", bg: "Основен клип · Всички възможности" },
    tour: { en: "Cinematic Tour · Luxury apartment · Sofia", bg: "Кинематографична разходка · Луксозен апартамент · София" },
    furnishing: { en: "Virtual Furnishing · Empty studio · Before/After", bg: "Виртуално обзавеждане · Студио · Преди/След" },
    avatar: { en: "AI Avatar · Villa presentation", bg: "AI Аватар · Презентация на вила" },
  },
},
```

- [ ] **Step 4: Add services page capabilities copy — new `servicesPage.capabilities` key**

Inside the existing `servicesPage` object, add a `capabilities` key after the existing `included` key:

```typescript
capabilities: {
  headline: { en: "From photos to professional video.", bg: "От снимки до професионално видео." },
  intro: { en: "No crews. No scheduling. No site visits. Three capabilities, one delivery.", bg: "Без екип. Без уговорки. Без посещения. Три възможности, една доставка." },
  tour: {
    badge: { en: "Cinematic Tour", bg: "Кинематографична разходка" },
    title: { en: "Your photos become a film.", bg: "Снимките ви стават филм." },
    description: {
      en: "We turn your property photos into a smooth, film-like walkthrough. Every angle, every room — sequenced and brought to life with cinematic motion.",
      bg: "Превръщаме снимките на вашия имот в плавна, кинематографична разходка. Всеки ъгъл, всяка стая — наредени и оживени с кинематографично движение.",
    },
  },
  furnishing: {
    badge: { en: "Virtual Furnishing", bg: "Виртуално обзавеждане" },
    title: { en: "Empty becomes home — on video.", bg: "Празното се превръща в дом — на видео." },
    description: {
      en: "We furnish empty apartments virtually, room by room, revealed on video. Buyers see the full potential of a space before a single piece of furniture arrives.",
      bg: "Обзавеждаме виртуално празните апартаменти, стая по стая, разкрити на видео. Купувачите виждат пълния потенциал на пространството, преди да пристигне мебел.",
    },
  },
  avatar: {
    badge: { en: "AI Avatar Presenter", bg: "AI Аватар Презентатор" },
    title: { en: "Your face. Your voice. No camera.", bg: "Вашето лице. Вашият глас. Без камера." },
    description: {
      en: "Present your listings as a digital twin of yourself — your exact likeness and voice, narrating every property. Build a consistent personal brand across every listing you represent.",
      bg: "Представяйте обявите си като цифров двойник — вашият точен облик и глас, разказвайки всеки имот. Изградете последователна лична марка за всяка обява.",
    },
  },
},
```

- [ ] **Step 5: Build to verify no TypeScript errors**

```bash
cd "C:/Users/tigge/Desktop/EstateVisio Front-end/estatevisio-cinematic-site"
npm run build
```

Expected: Build succeeds with no errors. (TypeScript errors from `ServiceSection.tsx` referencing `copy.differentiators.items.trust` are expected and will be fixed in Task 4.)

- [ ] **Step 6: Commit**

```bash
git add src/config/copy.ts
git commit -m "feat: update copy for video production positioning and three capability pillars"
```

---

## Task 2: Update routing and navigation — remove Vision

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navigation.tsx`
- Modify: `src/components/MobileNav.tsx`

- [ ] **Step 1: Add `/vision` redirect in App.tsx**

In `src/App.tsx`, replace:
```tsx
<Route path="/vision" element={<Vision />} />
```
With:
```tsx
<Route path="/vision" element={<Navigate to="/" replace />} />
```

Also remove the Vision import at the top:
```tsx
import Vision from "./pages/Vision";
```

- [ ] **Step 2: Remove Vision from desktop nav**

In `src/components/Navigation.tsx`, replace the `navItems` array:

```tsx
const navItems = [
  { label: copy.navigation.home, path: '/' },
  { label: copy.navigation.services, path: '/services' },
  { label: copy.navigation.gallery, path: '/gallery' },
  { label: copy.navigation.contact, path: '/contact' },
];
```

- [ ] **Step 3: Remove Vision from mobile nav**

In `src/components/MobileNav.tsx`, replace the `navItems` array:

```tsx
const navItems = [
  { label: copy.navigation.home, path: '/' },
  { label: copy.navigation.services, path: '/services' },
  { label: copy.navigation.gallery, path: '/gallery' },
  { label: copy.navigation.contact, path: '/contact' },
];
```

- [ ] **Step 4: Build to verify**

```bash
npm run build
```

Expected: Build succeeds. TypeScript will warn if `Vision` import is still referenced anywhere — fix before proceeding.

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/components/Navigation.tsx src/components/MobileNav.tsx
git commit -m "feat: remove Vision page from nav and routing"
```

---

## Task 3: Create YouTubeEmbed component

**Files:**
- Create: `src/components/YouTubeEmbed.tsx`

- [ ] **Step 1: Create the component**

Create `src/components/YouTubeEmbed.tsx`:

```tsx
interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title = 'EstateVisio Video' }: YouTubeEmbedProps) => {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold z-10 pointer-events-none" />
      <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold z-10 pointer-events-none" />
      <div className="relative rounded-xl overflow-hidden shadow-elegant" style={{ aspectRatio: '16/9' }}>
        <iframe
          className="w-full h-full absolute inset-0"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;
```

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/YouTubeEmbed.tsx
git commit -m "feat: add reusable YouTubeEmbed component with gold accents"
```

---

## Task 4: Update ServiceSection — three capability pillars with gallery links

**Files:**
- Modify: `src/components/ServiceSection.tsx`

- [ ] **Step 1: Rewrite ServiceSection.tsx**

Replace the entire file content:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import TextRenderer from '@/components/ui/TextRenderer';
import { Film, Sparkles, UserCircle, ArrowRight } from 'lucide-react';
import { copy } from '@/config/copy';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Film, ...copy.service.features.reimagined },
    { icon: Sparkles, ...copy.service.features.spotlight },
    { icon: UserCircle, ...copy.service.features.avatar },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-cloud mb-6">
            <TextRenderer>{t(copy.service.title)}</TextRenderer>
          </h2>
          <p className="text-xl text-warm-sand max-w-3xl mx-auto">
            <TextRenderer>{t(copy.service.subtitle)}</TextRenderer>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-charcoal/20 rounded-full flex items-center justify-center border-2 border-gold shadow-gold">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>

                  <h3 className="text-2xl font-bold text-cloud">
                    <TextRenderer>{t(feature.title)}</TextRenderer>
                  </h3>

                  <p className="text-cloud-white/80 text-lg">
                    <TextRenderer>{t(feature.description)}</TextRenderer>
                  </p>

                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-gold/80 transition-colors mt-2"
                  >
                    Watch example <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
```

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds with no errors. The `copy.service.features.avatar` key added in Task 1 is now consumed here.

- [ ] **Step 3: Commit**

```bash
git add src/components/ServiceSection.tsx
git commit -m "feat: update service section with Tour, Furnishing, Avatar pillars and gallery links"
```

---

## Task 5: Update HeroSection — secondary CTA links to /services

**Files:**
- Modify: `src/components/HeroSection.tsx`

The current secondary CTA scrolls to the about section (which is being removed from the homepage). It should instead navigate to `/services`.

- [ ] **Step 1: Update HeroSection.tsx**

Replace the entire file content:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';
import TextRenderer from '@/components/ui/TextRenderer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-property.jpg';
import { copy } from '@/config/copy';
import { Link } from 'react-router-dom';
import React from 'react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 cinematic-text animate-fade-in-up">
          <span className="text-cloud"><TextRenderer>{t(copy.hero.title)}</TextRenderer></span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-warm-sand mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <TextRenderer>{t(copy.hero.subtitle)}</TextRenderer>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            className="text-lg px-8 py-6 shadow-gold hover:shadow-elegant transition-smooth bg-gold hover:bg-gold/90 text-charcoal font-semibold"
            asChild
          >
            <Link to="/contact">
              <TextRenderer>{t(copy.hero.cta)}</TextRenderer>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-cloud bg-cloud/10 text-cloud hover:bg-cloud hover:text-charcoal transition-smooth font-semibold"
            asChild
          >
            <Link to="/services">
              <TextRenderer>{t(copy.hero.secondaryCta)}</TextRenderer>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds. Note: `HeroSection` no longer accepts an `aboutRef` prop — this will cause a TypeScript error in `Index.tsx`. Fix it in Task 6.

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: update hero CTAs to link to contact and services"
```

---

## Task 6: Update homepage Index.tsx

**Files:**
- Modify: `src/pages/Index.tsx`

Remove `AboutSection` and `VisionSection`. Replace the inline gallery teaser (3 placeholder cards) with a 4-video YouTube thumbnail teaser. Remove the `aboutSectionRef` prop from `HeroSection`.

- [ ] **Step 1: Rewrite Index.tsx**

Replace the entire file content:

```tsx
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ServiceSection from '@/components/ServiceSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/assets/estatevision-logo.png';
import MobileNav from '@/components/MobileNav';
import TextRenderer from '@/components/ui/TextRenderer';

// TODO: Replace placeholder IDs with real YouTube video IDs once uploaded
const VIDEO_IDS = {
  commercial: 'q3-Sk7rSWrs',
  tour: 'q3-Sk7rSWrs',
  furnishing: 'q3-Sk7rSWrs',
  avatar: 'q3-Sk7rSWrs',
};

const galleryTeaser = [
  { id: VIDEO_IDS.commercial, label: { en: 'Main Showreel · All Capabilities', bg: 'Основен клип · Всички възможности' } },
  { id: VIDEO_IDS.tour, label: { en: 'Cinematic Tour · Sofia', bg: 'Кинематографична разходка · София' } },
  { id: VIDEO_IDS.furnishing, label: { en: 'Virtual Furnishing · Before/After', bg: 'Виртуално обзавеждане · Преди/След' } },
  { id: VIDEO_IDS.avatar, label: { en: 'AI Avatar · Villa', bg: 'AI Аватар · Вила' } },
];

const Index = () => {
  const isVisible = useScrollVisibility();
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />

      <Link
        to="/"
        className={cn(
          "fixed top-6 left-20 lg:left-6 z-50 transition-all duration-300",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
        <img src={logo} alt="EstateVisio" className="h-10 w-auto" />
      </Link>

      <Navigation />

      <div
        className={cn(
          "fixed top-6 right-6 z-50 transition-all duration-300 hidden lg:block",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
        <LanguageSwitcher />
      </div>

      <HeroSection />
      <VideoSection />
      <ServiceSection />

      {/* Gallery Teaser */}
      <section className="py-24 bg-warm-sand/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4 cinematic-text">
              See what we've made
            </h2>
            <p className="text-xl text-cloud-white/70">Every frame began as a photo.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryTeaser.map((video, index) => (
              <Link
                key={index}
                to="/gallery"
                className="group relative aspect-video block rounded-xl overflow-hidden border border-gold/40 hover:border-gold transition-all hover:shadow-gold animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.label.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center group-hover:bg-gold/40 transition-all">
                    <Play className="h-5 w-5 text-gold ml-0.5" />
                  </div>
                  <p className="text-cloud-white/90 text-xs font-medium px-3 text-center leading-tight">
                    {video.label[language]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 animate-fade-in-up">
            <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold" asChild>
              <Link to="/gallery">
                See all our work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
```

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: overhaul homepage — remove about/vision sections, add capability pillars and video gallery teaser"
```

---

## Task 7: Redesign Services page — capability-focused with YouTube embeds

**Files:**
- Modify: `src/pages/Services.tsx`

Replace the current 3-step process layout with three capability sections, each featuring a YouTube embed of the corresponding sample video.

- [ ] **Step 1: Rewrite Services.tsx**

Replace the entire file content:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
import MobileNav from '@/components/MobileNav';
import logo from '@/assets/estatevision-logo.png';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';

// TODO: Replace placeholder IDs with real YouTube video IDs once uploaded
const VIDEO_IDS = {
  tour: 'q3-Sk7rSWrs',
  furnishing: 'q3-Sk7rSWrs',
  avatar: 'q3-Sk7rSWrs',
};

const capabilities = [
  {
    key: 'tour' as const,
    videoId: VIDEO_IDS.tour,
    bg: 'bg-charcoal',
    badgeColor: 'bg-gold/20 border-gold/40 text-gold',
    titleColor: 'text-cloud',
    descColor: 'text-cloud-white/80',
    reverse: false,
  },
  {
    key: 'furnishing' as const,
    videoId: VIDEO_IDS.furnishing,
    bg: 'bg-warm-sand/10',
    badgeColor: 'bg-terracotta/20 border-terracotta/40 text-terracotta',
    titleColor: 'text-cloud',
    descColor: 'text-cloud-white/80',
    reverse: true,
  },
  {
    key: 'avatar' as const,
    videoId: VIDEO_IDS.avatar,
    bg: 'bg-charcoal',
    badgeColor: 'bg-estate-teal/20 border-estate-teal/40 text-estate-teal',
    titleColor: 'text-cloud',
    descColor: 'text-cloud-white/80',
    reverse: false,
  },
];

const Services = () => {
  const { t } = useLanguage();
  const isVisible = useScrollVisibility();

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />

      <Link
        to="/"
        className={cn(
          "fixed top-6 left-20 lg:left-6 z-50 transition-all duration-300",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
        <img src={logo} alt="EstateVisio" className="h-10 w-auto" />
      </Link>

      <Navigation />

      <div
        className={cn(
          "fixed top-6 right-6 z-50 transition-all duration-300 hidden lg:block",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
        <LanguageSwitcher />
      </div>

      {/* Header */}
      <section className="pt-32 pb-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6">
              <TextRenderer>{t(copy.servicesPage.capabilities.headline)}</TextRenderer>
            </h1>
            <div className="inline-block">
              <p className="text-xl md:text-2xl text-cloud leading-relaxed pb-2">
                <TextRenderer>{t(copy.servicesPage.capabilities.intro)}</TextRenderer>
              </p>
              <div className="h-1 bg-gradient-gold rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Capability Sections */}
      {capabilities.map((cap, index) => {
        const capCopy = copy.servicesPage.capabilities[cap.key];
        return (
          <section key={cap.key} className={`py-24 ${cap.bg}`}>
            <div className="container mx-auto px-6">
              <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center ${cap.reverse ? 'direction-reverse' : ''}`}>

                {/* Content */}
                <div className={`space-y-6 animate-fade-in-up ${cap.reverse ? 'md:order-2' : ''}`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-semibold ${cap.badgeColor}`}>
                    <TextRenderer>{t(capCopy.badge)}</TextRenderer>
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-bold ${cap.titleColor}`}>
                    <TextRenderer>{t(capCopy.title)}</TextRenderer>
                  </h2>
                  <p className={`text-lg md:text-xl leading-relaxed ${cap.descColor}`}>
                    <TextRenderer>{t(capCopy.description)}</TextRenderer>
                  </p>
                </div>

                {/* Video */}
                <div className={`animate-fade-in-up ${cap.reverse ? 'md:order-1' : ''}`} style={{ animationDelay: '0.2s' }}>
                  <YouTubeEmbed videoId={cap.videoId} title={capCopy.badge.en} />
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="py-32 bg-gradient-to-b from-warm-sand/20 to-gold/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              <TextRenderer>{t(copy.servicesPage.closing.title)}</TextRenderer>
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
              <TextRenderer>{t(copy.servicesPage.closing.subtitle)}</TextRenderer>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-charcoal hover:bg-charcoal/90 text-gold font-bold shadow-elegant hover:scale-105 transition-all"
                asChild
              >
                <Link to="/contact">
                  <TextRenderer>{t(copy.servicesPage.closing.cta)}</TextRenderer>
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-2 border-charcoal bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-gold transition-all font-semibold"
                asChild
              >
                <Link to="/contact">
                  <TextRenderer>{t(copy.servicesPage.closing.secondaryCta)}</TextRenderer>
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
```

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds. If TypeScript errors reference missing `capabilities` keys, verify Task 1 copy additions are present.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Services.tsx
git commit -m "feat: redesign services page with capability-focused sections and YouTube embeds"
```

---

## Task 8: Update Gallery page — new headline and YouTube video cards

**Files:**
- Modify: `src/pages/Gallery.tsx`

Replace placeholder play-button cards with YouTube embeds using the `YouTubeEmbed` component.

- [ ] **Step 1: Rewrite Gallery.tsx**

Replace the entire file content:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import MobileNav from '@/components/MobileNav';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
import logo from '@/assets/estatevision-logo.png';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';

// TODO: Replace placeholder IDs with real YouTube video IDs once uploaded
const VIDEO_IDS = {
  commercial: 'q3-Sk7rSWrs',
  tour: 'q3-Sk7rSWrs',
  furnishing: 'q3-Sk7rSWrs',
  avatar: 'q3-Sk7rSWrs',
};

const videos = [
  { id: VIDEO_IDS.commercial, labelKey: 'commercial' as const, badge: { en: 'All Capabilities', bg: 'Всички възможности' } },
  { id: VIDEO_IDS.tour, labelKey: 'tour' as const, badge: { en: 'Cinematic Tour', bg: 'Кинематографична разходка' } },
  { id: VIDEO_IDS.furnishing, labelKey: 'furnishing' as const, badge: { en: 'Virtual Furnishing', bg: 'Виртуално обзавеждане' } },
  { id: VIDEO_IDS.avatar, labelKey: 'avatar' as const, badge: { en: 'AI Avatar', bg: 'AI Аватар' } },
];

const Gallery = () => {
  const { t, language } = useLanguage();
  const isVisible = useScrollVisibility();

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />

      <Link
        to="/"
        className={cn(
          "fixed top-6 left-20 lg:left-6 z-50 transition-all duration-300",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
        <img src={logo} alt="EstateVisio" className="h-10 w-auto" />
      </Link>

      <Navigation />

      <div
        className={cn(
          "fixed top-6 right-6 z-50 transition-all duration-300 hidden lg:block",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
        <LanguageSwitcher />
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6 cinematic-text">
              <TextRenderer>{t(copy.galleryPage.headline)}</TextRenderer>
            </h1>
            <div className="inline-block">
              <p className="text-xl md:text-2xl text-cloud-white/80 leading-relaxed pb-2">
                <TextRenderer>{t(copy.galleryPage.subtitle)}</TextRenderer>
              </p>
              <div className="h-1 bg-gradient-gold rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="pb-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={index}
                className="space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <YouTubeEmbed
                  videoId={video.id}
                  title={copy.galleryPage.videos[video.labelKey].en}
                />
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold border border-gold/40 rounded-full px-3 py-1">
                    {video.badge[language]}
                  </span>
                  <p className="text-cloud-white/70 text-sm">
                    {copy.galleryPage.videos[video.labelKey][language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-warm-sand/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gold cinematic-text">
              Want us to make one for you?
            </h2>
            <p className="text-xl text-cloud-white/70">
              Send us photos of any property — your first video is free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gold hover:bg-gold/90 text-charcoal font-bold shadow-gold transition-smooth"
                asChild
              >
                <Link to="/contact">
                  <TextRenderer>{t(copy.cta.requestDemo)}</TextRenderer>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
```

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds. If TypeScript errors reference missing `galleryPage` keys in copy, verify Task 1 additions are present.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Gallery.tsx
git commit -m "feat: update gallery page with YouTube embeds and new headline"
```

---

## Task 9: Final build and smoke check

- [ ] **Step 1: Full build**

```bash
cd "C:/Users/tigge/Desktop/EstateVisio Front-end/estatevisio-cinematic-site"
npm run build
```

Expected: Build completes with no errors. Warnings about bundle size are acceptable.

- [ ] **Step 2: Preview locally**

```bash
npm run preview
```

Open `http://localhost:4173` and verify:
- Home: hero shows new headline "Your property. On film.", video section loads, three pillars show Tour/Furnishing/Avatar, gallery teaser shows 4 thumbnail cards
- Services: header shows new copy, three capability sections each with a YouTube embed
- Gallery: new headline "Three capabilities. One set of photos.", 4 YouTube embeds with labels
- Contact: unchanged
- Nav: 4 items only (Home, Services, Our Work, Contact)
- Mobile nav: same 4 items
- `/vision` URL redirects to home

- [ ] **Step 3: Replace video IDs**

Once real YouTube videos are uploaded, update `VIDEO_IDS` in:
- `src/pages/Index.tsx` — `tour`, `furnishing`, `avatar` keys
- `src/pages/Services.tsx` — `tour`, `furnishing`, `avatar` keys  
- `src/pages/Gallery.tsx` — `commercial`, `tour`, `furnishing`, `avatar` keys

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete EstateVisio website overhaul — three capability pillars, updated positioning, YouTube embeds"
```
