import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import TextRenderer from '@/components/ui/TextRenderer';
import logo from '@/assets/estatevision-logo.png';
import { copy } from '@/config/copy';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const MobileNav = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: copy.navigation.home, path: '/' },
    { label: copy.navigation.services, path: '/services' },
    { label: copy.navigation.vision, path: '/vision' },
    { label: copy.navigation.roadmap, path: '/roadmap' },
    { label: copy.navigation.contact, path: '/contact' },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-6 left-6 z-50 lg:hidden bg-cloud/10 backdrop-blur-xl border border-cloud/20 hover:bg-cloud/20 rounded-full h-12 w-12"
        >
          <Menu className="h-6 w-6 text-cloud" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[280px] bg-charcoal/95 backdrop-blur-xl border-gold/20"
      >
        <SheetHeader className="border-b border-gold/20 pb-4">
          <SheetTitle className="flex items-center justify-center">
            <img src={logo} alt="EstateVisio" className="h-8 w-auto" />
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-6 mt-6">
          {/* Language Switcher */}
          <div className="space-y-2">
            <p className="text-sm text-cloud-white/60 font-semibold px-2">
              <TextRenderer>{t(copy.navigation.language)}</TextRenderer>
            </p>
            <div className="flex gap-2">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={cn(
                  'flex-1',
                  language === 'en'
                    ? 'bg-gold text-charcoal hover:bg-gold/90'
                    : 'border-gold/30 text-cloud hover:bg-gold/10'
                )}
              >
                EN
              </Button>
              <Button
                variant={language === 'bg' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('bg')}
                className={cn(
                  'flex-1',
                  language === 'bg'
                    ? 'bg-gold text-charcoal hover:bg-gold/90'
                    : 'border-gold/30 text-cloud hover:bg-gold/10'
                )}
              >
                BG
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <p className="text-sm text-cloud-white/60 font-semibold px-2 mb-2">
              <TextRenderer>{t(copy.navigation.pages)}</TextRenderer>
            </p>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-all',
                    isActive
                      ? 'bg-gold text-charcoal shadow-lg'
                      : 'text-cloud hover:bg-gold/10 hover:text-gold'
                  )}
                >
                  <TextRenderer>{t(item.label)}</TextRenderer>
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
