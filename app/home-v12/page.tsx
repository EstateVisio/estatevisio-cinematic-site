import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';

import HomeV12 from '@/components/pages/HomeV12';

export const metadata: Metadata = {
  title: 'EstateVisio: Home V12 (Calculator: after statement)',
  robots: { index: false },
};

export default function Page() {
  return <HomeV12 />;
}
