import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: { en: 'About', bg: 'За нас' }, href: '#about' },
    { label: { en: 'Services', bg: 'Услуги' }, href: '#services' },
    { label: { en: 'Contact', bg: 'Контакт' }, href: '#contact' },
    { label: { en: 'Careers', bg: 'Кариери' }, href: '#careers' },
    { label: { en: 'Legal', bg: 'Правни условия' }, href: '#legal' },
  ];

  return (
    <footer className="bg-charcoal border-t border-gold/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gold mb-2">EstateVisio</h3>
            <p className="text-cloud-white/70">
              {t({
                en: 'Luxury visuals, powered by AI.',
                bg: 'Луксозни визии, задвижвани от AI.',
              })}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-cloud-white/80 hover:text-gold transition-smooth"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gold/10 text-center">
          <p className="text-cloud-white/60 text-sm">
            © 2025 EstateVisio. {t({ en: 'All rights reserved.', bg: 'Всички права запазени.' })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
