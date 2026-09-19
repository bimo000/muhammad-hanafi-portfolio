"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Journey } from "@/components/sections/journey";

export function ExperienceContact() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Design philosophy */}
        <article className="relative min-h-[530px] overflow-hidden rounded-[2rem] bg-[#071329] p-7 text-white sm:p-10 lg:p-12">
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [0, 12, 0],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-24 -top-24 size-80 rounded-[35%_65%_60%_40%] bg-gradient-to-br from-violet-600/50 to-pink-500/40 blur-sm"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-14 -right-10 text-[10rem] font-black leading-none text-white/[0.025]"
          >
            MH
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-violet-500/20 text-violet-300">
                <Sparkles className="size-4" />
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                My Design Philosophy
              </p>
            </div>

            <div className="my-auto py-14">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-white/40">
                Design is more than decoration
              </p>

              <h2 className="text-[clamp(3rem,6vw,6.5rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
                Ideas
                <span className="block text-white/30">become</span>
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  visible.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-300">
                I believe good design should communicate clearly, create
                emotion, and help every message find the right audience.
              </p>
            </div>

            <div>
              <p className="font-serif text-2xl italic text-white">
                Muhammad Hanafi
              </p>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        width: ["50px", "120px", "50px"],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-4 h-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
              />
            </div>
          </div>
        </article>

        <Journey />
      </div>

      {/* Contact */}
      <article
        id="contact"
        className="relative scroll-mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 p-7 text-white sm:p-10 lg:p-14"
      >
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  rotate: [0, 30, 0],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 -top-28 size-80 rounded-full border-[50px] border-white/10"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-40 w-40 rounded-tr-full bg-blue-400/20"
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65">
              Available for freelance
            </p>

            <h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.065em]">
              Let&apos;s create
              <span className="block">something</span>
              <span className="block text-[#071329]">memorable.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Punya project poster, social media, atau visual campaign? Mari
              diskusikan idenya bersama.
            </p>
          </div>

          <div className="space-y-3">
            <motion.a
              href="https://wa.me/628217037248?text=Halo%20Muhammad%20Hanafi,%20saya%20tertarik%20untuk%20berdiskusi%20tentang%20project%20desain."
              target="_blank"
              rel="noreferrer"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 8,
                    }
              }
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between gap-5 rounded-[1.4rem] bg-white p-5 text-[#071329] shadow-xl"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full bg-emerald-100 text-sm font-black text-emerald-600">
                  WA
                </span>

                <div>
                  <p className="text-xs text-slate-500">WhatsApp</p>

                  <p className="mt-1 font-black">0821-7037-248</p>
                </div>
              </div>

              <ArrowUpRight className="size-5 text-violet-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/muhamadhanafii._/"
              target="_blank"
              rel="noreferrer"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 8,
                    }
              }
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between gap-5 rounded-[1.4rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full bg-white/15 text-sm font-black">
                  IG
                </span>

                <div>
                  <p className="text-xs text-white/60">Instagram</p>

                  <p className="mt-1 font-black">@muhamadhanafii._</p>
                </div>
              </div>

              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </div>
      </article>
    </section>
  );
}
