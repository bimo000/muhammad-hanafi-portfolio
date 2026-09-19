"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-violet-600 via-blue-500 to-pink-500"
      style={{
        scaleX: shouldReduceMotion ? scrollYProgress : smoothProgress,
      }}
    />
  );
}
