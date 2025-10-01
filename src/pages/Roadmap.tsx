import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import SceneSection from '@/components/roadmap/SceneSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
import logo from '@/assets/estatevision-logo.png';
import visionImage from '@/assets/roadmap-vision.jpg';
import presentImage from '@/assets/roadmap-present.jpg';
import futureImage from '@/assets/roadmap-future.jpg';
import horizonImage from '@/assets/roadmap-horizon.jpg';

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
                {t({ en: 'The Journey Begins', bg: 'Пътешествието започва' })}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cloud cinematic-text leading-tight">
              {t({
                en: 'Every great story starts with a vision.',
                bg: 'Всяка голяма история започва с визия.',
              })}
            </h1>

            <p className="text-xl md:text-2xl text-warm-sand leading-relaxed">
              {t({
                en: 'EstateVisio was founded with a single mission — to redefine how real estate is seen and experienced through the power of AI.',
                bg: 'EstateVisio е създадена с една мисия — да преосмисли как недвижимите имоти се виждат и изживяват чрез силата на изкуствения интелект.',
              })}
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
                    {t({ en: 'NOW LIVE', bg: 'АКТИВНО' })}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gold cinematic-text">
                  {t({
                    en: 'Where We Are Today',
                    bg: 'Къде сме днес',
                  })}
                </h2>

                <p className="text-lg md:text-xl text-cloud-white leading-relaxed">
                  {t({
                    en: 'Today, we bring properties to life with cinematic AI tours. From photos to immersive videos in minutes, EstateVisio helps real estate professionals showcase listings with elegance, clarity, and impact.',
                    bg: 'Днес ние вдъхваме живот на имотите чрез кинематографични AI турове. От снимки до потапящи видеа за минути, EstateVisio помага на професионалистите в недвижимите имоти да представят обявите си с елегантност, яснота и въздействие.',
                  })}
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="p-6 bg-card/80 backdrop-blur-sm border border-gold/20 rounded-xl hover:border-gold/40 transition-smooth">
                  <h3 className="text-xl font-bold text-cloud mb-2">
                    {t({ en: 'Cinematic Quality', bg: 'Кинематографично качество' })}
                  </h3>
                  <p className="text-cloud-white/80">
                    {t({
                      en: 'Professional-grade videos that sell',
                      bg: 'Професионални видеа, които продават',
                    })}
                  </p>
                </div>

                <div className="p-6 bg-card/80 backdrop-blur-sm border border-gold/20 rounded-xl hover:border-gold/40 transition-smooth">
                  <h3 className="text-xl font-bold text-cloud mb-2">
                    {t({ en: 'Lightning Fast', bg: 'Светкавично бързо' })}
                  </h3>
                  <p className="text-cloud-white/80">
                    {t({ en: 'Minutes, not hours', bg: 'Минути, не часове' })}
                  </p>
                </div>

                <div className="p-6 bg-card/80 backdrop-blur-sm border border-gold/20 rounded-xl hover:border-gold/40 transition-smooth">
                  <h3 className="text-xl font-bold text-cloud mb-2">
                    {t({ en: 'Effortless Scale', bg: 'Лесно мащабиране' })}
                  </h3>
                  <p className="text-cloud-white/80">
                    {t({
                      en: 'Consistent quality, unlimited volume',
                      bg: 'Постоянно качество, неограничен обем',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SceneSection>

      {/* Scene 3: Near Future - Expanding Horizons */}
      <SceneSection backgroundImage={futureImage} parallax overlay="medium">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-blue/20 border border-sky-blue/40 rounded-full animate-fade-in">
              <TrendingUp className="h-5 w-5 text-sky-blue" />
              <span className="text-sky-blue font-semibold">
                {t({ en: 'Coming Soon', bg: 'Скоро' })}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold cinematic-text animate-fade-in-up">
              {t({
                en: 'Expanding Horizons',
                bg: 'Разширяване на хоризонтите',
              })}
            </h2>

            <p className="text-xl md:text-2xl text-cloud-white leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t({
                en: 'The next chapter is about giving power back to the storytellers — brokers and property owners. EstateVisio will provide tools that allow anyone to create cinematic videos, marketing content, and immersive presentations with ease. Professional quality, now in your hands.',
                bg: 'Следващата глава е за връщането на силата при разказвачите — брокери и собственици на имоти. EstateVisio ще предостави инструменти, които позволяват на всеки да създава кинематографични видеа, маркетинг съдържание и потапящи презентации с лекота. Професионално качество — вече във вашите ръце.',
              })}
            </p>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Lightbulb className="h-10 w-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-cloud mb-2">
                  {t({ en: 'AI Insights', bg: 'AI Анализи' })}
                </h3>
                <p className="text-cloud-white/70 text-sm">
                  {t({
                    en: 'Smart property analytics',
                    bg: 'Интелигентни имотни анализи',
                  })}
                </p>
              </div>

              <div className="p-6 bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Rocket className="h-10 w-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-cloud mb-2">
                  {t({ en: 'Automation', bg: 'Автоматизация' })}
                </h3>
                <p className="text-cloud-white/70 text-sm">
                  {t({
                    en: 'Marketing on autopilot',
                    bg: 'Маркетинг на автопилот',
                  })}
                </p>
              </div>

              <div className="p-6 bg-charcoal/60 backdrop-blur-sm border border-gold/20 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Sparkles className="h-10 w-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-cloud mb-2">
                  {t({ en: 'Integrations', bg: 'Интеграции' })}
                </h3>
                <p className="text-cloud-white/70 text-sm">
                  {t({
                    en: 'Seamless workflow connections',
                    bg: 'Безпроблемни връзки',
                  })}
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
                  {t({ en: 'The Horizon', bg: 'Хоризонтът' })}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cloud cinematic-text leading-tight">
                {t({
                  en: 'The Future of Real Estate',
                  bg: 'Бъдещето на недвижимите имоти',
                })}
              </h2>

              <p className="text-xl md:text-2xl text-cloud-white leading-relaxed max-w-3xl mx-auto">
                {t({
                  en: 'We imagine a future where AI shapes the entire real estate experience — from first impression to final sale. EstateVisio is building that future today, bringing intelligence, creativity, and trust to every property journey.',
                  bg: 'Представяме си бъдеще, в което AI оформя цялото изживяване с недвижимите имоти — от първото впечатление до финалната сделка. EstateVisio изгражда това бъдеще още днес, като носи интелигентност, креативност и доверие във всяко имотно пътешествие.',
                })}
              </p>
            </div>

            {/* Vision Statement */}
            <div className="relative p-8 md:p-12 bg-gradient-gold rounded-2xl shadow-gold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1),transparent)] rounded-2xl" />
              <blockquote className="relative text-center space-y-4">
                <p className="text-2xl md:text-3xl font-bold text-charcoal italic">
                  {t({
                    en: '"AI is not replacing real estate — it\'s elevating it."',
                    bg: '"AI не заменя недвижимите имоти — издига ги."',
                  })}
                </p>
                <p className="text-charcoal/70 font-medium">— EstateVisio Team</p>
              </blockquote>
            </div>
          </div>
        </div>
      </SceneSection>

      {/* Scene 5: Closing CTA - Join the Journey */}
      <SceneSection className="bg-gradient-to-b from-charcoal to-charcoal/95" overlay="light">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold cinematic-text animate-fade-in-up">
              {t({
                en: 'Join the Journey',
                bg: 'Присъединете се към пътешествието',
              })}
            </h2>

            <p className="text-xl md:text-2xl text-cloud-white leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t({
                en: 'The journey is just beginning. Be part of the future of real estate.',
                bg: 'Пътешествието едва започва. Бъдете част от бъдещето на недвижимите имоти.',
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-gold hover:bg-gold/90 text-charcoal font-bold shadow-gold animate-glow transition-smooth"
              >
                {t({
                  en: 'Join the Journey',
                  bg: 'Присъединете се',
                })}
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
    <LanguageProvider>
      <div className="min-h-screen bg-charcoal">
        {/* Logo - Fixed Top Left */}
        <Link 
          to="/" 
          className={cn(
            "fixed top-6 left-6 z-50 transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          )}
        >
          <img src={logo} alt="EstateVisio" className="h-10 w-auto" />
        </Link>

        <Navigation />
        <div 
          className={cn(
            "fixed top-6 right-6 z-50 transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          )}
        >
          <LanguageSwitcher />
        </div>
        <RoadmapContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Roadmap;
