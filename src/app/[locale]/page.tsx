import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreviewSection from "@/components/home/ServicesPreviewSection";
import PartnersSection from "@/components/home/PartnersSection";
import ClientCarousel from "@/components/home/ClientCarousel";
import LeadCaptureSection from "@/components/home/LeadCaptureSection";
import { getDictionary } from "@/dictionaries/get-dictionary";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "id");

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <Navbar 
        language={locale as "en" | "id"} 
        content={dict.nav} 
        common={dict.common} 
      />
      <HeroSection content={dict.home.hero} />
      <StatsSection stats={dict.home.stats} />
      <ServicesPreviewSection 
        content={dict.home.servicesPreview} 
        services={dict.services} 
        language={locale as "en" | "id"}
      />
      <PartnersSection 
        content={dict.home.partners} 
        language={locale as "en" | "id"}
      />
      <ClientCarousel content={dict.home.clients} />
      <LeadCaptureSection content={dict.home.lead} servicesContent={dict.services} />
      <Footer 
        language={locale as "en" | "id"} 
        content={dict.footer}
        navContent={dict.nav}
        servicesContent={dict.services}
        commonContent={dict.common}
      />
    </main>
  );
}
