'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useParams } from 'next/navigation';

type Language = 'en' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translations: { en: string; bg: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const language: Language = params?.lang === 'bg' ? 'bg' : 'en';

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // setLanguage is kept for API compatibility but navigation handles switching
  const setLanguage = (_lang: Language) => {};

  const t = (translations: { en: string; bg: string }) => translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
