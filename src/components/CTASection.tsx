import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 gradient-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.2),transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal animate-fade-in-up">
            {t({
              en: 'Elevate your listings today',
              bg: 'Издигнете вашите обяви още днес',
            })}
          </h2>
          
          <p className="text-xl md:text-2xl text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t({
              en: 'Request a demo and see how EstateVisio can transform the way you market properties.',
              bg: 'Заявете демо и открийте как EstateVisio може да трансформира начина, по който представяте имотите си.',
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-charcoal hover:bg-charcoal/90 text-cloud shadow-elegant transition-smooth"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t({
                en: 'Request a Demo',
                bg: 'Заявете демо',
              })}
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cloud transition-smooth"
            >
              {t({
                en: 'Learn More',
                bg: 'Научете повече',
              })}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
