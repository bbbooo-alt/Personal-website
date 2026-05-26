"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, cardHover } from "@/lib/motion";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  year?: string;
  index?: number;
}

export default function ProjectCard({
  slug,
  title,
  description,
  tags = [],
  year,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/projects/${slug}`} className="block">
        <motion.article
          whileHover={cardHover}
          className="group relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/50"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-medium text-white transition-colors group-hover:text-cyan-400">
                {title}
              </h3>
              {year && (
                <p className="mt-1 text-sm text-zinc-600">{year}</p>
              )}
            </div>
            <motion.div
              whileHover={{ x: 2, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-cyan-400" />
            </motion.div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-500">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </motion.article>
      </Link>
    </motion.div>
  );
}
