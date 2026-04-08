import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { PARTNERS, INDUSTRIES } from "@/lib/data";

export default function PartnersSection() {
  return (
    <section
      className="py-28 bg-surface-dim border-y border-outline/30 overflow-hidden relative"
      aria-label="Global partnerships and industries served"
    >
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Header */}
        <FadeIn blur standalone className="text-center mb-16">
          <SectionLabel num="03" label="Global Partnerships" className="justify-center" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Representing worldwide manufacturers
          </h2>
          <p className="font-sans text-sm text-foreground/60 mt-4 max-w-md mx-auto leading-relaxed">
            We maintain close cooperation with well-known manufacturers across 6 regions — bringing world-class technology to Indonesian industry.
          </p>
        </FadeIn>

        {/* Partner Region Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {PARTNERS.map((partner, i) => (
            <FadeIn
              key={partner.name}
              blur
              standalone
              delay={i * 0.05}
              className="group bg-surface border border-outline/40 hover:border-accent/30 rounded-2xl p-6 text-center hover:shadow-[0_4px_30px_rgba(62,207,142,0.05)] transition-all duration-400"
            >
              <span className="text-4xl block mb-3" aria-hidden="true">{partner.flag}</span>
              <h3 className="font-headline text-base font-bold text-foreground tracking-tight group-hover:text-accent transition-colors mb-1">
                {partner.name}
              </h3>
              <span className="label-mono text-[9px] text-foreground/40">
                {partner.role}
              </span>
            </FadeIn>
          ))}
        </div>

        {/* Industries Served */}
        <div className="border-t border-outline/30 pt-16">
          <FadeIn blur standalone className="text-center mb-10">
            <SectionLabel num="03B" label="Industries Served" className="justify-center" />
            <h3 className="font-headline text-2xl font-bold text-foreground tracking-tight">
              Serving 8+ industrial sectors
            </h3>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind, i) => (
              <FadeIn
                key={ind.name}
                blur
                standalone
                delay={i * 0.04}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                  ind.primary
                    ? "bg-accent/8 border-accent/25 text-foreground"
                    : "bg-surface border-outline/40 text-foreground/70 hover:border-accent/20"
                }`}
              >
                <span className={`material-symbols-outlined text-xl ${ind.primary ? "text-accent" : "text-foreground/40"}`}>
                  {ind.icon}
                </span>
                <span className="font-sans text-sm font-medium leading-snug">
                  {ind.name}
                </span>
                {ind.primary && (
                  <span className="ml-auto label-mono text-[8px] text-accent">Primary</span>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
