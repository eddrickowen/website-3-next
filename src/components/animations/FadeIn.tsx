"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeInProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
  scale?: boolean;
  standalone?: boolean;
  trigger?: "whileInView" | "animate";
  duration?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  blur = false,
  scale = false,
  standalone = false,
  trigger = "whileInView",
  duration = 0.8,
}: FadeInProps) {
  const getInitialY = () => {
    if (direction === "up") return 24;
    if (direction === "down") return -24;
    return 0;
  };

  const getInitialX = () => {
    if (direction === "right") return -40;
    if (direction === "left") return 40;
    return 0;
  };

  const variant = {
    hidden: {
      opacity: 0,
      y: getInitialY(),
      x: getInitialX(),
      filter: blur ? "blur(8px)" : "blur(0px)",
      scale: scale ? 0.95 : 1,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
        delay,
      },
    },
  };

  const standaloneProps = standalone
    ? trigger === "whileInView"
      ? {
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, margin: "-80px" as any },
        }
      : { initial: "hidden", animate: "show" }
    : {};

  return (
    <motion.div variants={variant} className={className} {...standaloneProps}>
      {children}
    </motion.div>
  );
}
