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
  title: {
    default: "PT. Agri Prima Indotama | Trusted Industrial Partner Since 1993",
    template: "%s | PT. Agri Prima Indotama",
  },
  description:
    "PT. Agri Prima Indotama (PT. API) — One-stop industrial services in Medan since 1993. Palm Oil Mill (PKS) support, PHE service, chiller maintenance, cooling tower, boiler service, machining workshop, and chemical distribution.",
  keywords: [
    "Palm Oil Mill support Medan",
    "PHE service Indonesia",
    "chiller maintenance Sumatra",
    "industrial spare parts Medan",
    "PT Agri Prima Indotama",
    "industrial services North Sumatra",
    "boiler service Medan",
    "chemical distribution industrial",
  ],
  openGraph: {
    title: "PT. Agri Prima Indotama | Trusted Industrial Partner Since 1993",
    description:
      "One-stop industrial services in Medan since 1993 — Palm Oil PKS, PHE, chiller, cooling tower, boiler, machining & chemicals.",
    locale: "id_ID",
    type: "website",
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
