import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import TimelineSection from "@/components/about/TimelineSection";
import PartnersDetailSection from "@/components/about/PartnersDetailSection";
import { getDictionary } from "@/dictionaries/get-dictionary";

export default async function AboutUs({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "id");

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar 
        language={locale as "en" | "id"} 
        content={dict.nav} 
        common={dict.common} 
      />

      <PageHeader
        badge={dict.about.hero.badge}
        titleTop={dict.about.hero.titleTop}
        titleItalic={dict.about.hero.titleItalic}
        description={dict.about.hero.desc}
        maxWidth="max-w-5xl"
      />

      <MissionVisionSection content={dict.about.visionSection} common={dict.common} />
      <TimelineSection timeline={dict.about.timeline} />
      <PartnersDetailSection partners={dict.about.partners} />

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
