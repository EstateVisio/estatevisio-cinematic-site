import type { Metadata } from 'next';
import Contact from '@/components/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact — EstateVisio',
  description: 'Request a demo or get in touch about AI property video services.',
  openGraph: {
    title: 'Contact — EstateVisio',
    description: 'Request a demo or get in touch about AI property video services.',
  },
};

export default function Page() {
  return <Contact />;
}
