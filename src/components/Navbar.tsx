"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 pointer-events-none"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-8 px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-dark shadow-2xl shadow-black/30 rounded-full w-[min(740px,calc(100vw-2rem))]"
              : "glass-dark rounded-full w-[min(740px,calc(100vw-2rem))]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-headline text-base font-bold tracking-tight text-dark-fg hover:text-accent transition-colors shrink-0 pl-2"
            aria-label="Go to PT. Agri Prima Indonesia homepage"
          >
            PT.<span className="text-accent">API</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-4 py-2 rounded-full label-mono text-[10px] transition-all ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-dark-fg/60 hover:text-dark-fg hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent text-dark-bg font-sans font-bold text-xs tracking-wide rounded-full hover:bg-accent/90 active:scale-[0.97] transition-all"
            >
              Get Quote
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 hover:border-accent/30 transition-colors"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-4 h-[1.5px] bg-dark-fg origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-4 h-[1.5px] bg-dark-fg"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-4 h-[1.5px] bg-dark-fg origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-dark-bg flex flex-col"
            aria-modal="true"
            role="dialog"
          >
            <div className="blueprint-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative z-10 flex flex-col h-full px-8 pt-28 pb-12">
              <nav className="flex-1 flex flex-col justify-center gap-2">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`block font-headline text-5xl font-bold tracking-tighter py-3 border-b border-white/5 transition-colors ${
                          isActive ? "text-accent" : "text-dark-fg/70 hover:text-dark-fg"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="space-y-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full py-4 bg-accent text-dark-bg font-headline font-bold text-base tracking-wide rounded-2xl hover:bg-accent/90 transition-all"
                >
                  Get a Quote
                </Link>
                <p className="label-mono text-[10px] text-dark-muted text-center">
                  {COMPANY.phone} · {COMPANY.email}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
