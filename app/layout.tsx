import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'block',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'block',
});

export const metadata: Metadata = {
  icons: {
    icon: '/images/estatevisio-icon.png',
    apple: '/images/estatevisio-icon.png',
  },
  title: 'EstateVisio - AI-Powered Property Video',
  description: 'Turn property photos into cinematic videos. No camera crew needed.',
  openGraph: {
    type: 'website',
    url: 'https://estatevisio.com',
    siteName: 'EstateVisio',
    title: 'EstateVisio - AI-Powered Property Video',
    description: 'Turn property photos into cinematic videos. No camera crew needed.',
    images: [{ url: 'https://estatevisio.com/social_card.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EstateVisio - AI-Powered Property Video',
    description: 'Turn property photos into cinematic videos. No camera crew needed.',
    images: ['https://estatevisio.com/social_card.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'EstateVisio',
  url: 'https://estatevisio.com',
  logo: 'https://estatevisio.com/images/estatevision-logo.png',
  description: 'AI-powered cinematic video for real estate marketing',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'sales@estatevisio.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" suppressHydrationWarning className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
