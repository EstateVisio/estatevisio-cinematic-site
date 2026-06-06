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

function getPackages(lang: string) {
  const bg = lang === 'bg';
  return [
    {
      id: 'single', number: '01',
      name: bg ? 'Започнете тук' : 'Start Here',
      videoCount: bg ? '1 видео' : '1 video',
      idealFor: bg
        ? 'Един шанс да ви впечатлим. Не го приемаме леко.'
        : 'One shot to impress you. We don\'t take that lightly.',
      price: '€69', sub: bg ? '/ видео' : '/ video', savings: null, prePrice: bg ? 'започва от' : 'starts from',
      features: bg
        ? ['30–35 секунди финален монтаж', 'Доставка в рамките на 48 часа', 'Добавяне на лого и/или акценти на марката', '1 корекция включена']
        : ['30–35 second final cut', 'Delivered in 48 hours', 'Add brand logo and/or accents', '1 revision included'],
      cta: bg ? 'Опитайте с едно видео' : 'Try a Single Video', popular: false, dashed: false,
    },
    {
      id: 'five-pack', number: '02',
      name: bg ? 'Наберете скорост' : 'Build Momentum',
      videoCount: bg ? '5 видеа' : '5 videos',
      idealFor: bg
        ? 'Първото видео ви представя. Следващите четири ви правят познати. Познатото е това, което конвертира.'
        : 'The first video introduces you. The next four make you familiar. Familiarity is what converts.',
      price: '€319', sub: bg ? '€64 на видео' : '€64 per video',
      savings: bg ? 'Спестете €26 спрямо единични' : 'Save €26 vs singles',
      prePrice: bg ? 'започва от' : 'starts from',
      features: bg
        ? ['5 видеа, 30–35 секунди финална дължина', 'Възможност за AI-аватар добавка', '1 корекция включена на видео']
        : ['5 videos, 30–35 second final length', 'Possibility for an AI-avatar add-on', '1 revision included per video'],
      cta: bg ? 'Станете видими' : 'Become Visible', popular: true, dashed: false,
    },
    {
      id: 'ten-pack', number: '03',
      name: bg ? 'Доминирайте пазара' : 'Own the Market',
      videoCount: bg ? '10 видеа' : '10 videos',
      idealFor: bg
        ? 'Последователното видео съдържание е това, което отделя видимите марки от забравените.'
        : 'Consistent video output is what separates visible brands from forgotten ones.',
      price: '€599', sub: bg ? '€60 на видео' : '€60 per video',
      savings: bg ? 'Спестете €91 спрямо единични' : 'Save €91 vs singles',
      prePrice: bg ? 'започва от' : 'starts from',
      features: bg
        ? ['10 видеа, 30–35 секунди финален монтаж', 'Възможност за AI-аватар добавка', '1 корекция включена на видео']
        : ['10 videos, 30–35 seconds final cut', 'Possibility for an AI-avatar add-on', '1 revision included per video'],
      cta: bg ? 'Изградете авторитет' : 'Establish Presence', popular: false, dashed: false,
    },
    {
      id: 'custom', number: '04',
      name: bg ? 'Партньорство' : 'Partnership',
      videoCount: bg ? 'По договаряне' : 'Custom project',
      idealFor: bg
        ? 'Това не е пакет, а производствено партньорство. Вашият обем расте заедно с вашите амбиции.'
        : "This isn't a package, it's a production relationship. Your output scales as your ambition grows.",
      price: bg ? 'Нека обсъдим' : "Let's talk",
      sub: null,
      savings: null,
      prePrice: null,
      features: bg
        ? ['Персонализирано ценообразуване, което расте с вашите нужди', 'Разширена фирмена идентичност: интра, аутра и цветна обработка по вашия бранд']
        : ['Personalized pricing that scales with your needs', 'Extended brand identity in every video: intros, outros & color grading matched to your agency'],
      cta: bg ? 'Нека обсъдим' : "Let's Talk", popular: false, dashed: true,
    },
  ];
}

