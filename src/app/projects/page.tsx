"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { PROJECTS, SERVICES } from "@/lib/data";

const MONTHS = [
  "All Months", "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const SECTORS = [
  { id: "all", label: "All Sectors" },
  ...SERVICES.map((s) => ({
    id: s.id,
    label: s.title.split(" ").slice(0, 2).join(" "),
  })),
];

const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.id, s.category])
);

const CATEGORY_ICONS: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.id, s.icon])
);

export default function Projects() {
  const [activeYear, setActiveYear] = useState("All Years");
  const [activeMonth, setActiveMonth] = useState("All Months");
  const [activeSector, setActiveSector] = useState("all");

  // Dynamic years from data
  const yearsList = useMemo(() => {
    const years = Array.from(new Set(PROJECTS.filter(p => p.type === "work").map(p => p.year)));
    return ["All Years", ...years.sort((a,b) => b.localeCompare(a))];
  }, []);

  const filteredWork = useMemo(() => {
    return PROJECTS.filter((p) => {
      const isWork = p.type === "work";
      const matchesYear = activeYear === "All Years" || p.year === activeYear;
      const matchesMonth = activeMonth === "All Months" || p.month === activeMonth;
      const matchesSector = activeSector === "all" || p.category === activeSector;
      return isWork && matchesYear && matchesMonth && matchesSector;
    });
  }, [activeYear, activeMonth, activeSector]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        badge="Project Gallery"
        titleTop="Work"
        titleItalic="History"
        description="A full-context track record of our industrial project executions. Explore our engineering triumphs across 30 years of industrial excellence."
      />

      <section className="py-12 md:py-24 bg-surface flex-grow">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          
          {/* Filtering System */}
          <div className="mt-8 md:mt-0 flex flex-col lg:flex-row gap-8 lg:gap-0 mb-16 p-6 md:p-10 bg-background border border-outline/30 rounded-[32px] md:rounded-[40px] shadow-sm divide-y lg:divide-y-0 lg:divide-x divide-outline/10">
            
            {/* Year Filter */}
            <div className="flex-1 pb-8 lg:pb-0 lg:pr-8">
              <label className="label-mono text-[10px] text-foreground/40 mb-4 block uppercase tracking-widest">Year</label>
              <div className="flex flex-wrap gap-2">
                {yearsList.map(year => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-4 py-2 rounded-xl label-mono text-[10px] transition-all border ${
                      activeYear === year 
                        ? "bg-accent border-accent text-dark-bg font-bold shadow-md shadow-accent/10" 
                        : "bg-surface border-outline/30 text-foreground/50 hover:border-accent/30"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Month Filter */}
            <div className="flex-[1.5] py-8 lg:py-0 lg:px-8">
              <label className="label-mono text-[10px] text-foreground/40 mb-4 block uppercase tracking-widest">Month</label>
              <div className="flex flex-wrap gap-2">
                {MONTHS.map(month => (
                  <button
                    key={month}
                    onClick={() => setActiveMonth(month)}
                    className={`px-3 py-1.5 rounded-lg label-mono text-[9px] transition-all border ${
                      activeMonth === month 
                        ? "bg-foreground border-foreground text-background font-bold" 
                        : "bg-surface border-outline/30 text-foreground/40 hover:border-foreground/30"
                    }`}
                  >
                    {month === "All Months" ? "All" : month.substring(0, 3)}
                  </button>
                ))}
              </div>
            </div>

            {/* Sector Filter */}
            <div className="flex-1 pt-8 lg:pt-0 lg:pl-8">
              <label className="label-mono text-[10px] text-foreground/40 mb-4 block uppercase tracking-widest">Sector</label>
              <div className="relative">
                <select 
                  value={activeSector}
                  onChange={(e) => setActiveSector(e.target.value)}
                  className="w-full bg-surface-dim border border-outline/30 rounded-xl px-4 py-3 label-mono text-[11px] text-foreground focus:ring-1 focus:ring-accent outline-none appearance-none cursor-pointer"
                >
                  {SECTORS.map(s => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/20">
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 px-2">
            <p className="label-mono text-[11px] text-foreground/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Showing {filteredWork.length} Project Results
            </p>
            {(activeYear !== "All Years" || activeMonth !== "All Months" || activeSector !== "all") && (
              <button 
                onClick={() => { setActiveYear("All Years"); setActiveMonth("All Months"); setActiveSector("all"); }}
                className="label-mono text-[10px] text-accent hover:underline uppercase tracking-tighter flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">filter_alt_off</span>
                Clear All Filters
              </button>
            )}
          </div>

          {/* Project Gallery (Grid) */}
          {filteredWork.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredWork.map((proj, i) => (
                <FadeIn
                  key={`${proj.client}-${i}`}
                  blur
                  delay={i * 0.03}
                  className="group relative flex flex-col h-full bg-background border border-outline/30 hover:border-accent/40 rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  {/* Card Top: Metadata & Icon */}
                  <div className="p-8 pb-0 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="label-mono text-[10px] text-accent font-bold uppercase tracking-widest">
                        {proj.month} {proj.year}
                      </span>
                      <span className="label-mono text-[9px] text-foreground/40 tracking-tight">
                        Ref: API-PRJ-{proj.year}-{String(i+1).padStart(3, '0')}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-outline/30 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
                      <span className="material-symbols-outlined text-foreground/30 group-hover:text-accent transition-colors">
                        {CATEGORY_ICONS[proj.category] ?? "construction"}
                      </span>
                    </div>
                  </div>

                  {/* Card Middle: Content */}
                  <div className="p-8 flex-grow">
                    <div className="mb-6">
                      <h2 className="font-headline text-2xl font-bold text-foreground leading-tight tracking-tight mb-2 group-hover:text-accent transition-colors">
                        {proj.client}
                      </h2>
                      <div className="flex items-center gap-2 text-foreground/40">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        <span className="label-mono text-[10px] font-medium uppercase tracking-wider">{proj.location}</span>
                      </div>
                    </div>
                    
                    <div className="p-5 rounded-2xl bg-surface-dim border border-outline/20 group-hover:border-accent/10 transition-colors">
                      <p className="font-sans text-[13px] leading-relaxed text-foreground/70 group-hover:text-foreground/90 transition-colors">
                        {proj.scope}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Category Badge */}
                  <div className="px-8 pb-8 pt-0 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-accent/5 border border-accent/20 label-mono text-[9px] text-accent font-bold">
                      {CATEGORY_LABELS[proj.category] ?? proj.category}
                    </span>
                    <span className="material-symbols-outlined text-foreground/10 group-hover:text-accent group-hover:translate-x-1 transition-all">
                      north_east
                    </span>
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </FadeIn>
              ))}
            </StaggerContainer>
          ) : (
            <div className="py-24 md:py-32 text-center border-2 border-dashed border-outline/20 rounded-[40px] px-8">
              <span className="material-symbols-outlined text-6xl text-foreground/10 mb-4 scale-150">search_off</span>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-foreground/60 mb-2">No projects found for the selected filters.</h3>
              <p className="font-sans text-xs md:text-sm text-foreground/40">Try adjusting your year, month, or sector criteria.</p>
              <button 
                onClick={() => { setActiveYear("All Years"); setActiveMonth("All Months"); setActiveSector("all"); }}
                className="mt-8 px-8 py-3 bg-foreground text-background rounded-full font-sans font-bold text-xs hover:bg-accent hover:text-dark-bg transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Detailed Statistics Grid */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-outline/30 pt-24">
            <div className="space-y-6">
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
                Engineering <br className="hidden md:block" /> <span className="text-dark-muted italic font-normal underline decoration-accent/30 underline-offset-8">Excellence</span> Since 1993
              </h3>
              <p className="font-sans text-sm md:text-base text-foreground/60 leading-relaxed max-w-lg">
                Our multi-decade track record is a testament to our commitment to industrial reliability. From complex chiller overhauls to massive palm oil mill installations, we deliver precision engineering tailored to the Indonesian landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 rounded-3xl bg-surface border border-outline/30 flex flex-col justify-between group hover:border-accent/40 transition-colors">
                <span className="label-mono text-[10px] text-foreground/40 uppercase tracking-widest mb-4 block">Succesful Deliveries</span>
                <span className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tighter group-hover:text-accent transition-colors">500+</span>
              </div>
              <div className="p-8 rounded-3xl bg-surface border border-outline/30 flex flex-col justify-between group hover:border-accent/40 transition-colors">
                <span className="label-mono text-[10px] text-foreground/40 uppercase tracking-widest mb-4 block">Active Regions</span>
                <span className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tighter group-hover:text-accent transition-colors">12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
