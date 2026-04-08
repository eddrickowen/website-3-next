import Image from "next/image";
import Link from "next/link";
import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";
import { COMPANY, STATS } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1565439390117-062e741e57c6?q=80&w=2670&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.06] grayscale"
        />
        <div className="absolute inset-0 blueprint-grid-dark opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/0 via-dark-bg/30 to-dark-bg" />
      </div>

      {/* Ambient glow orbs */}
      <GlowOrb
        size={700}
        color="rgba(62, 207, 142, 0.18)"
        animate
        className="top-1/3 left-1/4"
      />
      <GlowOrb
        size={400}
        color="rgba(62, 207, 142, 0.08)"
        className="bottom-1/4 right-1/3"
      />

      {/* Content */}
      <div className="container mx-auto px-8 z-20 relative grid md:grid-cols-12 gap-8 items-end pb-24 pt-32">
        <StaggerContainer className="md:col-span-8" trigger="animate">
          {/* Badge */}
          <FadeIn blur>
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="label-mono text-[10px] text-accent">
                Trusted Industrial Partner · Est. {COMPANY.founded}
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn blur delay={0.1}>
            <h1 className="font-headline font-bold tracking-tighter text-dark-fg leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
            >
              One-Stop
              <br />
              <span className="text-dark-muted italic font-normal">Industrial.</span>
            </h1>
          </FadeIn>

          {/* Sub-headline */}
          <FadeIn blur delay={0.2}>
            <p className="text-dark-muted max-w-xl font-sans text-lg leading-relaxed mb-12">
              {COMPANY.subTagline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn blur delay={0.3} className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="px-8 py-4 bg-accent text-dark-bg font-sans font-bold text-sm tracking-wide rounded-full hover:bg-accent/90 hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/15 text-dark-fg font-sans font-bold text-sm tracking-wide rounded-full hover:bg-white/5 hover:border-accent/30 transition-all"
            >
              Get a Quote
            </Link>
          </FadeIn>
        </StaggerContainer>

        {/* Right panel — Mini stats */}
        <FadeIn
          delay={0.5}
          direction="left"
          blur
          standalone
          trigger="animate"
          className="md:col-span-4 hidden md:flex flex-col gap-5 border-l border-white/8 pl-8"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="group">
              <div className="font-headline text-4xl font-bold text-dark-fg tracking-tighter mb-0.5 group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              <div className="label-mono text-[9px] text-dark-muted/70">{stat.label}</div>
            </div>
          ))}
          <div className="mt-4 h-[2px] w-8 bg-accent rounded-full" />
          <span className="label-mono text-[9px] text-dark-muted/40">
            Internal Ref / API-001
          </span>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2" aria-hidden="true">
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent/60 to-transparent animate-pulse" />
        <span className="label-mono text-[9px] text-dark-muted/40">Scroll</span>
      </div>
    </section>
  );
}
