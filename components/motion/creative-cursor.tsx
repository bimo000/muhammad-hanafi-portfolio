"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

export function CreativeCursor() {
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const ringX = useSpring(pointerX, {
    stiffness: 420,
    damping: 32,
    mass: 0.25,
  });

  const ringY = useSpring(pointerY, {
    stiffness: 420,
    damping: 32,
    mass: 0.25,
  });

  const [supported, setSupported] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const pointerMedia = window.matchMedia("(pointer: fine)");

    function updateSupport() {
      setSupported(pointerMedia.matches && !reduceMotion);
    }

    updateSupport();

    pointerMedia.addEventListener("change", updateSupport);

    return () => {
      pointerMedia.removeEventListener("change", updateSupport);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!supported) return;

    document.documentElement.classList.add("creative-cursor-enabled");

    function handlePointerMove(event: PointerEvent) {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);

      const target = event.target;

      if (target instanceof Element) {
        const interactiveElement = target.closest(
          "a, button, [data-cursor-interactive]",
        );

        setHovering(Boolean(interactiveElement));
      }
    }

    function handlePointerDown() {
      setPressed(true);
    }

    function handlePointerUp() {
      setPressed(false);
    }

    function hideCursor() {
      setVisible(false);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("blur", hideCursor);

    return () => {
      document.documentElement.classList.remove("creative-cursor-enabled");

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("blur", hideCursor);
    };
  }, [pointerX, pointerY, supported]);

  if (!supported) return null;

  return (
    <>
      {/* Smooth outer ring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.75 : hovering ? 1.65 : 1,
        }}
        transition={{
          opacity: {
            duration: 0.2,
          },
          scale: {
            type: "spring",
            stiffness: 320,
            damping: 22,
          },
        }}
        className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
      >
        <motion.span
          animate={{
            backgroundColor: hovering
              ? "rgba(255,255,255,0.25)"
              : "rgba(255,255,255,0)",
          }}
          className="absolute left-1/2 top-1/2 block size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
        />
      </motion.div>

      {/* Fast center dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: pointerX,
          y: pointerY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0 : pressed ? 1.8 : 1,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[201] mix-blend-difference"
      >
        <span className="absolute left-1/2 top-1/2 block size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </motion.div>

      <style jsx global>{`
        @media (pointer: fine) {
          html.creative-cursor-enabled,
          html.creative-cursor-enabled * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
