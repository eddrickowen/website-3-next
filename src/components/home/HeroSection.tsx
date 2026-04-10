"use client";

import Image from "next/image";
import Link from "next/link";
import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";
import { COMPANY } from "@/lib/data";
import { useEnquiry } from "@/context/EnquiryContext";

export default function HeroSection() {
  const { openEnquiry } = useEnquiry();
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg py-24"
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
      <div className="container mx-auto px-8 z-20 relative">
        <StaggerContainer className="flex flex-col items-center text-center max-w-4xl mx-auto" trigger="animate">
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
              style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)" }}
            >
              One-Stop
              <br />
              <span className="text-dark-muted italic font-normal">Industrial.</span>
            </h1>
          </FadeIn>

          {/* Sub-headline */}
          <FadeIn blur delay={0.2}>
            <p className="text-dark-muted max-w-2xl font-sans text-lg md:text-xl leading-relaxed mb-12">
              {COMPANY.subTagline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn blur delay={0.3} className="flex flex-wrap justify-center gap-4 mb-20">
            <Link
              href="/services"
              className="px-10 py-5 bg-accent text-dark-bg font-sans font-bold text-sm tracking-wide rounded-full hover:bg-accent/90 hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              Explore Services
            </Link>
            <button
              onClick={openEnquiry}
              className="px-10 py-5 border border-white/15 text-dark-fg font-sans font-bold text-sm tracking-wide rounded-full hover:bg-white/5 hover:border-accent/30 transition-all font-sans"
            >
              Get a Quote
            </button>
          </FadeIn>

        </StaggerContainer>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2" aria-hidden="true">
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent/60 to-transparent animate-pulse" />
        <span className="label-mono text-[9px] text-dark-muted/40">Scroll</span>
      </div>
    </section>
  );
}
