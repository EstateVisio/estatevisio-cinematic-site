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
