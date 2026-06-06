import type { Metadata } from 'next';
import HomeV13 from '@/components/pages/HomeV13';

export const metadata: Metadata = {
  title: 'EstateVisio: Home V13 (Calculator: between services & stats)',
  robots: { index: false },
};

export default function Page() {
  return <HomeV13 />;
}
