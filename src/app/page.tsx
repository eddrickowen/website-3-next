import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreviewSection from "@/components/home/ServicesPreviewSection";
import PartnersSection from "@/components/home/PartnersSection";
import LeadCaptureSection from "@/components/home/LeadCaptureSection";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesPreviewSection />
      <PartnersSection />
      <LeadCaptureSection />
      <Footer />
    </main>
  );
}
