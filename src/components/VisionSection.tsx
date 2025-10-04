import { useLanguage } from '@/contexts/LanguageContext';
import visionImage from '@/assets/vision-future.jpg';
import { copy } from '@/config/copy';

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
            <div className="inline-block px-8 py-4 border-2 border-gold/30 rounded-full">
              <p className="text-gold font-semibold text-lg">
                {t(copy.vision.badge)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
