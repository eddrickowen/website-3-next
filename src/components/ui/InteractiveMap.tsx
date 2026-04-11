"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/data";
export default function InteractiveMap({ className = "" }: InteractiveMapProps) {
  
  // Format address for Google Maps Embed
  const fullAddress = `${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.city}, ${COMPANY.address.province}`;
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${encodeURIComponent(fullAddress)}&zoom=16`;
  
  // Fallback to a cleaner search URL if no API key is provided, or use a standard iframe without key
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
        
        {/* Top Overlay Overlay */}
        <div className="absolute top-4 left-4 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-dark px-4 py-2 rounded-xl border border-white/5 flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="label-mono text-[9px] text-dark-fg/80 uppercase tracking-widest">
              Live Location: {COMPANY.address.city}
            </span>
          </motion.div>
        </div>

        {/* Action Button Overlay */}
        <div className="absolute bottom-4 right-4 z-10">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-accent text-dark-bg font-sans font-bold text-[10px] uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-lg active:scale-95"
          >
            Open in Google Maps
            <span className="material-symbols-outlined text-sm" aria-hidden="true">open_in_new</span>
          </a>
        </div>

        {/* Custom Marker Indicator (Visual only, on top of iframe) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity delay-300">
           <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center animate-ping" />
        </div>
      </div>
    </div>
  );
}
