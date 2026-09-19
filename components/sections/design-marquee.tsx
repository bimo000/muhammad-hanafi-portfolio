"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { projects } from "@/data/projects";

const repeatedProjects = [...projects, ...projects, ...projects];

type MarqueeRowProps = {
  reverse?: boolean;
};

function MarqueeRow({ reverse = false }: MarqueeRowProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={
        shouldReduceMotion
          ? { x: 0 }
          : {
              x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"],
            }
      }
      transition={{
        duration: reverse ? 32 : 27,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex w-max gap-3"
      style={{ willChange: "transform" }}
    >
      {repeatedProjects.map((project, index) => (
        <div
          key={`${project.id}-${index}`}
          className="relative aspect-[16/10] w-[230px] shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/5 sm:w-[320px]"
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes="320px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071329]/85 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
              {project.category}
            </p>

            <p className="mt-1 font-bold">{project.title}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export function DesignMarquee() {
  return (
    <section
      aria-label="Selected graphic design projects"
      className="overflow-hidden border-y border-white/10 bg-[#071329] py-7"
    >
      <div className="mb-5 px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
          Selected visual explorations
        </p>
      </div>

      <div className="space-y-3">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
