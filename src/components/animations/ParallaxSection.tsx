"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * A simple section wrapper that adds a subtle scroll-driven fade.
 * True CSS parallax on the background layer is handled via CSS transforms.
 */
export default function ParallaxSection({
  children,
  className = "",
}: ParallaxSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
