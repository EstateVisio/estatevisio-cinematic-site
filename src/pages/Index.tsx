import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import SectionLabel from '@/components/SectionLabel';
import GhostNumber from '@/components/GhostNumber';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import TextRenderer from '@/components/ui/TextRenderer';

const VIDEO_IDS = {
  commercial: 'q3-Sk7rSWrs',
  tour: 'q3-Sk7rSWrs',
  furnishing: 'q3-Sk7rSWrs',
  avatar: 'q3-Sk7rSWrs',
};

const galleryTeaser = [
  { id: VIDEO_IDS.commercial, label: { en: 'Main Showreel', bg: 'Основен клип' } },
  { id: VIDEO_IDS.tour, label: { en: 'Cinematic Tour', bg: 'Кинематографична разходка' } },
  { id: VIDEO_IDS.furnishing, label: { en: 'Virtual Furnishing', bg: 'Виртуално обзавеждане' } },
  { id: VIDEO_IDS.avatar, label: { en: 'AI Avatar', bg: 'AI Аватар' } },
];

const capabilities = [
  {
    num: '01',
    title: copy.service.features.reimagined.title,
    description: copy.service.features.reimagined.description,
  },
  {
    num: '02',
    title: copy.service.features.spotlight.title,
    description: copy.service.features.spotlight.description,
  },
  {
    num: '03',
    title: copy.service.features.avatar.title,
    description: copy.service.features.avatar.description,
  },
];

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-noir text-parchment">
      <Navigation />
      <MobileNav />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 overflow-hidden">
        <GhostNumber number="01" />
        <div className="relative max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-10">EstateVisio</p>
          <h1
            className="font-black text-parchment leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}
          >
            <TextRenderer>{t(copy.hero.title)}</TextRenderer>
          </h1>
          <div className="w-24 h-px bg-gold mb-8" />
          <p className="text-parchment-dim text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            <TextRenderer>{t(copy.hero.subtitle)}</TextRenderer>
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/contact"
              className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-parchment hover:text-gold transition-colors"
            >
              <TextRenderer>{t(copy.hero.cta)}</TextRenderer>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-parchment/50 hover:text-parchment transition-colors"
            >
              <TextRenderer>{t(copy.hero.secondaryCta)}</TextRenderer>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-parchment/20 animate-pulse" />
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee text="CINEMATIC TOUR · VIRTUAL FURNISHING · AI AVATAR · REAL ESTATE VIDEO · FROM PHOTOS" />

      {/* ─── MAIN VIDEO ─── */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-noir">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="02" label={t(copy.video.title)} />
          <YouTubeEmbed videoId={VIDEO_IDS.commercial} title="EstateVisio Showreel" />
          <p className="text-center text-parchment/40 text-xs tracking-[0.3em] uppercase mt-8">
            <TextRenderer>{t(copy.video.caption)}</TextRenderer>
          </p>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-noir-surface">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="03" label={t({ en: 'Capabilities', bg: 'Възможности' })} />
          <div>
            {capabilities.map((cap, i) => (
              <div
                key={cap.num}
                className={cn(
                  'flex items-start md:items-center justify-between gap-8 py-10',
                  i < capabilities.length - 1 && 'border-b border-parchment/10'
                )}
              >
                <span className="text-xs tracking-[0.3em] text-gold/60 font-mono w-8 shrink-0 mt-1">{cap.num}</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-parchment mb-2">
                    <TextRenderer>{t(cap.title)}</TextRenderer>
                  </h3>
                  <p className="text-parchment-dim text-base leading-relaxed">
                    <TextRenderer>{t(cap.description)}</TextRenderer>
                  </p>
                </div>
                <Link
                  to="/services"
                  className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors shrink-0"
                >
                  <span className="hidden md:inline">{t({ en: 'View', bg: 'Виж' })}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY TEASER ─── */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-noir">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="04" label={t({ en: 'Our Work', bg: 'Нашите работи' })} />
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {galleryTeaser.map((video, index) => (
              <Link key={index} to="/gallery" className="group block space-y-3">
                <div className="relative overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.label[language]}
                    className="w-full aspect-video object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-noir/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <p className="text-xs tracking-[0.3em] uppercase text-parchment/40 group-hover:text-gold transition-colors">
                  {video.label[language]}
                </p>
              </Link>
            ))}
          </div>
          <Link
            to="/gallery"
            className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-parchment/50 hover:text-parchment transition-colors"
          >
            {t({ en: 'See all our work', bg: 'Вижте всички наши работи' })}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 bg-gold">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2
            className="font-black text-noir leading-[0.92] mb-10 whitespace-pre-line"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {t({ en: 'Send us photos.\nFirst video is free.', bg: 'Изпратете ни снимки.\nПървото видео е безплатно.' })}
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-noir/70 hover:text-noir transition-colors font-semibold"
          >
            {t({ en: 'Get started', bg: 'Започнете' })}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
