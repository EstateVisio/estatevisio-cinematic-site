'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import React, { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.9s ease-out ${delay}s, transform 0.9s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const SERVICE_META = [
  { id: '01', image: '/images/gallery-tour-bg.jpg', href: '/gallery#scene-01', copy: 'service1' as const },
  { id: '02', image: '/images/about-architecture.jpg', href: '/gallery#scene-02', copy: 'service2' as const },
];

const Home = () => {
  const { t } = useLanguage();
  const statementRef = useRef<HTMLDivElement>(null);
  const { ref: videoRef, inView: videoInView } = useInView<HTMLDivElement>();
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>();

  const SERVICES = SERVICE_META.map((s) => ({
    ...s,
    title: t(copy.homePage[s.copy].title),
    location: t(copy.homePage[s.copy].location),
    description: t(copy.homePage[s.copy].description),
  }));

  const STATS = [
    { stat: t(copy.homePage.stat1.value), label: t(copy.homePage.stat1.label) },
    { stat: t(copy.homePage.stat2.value), label: t(copy.homePage.stat2.label) },
    { stat: t(copy.homePage.stat3.value), label: t(copy.homePage.stat3.label) },
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />
      <Navigation />

      {/* 1. Hero */}
      <HeroSection aboutRef={statementRef} />

      {/* 2. Editorial statement */}
      <section ref={statementRef} className="py-28 lg:py-44 relative overflow-hidden">
        <Image
          src="/images/home-statement-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal/82" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />

        <Reveal className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16 items-end">
            <h2 className="font-display text-[clamp(3.5rem,9vw,11rem)] leading-[0.9] font-light italic text-cloud-white">
              {t(copy.homePage.statement.line1)}<br />{t(copy.homePage.statement.line2)}
            </h2>
            <div className="hidden lg:block pb-3">
              <div className="w-full h-px bg-gold/40 mb-6" />
              <p className="text-cloud-white/50 text-xl leading-relaxed">
                {t(copy.homePage.statement.body)}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Decorative divider */}
      <div className="relative flex items-center justify-center py-0 bg-charcoal">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="mx-4 w-2 h-2 rotate-45 border border-gold/35 bg-charcoal flex-shrink-0" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/25 to-transparent" />
      </div>

      {/* 3. Services panels */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.id}
              delay={i * 0.08}
              className="relative h-[460px] lg:h-[70vh] overflow-hidden group cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/35 to-charcoal/5" />
              <Link href={service.href} className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10">
                <span className="font-display text-[6rem] leading-none text-cloud-white/6 font-light select-none">
                  {service.id}
                </span>
                <div>
                  <p className="text-cloud-white/75 text-xs tracking-[0.2em] uppercase mb-3 [text-shadow:0_1px_8px_rgba(0,0,0,1)]">{service.location}</p>
                  <h3 className="font-display text-[clamp(2.2rem,3vw,4rem)] font-light italic text-cloud-white leading-tight mb-3 [text-shadow:0_2px_16px_rgba(0,0,0,0.9)]">
                    {service.title}
                  </h3>
                  <p className="text-cloud-white/50 text-base leading-relaxed max-w-[32ch] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    {service.description}
                  </p>
                </div>
              </Link>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-colors duration-500 pointer-events-none" />
              {i < SERVICES.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gold/12 pointer-events-none" />
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Stats strip */}
      <section className="border-t border-gold/10">
        <div
          ref={statsRef}
          className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-gold/10"
        >
          {STATS.map((item, i) => (
            <div
              key={i}
              className="py-14 sm:py-16 sm:px-14 first:sm:pl-0 last:sm:pr-0 border-b sm:border-b-0 border-gold/10 last:border-b-0"
              style={{
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.8s ease-out ${i * 0.13}s, transform 0.8s ease-out ${i * 0.13}s`,
              }}
            >
              <span className="font-display text-[5rem] lg:text-[6.5rem] leading-none text-gold font-light block">
                {item.stat}
              </span>
              <p className="mt-3 text-cloud-white/40 text-sm tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Showcase video — hidden until video is ready */}
      <section className="hidden py-20 lg:py-32 border-t border-gold/10">
        <div
          ref={videoRef}
          className="max-w-[1400px] mx-auto px-8 lg:px-20"
          style={{
            opacity: videoInView ? 1 : 0,
            transform: videoInView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
          }}
        >
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-[clamp(2.2rem,5vw,6rem)] font-light italic text-cloud-white leading-none">
              See for yourself.
            </h2>
            <Link
              href="/gallery"
              className="hidden sm:inline-block text-sm tracking-[0.1em] uppercase text-gold/55 hover:text-gold transition-colors duration-300 border-b border-gold/20 hover:border-gold/55 pb-0.5 mb-1"
            >
              Full gallery →
            </Link>
          </div>
          <div
            className="h-px bg-gold/18 mb-10 origin-left"
            style={{
              transform: videoInView ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 1s cubic-bezier(0.77, 0, 0.175, 1) 0.15s',
            }}
          />
          <div className="relative aspect-video overflow-hidden group cursor-pointer border border-gold/12 hover:border-gold/30 transition-colors duration-500 bg-charcoal/50">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500 backdrop-blur-sm">
                <Play className="h-6 w-6 text-gold ml-1" />
              </div>
            </div>
            <p className="absolute bottom-6 left-6 text-cloud-white/40 text-xs tracking-[0.18em] uppercase">
              Property tour · Sofia
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Home;
