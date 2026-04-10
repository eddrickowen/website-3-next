"use client";

import Link from "next/link";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/data";
import { useEnquiry } from "@/context/EnquiryContext";

export default function Footer() {
  const { openEnquiry } = useEnquiry();
  // Show first 5 general services in footer to keep it compact
  const serviceLinks = SERVICES.filter((s) => s.type === "general")
    .slice(0, 5)
    .map((s) => ({ name: s.title, id: s.id }));

  return (
    <footer className="w-full bg-dark-bg text-dark-fg relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0",
          left: "50%",
          transform: "translate(-50%, -60%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(62,207,142,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="blueprint-grid-dark absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-4 pb-20 border-b border-white/5 items-start">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col pt-2">
            <Link
              href="/"
              className="inline-block font-headline text-3xl font-bold tracking-tighter text-dark-fg hover:text-accent transition-colors mb-6"
              aria-label="Go to homepage"
            >
              PT.<span className="text-accent underline decoration-accent/20 underline-offset-8">API</span>
            </Link>
            <p className="font-sans text-[13px] text-dark-muted font-light leading-relaxed mb-8 max-w-sm">
              {COMPANY.tagline}. A multi-decade legacy providing integrated industrial solutions for Palm Oil, Energy, and Manufacturing globally.
            </p>
            <div className="space-y-1">
              <address className="not-italic font-sans text-[11px] text-dark-muted/40 uppercase tracking-wide">
                {COMPANY.address.line1}, {COMPANY.address.line2}
              </address>
              <p className="font-sans text-[11px] text-dark-muted/40 uppercase tracking-wide">
                {COMPANY.address.city}, {COMPANY.address.province}, {COMPANY.address.country}
              </p>
            </div>
            {COMPANY.sister && (
              <div className="mt-8 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-accent/30" />
                <p className="font-sans text-[9px] text-dark-muted/20 uppercase tracking-[0.2em]">
                  Sister: {COMPANY.sister}
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col pt-4 md:pt-0">
            <h3 className="label-mono text-[10px] text-accent font-bold uppercase tracking-[0.2em] mb-8 h-8 flex items-center">
              Navigation
            </h3>
            <ul className="space-y-4 pt-1">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="h-6 flex items-center">
                  <Link
                    href={link.path}
                    className="font-sans text-[13px] text-dark-muted/80 hover:text-accent transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-2 h-[1px] bg-accent/20 group-hover:w-4 group-hover:bg-accent transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 flex flex-col pt-4 md:pt-0">
            <h3 className="label-mono text-[10px] text-accent font-bold uppercase tracking-[0.2em] mb-8 h-8 flex items-center">
              Services
            </h3>
            <ul className="space-y-4 pt-1">
              {serviceLinks.map((s) => (
                <li key={s.id} className="h-6 flex items-center">
                  <Link
                    href={`/services#${s.id}`}
                    className="font-sans text-[13px] text-dark-muted/80 hover:text-accent transition-colors block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="h-6 flex items-center">
                <Link
                  href="/services"
                  className="font-sans text-[11px] font-bold text-accent/50 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  Explore All Services
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    east
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col pt-4 md:pt-0">
            <h3 className="label-mono text-[10px] text-accent font-bold uppercase tracking-[0.2em] mb-8 h-8 flex items-center">
              Contact
            </h3>
            <div className="space-y-5 pt-1">
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors mt-0.5">
                  <span className="material-symbols-outlined text-accent text-base" aria-hidden="true">call</span>
                </div>
                <div>
                  <div className="label-mono text-[9px] text-dark-muted/40 uppercase tracking-wider mb-1.5">
                    Phone Inquiry
                  </div>
                  <div className="space-y-1.5">
                    <a
                      href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                      className="font-sans text-sm text-dark-muted hover:text-accent transition-colors block font-medium"
                    >
                      {COMPANY.phone}
                    </a>
                    {COMPANY.phone2 && (
                      <a
                        href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`}
                        className="font-sans text-sm text-dark-muted/60 hover:text-accent transition-colors block"
                      >
                        {COMPANY.phone2}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group border-t border-white/5 pt-5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors mt-0.5">
                  <span className="material-symbols-outlined text-accent text-base" aria-hidden="true">mail</span>
                </div>
                <div>
                  <div className="label-mono text-[9px] text-dark-muted/40 uppercase tracking-wider mb-1.5">
                    Email Support
                  </div>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-sans text-sm text-dark-muted hover:text-accent transition-colors font-medium break-all"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={openEnquiry}
                  className="px-6 py-3 bg-accent text-dark-bg font-sans font-black text-[10px] uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-lg shadow-accent/10"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12">
          <p className="label-mono text-[9px] text-dark-muted/30 uppercase tracking-widest">
            © {new Date().getFullYear()} {COMPANY.name} · Industrial Precision
          </p>
          <div className="flex items-center gap-8">
            <span className="label-mono text-[9px] text-dark-muted/20 uppercase tracking-widest">
              Sumatra · Kalimantan · Java
            </span>
            <span className="flex gap-4 text-dark-muted/40 text-[10px] label-mono uppercase">
              Terms & Privacy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
