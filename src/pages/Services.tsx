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
