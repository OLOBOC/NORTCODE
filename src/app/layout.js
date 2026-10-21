import './globals.css';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'NORTCODE | Estudio Digital • Desarrollo Web, Digitalización & Automatización',
  description: 'Desarrollo web profesional, digitalización de procesos y automatización con tecnología e inteligencia artificial. Sin humo ni rodeos.',
  keywords: [
    'Nortcode',
    'desarrollo web profesional',
    'digitalización de procesos',
    'automatización con IA',
    'n8n automatización pymes',
    'Next.js desarrollo web España',
    'programación a medida',
    'DAW DAM STI desarrollador',
    'optimización web SEO técnico'
  ],
  authors: [{ name: 'Nortcode' }],
  creator: 'Nortcode',
  metadataBase: new URL('https://nortcode.es'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://nortcode.es',
    title: 'NORTCODE | Estudio Digital • Desarrollo Web, Digitalización & Automatización',
    description: 'Convertimos ideas en soluciones digitales eficientes sin humo ni rodeos. Código de alto rendimiento, flujos automatizados e ingeniería real.',
    siteName: 'Nortcode',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NORTCODE Estudio Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NORTCODE | Estudio Digital',
    description: 'Desarrollo web, digitalización y automatización de procesos sin humo.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo-white.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: '/logo-white.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Nortcode',
    description: 'Estudio de desarrollo web, digitalización de procesos y automatización técnica.',
    url: 'https://nortcode.es',
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
    knowsAbout: [
      'Desarrollo Web Next.js',
      'Digitalización de Empresas',
      'Automatización de Flujos n8n',
      'Integración de APIs e Inteligencia Artificial',
    ],
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
  };

  return (
    <html lang="es" className={`light ${sansFont.variable} ${monoFont.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#F1ECE2" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: var(--brand-bg, #F1ECE2);
                color: var(--brand-text, #14130F);
                margin: 0;
                padding: 0;
              }
              img {
                max-width: 100%;
                height: auto;
              }
            `,
          }}
        />
      </head>
      <body className="font-sans bg-brand-bg text-brand-text min-h-screen antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
