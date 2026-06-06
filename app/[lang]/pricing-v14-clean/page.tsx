import type { Metadata } from 'next';
import PricingV14Clean from '@/components/pages/PricingV14Clean';

export const metadata: Metadata = {
  title: 'Pricing | EstateVisio',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PricingV14Clean />;
}
