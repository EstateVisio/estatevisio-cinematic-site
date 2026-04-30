import type { Metadata } from 'next';
import Roadmap from '@/components/pages/Roadmap';

export const metadata: Metadata = {
  title: "What's Next - EstateVisio",
  description: 'See where EstateVisio is headed - from cinematic tours to intelligent property tools.',
  openGraph: {
    title: "What's Next - EstateVisio",
    description: 'See where EstateVisio is headed - from cinematic tours to intelligent property tools.',
  },
};

export default function Page() {
  return <Roadmap />;
}
