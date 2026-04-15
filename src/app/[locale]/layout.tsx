import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "../globals.css";
import { EnquiryProvider } from "@/context/EnquiryContext";
import JSONLD from "@/components/JSONLD";
import QuickEnquiryModal from "@/components/QuickEnquiryModal";
import SmoothScroll from "@/components/SmoothScroll";
import { getDictionary } from "@/dictionaries/get-dictionary";

// Static params for static export / faster routing
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ciptadigitalutama.id'),
  title: {
    default: "CIPTA DIGITAL UTAMA | Web Dummy by itsowendesign@gmail.com",
    template: "%s | CIPTA DIGITAL UTAMA",
  },
  description:
    "CIPTA DIGITAL UTAMA — Web Dummy and Digital Solutions providing integrated digital systems and industrial web architecture services.",
  keywords: [
    "Digital Solutions Medan",
    "Web Architecture Indonesia",
    "CIPTA DIGITAL UTAMA",
    "industrial digital services",
  ],
  authors: [{ name: "CIPTA DIGITAL UTAMA" }],
  creator: "CIPTA DIGITAL UTAMA",
  publisher: "CIPTA DIGITAL UTAMA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CIPTA DIGITAL UTAMA | Web Dummy and Digital Solutions",
    description: "Providing integrated digital systems and industrial web architecture services.",
    url: 'https://ciptadigitalutama.id',
    siteName: 'CIPTA DIGITAL UTAMA',
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CIPTA DIGITAL UTAMA Digital Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CIPTA DIGITAL UTAMA | Digital Excellence',
    description: 'Web Dummy by itsowendesign@gmail.com (eddrick owen).',
    images: ['/og-image.jpg'],
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
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "id");
  
  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${manrope.variable}`} data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="antialiased relative" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-dark-bg focus:rounded-lg focus:font-bold focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        <EnquiryProvider>
          <JSONLD />
          <SmoothScroll>{children}</SmoothScroll>
          <QuickEnquiryModal 
            content={dict.home.lead} 
            servicesContent={dict.services} 
          />
        </EnquiryProvider>
      </body>
    </html>
  );
}
