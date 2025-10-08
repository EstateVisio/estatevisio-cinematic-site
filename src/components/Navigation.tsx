import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { useEffect, useRef, useState } from 'react';
import { copy } from '@/config/copy';

const Navigation = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const isVisible = useScrollVisibility();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: copy.navigation.home, path: '/' },
    { label: copy.navigation.vision, path: '/vision' },
    { label: copy.navigation.services, path: '/services' },
    { label: copy.navigation.roadmap, path: '/roadmap' },
    { label: copy.navigation.contact, path: '/contact' },
  ];

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = navItems.findIndex(item => item.path === location.pathname);
      if (activeIndex !== -1 && navRef.current && containerRef.current) {
        const activeLink = navRef.current.children[activeIndex]?.querySelector('a');
        if (activeLink) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          setIndicatorStyle({ 
            left: linkRect.left - containerRect.left, 
            width: linkRect.width 
          });
        }
      }
    };

    updateIndicator();
    // Update on resize to maintain proper positioning
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [location.pathname, language]);

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
