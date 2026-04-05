import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import { ArrowRight } from 'lucide-react';
import TextRenderer from '@/components/ui/TextRenderer';

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

  return (
    <div className="min-h-screen bg-noir text-parchment">
      <Navigation />
      <MobileNav />

      {/* Header */}
      <section className="px-8 md:px-16 lg:px-24 pt-40 pb-24">
        <div className="max-w-5xl">
          <SectionLabel number="01" label={t({ en: 'Our Work', bg: 'Нашите работи' })} />
          <h1
            className="font-black text-parchment leading-[0.92]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            <TextRenderer>{t(copy.galleryPage.headline)}</TextRenderer>
          </h1>
          <div className="w-24 h-px bg-gold mt-8" />
        </div>
      </section>

      {/* Video Grid */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12">
          {videos.map((video, index) => (
            <div key={index} className="space-y-4">
              <YouTubeEmbed
                videoId={video.id}
                title={copy.galleryPage.videos[video.labelKey].en}
              />
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.3em] uppercase text-gold border border-gold/30 px-3 py-1">
                  {video.badge[language]}
                </span>
                <p className="text-parchment-dim text-xs tracking-wide">
                  {copy.galleryPage.videos[video.labelKey][language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-8 bg-noir-surface">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2
            className="font-black text-parchment leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {t({ en: 'Want us to make one for you?', bg: 'Искате ли да направим едно за вас?' })}
          </h2>
          <p className="text-parchment-dim">
            {t({ en: 'Send us photos of any property — your first video is free.', bg: 'Изпратете ни снимки на имот — първото видео е безплатно.' })}
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-gold/70 hover:text-gold transition-colors"
          >
            {t({ en: 'Get in touch', bg: 'Свържете се с нас' })}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
