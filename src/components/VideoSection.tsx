import { useLanguage } from '@/contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gold cinematic-text">
              {t({
                en: 'See It In Action',
                bg: 'Вижте го в действие',
              })}
            </h2>
            <p className="text-xl text-cloud-white/80 max-w-3xl mx-auto">
              {t({
                en: 'Experience the future of real estate visualization',
                bg: 'Изживейте бъдещето на визуализацията на недвижими имоти',
              })}
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
              {t({
                en: 'Your browser does not support the video tag.',
                bg: 'Вашият браузър не поддържа видео тага.',
              })}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
