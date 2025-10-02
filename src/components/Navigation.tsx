import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { useEffect, useRef, useState } from 'react';

const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isVisible = useScrollVisibility();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    {
      label: { en: 'Home', bg: 'Начало' },
      path: '/',
    },
    {
      label: { en: 'Services', bg: 'Услуги' },
      path: '/services',
    },
    {
      label: { en: 'Roadmap', bg: 'Пътна карта' },
      path: '/roadmap',
    },
    {
      label: { en: 'Contact', bg: 'Контакт' },
      path: '/contact',
    },
  ];

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = navItems.findIndex(item => item.path === location.pathname);
      if (activeIndex !== -1 && navRef.current) {
        const activeLink = navRef.current.children[activeIndex]?.querySelector('a');
        if (activeLink) {
          const navRect = navRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          setIndicatorStyle({ 
            left: linkRect.left - navRect.left, 
            width: linkRect.width 
          });
        }
      }
    };

    updateIndicator();
    // Update on resize to maintain proper positioning
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-6 left-1/2 z-40 transition-all duration-300 hidden lg:block",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      )}
      style={{ transform: `translateX(-50%) ${isVisible ? 'translateY(0)' : 'translateY(-6rem)'}` }}
    >
      <div ref={containerRef} className="relative bg-cloud/10 backdrop-blur-xl border border-cloud/20 rounded-full px-4 py-3 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-cloud/20 before:to-transparent before:opacity-50">
        <div
          className="absolute rounded-full bg-gradient-to-br from-gold to-gold/80 shadow-[0_4px_20px_rgba(212,175,55,0.4)] pointer-events-none"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            top: '12px',
            height: 'calc(100% - 24px)',
            transition: 'left 0.5s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            opacity: indicatorStyle.width > 0 ? 1 : 0,
            transform: indicatorStyle.width > 0 ? 'translateY(0)' : 'translateY(100%)',
          }}
        />
        <ul ref={navRef} className="flex items-center gap-6 relative z-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      'text-sm font-medium transition-smooth relative px-4 py-2 rounded-full',
                      isActive
                        ? 'text-charcoal'
                        : 'text-cloud hover:text-gold hover:bg-cloud/10'
                    )}
                  >
                    {t(item.label)}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
