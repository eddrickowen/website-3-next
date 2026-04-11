"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/ui/ContactForm";
import GlowOrb from "@/components/ui/GlowOrb";
import SectionLabel from "@/components/ui/SectionLabel";
import { COMPANY } from "@/lib/data";

const ContactDetail = ({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors shrink-0" aria-hidden="true">
      <span className="material-symbols-outlined text-accent text-[18px]">{icon}</span>
    </div>
    <div>
      <div className="label-mono text-[9px] text-dark-muted/50 mb-0.5">{label}</div>
      {href ? (
        <a href={href} className="font-sans text-sm text-dark-fg font-medium hover:text-accent transition-colors">
          {value}
        </a>
      ) : (
        <div className="font-sans text-sm text-dark-fg font-medium">{value}</div>
      )}
    </div>
  </div>
);

import { useLanguage } from "@/context/LanguageContext";

export default function LeadCaptureSection() {
  const { t } = useLanguage();
  return (
    <section
      className="py-32 bg-dark-bg relative overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background */}
      <div className="blueprint-grid-dark absolute inset-0 opacity-20" aria-hidden="true" />
      <GlowOrb size={600} color="rgba(62,207,142,0.12)" animate className="top-1/2 right-1/4" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — Info */}
          <FadeIn blur standalone direction="right">
            <SectionLabel num={t("home.lead.badge")} label={t("home.lead.label")} dark />
            <h2 className="font-headline font-bold text-dark-fg tracking-tighter leading-[0.9] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              {t("home.lead.title")}<br />
              <span className="text-dark-muted italic font-normal">{t("home.lead.titleAccent")}</span>
            </h2>
            <p className="text-dark-muted font-sans text-sm mb-12 max-w-md leading-loose">
              {t("home.lead.desc")}
            </p>

            <div className="space-y-6 mb-12">
              <ContactDetail
                icon="call"
                label={t("home.lead.phonePrimary")}
                value={COMPANY.phone}
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              />
              {COMPANY.phone2 && (
                <ContactDetail
                  icon="smartphone"
                  label={t("home.lead.phoneSecondary")}
                  value={COMPANY.phone2}
                  href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`}
                />
              )}
              <ContactDetail
                icon="mail"
                label={t("home.lead.emailLabel")}
                value={COMPANY.email}
                href={`mailto:${COMPANY.email}`}
              />
              <ContactDetail
                icon="location_on"
                label={t("home.lead.addressLabel")}
                value={`${COMPANY.address.line1}, ${COMPANY.address.city}`}
              />
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 label-mono text-[10px] text-accent hover:gap-4 transition-all"
            >
              {t("home.lead.fullContact")}
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </Link>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn
            blur
            standalone
            direction="left"
            delay={0.15}
            className="relative bg-dark-surface rounded-3xl p-10 border border-white/8 shadow-2xl shadow-black/30"
          >
            {/* Corner accents */}
            <div className="absolute -top-px -left-px w-16 h-16 border-t border-l border-accent/30 rounded-tl-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-px -right-px w-16 h-16 border-b border-r border-accent/30 rounded-br-3xl pointer-events-none" aria-hidden="true" />

            <div className="mb-8">
              <h3 className="font-headline text-2xl font-bold text-dark-fg tracking-tight">
                {t("home.lead.formTitle")}
              </h3>
              <p className="label-mono text-[10px] text-dark-muted/50 mt-1">
                {t("home.lead.formSub")}
              </p>
            </div>
            <ContactForm dark />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
