import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

// Show first 3 services as preview
const previewServices = SERVICES.slice(0, 3);

export default function ServicesPreviewSection() {
  return (
    <section className="py-32 bg-background relative" aria-label="Services preview">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Header */}
        <StaggerContainer className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeIn blur>
              <SectionLabel num="02" label="Core Capabilities" className="mb-4 md:mb-6" />
            </FadeIn>
            <FadeIn blur delay={0.1}>
              <h2 className="font-headline font-bold text-foreground tracking-tighter leading-[0.9]"
                style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
              >
                Advanced<br />
                <span className="text-foreground/35 italic font-normal">Infrastructure</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn blur delay={0.2} className="md:text-right shrink-0">
            <p className="text-foreground/60 mb-6 max-w-xs md:ml-auto font-sans text-sm leading-relaxed">
              Systematic approach to industrial maintenance and installation with zero-downtime philosophy.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest hover:gap-5 transition-all text-foreground/80 hover:text-foreground group"
            >
              All Services
              <span className="material-symbols-outlined text-base group-hover:text-accent transition-colors" aria-hidden="true">arrow_forward</span>
            </Link>
          </FadeIn>
        </StaggerContainer>

        {/* Service Cards — Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewServices.map((srv, i) => (
            <FadeIn
              key={srv.id}
              blur
              standalone
              delay={i * 0.08}
              className="group relative bg-surface border border-outline/40 hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(62,207,142,0.06)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden rounded-2xl p-10 flex flex-col"
            >
              {/* Number watermark */}
              <div
                className="absolute top-6 right-6 font-headline text-6xl md:text-8xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors leading-none select-none hidden md:block"
                aria-hidden="true"
              >
                {srv.num}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-colors">
                <span className="material-symbols-outlined text-accent text-xl" aria-hidden="true">{srv.icon}</span>
              </div>

              {/* Category */}
              <span className="label-mono text-[10px] text-foreground/40 mb-3">{srv.category}</span>

              {/* Title */}
              <h3 className="font-headline text-2xl font-bold text-foreground tracking-tight mb-4 group-hover:text-accent transition-colors">
                {srv.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/60 font-sans text-sm leading-relaxed mb-8 flex-1">
                {srv.shortDesc}
              </p>

              {/* Feature list */}
              <div className="border-t border-outline/40 pt-6">
                <ul className="space-y-2.5">
                  {srv.features.slice(0, 3).map((f, j) => (
                    <li key={j} className="flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-wider text-foreground/50">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
