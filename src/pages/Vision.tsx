import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
import logo from '@/assets/estatevision-logo.png';
import MobileNav from '@/components/MobileNav';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import TextRenderer from '@/components/ui/TextRenderer';

import heroImage from '@/assets/vision-hero.jpg';
import beginningImage from '@/assets/vision-beginning.jpg';
import transformationImage from '@/assets/vision-transformation.jpg';
import purposeImage from '@/assets/vision-purpose.jpg';
import quoteBackground from '@/assets/vision-quote-bg.jpg';

const Vision = () => {
  const isVisible = useScrollVisibility();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Logo - Fixed Top Left */}
      <Link 
        to="/" 
        className={cn(
          "fixed top-6 left-20 lg:left-6 z-50 transition-all duration-300",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
        <img src={logo} alt="EstateVisio" className="h-10 w-auto" />
      </Link>

      {/* Navigation Bar */}
      <Navigation />
      
      {/* Language Switcher - Fixed Top Right */}
      <div 
        className={cn(
          "fixed top-6 right-6 z-50 transition-all duration-300 hidden lg:block",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        )}
      >
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Vision Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold cinematic-text">
            <span><TextRenderer>{t(copy.visionPage.hero.title)}</TextRenderer></span>
          </h1>
          <p className="text-2xl md:text-3xl text-cloud-white/90 max-w-3xl mx-auto leading-relaxed">
            <TextRenderer>{t(copy.visionPage.hero.subtitle)}</TextRenderer>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Cinematic Intro Section */}
      <section className="relative bg-charcoal">
        {/* Seamless gradient transition from hero */}
        <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-charcoal/0 via-charcoal/60 to-charcoal pointer-events-none" />

        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
          {/* Thin gold divider (40% opacity) */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

          {/* Title */}
          <h2
            className="mt-10 text-3xl md:text-4xl lg:text-5xl font-bold text-gold cinematic-text animate-fade-in-up motion-reduce:animate-none"
            style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
          >
            <TextRenderer>{t(copy.visionPage.cinematicIntro.title)}</TextRenderer>
          </h2>

          {/* Emotional lines */}
          <div className="mt-8 space-y-3">
            <p
              className="text-xl md:text-2xl text-cloud-white leading-relaxed animate-fade-in-up motion-reduce:animate-none"
              style={{ animationDelay: '0.25s', animationFillMode: 'backwards' }}
            >
              <TextRenderer>{t(copy.visionPage.cinematicIntro.line1)}</TextRenderer>
            </p>
            <p
              className="text-xl md:text-2xl text-cloud-white leading-relaxed animate-fade-in-up motion-reduce:animate-none"
              style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
            >
              <TextRenderer>{t(copy.visionPage.cinematicIntro.line2)}</TextRenderer>
            </p>
          </div>

          {/* Gold chevron scroll cue */}
          <div
            className="mt-16 flex justify-center animate-[float_3s_ease-in-out_infinite] motion-reduce:animate-none"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8 text-gold opacity-80"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 space-y-32">
          {/* Block 1 - The Beginning (Image Left, Text Right) */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
            <div className="order-2 md:order-1">
              <img
                src={beginningImage}
                alt="The Beginning"
                className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gold cinematic-text">
                <TextRenderer>{t(copy.visionPage.story1.title)}</TextRenderer>
              </h2>
              <p className="text-xl text-cloud-white/90 leading-relaxed">
                <TextRenderer>{t(copy.visionPage.story1.description)}</TextRenderer>
              </p>
            </div>
          </div>

          {/* Block 2 - The Transformation (Text Left, Image Right) */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gold cinematic-text">
                <TextRenderer>{t(copy.visionPage.story2.title)}</TextRenderer>
              </h2>
              <p className="text-xl text-cloud-white/90 leading-relaxed">
                <TextRenderer>{t(copy.visionPage.story2.description)}</TextRenderer>
              </p>
            </div>
            <div>
              <img
                src={transformationImage}
                alt="The Transformation"
                className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
              />
            </div>
          </div>

          {/* Block 3 - The Purpose (Image Left, Text Right) */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
            <div className="order-2 md:order-1">
              <img
                src={purposeImage}
                alt="The Purpose"
                className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gold cinematic-text">
                <TextRenderer>{t(copy.visionPage.story3.title)}</TextRenderer>
              </h2>
              <p className="text-xl text-cloud-white/90 leading-relaxed">
                <TextRenderer>{t(copy.visionPage.story3.description)}</TextRenderer>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Statement Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={quoteBackground}
            alt="Quote Background"
            className="w-full h-full object-cover blur-md scale-110"
          />
          <div className="absolute inset-0 bg-charcoal/70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <blockquote className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold cinematic-text leading-relaxed">
              <TextRenderer>{t(copy.visionPage.quote.text)}</TextRenderer>
            </p>
          </blockquote>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-charcoal/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gold cinematic-text">
              <TextRenderer>{t(copy.visionPage.cta.title)}</TextRenderer>
            </h2>
            <p className="text-xl md:text-2xl text-cloud-white/90 leading-relaxed">
              <TextRenderer>{t(copy.visionPage.cta.description)}</TextRenderer>
            </p>

            <div className="pt-8">
              <Link to="/services">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 shadow-gold hover:shadow-elegant transition-smooth bg-gold hover:bg-gold/90 text-charcoal font-semibold"
                >
                  <TextRenderer>{t(copy.visionPage.cta.button)}</TextRenderer>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
