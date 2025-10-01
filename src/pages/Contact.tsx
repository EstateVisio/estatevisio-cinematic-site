import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { cn } from '@/lib/utils';
import logo from '@/assets/estatevision-logo.png';

const ContactContent = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: { en: 'Email', bg: 'Имейл' },
      value: 'hello@estatevisio.ai',
      link: 'mailto:hello@estatevisio.ai',
    },
    {
      icon: Phone,
      title: { en: 'Phone', bg: 'Телефон' },
      value: '+359 XXX XXX XXX',
      link: 'tel:+359XXXXXXXXX',
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6 cinematic-text">
            {t({
              en: 'Get in Touch',
              bg: 'Свържете се с нас',
            })}
          </h1>
          <p className="text-xl text-cloud-white/80 max-w-3xl mx-auto">
            {t({
              en: 'Ready to transform your property listings? Let\'s start a conversation.',
              bg: 'Готови ли сте да трансформирате вашите имотни обяви? Нека започнем разговор.',
            })}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-gold/20 animate-fade-in-up">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-cloud mb-2 font-medium">
                    {t({ en: 'Name', bg: 'Име' })}
                  </label>
                  <Input
                    placeholder={t({ en: 'Your name', bg: 'Вашето име' })}
                    className="bg-charcoal/50 border-gold/20 text-cloud focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-cloud mb-2 font-medium">
                    {t({ en: 'Email', bg: 'Имейл' })}
                  </label>
                  <Input
                    type="email"
                    placeholder={t({ en: 'your@email.com', bg: 'вашият@имейл.com' })}
                    className="bg-charcoal/50 border-gold/20 text-cloud focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-cloud mb-2 font-medium">
                    {t({ en: 'Company', bg: 'Компания' })}
                  </label>
                  <Input
                    placeholder={t({ en: 'Your company (optional)', bg: 'Вашата компания (по желание)' })}
                    className="bg-charcoal/50 border-gold/20 text-cloud focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-cloud mb-2 font-medium">
                    {t({ en: 'Message', bg: 'Съобщение' })}
                  </label>
                  <Textarea
                    placeholder={t({
                      en: 'Tell us about your project...',
                      bg: 'Разкажете ни за вашия проект...',
                    })}
                    rows={6}
                    className="bg-charcoal/50 border-gold/20 text-cloud focus:border-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold shadow-gold transition-smooth"
                >
                  {t({ en: 'Send Message', bg: 'Изпратете съобщение' })}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <Card className="bg-card border-gold/20 hover:border-gold/40 transition-smooth">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cloud mb-1">
                          {t(info.title)}
                        </h3>
                        <p className="text-cloud-white/80">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const isVisible = useScrollVisibility();

  return (
    <div className="min-h-screen bg-charcoal">
        {/* Logo - Fixed Top Left */}
        <Link 
          to="/" 
          className={cn(
            "fixed top-6 left-6 z-50 transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          )}
        >
          <img src={logo} alt="EstateVisio" className="h-10 w-auto" />
        </Link>

        <Navigation />
        <div 
          className={cn(
            "fixed top-6 right-6 z-50 transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          )}
        >
          <LanguageSwitcher />
        </div>
        <ContactContent />
        <Footer />
      </div>
  );
};

export default Contact;
