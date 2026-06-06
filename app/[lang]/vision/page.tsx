import type { Metadata, PageProps } from 'next';
import Vision from '@/components/pages/Vision';

const titles = {
  en: 'About EstateVisio | AI Real Estate Video Company',
  bg: 'За EstateVisio | AI компания за видео на недвижими имоти',
};

const descriptions = {
  en: 'Meet EstateVisio, an AI company redefining how real estate is marketed. We turn still photos into cinematic property videos that drive 3x more engagement.',
  bg: 'Запознайте се с EstateVisio, AI компания, която преосмисля маркетинга на недвижими имоти. Превръщаме снимки в кинематографични видеа с 3 пъти повече ангажираност.',
};

function getJsonLd(lang: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EstateVisio',
    url: 'https://estatevisio.com',
    logo: 'https://estatevisio.com/images/estatevisio-logo.png',
    description:
      lang === 'bg'
        ? 'AI кинематографично видео за маркетинг на недвижими имоти'
        : 'AI-powered cinematic video for real estate marketing',
    email: 'sales@estatevisio.com',
    foundingDate: '2024',
    areaServed: 'Worldwide',
    sameAs: [
      'https://www.instagram.com/estatevisio',
      'https://www.linkedin.com/company/estatevisio',
    ],
  };
}

export async function generateMetadata({ params }: PageProps<'/[lang]/vision'>): Promise<Metadata> {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `https://estatevisio.com/${l}/vision`,
      languages: {
        en: 'https://estatevisio.com/en/vision',
        bg: 'https://estatevisio.com/bg/vision',
        'x-default': 'https://estatevisio.com/en/vision',
      },
    },
    openGraph: {
      url: `https://estatevisio.com/${l}/vision`,
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

export default async function Page({ params }: PageProps<'/[lang]/vision'>) {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(l)) }}
      />
      <Vision />
    </>
  );
}
