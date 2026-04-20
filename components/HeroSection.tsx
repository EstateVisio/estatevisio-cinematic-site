'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import TextRenderer from '@/components/ui/TextRenderer';
import { copy } from '@/config/copy';
import Image from 'next/image';
import React from 'react';

interface HeroSectionProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ aboutRef }) => {
  const { t } = useLanguage();

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-property.jpg"
          alt="Luxury property"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/20" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 z-10 flex justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-10 bg-gradient-to-b from-cloud-white to-transparent" />
        </div>
      </div>

      {/* Content — editorial bottom-left */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 lg:px-20 pb-16 lg:pb-24">
        {/* Large display headline */}
        <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.92] font-light tracking-tight text-cloud-white mb-8 animate-fade-in">
          <TextRenderer>{t(copy.hero.title)}</TextRenderer>
        </h1>

        {/* Tagline */}
        <p
          className="text-cloud-white/60 text-2xl lg:text-3xl leading-relaxed max-w-lg animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <TextRenderer>{t(copy.hero.subtitle)}</TextRenderer>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
