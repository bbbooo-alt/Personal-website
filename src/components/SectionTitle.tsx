"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      {subtitle && (
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          {subtitle}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-light tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
