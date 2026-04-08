import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { MISSION_VISION } from "@/lib/data";

export default function MissionVisionSection() {
  const { mission, vision, values } = MISSION_VISION;

  return (
    <section className="py-32 bg-surface-dim relative" aria-label="Mission and Vision">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Header */}
        <StaggerContainer className="mb-16">
          <FadeIn blur>
            <SectionLabel num="01" label="Core Foundations" />
          </FadeIn>
          <FadeIn blur delay={0.1} className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Strategic Intent
            </h2>
            <p className="font-sans text-sm text-foreground/60 max-w-xs leading-relaxed text-right hidden md:block">
              Defining the parameters of our operational excellence through R&D and future-focused visioning.
            </p>
          </FadeIn>
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Mission — Large Card */}
          <FadeIn
            blur
            className="md:col-span-8 p-10 bg-surface border border-outline/40 hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(62,207,142,0.05)] rounded-2xl group transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-[18px]">{mission.icon}</span>
              </div>
              <span className="label-mono text-[10px] text-accent">Mission</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground mb-5 tracking-tight">
              {mission.title}
            </h3>
            <p className="text-foreground/70 font-sans text-base leading-relaxed">
              {mission.text}
            </p>
          </FadeIn>

          {/* R&D Bar Card */}
          <FadeIn
            blur
            delay={0.1}
            className="md:col-span-4 p-8 bg-dark-bg rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 blueprint-grid-dark opacity-20" aria-hidden="true" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="label-mono text-[9px] text-accent mb-4 block">Focus Area 01</span>
                <h3 className="font-headline text-lg font-bold text-dark-fg mb-4">R&D Commitment</h3>
                <p className="font-sans text-xs text-dark-muted leading-relaxed mb-8">
                  Continuous investment in material science and automated fluid dynamics to keep our solutions at the cutting edge.
                </p>
              </div>
              <div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-accent to-accent/60 rounded-full" />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="label-mono text-[9px] text-dark-muted/50">Optimization</span>
                  <span className="label-mono text-[9px] text-accent">85%</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn
            blur
            delay={0.1}
            className="md:col-span-4 p-8 bg-surface border border-outline/40 hover:border-accent/30 rounded-2xl group transition-all duration-400"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-[18px]">{vision.icon}</span>
              </div>
              <span className="label-mono text-[10px] text-accent">Vision</span>
            </div>
            <h3 className="font-headline text-lg font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
              {vision.title}
            </h3>
            <p className="font-sans text-sm text-foreground/60 leading-relaxed">
              {vision.text}
            </p>
          </FadeIn>

          {/* Values Grid */}
          <FadeIn blur delay={0.15} className="md:col-span-8">
            <div className="grid grid-cols-2 gap-3 h-full">
              {values.map((v) => (
                <div
                  key={v.num}
                  className="p-6 bg-surface border border-outline/40 rounded-2xl hover:border-accent/30 hover:bg-surface-dim transition-all duration-300 group"
                >
                  <span className="label-mono text-[10px] text-accent mb-3 block">{v.num}</span>
                  <span className="font-headline text-lg font-bold text-foreground group-hover:text-accent transition-colors block mb-2">
                    {v.label}
                  </span>
                  <p className="font-sans text-xs text-foreground/50 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </StaggerContainer>
      </div>
    </section>
  );
}
