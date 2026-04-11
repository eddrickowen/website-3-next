"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import { useEnquiry } from "@/context/EnquiryContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { openEnquiry } = useEnquiry();
  const { language, setLanguage, t } = useLanguage();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Focus management: move focus into menu when opened, return to hamburger on close
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    } else if (!menuOpen) {
      hamburgerRef.current?.focus();
    }
  }, [menuOpen]);

  // Trap focus within the mobile menu
  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!menuRef.current) return;
    const focusableEls = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"));
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  };

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-5 pointer-events-none"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-3 md:px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-dark shadow-2xl shadow-black/30 rounded-full w-fit max-w-[calc(100vw-1.5rem)] mx-auto"
              : "glass-dark rounded-full w-fit max-w-[calc(100vw-1.5rem)] mx-auto"
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
                  className={`relative px-4 py-2 rounded-full label-mono text-[10px] whitespace-nowrap transition-all ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-dark-fg/60 hover:text-dark-fg hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(`nav.${link.name.toLowerCase()}`)}
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
            <button
              onClick={openEnquiry}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent text-dark-bg font-sans font-bold text-xs tracking-wide rounded-full hover:bg-accent/90 active:scale-[0.97] transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg"
            >
              {t("common.getQuote")}
            </button>

            {/* Language Toggle Desktop */}
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full p-1 self-stretch">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all ${language === "en" ? "bg-accent text-dark-bg" : "text-dark-fg/40 hover:text-dark-fg"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("id")}
                className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all ${language === "id" ? "bg-accent text-dark-bg" : "text-dark-fg/40 hover:text-dark-fg"}`}
              >
                ID
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 hover:border-accent/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
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

            {/* Language Switcher Mobile (Small) */}
            <button
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-accent"
            >
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-dark-bg flex flex-col"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
            onKeyDown={handleMenuKeyDown}
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
                        {t(`nav.${link.name.toLowerCase()}`)}
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
                <button
                  onClick={() => { setMenuOpen(false); openEnquiry(); }}
                  className="flex items-center justify-center w-full py-4 bg-accent text-dark-bg font-headline font-bold text-base tracking-wide rounded-2xl hover:bg-accent/90 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg"
                >
                  {t("common.getQuote")}
                </button>
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
