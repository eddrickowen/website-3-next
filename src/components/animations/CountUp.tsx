"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  target: number | string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  // Extract numeric value (handles "30+" → 30)
  const numericTarget =
    typeof target === "string"
      ? parseInt(target.replace(/\D/g, ""), 10)
      : target;

  // Keep any trailing non-numeric characters ("+", "k", etc.)
  const trailingChar =
    typeof target === "string"
      ? target.replace(/^[^0-9]*\d+/, "")
      : suffix;

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + (numericTarget - startValue) * eased));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, numericTarget, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {trailingChar || suffix}
    </span>
  );
}
