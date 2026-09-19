"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function IntroReveal() {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const timeout = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = previousOverflow;
    }, 1100);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-label="Opening Muhammad Hanafi portfolio"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[300] grid place-items-center overflow-hidden bg-[#071329] text-white"
        >
          <motion.div
            aria-hidden="true"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: 15,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -right-20 -top-24 size-[380px] rounded-[40%_60%_55%_45%] bg-gradient-to-br from-violet-600 to-pink-500 opacity-70 blur-sm"
          />

          <motion.div
            aria-hidden="true"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: -10,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -bottom-24 -left-20 size-[320px] rounded-full bg-blue-500/50 blur-sm"
          />

          <div className="relative z-10 w-full px-6 text-center">
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-violet-300"
            >
              Graphic Designer · Portfolio 2026
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                initial={{
                  y: "110%",
                  rotate: 3,
                }}
                animate={{
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(3.3rem,11vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]"
              >
                Muhammad
              </motion.h2>
            </div>

            <div className="overflow-hidden pb-3">
              <motion.h2
                initial={{
                  y: "110%",
                  rotate: -3,
                }}
                animate={{
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-[clamp(3.8rem,12vw,10rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-transparent"
              >
                Hanafi
              </motion.h2>
            </div>

            <div className="mx-auto mt-7 h-px w-full max-w-sm overflow-hidden bg-white/15">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="h-full origin-left bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.45,
              }}
              className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35"
            >
              Turning ideas into visual stories
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
