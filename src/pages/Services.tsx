import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, Sparkles, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
import MobileNav from '@/components/MobileNav';
import logo from '@/assets/estatevision-logo.png';
import { copy } from '@/config/copy';

const Services = () => {
  const { t } = useLanguage();
  const isVisible = useScrollVisibility();

  return (
    <div className="min-h-screen bg-cloud">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Logo - Fixed Top Left (Desktop) or Center (Mobile) */}
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

      {/* Introduction Section */}
      <section className="pt-32 pb-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6">
              {t(copy.servicesPage.title)}
            </h1>
            <div className="inline-block">
              <p className="text-xl md:text-2xl text-cloud leading-relaxed pb-2">
                {t(copy.servicesPage.intro)}
              </p>
              <div className="h-1 bg-gradient-gold rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Step 1 - Sending the Photos */}
      <section className="py-24 bg-warm-sand/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Visual */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
                <div className="relative space-y-4">
                  {/* Staggered photo placeholders */}
                  <div className="relative">
                    <div className="w-64 h-48 bg-gradient-to-br from-gold/20 to-terracotta/20 rounded-xl shadow-elegant transform rotate-3 transition-transform hover:rotate-6">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Upload className="h-12 w-12 text-gold/50" />
                      </div>
                    </div>
                    <div className="w-64 h-48 bg-gradient-to-br from-terracotta/20 to-gold/20 rounded-xl shadow-elegant absolute top-8 left-16 transform -rotate-2 transition-transform hover:rotate-0">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Upload className="h-12 w-12 text-terracotta/50" />
                      </div>
                    </div>
                    <div className="w-64 h-48 bg-gradient-to-br from-warm-sand to-gold/20 rounded-xl shadow-elegant absolute top-16 left-32 transform rotate-1 transition-transform hover:-rotate-2">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Upload className="h-12 w-12 text-gold/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-gold/20 border border-gold/40 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal font-bold">
                    1
                  </div>
                  <span className="text-charcoal font-semibold">
                    {t(copy.servicesPage.steps.one)}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
                  {t(copy.servicesPage.step1.title)}
                </h2>

                <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
                  {t(copy.servicesPage.step1.description)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 - Evaluation & Processing */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 animate-fade-in-up order-2 md:order-1">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-estate-teal/20 border border-estate-teal/40 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-estate-teal flex items-center justify-center text-charcoal font-bold">
                    2
                  </div>
                  <span className="text-estate-teal font-semibold">
                    {t(copy.servicesPage.steps.two)}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-cloud">
                  {t(copy.servicesPage.step2.title)}
                </h2>

                <p className="text-lg md:text-xl text-cloud-white/80 leading-relaxed">
                  {t(copy.servicesPage.step2.description)}
                </p>
              </div>

              {/* Visual */}
              <div className="relative animate-fade-in-up order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-estate-teal/20 rounded-full blur-3xl" />
                <div className="relative p-8 bg-gradient-to-br from-estate-teal/10 to-sky-blue/10 rounded-2xl border border-estate-teal/30">
                  <div className="space-y-4">
                    <Sparkles className="h-16 w-16 text-estate-teal animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-3 bg-estate-teal/30 rounded-full w-full animate-pulse" />
                      <div className="h-3 bg-estate-teal/30 rounded-full w-4/5 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="h-3 bg-estate-teal/30 rounded-full w-3/5 animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <div className="pt-4 text-sm text-cloud-white/60 font-mono">
                      {t(copy.servicesPage.step2.aiProcessing)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 - The Cinematic Video */}
      <section className="py-20 bg-warm-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-terracotta/20 border border-terracotta/40 rounded-full">
                <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-cloud font-bold">
                  3
                </div>
                <span className="text-charcoal font-semibold">
                  {t(copy.servicesPage.steps.three)}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
                {t(copy.servicesPage.step3.title)}
              </h2>

              <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                {t(copy.servicesPage.step3.description)}
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl" />
              <div className="relative aspect-video bg-gradient-to-br from-charcoal to-charcoal/80 rounded-2xl border-4 border-gold shadow-gold overflow-hidden group cursor-pointer transition-all hover:scale-105 hover:shadow-glow">
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                  <Film className="h-20 w-20 text-gold group-hover:scale-110 transition-transform" />
                  <p className="text-cloud text-lg font-semibold">
                    {t(copy.servicesPage.step3.videoLabel)}
                  </p>
                  <div className="text-cloud-white/60 text-sm">16:9 • 30 seconds</div>
                </div>
                {/* Cinematic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-gradient-to-b from-warm-sand to-gold/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              {t(copy.servicesPage.closing.title)}
            </h2>

            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
              {t(copy.servicesPage.closing.subtitle)}
            </p>

            <div className="pt-8">
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-charcoal hover:bg-charcoal/90 text-gold font-bold shadow-elegant hover:scale-105 transition-all"
                asChild
              >
                <Link to="/contact">
                  {t(copy.servicesPage.closing.cta)}
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
