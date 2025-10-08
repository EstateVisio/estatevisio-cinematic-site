import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gold cinematic-text">
              {t(copy.video.title)}
            </h2>
            <p className="text-xl text-cloud-white/80 max-w-3xl mx-auto">
              {t(copy.video.subtitle)}
            </p>
          </div>

          <div className="relative animate-scale-in">
            {/* Top-left corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold z-10" />
            
            {/* Bottom-right corner accent */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold z-10" />
            
            <div className="relative rounded-xl overflow-hidden shadow-elegant" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/q3-Sk7rSWrs"
                title="EstateVisio Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block">
              <p className="text-center text-gold text-2xl md:text-3xl font-semibold italic leading-relaxed">
                {t(copy.video.caption)}
              </p>
              <div className="w-[70%] h-0.5 bg-gold mt-4 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
