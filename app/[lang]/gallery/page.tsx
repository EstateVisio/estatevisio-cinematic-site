import type { Metadata, PageProps } from 'next';
import { Suspense } from 'react';
import Gallery from '@/components/pages/Gallery';

const titles = {
  en: 'AI Property Video Gallery — Tours & Furnishing | EstateVisio',
  bg: 'AI галерия — разходки и обзавеждане на имоти | EstateVisio',
};

const descriptions = {
  en: 'Browse cinematic property tours and AI-generated furnishing videos. Every frame began as a photograph — see what AI video production looks like in practice.',
  bg: 'Разгледайте кинематографични разходки на имоти и AI-генерирани видеа за обзавеждане. Всеки кадър е започнал от снимка — вижте AI видео производство в действие.',
};

function getJsonLd(lang: string) {
  const isEn = lang !== 'bg';
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isEn ? 'EstateVisio AI Property Video Gallery' : 'Галерия AI видео за имоти — EstateVisio',
    description: isEn
      ? 'Cinematic AI property videos produced by EstateVisio'
      : 'Кинематографични AI видеа за имоти от EstateVisio',
    numberOfItems: 2,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isEn ? 'Property Tour Video' : 'Видео — обиколка на имот',
        description: isEn
          ? 'A cinematic walkthrough generated entirely from still photographs'
          : 'Кинематографична обиколка, създадена изцяло от снимки',
        url: `https://estatevisio.com/${isEn ? 'en' : 'bg'}/gallery#scene-01`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'Apartment Furnishing Video' : 'Видео — обзавеждане на апартамент',
        description: isEn
          ? 'An empty space transformed with AI-generated furnishing'
          : 'Празно пространство, преобразено с AI-генерирано обзавеждане',
        url: `https://estatevisio.com/${isEn ? 'en' : 'bg'}/gallery#scene-02`,
      },
    ],
  };
}

export async function generateMetadata({ params }: PageProps<'/[lang]/gallery'>): Promise<Metadata> {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `https://estatevisio.com/${l}/gallery`,
      languages: {
        en: 'https://estatevisio.com/en/gallery',
        bg: 'https://estatevisio.com/bg/gallery',
        'x-default': 'https://estatevisio.com/en/gallery',
      },
    },
    openGraph: {
      url: `https://estatevisio.com/${l}/gallery`,
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

export default async function Page({ params }: PageProps<'/[lang]/gallery'>) {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(l)) }}
      />
      <Suspense>
        <Gallery />
      </Suspense>
    </>
  );
}
