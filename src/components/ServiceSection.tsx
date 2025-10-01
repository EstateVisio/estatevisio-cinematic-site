import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Sparkles, TrendingUp, Shield } from 'lucide-react';

const ServiceSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Video,
      title: { en: 'Your listings, reimagined', bg: 'Вашите обяви, преосмислени' },
      description: {
        en: 'From static photos to immersive video experiences.',
        bg: 'От статични снимки до потапящи видео изживявания.',
      },
    },
    {
      icon: Sparkles,
      title: { en: 'Cinematic spotlight', bg: 'Кинематографичен фокус' },
      description: {
        en: 'Every property deserves the cinematic spotlight.',
        bg: 'Всеки имот заслужава кинематографичен фокус.',
      },
    },
    {
      icon: TrendingUp,
      title: { en: 'Quality at scale', bg: 'Качество в мащаб' },
      description: {
        en: 'Consistency and quality you can trust at scale.',
        bg: 'Последователност и качество, на които може да се разчита – във всеки мащаб.',
      },
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-cloud mb-6">
            {t({
              en: 'AI-Powered Cinematic Tours',
              bg: 'AI кинематографични турове',
            })}
          </h2>
          <p className="text-xl text-warm-sand max-w-3xl mx-auto">
            {t({
              en: 'Your flagship service for transforming properties into unforgettable experiences.',
              bg: 'Нашата водеща услуга за трансформиране на имоти в незабравими изживявания.',
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-gold/20 hover:border-gold/40 transition-smooth hover:shadow-gold animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                    <Icon className="h-8 w-8 text-charcoal" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-cloud">
                    {t(feature.title)}
                  </h3>
                  
                  <p className="text-cloud-white/80 text-lg">
                    {t(feature.description)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