function getAddons(lang: string) {
  const bg = lang === 'bg';
  return [
    {
      name: bg ? 'Удължен вариант' : 'Extended cut',
      description: bg ? '+10 секунди към стандартния формат' : '+10 seconds on top of standard',
      price: bg ? '€14.99 / 10 сек' : '€14.99 / 10 sec',
    },
    {
      name: bg ? 'Допълнителен кръг корекции' : 'Extra revision round',
      description: bg ? 'Един допълнителен цикъл на редакция след доставка' : 'One additional edit cycle after delivery',
      price: bg ? '€16.99 / видео' : '€16.99 / video',
    },
    {
      name: bg ? 'Бърза доставка' : 'Rush delivery',
      description: bg ? 'Доставка в рамките на 24 часа' : 'Delivered within 24 hours',
      price: bg ? '€24.99 / видео' : '€24.99 / video',
    },
    {
      name: bg ? 'Субтитри' : 'Subtitles',
      description: bg ? 'Вградени надписи (EN или BG)' : 'Burned-in captions (EN or BG)',
      price: bg ? 'Безплатно при заявка' : 'Free on request',
    },
    {
      name: bg ? 'Дигитален аватар' : 'Digital twin avatar',
      description: bg ? 'Вашето лице и глас като AI водещ' : 'Your face & voice as AI presenter',
      price: bg ? '€19.49 / видео' : '€19.49 / video',
    },
    {
      name: bg ? 'Допълнителен формат' : 'Additional format',
      description: bg ? '9:16 за Reels, TikTok и Shorts' : '9:16 for Reels, TikTok & Shorts',
      price: bg ? 'При заявка' : 'Per request',
    },
  ];
}

function getFaq(lang: string) {
  const bg = lang === 'bg';
  return [
    {
      q: bg ? 'Как работи услугата?' : 'How does it work?',
      a: bg
        ? 'Изпращате снимките на обявлението по имейл или WhatsApp. Доставяме кинематографично видео в рамките на 48 часа, готово за качване в Funda, уебсайта ви или социалните мрежи.'
        : 'You send your listing photos via email or WhatsApp. We deliver a cinematic video within 48 hours, ready to upload to Funda, your website, or social media.',
    },
    {
      q: bg ? 'Какво ако не съм доволен от резултата?' : "What if I don't like the result?",
      a: bg
        ? 'Един кръг корекции е включен с всяко видео. Ако все още не е наред, ще продължим да работим до постигане на резултат, или ще върнем парите ви изцяло. Без въпроси.'
        : "One revision round is included with every video. If it still isn't right, we'll keep working until it is, or we'll issue a full refund. No questions asked.",
    },
    {
      q: bg ? 'Могат ли кредитите да се споделят в екипа?' : 'Can credits be shared across my team?',
      a: bg
        ? 'Да. Кредитите от всеки пакет могат да се използват от всеки член на екипа ви, за всяко обявление. Пълна гъвкавост в студиото ви.'
        : 'Yes. Credits in any pack can be used by anyone on your team, for any listing. Full flexibility across your studio.',
    },
    {
      q: bg ? 'Какво включва всяко видео?' : "What's included in each video?",
      a: bg
        ? 'Всяко видео е кинематографична обиколка на имота с продължителност 30–40 секунди, доставена в HD. Преминава през преглед за качество преди доставка. Получавате чист файл, готов за публикуване.'
        : "Every video is a 30–40 second cinematic tour of the property, delivered in HD. It goes through a quality review before delivery. You receive a clean, upload-ready file.",
    },
    {
      q: bg ? 'Необходимо ли е посещение на имота?' : 'Do you need to visit the property?',
      a: bg
        ? 'Не. Работим изцяло от вашите съществуващи снимки на обявлението. Без посещение на място, без екип, без координация. Ако имате снимки, можем да направим видео.'
        : 'No. We work entirely from your existing listing photos. No on-site visit, no crew, no scheduling. If you have photos, we can make a video.',
    },
    {
      q: bg ? 'Каква е разликата с наемането на видеограф?' : 'How is this different from hiring a videographer?',
      a: bg
        ? 'Традиционен видеограф струва €150–600 на снимане, плюс координация, пътуване и оборудване. Ние доставяме за 48 часа само от снимки, на много по-ниска цена.'
        : 'A traditional videographer costs €150–600 per shoot, plus scheduling, travel, and equipment. We deliver in 48 hours from photos alone, at a fraction of the cost.',
    },
  ];
}

