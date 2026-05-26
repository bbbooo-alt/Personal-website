"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, cardHover } from "@/lib/motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tags = [],
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={cardHover}
      className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/50"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-medium text-white transition-colors group-hover:text-cyan-400">
          {title}
        </h3>
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
    </motion.article>
  );
}
