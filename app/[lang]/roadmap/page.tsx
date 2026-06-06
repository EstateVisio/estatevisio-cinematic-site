import type { Metadata } from 'next';
import Roadmap from '@/components/pages/Roadmap';

const titles = {
  en: "What's Next | EstateVisio Roadmap",
  bg: 'Какво предстои | Пътна карта на EstateVisio',
};

const descriptions = {
  en: "See where EstateVisio is headed: from cinematic property tours to intelligent AI real estate tools. Discover the features and updates coming next.",
  bg: 'Вижте накъде се насочва EstateVisio: от кинематографични разходки до интелигентни AI инструменти за недвижими имоти. Открийте какво предстои.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = lang === 'bg' ? 'bg' : 'en';

  return {
    title: titles[l],
    description: descriptions[l],
    alternates: {
      canonical: `https://estatevisio.com/${l}/roadmap`,
      languages: {
        en: 'https://estatevisio.com/en/roadmap',
        bg: 'https://estatevisio.com/bg/roadmap',
        'x-default': 'https://estatevisio.com/en/roadmap',
      },
    },
    openGraph: {
      url: `https://estatevisio.com/${l}/roadmap`,
      title: titles[l],
      description: descriptions[l],
    },
  };
}

export default function Page() {
  return <Roadmap />;
}
