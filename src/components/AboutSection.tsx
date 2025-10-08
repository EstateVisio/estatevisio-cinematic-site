import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@/assets/about-architecture.jpg';
import { copy } from '@/config/copy';
import React, { forwardRef } from 'react';

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-24 bg-charcoal">
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
              {t(copy.about.title)}
            </h2>
            
            <p className="text-lg md:text-xl text-cloud-white/90 leading-relaxed">
              {t(copy.about.description)}
            </p>

            <div className="pt-4 border-t border-gold/20">
              <p className="text-gold font-semibold text-lg">
                {t(copy.about.tagline)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
