import type { Metadata, LayoutProps } from 'next';
import { Providers } from '../providers';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'bg' }];
}

export const metadata: Metadata = {
  metadataBase: new URL('https://estatevisio.com'),
};

function getJsonLd(lang: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'EstateVisio',
    url: 'https://estatevisio.com',
    logo: 'https://estatevisio.com/images/estatevisio-logo.png',
    description:
      lang === 'bg'
        ? 'AI кинематографично видео за маркетинг на недвижими имоти'
        : 'AI-powered cinematic video for real estate marketing',
    email: 'sales@estatevisio.com',
    areaServed: 'Worldwide',
    sameAs: [
      'https://www.instagram.com/estatevisio',
      'https://www.linkedin.com/company/estatevisio',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'sales@estatevisio.com',
      contactType: 'sales',
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(lang)) }}
      />
      <Providers>{children}</Providers>
    </>
  );
}
