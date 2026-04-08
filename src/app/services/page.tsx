"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/data";

// Collect unique categories dynamically
const ALL_CATEGORIES = ["All", ...Array.from(new Set(SERVICES.map((s) => s.category)))];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        badge="Engineering Catalog"
        titleTop="Our"
        titleItalic="Services"
        description="From Palm Oil Mill support to chemical distribution — comprehensive industrial solutions delivered by experienced engineers and technical specialists."
      />

      <section className="py-24 bg-background flex-grow">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-outline/30">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full label-mono text-[10px] transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-dark-bg"
                    : "border border-outline/50 text-foreground/50 hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((srv, i) => (
              <div key={srv.id} id={srv.id}>
                <FadeIn
                  blur
                  standalone
                  delay={i * 0.06}
                  className="group relative bg-surface border border-outline/40 hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(62,207,142,0.06)] rounded-2xl overflow-hidden transition-all duration-500 h-full"
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    aria-hidden="true"
                  />

                  <div className="p-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent text-xl">
                          {srv.icon}
                        </span>
                      </div>
                      <span className="font-headline text-5xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors leading-none">
                        {srv.num}
                      </span>
                    </div>

                    <SectionLabel label={srv.category} className="mb-3" />
                    <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4 group-hover:text-accent transition-colors">
                      {srv.title}
                    </h2>
                    <p className="font-sans text-sm text-foreground/60 leading-relaxed mb-8">
                      {srv.desc}
                    </p>

                    {/* Features */}
                    <div className="border-t border-outline/40 pt-6">
                      <p className="label-mono text-[9px] text-foreground/40 mb-4">
                        Scope of Work
                      </p>
                      <ul className="grid grid-cols-2 gap-2.5">
                        {srv.features.map((f, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 font-sans text-xs text-foreground/60"
                          >
                            <span
                              className="w-1 h-1 rounded-full bg-accent flex-shrink-0"
                              aria-hidden="true"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
