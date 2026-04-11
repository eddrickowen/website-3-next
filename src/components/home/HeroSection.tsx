"use client";

import Image from "next/image";
import Link from "next/link";
import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import GlowOrb from "@/components/ui/GlowOrb";
import { COMPANY } from "@/lib/data";
import { useEnquiry } from "@/context/EnquiryContext";

import { Dictionary } from "@/types/dictionary";

interface HeroSectionProps {
  content: Dictionary["home"]["hero"];
}

export default function HeroSection({ content }: HeroSectionProps) {
  const { openEnquiry } = useEnquiry();
  // We don't need language here since the link is defined in the page props or derived
  // but for the sake of the link to services, we'll keep a simple check or take it from props.
  // Actually, let's just use the current path structure.

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg py-24"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/assets/hero_industrial.png"
          alt="Industrial Engineering Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.22] grayscale brightness-50 contrast-125 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 blueprint-grid-dark opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/0 via-dark-bg/40 to-dark-bg" />
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
              <span className="label-mono text-[10px] text-accent lowercase">
                {content.badge}
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn blur delay={0.1}>
            <h1 className="font-headline font-bold tracking-tighter text-dark-fg leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)" }}
            >
              {content.titleTop}
              <br />
              <span className="text-dark-muted italic font-normal">{content.titleItalic}</span>
            </h1>
          </FadeIn>

          {/* Sub-headline */}
          <FadeIn blur delay={0.2}>
            <p className="text-dark-muted max-w-2xl font-sans text-lg md:text-xl leading-relaxed mb-12">
              {content.description}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn blur delay={0.3} className="flex flex-wrap justify-center gap-4 mb-20">
            <Link
              href="services"
              className="px-10 py-5 bg-accent text-dark-bg font-sans font-bold text-sm tracking-wide rounded-full hover:bg-accent/90 hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              {content.ctaWork}
            </Link>
            <button
              onClick={openEnquiry}
              className="px-10 py-5 border border-white/15 text-dark-fg font-sans font-bold text-sm tracking-wide rounded-full hover:bg-white/5 hover:border-accent/30 transition-all font-sans"
            >
              {content.ctaContact}
            </button>
          </FadeIn>

        </StaggerContainer>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2" aria-hidden="true">
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent/60 to-transparent animate-pulse" />
        <span className="label-mono text-[9px] text-dark-muted/40 uppercase">Scroll</span>
      </div>
    </section>
  );
}
