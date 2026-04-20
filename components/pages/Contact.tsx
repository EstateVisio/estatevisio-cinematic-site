'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';
import MobileNav from '@/components/MobileNav';
import { copy } from '@/config/copy';
import { useInView } from '@/hooks/useInView';

const Contact = () => {
  const { t } = useLanguage();
  const { ref: formRef, inView: formInView } = useInView<HTMLDivElement>();
  const { ref: infoRef, inView: infoInView } = useInView<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-charcoal">
      <MobileNav />
      <Navigation />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 pt-36 pb-24">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-none font-light text-cloud-white">
            {t(copy.contact.title)}
          </h1>
          <p className="mt-6 text-cloud-white/45 text-lg max-w-md">
            {t(copy.contact.subtitle)}
          </p>
          <div className="mt-8 h-px bg-gold/20" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: contact form */}
          <div
            ref={formRef}
            style={{
              opacity: formInView ? 1 : 0,
              transform: formInView ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <p className="text-cloud-white/55 text-sm tracking-[0.1em] uppercase mb-8">
              {t(copy.contact.form.headline)}
            </p>

            <form
              className="space-y-0"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                try {
                  const formData = new FormData(form);
                  const payload = Object.fromEntries(formData.entries());
                  const endpoint = process.env.NEXT_PUBLIC_CONTACT_EMAIL_ENDPOINT || '/api/send';
                  const resp = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                  });
                  if (!resp.ok) {
                    const text = await resp.text();
                    throw new Error(text || 'Failed to send');
                  }
                  toast({
                    title: 'Message sent',
                    description: "Thank you! We'll get back to you shortly.",
                    className: 'border-gold text-cloud bg-charcoal',
                  });
                  form.reset();
                } catch (err) {
                  toast({
                    title: 'Send failed',
                    description: err instanceof Error ? err.message : 'Please try again later.',
                    className: 'border-terracotta text-cloud bg-charcoal',
                  });
                }
              }}
            >
              <div className="border-b border-gold/15 focus-within:border-gold/50 transition-colors duration-300">
                <input
                  name="user_name"
                  placeholder={t(copy.contact.form.namePlaceholder)}
                  className="w-full bg-transparent text-cloud-white placeholder-cloud-white/25 text-base py-5 outline-none"
                />
              </div>
              <div className="border-b border-gold/15 focus-within:border-gold/50 transition-colors duration-300">
                <input
                  type="email"
                  name="user_email"
                  placeholder={t(copy.contact.form.emailPlaceholder)}
                  className="w-full bg-transparent text-cloud-white placeholder-cloud-white/25 text-base py-5 outline-none"
                />
              </div>
              <div className="border-b border-gold/15 focus-within:border-gold/50 transition-colors duration-300">
                <input
                  name="company"
                  placeholder={t(copy.contact.form.companyPlaceholder)}
                  className="w-full bg-transparent text-cloud-white placeholder-cloud-white/25 text-base py-5 outline-none"
                />
              </div>
              <div className="border-b border-gold/15 focus-within:border-gold/50 transition-colors duration-300">
                <textarea
                  name="message"
                  placeholder={t(copy.contact.form.messagePlaceholder)}
                  rows={5}
                  className="w-full bg-transparent text-cloud-white placeholder-cloud-white/25 text-base py-5 outline-none resize-none"
                />
              </div>
              <div className="pt-8">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gold text-charcoal text-sm tracking-[0.1em] uppercase font-medium hover:bg-gold/85 transition-colors duration-300"
                >
                  {t(copy.contact.form.submit)}
                </button>
              </div>
            </form>
          </div>

          {/* Right: info */}
          <div
            ref={infoRef}
            className="space-y-12"
            style={{
              opacity: infoInView ? 1 : 0,
              transform: infoInView ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s',
            }}
          >
            <div className="h-px bg-gold/10" />
            <div>
              <p className="text-cloud-white/55 text-sm tracking-[0.1em] uppercase mb-4">
                {t(copy.contact.info.email)}
              </p>
              <a
                href="mailto:sales@estatevisio.com"
                className="text-cloud-white/65 text-lg hover:text-gold transition-colors duration-300 flex items-center gap-3"
              >
                <Mail className="h-5 w-5 text-gold/50" />
                sales@estatevisio.com
              </a>
            </div>
            <div className="h-px bg-gold/10" />
            <div>
              <p className="font-display text-2xl font-light italic text-cloud-white/60 leading-relaxed">
                {t(copy.contact.vision.description)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
