import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Sparkles, TrendingUp } from 'lucide-react';
import { copy } from '@/config/copy';

const ServiceSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Video, ...copy.service.features.reimagined },
    { icon: Sparkles, ...copy.service.features.spotlight },
    { icon: TrendingUp, ...copy.service.features.scale },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-cloud mb-6">
            {t(copy.service.title)}
          </h2>
          <p className="text-xl text-warm-sand max-w-3xl mx-auto">
            {t(copy.service.subtitle)}
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
