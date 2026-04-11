"use client";

import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { PARTS_BRANDS, INDUSTRIES } from "@/lib/data";
import Link from "next/link";

// Flatten all brands for the carousel
const ALL_BRANDS = Array.from(new Set(
  PARTS_BRANDS.flatMap(item => item.brands.split(", "))
));

// Split brands into two groups for two rows
const midpoint = Math.ceil(ALL_BRANDS.length / 2);
const ROW_1_BRANDS = [...ALL_BRANDS.slice(0, midpoint), ...ALL_BRANDS.slice(0, midpoint), ...ALL_BRANDS.slice(0, midpoint)];
const ROW_2_BRANDS = [...ALL_BRANDS.slice(midpoint), ...ALL_BRANDS.slice(midpoint), ...ALL_BRANDS.slice(midpoint)];

import { Dictionary } from "@/types/dictionary";

interface PartnersSectionProps {
  language: "en" | "id";
  content: Dictionary["home"]["partners"];
}

export default function PartnersSection({ language, content }: PartnersSectionProps) {
  const getIndustryKey = (name: string): keyof Dictionary["home"]["partners"]["industries"] | "" => {
    if (name.includes("Palm Oil")) return "palm_oil";
    if (name.includes("Electronic")) return "electronic";
    if (name.includes("Healthcare")) return "healthcare";
    if (name.includes("Pulp")) return "pulp_paper";
    if (name.includes("Railway")) return "railway";
    if (name.includes("Energy")) return "energy";
    return "";
  };

  return (
    <section
      className="py-28 bg-surface-dim border-y border-outline/30 overflow-hidden relative"
      aria-label="Authorized brands and industries served"
    >
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Header */}
        <FadeIn blur standalone className="text-center mb-12">
          <SectionLabel num={content.badge} label={content.title} className="justify-center" />
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            {content.subtitle}
          </h2>
          <p className="font-sans text-sm text-foreground/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            {content.desc}
          </p>
        </FadeIn>
      </div>

      {/* Infinite Moving Carousel - Row 1 (Right to Left) — decorative, hidden from assistive tech */}
      <div className="relative flex overflow-hidden py-3 select-none" aria-hidden="true">
        <div className="flex animate-marquee-row1 whitespace-nowrap gap-6 px-3">
          {ROW_1_BRANDS.map((brand, i) => (
            <div
              key={`${brand}-r1-${i}`}
              className="group relative flex items-center justify-center min-w-[160px] h-20 bg-background border border-outline/30 rounded-2xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 cursor-default"
            >
              <div className="px-6">
                <span className="font-headline text-lg font-black text-foreground/20 group-hover:text-accent transition-colors tracking-tighter uppercase italic">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Moving Carousel - Row 2 (Left to Right) — decorative, hidden from assistive tech */}
      <div className="relative flex overflow-hidden py-3 select-none" aria-hidden="true">
        <div className="flex animate-marquee-row2 whitespace-nowrap gap-6 px-3">
          {ROW_2_BRANDS.map((brand, i) => (
            <div
              key={`${brand}-r2-${i}`}
              className="group relative flex items-center justify-center min-w-[160px] h-20 bg-background border border-outline/30 rounded-2xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 cursor-default"
            >
              <div className="px-6">
                <span className="font-headline text-lg font-black text-foreground/20 group-hover:text-accent transition-colors tracking-tighter uppercase italic">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 max-w-7xl mt-12 mb-28">
        <div className="text-center">
          <Link 
            href={`/${language}/services#item-supply`} 
            className="label-mono text-[10px] text-accent hover:underline decoration-accent/30 underline-offset-4 flex items-center justify-center gap-2 group"
          >
            {content.catalog}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-8 max-w-7xl">
        {/* Industries Served Section */}
        <div className="border-t border-outline/30 pt-20">
          <FadeIn blur standalone className="text-center mb-16">
            <SectionLabel num={content.expertiseBadge} label={content.expertiseTitle} className="justify-center" />
            <h3 className="font-headline text-3xl md:text-5xl font-bold text-foreground tracking-tight uppercase">
              {content.expertiseSubtitle.split(" by ")[0]} <br className="hidden md:block" /> {content.expertiseSubtitle.split(" by ").slice(1).join(" by ")}
            </h3>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {INDUSTRIES.map((ind, i) => {
              const key = getIndustryKey(ind.name);
              return (
                <FadeIn
                  key={ind.name}
                  blur
                  standalone
                  delay={i * 0.05}
                  className={`flex items-center gap-4 p-6 rounded-2xl border transition-all ${
                    ind.primary
                      ? "bg-accent/5 border-accent/20 text-foreground"
                      : "bg-surface border-outline/40 text-foreground/70 hover:border-accent/20"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ind.primary ? "bg-accent/10" : "bg-foreground/5"}`}>
                    <span className={`material-symbols-outlined text-[20px] ${ind.primary ? "text-accent" : "text-foreground/30"}`} aria-hidden="true">
                      {ind.icon}
                    </span>
                  </div>
                   <span className="font-sans text-[14px] font-bold leading-tight">
                    {key ? content.industries[key] : ind.name}
                  </span>
                  {ind.primary && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
