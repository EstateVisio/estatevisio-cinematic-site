import type { Metadata, PageProps } from 'next';
import Contact from '@/components/pages/Contact';

const titles = {
  en: 'Contact EstateVisio: Request a Free AI Property Video Demo',
  bg: 'Свържете се с EstateVisio: Безплатна AI видео демонстрация',
};

const descriptions = {
  en: "Request a free demo of EstateVisio's AI property video service. Transform your real estate listings into cinematic experiences. Response within 24 hours.",
  bg: 'Заявете безплатна демонстрация на AI услугата за видео на имоти на EstateVisio. Превърнете вашите обяви в кинематографични изживявания. Отговор до 24 часа.',
};

function getJsonLd(lang: string) {
  const isEn = lang !== 'bg';
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: isEn ? 'Contact EstateVisio' : 'Свържете се с EstateVisio',
    description: isEn
      ? 'Request a free demo of EstateVisio AI property video service'
      : 'Заявете безплатна демонстрация на AI услугата за видео на имоти',
    url: `https://estatevisio.com/${isEn ? 'en' : 'bg'}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'EstateVisio',
      email: 'sales@estatevisio.com',
      url: 'https://estatevisio.com',
    },
  };
}

export async function generateMetadata({ params }: PageProps<'/[lang]/contact'>): Promise<Metadata> {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `https://estatevisio.com/${l}/contact`,
      languages: {
        en: 'https://estatevisio.com/en/contact',
        bg: 'https://estatevisio.com/bg/contact',
        'x-default': 'https://estatevisio.com/en/contact',
      },
    },
    openGraph: {
      url: `https://estatevisio.com/${l}/contact`,
      title: titles[l],
      description: descriptions[l],
      images: [{ url: 'https://estatevisio.com/social_card.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[l],
      description: descriptions[l],
      images: ['https://estatevisio.com/social_card.png'],
    },
  };
}

export default async function Page({ params }: PageProps<'/[lang]/contact'>) {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(l)) }}
      />
      <Contact />
    </>
  );
}
