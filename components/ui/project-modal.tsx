"use client";

import Image from "next/image";
import { ArrowUpRight, Layers3, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { Project } from "@/types/project";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071329]/80 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.id}-title`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl lg:grid-cols-[1.15fr_0.85fr]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-4 top-4 z-30 grid size-11 place-items-center rounded-full bg-white/90 text-slate-950 shadow-lg backdrop-blur transition hover:rotate-90 hover:bg-slate-950 hover:text-white"
        >
          <X className="size-5" />
        </button>

        <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 lg:aspect-auto lg:min-h-[580px]">
          <Image
            src={project.image}
            alt={`${project.title} by Muhammad Hanafi`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071329]/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              Muhammad Hanafi
            </p>

            <h2
              id={`project-${project.id}-title`}
              className="mt-2 max-w-xl text-3xl font-black uppercase leading-none sm:text-5xl"
            >
              {project.displayTitle}
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-9">
          <div>
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">
              Concept Project
            </span>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              {project.category}
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              {project.title}
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {project.description}
            </p>

            <div className="mt-8 rounded-2xl border border-violet-100 bg-[#faf8ff] p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-violet-100">
                  <Layers3 className="size-5 text-violet-600" />
                </span>

                <div>
                  <p className="text-xs text-slate-500">Creative focus</p>
                  <p className="font-bold text-slate-950">
                    Visual Direction & Graphic Design
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              This visual is currently used as a concept presentation. It can
              later be replaced with Muhammad Hanafi&apos;s original project and
              complete case study.
            </p>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1"
          >
            Discuss a Similar Project
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}
