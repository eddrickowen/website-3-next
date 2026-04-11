"use client";

import { useState, useMemo } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { PROJECTS, SERVICES } from "@/lib/data";
import { Dictionary } from "@/types/dictionary";

const MONTH_ORDER = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface ProjectGalleryProps {
  content: Dictionary["projectsPage"];
  servicesContent: Dictionary["services"];
  language: string;
}

export default function ProjectGallery({ content, servicesContent, language }: ProjectGalleryProps) {
  const [activeYear, setActiveYear] = useState("All Years");
  const [activeMonth, setActiveMonth] = useState("All Months");
  const [activeSector, setActiveSector] = useState("all");
  const [showMore, setShowMore] = useState(false);

  // Sector labels based on dictionary
  const SECTORS = useMemo(() => {
    return [
      { id: "all", label: content.filters.all },
      ...SERVICES.filter((s) => s.type === "general").map((s) => {
        const localizedSrv = servicesContent.items.find(item => item.id === s.id);
        let label = localizedSrv?.title || s.title;
        
        if (s.id === "mec-civil") label = "M&E / Civil";
        else if (s.id === "chiller") label = "Chiller Srv";
        else if (s.id === "phe") label = "PHE Service";
        else if (s.id === "boiler") label = "Boiler Srv";
        else if (s.id === "palm-oil") label = "Palm Oil";
        else label = label.split(" ").slice(0, 2).join(" ").replace("&", "").trim();
        
        return {
          id: s.id,
          label: label,
        };
      }),
    ];
  }, [content, servicesContent]);

  const CATEGORY_LABELS: Record<string, string> = useMemo(() => 
    Object.fromEntries(servicesContent.items.map((s) => [s.id, s.category])),
    [servicesContent]
  );

  const CATEGORY_ICONS: Record<string, string> = useMemo(() => 
    Object.fromEntries(SERVICES.map((s) => [s.id, s.icon])),
    []
  );

  const yearsList = useMemo(() => {
    const years = Array.from(new Set(PROJECTS.filter(p => p.type === "work").map(p => p.year)));
    return ["All Years", ...years.sort((a, b) => Number(b) - Number(a))];
  }, []);

  const hasProjects = (year: string, month: string, sector: string) =>
    PROJECTS.some(p =>
      p.type === "work" &&
      (year === "All Years" || p.year === year) &&
      (month === "All Months" || p.month === month) &&
      (sector === "all" || p.category === sector)
    );

  const monthsWithData = useMemo(() => {
    const set = new Set(
      PROJECTS
        .filter(p => 
          p.type === "work" && 
          (activeYear === "All Years" || p.year === activeYear) &&
          (activeSector === "all" || p.category === activeSector)
        )
        .map(p => p.month)
    );
    return set;
  }, [activeYear, activeSector]);

  const sectorsWithData = useMemo(() => {
    const set = new Set(
      PROJECTS
        .filter(p => 
          p.type === "work" && 
          (activeYear === "All Years" || p.year === activeYear) &&
          (activeMonth === "All Months" || p.month === activeMonth)
        )
        .map(p => p.category)
    );
    return set;
  }, [activeYear, activeMonth]);

  const filteredWork = useMemo(() => {
    return PROJECTS.filter(p =>
      p.type === "work" &&
      (activeYear === "All Years" || p.year === activeYear) &&
      (activeMonth === "All Months" || p.month === activeMonth) &&
      (activeSector === "all" || p.category === activeSector)
    );
  }, [activeYear, activeMonth, activeSector]);

  const visibleWork = useMemo(() => {
    return showMore ? filteredWork : filteredWork.slice(0, 6);
  }, [filteredWork, showMore]);

  const handleYearChange = (year: string) => {
    const next = activeYear === year ? "All Years" : year;
    setActiveYear(next);
    setActiveSector("all");
    setActiveMonth("All Months");
    setShowMore(false);
  };

  const handleMonthChange = (month: string) => {
    const next = activeMonth === month ? "All Months" : month;
    if (next !== "All Months" && activeSector !== "all") {
      if (!hasProjects(activeYear, next, activeSector)) {
        setActiveSector("all");
      }
    }
    setActiveMonth(next);
    setShowMore(false);
  };

  const handleSectorChange = (sectorId: string) => {
    const next = activeSector === sectorId ? "all" : sectorId;
    if (next !== "all" && activeMonth !== "All Months") {
      if (!hasProjects(activeYear, activeMonth, next)) {
        setActiveMonth("All Months");
      }
    }
    setActiveSector(next);
    setShowMore(false);
  };

  return (
    <section className="py-12 md:py-24 bg-surface flex-grow">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">

        {/* Filtering System */}
        <div className="mt-8 md:mt-0 flex flex-col lg:flex-row mb-12 md:mb-16 p-5 md:p-10 bg-background border border-outline/30 rounded-[32px] md:rounded-[40px] shadow-sm divide-y lg:divide-y-0 lg:divide-x divide-outline/10">

          {/* Year Filter */}
          <div role="group" aria-labelledby="filter-year-label" className="flex-1 pb-6 lg:pb-0 lg:pr-8">
            <p id="filter-year-label" className="label-mono text-[10px] text-foreground/40 mb-2 md:mb-4 block uppercase tracking-widest">{content.filters.yearLabel}</p>
            <div className="flex flex-wrap gap-2">
              {yearsList.map(year => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  aria-pressed={activeYear === year}
                  className={`px-4 py-2 rounded-xl label-mono text-[10px] md:text-[11px] transition-all border focus:outline-none focus:ring-2 focus:ring-accent/50 ${activeYear === year
                      ? "bg-accent border-accent text-dark-bg font-bold shadow-md shadow-accent/10"
                      : "bg-surface border-outline/30 text-foreground/50 hover:border-accent/30"
                    }`}
                >
                  {year === "All Years" ? content.filters.all : year}
                </button>
              ))}
            </div>
          </div>

          {/* Month Filter */}
          <div role="group" aria-labelledby="filter-month-label" className="flex-[1.5] py-6 lg:py-0 lg:px-8">
            <p id="filter-month-label" className="label-mono text-[10px] text-foreground/40 mb-2 md:mb-4 block uppercase tracking-widest">{content.filters.monthLabel}</p>
            <div className="flex flex-wrap gap-2">
              {["All Months", ...MONTH_ORDER].map(month => {
                const isActive = activeMonth === month;
                const hasSomeData = month === "All Months" || monthsWithData.has(month);
                return (
                  <button
                    key={month}
                    onClick={() => handleMonthChange(month)}
                    aria-pressed={isActive}
                    className={`px-3 py-2 md:px-4 rounded-lg label-mono text-[10px] md:text-[11px] transition-all border focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      isActive
                        ? "bg-foreground border-foreground text-background font-bold shadow-md"
                        : hasSomeData
                          ? "bg-surface border-outline/30 text-foreground/40 hover:border-foreground/30"
                          : "bg-surface/50 border-outline/10 text-foreground/15 cursor-default"
                    }`}
                  >
                    {month === "All Months" ? content.filters.all : month.substring(0, 3)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sector Filter */}
          <div role="group" aria-labelledby="filter-sector-label" className="flex-1 pt-6 lg:pt-0 lg:pl-8">
            <p id="filter-sector-label" className="label-mono text-[10px] text-foreground/40 mb-2 md:mb-4 block uppercase tracking-widest">{content.filters.sectorLabel}</p>
            <div className="flex flex-wrap gap-2">
              {SECTORS.map(s => {
                const isActive = activeSector === s.id;
                const hasSomeData = s.id === "all" || sectorsWithData.has(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSectorChange(s.id)}
                    aria-pressed={isActive}
                    className={`px-3 py-2 md:px-4 rounded-lg label-mono text-[10px] md:text-[11px] transition-all border focus:outline-none focus:ring-2 focus:ring-accent/50 whitespace-nowrap ${
                      isActive
                        ? "bg-accent border-accent text-dark-bg font-bold shadow-sm"
                        : hasSomeData
                          ? "bg-surface border-outline/30 text-foreground/40 hover:border-accent/30"
                          : "bg-surface/50 border-outline/10 text-foreground/15 cursor-default"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 px-2">
          <p className="label-mono text-[11px] text-foreground/40 flex items-center gap-2" aria-live="polite" role="status">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            {content.filters.resultsCount} {visibleWork.length} {content.filters.of} {filteredWork.length} Project Results
          </p>
          {(activeYear !== "All Years" || activeMonth !== "All Months" || activeSector !== "all") && (
            <button
              onClick={() => handleYearChange("All Years")}
              className="label-mono text-[10px] text-accent hover:underline uppercase tracking-tighter flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">filter_alt_off</span>
              {content.filters.clear}
            </button>
          )}
        </div>

        {/* Project Gallery (Grid) */}
        {filteredWork.length > 0 ? (
          <>
            <StaggerContainer key={`${activeYear}-${activeMonth}-${activeSector}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visibleWork.map((proj, i) => (
                <FadeIn
                  key={proj.id}
                  blur
                  standalone
                  delay={i * 0.03}
                  className="group relative flex flex-col h-full bg-background border border-outline/30 hover:border-accent/40 rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  <div className="p-8 pb-0 flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="label-mono text-[10px] text-accent font-bold uppercase tracking-widest">
                        {proj.month} {proj.year}
                      </span>
                      <span className="label-mono text-[9px] text-foreground/40 tracking-tight">
                        Ref: API-PRJ-{proj.year}-{String(proj.id).padStart(3, '0')}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-outline/30 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
                      <span className="material-symbols-outlined text-foreground/30 group-hover:text-accent transition-colors" aria-hidden="true">
                        {CATEGORY_ICONS[proj.category] ?? "construction"}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-grow">
                    <div className="mb-6">
                      <h2 className="font-headline text-2xl font-bold text-foreground leading-tight tracking-tight mb-2 group-hover:text-accent transition-colors">
                        {proj.client}
                      </h2>
                      <div className="flex items-center gap-2 text-foreground/40">
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">location_on</span>
                        <span className="label-mono text-[10px] font-medium uppercase tracking-wider">{proj.location}</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-surface-dim border border-outline/20 group-hover:border-accent/10 transition-colors">
                      <p className="font-sans text-[13px] leading-relaxed text-foreground/70 group-hover:text-foreground/90 transition-colors">
                        {proj.scope}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-0 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-accent/5 border border-accent/20 label-mono text-[9px] text-accent font-bold">
                      {CATEGORY_LABELS[proj.category] ?? proj.category}
                    </span>
                    <span className="material-symbols-outlined text-foreground/10 group-hover:text-accent group-hover:translate-x-1 transition-all" aria-hidden="true">
                      north_east
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </FadeIn>
              ))}
            </StaggerContainer>

            {!showMore && filteredWork.length > 6 && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setShowMore(true)}
                  className="px-10 py-4 bg-foreground text-background rounded-full font-sans font-bold text-xs hover:bg-accent hover:text-dark-bg transition-all shadow-lg hover:shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  {content.filters.showAll}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-24 md:py-32 text-center border-2 border-dashed border-outline/20 rounded-[40px] px-8">
            <span className="material-symbols-outlined text-6xl text-foreground/10 mb-4 scale-150" aria-hidden="true">search_off</span>
            <h3 className="font-headline text-xl md:text-2xl font-bold text-foreground/60 mb-2">
              {content.empty.title}
            </h3>
            <p className="font-sans text-xs md:text-sm text-foreground/40">
              {content.empty.desc}
            </p>
            <button
              onClick={() => handleYearChange("All Years")}
              className="mt-8 px-8 py-3 bg-foreground text-background rounded-full font-sans font-bold text-xs hover:bg-accent hover:text-dark-bg transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              {content.empty.reset}
            </button>
          </div>
        )}

        {/* Detailed Statistics Grid */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-outline/30 pt-24">
          <div className="space-y-6">
            <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              {content.stats.excellence} <br className="hidden md:block" /> <span className="text-accent italic font-normal underline decoration-accent/30 underline-offset-8">{content.stats.excellenceAccent}</span> Since 1993
            </h3>
            <p className="font-sans text-sm md:text-base text-foreground/60 leading-relaxed max-w-lg">
              {content.stats.excellenceDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-8 rounded-3xl bg-surface border border-outline/30 flex flex-col justify-between group hover:border-accent/40 transition-colors">
              <span className="label-mono text-[10px] text-foreground/40 uppercase tracking-widest mb-4 block">{content.stats.deliveryLabel}</span>
              <span className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tighter group-hover:text-accent transition-colors">{content.stats.deliveryVal}</span>
            </div>
            <div className="p-8 rounded-3xl bg-surface border border-outline/30 flex flex-col justify-between group hover:border-accent/40 transition-colors">
              <span className="label-mono text-[10px] text-foreground/40 uppercase tracking-widest mb-4 block">{content.stats.regionsLabel}</span>
              <span className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tighter group-hover:text-accent transition-colors">{content.stats.regionsVal}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
