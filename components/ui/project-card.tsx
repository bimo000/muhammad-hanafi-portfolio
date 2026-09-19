"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useState } from "react";

import { TiltCard } from "@/components/motion/tilt-card";
import { ProjectModal } from "@/components/ui/project-modal";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const projectNumber = String(project.id).padStart(2, "0");

  return (
    <>
      <TiltCard className="w-full">
        <article className="w-full">
          <button
            type="button"
            aria-label={`Open ${project.title} project`}
            aria-haspopup="dialog"
            onClick={() => setIsOpen(true)}
            className="group w-full overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-2 text-left shadow-sm transition-shadow duration-500 hover:shadow-2xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-slate-900">
              <Image
                src={project.image}
                alt={`${project.title} by Muhammad Hanafi`}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071329] via-[#071329]/10 to-transparent" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Selected Work
                </span>

                <span className="text-sm font-bold text-white/80">
                  {projectNumber}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {project.category}
                </p>

                <h3 className="max-w-[260px] text-2xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-3xl">
                  {project.displayTitle}
                </h3>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 px-3 pb-3 pt-4">
              <div className="min-w-0">
                <h3 className="font-bold text-slate-950">{project.title}</h3>

                <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-500">
                  {project.description}
                </p>
              </div>

              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600 transition duration-300 group-hover:rotate-45 group-hover:bg-violet-600 group-hover:text-white">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </button>
        </article>
      </TiltCard>

      {isOpen && <ProjectModal project={project} onClose={closeModal} />}
    </>
  );
}
