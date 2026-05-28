"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

/**
 * 项目卡片组件
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function ProjectCard({
  project,
  className,
}: ProjectCardProps) {
  const { slug, title, description, tech, year } = project;

  return (
    <Link href={`/projects/${slug}`} className={cn("block h-full", className)}>
      <article 
        className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] p-6 transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {/* 悬停光晕效果 - 使用主色 */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle at 50% 0%, var(--accent-primary-glow) 0%, transparent 60%)',
          }}
        />
        
        {/* 渐变边框效果 - 主色到辅色 */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            padding: '1px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div>
              <h3 
                className="text-xl font-medium text-white transition-all duration-300 group-hover:text-[var(--accent-primary)]"
              >
                {title}
              </h3>
              {year && (
                <p className="mt-1 text-sm text-white/40">{year}</p>
              )}
            </div>
            <div 
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[var(--accent-primary)]/30 group-hover:bg-[var(--accent-primary-subtle)]"
            >
              <ArrowUpRight className="h-4 w-4 text-white/60 transition-all duration-300 group-hover:text-[var(--accent-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-white/50 line-clamp-3">
            {description}
          </p>

          {tech && tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/50 transition-all duration-300 group-hover:border-[var(--accent-primary)]/20 group-hover:text-white/70"
                >
                  {tag}
                </span>
              ))}
              {tech.length > 3 && (
                <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-white/30">
                  +{tech.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
