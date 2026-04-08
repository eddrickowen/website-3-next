"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

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
