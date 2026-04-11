import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import ServicesListing from "@/components/services/ServicesListing";
import { getDictionary } from "@/dictionaries/get-dictionary";

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
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
        badge={dict.servicesPage.hero.badge}
        titleTop={dict.servicesPage.hero.titleTop}
        titleItalic={dict.servicesPage.hero.titleItalic}
        description={dict.servicesPage.hero.description}
      />

      <ServicesListing 
        content={dict.servicesPage} 
        servicesContent={dict.services}
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
