import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/ui/ContactForm";
import GlowOrb from "@/components/ui/GlowOrb";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PT. Agri Prima Indotama — Reach our team for industrial service inquiries, spare parts, or consultations. Based in Medan, Sumatera Utara.",
};

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

export default function Contact() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        badge="Direct Line"
        titleTop="Initiate"
        titleItalic="Communication"
        description="Direct line to our team. Request spare parts quotes, schedule maintenance services, or discuss your next industrial project."
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

                  <SectionLabel num="HQ" label="Medan Office" className="mb-6" />
                  <h2 className="font-headline text-3xl font-bold text-foreground tracking-tight mb-8">
                    Headquarters
                  </h2>

                  <div className="space-y-6 mb-10">
                    <InfoBlock icon="location_on" label="Address">
                      {COMPANY.address.line1}<br />
                      {COMPANY.address.line2}<br />
                      {COMPANY.address.city} — {COMPANY.address.province},{" "}
                      {COMPANY.address.country}
                    </InfoBlock>

                    <InfoBlock icon="call" label="Mobile (Primary)">
                      <a
                        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                        className="hover:text-accent transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </InfoBlock>

                    {COMPANY.phone2 && (
                      <InfoBlock icon="smartphone" label="Mobile (Secondary)">
                        <a
                          href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`}
                          className="hover:text-accent transition-colors"
                        >
                          {COMPANY.phone2}
                        </a>
                      </InfoBlock>
                    )}

                    <InfoBlock icon="mail" label="Email">
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="hover:text-accent transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </InfoBlock>
                  </div>

                  {/* Map link */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.city}, ${COMPANY.address.province}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full h-48 bg-surface-dim border border-outline/40 hover:border-accent/40 rounded-2xl overflow-hidden flex items-center justify-center relative transition-colors"
                    aria-label="View office location on Google Maps"
                  >
                    <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden="true" />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.03] transition-colors" />
                    <div className="relative z-10 text-center">
                      <span className="material-symbols-outlined text-3xl text-foreground/20 group-hover:text-accent/50 block mb-2 transition-colors" aria-hidden="true">
                        map
                      </span>
                      <span className="label-mono text-[10px] text-foreground/30 group-hover:text-accent/60 transition-colors block">
                        Petisah Tengah, Medan
                      </span>
                      <span className="label-mono text-[9px] text-foreground/20 group-hover:text-accent/40 transition-colors mt-1 block">
                        Open in Google Maps →
                      </span>
                    </div>
                  </a>

                  {/* Operating info */}
                  <div className="mt-8 pt-6 border-t border-outline/30 grid grid-cols-2 gap-4">
                    <div>
                      <div className="label-mono text-[9px] text-foreground/40 mb-1">
                        Business Hours
                      </div>
                      <div className="font-sans text-sm text-foreground">
                        Mon–Fri 08:00–17:00
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
                      Send an Enquiry
                    </h2>
                    <p className="label-mono text-[10px] text-foreground/40 mt-1">
                      Response within 1 business day
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </FadeIn>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
