"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";

const navigation = [
  {
    number: "01",
    label: "Home",
    href: "#home",
  },
  {
    number: "02",
    label: "About",
    href: "#about",
  },
  {
    number: "03",
    label: "Skills",
    href: "#skills",
  },
  {
    number: "04",
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    number: "05",
    label: "Experience",
    href: "#experience",
  },
  {
    number: "06",
    label: "Contact",
    href: "#contact",
  },
];

export function MobileNav() {
  const reduceMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.05, 0.2],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleNavigation(
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();

    const section = document.querySelector<HTMLElement>(href);

    if (!section) return;

    setIsOpen(false);
    setActiveSection(href.replace("#", ""));

    window.setTimeout(
      () => {
        section.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", href);
      },
      reduceMotion ? 0 : 250,
    );
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] flex h-[72px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl lg:hidden">
        <motion.a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          whileTap={{ scale: 0.94 }}
          className="bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 bg-clip-text text-3xl font-black tracking-[-0.08em] text-transparent"
        >
          MH
        </motion.a>

        <div className="flex items-center gap-3">
          <span className="hidden text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 min-[360px]:block">
            {isOpen ? "Close" : "Menu"}
          </span>

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="relative grid size-11 place-items-center rounded-full bg-[#071329] shadow-lg"
          >
            <span className="relative block size-5">
              <motion.span
                animate={
                  isOpen
                    ? {
                        rotate: 45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: -5,
                      }
                }
                className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-white"
              />

              <motion.span
                animate={
                  isOpen
                    ? {
                        opacity: 0,
                        scaleX: 0,
                      }
                    : {
                        opacity: 1,
                        scaleX: 0.7,
                      }
                }
                className="absolute left-0 top-1/2 h-0.5 w-5 origin-right -translate-y-1/2 rounded-full bg-white"
              />

              <motion.span
                animate={
                  isOpen
                    ? {
                        rotate: -45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: 5,
                      }
                }
                className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-white"
              />
            </span>
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    clipPath: "circle(0% at calc(100% - 42px) 0%)",
                  }
            }
            animate={{
              clipPath: "circle(150% at calc(100% - 42px) 0%)",
            }}
            exit={
              reduceMotion
                ? {
                    opacity: 0,
                  }
                : {
                    clipPath: "circle(0% at calc(100% - 42px) 0%)",
                  }
            }
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-[70] overflow-y-auto bg-[#071329] px-5 py-7 text-white lg:hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-28 size-80 rounded-full bg-violet-600/40 blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-32 -left-28 size-80 rounded-full bg-pink-500/25 blur-[100px]"
            />

            <div className="relative z-10 flex min-h-full flex-col">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-violet-300">
                    Navigation
                  </p>

                  <p className="mt-2 text-xs text-white/40">
                    Muhammad Hanafi Portfolio
                  </p>
                </div>

                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
                </span>
              </div>

              <nav>
                {navigation.map((item, index) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => handleNavigation(event, item.href)}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: 35,
                            }
                      }
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.12 + index * 0.055,
                      }}
                      whileTap={{ x: 8 }}
                      className="group flex items-center gap-4 border-b border-white/10 py-4"
                    >
                      <span
                        className={`text-[10px] font-bold ${
                          isActive ? "text-violet-300" : "text-white/25"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`flex-1 text-[clamp(1.7rem,8vw,2.6rem)] font-black uppercase leading-none tracking-[-0.045em] ${
                          isActive
                            ? "bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        {item.label}
                      </span>

                      <motion.span
                        animate={
                          isActive
                            ? {
                                rotate: 45,
                                scale: 1,
                              }
                            : {
                                rotate: 0,
                                scale: 0.8,
                              }
                        }
                        className={`grid size-9 place-items-center rounded-full border text-lg ${
                          isActive
                            ? "border-violet-400 bg-violet-500"
                            : "border-white/15 text-white/40"
                        }`}
                      >
                        ↗
                      </motion.span>
                    </motion.a>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Follow & connect
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href="https://www.instagram.com/muhamadhanafii._/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-bold"
                  >
                    Instagram
                    <span>↗</span>
                  </a>

                  <a
                    href="https://wa.me/628217037248"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 text-sm font-bold text-[#071329]"
                  >
                    WhatsApp
                    <span>↗</span>
                  </a>
                </div>

                <p className="mt-6 text-[10px] text-white/25">
                  © 2026 Muhammad Hanafi
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
