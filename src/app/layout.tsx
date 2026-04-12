import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "../styles/theme.css";
import "../styles/animations.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { IntroAnimationProvider } from "@/context/IntroAnimationContext";
import Chatbot from "@/components/ui/Chatbot";
import CommandPalette from "@/components/ui/CommandPalette";
import SmoothScrollWrapper from "@/components/layout/SmoothScrollWrapper";
import SuppressThreeWarnings from "@/components/utils/SuppressThreeWarnings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://siteshprusty.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sitesh Prusty | Full Stack Developer & Software Engineer",
    template: "%s | Sitesh Prusty"
  },
  description: "Sitesh Prusty is a Full Stack Developer & Software Engineer (B.Tech CS 2nd Year) from Odisha building high-performance web applications with MERN stack, Java, and Python. Selected for Cisco-backed thingqbator incubation.",
  keywords: [
    "Sitesh Prusty",
    "Sitesh Prusty portfolio",
    "Sitesh Prusty developer",
    "Sitesh Prusty Software Engineer",
    "Sitesh Prusty Full Stack Developer",
    "Full Stack Developer Odisha",
    "MERN Stack Developer India",
    "Sitesh Prusty projects",
    "Sitesh Prusty RoamReserve",
    "Sitesh Prusty Civil Intel",
    "thingqbator Sitesh Prusty",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "Java DSA Developer",
    "Python Django Developer",
    "RoamReserve",
    "Civil Intel",
    "Web Development Portfolio"
  ],
  authors: [{ name: "Sitesh Prusty", url: siteUrl }],
  creator: "Sitesh Prusty",
  publisher: "Sitesh Prusty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    author: "Sitesh Prusty",
    "geo.region": "IN-OR",
    "geo.placename": "Daspalla",
  },
  icons: {
    icon: [
      { url: '/Codeveda2.png', sizes: '192x192', type: 'image/png' },
      { url: '/Codeveda.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/Codeveda2.png',
    apple: [
      { url: '/Codeveda.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/Codeveda2.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/Codeveda.png',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sitesh Prusty Portfolio",
    title: "Sitesh Prusty | Full Stack Developer & Software Engineer",
    description: "Sitesh Prusty builds high-performance MERN applications and real-world software solutions. Featured projects: RoamReserve and Civil Intel.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Sitesh Prusty - Full Stack Developer & Software Engineer Portfolio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitesh Prusty | Full Stack Developer & Software Engineer",
    description: "Sitesh Prusty - Full Stack Developer & Software Engineer. Featured work includes RoamReserve and Civil Intel.",
    images: [`${siteUrl}/og-image.png`],
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
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sitesh Prusty",
    "url": siteUrl,
    "image": `${siteUrl}/image/profile/profile.jpeg`,
    "jobTitle": "Full Stack Developer & Software Engineer",
    "description": "Sitesh Prusty is a Full Stack Developer & Software Engineer building high-performance web applications, with featured projects RoamReserve and Civil Intel.",
    "email": "siteshprusty@gmail.com",
    "telephone": "+91-933764XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Daspalla",
      "addressRegion": "Odisha",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/sitesh-codes77",
      "https://www.linkedin.com/in/sitesh-prusty-1a00b1336/"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "SaaS Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "B.Tech CSE"
    },
    "subjectOf": [
      {
        "@type": "CreativeWork",
        "name": "RoamReserve",
        "description": "Full-scale Airbnb clone built with MERN stack featuring production-ready booking architecture.",
      },
      {
        "@type": "CreativeWork",
        "name": "Civil Intel",
        "description": "Startup platform incubated at thingqbator, focusing on civic urban intelligence and problem solving.",
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sitesh Prusty Portfolio",
    "url": siteUrl,
    "description": "Portfolio of Sitesh Prusty showcasing full stack and software engineering projects, including RoamReserve and Civil Intel.",
    "author": {
      "@type": "Person",
      "name": "Sitesh Prusty"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
  ];

  return (
    <html lang="en" className="dark">
      <head>
        <title>Sitesh Prusty | Full Stack Developer & Software Engineer</title>
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        
        {/* Breadcrumb Schema */}
        <BreadcrumbSchema items={breadcrumbItems} />
        
        {/* Favicon - ICO format for maximum compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        
        {/* Bing/Microsoft specific meta tags */}
        <meta name="msapplication-TileColor" content="#0F0E0E" />
        <meta name="msapplication-TileImage" content="/android-chrome-512x512.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for faster resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#0F0E0E" />
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}
        style={{ overflow: 'visible' }}
      >
        <IntroAnimationProvider>
          <SuppressThreeWarnings />
          <SmoothScrollWrapper>
            <Navbar />
            <main className="relative z-10" style={{ overflow: 'visible' }}>
              {children}
            </main>
            <Footer />
            <Chatbot />
            <CommandPalette />
          </SmoothScrollWrapper>
        </IntroAnimationProvider>
      </body>
    </html>
  );
}
