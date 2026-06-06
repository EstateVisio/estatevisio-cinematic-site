import type { Metadata } from 'next';
import HomeV14 from '@/components/pages/HomeV14';

export const metadata: Metadata = {
  title: 'EstateVisio: Home V14 (Phone: statement | Calculator: after stats)',
  robots: { index: false },
};

export default function Page() {
  return <HomeV14 />;
}
