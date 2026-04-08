import Link from "next/link";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  // Show first 5 services in footer to keep it compact
  const serviceLinks = SERVICES.slice(0, 5).map((s) => ({ name: s.title, id: s.id }));

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

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-block font-headline text-2xl font-bold tracking-tight text-dark-fg hover:text-accent transition-colors mb-4"
              aria-label="Go to homepage"
            >
              PT.<span className="text-accent">API</span>
            </Link>
            <p className="font-sans text-sm text-dark-muted leading-relaxed mb-6 max-w-xs">
              {COMPANY.tagline}. One-stop industrial solutions since {COMPANY.founded}.
            </p>
            <address className="not-italic font-sans text-xs text-dark-muted/70 leading-loose">
              {COMPANY.address.line1}<br />
              {COMPANY.address.line2}<br />
              {COMPANY.address.city}, {COMPANY.address.province}<br />
              {COMPANY.address.country}
            </address>
            {COMPANY.sister && (
              <p className="font-sans text-[11px] text-dark-muted/40 mt-3 leading-relaxed">
                Sister company: {COMPANY.sister}
              </p>
            )}
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="label-mono text-[10px] text-dark-muted/60 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="font-sans text-sm text-dark-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="label-mono text-[10px] text-dark-muted/60 mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="font-sans text-sm text-dark-muted hover:text-accent transition-colors leading-snug block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-sans text-sm text-accent/70 hover:text-accent transition-colors"
                >
                  + {SERVICES.length - 5} more services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="label-mono text-[10px] text-dark-muted/60 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent text-sm mt-0.5">call</span>
                <div>
                  <div className="label-mono text-[9px] text-dark-muted/50 mb-0.5">Phone</div>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="font-sans text-sm text-dark-muted hover:text-accent transition-colors block"
                  >
                    {COMPANY.phone}
                  </a>
                  {COMPANY.phone2 && (
                    <a
                      href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`}
                      className="font-sans text-sm text-dark-muted hover:text-accent transition-colors block"
                    >
                      {COMPANY.phone2}
                    </a>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent text-sm mt-0.5">mail</span>
                <div>
                  <div className="label-mono text-[9px] text-dark-muted/50 mb-0.5">Email</div>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-sans text-sm text-dark-muted hover:text-accent transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-accent text-dark-bg font-sans font-bold text-xs tracking-wide rounded-full hover:bg-accent/90 transition-all"
              >
                Get in Touch
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="label-mono text-[10px] text-dark-muted/40">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="label-mono text-[10px] text-dark-muted/30">
            Trusted Industrial Partner Since {COMPANY.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
