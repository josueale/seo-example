import './globals.css';

export const metadata = {
  title: 'Empresa Electromecánica Especializada en Fibra Óptica',
  // <!-- SEO meta tags -->
  description:
    'Somos una empresa especializada en electromecánica para fibra óptica. Ofrecemos soluciones innovadoras y de calidad para tus proyectos.',
  keywords:
    'empresa, electromecánica, fibra óptica, soluciones, calidad, proyectos',
  author: 'Tu Nombre Aquí',
  robots: 'index,follow',
  googlebot: 'index,follow',
  bingbot: 'index,follow',
  rating: 'General',
  language: 'Spanish',
  'revisit-after': '7 days',
  referrer: 'no-referrer-when-downgrade',

  // <!-- Open Graph meta tags for social media -->
  'og:title': 'Empresa Electromecánica Especializada en Fibra Óptica',
  'og:description':
    'Somos una empresa especializada en electromecánica para fibra óptica. Ofrecemos soluciones innovadoras y de calidad para tus proyectos.',
  'og:url': 'http://www.tupagina.com',
  'og:image': 'http://www.tupagina.com/images/tu-imagen.jpg',
  'og:type': 'website',
  'og:locale': 'es_ES',

  // <!-- Twitter Card meta tags -->
  'twitter:card': 'summary_large_image',
  'twitter:title': 'Empresa Electromecánica Especializada en Fibra Óptica',
  'twitter:description':
    'Somos una empresa especializada en electromecánica para fibra óptica. Ofrecemos soluciones innovadoras y de calidad para tus proyectos.',
  'twitter:image': 'http://www.tupagina.com/images/tu-imagen.jpg',
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
