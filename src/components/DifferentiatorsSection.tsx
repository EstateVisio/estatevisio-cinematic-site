import { useLanguage } from '@/contexts/LanguageContext';
import TextRenderer from '@/components/ui/TextRenderer';
import { Zap, Film, CheckCircle } from 'lucide-react';
import { copy } from '@/config/copy';

const DifferentiatorsSection = () => {
  const { t } = useLanguage();

  const differentiators = [
    { icon: Zap, ...copy.differentiators.items.speed },
    { icon: Film, ...copy.differentiators.items.quality },
    { icon: CheckCircle, ...copy.differentiators.items.trust },
  ];

  return (
    <section className="py-24 bg-warm-sand/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cloud mb-4 animate-fade-in-up">
            <TextRenderer>{t(copy.differentiators.title)}</TextRenderer>
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
                  <TextRenderer>{t(item.title)}</TextRenderer>
                </h3>
                
                <p className="text-lg text-cloud-white/90">
                  <TextRenderer>{t(item.description)}</TextRenderer>
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
