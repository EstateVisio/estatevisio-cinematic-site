'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const language = params?.lang === 'bg' ? 'bg' : 'en';

  const switchTo = (newLang: 'en' | 'bg') => {
    if (newLang === language) return;
    const newPath = pathname.replace(`/${language}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="lg"
        onClick={() => switchTo('en')}
        className="transition-smooth"
      >
        EN
      </Button>
      <Button
        variant={language === 'bg' ? 'default' : 'outline'}
        size="lg"
        onClick={() => switchTo('bg')}
        className="transition-smooth"
      >
        BG
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
