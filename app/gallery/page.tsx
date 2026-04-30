import type { Metadata } from 'next';
import { Suspense } from 'react';
import Gallery from '@/components/pages/Gallery';

export const metadata: Metadata = {
  title: 'Property Tour & Furnishing Videos - EstateVisio',
  description: 'Cinematic property tours and furnishing videos, generated from still photographs.',
  openGraph: {
    title: 'Property Tour & Furnishing Videos - EstateVisio',
    description: 'Cinematic property tours and furnishing videos, generated from still photographs.',
  },
};

export default function Page() {
  return (
    <Suspense>
      <Gallery />
    </Suspense>
  );
}
