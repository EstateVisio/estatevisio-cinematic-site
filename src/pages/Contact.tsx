import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

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
    {
      icon: MapPin,
      title: { en: 'Location', bg: 'Локация' },
      value: 'Sofia, Bulgaria',
      link: null,
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

            {/* Additional Info */}
            <Card className="bg-gradient-gold border-0 shadow-gold">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {t({
                    en: 'Request a Demo',
                    bg: 'Заявете демо',
                  })}
                </h3>
                <p className="text-charcoal/80 mb-6">
                  {t({
                    en: 'See EstateVisio in action. Schedule a personalized demo with our team.',
                    bg: 'Вижте EstateVisio в действие. Заявете персонализирано демо с нашия екип.',
                  })}
                </p>
                <Button
                  size="lg"
                  className="w-full bg-charcoal hover:bg-charcoal/90 text-cloud shadow-elegant transition-smooth"
                >
                  {t({ en: 'Schedule Demo', bg: 'Планирайте демо' })}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-charcoal">
        <Navigation />
        <div className="fixed top-6 right-6 z-50">
          <LanguageSwitcher />
        </div>
        <ContactContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Contact;
