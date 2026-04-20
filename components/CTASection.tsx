'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import TextRenderer from '@/components/ui/TextRenderer';
import { copy } from '@/config/copy';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const CTASection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-28 lg:py-44 relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/services-closing-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark overlay — cinematic but legible */}
      <div className="absolute inset-0 bg-charcoal/88" />
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal to-transparent" />

      {/* Vertical gold accent — top */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 flex flex-col items-center text-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
        }}
      >
        {/* Overline */}
        <p className="text-gold/55 text-xs tracking-[0.25em] uppercase mb-7">
          {t(copy.cta.overline)}
        </p>

        {/* Display heading */}
        <h2 className="font-display text-[clamp(2.8rem,5.5vw,7.5rem)] font-light italic text-cloud-white leading-none max-w-4xl">
          <TextRenderer>{t(copy.cta.title)}</TextRenderer>
        </h2>

        {/* Gold ornament */}
        <div className="flex items-center gap-4 mt-10 mb-10">
          <div className="h-px w-16 bg-gold/20" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/40 flex-shrink-0" />
          <div className="h-px w-16 bg-gold/20" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
            <button className="px-10 py-4 bg-gold text-charcoal text-sm tracking-[0.1em] uppercase font-medium hover:bg-gold/85 active:scale-[0.98] transition-all duration-300">
              <TextRenderer>{t(copy.cta.requestDemo)}</TextRenderer>
            </button>
          </Link>
          <Link href="/services" onClick={() => window.scrollTo(0, 0)}>
            <button className="px-10 py-4 border border-gold/30 text-cloud-white/55 text-sm tracking-[0.1em] uppercase hover:border-gold/70 hover:text-cloud-white active:scale-[0.98] transition-all duration-300">
              <TextRenderer>{t(copy.cta.learnMore)}</TextRenderer>
            </button>
          </Link>
        </div>
      </div>

      {/* Vertical gold accent — bottom */}
      <div className="absolute bottom-0 inset-x-0 z-10 flex justify-center pointer-events-none">
        <div className="w-px h-16 bg-gradient-to-t from-transparent via-gold/25 to-transparent" />
      </div>
    </section>
  );
};

export default CTASection;
