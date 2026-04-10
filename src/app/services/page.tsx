"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import { useState } from "react";
import { SERVICES, PARTS_BRANDS } from "@/lib/data";

export default function Services() {
  const [showMore, setShowMore] = useState(false);
  
  const generalServices = SERVICES.filter(s => s.type === "general");
  const visibleGeneral = showMore ? generalServices : generalServices.slice(0, 6);
  const supplyServices = SERVICES.filter(s => s.type === "item-supply");

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        badge="Industrial Solutions"
        titleTop="Integrated"
        titleItalic="Services"
        description="A dual-category catalog of technical industrial support and premium item supply. Serving the Palm Oil, Energy, and Manufacturing sectors for over 30 years."
      />

      {/* Section 1: Industrial Support Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-16">
            <SectionLabel num="01" label="General Engineering" />
            <h2 className="font-headline text-4xl font-bold text-foreground tracking-tight mt-2">
              Industrial Support Services
            </h2>
            <p className="font-sans text-sm text-foreground/50 mt-4 max-w-2xl leading-relaxed">
              Full-scale engineering support — from precision machining to complex HVAC and Palm Oil Mill installations.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleGeneral.map((srv, i) => (
              <FadeIn
                key={srv.id}
                blur
                standalone
                delay={i * 0.05}
                className="group relative bg-surface border border-outline/30 hover:border-accent/40 rounded-2xl p-8 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent text-xl" aria-hidden="true">{srv.icon}</span>
                  </div>
                  <span className="font-headline text-4xl font-bold text-foreground/5">{srv.num}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {srv.title}
                </h3>
                <p className="font-sans text-xs text-foreground/50 leading-loose mb-8">
                  {srv.desc}
                </p>
                <div className="space-y-2">
                  {srv.features.slice(0, 4).map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-[11px] text-foreground/70">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {f}
                    </div>
                  ))}
                  {srv.features.length > 4 && (
                    <div className="text-[10px] text-accent/60 italic pl-3">+{srv.features.length - 4} more specialized tasks</div>
                  )}
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>

          {!showMore && generalServices.length > 6 && (
            <div className="mt-16 text-center">
              <button 
                onClick={() => setShowMore(true)}
                className="px-10 py-4 bg-foreground text-background rounded-full font-sans font-bold text-xs hover:bg-accent hover:text-dark-bg transition-all shadow-lg hover:shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                View All Industrial Support Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 2: Premium Item Supply */}
      <section id="item-supply" className="py-32 bg-surface-dim border-t border-outline/30">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-16">
            <SectionLabel num="02" label="Product Catalog" />
            <h2 className="font-headline text-4xl font-bold text-foreground tracking-tight mt-2">
              Premium Product & Item Supply
            </h2>
            <p className="font-sans text-sm text-foreground/50 mt-4 max-w-2xl leading-relaxed">
              Authorized distribution and genuine spare parts catalog. We represent the industry&apos;s leading manufacturers across bearings, chemicals, and mechanical components.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Supply Service Cards */}
            <StaggerContainer className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {supplyServices.map((srv, i) => (
                <FadeIn
                  key={srv.id}
                  blur
                  standalone
                  delay={i * 0.08}
                  className="bg-background border border-outline/30 rounded-3xl p-10 flex flex-col h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-accent text-2xl" aria-hidden="true">{srv.icon}</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-foreground mb-4 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed mb-10">
                    {srv.desc}
                  </p>
                  <div className="mt-auto space-y-3">
                    {srv.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3 py-2 border-b border-outline/10 text-xs text-foreground/80">
                        <span className="material-symbols-outlined text-accent text-sm" aria-hidden="true">check_circle</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>

            {/* Brand Catalog Sidebar/Detail */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-background border border-outline/30 rounded-3xl p-8 sticky top-24">
                <h4 className="font-headline text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent" aria-hidden="true">verified</span>
                  Authorized Brands
                </h4>
                <div className="space-y-6">
                  {PARTS_BRANDS.map((cat, i) => (
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
                    Need a brand not listed? Contact our sourcing team for custom industrial procurement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
