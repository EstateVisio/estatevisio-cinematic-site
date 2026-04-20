'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useInView } from '@/hooks/useInView';
import { VideoPlayer } from '@/components/VideoPlayer';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';

function SectionDivider() {
  return (
    <div className="relative h-px bg-gold/20 flex items-center justify-center">
      <div className="absolute w-2 h-2 rotate-45 bg-charcoal border border-gold/35" />
    </div>
  );
}

function PropertyBackground() {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-tour-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal/72" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal to-transparent" />
    </>
  );
}

function SliderBackground() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const t = (ts - startRef.current) / 9000;
      const pos = 50 + 30 * Math.sin(t * Math.PI * 2);

      if (overlayRef.current) {
        overlayRef.current.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
      }
      if (dividerRef.current) {
        dividerRef.current.style.left = `${pos}%`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0">
        <Image src="/images/about-architecture.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div ref={overlayRef} className="absolute inset-0" style={{ clipPath: 'inset(0 50% 0 0)' }}>
        <Image
          src="/images/about-architecture.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'grayscale(100%) brightness(0.5) contrast(1.1)' }}
        />
      </div>
      <div
        ref={dividerRef}
        className="absolute top-0 bottom-0 z-[1] pointer-events-none"
        style={{ left: '50%', width: '1px', background: 'hsl(40 38% 47% / 0.5)' }}
      />
      <div className="absolute inset-0 bg-charcoal/68" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-charcoal to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal to-transparent" />
    </>
  );
}

const Gallery = () => {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const { ref: scene1Ref, inView: scene1InView } = useInView<HTMLDivElement>();
  const { ref: scene2Ref, inView: scene2InView } = useInView<HTMLDivElement>();
  const { ref: bottomRef, inView: bottomInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    // Hash scroll handled via URL hash on page load
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
  }, []);

  const revealStyle = (inView: boolean, delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.9s ease-out ${delay}s, transform 0.9s ease-out ${delay}s`,
  });

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />
      <Navigation />

      {/* Page header */}
      <section className="pt-36 pb-16 px-8 lg:px-20 text-center">
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-none font-light text-cloud-white animate-fade-in">
          {t(copy.galleryPage.title)}
        </h1>
        <div className="mt-8 mx-auto w-full max-w-[1400px] h-px bg-gold/20" />
      </section>

      {/* 01 · Property Tour */}
      <section id="scene-01" className="py-20 border-t border-gold/10 relative overflow-hidden">
        <PropertyBackground />
        <div
          ref={scene1Ref}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-[5%_60%_35%] items-center"
          style={revealStyle(scene1InView)}
        >
          <div className="hidden lg:block" />
          <div className="px-4 lg:px-0 lg:pr-10">
            <VideoPlayer src="https://player.mediadelivery.net/play/641261/eabcd2b7-586c-4c41-8fba-a04f3c990265" label="30 sec · HD" />
          </div>
          <div className="flex flex-col gap-4 px-8 lg:pl-12 lg:pr-16 py-10 lg:py-0">
            <span className="font-display text-[6rem] lg:text-[9rem] leading-none text-gold font-light select-none [text-shadow:0_0_40px_rgba(0,0,0,1),0_2px_0_rgba(0,0,0,1),0_0_8px_rgba(180,150,80,0.4)]">01</span>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-3xl lg:text-5xl font-light text-cloud-white italic [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">{t(copy.galleryPage.scene1.title)}</h2>
              <p className="text-cloud-white/80 text-base tracking-[0.12em] uppercase [text-shadow:0_1px_8px_rgba(0,0,0,1)]">{t(copy.galleryPage.scene1.location)}</p>
              <div className="mt-3 w-8 h-px bg-gold/50" />
              <p className="mt-2 text-cloud-white/70 text-base lg:text-xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
                {t(copy.galleryPage.scene1.description)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 02 · Apartment Furnishing */}
      <section id="scene-02" className="py-20 relative overflow-hidden">
        <SliderBackground />
        <div
          ref={scene2Ref}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-[35%_60%_5%] items-center"
          style={revealStyle(scene2InView)}
        >
          <div className="flex flex-col gap-4 px-8 lg:pl-16 lg:pr-12 py-10 lg:py-0 text-right items-end">
            <span className="font-display text-[6rem] lg:text-[9rem] leading-none text-gold font-light select-none [text-shadow:0_0_40px_rgba(0,0,0,1),0_2px_0_rgba(0,0,0,1),0_0_8px_rgba(180,150,80,0.4)]">02</span>
            <div className="flex flex-col gap-2 items-end">
              <h2 className="font-display text-3xl lg:text-5xl font-light text-cloud-white italic [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">{t(copy.galleryPage.scene2.title)}</h2>
              <p className="text-cloud-white/80 text-base tracking-[0.12em] uppercase [text-shadow:0_1px_8px_rgba(0,0,0,1)]">{t(copy.galleryPage.scene2.location)}</p>
              <div className="mt-3 w-8 h-px bg-gold/50 self-end" />
              <p className="mt-2 text-cloud-white/70 text-base lg:text-xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
                {t(copy.galleryPage.scene2.description)}
              </p>
            </div>
          </div>
          <div className="px-4 lg:px-0 lg:pl-10">
            <VideoPlayer src="https://player.mediadelivery.net/play/641261/56db8421-d3d1-4778-a151-ef6ef859d4d6" label="40 sec · HD" />
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="h-px bg-gold/20" />
      <section className="py-20">
        <div
          ref={bottomRef}
          className="max-w-[1400px] mx-auto px-8 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-8"
          style={revealStyle(bottomInView)}
        >
          <p className="font-display text-[clamp(1.5rem,3vw,3rem)] font-light italic text-cloud-white">
            {t(copy.galleryPage.cta.heading)}
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-gold text-charcoal text-sm tracking-[0.1em] uppercase font-medium hover:bg-gold/85 transition-colors duration-300 flex-shrink-0"
          >
            {t(copy.galleryPage.cta.button)}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
