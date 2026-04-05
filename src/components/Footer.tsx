import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-noir border-t border-parchment/5 py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm tracking-[0.3em] font-bold text-parchment uppercase">EstateVisio</span>
        <p className="text-xs text-parchment/30 tracking-widest uppercase">
          {t(copy.footer.tagline)}
        </p>
        <p className="text-xs text-parchment/20 tracking-widest">
          © 2025 EstateVisio. {t(copy.footer.copyright)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
