"use client";

import { motion } from "framer-motion";
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
          {/* Vertical line offset to align with dots */}
          <div
            className="absolute left-[80px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-accent/50 via-outline/40 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-0 relative z-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial="initial"
                whileInView="active"
                viewport={{ 
                  once: false, 
                  amount: 0.8,
                  margin: "-20% 0px -40% 0px" // Focus zone in middle-upper part of screen
                }}
                className="relative flex items-start gap-12 py-10 border-b border-outline/10 last:border-0 transition-all duration-500"
              >
                {/* Year marker */}
                <div className="relative shrink-0 w-[80px] text-right">
                  <motion.span 
                    variants={{
                      initial: { color: "rgba(var(--foreground), 0.15)" },
                      active: { color: "rgba(var(--accent), 1)" }
                    }}
                    className="font-headline text-3xl font-bold transition-colors"
                  >
                    {item.year}
                  </motion.span>
                  
                  {/* Dot aligned with line */}
                  <motion.div
                    variants={{
                      initial: { 
                        backgroundColor: "var(--background)",
                        borderColor: "rgba(var(--accent), 0.2)",
                        scale: 1
                      },
                      active: { 
                        backgroundColor: "rgba(var(--accent), 1)",
                        borderColor: "rgba(var(--accent), 1)",
                        scale: 1.2,
                        boxShadow: "0 0 15px rgba(var(--accent), 0.4)"
                      }
                    }}
                    className="absolute right-[-6px] top-[26px] -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <motion.h3 
                    initial={{ color: "var(--foreground)" }}
                    whileInView={{ color: "var(--accent)" }}
                    viewport={{ amount: 0.8, margin: "-10% 0px -10% 0px" }}
                    className="font-headline text-xl font-bold tracking-tight mb-2 transition-colors duration-500"
                  >
                    {item.title}
                  </motion.h3>
                  <p className="font-sans text-sm text-foreground/60 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
