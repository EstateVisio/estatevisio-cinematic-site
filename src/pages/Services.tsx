import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import GhostNumber from '@/components/GhostNumber';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import { ArrowRight } from 'lucide-react';
import TextRenderer from '@/components/ui/TextRenderer';

const VIDEO_IDS = {
  tour: 'q3-Sk7rSWrs',
  furnishing: 'q3-Sk7rSWrs',
  avatar: 'q3-Sk7rSWrs',
};

const Services = () => {
  const { t } = useLanguage();
  const caps = copy.servicesPage.capabilities;

  const sections = [
    { num: '01', key: 'tour' as const, cap: caps.tour, videoId: VIDEO_IDS.tour, dark: true },
    { num: '02', key: 'furnishing' as const, cap: caps.furnishing, videoId: VIDEO_IDS.furnishing, dark: false },
    { num: '03', key: 'avatar' as const, cap: caps.avatar, videoId: VIDEO_IDS.avatar, dark: true },
  ];

  return (
    <div className="min-h-screen bg-noir text-parchment">
      <Navigation />
      <MobileNav />

      {/* Page intro */}
      <section className="relative min-h-[60vh] flex flex-col justify-end px-8 md:px-16 lg:px-24 pt-40 pb-24 overflow-hidden">
        <GhostNumber number="00" />
        <div className="relative max-w-5xl">
          <SectionLabel number="01" label={t({ en: 'Services', bg: 'Услуги' })} />
          <h1
            className="font-black text-parchment leading-[0.92]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            <TextRenderer>{t(caps.headline)}</TextRenderer>
          </h1>
          <p className="mt-6 text-parchment-dim text-lg max-w-2xl leading-relaxed">
            <TextRenderer>{t(caps.intro)}</TextRenderer>
          </p>
        </div>
      </section>

      {/* Capability sections */}
      {sections.map((s, i) => (
        <section
          key={s.key}
          className={`py-32 px-8 md:px-16 lg:px-24 ${s.dark ? 'bg-noir-surface' : 'bg-noir'}`}
        >
          <div className="max-w-6xl mx-auto relative overflow-hidden">
            <GhostNumber number={s.num} />
            <div className={`relative grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              {/* Text */}
              <div className="space-y-6">
                <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold border border-gold/30 px-3 py-1">
                  <TextRenderer>{t(s.cap.badge)}</TextRenderer>
                </span>
                <h2
                  className="font-black text-parchment leading-[0.92]"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
                >
                  <TextRenderer>{t(s.cap.title)}</TextRenderer>
                </h2>
                <p className="text-parchment-dim text-lg leading-relaxed">
                  <TextRenderer>{t(s.cap.description)}</TextRenderer>
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors"
                >
                  {t({ en: 'Get a free sample', bg: 'Безплатна проба' })}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              {/* Video */}
              <YouTubeEmbed videoId={s.videoId} title={s.cap.badge.en} />
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 px-8 bg-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-black text-noir leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            <TextRenderer>{t(copy.servicesPage.closing.title)}</TextRenderer>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-noir/70 hover:text-noir transition-colors font-semibold"
          >
            <TextRenderer>{t(copy.servicesPage.closing.cta)}</TextRenderer>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
