import { useLanguage } from '@/contexts/LanguageContext';
import visionImage from '@/assets/vision-future.jpg';
import { copy } from '@/config/copy';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const VisionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={visionImage}
          alt="Future vision"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold cinematic-text">
            {t(copy.vision.title)}
          </h2>
          
          <p className="text-xl md:text-2xl text-cloud-white leading-relaxed">
            {t(copy.vision.description)}
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-gold hover:shadow-elegant transition-smooth bg-gold hover:bg-gold/90 text-charcoal font-semibold"
              onClick={() => window.location.href = '/roadmap#present'}
            >
              {t(copy.vision.badge)}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
