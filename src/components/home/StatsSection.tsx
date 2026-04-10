import CountUp from "@/components/animations/CountUp";
import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section
      className="bg-dark-bg border-y border-white/5 relative overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Blueprint grid background extension */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-10" aria-hidden="true" />
      
      {/* Subtle accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true" />

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 relative z-10">
        {STATS.map((stat, i) => (
          <FadeIn
            key={i}
            className="group relative px-8 md:px-12 py-16 md:py-24 flex flex-col justify-center items-center text-center hover:bg-white/[0.01] transition-colors"
          >
            {/* Hover glow accent */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              aria-hidden="true"
            />

            <span className="label-mono text-[13px] text-accent/80 uppercase tracking-[0.2em] mb-4">
              {stat.label}
            </span>
            <div>
              <div className="font-headline text-4xl md:text-8xl font-bold tracking-tighter text-dark-fg mb-3 leading-none">
                <CountUp target={stat.value} duration={2000} className="tabular-nums" />
              </div>
              <div className="label-mono text-[14px] text-dark-muted/70 font-medium">
                {stat.sub}
              </div>
            </div>
          </FadeIn>
        ))}
      </StaggerContainer>

      {/* Subtle accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true" />
    </section>
  );
}
