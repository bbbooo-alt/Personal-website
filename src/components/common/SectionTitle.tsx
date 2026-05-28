"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * 区块标题组件
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <p 
          className="text-sm font-medium uppercase tracking-[0.3em]"
          style={{ color: 'var(--accent-primary)' }}
        >
          {subtitle}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-light tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
