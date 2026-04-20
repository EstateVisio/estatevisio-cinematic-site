'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navigation = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isVisible = useScrollVisibility();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: copy.navigation.home, path: '/' },
    { label: copy.navigation.vision, path: '/vision' },
    { label: copy.navigation.services, path: '/services' },
    { label: copy.navigation.gallery, path: '/gallery' },
    { label: copy.navigation.contact, path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500 hidden lg:grid lg:grid-cols-3 items-center px-10 py-7 backdrop-blur-sm border-b border-white/5',
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        scrolled ? 'bg-charcoal/85 backdrop-blur-md border-b border-gold/10' : 'bg-gradient-to-b from-charcoal/85 to-transparent'
      )}
    >
      {/* Logo — left col */}
      <Link href="/" className="flex-shrink-0 justify-self-start">
        <img src="/images/estatevision-logo.png" alt="EstateVisio" className="h-12 w-auto" />
      </Link>

      {/* Nav links — centre col, truly centred */}
      <nav className="flex justify-center">
        <ul className="flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={cn(
                    'nav-link text-sm font-medium tracking-[0.06em] uppercase whitespace-nowrap',
                    isActive
                      ? 'text-gold nav-link--active'
                      : 'text-cloud-white/50 hover:text-cloud-white'
                  )}
                >
                  <TextRenderer>{t(item.label)}</TextRenderer>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Language switcher — right col */}
      <div className="flex justify-end">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Navigation;
