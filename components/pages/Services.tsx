'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import Image from 'next/image';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';
import { useInView } from '@/hooks/useInView';

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      {children}
    </div>
  );
}

const Services = () => {
  const { t, language } = useLanguage();
  const { ref: includedRef, inView: includedInView } = useInView<HTMLDivElement>();
  const { ref: closingRef, inView: closingInView } = useInView<HTMLDivElement>();

  const steps = [
    {
      id: '01',
      title: copy.servicesPage.step1.title,
      description: copy.servicesPage.step1.description,
      bg: '/images/services-step1-bg.jpg',
      align: 'left' as const,
    },
    {
      id: '02',
      title: copy.servicesPage.step2.title,
      description: copy.servicesPage.step2.description,
      bg: '/images/services-step2-bg.jpg',
      align: 'right' as const,
    },
    {
      id: '03',
      title: copy.servicesPage.step3.title,
      description: copy.servicesPage.step3.description,
      bg: '/images/services-step3-bg.jpg',
      align: 'left' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />
      <Navigation />

      {/* Page header */}
      <section className="pt-40 pb-16 px-8 lg:px-20 text-center">
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-none font-light text-cloud-white animate-fade-in">
          How it <span className="text-gold italic">works.</span>
        </h1>
        <div className="mt-8 h-px bg-gold/20 max-w-[1400px] mx-auto" />
      </section>

      {steps.map((step) => (
        <section key={step.id} className="py-24 lg:py-40 border-t border-gold/10 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src={step.bg} alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-charcoal/48" />
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-charcoal to-transparent" />

          <Reveal className="relative z-10 w-full px-8 lg:px-16">
            <div className={`flex items-center gap-10 lg:gap-16 ${step.align === 'right' ? 'justify-end' : 'justify-start'}`}>
              {step.align === 'left' && (
                <span className="hidden lg:block font-display text-[10rem] lg:text-[16rem] leading-none text-gold font-light select-none [text-shadow:0_2px_0_rgba(0,0,0,1),0_0_32px_rgba(0,0,0,1),0_0_8px_rgba(0,0,0,1)] flex-shrink-0">
                  {step.id}
                </span>
              )}
              <div
                className={`w-full max-w-xl space-y-6 py-12 px-10 ${
                  step.align === 'right' ? 'border-r border-gold/20 text-right' : 'border-l border-gold/20'
                }`}
                style={{
                  background: step.align === 'right'
                    ? 'linear-gradient(to left, rgba(26,24,22,0.58) 0%, transparent 100%)'
                    : 'linear-gradient(to right, rgba(26,24,22,0.58) 0%, transparent 100%)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                }}
              >
                <h2 className="text-3xl lg:text-5xl font-semibold text-cloud-white leading-snug">
                  <TextRenderer>{t(step.title)}</TextRenderer>
                </h2>
                <div className={`w-10 h-px bg-gold/30 ${step.align === 'right' ? 'ml-auto' : ''}`} />
                <p className="text-cloud-white/65 text-xl leading-relaxed">
                  <TextRenderer>{t(step.description)}</TextRenderer>
                </p>
              </div>
              {step.align === 'right' && (
                <span className="hidden lg:block font-display text-[10rem] lg:text-[16rem] leading-none text-gold font-light select-none [text-shadow:0_2px_0_rgba(0,0,0,1),0_0_32px_rgba(0,0,0,1),0_0_8px_rgba(0,0,0,1)] flex-shrink-0">
                  {step.id}
                </span>
              )}
            </div>
          </Reveal>
        </section>
      ))}

      {/* What's included */}
      <section className="py-20 lg:py-28 border-t border-gold/10">
        <div
          ref={includedRef}
          className="max-w-[1400px] mx-auto px-8 lg:px-20"
          style={{
            opacity: includedInView ? 1 : 0,
            transform: includedInView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3.5rem)] font-light italic text-cloud-white mb-12">
            <TextRenderer>{t(copy.servicesPage.included.title)}</TextRenderer>
          </h2>
          <div
            className="flex items-start justify-center gap-4 py-6 border-b border-gold/10 mb-2 text-center"
            style={{
              opacity: includedInView ? 1 : 0,
              transform: includedInView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <span className="text-gold/70 text-3xl mt-0.5 flex-shrink-0">+</span>
            <p className="text-cloud-white/65 text-2xl leading-relaxed">
              {copy.servicesPage.included.items[language][0]}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-0">
            {copy.servicesPage.included.items[language].slice(1).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-4 border-b border-gold/10"
                style={{
                  opacity: includedInView ? 1 : 0,
                  transform: includedInView ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.6s ease-out ${(i + 1) * 0.05}s, transform 0.6s ease-out ${(i + 1) * 0.05}s`,
                }}
              >
                <span className="text-gold/70 text-3xl mt-0.5 flex-shrink-0">+</span>
                <p className="text-cloud-white/65 text-2xl leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 lg:py-48 border-t border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/services-closing-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-charcoal to-transparent" />
        <div
          ref={closingRef}
          className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-20 text-center flex flex-col items-center"
          style={{
            opacity: closingInView ? 1 : 0,
            transform: closingInView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
          }}
        >
          <h2 className="font-display text-[clamp(3rem,7vw,8rem)] leading-none font-light italic text-cloud-white mb-10">
            <TextRenderer>{t(copy.servicesPage.closing.title)}</TextRenderer>
          </h2>
          <div className="w-12 h-px bg-gold/25 mb-10" />
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-gold text-charcoal text-sm tracking-[0.12em] uppercase font-medium hover:bg-gold/85 transition-colors duration-300"
          >
            <TextRenderer>{t(copy.servicesPage.closing.cta)}</TextRenderer>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
