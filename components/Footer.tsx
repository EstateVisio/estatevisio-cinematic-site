'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const { t } = useLanguage();
  const pathname = usePathname();

  const links = [
    { label: copy.navigation.vision, path: '/vision' },
    { label: copy.navigation.services, path: '/services' },
    { label: copy.navigation.gallery, path: '/gallery' },
    { label: copy.navigation.contact, path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal border-t border-gold/10 py-8">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-cloud-white/45 text-sm tracking-[0.1em] uppercase">
          © 2026 EstateVisio
        </p>

        <nav className="flex items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={(e) => {
                if (pathname === link.path) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-cloud-white/45 text-sm tracking-[0.08em] uppercase hover:text-gold transition-colors duration-300"
            >
              <TextRenderer>{t(link.label)}</TextRenderer>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
