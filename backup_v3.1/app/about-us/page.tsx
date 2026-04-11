"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import TimelineSection from "@/components/about/TimelineSection";
import PartnersDetailSection from "@/components/about/PartnersDetailSection";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        badge={t("about.hero.badge")}
        titleTop={t("about.hero.titleTop")}
        titleItalic={t("about.hero.titleItalic")}
        description={t("about.hero.description")}
        maxWidth="max-w-5xl"
      />

      <MissionVisionSection />
      <TimelineSection />
      <PartnersDetailSection />

      <Footer />
    </main>
  );
}
