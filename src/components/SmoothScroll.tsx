"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEnquiry } from "@/context/EnquiryContext";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const { isOpen } = useEnquiry();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
    });
    lenisRef.current = lenis;

    let id: number;
    function raf(time: number) {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    }

    id = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(id);
      lenisRef.current = null;
    };
  }, []);

  // Stop/Start Lenis scroll when modal is open
  useEffect(() => {
    if (lenisRef.current) {
      if (isOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    // Reset scroll position and Lenis on route change. NextJS soft-navigation might not fire window.scrollTo correctly with Lenis attached.
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
