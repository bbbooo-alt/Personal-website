"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

/**
 * 按钮组件
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-white text-black hover:bg-white/90 active:scale-95",
    secondary:
      "bg-white/[0.03] text-white border border-white/[0.08] hover:bg-white/[0.06] hover:border-[var(--accent-primary)]/30 active:scale-95",
    ghost:
      "bg-transparent text-white/50 hover:text-white hover:bg-white/[0.03]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      disabled={disabled}
      type={href ? undefined : type}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={combinedClassName}
    >
      {children}
    </MotionComponent>
  );
}
