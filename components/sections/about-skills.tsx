"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  MapPin,
  MonitorUp,
  PenTool,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const tools = [
  {
    name: "Photoshop",
    category: "Photo & Composition",
    logo: "/logos/photoshop.svg",
    color: "from-blue-500/25 to-cyan-400/10",
  },
  {
    name: "Illustrator",
    category: "Vector & Illustration",
    logo: "/logos/illustrator.svg",
    color: "from-orange-500/25 to-yellow-400/10",
  },
  {
    name: "InDesign",
    category: "Editorial Design",
    logo: "/logos/indesign.svg",
    color: "from-pink-500/25 to-rose-400/10",
  },
  {
    name: "Figma",
    category: "Layout Exploration",
    logo: "/logos/figma.svg",
    color: "from-violet-500/25 to-pink-400/10",
  },
  {
    name: "Canva",
    category: "Social Content",
    logo: "/logos/canva.svg",
    color: "from-cyan-500/25 to-blue-400/10",
  },
  {
    name: "Premiere Pro",
    category: "Video Editing",
    logo: "/logos/premiere.svg",
    color: "from-purple-500/25 to-fuchsia-400/10",
  },
];

const capabilities = [
  {
    number: "01",
    name: "Poster Design",
    description:
      "Bold compositions made to communicate quickly and stop the scroll.",
    icon: PenTool,
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    number: "02",
    name: "Social Media",
    description:
      "Flexible visual content designed for campaigns and digital platforms.",
    icon: MonitorUp,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    number: "03",
    name: "Brand Visuals",
    description:
      "Consistent visual identities that give every message a clear character.",
    icon: Layers3,
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    number: "04",
    name: "Creative Campaigns",
    description:
      "Visual directions that connect ideas, messages, and audiences.",
    icon: Sparkles,
    gradient: "from-orange-400 to-pink-500",
  },
];

export default function AboutSkills() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* About */}
        <article
          id="about"
          className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f7ff] p-6 sm:p-9 lg:p-12"
        >
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [0, 10, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-24 -top-20 size-72 rounded-[35%_65%_55%_45%] bg-gradient-to-br from-violet-300/45 to-pink-300/40 blur-sm"
          />

          <div className="relative z-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-violet-600 to-pink-500" />

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                  About Muhammad
                </p>
              </div>

              <span className="text-xs font-bold text-slate-400">
                01 / ABOUT
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(2.6rem,5vw,5.7rem)] font-black leading-[0.92] tracking-[-0.06em] text-[#071329]">
              Designing visuals people
              <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                remember.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I&apos;m Muhammad Hanafi, a graphic designer and sixth-semester
              student of Ilmu Al-Qur&apos;an dan Tafsir at Universitas
              Darussalam Gontor. I enjoy transforming ideas into posters,
              social-media content, and visual campaigns with a bold and
              purposeful character.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 border-t border-slate-300/70 py-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-violet-600 shadow-sm">
                  <MapPin className="size-4" />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Based in
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-950">
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-300/70 py-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-emerald-500 shadow-sm">
                  <CheckCircle2 className="size-4" />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Current status
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-950">
                    Available for freelance
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="https://wa.me/628217037248?text=Halo%20Muhammad%20Hanafi,%20saya%20tertarik%20untuk%20berdiskusi%20tentang%20project%20desain."
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#071329] px-7 font-bold text-white"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/muhamadhanafii._/"
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-slate-300 bg-white/70 px-7 font-bold text-slate-950"
              >
                <span className="font-black text-pink-500">IG</span>
                Instagram
              </motion.a>
            </div>
          </div>
        </article>

        {/* Creative toolkit */}
        <article
          id="skills"
          className="relative scroll-mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#11183a] via-[#17124a] to-[#071329] p-6 text-white sm:p-9 lg:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 bottom-0 size-72 rounded-full bg-violet-500/20 blur-[80px]"
          />

          <div className="relative z-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                  Creative Toolkit
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Tools behind the ideas.
                </h2>
              </div>

              <span className="hidden text-xs font-bold text-white/35 sm:block">
                06 TOOLS
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -7,
                          rotate: index % 2 === 0 ? -1.5 : 1.5,
                          scale: 1.025,
                        }
                  }
                  whileTap={{ scale: 0.97 }}
                  className={`group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br ${tool.color} p-4 backdrop-blur sm:p-5`}
                >
                  <div className="mb-5 flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-white p-2 shadow-xl sm:size-14">
                      <Image
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        width={48}
                        height={48}
                        className="size-full object-contain"
                      />
                    </span>

                    <span className="text-[10px] font-bold text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold sm:text-base">
                    {tool.name}
                  </h3>

                  <p className="mt-1 hidden text-xs leading-5 text-white/50 sm:block">
                    {tool.category}
                  </p>

                  <div className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-pink-400 transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Capabilities */}
      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-7 sm:flex-row sm:items-end sm:justify-between sm:px-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
              What I Create
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#071329] sm:text-4xl">
              Creative capabilities
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Focused services for visual communication, digital content, and
            memorable campaign ideas.
          </p>
        </div>

        {/* Mobile and tablet */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:p-6 lg:hidden">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                whileTap={{ scale: 0.97 }}
                className={`flex min-h-[195px] flex-col overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${item.gradient} p-4 text-white shadow-lg`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-white/15 backdrop-blur">
                    <Icon className="size-5" />
                  </span>

                  <span className="text-[10px] font-bold text-white/55">
                    {item.number}
                  </span>
                </div>

                <div className="mt-auto pt-6">
                  <h3 className="text-lg font-black leading-tight tracking-[-0.03em]">
                    {item.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-white/75">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        x: 8,
                      }
                }
                className="group relative grid grid-cols-[55px_1fr_1fr_auto] items-center gap-5 border-b border-slate-200 px-9 py-7 last:border-b-0"
              >
                <div
                  className={`absolute inset-0 origin-left scale-x-0 bg-gradient-to-r ${item.gradient} transition-transform duration-500 ease-out group-hover:scale-x-100`}
                />

                <span className="relative z-10 text-xs font-bold text-slate-400 transition-colors group-hover:text-white/70">
                  {item.number}
                </span>

                <div className="relative z-10 flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-600 transition-colors group-hover:bg-white/15 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>

                  <h3 className="text-2xl font-black tracking-[-0.03em] text-[#071329] transition-colors group-hover:text-white">
                    {item.name}
                  </h3>
                </div>

                <p className="relative z-10 max-w-md text-sm leading-6 text-slate-500 transition-colors group-hover:text-white/75">
                  {item.description}
                </p>

                <span className="relative z-10 grid size-11 place-items-center rounded-full border border-slate-200 text-slate-500 transition-all group-hover:rotate-45 group-hover:border-white/30 group-hover:text-white">
                  <ArrowUpRight className="size-5" />
                </span>
              </motion.div>
            );
          })}
        </div>
      </article>
    </section>
  );
}
