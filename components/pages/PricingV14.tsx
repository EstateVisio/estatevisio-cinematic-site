'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useParams } from 'next/navigation';

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
    }}>{children}</div>
  );
}

const PACKAGES = [
  {
    id: 'single', number: '01', name: 'Start Here', videoCount: '1 video',
    idealFor: 'One listing. Zero risk. See exactly what your properties could look like.',
    price: '€59', sub: '/ video', savings: null, prePrice: 'starts from',
    features: ['Cinematic video, 30–40 seconds', 'Delivered within 48 hours', 'Upload-ready HD for Funda, social & web', 'Quality review before delivery', '1 revision included'],
    cta: 'Try a Single Video', popular: false, dashed: false,
  },
  {
    id: 'five-pack', number: '02', name: 'Build Momentum', videoCount: '5 videos',
    idealFor: 'Stay in front of buyers every month. Consistency is what builds a recognisable name.',
    price: '€269', sub: '€54 per video', savings: 'Save €30 vs singles', prePrice: 'starts from',
    features: ['5 credits, use within 3 months', 'Consistent visual style across all listings', 'Cover a full month of active listings', 'Digital twin avatar (available as add-on)', '1 revision included per video'],
    cta: 'Become Visible', popular: true, dashed: false,
  },
  {
    id: 'ten-pack', number: '03', name: 'Own the Market', videoCount: '10 videos',
    idealFor: 'The agents buyers remember are the ones they always see. Own your market before someone else does.',
    price: '€499', sub: '€50 per video', savings: 'Save €100 vs singles', prePrice: 'starts from',
    features: ['10 credits, cover a full quarter', 'Credits shareable across your whole team', 'Enough volume to dominate your local market', 'Save €100 versus single pricing', '1 revision included per video'],
    cta: 'Establish Presence', popular: false, dashed: false,
  },
  {
    id: 'custom', number: '04', name: 'Partnership', videoCount: 'Custom volume',
    idealFor: 'Your brand deserves more than a generic video. Let\'s build something that\'s unmistakably yours.',
    price: "Let's talk", sub: 'volume-based pricing', savings: null,
    features: ['Volume pricing that scales with you', 'Extended brand identity in every video: intros, outros & color grading matched to your agency', 'White-label delivery under your brand', 'Dedicated account manager', '1 revision included per video'],
    cta: "Let's Talk", popular: false, dashed: true,
  },
];

const ADDONS = [
  { name: 'Extended cut', description: '+10 seconds on top of standard', price: '€14.99 / 10 sec' },
  { name: 'Extra revision round', description: 'One additional edit cycle after delivery', price: '€16.99 / video' },
  { name: 'Rush delivery', description: 'Delivered within 24 hours', price: '€24.99 / video' },
  { name: 'Subtitles', description: 'Burned-in captions (EN or BG)', price: 'Free on request' },
  { name: 'Digital twin avatar', description: 'Your face & voice as AI presenter', price: '€19.49 / video' },
  { name: 'Additional format', description: '9:16 for Reels, TikTok & Shorts', price: 'Per request' },
];

const FAQ = [
  { q: 'How does it work?', a: 'You send your listing photos via email or WhatsApp. We deliver a cinematic video within 48 hours, ready to upload to Funda, your website, or social media.' },
  { q: "What if I don't like the result?", a: "One revision round is included with every video. If it still isn't right, we'll keep working until it is, or issue a full refund. No questions asked." },
  { q: 'Can credits be shared across my team?', a: 'Yes. Credits in any pack can be used by anyone on your team, for any listing. Full flexibility across your studio.' },
  { q: "What's included in each video?", a: 'Every video is a 30–40 second cinematic tour of the property, delivered in HD. It goes through a quality review before delivery. You receive a clean, upload-ready file.' },
  { q: 'Do you need to visit the property?', a: 'No. We work entirely from your existing listing photos. No on-site visit, no crew, no scheduling. If you have photos, we can make a video.' },
  { q: 'How is this different from hiring a videographer?', a: 'A traditional videographer costs €150–600 per shoot, plus scheduling, travel, and equipment. We deliver in 48 hours from photos alone, at a fraction of the cost. See the comparison in the calculator above.' },
];

type Package = typeof PACKAGES[number];

