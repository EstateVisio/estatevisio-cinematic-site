import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Film, CheckCircle } from 'lucide-react';

const DifferentiatorsSection = () => {
  const { t } = useLanguage();

  const differentiators = [
    {
      icon: Zap,
      title: { en: 'Speed & Scale', bg: 'Скорост и мащаб' },
      description: {
        en: 'From photos to video in minutes.',
        bg: 'От снимки до видео за минути.',
      },
    },
    {
      icon: Film,
      title: { en: 'Cinematic Quality', bg: 'Кинематографично качество' },
      description: {
        en: 'Luxury visuals designed to sell.',
        bg: 'Луксозни визии, създадени да продават.',
      },
    },
    {
      icon: CheckCircle,
      title: { en: 'Trust & Reliability', bg: 'Доверие и надеждност' },
      description: {
        en: 'AI guided by human-level quality checks.',
        bg: 'AI, воден от проверки с човешко ниво на качество.',
      },
    },
  ];

  return (
    <section className="py-24 bg-warm-sand/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cloud mb-4 animate-fade-in-up">
            {t({
              en: 'Why EstateVisio',
              bg: 'Защо EstateVisio',
            })}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border-2 border-gold mb-4">
                  <Icon className="h-10 w-10 text-gold" />
                </div>
                
                <h3 className="text-2xl font-bold text-gold">
                  {t(item.title)}
                </h3>
                
                <p className="text-lg text-cloud-white/90">
                  {t(item.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
