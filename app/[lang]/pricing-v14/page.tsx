import type { Metadata } from 'next';
import PricingV14 from '@/components/pages/PricingV14';

export const metadata: Metadata = {
  title: 'Pricing V14: Asymmetric Widths | EstateVisio',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PricingV14 />;
}