type Package = ReturnType<typeof getPackages>[number];

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
        y: popped ? -16 : 0,
        scaleX: popped ? 1.14 : 1,
        scaleY: popped ? 1.04 : 1,
        zIndex: popped ? 10 : 1,
        backgroundColor: warm ? 'hsl(30, 8%, 26%)' : 'hsl(180, 2%, 24%)',
        borderTopColor: warm ? 'hsl(40, 38%, 50%)' : 'hsl(180, 2%, 32%)',
        borderTopWidth: warm ? 2 : 1,
        boxShadow: popped
          ? '0 32px 72px -12px hsl(40, 38%, 47%, 0.35), 0 12px 32px -4px hsl(0, 0%, 0%, 0.55)'
          : '0 0px 0px 0px rgba(0,0,0,0)',
        borderRadius: popped ? '12px' : '0px',
      }}
      transition={{
        y:               { type: 'spring', stiffness: 200, damping: 24 },
        scaleX:          { type: 'spring', stiffness: 200, damping: 24 },
        scaleY:          { type: 'spring', stiffness: 200, damping: 24 },
        borderRadius:    { duration: 0.25, ease: 'easeOut' },
        backgroundColor: { duration: 0.3,  ease: 'easeOut' },
        borderTopColor:  { duration: 0.3,  ease: 'easeOut' },
        borderTopWidth:  { duration: 0.3,  ease: 'easeOut' },
        boxShadow:       { duration: 0.3,  ease: 'easeOut' },
        zIndex:          { duration: 0 },
      }}
      className={`grid relative min-w-0 ${!isLast ? 'border-r border-gold/10' : ''}`}
      style={{
        borderTopStyle: 'solid',
        padding: isPopular ? '4rem' : '3.5rem 2.5rem',
        gridRow: 'span 5',
        gridTemplateRows: 'subgrid',
        alignContent: 'start',
      }}
    >
      {isPopular && (
        <div className="absolute top-5 right-5 flex items-center gap-2 px-4 py-2 border border-gold/50 bg-gold/8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
            {lang === 'bg' ? 'Най-популярен' : 'Most Popular'}
          </span>
        </div>
      )}

      <div className="mb-10 flex flex-col justify-start">
        <p className={`text-sm tracking-[0.25em] uppercase mb-3 ${warm ? 'text-gold/70' : 'text-cloud-white/30'}`}>
          {pkg.videoCount}
        </p>
        <motion.p
          animate={{ opacity: popped ? 1 : 0.5 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`font-display leading-[0.95] font-light tracking-tight mb-4 text-cloud-white ${lang === 'bg' ? 'text-[3rem] min-h-[6rem]' : 'text-[3.6rem] min-h-[7.5rem]'}`}
        >
          {pkg.name}
        </motion.p>
        <div className={`w-10 h-[2px] mb-4 ${warm ? 'bg-gold/60' : 'bg-gold/15'}`} />
        <motion.p
          animate={{ opacity: popped ? 0.65 : 0.28, y: popped ? 0 : 3 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-lg leading-relaxed text-cloud-white"
        >
          {pkg.idealFor}
        </motion.p>
      </div>

      <div className={`mb-10 ${warm ? 'h-px bg-gold/30' : 'h-px bg-gold/10'}`} />

      <div className="mb-12">
        {pkg.prePrice && (
          <p className={`text-sm tracking-[0.25em] uppercase mb-1 ${warm ? 'text-cloud-white/38' : 'text-cloud-white/28'}`}>
            {pkg.prePrice}
          </p>
        )}
        <p
          className={`font-display leading-none font-light text-center ${
            isPopular ? 'text-[5rem]' : pkg.dashed ? 'text-[3.2rem]' : 'text-[3.8rem]'
          } ${
            warm ? 'text-gold' : pkg.dashed ? 'italic text-cloud-white/60' : 'text-cloud-white/90'
          }`}
        >
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

      <div className="mb-12 space-y-5">
        {pkg.features.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <span className={`flex-shrink-0 leading-relaxed text-base font-semibold ${warm ? 'text-gold/75' : 'text-gold/45'}`}>+</span>
            <p className={`leading-relaxed text-base ${warm ? 'text-cloud-white/65' : 'text-cloud-white/48'}`}>{f}</p>
          </div>
        ))}
      </div>

      <Link
        href={`/${lang}/contact?package=${pkg.id}`}
        className={`flex items-center justify-center py-5 text-sm tracking-[0.2em] uppercase font-semibold rounded-md transition-all duration-300 ${
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

function AddonRow({ addon }: { addon: ReturnType<typeof getAddons>[number] }) {
  const isRequest = addon.price === 'Per request' || addon.price === 'Free on request' || addon.price === 'Безплатно при заявка' || addon.price === 'При заявка';
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

function FaqAccordion({ lang }: { lang: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faq = getFaq(lang);

  return (
    <section className="py-16 lg:py-24 px-8 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="font-display text-[clamp(2.2rem,3.5vw,4rem)] font-light italic text-cloud-white leading-tight mb-14">
            {lang === 'bg' ? 'Често задавани въпроси' : 'Common Questions'}
          </p>
        </Reveal>
        <div className="divide-y divide-gold/10">
          {faq.map((item, i) => (
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

/* Columns are always equal width; hovered card pops forward via scale/shadow */

export default function PricingV14Clean() {
  const params = useParams();
  const lang = params?.lang === 'bg' ? 'bg' : 'en';
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const packages = getPackages(lang);
  const addons = getAddons(lang);
  const bg = lang === 'bg';

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />
      <Navigation />

      {/* Header: image background */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <img
          src="/images/pricing-banner.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.04)' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-charcoal/55" />
        {/* Fade to charcoal at bottom, matches home page image fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
        {/* Content */}
        <div className="relative pt-44 pb-20 px-8 lg:px-10 max-w-[1700px] mx-auto">
          <Reveal>
            <h1 className="font-display text-[clamp(4rem,8vw,9rem)] leading-[0.9] font-light text-cloud-white">
              {bg ? 'Инвестирайте в' : 'Invest in Your'}<br />
              {bg ? 'присъствието си.' : 'Presence.'}
            </h1>
            <p className="mt-10 text-cloud-white/52 text-xl leading-relaxed max-w-lg">
              {bg
                ? 'Всяка цена на тази страница е реална. Без приблизителни оценки, без скрити такси. Пакетите и добавките са точните суми, посочени във фактурата ви.'
                : 'Every price on this page is real. No estimates, no hidden fees. Package and add-on prices are the exact figures referenced on your invoice.'}
            </p>
          </Reveal>
          <div className="mt-12 h-px bg-gold/15" />
        </div>
      </section>

      {/* Columns: desktop */}
      <section className="pb-8 px-8 lg:px-10">
        <div className="max-w-[1700px] mx-auto">
          <Reveal>
            <div
              className="hidden lg:grid grid-cols-4 py-12"
              style={{ gridTemplateRows: 'auto auto auto auto auto' }}
            >
              {packages.map((pkg, i) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  lang={lang}
                  isLast={i === packages.length - 1}
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </Reveal>

          {/* Mobile: stacked */}
          <div className="lg:hidden divide-y divide-gold/10">
            {packages.map((pkg, i) => {
              const isPopular = pkg.popular;
              return (
                <Reveal key={pkg.id} delay={i * 0.07}>
                  <div
                    className="flex flex-col px-8 pt-10 pb-10"
                    style={isPopular ? { background: 'hsl(30 8% 26%)', borderTop: '2px solid hsl(40 38% 50% / 0.65)' } : { background: 'hsl(180 2% 24%)', borderTop: '1px solid hsl(180 2% 32%)' }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className={`text-xl tracking-[0.12em] uppercase font-semibold ${isPopular ? 'text-cloud-white' : 'text-cloud-white/68'}`}>{pkg.name}</p>
                      {isPopular && <span className="px-2.5 py-1 border border-gold/45 text-gold text-[0.58rem] tracking-[0.14em] uppercase">{bg ? 'Популярен' : 'Popular'}</span>}
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
                    <Link href={`/${lang}/contact?package=${pkg.id}`} className={`block text-center py-5 text-sm tracking-[0.2em] uppercase font-semibold rounded-md transition-all duration-300 ${isPopular ? 'bg-gold text-charcoal hover:bg-gold/75 border border-transparent' : 'border border-gold/25 text-cloud-white/52 hover:bg-gold hover:text-charcoal hover:border-gold'}`}>{pkg.cta}</Link>
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
            <p className="font-display text-[clamp(2.2rem,3.5vw,4rem)] font-light italic text-cloud-white leading-tight">
              {bg ? 'Подобрете видеото си' : 'Enhance Your Video'}
            </p>
            <p className="text-cloud-white/42 text-lg mt-4 mb-14 leading-relaxed">
              {bg
                ? 'Добавки, приложими към всяко видео.'
                : 'Add-ons, that can be applied on top of any video.'}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gold/25">
                  <th className="pb-5 text-gold/75 text-xs tracking-[0.25em] uppercase font-medium w-[34%]">{bg ? 'Добавка' : 'Add-on'}</th>
                  <th className="pb-5 text-gold/75 text-xs tracking-[0.25em] uppercase font-medium">{bg ? 'Описание' : 'Description'}</th>
                  <th className="pb-5 text-gold/75 text-xs tracking-[0.25em] uppercase font-medium text-right">{bg ? 'Цена' : 'Price'}</th>
                </tr>
              </thead>
              <tbody>
                {addons.map((addon) => (
                  <AddonRow key={addon.name} addon={addon} />
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>


      {/* Closing CTA */}
      <section className="relative overflow-hidden">
        <img
          src="/images/pricing-cta-bg.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.04)' }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal to-transparent" />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
        <div className="relative py-32 px-8 text-center">
          <Reveal>
            <p className="font-display text-[clamp(1.8rem,3vw,3.2rem)] font-light italic text-cloud-white/85 mb-4">
              {bg ? 'Не сте сигурни кой план е подходящ?' : 'Not sure which plan fits?'}
            </p>
            <p className="text-cloud-white/40 text-lg mb-10">
              {bg ? 'Ще ви помогнем да изберете правилния вариант.' : "We'll help you find the right option for your project."}
            </p>
            <Link href={`/${lang}/contact`} className="inline-block px-14 py-5 bg-gold text-charcoal text-[0.72rem] tracking-[0.2em] uppercase font-semibold hover:bg-gold/85 transition-all duration-300">
              {bg ? 'Свържете се с нас' : 'Get in Touch'}
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
