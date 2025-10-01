import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const RoadmapContent = () => {
  const { t } = useLanguage();

  const roadmapPhases = [
    {
      phase: { en: 'Phase 1: Foundation', bg: 'Фаза 1: Основа' },
      status: 'completed',
      items: [
        { en: 'AI-powered cinematic tour generation', bg: 'AI кинематографични турове' },
        { en: 'Core video processing engine', bg: 'Основен видео процесор' },
        { en: 'Quality assurance system', bg: 'Система за контрол на качеството' },
      ],
    },
    {
      phase: { en: 'Phase 2: Enhancement', bg: 'Фаза 2: Подобрения' },
      status: 'in-progress',
      items: [
        { en: 'Advanced customization options', bg: 'Разширени опции за персонализация' },
        { en: 'Multi-language voice-over support', bg: 'Многоезична озвучена поддръжка' },
        { en: 'Brand integration tools', bg: 'Инструменти за интеграция на брандове' },
      ],
    },
    {
      phase: { en: 'Phase 3: Intelligence', bg: 'Фаза 3: Интелигентност' },
      status: 'planned',
      items: [
        { en: 'Property insights & analytics', bg: 'Анализи и прозрения за имоти' },
        { en: 'Market trend prediction', bg: 'Прогнозиране на пазарни тенденции' },
        { en: 'Automated property valuation', bg: 'Автоматизирана оценка на имоти' },
      ],
    },
    {
      phase: { en: 'Phase 4: Expansion', bg: 'Фаза 4: Разширяване' },
      status: 'planned',
      items: [
        { en: 'Virtual staging capabilities', bg: 'Виртуални инсценировки' },
        { en: '3D property reconstruction', bg: '3D реконструкция на имоти' },
        { en: 'AR/VR integration', bg: 'AR/VR интеграция' },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-fresh-green" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-gold" />;
      default:
        return <Circle className="h-6 w-6 text-slate" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return t({ en: 'Completed', bg: 'Завършено' });
      case 'in-progress':
        return t({ en: 'In Progress', bg: 'В процес' });
      default:
        return t({ en: 'Planned', bg: 'Планирано' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6 cinematic-text">
            {t({
              en: 'Our Roadmap',
              bg: 'Нашата пътна карта',
            })}
          </h1>
          <p className="text-xl text-cloud-white/80 max-w-3xl mx-auto">
            {t({
              en: 'Building the future of real estate, one milestone at a time.',
              bg: 'Изграждаме бъдещето на недвижимите имоти, стъпка по стъпка.',
            })}
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {roadmapPhases.map((phase, index) => (
            <Card
              key={index}
              className="bg-card border-gold/20 hover:border-gold/40 transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Status Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <h3 className="text-2xl font-bold text-cloud">
                        {t(phase.phase)}
                      </h3>
                      <span
                        className={cn(
                          'px-4 py-1 rounded-full text-sm font-medium',
                          phase.status === 'completed' && 'bg-fresh-green/20 text-fresh-green',
                          phase.status === 'in-progress' && 'bg-gold/20 text-gold',
                          phase.status === 'planned' && 'bg-slate/20 text-slate'
                        )}
                      >
                        {getStatusLabel(phase.status)}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-cloud-white/80"
                        >
                          <span className="text-gold mt-1">•</span>
                          <span>{t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-block px-8 py-4 bg-gold/10 border border-gold/30 rounded-2xl">
            <p className="text-gold text-lg">
              {t({
                en: 'Stay tuned for more innovations',
                bg: 'Очаквайте още иновации',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-charcoal">
        <Navigation />
        <div className="fixed top-6 right-6 z-50">
          <LanguageSwitcher />
        </div>
        <RoadmapContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Roadmap;
