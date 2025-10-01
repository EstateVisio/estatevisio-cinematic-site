import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@/assets/about-architecture.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant animate-fade-in">
            <img
              src={aboutImage}
              alt="Architecture"
              className="w-full h-[500px] object-cover hover:scale-105 transition-smooth"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gold">
              {t({
                en: 'About EstateVisio',
                bg: 'За EstateVisio',
              })}
            </h2>
            
            <p className="text-lg md:text-xl text-cloud-white/90 leading-relaxed">
              {t({
                en: 'EstateVisio is an AI company devoted to real estate. Our mission is to create intelligent, cinematic, and scalable solutions that elevate the way properties are presented and experienced.',
                bg: 'EstateVisio е AI компания, посветена на недвижимите имоти. Нашата мисия е да създаваме интелигентни, кинематографични и мащабируеми решения, които издигат представянето и възприятието на имотите на ново ниво.',
              })}
            </p>

            <div className="pt-4 border-t border-gold/20">
              <p className="text-gold font-semibold text-lg">
                {t({
                  en: 'Luxury visuals, powered by AI.',
                  bg: 'Луксозни визии, задвижвани от AI.',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
