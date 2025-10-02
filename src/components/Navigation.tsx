import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';

const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isVisible = useScrollVisibility();

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

  return (
    <nav 
      className={cn(
        "fixed top-6 left-1/2 z-40 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      )}
      style={{ transform: `translateX(-50%) ${isVisible ? 'translateY(0)' : 'translateY(-6rem)'}` }}
    >
      <div className="relative bg-cloud/10 backdrop-blur-xl border border-cloud/20 rounded-full px-4 py-3 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-cloud/20 before:to-transparent before:opacity-50">
        <ul className="flex items-center gap-6 relative z-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      'text-sm font-medium transition-smooth relative px-4 py-2 rounded-full',
                      isActive
                        ? 'text-charcoal bg-gradient-to-br from-gold to-gold/80 shadow-[0_4px_20px_rgba(212,175,55,0.4)]'
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
