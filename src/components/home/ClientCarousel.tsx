"use client";

import { CLIENT_LOGOS } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { Dictionary } from "@/types/dictionary";

interface ClientCarouselProps {
  content: Dictionary["home"]["clients"];
}

export default function ClientCarousel({ content }: ClientCarouselProps) {
  // Divide clients into two rows for a dense marquee look - Triple segments for perfect infinite loop
  const midpoint = Math.ceil(CLIENT_LOGOS.length / 2);
  const row1 = [...CLIENT_LOGOS.slice(0, midpoint), ...CLIENT_LOGOS.slice(0, midpoint), ...CLIENT_LOGOS.slice(0, midpoint)];
  const row2 = [...CLIENT_LOGOS.slice(midpoint), ...CLIENT_LOGOS.slice(midpoint), ...CLIENT_LOGOS.slice(midpoint)];

  return (
    <section className="py-24 bg-background overflow-hidden relative" aria-label="Corporate clients">
      <div className="container mx-auto px-8 max-w-7xl mb-12">
        <FadeIn blur standalone>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionLabel num="20+" label={content.title} className="mb-4" />
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground tracking-tight">
                {content.trustedBy}
              </h2>
            </div>
            <p className="font-sans text-sm text-foreground/40 max-w-sm leading-relaxed">
              {content.desc}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative flex overflow-hidden py-4 select-none" aria-hidden="true">
        <div className="flex animate-marquee-row1 whitespace-nowrap gap-6 px-3">
          {row1.map((client, i) => (
            <div
              key={`c1-${i}`}
              className="flex items-center justify-center min-w-[240px] px-8 py-6 bg-surface border border-outline/30 rounded-2xl hover:border-accent/30 transition-colors"
            >
              <span className="font-headline text-xs font-black text-foreground/30 uppercase tracking-[0.2em] italic">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Delayed/Reverse) */}
      <div className="relative flex overflow-hidden py-4 select-none" aria-hidden="true">
        <div className="flex animate-marquee-row2 whitespace-nowrap gap-6 px-3">
          {row2.map((client, i) => (
            <div
              key={`c2-${i}`}
              className="flex items-center justify-center min-w-[240px] px-8 py-6 bg-surface border border-outline/30 rounded-2xl hover:border-accent/30 transition-colors"
            >
              <span className="font-headline text-xs font-black text-foreground/30 uppercase tracking-[0.2em] italic">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
