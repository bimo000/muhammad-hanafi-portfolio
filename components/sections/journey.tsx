"use client";

import {
  BriefcaseBusiness,
  GraduationCap,
  Palette,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Journey() {
  const reduceMotion = useReducedMotion();

  const motionProps = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
    whileHover: reduceMotion ? undefined : { y: -7 },
  });

  return (
    <article
      id="experience"
      className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f7ff] shadow-sm"
    >
      {/* Heading */}
      <div className="flex items-end justify-between gap-5 px-6 pb-5 pt-7 sm:px-8">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-violet-600">
            Experience & Education
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] text-[#071329]">
            My Journey<span className="text-violet-600">.</span>
          </h2>
        </div>

        <div className="hidden text-right sm:block">
          <span className="block text-3xl font-black text-violet-200">03</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Chapters
          </span>
        </div>
      </div>

      {/* Bento cards */}
      <div className="grid grid-cols-2 gap-3 p-4 pt-0 sm:gap-4 sm:p-6 sm:pt-0">
        {/* Education */}
        <motion.div
          {...motionProps(0)}
          className="group relative col-span-2 min-h-[245px] overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-[#6438ff] via-[#9634ff] to-[#ed35bd] p-6 text-white shadow-[0_20px_50px_rgba(124,58,237,0.25)]"
        >
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-12 size-44 rounded-full border-[28px] border-white/10 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-12 right-3 text-[9rem] font-black leading-none text-white/[0.08]"
          >
            06
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between">
              <span className="grid size-12 place-items-center rounded-full bg-white/15 backdrop-blur-md">
                <GraduationCap className="size-6" />
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[9px] font-black uppercase tracking-[0.18em]">
                2023 — Present
              </span>
            </div>

            <div className="mt-auto pt-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                Universitas Darussalam Gontor
              </p>

              <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight tracking-[-0.035em]">
                Undergraduate Student
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/75">
                Ilmu Al-Qur&apos;an dan Tafsir · Semester 6
              </p>
            </div>
          </div>
        </motion.div>

        {/* Designer */}
        <motion.div
          {...motionProps(0.08)}
          className="group relative min-h-[240px] overflow-hidden rounded-[1.7rem] bg-[#071329] p-5 text-white shadow-xl"
        >
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 size-32 rounded-full bg-violet-600/40 blur-2xl transition-transform duration-700 group-hover:scale-150"
          />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-full bg-violet-500/20 text-violet-300">
                <BriefcaseBusiness className="size-5" />
              </span>

              <span className="text-[10px] font-black text-white/30">02</span>
            </div>

            <div className="mt-auto pt-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-violet-300">
                Current
              </p>

              <h3 className="mt-2 text-lg font-black leading-tight">
                Independent Graphic Designer
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-white/55">
                Poster, social media, and digital visuals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Creative practice */}
        <motion.div
          {...motionProps(0.16)}
          className="group relative min-h-[240px] overflow-hidden rounded-[1.7rem] border border-violet-100 bg-gradient-to-br from-white via-[#f7edff] to-[#dff7ff] p-5 text-[#071329] shadow-lg"
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -right-10 size-28 rounded-full bg-pink-400/25 blur-xl transition-transform duration-700 group-hover:scale-150"
          />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-full bg-white text-violet-600 shadow-sm">
                <Palette className="size-5" />
              </span>

              <Sparkles className="size-5 text-pink-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
            </div>

            <div className="mt-auto pt-7">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Ongoing
              </p>

              <h3 className="mt-2 text-lg font-black leading-tight">
                Creative Practice
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-slate-500">
                Exploring bold concepts and purposeful visual stories.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
