import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';

import HomeV16 from '@/components/pages/HomeV16';

export const metadata: Metadata = {
  title: 'EstateVisio: Home V16 (Phone: sticky column | Calculator: between services & stats)',
  robots: { index: false },
};

export default function Page() {
  return <HomeV16 />;
}
