import CountUp from "@/components/animations/CountUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section
      className="bg-dark-surface border-y border-white/5 relative overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Subtle accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true" />

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {STATS.map((stat, i) => (
          <FadeIn
            key={i}
            className="group relative px-10 py-14 flex flex-col justify-between hover:bg-white/[0.02] transition-colors overflow-hidden"
          >
            {/* Hover glow accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              aria-hidden="true"
            />

            <span className="label-mono text-[10px] text-dark-muted/50 mb-4">
              {stat.label}
            </span>
            <div>
              <div className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-dark-fg mb-2 leading-none">
                <CountUp target={stat.value} duration={1800} className="tabular-nums" />
              </div>
              <div className="label-mono text-[10px] text-dark-muted/60">
                {stat.sub}
              </div>
            </div>
          </FadeIn>
        ))}
      </StaggerContainer>

      {/* Subtle accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true" />
    </section>
  );
}
