"use client";

import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  tags = [],
}: ProjectCardProps) {
  return (
    <article className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-zinc-900/50">
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-medium text-white transition-colors group-hover:text-cyan-400">
          {title}
        </h2>
        <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-all group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
