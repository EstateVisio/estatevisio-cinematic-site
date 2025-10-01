import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-property.jpg';

const HeroSection = () => {
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
          <span className="text-cloud">
            {t({
              en: 'AI for Real Estate.',
              bg: 'AI за недвижими имоти.',
            })}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-warm-sand mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t({
            en: 'Transform listings into cinematic experiences — and unlock the future of property marketing.',
            bg: 'Превърнете обявите в кинематографични изживявания — и отключете бъдещето на имотния маркетинг.',
          })}
        </p>

        <Button 
          size="lg"
          className="text-lg px-8 py-6 shadow-gold hover:shadow-elegant transition-smooth animate-fade-in-up bg-gold hover:bg-gold/90 text-charcoal font-semibold"
          style={{ animationDelay: '0.4s' }}
        >
          {t({
            en: 'Explore EstateVisio',
            bg: 'Открийте EstateVisio',
          })}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
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