function PackageCard({ pkg, lang, isLast, hoveredId, onHover }: {
  pkg: Package; lang: string; isLast: boolean;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isPopular = pkg.popular;
  const popped = hoveredId === null ? isPopular : hoveredId === pkg.id;
  const warm = popped;

  return (
    <motion.div
      onHoverStart={() => onHover(pkg.id)}
      onHoverEnd={() => onHover(null)}
      animate={{
        y: popped ? -10 : 0,
        scale: popped ? 1.025 : 1,
        zIndex: popped ? 10 : 1,
        backgroundColor: warm ? 'hsl(30, 8%, 26%)' : 'hsl(180, 2%, 24%)',
        borderTopColor: warm ? 'hsl(40, 38%, 50%)' : 'hsl(180, 2%, 32%)',
        borderTopWidth: warm ? 2 : 1,
        boxShadow: popped
          ? '0 28px 64px -12px hsl(40, 38%, 47%, 0.3), 0 8px 24px -4px hsl(0, 0%, 0%, 0.5)'
          : '0 0px 0px 0px rgba(0,0,0,0)',
        borderRadius: popped ? '12px' : '0px',
      }}
      transition={{
        y:               { type: 'spring', stiffness: 160, damping: 26 },
        scale:           { type: 'spring', stiffness: 160, damping: 26 },
        borderRadius:    { duration: 0.3,  ease: 'easeInOut' },
        backgroundColor: { duration: 0.35, ease: 'easeInOut' },
        borderTopColor:  { duration: 0.35, ease: 'easeInOut' },
        borderTopWidth:  { duration: 0.35, ease: 'easeInOut' },
        boxShadow:       { duration: 0.35, ease: 'easeInOut' },
        zIndex:          { duration: 0 },
      }}
      className={`flex flex-col relative min-w-0 ${!isLast ? 'border-r border-gold/10' : ''}`}
      style={{
        borderTopStyle: 'solid',
        minHeight: isPopular ? '1100px' : '980px',
        padding: isPopular ? '4rem' : '3.5rem 2.5rem',
      }}
    >
      {/* Popular badge: top-right corner */}
      {isPopular && (
        <div className="absolute top-5 right-5 flex items-center gap-2 px-4 py-2 border border-gold/50 bg-gold/8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">Most Popular</span>
        </div>
      )}

      {/* Name + badge */}
      <div className="mb-10 min-h-[280px] flex flex-col justify-start">
        {/* Video count label */}
        <p className={`text-sm tracking-[0.25em] uppercase mb-3 ${warm ? 'text-gold/70' : 'text-cloud-white/30'}`}>
          {pkg.videoCount}
        </p>

        {/* Name */}
        <p className={`font-display text-[clamp(2.4rem,3.2vw,4rem)] leading-[0.95] font-light tracking-tight mb-4 ${warm ? 'text-cloud-white' : 'text-cloud-white/50'}`}>
          {pkg.name}
        </p>


        <div className={`w-10 h-[2px] mb-4 ${warm ? 'bg-gold/60' : 'bg-gold/15'}`} />
        <p className={`text-sm leading-relaxed ${warm ? 'text-cloud-white/48' : 'text-cloud-white/32'}`}>
          {pkg.idealFor}
        </p>
      </div>

      {/* Delimiter */}
      <div className={`mb-10 ${warm ? 'h-px bg-gold/30' : 'h-px bg-gold/10'}`} />

      {/* Price */}
      <div className="mb-12">
        {pkg.prePrice && (
          <p className={`text-[0.62rem] tracking-[0.25em] uppercase mb-1 ${warm ? 'text-cloud-white/38' : 'text-cloud-white/28'}`}>
            {pkg.prePrice}
          </p>
        )}
        <p className={`font-display leading-none font-light ${
          isPopular
            ? 'text-[clamp(4.5rem,6vw,8rem)]'
            : pkg.dashed
              ? 'italic text-[clamp(2.5rem,3.5vw,5rem)]'
              : 'text-[clamp(3.5rem,5vw,7rem)]'
        } ${
          warm
            ? 'text-gold'
            : pkg.dashed
              ? 'text-cloud-white/60'
              : 'text-cloud-white/90'
        }`}>
          {pkg.price}
        </p>
        <div className="mt-4 space-y-1.5">
          {pkg.sub && <p className={`text-sm ${warm ? 'text-cloud-white/55' : 'text-cloud-white/42'}`}>{pkg.sub}</p>}
          {pkg.savings && (
            <p className={`text-sm tracking-[0.18em] uppercase font-medium ${warm ? 'text-gold/70' : 'text-gold/38'}`}>
              {pkg.savings}
            </p>
          )}
        </div>
      </div>

      {/* Features */}
      <div className={`flex-1 mb-12 ${isPopular ? 'grid grid-cols-2 gap-x-8 gap-y-5 content-start' : 'space-y-5'}`}>
        {pkg.features.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <span className={`flex-shrink-0 text-sm leading-relaxed font-semibold ${warm ? 'text-gold/75' : 'text-gold/45'}`}>+</span>
            <p className={`text-sm leading-relaxed ${warm ? 'text-cloud-white/65' : 'text-cloud-white/48'}`}>{f}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/${lang}/contact`}
        className={`block text-center py-5 text-sm tracking-[0.2em] uppercase font-semibold rounded-md transition-all duration-300 ${
          warm
            ? 'bg-gold text-charcoal hover:bg-gold/75 border border-transparent'
            : 'border border-gold/25 text-cloud-white/52 hover:bg-gold hover:text-charcoal hover:border-gold'
        }`}
      >
        {pkg.cta}
      </Link>
    </motion.div>
  );
}

function AddonRow({ addon }: { addon: typeof ADDONS[number] }) {
  const isRequest = addon.price === 'Per request' || addon.price === 'Free on request';
  return (
    <motion.tr
      className="border-b border-gold/10 cursor-default"
      initial={false}
      whileHover={{ backgroundColor: 'hsl(40 38% 47% / 0.05)' }}
      transition={{ duration: 0.2 }}
    >
      <td className="py-5 pr-8">
        <motion.span
          className="text-cloud-white/70 text-base block"
          whileHover={{ x: 4, color: 'hsl(40 38% 70% / 1)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {addon.name}
        </motion.span>
      </td>
      <td className="py-5 pr-8 text-cloud-white/38 text-base">{addon.description}</td>
      <td className={`py-5 text-base text-right whitespace-nowrap ${isRequest ? 'text-gold/50 italic' : 'text-cloud-white/55'}`}>
        {addon.price}
      </td>
    </motion.tr>
  );
}

const CALC_PACKAGES = [
  { id: 'single',    label: 'Start Here',     estatevisio: 59,  count: 1,    priceDisplay: '1 video · €59',         tagline: 'One listing. Zero risk.' },
  { id: 'five-pack', label: 'Build Momentum', estatevisio: 269, count: 5,    priceDisplay: '5 videos · €54/video',  tagline: 'Stay in front of buyers every month.' },
  { id: 'ten-pack',  label: 'Own the Market', estatevisio: 499, count: 10,   priceDisplay: '10 videos · €50/video', tagline: 'Dominate your local market.' },
  { id: 'custom',    label: 'Partnership',    estatevisio: null, count: null, priceDisplay: 'Custom volume',         tagline: "Build something unmistakably yours." },
];

const TRAD_RATE = 300;

function CostCalculator() {
  const [selectedId, setSelectedId] = useState<string>('single');
  const [customCount, setCustomCount] = useState<number>(25);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pkg = CALC_PACKAGES.find((p) => p.id === selectedId)!;
  const isCustom = selectedId === 'custom';
  const count = isCustom ? customCount : pkg.count!;
  const evCost = isCustom ? count * 50 : pkg.estatevisio!;
  const tradCost = count * TRAD_RATE;
  const savings = tradCost - evCost;
  const savingsPct = Math.round((savings / tradCost) * 100);
  const evBarPct = Math.round((evCost / tradCost) * 100);

  return (
    <section id="calculator" className="py-16 lg:py-24 px-8 lg:px-10">
      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <Reveal>
          <p className="font-display text-[clamp(2.2rem,3.5vw,4rem)] font-light italic text-cloud-white leading-tight mb-10">
            How We Compare
          </p>
        </Reveal>

        {/* ── Two-column row: dropdown left, count/slider right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-3 items-stretch">

          {/* Left: dropdown, outside any CSS transform stacking context */}
          <div style={{ position: 'relative', zIndex: 50 }}>
            {dropdownOpen && (
              <div className="fixed inset-0" style={{ zIndex: 49 }} onClick={() => setDropdownOpen(false)} />
            )}

            {/* Trigger */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between text-left"
              style={{
                position: 'relative',
                zIndex: 51,
                background: 'hsl(180 2% 23%)',
                border: '1px solid hsl(40 38% 47% / 0.18)',
                borderRadius: dropdownOpen ? '12px 12px 0 0' : '12px',
                borderBottomColor: dropdownOpen ? 'hsl(180 2% 27%)' : 'hsl(40 38% 47% / 0.18)',
                padding: '20px 28px',
                transition: 'border-radius 0.2s ease, border-bottom-color 0.15s ease',
              }}
            >
              <div className="flex flex-col gap-0.5">
                <p className="text-cloud-white/75 text-base font-medium tracking-[0.02em]">{pkg.label}</p>
                <p className="text-cloud-white/28 text-xs tracking-[0.04em]">{pkg.tagline}</p>
              </div>
              <motion.svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="ml-6 flex-shrink-0"
              >
                <path d="M1 1L5 5L9 1" stroke="hsl(40 38% 47% / 0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </button>

            {/* Panel */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    top: '100%',
                    zIndex: 51,
                    overflow: 'hidden',
                    background: 'hsl(180 2% 27%)',
                    border: '1px solid hsl(40 38% 47% / 0.18)',
                    borderTop: 'none',
                    borderRadius: '0 0 12px 12px',
                    boxShadow: '0 32px 64px -12px hsl(0 0% 0% / 0.55)',
                  }}
                >
                  {CALC_PACKAGES.map((p, i) => {
                    const isSelected = selectedId === p.id;
                    return (
                      <motion.button
                        key={p.id}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.045, duration: 0.2, ease: 'easeOut' }}
                        onClick={() => { setSelectedId(p.id); setDropdownOpen(false); }}
                        className="w-full text-left flex items-center justify-between transition-colors duration-150"
                        style={{
                          padding: '18px 28px',
                          borderTop: i > 0 ? '1px solid hsl(40 38% 47% / 0.08)' : 'none',
                          borderLeft: isSelected ? '2px solid hsl(40 38% 47% / 0.8)' : '2px solid transparent',
                          background: isSelected ? 'hsl(40 38% 47% / 0.07)' : 'transparent',
                          paddingLeft: isSelected ? '26px' : '28px',
                        }}
                      >
                        <div className="flex flex-col gap-0.5">
                          <p className={`text-sm font-medium tracking-[0.02em] ${isSelected ? 'text-gold' : 'text-cloud-white/52'}`}>
                            {p.label}
                          </p>
                          <p className="text-cloud-white/22 text-xs mt-0.5">{p.tagline}</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0 ml-8">
                          <p className={`text-xs tracking-[0.04em] ${isSelected ? 'text-gold/55' : 'text-cloud-white/20'}`}>
                            {p.priceDisplay}
                          </p>
                          {isSelected && (
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L5.5 9L13 1" stroke="hsl(40 38% 47% / 0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: video count or slider, swaps with AnimatePresence */}
          <AnimatePresence mode="wait">
            {isCustom ? (
              <motion.div
                key="slider"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                style={{
                  background: 'hsl(180 2% 23%)',
                  border: '1px solid hsl(40 38% 47% / 0.18)',
                  borderRadius: '12px',
                  padding: '20px 28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-cloud-white/35 text-[0.6rem] tracking-[0.18em] uppercase">Videos / month</p>
                  <p className="font-display text-[1.8rem] text-gold font-light leading-none">{customCount}</p>
                </div>
                <input
                  type="range" min={15} max={100} value={customCount}
                  onChange={(e) => setCustomCount(Number(e.target.value))}
                  className="w-full accent-gold"
                />
                <div className="flex justify-between text-cloud-white/18 text-[0.6rem] mt-1.5">
                  <span>15</span><span>100</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="count"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                style={{
                  background: 'hsl(180 2% 23%)',
                  border: '1px solid hsl(40 38% 47% / 0.18)',
                  borderRadius: '12px',
                  padding: '20px 28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <p className="text-cloud-white/28 text-[0.6rem] tracking-[0.18em] uppercase mb-3">Videos</p>
                <p className="font-display text-[clamp(2.8rem,4vw,4rem)] text-gold/80 font-light leading-none">
                  {count}
                </p>
                <p className="text-cloud-white/22 text-xs mt-2">{pkg.priceDisplay}</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Main card */}
        <Reveal delay={0.08}>
          <div className="mt-3" style={{ background: 'hsl(180 2% 21%)', border: '1px solid hsl(40 38% 47% / 0.13)', borderRadius: '16px', overflow: 'hidden' }}>

            {/* Savings hero */}
            <div className="px-8 lg:px-12 py-9 border-b border-gold/10">
              <p className="text-[0.58rem] tracking-[0.25em] uppercase text-gold/42 mb-4">You save</p>
              <div className="flex items-end gap-5 flex-wrap">
                <p className="font-display text-[clamp(4.5rem,7vw,8rem)] text-gold font-light leading-none">
                  €{savings.toLocaleString()}
                </p>
                <div
                  className="mb-2 px-3.5 py-2"
                  style={{ borderRadius: '8px', background: 'hsl(40 38% 47% / 0.1)', border: '1px solid hsl(40 38% 47% / 0.28)' }}
                >
                  <p className="text-gold text-sm font-medium">{savingsPct}% less</p>
                </div>
              </div>
              <p className="mt-3 text-cloud-white/25 text-sm">
                vs. a traditional videographer for {count} video{count === 1 ? '' : 's'}
              </p>
            </div>

            {/* Side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gold/10">

              {/* EstateVisio */}
              <div className="px-8 lg:px-12 py-9">
                <p className="text-[0.58rem] tracking-[0.22em] uppercase text-gold/42 mb-5">EstateVisio</p>
                <p className="font-display text-[clamp(2.4rem,3.8vw,4rem)] text-gold font-light leading-none mb-1.5">
                  €{evCost.toLocaleString()}
                </p>
                <p className="text-cloud-white/26 text-xs mb-7">
                  {isCustom ? `${count} videos · €50/video volume rate` : `${count} video${count === 1 ? '' : 's'} · ${pkg.label}`}
                </p>
                <div className="h-1 mb-7 overflow-hidden" style={{ borderRadius: '99px', background: 'hsl(180 2% 15%)' }}>
                  <motion.div
                    key={`ev-${selectedId}-${customCount}`}
                    className="h-full"
                    style={{ borderRadius: '99px', background: 'hsl(40 38% 47%)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${evBarPct}%` }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="space-y-2.5">
                  {['Delivered within 48 hours', 'Works from existing listing photos', 'No crew or on-site visits', 'Fixed price, no surprises'].map((item) => (
                    <p key={item} className="text-cloud-white/44 text-sm flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-gold/38 flex-shrink-0" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Traditional */}
              <div className="px-8 lg:px-12 py-9">
                <p className="text-[0.58rem] tracking-[0.22em] uppercase text-cloud-white/18 mb-5">~ Traditional videographer</p>
                <p className="font-display text-[clamp(2.4rem,3.8vw,4rem)] text-cloud-white/20 font-light leading-none mb-1.5 line-through decoration-gold/10">
                  ~€{tradCost.toLocaleString()}
                </p>
                <p className="text-cloud-white/16 text-xs mb-7">
                  {count} shoot{count === 1 ? '' : 's'} · ~€{TRAD_RATE} est./shoot
                </p>
                <div className="h-1 mb-7 overflow-hidden" style={{ borderRadius: '99px', background: 'hsl(180 2% 15%)' }}>
                  <motion.div
                    key={`trad-${selectedId}-${customCount}`}
                    className="h-full"
                    style={{ borderRadius: '99px', background: 'hsl(180 2% 32%)' }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="space-y-2.5">
                  {['3–5 day turnaround per shoot', 'On-site presence required', 'Scheduling & travel overhead', 'Variable quotes, not fixed'].map((item) => (
                    <p key={item} className="text-cloud-white/18 text-sm flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-cloud-white/12 flex-shrink-0" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="px-8 lg:px-12 py-4 border-t border-gold/8">
              <p className="text-cloud-white/15 text-[0.67rem] leading-relaxed">
                ~ Estimate based on Dutch market average of €150–600/shoot. Actual costs vary. EstateVisio prices are fixed.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 px-8 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="font-display text-[clamp(2.2rem,3.5vw,4rem)] font-light italic text-cloud-white leading-tight mb-14">Common Questions</p>
        </Reveal>
        <div className="divide-y divide-gold/10">
          {FAQ.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                className="w-full text-left py-7 flex items-start justify-between gap-6 cursor-pointer group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <p className={`text-lg font-medium transition-colors duration-200 ${openIndex === i ? 'text-cloud-white' : 'text-cloud-white/70 group-hover:text-cloud-white/90'}`}>
                  {item.q}
                </p>
                <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-gold/60 text-xl leading-none transition-all duration-200 mt-0.5 ${openIndex === i ? 'rotate-45 text-gold' : 'group-hover:text-gold/80'}`}>
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="text-cloud-white/42 text-base leading-relaxed max-w-[65ch] pb-7">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// V14: ASYMMETRIC WIDTHS
// Popular column is physically wider (1.9fr vs 1fr for others).
// Each column is a self-contained PackageCard component.
// Popular + hovered cards pop out with spring physics.

export default function PricingV14() {
  const params = useParams();
  const lang = params?.lang === 'bg' ? 'bg' : 'en';
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />
      <Navigation />

      {/* Header */}
      <section className="pt-44 pb-20 px-8 lg:px-10 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-end">
          <Reveal>
            <h1 className="font-display text-[clamp(4rem,8vw,9rem)] leading-[0.9] font-light text-cloud-white">
              Invest in Your<br />Presence.
            </h1>
            <p className="mt-10 text-cloud-white/52 text-xl leading-relaxed max-w-lg">
              Every price on this page is real. No estimates, no hidden fees. Package and add-on prices are the exact figures referenced on your invoice.
            </p>
            <div className="mt-10">
              <a
                href="#calculator"
                className="inline-block px-10 py-4 border border-gold/30 text-cloud-white/55 text-[0.72rem] tracking-[0.2em] uppercase font-medium hover:border-gold/60 hover:text-cloud-white/80 transition-all duration-300"
              >
                Compare to traditional video
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block pb-1">
            <p className="text-cloud-white/22 text-[0.6rem] tracking-[0.22em] uppercase mb-5">vs traditional videographer</p>
            <p className="text-cloud-white/50 text-base leading-relaxed mb-4">
              Traditional videographers charge €150–600 per shoot, before travel, scheduling, or equipment.
            </p>
            <p className="text-cloud-white/35 text-base leading-relaxed mb-6">
              We work from your existing listing photos. No crew. No on-site visit. Delivered in 48 hours.
            </p>
            <p className="text-gold/45 text-sm">See the numbers below ↓</p>
          </Reveal>
        </div>
        <div className="mt-12 h-px bg-gold/15" />
      </section>

      {/* Columns: desktop */}
      <section className="pb-8 px-8 lg:px-10">
        <div className="max-w-[1700px] mx-auto">
          <Reveal>
            <div
              className="hidden lg:grid py-12"
              style={{ gridTemplateColumns: '1fr 1.9fr 1fr 0.9fr' }}
            >
              {PACKAGES.map((pkg, i) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  lang={lang}
                  isLast={i === PACKAGES.length - 1}
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </Reveal>

          {/* Mobile: stacked */}
          <div className="lg:hidden divide-y divide-gold/10">
            {PACKAGES.map((pkg, i) => {
              const isPopular = pkg.popular;
              return (
                <Reveal key={pkg.id} delay={i * 0.07}>
                  <div
                    className="flex flex-col px-8 pt-10 pb-10"
                    style={isPopular ? { background: 'hsl(30 8% 26%)', borderTop: '2px solid hsl(40 38% 50% / 0.65)' } : { background: 'hsl(180 2% 24%)', borderTop: '1px solid hsl(180 2% 32%)' }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className={`text-xl tracking-[0.12em] uppercase font-semibold ${isPopular ? 'text-cloud-white' : 'text-cloud-white/68'}`}>{pkg.name}</p>
                      {isPopular && <span className="px-2.5 py-1 border border-gold/45 text-gold text-[0.58rem] tracking-[0.14em] uppercase">Popular</span>}
                    </div>
                    <p className={`text-sm leading-relaxed mb-5 ${isPopular ? 'text-cloud-white/40' : 'text-cloud-white/28'}`}>{pkg.idealFor}</p>
                    <div className={`mb-7 ${isPopular ? 'h-px bg-gold/30' : 'h-px bg-gold/12'}`} />
                    {pkg.prePrice && (
                      <p className={`text-[0.62rem] tracking-[0.25em] uppercase mb-1 ${isPopular ? 'text-cloud-white/38' : 'text-cloud-white/28'}`}>{pkg.prePrice}</p>
                    )}
                    <p className={`font-display leading-none font-light mb-4 ${isPopular ? 'text-gold text-[5.5rem]' : pkg.dashed ? 'text-cloud-white/50 italic text-[4rem]' : 'text-cloud-white text-[5.5rem]'}`}>{pkg.price}</p>
                    {pkg.sub && <p className={`text-sm mb-8 ${isPopular ? 'text-cloud-white/48' : 'text-cloud-white/32'}`}>{pkg.sub}</p>}
                    <div className="space-y-5 mb-9">
                      {pkg.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <span className={`flex-shrink-0 text-base font-semibold ${isPopular ? 'text-gold/75' : 'text-gold/45'}`}>+</span>
                          <p className={`text-base ${isPopular ? 'text-cloud-white/58' : 'text-cloud-white/38'}`}>{f}</p>
                        </div>
                      ))}
                    </div>
                    <Link href={`/${lang}/contact`} className={`block text-center py-5 text-sm tracking-[0.2em] uppercase font-semibold rounded-md transition-all duration-300 ${isPopular ? 'bg-gold text-charcoal hover:bg-gold/75 border border-transparent' : 'border border-gold/25 text-cloud-white/52 hover:bg-gold hover:text-charcoal hover:border-gold'}`}>{pkg.cta}</Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="h-px bg-gold/10" />
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-5 py-16 px-8">
        <div className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-transparent via-gold/18 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 border border-gold/28 bg-charcoal" />
        <div className="h-px flex-1 max-w-[180px] bg-gradient-to-l from-transparent via-gold/18 to-transparent" />
      </div>

      {/* Add-ons */}
      <section className="pb-24 px-8 lg:px-10">
        <div className="max-w-[1300px] mx-auto">
          <Reveal>
            <p className="font-display text-[clamp(2.2rem,3.5vw,4rem)] font-light italic text-cloud-white leading-tight">Enhance Your Video</p>
            <p className="text-cloud-white/42 text-lg mt-4 mb-14 leading-relaxed">Optional add-ons, priced per video, applied on top of any package.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gold/25">
                  <th className="pb-5 text-gold/75 text-xs tracking-[0.25em] uppercase font-medium w-[34%]">Add-on</th>
                  <th className="pb-5 text-gold/75 text-xs tracking-[0.25em] uppercase font-medium">Description</th>
                  <th className="pb-5 text-gold/75 text-xs tracking-[0.25em] uppercase font-medium text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {ADDONS.map((addon) => (
                  <AddonRow key={addon.name} addon={addon} />
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-5 py-4 px-8">
        <div className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-transparent via-gold/18 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 border border-gold/28 bg-charcoal" />
        <div className="h-px flex-1 max-w-[180px] bg-gradient-to-l from-transparent via-gold/18 to-transparent" />
      </div>

      {/* Cost calculator */}
      <CostCalculator />

      {/* Divider */}
      <div className="flex items-center justify-center gap-5 py-4 px-8">
        <div className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-transparent via-gold/18 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 border border-gold/28 bg-charcoal" />
        <div className="h-px flex-1 max-w-[180px] bg-gradient-to-l from-transparent via-gold/18 to-transparent" />
      </div>

      {/* FAQ accordion */}
      <FaqAccordion />

      {/* Closing CTA */}
      <section className="py-24 px-8 text-center border-t border-gold/10">
        <Reveal>
          <p className="font-display text-[clamp(1.8rem,3vw,3.2rem)] font-light italic text-cloud-white/85 mb-4">Not sure which plan fits?</p>
          <p className="text-cloud-white/40 text-lg mb-10">We'll help you find the right option for your project.</p>
          <Link href={`/${lang}/contact`} className="inline-block px-14 py-5 bg-gold text-charcoal text-[0.72rem] tracking-[0.2em] uppercase font-semibold hover:bg-gold/85 transition-all duration-300">
            Get in Touch
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
