"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { PointerEvent as ReactPointerEvent } from "react";

const projectCards = [
  {
    title: "Creative Campaign",
    category: "Social Media",
    image: "/projects/creative-campaign.webp",
    position: "left-0 top-[16%]",
    rotation: -9,
    duration: 5.5,
  },
  {
    title: "Travel Campaign",
    category: "Poster Design",
    image: "/projects/travel-campaign.webp",
    position: "right-0 top-[4%]",
    rotation: 8,
    duration: 6,
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 100,
    damping: 20,
  });

  const visualX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const visualY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);

    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-[#f7f7ff] lg:min-h-screen"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(99, 69, 255, 0.13) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 size-[420px] rounded-full bg-violet-300/30 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 size-[460px] rounded-full bg-cyan-300/30 blur-[110px]"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-72px)] max-w-[1600px] items-center gap-12 px-5 pb-14 pt-12 sm:px-8 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:gap-5 lg:px-14 lg:py-16">
        {/* Text */}
        <div className="relative z-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur">
              <Sparkles className="size-4" />
              Graphic Designer
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Indonesia · Available for work
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mb-2 text-xl font-semibold text-slate-950 sm:text-2xl"
            >
              Hi, I&apos;m
            </motion.p>
          </div>

          <h1 className="font-black uppercase leading-[0.82] tracking-[-0.075em]">
            <span className="block overflow-hidden pb-2">
              <motion.span
                initial={reduceMotion ? false : { y: "110%", rotate: 3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block whitespace-nowrap text-[clamp(2.85rem,13vw,8rem)] text-[#071329] sm:text-[clamp(4.5rem,8vw,8rem)]"
              >
                Muhammad
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-3">
              <motion.span
                initial={reduceMotion ? false : { y: "110%", rotate: -3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-[clamp(3.5rem,15vw,9rem)] sm:text-[clamp(5rem,9vw,9rem)] text-transparent"
              >
                Hanafi
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl"
          >
            <p className="text-lg leading-8 text-slate-600 sm:text-xl">
              Creating bold posters, expressive social-media visuals, and
              digital campaigns that make ideas impossible to ignore.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#portfolio"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 px-7 font-bold text-white shadow-[0_16px_40px_rgba(124,58,237,0.3)]"
              >
                Explore My Work
                <ArrowDownRight className="size-5 transition-transform duration-300 group-hover:rotate-45" />
              </motion.a>

              <motion.a
                href="https://wa.me/628217037248?text=Halo%20Muhammad%20Hanafi,%20saya%20tertarik%20dengan%20portfolio%20Anda."
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-slate-300 bg-white/80 px-7 font-bold text-slate-950 backdrop-blur transition hover:border-violet-400"
              >
                <MessageCircle className="size-5" />
                Let&apos;s Talk
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Visual collage */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={
            reduceMotion
              ? undefined
              : {
                  x: visualX,
                  y: visualY,
                }
          }
          className="relative mx-auto h-[450px] w-full max-w-[540px] sm:h-[570px] lg:h-[680px]"
        >
          {/* Main colorful shape */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [-4, 4, -4],
                    scale: [1, 1.04, 1],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[16%] top-[13%] h-[72%] w-[70%] rounded-[38%_62%_55%_45%/43%_38%_62%_57%] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 shadow-[0_35px_90px_rgba(124,58,237,0.3)]"
          />

          {/* Circular text decoration */}
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[6%] right-[2%] grid size-24 place-items-center rounded-full border border-dashed border-violet-400 bg-white/70 text-center text-[9px] font-bold uppercase tracking-[0.18em] text-violet-700 backdrop-blur sm:size-28"
          >
            Good design
            <br />
            brighter ideas
          </motion.div>

          {/* Project cards */}
          {projectCards.map((project, index) => (
            <motion.article
              key={project.title}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, index === 0 ? -12 : 12, 0],
                    }
              }
              transition={{
                duration: project.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.08,
                      rotate: 0,
                      zIndex: 30,
                    }
              }
              style={{ rotate: project.rotation }}
              className={`absolute z-10 w-[39%] cursor-pointer overflow-hidden rounded-[1.35rem] border-[5px] border-white bg-white shadow-2xl ${project.position}`}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 40vw, 230px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/70">
                    {project.category}
                  </p>

                  <h2 className="mt-1 text-xs font-black sm:text-sm">
                    {project.title}
                  </h2>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Profile photo */}
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -10,
                    rotate: 1,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            className="absolute bottom-[4%] left-1/2 z-20 w-[58%] max-w-[320px] -translate-x-1/2"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.25rem] border-[6px] border-white bg-slate-900 shadow-[0_30px_70px_rgba(15,23,42,0.35)]">
              <Image
                src="/images/muhammad-hanafi.jpeg"
                alt="Muhammad Hanafi, Graphic Designer"
                fill
                priority
                sizes="(max-width: 768px) 58vw, 320px"
                className="object-cover object-center transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071329]/85 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                  The designer
                </p>

                <p className="mt-1 text-xl font-black">Muhammad Hanafi</p>
              </div>
            </div>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -7, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[1%] left-[1%] z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
            </span>

            <div>
              <p className="text-[10px] text-slate-500">Available for</p>

              <p className="text-sm font-bold text-slate-950">Freelance</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
