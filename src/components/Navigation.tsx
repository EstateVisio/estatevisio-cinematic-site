import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import { cn } from '@/lib/utils';

const navItems = [
  { label: copy.navigation.home, path: '/' },
  { label: copy.navigation.services, path: '/services' },
  { label: copy.navigation.gallery, path: '/gallery' },
  { label: copy.navigation.contact, path: '/contact' },
];

const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden lg:flex items-center justify-between px-10 py-5',
      scrolled ? 'bg-noir/95 backdrop-blur-md border-b border-parchment/5' : 'bg-transparent'
    )}>
      <Link to="/" className="text-sm tracking-[0.3em] font-bold text-parchment uppercase">
        EstateVisio
      </Link>

      <ul className="flex items-center gap-10">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={cn(
                'text-xs tracking-[0.25em] uppercase transition-colors duration-200',
                location.pathname === item.path
                  ? 'text-gold'
                  : 'text-parchment/50 hover:text-parchment'
              )}
            >
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase">
        <button
          onClick={() => setLanguage('en')}
          className={cn('transition-colors', language === 'en' ? 'text-gold' : 'text-parchment/40 hover:text-parchment')}
        >EN</button>
        <span className="text-parchment/20">/</span>
        <button
          onClick={() => setLanguage('bg')}
          className={cn('transition-colors', language === 'bg' ? 'text-gold' : 'text-parchment/40 hover:text-parchment')}
        >BG</button>
      </div>
    </nav>
  );
};

export default Navigation;
