import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import { MISSION_VISION } from "@/lib/data";
import { Dictionary } from "@/types/dictionary";

interface MissionVisionSectionProps {
  content: Dictionary["about"]["visionSection"];
  common: Dictionary["common"];
}

export default function MissionVisionSection({ content }: MissionVisionSectionProps) {
  const { mission, vision, values } = MISSION_VISION;

  return (
    <section className="py-32 bg-surface-dim relative" aria-label="Mission and Vision">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Header */}
        <StaggerContainer className="mb-16">
          <FadeIn blur>
            <SectionLabel num="01" label={content.title} />
          </FadeIn>
          <FadeIn blur delay={0.1} className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              {content.subtitle}
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
                <span className="material-symbols-outlined text-accent text-[18px]" aria-hidden="true">{mission.icon}</span>
              </div>
              <span className="label-mono text-[10px] text-accent">{content.missionLabel}</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground mb-5 tracking-tight">
              {content.subtitle}
            </h3>
            <ul className="space-y-4">
              {content.mission.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 group-hover/item:scale-125 transition-transform" />
                  <p className="text-foreground/70 font-sans text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* R&D Visual Card */}
          <FadeIn
            blur
            delay={0.1}
            className="md:col-span-4 p-8 bg-dark-bg rounded-2xl relative overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0" style={{ position: "absolute" }}>
              <Image
                src="/images/assets/about_engineering.png"
                alt="Engineering Consultation"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
            </div>

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
                <span className="material-symbols-outlined text-accent text-[18px]" aria-hidden="true">{vision.icon}</span>
              </div>
              <span className="label-mono text-[10px] text-accent">{content.visionLabel}</span>
            </div>
            <h3 className="font-headline text-lg font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
              {content.title}
            </h3>
            <p className="font-sans text-sm text-foreground/60 leading-relaxed">
              {content.vision}
            </p>
          </FadeIn>

          {/* Values Grid */}
          <FadeIn blur delay={0.15} className="md:col-span-8">
            <div className="grid grid-cols-2 gap-3 h-full">
              {values.map((v, i) => (
                <div
                  key={v.num}
                  className="p-6 bg-surface border border-outline/40 rounded-2xl hover:border-accent/30 hover:bg-surface-dim transition-all duration-300 group"
                >
                  <span className="label-mono text-[10px] text-accent mb-3 block">{v.num}</span>
                  <span className="font-headline text-lg font-bold text-foreground group-hover:text-accent transition-colors block mb-2">
                    {content.values[i].label}
                  </span>
                  <p className="font-sans text-xs text-foreground/50 leading-relaxed">
                    {content.values[i].desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </StaggerContainer>
      </div>
    </section>
  );
}
