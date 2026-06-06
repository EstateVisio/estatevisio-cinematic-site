import type { Metadata, PageProps } from 'next';
import Home from '@/components/pages/Home';

const titles = {
  en: 'AI Property Video for Real Estate Agencies | EstateVisio',
  bg: 'AI видео за имоти за агенции за недвижими имоти | EstateVisio',
};

const descriptions = {
  en: 'EstateVisio transforms property photos into cinematic AI videos in 24–48 hours. No camera crew. No production delays. 3x more views for real estate listings.',
  bg: 'EstateVisio превръща снимки на имоти в кинематографични AI видеа за 24–48 часа. Без екип. Без закъснения. 3 пъти повече гледания на вашите обяви.',
};

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `https://estatevisio.com/${l}`,
      languages: {
        en: 'https://estatevisio.com/en',
        bg: 'https://estatevisio.com/bg',
        'x-default': 'https://estatevisio.com/en',
      },
    },
    openGraph: {
      url: `https://estatevisio.com/${l}`,
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

export default function Page() {
  return <Home />;
}
