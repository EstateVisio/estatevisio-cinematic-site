import type { Metadata } from 'next';
import Services from '@/components/pages/Services';

export const metadata: Metadata = {
  title: 'Как Работи - EstateVisio',
  description: 'Three steps from photos to cinematic property video. Fast, professional, no crew.',
  openGraph: {
    title: 'Как Работи - EstateVisio',
    description: 'Three steps from photos to cinematic property video. Fast, professional, no crew.',
  },
};

export default function Page() {
  return <Services />;
}
