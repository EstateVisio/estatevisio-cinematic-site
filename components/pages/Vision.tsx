'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';
import { useInView } from '@/hooks/useInView';

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 1s ease-out ${delay}s, transform 1s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function StorySection({
  image,
  number,
  title,
  description,
  align,
}: {
  image: string;
  number: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}) {
  return (
    <section className="relative py-32 lg:py-52 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

      <Reveal
        className={`relative z-10 w-full px-8 lg:px-16 flex items-center gap-12 ${
          align === 'right' ? 'justify-end' : 'justify-start'
        }`}
      >
        {align === 'left' && (
          <span className="hidden lg:block font-display text-[13rem] lg:text-[20rem] leading-none text-gold font-light select-none flex-shrink-0 [text-shadow:0_2px_0_rgba(0,0,0,1),0_0_40px_rgba(0,0,0,1)]">
            {number}
          </span>
        )}
        <div
          className={`max-w-xl space-y-6 py-14 px-12 border-gold/20 ${
            align === 'right' ? 'border-r text-right' : 'border-l'
          }`}
          style={{
            background: align === 'right'
              ? 'linear-gradient(to left, rgba(26,24,22,0.65) 0%, transparent 100%)'
              : 'linear-gradient(to right, rgba(26,24,22,0.65) 0%, transparent 100%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          <h2 className="font-display text-[clamp(2.5rem,4vw,5.5rem)] font-light italic text-cloud-white leading-tight">
            {title}
          </h2>
          <div className={`w-10 h-px bg-gold/30 ${align === 'right' ? 'ml-auto' : ''}`} />
          <p className="text-cloud-white/65 text-[clamp(1.1rem,1.8vw,1.6rem)] leading-relaxed">{description}</p>
        </div>
        {align === 'right' && (
          <span className="hidden lg:block font-display text-[13rem] lg:text-[20rem] leading-none text-gold font-light select-none flex-shrink-0 [text-shadow:0_2px_0_rgba(0,0,0,1),0_0_40px_rgba(0,0,0,1)]">
            {number}
          </span>
        )}
      </Reveal>
    </section>
  );
}

const Vision = () => {
  const { t } = useLanguage();
  const { ref: introRef, inView: introInView } = useInView<HTMLDivElement>();
  const { ref: ctaRef, inView: ctaInView } = useInView<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />
      <Navigation />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/vision-hero.jpg" alt="Vision" fill priority sizes="100vw" className="object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/10" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-8 lg:px-20 pb-20 lg:pb-32">
          <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.92] font-light text-cloud-white animate-fade-in">
            <TextRenderer>{t(copy.visionPage.hero.title)}</TextRenderer>
          </h1>
          <p className="mt-6 text-cloud-white/50 text-xl max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <TextRenderer>{t(copy.visionPage.hero.subtitle)}</TextRenderer>
          </p>
        </div>
      </section>

      {/* Editorial intro */}
      <section className="py-28 lg:py-44 border-t border-gold/10 relative overflow-hidden">
        <Image src="/images/vision-hero.jpg" alt="" fill sizes="100vw" className="object-cover object-center opacity-15" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
        <div ref={introRef} className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20">
          <div
            style={{
              opacity: introInView ? 1 : 0,
              transform: introInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 1s ease-out 0.1s, transform 1s ease-out 0.1s',
            }}
          >
            <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] leading-[0.95] font-light italic text-cloud-white">
              <TextRenderer>{t(copy.visionPage.cinematicIntro.title)}</TextRenderer>
            </h2>
          </div>
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-20 space-y-8 lg:space-y-0">
            <p
              className="text-cloud-white/55 text-2xl lg:text-3xl leading-relaxed"
              style={{
                opacity: introInView ? 1 : 0,
                transform: introInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease-out 0.28s, transform 0.9s ease-out 0.28s',
              }}
            >
              <TextRenderer>{t(copy.visionPage.intro.paragraph1)}</TextRenderer>
            </p>
            <p
              className="text-cloud-white/55 text-2xl lg:text-3xl leading-relaxed"
              style={{
                opacity: introInView ? 1 : 0,
                transform: introInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease-out 0.42s, transform 0.9s ease-out 0.42s',
              }}
            >
              <TextRenderer>{t(copy.visionPage.intro.paragraph2)}</TextRenderer>
            </p>
          </div>
        </div>
      </section>

      {/* Story sections */}
      <StorySection
        image="/images/vision-beginning.jpg"
        number="01"
        align="left"
        title={t(copy.visionPage.story1.title)}
        description={t(copy.visionPage.story1.description)}
      />
      <StorySection
        image="/images/vision-transformation.jpg"
        number="02"
        align="right"
        title={t(copy.visionPage.story2.title)}
        description={t(copy.visionPage.story2.description)}
      />
      <StorySection
        image="/images/vision-purpose.jpg"
        number="03"
        align="left"
        title={t(copy.visionPage.story3.title)}
        description={t(copy.visionPage.story3.description)}
      />

      {/* CTA */}
      <section className="py-32 lg:py-48 relative overflow-hidden">
        <Image src="/images/vision-cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
        <div
          ref={ctaRef}
          className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
          }}
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,7rem)] font-light italic text-cloud-white leading-none mb-6">
            <TextRenderer>{t(copy.visionPage.cta.title)}</TextRenderer>
          </h2>
          <div className="w-12 h-px bg-gold/25 mb-8" />
          <p className="text-cloud-white/45 text-xl max-w-xl mb-12">
            <TextRenderer>{t(copy.visionPage.cta.description)}</TextRenderer>
          </p>
          <Link
            href="/services"
            className="inline-block px-10 py-5 bg-gold text-charcoal text-sm tracking-[0.12em] uppercase font-medium hover:bg-gold/85 transition-colors duration-300"
          >
            <TextRenderer>{t(copy.visionPage.cta.button)}</TextRenderer>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
