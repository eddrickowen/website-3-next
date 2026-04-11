import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { getDictionary } from "@/dictionaries/get-dictionary";

export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "id");

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <Navbar 
        language={locale as "en" | "id"} 
        content={dict.nav} 
        common={dict.common} 
      />

      <PageHeader
        badge={dict.projectsPage.hero.badge}
        titleTop={dict.projectsPage.hero.titleTop}
        titleItalic={dict.projectsPage.hero.titleItalic}
        description={dict.projectsPage.hero.description}
      />

      <ProjectGallery 
        content={dict.projectsPage} 
        servicesContent={dict.services}
        language={locale}
      />

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
