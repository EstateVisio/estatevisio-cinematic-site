import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { copy } from '@/config/copy';

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      message: data.get('message'),
    };
    try {
      const resp = await fetch('https://formspree.io/f/mwkgvgkg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || 'Failed to send');
      }
      toast({
        title: 'Message sent',
        description: "Thank you! We'll get back to you shortly.",
        className: 'border-gold text-parchment bg-noir',
      });
      form.reset();
    } catch (err) {
      toast({
        title: 'Send failed',
        description: err instanceof Error ? err.message : 'Please try again later.',
        className: 'border-red-500 text-parchment bg-noir',
      });
    }
  };

  return (
    <div className="min-h-screen bg-noir text-parchment">
      <Navigation />
      <MobileNav />

      {/* Header */}
      <section className="px-8 md:px-16 lg:px-24 pt-40 pb-20">
        <div className="max-w-5xl">
          <SectionLabel number="01" label={t(copy.contact.title)} />
          <h1
            className="font-black text-parchment leading-[0.92]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            {t({ en: "Let's talk.", bg: 'Нека поговорим.' })}
          </h1>
          <div className="w-24 h-px bg-gold mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs tracking-[0.3em] uppercase text-parchment/50">{t(copy.contact.form.name)}</label>
              <Input
                name="name"
                required
                placeholder={t(copy.contact.form.namePlaceholder)}
                className="bg-transparent border-0 border-b border-parchment/20 rounded-none px-0 text-parchment placeholder:text-parchment/30 focus-visible:ring-0 focus-visible:border-gold transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.3em] uppercase text-parchment/50">{t(copy.contact.form.email)}</label>
              <Input
                name="email"
                type="email"
                required
                placeholder={t(copy.contact.form.emailPlaceholder)}
                className="bg-transparent border-0 border-b border-parchment/20 rounded-none px-0 text-parchment placeholder:text-parchment/30 focus-visible:ring-0 focus-visible:border-gold transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.3em] uppercase text-parchment/50">{t(copy.contact.form.company)}</label>
              <Input
                name="company"
                placeholder={t(copy.contact.form.companyPlaceholder)}
                className="bg-transparent border-0 border-b border-parchment/20 rounded-none px-0 text-parchment placeholder:text-parchment/30 focus-visible:ring-0 focus-visible:border-gold transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.3em] uppercase text-parchment/50">{t(copy.contact.form.message)}</label>
              <Textarea
                name="message"
                required
                rows={5}
                placeholder={t(copy.contact.form.messagePlaceholder)}
                className="bg-transparent border-0 border-b border-parchment/20 rounded-none px-0 text-parchment placeholder:text-parchment/30 focus-visible:ring-0 focus-visible:border-gold transition-colors resize-none"
              />
            </div>
            <Button
              type="submit"
              className="bg-gold hover:bg-gold/90 text-noir font-semibold tracking-[0.2em] uppercase text-sm px-8 py-6 rounded-none"
            >
              {t(copy.contact.form.submit)}
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-12 pt-8 lg:pt-0">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{t(copy.contact.vision.title)}</p>
              <p className="text-parchment-dim text-lg leading-relaxed italic">
                {t(copy.contact.vision.description)}
              </p>
            </div>
            <div className="border-t border-parchment/10 pt-8">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-gold/60" />
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-parchment/40 mb-1">{t(copy.contact.info.email)}</p>
                  <a href="mailto:sales@estatevisio.com" className="text-parchment hover:text-gold transition-colors">
                    sales@estatevisio.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
