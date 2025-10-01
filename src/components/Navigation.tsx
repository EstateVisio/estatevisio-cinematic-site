import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show nav when mouse is in top 10% of viewport and user has scrolled
      if (e.clientY <= window.innerHeight * 0.1 && window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  const navItems = [
    {
      label: { en: 'Home', bg: 'Начало' },
      path: '/',
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

  return (
    <nav 
      className={cn(
        "fixed top-6 left-1/2 z-40 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      )}
      style={{ transform: `translateX(-50%) ${isVisible ? 'translateY(0)' : 'translateY(-6rem)'}` }}
    >
      <div className="bg-charcoal/80 backdrop-blur-md border border-gold/30 rounded-full px-8 py-3 shadow-gold">
        <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      'text-sm font-medium transition-smooth relative px-4 py-2 rounded-full',
                      isActive
                        ? 'text-charcoal bg-gold shadow-gold'
                        : 'text-cloud-white hover:text-gold'
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
