import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { copy } from '@/config/copy';
import { cn } from '@/lib/utils';

const navItems = [
  { label: copy.navigation.home, path: '/' },
  { label: copy.navigation.services, path: '/services' },
  { label: copy.navigation.gallery, path: '/gallery' },
  { label: copy.navigation.contact, path: '/contact' },
];

const MobileNav = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 right-5 z-50 lg:hidden text-parchment p-2"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <Link
        to="/"
        className="fixed top-5 left-5 z-50 lg:hidden text-sm tracking-[0.3em] font-bold text-parchment uppercase"
      >
        EV
      </Link>

      {open && (
        <div className="fixed inset-0 z-[100] bg-noir flex flex-col items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-parchment/60 hover:text-parchment p-2"
          >
            <X className="h-6 w-6" />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  'text-3xl font-bold tracking-[0.1em] uppercase transition-colors',
                  location.pathname === item.path ? 'text-gold' : 'text-parchment/60 hover:text-parchment'
                )}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-10 flex gap-6 text-sm tracking-[0.3em] uppercase">
            <button onClick={() => setLanguage('en')} className={language === 'en' ? 'text-gold' : 'text-parchment/40'}>EN</button>
            <span className="text-parchment/20">/</span>
            <button onClick={() => setLanguage('bg')} className={language === 'bg' ? 'text-gold' : 'text-parchment/40'}>BG</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
