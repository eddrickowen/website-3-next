"use client";

import Image from "next/image";
import StaggerContainer from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { Dictionary } from "@/types/dictionary";

interface WorkshopSectionProps {
  content: Dictionary["about"]["workshop"];
}

export default function WorkshopSection({ content }: WorkshopSectionProps) {
  return (
    <section className="py-32 bg-dark-bg relative overflow-hidden" aria-label="Machining workshop">
      {/* Blueprint Grid background for industrial feel */}
      <div className="blueprint-grid-dark absolute inset-0 opacity-20" aria-hidden="true" />
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <StaggerContainer>
            <FadeIn blur>
              <SectionLabel num={content.badge} label={content.label} dark />
            </FadeIn>
            
            <FadeIn blur delay={0.1}>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-dark-fg tracking-tight mt-6">
                {content.title}<br />
                <span className="text-accent underline decoration-accent/20 underline-offset-8 italic font-normal">
                  {content.titleAccent}
                </span>
              </h2>
            </FadeIn>
            
            <FadeIn blur delay={0.2}>
              <p className="font-sans text-base text-dark-muted max-w-xl leading-relaxed mt-8">
                {content.desc}
              </p>
            </FadeIn>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {content.stats.map((stat, i) => (
                <FadeIn key={i} blur delay={0.3 + i * 0.1} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-2">
                  <span className="label-mono text-[9px] text-accent uppercase tracking-widest">{stat.label}</span>
                  <span className="font-headline text-lg font-bold text-dark-fg">{stat.val}</span>
                </FadeIn>
              ))}
            </div>
          </StaggerContainer>

          {/* Visual Presentation */}
          <FadeIn blur delay={0.4} className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl">
            {/* Main Image */}
            <Image
              src="/images/assets/workshop.png"
              alt="API Machining Workshop"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60" aria-hidden="true" />
            
            {/* Floating Technical Badge */}
            <div className="absolute bottom-8 left-8 right-8">
               <div className="glass-dark p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent">precision_manufacturing</span>
                    </div>
                    <div>
                      <p className="label-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-1">Standard Operating Proc.</p>
                      <h4 className="font-headline text-sm font-bold text-dark-fg">Quality Assured Fabrication</h4>
                    </div>
                 </div>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
