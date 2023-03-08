import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ElDetalle - Empresa Electromecánica Especializada en Fibra Óptica',
  // <!-- SEO meta tags -->
  description:
    'Somos una empresa especializada en electromecánica para fibra óptica. Ofrecemos soluciones innovadoras y de calidad para tus proyectos.',
  keywords:
    'empresa, electromecánica, fibra óptica, soluciones, calidad, proyectos',
  authors: [{ name: 'Josue ale' }],

  other: {
    'revisit-after': '7 days',
    'google-site-verification': 'CMtJ7TYdf1auKD22txDGabgEhTmEmU99W-9upirfTeI',
  },

  referrer: 'no-referrer-when-downgrade',

  openGraph: {
    title: 'Empresa Electromecánica Especializada en Fibra Óptica',
    description:
      'Somos una empresa especializada en electromecánica para fibra óptica. Ofrecemos soluciones innovadoras y de calidad para tus proyectos.',
    url: 'https://seo-eldetalle.vercel.app/',
    siteName: 'el detalle',
    images: [
      {
        url: '/logo-eldetalle.png',
        width: 800,
        height: 600,
        alt: 'company logo',
      },
    ],
    locale: 'es-ES',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Empresa Electromecánica Especializada en Fibra Óptica',
    description:
      'Somos una empresa especializada en electromecánica para fibra óptica. Ofrecemos soluciones innovadoras y de calidad para tus proyectos.',
    images: '/logo-eldetalle.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
