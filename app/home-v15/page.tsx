import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';

import HomeV15 from '@/components/pages/HomeV15';

export const metadata: Metadata = {
  title: 'EstateVisio: Home V15 (Phone: statement | Calculator: before services)',
  robots: { index: false },
};

export default function Page() {
  return <HomeV15 />;
}
