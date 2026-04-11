"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { TIMELINE } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function TimelineSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  
  // PRECISION SYNC FIX: 
  // We use a scrollTarget that spans from the center of the first item to the center of the last.
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-background relative overflow-hidden" 
      aria-label="Company timeline"
    >
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="mb-24">
          <FadeIn blur standalone>
            <SectionLabel num={t("about.timeline.badge")} label={t("about.timeline.label")} />
          </FadeIn>
          <FadeIn blur delay={0.1} standalone>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-6">
               {t("about.timeline.title")}<br />
               <span className="text-foreground/35 italic font-normal">{t("about.timeline.titleAccent")}</span>
            </h2>
          </FadeIn>
        </div>

        {/* Timeline Desktop/Tablet Layout */}
        <div className="relative">
          {/* Scroll Target Box — Perfectly matches first to last dot */}
          <div 
            ref={scrollTargetRef}
            className="absolute left-0 right-0"
            style={{ top: '4rem', bottom: '4rem' }} 
            aria-hidden="true"
          />

          {/* Vertical Track (Static) */}
          <div
            className="absolute left-[50%] md:left-[180px] top-[4rem] bottom-[4rem] w-[2px] bg-white/5 -translate-x-1/2"
            aria-hidden="true"
          />
          
          {/* Vertical Fill (Scroll-linked) */}
          <motion.div
            style={{ scaleY: pathLength, originY: 0 }}
            className="absolute left-[50%] md:left-[180px] top-[4rem] bottom-[4rem] w-[2px] bg-accent -translate-x-1/2 z-20"
            aria-hidden="true"
          />

          <div className="space-y-0 relative z-10">
            {TIMELINE.map((_, i) => (
              <TimelineItem 
                key={i} 
                item={{
                  year: t(`about.timeline.items.${i}.year`),
                  title: t(`about.timeline.items.${i}.title`),
                  desc: t(`about.timeline.items.${i}.desc`)
                }} 
                i={i} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, i }: { item: { year: string, title: string, desc: string }, i: number }) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Use scroll with a tight focal offset to capture the "pass through center" effect
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start center", "end center"]
  });

  // Transform opacity and scale when item is in the center "Focus Zone"
  // Tightened ranges [0.48, 0.52] for snappier synchronization with the moving line tip
  const opacity = useTransform(scrollYProgress, [0, 0.48, 0.52, 1], [0.5, 1, 1, 1]);
  const color = useTransform(scrollYProgress, [0, 0.48, 0.52, 1], ["#ffffff99", "#04F990", "#04F990", "#04F990"]);
  const dotScale = useTransform(scrollYProgress, [0, 0.48, 0.52, 1], [1, 1.4, 1.4, 1.4]);
  const dotShadow = useTransform(scrollYProgress, [0, 0.48, 0.52, 1], [
    "0 0 0px #04F99000", 
    "0 0 25px #04F99066", 
    "0 0 25px #04F99066", 
    "0 0 25px #04F99066"
  ]);

  return (
    <div 
      ref={elementRef}
      className={`relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-12 py-16 items-center transition-all duration-700`}
    >
      {/* Year marker */}
      <div className="relative shrink-0 text-center md:text-right hidden md:block pr-12">
        <motion.span 
          style={{ color }}
          className="font-headline text-3xl font-bold transition-colors whitespace-nowrap"
        >
          {item.year}
        </motion.span>
      </div>

      {/* Circle/Dot */}
      <motion.div
        style={{ 
          scale: dotScale,
          backgroundColor: color,
          boxShadow: dotShadow,
          borderColor: color
        }}
        className="absolute left-[50%] md:left-[180px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-background z-30 transition-shadow duration-300"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="flex-1 px-8 md:px-0 text-center md:text-left"
      >
        <div className="md:hidden mb-4">
          <motion.span 
             style={{ color }}
             className="font-headline text-3xl font-bold transition-colors"
          >
            {item.year}
          </motion.span>
        </div>
        <h3 className="font-headline text-2xl font-bold tracking-tight mb-2 text-foreground">
          {item.title}
        </h3>
        <p className="font-sans text-base text-foreground/60 leading-relaxed max-w-2xl">
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
}
