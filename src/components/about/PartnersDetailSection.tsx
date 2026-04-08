import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { PARTNERS } from "@/lib/data";

export default function PartnersDetailSection() {
  return (
    <section className="py-32 bg-dark-bg relative overflow-hidden" aria-label="Partner details">
      <div className="blueprint-grid-dark absolute inset-0 opacity-20" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-8 max-w-6xl relative z-10">
        <StaggerContainer className="mb-16">
          <FadeIn blur>
            <SectionLabel num="03" label="Global Partners" dark />
          </FadeIn>
          <FadeIn blur delay={0.1}>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-dark-fg tracking-tight">
              Official Partnerships &<br />
              <span className="text-dark-muted italic font-normal">Authorizations</span>
            </h2>
          </FadeIn>
          <FadeIn blur delay={0.2}>
            <p className="font-sans text-sm text-dark-muted max-w-lg leading-relaxed mt-4">
              Our legacy is built on integrating world-class technology with localized expertise. We are officially appointed partners for global industry leaders.
            </p>
          </FadeIn>
        </StaggerContainer>

        <StaggerContainer className="space-y-4">
          {PARTNERS.map((partner, i) => (
            <FadeIn
              key={partner.name}
              blur
              delay={i * 0.06}
              className="group flex flex-col md:flex-row md:items-center gap-6 p-8 bg-dark-surface border border-white/5 hover:border-accent/20 rounded-2xl hover:shadow-[0_4px_30px_rgba(62,207,142,0.06)] transition-all duration-400"
            >
              {/* Flag + Number */}
              <div className="flex items-center gap-5 md:w-20 shrink-0">
                <span className="text-3xl" aria-hidden="true">{partner.flag}</span>
              </div>

              {/* Name + Badge */}
              <div className="md:w-64 shrink-0">
                <h3 className="font-headline text-xl font-bold text-dark-fg tracking-tight group-hover:text-accent transition-colors">
                  {partner.name}
                </h3>
                <span className="label-mono text-[9px] text-accent mt-1 block">
                  {partner.role}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-10 bg-white/8 self-center" aria-hidden="true" />

              {/* Description */}
              <p className="font-sans text-sm text-dark-muted leading-relaxed flex-1">
                {partner.desc}
              </p>

              {/* Arrow */}
              <span
                className="material-symbols-outlined text-dark-muted/20 group-hover:text-accent group-hover:translate-x-2 transition-all hidden md:block"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
