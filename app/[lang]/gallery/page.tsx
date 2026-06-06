import type { Metadata } from 'next';
import { Suspense } from 'react';
import GalleryA from '@/components/pages/GalleryA';

const titles = {
  en: 'AI Property Video Gallery: Industries We Serve | EstateVisio',
  bg: 'AI галерия: индустрии, които обслужваме | EstateVisio',
};

const descriptions = {
  en: 'Explore cinematic AI video production across real estate, interior design, renovations, and construction. Every frame began as a photograph.',
  bg: 'Разгледайте кинематографично AI видео производство в сферите на недвижими имоти, интериорен дизайн, ремонти и строителство.',
};

function getJsonLd(lang: string) {
  const isEn = lang !== 'bg';
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isEn
      ? 'EstateVisio AI Video Gallery: Industries'
      : 'Галерия AI видео: индустрии, EstateVisio',
    description: isEn
      ? 'Cinematic AI video production for real estate and beyond'
      : 'Кинематографично AI видео производство за недвижими имоти и повече',
    numberOfItems: 4,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isEn ? 'Real Estate Tours' : 'Огледи на имоти',
        url: `https://estatevisio.com/${isEn ? 'en' : 'bg'}/gallery-a`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'Interior Design' : 'Интериорен дизайн',
        url: `https://estatevisio.com/${isEn ? 'en' : 'bg'}/gallery-a`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isEn ? 'Renovation Showcases' : 'Представяне на ремонти',
        url: `https://estatevisio.com/${isEn ? 'en' : 'bg'}/gallery-a`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: isEn ? 'Construction Progress' : 'Строителен прогрес',
        url: `https://estatevisio.com/${isEn ? 'en' : 'bg'}/gallery-a`,
      },
    ],
  };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `https://estatevisio.com/${l}/gallery-a`,
      languages: {
        en: 'https://estatevisio.com/en/gallery-a',
        bg: 'https://estatevisio.com/bg/gallery-a',
        'x-default': 'https://estatevisio.com/en/gallery-a',
      },
    },
    openGraph: {
      url: `https://estatevisio.com/${l}/gallery-a`,
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

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(l)) }}
      />
      <Suspense>
        <GalleryA />
      </Suspense>
    </>
  );
}
