"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/data";
import { Dictionary } from "@/types/dictionary";

interface InteractiveMapProps {
  className?: string;
  content: Dictionary["contactPage"]["map"];
}

export default function InteractiveMap({ className = "", content }: InteractiveMapProps) {
  // Format address for Google Maps Embed
  const fullAddress = `${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.city}, ${COMPANY.address.province}`;
  
  // For most vibe-coding sites, we can use the non-API search embed which is free and doesn't require a key
  const freeEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`relative group ${className}`}>
      {/* Decorative Outer Frame */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" aria-hidden="true" />
      
      <div className="relative h-full w-full bg-background rounded-2xl border border-outline/40 overflow-hidden shadow-2xl">
        {/* Loading / Blueprint Background */}
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" aria-hidden="true" />
        
        {/* Map Iframe */}
        <iframe
          src={freeEmbedUrl}
          className="w-full h-full border-0 grayscale invert-[0.85] contrast-[1.1] opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700 ease-in-out"
          allowFullScreen
          loading="lazy"
          title="Office Location Map"
          aria-label={`Interactive map showing ${COMPANY.name} office in ${COMPANY.address.city}`}
        />
        
        {/* Branch Detail Card Overlay */}
        <div className="absolute top-6 left-6 z-10 hidden sm:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-dark p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[280px]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-sm">home_work</span>
              </div>
              <div>
                <span className="label-mono text-[8px] text-accent uppercase tracking-widest block">{content.hqLabel}</span>
                <p className="font-headline text-xs font-bold text-dark-fg">Medan, North Sumatra</p>
              </div>
            </div>
            
            <p className="font-sans text-[11px] text-dark-muted leading-relaxed mb-6">
              {COMPANY.address.line1}<br/>
              {COMPANY.address.line2}
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-accent/10 border border-accent/30 text-accent font-sans font-bold text-[9px] uppercase tracking-wider rounded-xl hover:bg-accent hover:text-dark-bg transition-all flex items-center justify-center gap-2"
            >
              {content.getDirections}
              <span className="material-symbols-outlined text-[12px]">directions</span>
            </a>
          </motion.div>
        </div>

        {/* Mobile Status Badge */}
        <div className="absolute top-4 right-4 z-10 sm:hidden">
          <div className="glass-dark px-3 py-1.5 rounded-full border border-white/5 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="label-mono text-[8px] text-dark-fg/80">{COMPANY.address.city}</span>
          </div>
        </div>

        {/* Action Button Overlay (Mobile/Secondary) */}
        <div className="absolute bottom-6 right-6 z-10 lg:hidden">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 bg-accent text-dark-bg font-sans font-bold text-[10px] uppercase tracking-wider rounded-2xl hover:bg-white transition-all shadow-xl active:scale-95"
          >
            {content.viewOnGoogle}
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        {/* Dynamic Indicator (Center) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity delay-300">
           <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center animate-ping" />
        </div>
      </div>
    </div>
  );
}
