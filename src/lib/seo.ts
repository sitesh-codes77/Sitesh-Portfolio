import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants';

export function generateSEO(
  title?: string,
  description?: string,
  image?: string,
  keywords?: string[]
): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageDescription = description || SITE_DESCRIPTION;
  const pageImage = image || `${SITE_URL}/og-image.png`;
  
  const defaultKeywords = [
    'Sitesh Prusty',
    'Sitesh Prusty portfolio',
    'Full Stack Developer India',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'DSA Java Developer',
    'RoamReserve',
    'Civil Intel',
    'thingqbator Cisco incubation',
    'Python Flask Developer',
    'Software Engineer Odisha',
    'B.Tech Computer Science Developer',
  ];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords || defaultKeywords,
    authors: [{ name: 'Sitesh Prusty', url: SITE_URL }],
    creator: 'Sitesh Prusty',
    publisher: 'Sitesh Prusty',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: SITE_URL,
      siteName: SITE_NAME,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@sitesh_prusty',
      site: '@sitesh_prusty',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'ibL2p6r9xrTKR3U9o5zRTmVlFC4lAP_GheMlBWgOuGo',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}
