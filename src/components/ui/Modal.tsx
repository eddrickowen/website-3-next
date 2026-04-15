"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Move focus into modal when opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const firstFocusable = modalRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  }, [isOpen]);

  // Trap focus within modal
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!modalRef.current) return;
    const focusableEls = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-surface border border-outline/30 rounded-2xl md:rounded-[32px] shadow-2xl overflow-hidden max-h-[calc(100dvh-2rem)] md:max-h-[90vh] flex flex-col"
            onKeyDown={handleKeyDown}
          >
            {/* Header */}
            <div className="p-5 md:p-6 flex items-center justify-between border-b border-outline/10 shrink-0">
              <div>
                <h3 id="modal-title" className="font-headline text-xl md:text-2xl font-bold text-foreground">Send an Enquiry</h3>
                <p className="font-sans text-[10px] text-foreground/40 mt-0.5 uppercase tracking-widest">CIPTA DIGITAL UTAMA</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors group focus:outline-none focus:ring-2 focus:ring-accent/50"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-foreground/30 group-hover:text-foreground transition-colors" aria-hidden="true">close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto px-5 py-4 md:px-6 md:py-5 custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
