import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { TIMELINE } from "@/lib/data";

export default function TimelineSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" aria-label="Company timeline">
      <div className="container mx-auto px-8 max-w-5xl">
        <StaggerContainer className="mb-16">
          <FadeIn blur>
            <SectionLabel num="02" label="Company History" />
          </FadeIn>
          <FadeIn blur delay={0.1}>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              30+ Years of<br />
              <span className="text-foreground/35 italic font-normal">Engineering Excellence</span>
            </h2>
          </FadeIn>
        </StaggerContainer>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[72px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-outline/40 to-transparent"
            aria-hidden="true"
          />

          <StaggerContainer className="space-y-0">
            {TIMELINE.map((item, i) => (
              <FadeIn
                key={item.year}
                blur
                delay={i * 0.05}
                className="group relative flex items-start gap-10 py-8 border-b border-outline/20 last:border-0 hover:pl-2 transition-all duration-300"
              >
                {/* Year marker */}
                <div className="relative shrink-0 w-[88px] text-right">
                  <span className="font-headline text-3xl font-bold text-foreground/20 group-hover:text-accent transition-colors">
                    {item.year}
                  </span>
                  {/* Dot */}
                  <div
                    className="absolute right-[-21px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-accent/40 bg-background group-hover:bg-accent group-hover:border-accent transition-all"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-0">
                  <h3 className="font-headline text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
