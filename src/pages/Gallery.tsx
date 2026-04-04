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
