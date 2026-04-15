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

                    <InfoBlock icon="chat" label={dict.home.lead.phonePrimary}>
                      <a
                        href={`https://wa.me/${COMPANY.phone.replace(/[\s+]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </InfoBlock>

                    {COMPANY.phone2 && (
                      <InfoBlock icon="chat" label={dict.home.lead.phoneSecondary}>
                        <a
                          href={`https://wa.me/${COMPANY.phone2.replace(/[\s+]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
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
                  <div className="pt-2">
                    <div className="mb-4">
                      <span className="label-mono text-[9px] text-accent uppercase tracking-widest block mb-1">{dict.contactPage.map.label}</span>
                      <p className="font-headline text-lg font-bold text-foreground">{dict.contactPage.map.title}</p>
                      <p className="font-sans text-xs text-foreground/50 mt-1">{dict.contactPage.map.desc}</p>
                    </div>
                    <InteractiveMap className="h-64 sm:h-[400px]" content={dict.contactPage.map} />
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

            {/* Right — Form & Designer Card */}
            <StaggerContainer className="flex flex-col gap-8 h-full">
              <FadeIn blur delay={0.1} className="flex-grow">
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
                    className="flex-grow flex flex-col"
                  />
                </div>
              </FadeIn>

              {/* Designer Insight Card */}
              <FadeIn blur delay={0.2}>
                <div className="bg-zinc-900 rounded-3xl border border-white/5 p-10 relative overflow-hidden group">
                  {/* Decorative background accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] group-hover:bg-accent/10 transition-colors" aria-hidden="true" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent text-sm">design_services</span>
                      </div>
                      <h3 className="font-headline text-xl font-bold text-white tracking-tight">
                        {dict.contactPage.designerCard.title}
                      </h3>
                    </div>

                    <p className="font-sans text-sm text-zinc-400 leading-relaxed mb-8">
                      {dict.contactPage.designerCard.desc}
                    </p>

                    <div className="flex flex-col gap-4">
                      {/* Row 1: WhatsApp */}
                      <a
                        href={`https://wa.me/${COMPANY.phone2.replace(/[\s+]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-5 py-3.5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-all group/link w-full"
                      >
                        <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                        <span className="label-mono text-[10px] text-[#25D366] uppercase tracking-wider font-bold">Consult on WhatsApp</span>
                      </a>

                      {/* Row 2: Instagram & LinkedIn */}
                      <div className="grid grid-cols-2 gap-4">
                        <a
                          href={COMPANY.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-[#E1306C]/10 border border-[#E1306C]/20 rounded-xl hover:bg-[#E1306C]/20 transition-all group/link"
                        >
                          <svg className="w-4 h-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z" /></svg>
                          <span className="label-mono text-[9px] text-[#E1306C] uppercase tracking-wider font-bold">Instagram</span>
                        </a>

                        <a
                          href={COMPANY.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0077b5]/10 border border-[#0077b5]/20 rounded-xl hover:bg-[#0077b5]/20 transition-all group/link"
                        >
                          <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                          <span className="label-mono text-[9px] text-[#0077b5] uppercase tracking-wider font-bold">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
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
