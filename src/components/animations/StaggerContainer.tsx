"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  viewportMargin = "-100px",
  once = true,
  trigger = "whileInView"
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  viewportMargin?: string;
  once?: boolean;
  trigger?: "whileInView" | "animate";
}) {
  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const props = trigger === "whileInView" 
    ? { initial: "hidden", whileInView: "show", viewport: { once, margin: viewportMargin as any } }
    : { initial: "hidden", animate: "show" };

  return (
    <motion.div variants={stagger} className={className} {...props}>
      {children}
    </motion.div>
  );
}
