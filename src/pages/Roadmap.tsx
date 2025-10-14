import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import SceneSection from '@/components/roadmap/SceneSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Lightbulb, Rocket, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
import MobileNav from '@/components/MobileNav';
import logo from '@/assets/estatevision-logo.png';
import visionImage from '@/assets/roadmap-vision.jpg';
import presentImage from '@/assets/roadmap-present.jpg';
import futureImage from '@/assets/roadmap-future.jpg';
import horizonImage from '@/assets/roadmap-horizon.jpg';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';

const RoadmapContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Scene 1: Introduction - The Journey Begins */}
      <SceneSection backgroundImage={visionImage} parallax overlay="heavy">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/20 border border-gold/40 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="text-gold font-semibold">
                <TextRenderer>{t(copy.roadmap.scene1.badge)}</TextRenderer>
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cloud cinematic-text leading-tight">
              <TextRenderer>{t(copy.roadmap.scene1.title)}</TextRenderer>
            </h1>

            <p className="text-xl md:text-2xl text-warm-sand leading-relaxed">
              <TextRenderer>{t(copy.roadmap.scene1.description)}</TextRenderer>
            </p>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce">
              <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2 mx-auto">
                <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </SceneSection>

      {/* Scene 2: Present - Where We Are Today */}
      <SceneSection backgroundImage={presentImage} parallax overlay="medium">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-fresh-green/20 border border-fresh-green/40 rounded-full">
                  <div className="w-2 h-2 bg-fresh-green rounded-full animate-pulse" />
                  <span className="text-fresh-green font-semibold text-sm">
                    {t(copy.roadmap.scene2.badge)}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gold cinematic-text">
                  <TextRenderer>{t(copy.roadmap.scene2.title)}</TextRenderer>
                </h2>

                <p className="text-lg md:text-xl text-cloud-white leading-relaxed">
                  <TextRenderer>{t(copy.roadmap.scene2.description)}</TextRenderer>
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="p-6 bg-card/80 backdrop-blur-sm border border-gold/20 rounded-xl hover:border-gold/40 transition-smooth">
                  <h3 className="text-xl font-bold text-cloud mb-2">
                    <TextRenderer>{t(copy.roadmap.scene2.features.quality.title)}</TextRenderer>
                  </h3>
                  <p className="text-cloud-white/80">
                    <TextRenderer>{t(copy.roadmap.scene2.features.quality.description)}</TextRenderer>
                  </p>
                </div>

                <div className="p-6 bg-card/80 backdrop-blur-sm border border-gold/20 rounded-xl hover:border-gold/40 transition-smooth">
                  <h3 className="text-xl font-bold text-cloud mb-2">
                    <TextRenderer>{t(copy.roadmap.scene2.features.speed.title)}</TextRenderer>
                  </h3>
                  <p className="text-cloud-white/80">
                    <TextRenderer>{t(copy.roadmap.scene2.features.speed.description)}</TextRenderer>
                  </p>
                </div>

                <div className="p-6 bg-card/80 backdrop-blur-sm border border-gold/20 rounded-xl hover:border-gold/40 transition-smooth">
                  <h3 className="text-xl font-bold text-cloud mb-2">
                    <TextRenderer>{t(copy.roadmap.scene2.features.scale.title)}</TextRenderer>
                  </h3>
                  <p className="text-cloud-white/80">
                    <TextRenderer>{t(copy.roadmap.scene2.features.scale.description)}</TextRenderer>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SceneSection>

      {/* Scene 3: Near Future - Expanding Horizons */}
      <SceneSection backgroundImage={futureImage} parallax overlay="medium" id="expanding-horizons">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-blue/20 border border-sky-blue/40 rounded-full animate-fade-in">
              <TrendingUp className="h-5 w-5 text-sky-blue" />
              <span className="text-sky-blue font-semibold">
                <TextRenderer>{t(copy.roadmap.scene3.badge)}</TextRenderer>
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold cinematic-text animate-fade-in-up">
              <TextRenderer>{t(copy.roadmap.scene3.title)}</TextRenderer>
            </h2>

            <p className="text-xl md:text-2xl text-cloud-white leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <TextRenderer>{t(copy.roadmap.scene3.description)}</TextRenderer>
            </p>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Lightbulb className="h-10 w-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-cloud mb-2">
                  <TextRenderer>{t(copy.roadmap.scene3.features.insights.title)}</TextRenderer>
                </h3>
                <p className="text-cloud-white/70 text-sm">
                  <TextRenderer>{t(copy.roadmap.scene3.features.insights.description)}</TextRenderer>
                </p>
              </div>

              <div className="p-6 bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Rocket className="h-10 w-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-cloud mb-2">
                  <TextRenderer>{t(copy.roadmap.scene3.features.automation.title)}</TextRenderer>
                </h3>
                <p className="text-cloud-white/70 text-sm">
                  <TextRenderer>{t(copy.roadmap.scene3.features.automation.description)}</TextRenderer>
                </p>
              </div>

              <div className="p-6 bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Zap className="h-10 w-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-cloud mb-2">
                  <TextRenderer>{t(copy.roadmap.scene3.features.lightningFast.title)}</TextRenderer>
                </h3>
                <p className="text-cloud-white/70 text-sm">
                  <TextRenderer>{t(copy.roadmap.scene3.features.lightningFast.description)}</TextRenderer>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SceneSection>

      {/* Scene 4: The Horizon - The Future of Real Estate */}
      <SceneSection backgroundImage={horizonImage} parallax overlay="heavy">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-estate-teal/20 border border-estate-teal/40 rounded-full">
              <span className="text-estate-teal font-semibold">
                <TextRenderer>{t(copy.roadmap.scene4.badge)}</TextRenderer>
              </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold cinematic-text leading-tight">
                <TextRenderer>{t(copy.roadmap.scene4.title)}</TextRenderer>
              </h2>

              <p className="text-xl md:text-2xl text-cloud-white leading-relaxed max-w-3xl mx-auto">
                <TextRenderer>{t(copy.roadmap.scene4.description)}</TextRenderer>
              </p>
            </div>

            {/* Vision Statement */}
            <div className="relative p-8 md:p-12 bg-gradient-gold rounded-2xl shadow-gold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1),transparent)] rounded-2xl" />
              <div className="relative text-center">
                <p className="text-3xl md:text-4xl font-bold text-cloud italic">
                  <TextRenderer>{t(copy.roadmap.scene4.quote)}</TextRenderer>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SceneSection>

      {/* Scene 5: Closing CTA - Join the Journey */}
      <SceneSection className="bg-gradient-to-b from-charcoal to-charcoal/95" overlay="light">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold cinematic-text animate-fade-in-up">
              <TextRenderer>{t(copy.roadmap.scene5.title)}</TextRenderer>
            </h2>

            <p className="text-xl md:text-2xl text-cloud-white leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <TextRenderer>{t(copy.roadmap.scene5.description)}</TextRenderer>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-gold hover:bg-gold/90 text-charcoal font-bold shadow-gold animate-glow transition-smooth"
              >
                <TextRenderer>{t(copy.roadmap.scene5.cta)}</TextRenderer>
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>

            {/* Decorative Element */}
            <div className="pt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-1 h-24 bg-gradient-to-b from-gold to-transparent mx-auto" />
            </div>
          </div>
        </div>
      </SceneSection>
    </div>
  );
};

const Roadmap = () => {
  const isVisible = useScrollVisibility();

  return (
    <div className="min-h-screen bg-charcoal">
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
        <RoadmapContent />
        <Footer />
      </div>
  );
};

export default Roadmap;
