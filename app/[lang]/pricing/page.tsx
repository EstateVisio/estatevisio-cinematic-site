import type { Metadata } from 'next';
import PricingV14Clean from '@/components/pages/PricingV14Clean';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'bg' ? 'Цени | EstateVisio' : 'Pricing | EstateVisio',
    robots: { index: false, follow: false },
  };
}

export default function Page() {
  return <PricingV14Clean />;
}
