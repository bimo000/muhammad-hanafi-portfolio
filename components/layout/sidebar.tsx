"use client";

import {
  Briefcase,
  FolderOpen,
  Home,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";

const navigation = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "About",
    href: "#about",
    icon: UserRound,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: Sparkles,
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    icon: FolderOpen,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export function Sidebar() {
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("home");

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
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5],
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

    setActiveSection(href.replace("#", ""));

    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", href);
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-[190px] flex-col overflow-hidden bg-[#061127] text-white lg:flex">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-20 size-64 rounded-full bg-violet-600/30 blur-[80px]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-24 size-60 rounded-full bg-blue-500/15 blur-[80px]"
      />

      <div className="relative z-10 flex h-full flex-col px-4 py-7">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.06,
                  rotate: -2,
                }
          }
          whileTap={{ scale: 0.96 }}
          className="inline-flex w-fit items-center gap-3 px-3"
        >
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-black tracking-[-0.08em] text-transparent">
            MH
          </span>
        </motion.a>

        <div className="mt-3 px-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/30">
            Graphic Designer
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-12 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const itemId = item.href.replace("#", "");
            const isActive = activeSection === itemId;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        x: 4,
                      }
                }
                whileTap={{ scale: 0.98 }}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex min-h-12 items-center gap-3 overflow-hidden rounded-2xl px-4 text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-navigation"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 shadow-[0_10px_30px_rgba(124,58,237,0.3)]"
                  />
                )}

                {!isActive && (
                  <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors group-hover:bg-white/[0.06]" />
                )}

                <Icon
                  className={`relative z-10 size-[18px] shrink-0 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-violet-300"
                  }`}
                />

                <span className="relative z-10">{item.label}</span>

                {isActive && (
                  <motion.span
                    initial={
                      reduceMotion
                        ? false
                        : {
                            scale: 0,
                          }
                    }
                    animate={{ scale: 1 }}
                    className="relative z-10 ml-auto size-1.5 rounded-full bg-white"
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Bottom information */}
        <div className="mt-auto">
          <div className="mx-2 mb-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
              </span>

              <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/45">
                Available
              </p>
            </div>

            <p className="mt-2 text-xs font-semibold leading-5 text-white">
              Open for freelance projects
            </p>
          </div>

          <p className="mb-3 px-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
            Follow & connect
          </p>

          <div className="flex gap-2 px-2">
            <motion.a
              href="https://www.instagram.com/muhamadhanafii._/"
              target="_blank"
              rel="noreferrer"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      rotate: -5,
                    }
              }
              whileTap={{ scale: 0.94 }}
              aria-label="Muhammad Hanafi Instagram"
              className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-black transition hover:border-pink-400 hover:bg-pink-500 hover:text-white"
            >
              IG
            </motion.a>

            <motion.a
              href="https://wa.me/628217037248"
              target="_blank"
              rel="noreferrer"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      rotate: 5,
                    }
              }
              whileTap={{ scale: 0.94 }}
              aria-label="Contact Muhammad Hanafi on WhatsApp"
              className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-black transition hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
            >
              WA
            </motion.a>
          </div>

          <p className="mt-6 px-3 text-[9px] text-white/25">
            © 2026 Muhammad Hanafi
          </p>
        </div>
      </div>
    </aside>
  );
}
