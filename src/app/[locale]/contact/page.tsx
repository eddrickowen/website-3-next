import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/ui/ContactForm";
import GlowOrb from "@/components/ui/GlowOrb";
import InteractiveMap from "@/components/ui/InteractiveMap";
import { COMPANY } from "@/lib/data";
import { getDictionary } from "@/dictionaries/get-dictionary";

const InfoBlock = ({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
      <span className="material-symbols-outlined text-accent text-base">{icon}</span>
    </div>
    <div>
      <div className="label-mono text-[9px] text-foreground/40 mb-1">{label}</div>
      <div className="font-sans text-sm text-foreground font-medium leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
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
        badge={dict.contactPage.hero.badge}
        titleTop={dict.contactPage.hero.titleTop}
        titleItalic={dict.contactPage.hero.titleItalic}
        description={dict.contactPage.hero.description}
      />

      <section className="py-24 bg-surface flex-grow relative overflow-hidden">
        <GlowOrb
          size={500}
          color="rgba(62,207,142,0.06)"
          className="top-1/2 left-1/4"
          animate
        />

        <div className="container mx-auto px-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — Info */}
            <StaggerContainer className="h-full">
              <FadeIn blur className="h-full">
                <div className="bg-background rounded-3xl border border-outline/40 p-10 relative overflow-hidden h-full flex flex-col">
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/3 rounded-bl-[100px]" aria-hidden="true" />

                  <SectionLabel num="HQ" label={dict.contactPage.details.headquarters} className="mb-6" />
                  <h2 className="font-headline text-3xl font-bold text-foreground tracking-tight mb-8">
                    {dict.contactPage.details.title}
                  </h2>

                  <div className="space-y-6 mb-10">
                    <InfoBlock icon="location_on" label={dict.common.address}>
                      {COMPANY.address.line1}<br />
                      {COMPANY.address.line2}<br />
                      {COMPANY.address.city} — {COMPANY.address.province},{" "}
                      {COMPANY.address.country}
                    </InfoBlock>

                    <InfoBlock icon="call" label={dict.home.lead.phonePrimary}>
                      <a
                        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                        className="hover:text-accent transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </InfoBlock>

                    {COMPANY.phone2 && (
                      <InfoBlock icon="smartphone" label={dict.home.lead.phoneSecondary}>
                        <a
                          href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`}
                          className="hover:text-accent transition-colors"
                        >
                          {COMPANY.phone2}
                        </a>
                      </InfoBlock>
                    )}

                    <InfoBlock icon="mail" label={dict.common.email}>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="hover:text-accent transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </InfoBlock>
                  </div>

                  {/* Interactive Map */}
                  <div className="mt-10">
                    <div className="mb-4">
                      <span className="label-mono text-[9px] text-accent uppercase tracking-widest block mb-1">{dict.contactPage.map.label}</span>
                      <p className="font-headline text-lg font-bold text-foreground">{dict.contactPage.map.title}</p>
                      <p className="font-sans text-xs text-foreground/50 mt-1">{dict.contactPage.map.desc}</p>
                    </div>
                    <InteractiveMap className="h-64 sm:h-[450px]" content={dict.contactPage.map} />
                  </div>

                  {/* Operating info */}
                  <div className="mt-8 pt-6 border-t border-outline/30 grid grid-cols-2 gap-4">
                    <div>
                      <div className="label-mono text-[9px] text-foreground/40 mb-1">
                        {dict.contactPage.details.hours}
                      </div>
                      <div className="font-sans text-sm text-foreground">
                        {dict.contactPage.details.monFri}<br />
                        {dict.contactPage.details.sat}
                      </div>
                    </div>
                    <div>
                      <div className="label-mono text-[9px] text-foreground/40 mb-1">
                        Sister Company
                      </div>
                      <div className="font-sans text-xs text-foreground/60 leading-relaxed">
                        {COMPANY.sister}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </StaggerContainer>

            {/* Right — Form */}
            <StaggerContainer className="h-full">
              <FadeIn blur delay={0.1} className="h-full">
                <div className="bg-background rounded-3xl border border-outline/40 p-10 relative overflow-hidden h-full flex flex-col">
                  <div className="mb-8">
                    <h2 className="font-headline text-3xl font-bold text-foreground tracking-tight">
                      {dict.home.lead.formTitle}
                    </h2>
                    <p className="label-mono text-[10px] text-foreground/40 mt-1">
                      {dict.home.lead.formSub}
                    </p>
                  </div>
                  <ContactForm 
                    content={dict.home.lead} 
                    servicesContent={dict.services} 
                  />
                </div>
              </FadeIn>
            </StaggerContainer>
          </div>
        </div>
      </section>

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
