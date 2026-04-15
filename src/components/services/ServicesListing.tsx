"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import { SERVICES, PARTS_BRANDS } from "@/lib/data";
import { Dictionary } from "@/types/dictionary";

interface ServicesListingProps {
  content: Dictionary["servicesPage"];
  servicesContent: Dictionary["services"];
}

const SERVICE_IMAGES: Record<string, string> = {
  "palm-oil": "/images/assets/cat-palm.png",
  "phe": "/images/assets/cat-phe.png",
  "chiller": "/images/assets/cat-chiller.png",
  "cooling-tower": "/images/assets/cat-chiller.png",
  "boiler": "/images/assets/cat-boiler.png",
  "machining": "/images/assets/workshop.png",
  "chemicals": "/images/assets/cat-chemicals.png",
  "spare-parts": "/images/assets/cat-parts.png",
};

export default function ServicesListing({ content, servicesContent }: ServicesListingProps) {
  const [showMore, setShowMore] = useState(false);
  
  const generalServices = SERVICES.filter(s => s.type === "general");
  const visibleGeneralCount = showMore ? generalServices.length : 6;
  const supplyServices = SERVICES.filter(s => s.type === "item-supply");

  return (
    <>
      {/* Section 1: Industrial Support Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-16">
            <SectionLabel num="01" label={content.section1.label} />
            <h2 className="font-headline text-4xl font-bold text-foreground tracking-tight mt-2">
              {content.section1.title}
            </h2>
            <p className="font-sans text-sm text-foreground/50 mt-4 max-w-2xl leading-relaxed">
              {content.section1.desc}
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalServices.slice(0, visibleGeneralCount).map((srv, i) => {
              // Get the localized content from servicesContent prop
              const localizedSrv = servicesContent.items.find(s => s.id === srv.id);
              if (!localizedSrv) return null;

              return (
                <FadeIn
                  key={srv.id}
                  blur
                  standalone
                  delay={i * 0.05}
                  className="group relative bg-surface border border-outline/30 hover:border-accent/40 rounded-2xl p-8 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <Image
                      src={SERVICE_IMAGES[srv.id] || "/images/assets/hero_industrial.png"}
                      alt=""
                      fill
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface/80 to-transparent" />
                  </div>

                  <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent text-xl" aria-hidden="true">{srv.icon}</span>
                    </div>
                    <span className="font-headline text-4xl font-bold text-foreground/5">{localizedSrv.num}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {localizedSrv.title}
                  </h3>
                  <p className="font-sans text-xs text-foreground/50 leading-loose mb-8">
                    {localizedSrv.shortDesc}
                  </p>
                  <div className="space-y-2">
                    {localizedSrv.features.slice(0, 4).map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-[11px] text-foreground/70">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {f}
                      </div>
                    ))}
                    {localizedSrv.features.length > 4 && (
                      <div className="text-[10px] text-accent/60 italic pl-3">
                        +{localizedSrv.features.length - 4} {content.section1.moreTasks}
                      </div>
                    )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>

          {!showMore && generalServices.length > 6 && (
            <div className="mt-16 text-center">
              <button 
                onClick={() => setShowMore(true)}
                className="px-10 py-4 bg-foreground text-background rounded-full font-sans font-bold text-xs hover:bg-accent hover:text-dark-bg transition-all shadow-lg hover:shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                {content.section1.viewAll}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 2: Premium Item Supply */}
      <section id="item-supply" className="py-32 bg-surface-dim border-t border-outline/30">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-16">
            <SectionLabel num="02" label={content.section2.label} />
            <h2 className="font-headline text-4xl font-bold text-foreground tracking-tight mt-2">
              {content.section2.title}
            </h2>
            <p className="font-sans text-sm text-foreground/50 mt-4 max-w-2xl leading-relaxed">
              {content.section2.desc}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Supply Service Cards */}
            <StaggerContainer className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {supplyServices.map((srv, i) => {
                const localizedSrv = servicesContent.items.find(s => s.id === srv.id);
                if (!localizedSrv) return null;

                return (
                  <FadeIn
                    key={srv.id}
                    blur
                    standalone
                    delay={i * 0.08}
                    className="group relative bg-background border border-outline/30 rounded-3xl p-10 flex flex-col h-full overflow-hidden"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                      <Image
                        src={SERVICE_IMAGES[srv.id] || "/images/assets/category_palmoil_visual.png"}
                        alt=""
                        fill
                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                      <span className="material-symbols-outlined text-accent text-2xl" aria-hidden="true">{srv.icon}</span>
                    </div>
                    <h3 className="font-headline text-3xl font-bold text-foreground mb-4 tracking-tight">
                      {localizedSrv.title}
                    </h3>
                    <p className="font-sans text-sm text-foreground/60 leading-relaxed mb-10">
                      {localizedSrv.shortDesc}
                    </p>
                    <div className="mt-auto space-y-3">
                      {localizedSrv.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3 py-2 border-b border-outline/10 text-xs text-foreground/80">
                          <span className="material-symbols-outlined text-accent text-sm" aria-hidden="true">check_circle</span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                );
              })}
            </StaggerContainer>

            {/* Brand Catalog Sidebar/Detail */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-background border border-outline/30 rounded-3xl p-8 sticky top-24">
                <h4 className="font-headline text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent" aria-hidden="true">verified</span>
                  {content.section2.brands}
                </h4>
                <div className="space-y-6">
                  {PARTS_BRANDS.map((cat) => (
                    <div key={cat.category} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-accent/40" aria-hidden="true">{cat.icon}</span>
                        <p className="label-mono text-[9px] text-foreground/40 uppercase tracking-widest">{cat.category}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.brands.split(", ").map(brand => (
                          <span key={brand} className="px-2.5 py-1 rounded bg-surface border border-outline/30 text-[10px] text-foreground font-semibold">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
                  <p className="font-sans text-[11px] text-foreground/70 leading-relaxed text-center">
                    {content.section2.footerNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
