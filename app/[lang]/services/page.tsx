import type { Metadata, PageProps } from 'next';
import Services from '@/components/pages/Services';

const titles = {
  en: 'How It Works — AI Property Video in 3 Steps | EstateVisio',
  bg: 'Как работи — AI видео за имоти в 3 стъпки | EstateVisio',
};

const descriptions = {
  en: 'See how EstateVisio turns your property photos into cinematic AI videos in 3 simple steps. Delivered in 24–48 hours with HD export and revision rounds included.',
  bg: 'Вижте как EstateVisio превръща вашите снимки на имоти в кинематографични AI видеа в 3 прости стъпки. Доставка за 24–48 часа с HD експорт и корекции.',
};

function getJsonLd(lang: string) {
  const isEn = lang !== 'bg';
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: isEn ? 'How to get an AI property video' : 'Как да получите AI видео на имот',
    description: isEn
      ? 'Send your photos, we process them with AI, and deliver a cinematic property video in 24–48 hours.'
      : 'Изпратете снимките си, ние ги обработваме с AI и доставяме кинематографично видео за 24–48 часа.',
    totalTime: 'PT48H',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: isEn ? 'Send Your Photos' : 'Изпратете снимките си',
        text: isEn
          ? 'Upload your property photos via email or our intake form.'
          : 'Качете снимките на имота си по имейл или чрез нашия формуляр.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: isEn ? 'AI Evaluation & Processing' : 'AI оценка и обработка',
        text: isEn
          ? 'Our AI analyzes and sequences your images into a cinematic film.'
          : 'Нашият AI анализира и подрежда снимките ви в кинематографичен филм.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: isEn ? 'Receive Your Video' : 'Получете видеото си',
        text: isEn
          ? 'Your HD cinematic property video is delivered within 24–48 hours.'
          : 'Вашето HD кинематографично видео се доставя до 24–48 часа.',
      },
    ],
  };
}

export async function generateMetadata({ params }: PageProps<'/[lang]/services'>): Promise<Metadata> {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `https://estatevisio.com/${l}/services`,
      languages: {
        en: 'https://estatevisio.com/en/services',
        bg: 'https://estatevisio.com/bg/services',
        'x-default': 'https://estatevisio.com/en/services',
      },
    },
    openGraph: {
      url: `https://estatevisio.com/${l}/services`,
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

export default async function Page({ params }: PageProps<'/[lang]/services'>) {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(l)) }}
      />
      <Services />
    </>
  );
}
