"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { PROJECTS, SERVICES } from "@/lib/data";

// Build filter list from services
const FILTERS = [
  { id: "all", label: "All Projects" },
  ...SERVICES.map((s) => ({
    id: s.id,
    label: s.title.split(" ").slice(0, 2).join(" "),
  })),
];

// Category label map from service ids
const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.id, s.category])
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        badge="Track Record"
        titleTop="Our"
        titleItalic="Clients"
        description="Over 20 corporate clients across Sumatra, Kalimantan, and beyond — spanning Palm Oil, Healthcare, Railway, and industrial sectors."
      />

      <section className="py-24 bg-surface flex-grow">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-outline/30 overflow-x-auto">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full label-mono text-[10px] transition-all shrink-0 ${
                  activeFilter === f.id
                    ? "bg-accent text-dark-bg"
                    : "border border-outline/50 text-foreground/50 hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Project count */}
          <p className="label-mono text-[10px] text-foreground/40 mb-8">
            {filtered.length} client{filtered.length !== 1 ? "s" : ""} found
          </p>

          {/* Project List */}
          <StaggerContainer className="space-y-3">
            {filtered.map((proj, i) => (
              <FadeIn
                key={`${proj.client}-${i}`}
                blur
                delay={i * 0.03}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-7 bg-background border border-outline/30 hover:border-accent/30 hover:shadow-[0_4px_20px_rgba(62,207,142,0.05)] rounded-2xl transition-all duration-400 cursor-default"
              >
                {/* Left */}
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex items-center justify-center w-16 h-10">
                    <span className="label-mono text-[9px] text-foreground/30 group-hover:text-accent/50 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="h-10 w-[1px] bg-outline/50 hidden md:block group-hover:bg-accent/30 transition-colors" aria-hidden="true" />
                  <div>
                    <h2 className="font-headline text-xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
                      {proj.client}
                    </h2>
                    <span className="label-mono text-[9px] text-foreground/40">{proj.location}</span>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="hidden md:block px-3 py-1.5 rounded-full border border-outline/50 label-mono text-[9px] text-foreground/50">
                    {CATEGORY_LABELS[proj.category] ?? proj.category}
                  </span>
                  <span className="font-sans text-sm text-foreground/60 group-hover:text-foreground transition-colors max-w-xs">
                    {proj.scope}
                  </span>
                  <span
                    className="material-symbols-outlined text-foreground/20 group-hover:text-accent transition-all group-hover:translate-x-1.5 hidden md:block"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>

          {/* Trust note */}
          <div className="mt-16 p-8 bg-surface-dim rounded-2xl border border-outline/30 text-center">
            <p className="label-mono text-[10px] text-foreground/40 mb-2">Total Corporate Clients</p>
            <p className="font-headline text-5xl font-bold text-foreground tracking-tighter">20+</p>
            <p className="font-sans text-sm text-foreground/60 mt-2">
              Across Sumatra, Kalimantan & beyond since 1993
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
