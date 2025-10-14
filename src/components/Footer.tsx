import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/config/copy';
import TextRenderer from '@/components/ui/TextRenderer';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  const location = useLocation();
  const links = [
    { label: copy.navigation.home, path: '/' },
    { label: copy.navigation.vision, path: '/vision' },
    { label: copy.navigation.services, path: '/services' },
    { label: copy.navigation.roadmap, path: '/roadmap' },
    { label: copy.navigation.contact, path: '/contact' },
  ];

  return (
    <footer className="bg-charcoal border-t border-gold/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gold mb-2">EstateVisio</h3>
            <p className="text-cloud-white/70"><TextRenderer>{t(copy.footer.tagline)}</TextRenderer></p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={(e) => {
                  if (location.pathname === link.path) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="text-cloud-white/80 hover:text-gold transition-smooth"
              >
                <TextRenderer>{t(link.label)}</TextRenderer>
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gold/10 text-center">
          <p className="text-cloud-white/60 text-sm">
            © 2025 EstateVisio. {t(copy.footer.copyright)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
