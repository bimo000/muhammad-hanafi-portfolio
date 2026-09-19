"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { ProjectModal } from "@/components/ui/project-modal";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export function FeaturedWork() {
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  const activeProject = projects[activeIndex] ?? projects[0];
  const projectCount = String(projects.length).padStart(2, "0");

  return (
    <>
      <section
        id="portfolio"
        className="relative scroll-mt-24 overflow-hidden rounded-[2rem] bg-[#071329] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-14"
      >
        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 size-[360px] rounded-full bg-violet-600/30 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-40 left-[20%] size-[400px] rounded-full bg-pink-500/20 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-10 flex flex-col gap-6 border-b border-white/15 pb-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-violet-500/20 text-violet-300">
                  <Sparkles className="size-4" />
                </span>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                  Selected Projects · {projectCount}
                </p>
              </div>

              <h2 className="max-w-4xl text-[clamp(3.2rem,8vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
                Selected
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                  Work.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-300 sm:text-base">
              A selection of poster, branding, and social-media experiments
              created to communicate ideas through bold visual storytelling.
            </p>
          </div>

          {/* Desktop interactive gallery */}
          <div className="hidden gap-12 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Image preview */}
            <div className="sticky top-8 self-start">
              <button
                type="button"
                onClick={() => setSelectedProject(activeProject)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] bg-slate-900 text-left"
                aria-label={`Open ${activeProject.title}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 1.08,
                            clipPath: "inset(100% 0 0 0)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                      clipPath: "inset(0% 0 0 0)",
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            scale: 0.97,
                            clipPath: "inset(0 0 100% 0)",
                          }
                    }
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      priority
                      sizes="55vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#071329] via-[#071329]/10 to-transparent" />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                    {activeProject.category}
                  </span>

                  <span className="text-sm font-bold text-white/70">
                    {String(activeIndex + 1).padStart(2, "0")} / {projectCount}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                      Muhammad Hanafi
                    </p>

                    <h3 className="max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl">
                      {activeProject.displayTitle}
                    </h3>
                  </div>

                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-[#071329] transition duration-300 group-hover:rotate-45 group-hover:bg-violet-500 group-hover:text-white">
                    <ArrowUpRight className="size-6" />
                  </span>
                </div>
              </button>

              <div className="mt-4 flex items-center justify-between px-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>Move across the projects</span>
                <span>Click to explore</span>
              </div>
            </div>

            {/* Project list */}
            <div className="self-start">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setSelectedProject(project)}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 10,
                          }
                    }
                    className={`group relative flex w-full items-center gap-5 border-t border-white/15 px-3 py-7 text-left transition-colors duration-300 last:border-b ${
                      isActive ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold transition-colors ${
                        isActive ? "text-violet-300" : "text-slate-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-2xl font-black uppercase tracking-[-0.04em] transition-colors xl:text-3xl ${
                          isActive
                            ? "text-white"
                            : "text-slate-400 group-hover:text-white"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {project.category}
                      </p>
                    </div>

                    <span
                      className={`grid size-11 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "rotate-45 border-violet-500 bg-violet-500 text-white"
                          : "border-white/15 text-slate-400 group-hover:border-white group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="size-5" />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Mobile swipe gallery */}
          <div className="lg:hidden">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Swipe to explore
              </p>

              <ArrowRight className="size-5 text-violet-300" />
            </div>

            <div className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  whileTap={{ scale: 0.98 }}
                  className="group min-w-[88%] snap-center overflow-hidden rounded-[1.65rem] bg-white p-2 text-left text-slate-950 sm:min-w-[58%]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="88vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071329] via-transparent to-transparent" />

                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
                        {project.category}
                      </span>

                      <span className="text-xs font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-violet-300">
                        Selected work
                      </p>

                      <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tight">
                        {project.displayTitle}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 px-3 pb-3 pt-4">
                    <div>
                      <h3 className="font-bold">{project.title}</h3>

                      <p className="mt-1 line-clamp-1 text-sm text-slate-500">
                        {project.description}
                      </p>
                    </div>

                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-600">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-2 h-px bg-white/15">
              <motion.div
                className="h-px w-1/3 bg-gradient-to-r from-violet-500 to-pink-500"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: ["0%", "200%", "0%"],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
