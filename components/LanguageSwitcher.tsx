'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="lg"
        onClick={() => setLanguage('en')}
        className="transition-smooth"
      >
        EN
      </Button>
      <Button
        variant={language === 'bg' ? 'default' : 'outline'}
        size="lg"
        onClick={() => setLanguage('bg')}
        className="transition-smooth"
      >
        BG
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
