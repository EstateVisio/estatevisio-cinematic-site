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

          <div className="relative rounded-2xl overflow-hidden shadow-elegant animate-scale-in">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              poster="/placeholder.svg"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              {t(copy.video.videoNotSupported)}
            </video>
          </div>

          <p className="text-center text-gold text-lg md:text-xl font-semibold italic leading-relaxed mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t(copy.video.caption)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
