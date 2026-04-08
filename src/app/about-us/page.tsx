import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import TimelineSection from "@/components/about/TimelineSection";
import PartnersDetailSection from "@/components/about/PartnersDetailSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 1993, PT. Agri Prima Indotama has been a trusted industrial partner in Medan — palm oil mill support, PHE service, chiller maintenance, and spare parts supply across Sumatra and Kalimantan.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        badge="Est. 1993 · Medan, Sumatera Utara"
        titleTop="Your Trusted"
        titleItalic="Industrial Partner"
        description="For over 30 years, PT. Agri Prima Indotama has delivered integrated industrial solutions — from spare parts supply to full installation and maintenance — serving palm oil, food & beverage, healthcare, and more across Sumatra and Kalimantan."
        maxWidth="max-w-5xl"
      />

      <MissionVisionSection />
      <TimelineSection />
      <PartnersDetailSection />

      <Footer />
    </main>
  );
}
