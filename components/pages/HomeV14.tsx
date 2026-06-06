'use client';

/**
 * HomeV14: Phone in statement section (replaces body text, plays video)
 *           Calculator after stats strip (late, bottom-of-funnel)
 *
 * Flow: Hero → Phone+Statement → Services → Stats → Calculator → CTA
 */

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import PhoneMockup from '@/components/PhoneMockup';
import SavingsCalculatorV5 from '@/components/calculator/SavingsCalculatorV5';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.9s ease-out ${delay}s, transform 0.9s ease-out ${delay}s` }}>
      {children}
    </div>
  );
}

const SERVICE_META = [
  { id: '01', image: '/images/gallery-tour-bg.jpg', href: '/gallery#scene-01', copy: 'service1' as const },
  { id: '02', image: '/images/about-architecture.jpg', href: '/gallery#scene-02', copy: 'service2' as const },
];

export default function HomeV14() {
  const { t } = useLanguage();
  const statementRef = useRef<HTMLDivElement>(null);
  const { ref: phoneRef, inView: phoneInView } = useInView<HTMLDivElement>();
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>();

  const SERVICES = SERVICE_META.map((s) => ({ ...s, title: t(copy.homePage[s.copy].title), location: t(copy.homePage[s.copy].location), description: t(copy.homePage[s.copy].description) }));
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

      {/* 2. Statement + Phone: phone replaces body text on desktop */}
      <section ref={statementRef} className="relative overflow-hidden">
        <img src="/images/home-statement-bg.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-8 lg:px-20 flex items-center" style={{ minHeight: '820px' }}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24 items-center py-24 lg:py-0">
            <Reveal>
              <h2 className="font-display text-[clamp(3.5rem,9vw,11rem)] leading-[0.9] font-light italic text-cloud-white">
                {t(copy.homePage.statement.line1)}<br />{t(copy.homePage.statement.line2)}
              </h2>
              <div className="mt-8 lg:hidden">
                <div className="hidden" />
                <p className="text-cloud-white/50 text-lg leading-relaxed">{t(copy.homePage.statement.body)}</p>
              </div>
            </Reveal>

            <div ref={phoneRef} className="flex justify-center" style={{ opacity: phoneInView ? 1 : 0, transform: phoneInView ? 'translateY(0)' : 'translateY(48px)', transition: 'opacity 1.1s ease-out 0.15s, transform 1.1s cubic-bezier(0.23,1,0.32,1) 0.15s' }}>
              <PhoneMockup width={300} videoSrc="/videos/property-tour.mp4" />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="relative flex items-center justify-center bg-charcoal">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="mx-4 w-2 h-2 rotate-45 border border-gold/35 bg-charcoal flex-shrink-0" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/25 to-transparent" />
      </div>

      {/* 3. Services panels */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08} className="relative h-[460px] lg:h-[70vh] overflow-hidden group cursor-pointer">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/35 to-charcoal/5" />
              <Link href={service.href} className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10">
                <span className="font-display text-[6rem] leading-none text-cloud-white/6 font-light select-none">{service.id}</span>
                <div>
                  <p className="text-cloud-white/75 text-xs tracking-[0.2em] uppercase mb-3 [text-shadow:0_1px_8px_rgba(0,0,0,1)]">{service.location}</p>
                  <h3 className="font-display text-[clamp(2.2rem,3vw,4rem)] font-light italic text-cloud-white leading-tight mb-3 [text-shadow:0_2px_16px_rgba(0,0,0,0.9)]">{service.title}</h3>
                  <p className="text-cloud-white/50 text-base leading-relaxed max-w-[32ch] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">{service.description}</p>
                </div>
              </Link>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-colors duration-500 pointer-events-none" />
              {i < SERVICES.length - 1 && <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gold/12 pointer-events-none" />}
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Stats strip */}
      <section className="border-t border-gold/10">
        <div ref={statsRef} className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-gold/10">
          {STATS.map((item, i) => (
            <div key={i} className="py-14 sm:py-16 sm:px-14 first:sm:pl-0 last:sm:pr-0 border-b sm:border-b-0 border-gold/10 last:border-b-0" style={{ opacity: statsInView ? 1 : 0, transform: statsInView ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 0.8s ease-out ${i * 0.13}s, transform 0.8s ease-out ${i * 0.13}s` }}>
              <span className="font-display text-[5rem] lg:text-[6.5rem] leading-none text-gold font-light block">{item.stat}</span>
              <p className="mt-3 text-cloud-white/40 text-sm tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Calculator: late, after stats */}
      <SavingsCalculatorV5 />

      {/* 6. CTA */}
      <CTASection />
      <Footer />
    </div>
  );
}
