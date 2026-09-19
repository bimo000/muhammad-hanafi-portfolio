"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const offsets = {
  up: { x: 0, y: 42 },
  down: { x: 0, y: -42 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: shouldReduceMotion ? 0 : offset.x,
        y: shouldReduceMotion ? 0 : offset.y,
        filter: shouldReduceMotion ? "none" : "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.75,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
