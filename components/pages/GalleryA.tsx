'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { VideoPlayer } from '@/components/VideoPlayer';
import { useInView } from '@/hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import { useParams } from 'next/navigation';

// ─── Types ────────────────────────────────────────────────────────────────────

type IndustryKey = 'realEstate' | 'interiorDesign' | 'renovations' | 'construction' | 'architecture' | 'landscape';

interface IndustryMeta {
  key: IndustryKey;
  coverImage: string;
  bgImage: string;
  videoSrc: string | null;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const INDUSTRIES: IndustryMeta[] = [
  {
    key: 'realEstate',
    coverImage: '/images/about-architecture.jpg',
    bgImage: '/images/vision-transformation.jpg',
    videoSrc: '/videos/property-tour.mp4',
  },
  {
    key: 'interiorDesign',
    coverImage: '/images/gallery-tour-bg.jpg',
    bgImage: '/images/hero-property.jpg',
    videoSrc: '/videos/furnishing.mp4',
  },
  {
    key: 'renovations',
    coverImage: '/images/gallery-renovations-bg.jpg',
    bgImage: '/images/gallery-renovations-bg.jpg',
    videoSrc: null,
  },
  {
    key: 'construction',
    coverImage: '/images/gallery-construction-bg.jpg',
    bgImage: '/images/gallery-construction-bg.jpg',
    videoSrc: null,
  },
  {
    key: 'architecture',
    coverImage: '/images/gallery-architecture-bg.jpg',
    bgImage: '/images/gallery-architecture-bg.jpg',
    videoSrc: null,
  },
  {
    key: 'landscape',
    coverImage: '/images/gallery-landscape-bg.jpg',
    bgImage: '/images/gallery-landscape-bg.jpg',
    videoSrc: null,
  },
];

// ─── Grid column calculator ────────────────────────────────────────────────────

function buildGridCols(activeIndex: number | null): string {
  if (activeIndex === null) return INDUSTRIES.map(() => '1fr').join(' ');
  return INDUSTRIES.map((_, i) => (i === activeIndex ? '3fr' : '0.44fr')).join(' ');
}

// ─── Video Modal ───────────────────────────────────────────────────────────────

interface VideoModalProps {
  src: string;
  label: string;
  onClose: () => void;
}

function VideoModal({ src, label, onClose }: VideoModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'rgba(30,30,30,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'fade-in-up 0.35s cubic-bezier(0.4,0,0.2,1) both',
        }}
      >
        <VideoPlayer src={src} label={label} className="w-full" />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center border border-gold/40 bg-charcoal text-cloud-white/70 hover:text-cloud-white hover:border-gold/70 transition-all duration-200"
          aria-label="Close video"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}

// ─── Single vertical strip ────────────────────────────────────────────────────

