import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";

interface PageHeaderProps {
  badge?: string;
  titleTop: string;
  titleItalic?: string;
  titleBottom?: string;
  description: string;
  maxWidth?: string;
  dark?: boolean;
}

export default function PageHeader({
  badge,
  titleTop,
  titleItalic,
  titleBottom,
  description,
  maxWidth = "max-w-6xl",
  dark = false,
}: PageHeaderProps) {
  const bg = dark ? "bg-dark-bg" : "bg-surface-dim";
  const fg = dark ? "text-dark-fg" : "text-foreground";
  const fgMuted = dark ? "text-dark-muted" : "text-foreground/60";

  return (
    <section className={`relative pt-44 pb-28 border-b overflow-hidden ${bg} ${dark ? "border-white/8" : "border-outline/30"}`}>
      {/* Ambient glow */}
      <GlowOrb
        size={500}
        color={dark ? "rgba(62, 207, 142, 0.12)" : "rgba(62, 207, 142, 0.08)"}
        animate
        className="left-1/4 top-1/2"
      />

      {dark && (
        <div className="blueprint-grid-dark absolute inset-0 opacity-25" aria-hidden="true" />
      )}

      <div className={`container mx-auto px-8 ${maxWidth} relative z-10`}>
        <StaggerContainer trigger="animate">
          {badge && (
            <FadeIn blur>
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-6 h-[1.5px] bg-accent" />
                <span className="label-mono text-[10px] text-accent">{badge}</span>
              </div>
            </FadeIn>
          )}
          <FadeIn blur delay={0.05}>
            <h1
              className={`font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 ${fg}`}
            >
              {titleTop}{" "}
              {titleItalic && (
                <span className={`italic font-normal ${dark ? "text-dark-muted" : "text-foreground/40"}`}>
                  {titleItalic}
                </span>
              )}
              {titleBottom && <><br />{titleBottom}</>}
            </h1>
          </FadeIn>
          <FadeIn blur delay={0.15}>
            <p className={`font-sans text-lg leading-relaxed max-w-2xl ${fgMuted}`}>
              {description}
            </p>
          </FadeIn>
        </StaggerContainer>
      </div>
    </section>
  );
}
