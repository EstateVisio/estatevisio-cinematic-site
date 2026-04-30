import type { Metadata } from 'next';
import Home from '@/components/pages/Home';

export const metadata: Metadata = {
  title: 'EstateVisio - AI-Powered Property Video',
  description: 'Turn property photos into cinematic videos. No camera crew needed.',
  openGraph: {
    title: 'EstateVisio - AI-Powered Property Video',
    description: 'Turn property photos into cinematic videos. No camera crew needed.',
    images: [{ url: 'https://estatevisio.com/social_card.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Home />;
}
