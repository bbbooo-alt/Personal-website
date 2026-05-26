"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export default function ProjectCard({
  project,
  index = 0,
  className,
}: ProjectCardProps) {
  const { slug, title, description, tech, year } = project;

  return (
    <Link href={`/projects/${slug}`} className={cn("block h-full", className)}>
      <article className="group relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/50">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-medium text-white transition-colors group-hover:text-cyan-400">
              {title}
            </h3>
            {year && <p className="mt-1 text-sm text-zinc-600">{year}</p>}
          </div>
          <div className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-cyan-400" />
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {description}
        </p>

        {tech && tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-500">
                +{tech.length - 3}
              </span>
            )}
          </div>
        )}
      </article>
    </Link>
  );
}