interface StripProps {
  meta: IndustryMeta;
  index: number;
  isActive: boolean;
  isAnyActive: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

function Strip({ meta, index, isActive, isAnyActive, onExpand, onCollapse }: StripProps) {
  const { t } = useLanguage();
  const [videoOpen, setVideoOpen] = useState(false);

  const industryData = copy.galleryPage.industries[meta.key];
  const num = String(index + 1).padStart(2, '0');

  // Close video modal on collapse
  useEffect(() => {
    if (!isActive) setVideoOpen(false);
  }, [isActive]);

  const handleClick = useCallback(() => {
    if (!isActive) onExpand();
  }, [isActive, onExpand]);

  // Content fade-in delays when expanded
  const delay = (ms: number): React.CSSProperties => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 0.45s ease-out ${ms}ms, transform 0.45s ease-out ${ms}ms`,
  });

  return (
    <>
      {videoOpen && meta.videoSrc && (
        <VideoModal
          src={meta.videoSrc}
          label={t(industryData.videoLabel)}
          onClose={() => setVideoOpen(false)}
        />
      )}

      {/* Desktop strip: expands on hover */}
      <div
        className="relative overflow-hidden hidden lg:block"
        style={{
          cursor: 'default',
          minHeight: '100dvh',
          transition: 'flex 550ms cubic-bezier(0.4,0,0.2,1)',
        }}
        onMouseEnter={onExpand}
        onMouseLeave={onCollapse}
      >
        {/* Cover image with ken-burns */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={meta.coverImage}
            alt=""
            aria-hidden
            className="w-full h-full object-cover animate-ken-burns"
            style={{
              opacity: isActive ? 0.15 : 1,
              transition: 'opacity 550ms cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: isActive ? 'rgba(30,30,30,0.60)' : 'rgba(30,30,30,0.70)',
            transition: 'background 550ms ease',
          }}
        />

        {/* Persistent tag: horizontal normally, vertical when squeezed */}
        <div
          className="absolute pointer-events-none"
          style={{
            transition: 'all 550ms cubic-bezier(0.4,0,0.2,1)',
            top: '50%',
            left: '50%',
            transform: (isAnyActive && !isActive)
              ? 'translate(-50%, -50%) rotate(-90deg)'
              : 'translate(-50%, -50%) rotate(0deg)',
            opacity: isActive ? 0 : 1,
          }}
        >
          <span
            className="text-cloud-white font-body font-semibold uppercase whitespace-nowrap"
            style={{
              fontSize: 'clamp(0.75rem,1vw,0.9rem)',
              letterSpacing: '0.2em',
            }}
          >
            {t(industryData.tag)}
          </span>
        </div>

        {/* Collapsed number: bottom */}
        <div
          className="absolute bottom-10 inset-x-0 flex justify-center pointer-events-none"
          style={{
            opacity: isActive ? 0 : 1,
            transition: 'opacity 200ms ease-out',
          }}
        >
          <span
            className="text-gold/60 font-display font-light"
            style={{ fontSize: 'clamp(0.75rem,1vw,0.9rem)', letterSpacing: '0.05em' }}
          >
            {num}
          </span>
        </div>

        {/* Expanded content: fades out instantly so it clears before column shrinks */}
        <div
          className="absolute inset-0 flex flex-col justify-center pt-16"
          style={{
            pointerEvents: isActive ? 'auto' : 'none',
            opacity: isActive ? 1 : 0,
            transition: isActive ? 'opacity 200ms ease-out' : 'opacity 80ms ease-out',
          }}
        >
          {/* Video */}
          <div className="flex justify-center px-10 mb-6" style={delay(80)}>
            {meta.videoSrc ? (
              <button
                onClick={(e) => { e.stopPropagation(); setVideoOpen(true); }}
                className="relative group"
                style={{ width: '80%', aspectRatio: '16/9' }}
              >
                <img
                  src={meta.coverImage}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors duration-300" />
                <div className="absolute inset-0 border border-gold/20 group-hover:border-gold/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 border border-gold/50 flex items-center justify-center bg-charcoal/50 group-hover:bg-charcoal/30 group-hover:border-gold/80 transition-all duration-300">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden>
                      <path d="M1 1L13 8L1 15V1Z" fill="currentColor" className="text-gold/80 group-hover:text-gold" style={{ transition: 'fill 0.3s' }} />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 text-cloud-white/50 text-xs tracking-[0.16em] uppercase">
                  {t(industryData.videoLabel)}
                </div>
              </button>
            ) : (
              <div
                className="relative border border-gold/15 bg-charcoal/40"
                style={{ width: '80%', aspectRatio: '16/9' }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden>
                      <path d="M1 1L13 8L1 15V1Z" fill="currentColor" className="text-gold/20" />
                    </svg>
                  </div>
                  <span className="font-display font-light italic text-cloud-white/40 text-lg">
                    {t(copy.galleryPage.comingSoon)}
                  </span>
                  <p className="text-cloud-white/25 text-xs tracking-wide text-center px-4">
                    {t(copy.galleryPage.comingSoonSub)}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 mx-auto" style={{ width: '80%' }}>
            <span className="text-gold text-sm tracking-[0.22em] uppercase" style={delay(150)}>
              {t(industryData.tag)}
            </span>
            <h2
              className="font-display font-light italic text-cloud-white leading-[1.05]"
              style={{
                fontSize: 'clamp(2.2rem,3.5vw,4rem)',
                textShadow: '0 2px 16px rgba(0,0,0,0.8)',
                ...delay(220),
              }}
            >
              {t(industryData.title)}
            </h2>
            <div className="w-12 h-px bg-gold/50" style={delay(290)} />
            <p
              className="text-cloud-white/60 leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem,1.2vw,1.1rem)', ...delay(360) }}
            >
              {t(industryData.description)}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile accordion row: keep click behaviour */}
      <div
        className="relative overflow-hidden lg:hidden border-t border-gold/10"
        style={{
          minHeight: isActive ? '400px' : '120px',
          transition: 'min-height 550ms cubic-bezier(0.4,0,0.2,1)',
          cursor: isActive ? 'default' : 'pointer',
        }}
        onClick={handleClick}
        role={isActive ? undefined : 'button'}
        aria-label={isActive ? undefined : `Expand ${t(industryData.title)}`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={meta.coverImage}
            alt=""
            aria-hidden
            className="w-full h-full object-cover animate-ken-burns"
            style={{ opacity: isActive ? 0.2 : 1, transition: 'opacity 550ms ease' }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: isActive ? 'rgba(30,30,30,0.55)' : 'rgba(30,30,30,0.70)' }}
        />

        {/* Collapsed row */}
        <div
          className="absolute inset-0 flex items-center px-6 gap-4 pointer-events-none"
          style={{ opacity: isActive ? 0 : 1, transition: 'opacity 250ms ease-out' }}
        >
          <span className="text-gold font-display font-light text-sm">{num}</span>
          <span className="text-cloud-white/80 text-xs tracking-[0.22em] uppercase">
            {t(industryData.tag)}
          </span>
        </div>

        {/* Expanded mobile content */}
        <div
          className="absolute inset-0 flex flex-col"
          style={{ pointerEvents: isActive ? 'auto' : 'none' }}
        >
          {/* Video placeholder: upper portion */}
          <div className="flex items-center justify-center px-6 pt-16 pb-4" style={{ flex: '0 0 50%', ...delay(80) }}>
            {meta.videoSrc ? (
              <button
                onClick={(e) => { e.stopPropagation(); setVideoOpen(true); }}
                className="relative w-full"
                style={{ aspectRatio: '16/9' }}
              >
                <img src={meta.coverImage} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-charcoal/40" />
                <div className="absolute inset-0 border border-gold/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-gold/50 flex items-center justify-center bg-charcoal/50">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden>
                      <path d="M1 1L11 7L1 13V1Z" fill="currentColor" className="text-gold/80" />
                    </svg>
                  </div>
                </div>
              </button>
            ) : (
              <div className="relative w-full border border-gold/15 bg-charcoal/40 flex flex-col items-center justify-center gap-2 py-6" style={{ aspectRatio: '16/9' }}>
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden>
                    <path d="M1 1L11 7L1 13V1Z" fill="currentColor" className="text-gold/20" />
                  </svg>
                </div>
                <span className="font-display italic text-cloud-white/40 text-base">{t(copy.galleryPage.comingSoon)}</span>
              </div>
            )}
          </div>

          {/* Text: lower portion */}
          <div className="flex flex-col gap-2 px-6 pb-8">
            <span className="text-gold text-xs tracking-[0.22em] uppercase" style={delay(150)}>{t(industryData.tag)}</span>
            <h2
              className="font-display font-light italic text-cloud-white text-2xl leading-tight"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)', ...delay(220) }}
            >
              {t(industryData.title)}
            </h2>
            <div className="w-8 h-px bg-gold/50" style={delay(290)} />
            <p className="text-cloud-white/60 text-sm leading-relaxed max-w-[34ch]" style={delay(360)}>
              {t(industryData.description)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

const GalleryA = () => {
  const { t } = useLanguage();
  const params = useParams();
  const lang = params?.lang === 'bg' ? 'bg' : 'en';

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref: bottomRef, inView: bottomInView } = useInView<HTMLDivElement>();

  const handleExpand = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleCollapse = useCallback(() => {
    setActiveIndex(null);
  }, []);

  // Close on Escape when any strip is active
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const gridCols = buildGridCols(activeIndex);

  return (
    <div className="bg-charcoal">
      <MobileNav />
      <Navigation />

      {/* ── Desktop accordion grid ── */}
      <div
        className="hidden lg:grid min-h-[100dvh]"
        style={{
          gridTemplateColumns: gridCols,
          transition: 'grid-template-columns 550ms cubic-bezier(0.4,0,0.2,1)',
          marginTop: '-1px', /* bleed under nav */
        }}
      >
        {INDUSTRIES.map((meta, i) => (
          <Strip
            key={meta.key}
            meta={meta}
            index={i}
            isActive={activeIndex === i}
            isAnyActive={activeIndex !== null}
            onExpand={() => handleExpand(i)}
            onCollapse={handleCollapse}
          />
        ))}
      </div>

      {/* ── Mobile accordion list ── */}
      <div className="lg:hidden pt-20">
        {INDUSTRIES.map((meta, i) => (
          <Strip
            key={meta.key}
            meta={meta}
            index={i}
            isActive={activeIndex === i}
            isAnyActive={activeIndex !== null}
            onExpand={() => handleExpand(i)}
            onCollapse={handleCollapse}
          />
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="h-px bg-gold/20" />
      <section className="py-20">
        <div
          ref={bottomRef}
          className="max-w-[1400px] mx-auto px-8 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-8"
          style={{
            opacity: bottomInView ? 1 : 0,
            transform: bottomInView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
          }}
        >
          <p className="font-display text-[clamp(1.5rem,3vw,3rem)] font-light italic text-cloud-white">
            {t(copy.galleryPage.cta.heading)}
          </p>
          <Link
            href={`/${lang}/contact`}
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

export default GalleryA;
