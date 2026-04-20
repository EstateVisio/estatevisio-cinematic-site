import type { Metadata } from 'next';
import Vision from '@/components/pages/Vision';

export const metadata: Metadata = {
  title: 'Our Vision — EstateVisio',
  description: 'Why we\'re building cinematic AI video for real estate marketing.',
  openGraph: {
    title: 'Our Vision — EstateVisio',
    description: 'Why we\'re building cinematic AI video for real estate marketing.',
  },
};

export default function Page() {
  return <Vision />;
}
