"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { PointerEvent, ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

const springConfig = {
  stiffness: 180,
  damping: 20,
  mass: 0.7,
};

export function TiltCard({ children, className }: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);

  const rotateXValue = useTransform(pointerY, [0, 1], [7, -7]);
  const rotateYValue = useTransform(pointerX, [0, 1], [-7, 7]);

  const rotateX = useSpring(rotateXValue, springConfig);
  const rotateY = useSpring(rotateYValue, springConfig);

  const glare = useMotionTemplate`
    radial-gradient(
      circle at ${glareX}% ${glareY}%,
      rgba(255,255,255,0.32),
      rgba(255,255,255,0.08) 24%,
      transparent 55%
    )
  `;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || shouldReduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set(x);
    pointerY.set(y);
    glareX.set(x * 100);
    glareY.set(y * 100);
    glareOpacity.set(1);
  }

  function resetCard() {
    pointerX.set(0.5);
    pointerY.set(0.5);
    glareOpacity.set(0);
  }

  return (
    <div className={className} style={{ perspective: "1100px" }}>
      <motion.div
        className="relative w-full"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetCard}
        style={
          shouldReduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }
        }
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                y: -8,
                scale: 1.015,
              }
        }
        whileTap={{
          scale: shouldReduceMotion ? 1 : 0.985,
        }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 20,
        }}
      >
        {children}

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[1.6rem]"
          style={{
            background: glare,
            opacity: glareOpacity,
          }}
        />
      </motion.div>
    </div>
  );
}
