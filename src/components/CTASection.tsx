import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';
import { Link } from 'react-router-dom';

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
            <TextRenderer>{t(copy.cta.title)}</TextRenderer>
          </h2>
          
          <p className="text-xl md:text-2xl text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <TextRenderer>{t(copy.cta.description)}</TextRenderer>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button 
                size="lg"
                className="text-lg px-8 py-6 bg-charcoal hover:bg-charcoal/90 text-cloud shadow-elegant transition-smooth"
              >
                <Mail className="mr-2 h-5 w-5" />
                <TextRenderer>{t(copy.cta.requestDemo)}</TextRenderer>
              </Button>
            </Link>
            
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-charcoal bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-cloud transition-smooth font-semibold"
              >
                <TextRenderer>{t(copy.cta.learnMore)}</TextRenderer>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
