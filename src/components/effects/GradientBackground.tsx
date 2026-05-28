"use client";

import { motion } from "framer-motion";

/**
 * 渐变背景组件
 * 遵循主色 1 + 辅色 1 原则：
 * - 主光源：青色 (#06b6d4) - 主导视觉焦点
 * - 辅助光源：粉紫 (#a855f7) - 渐变过渡、氛围填充
 */
export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0f]">
      {/* 深层背景 - 线性渐变基底 */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(10, 10, 15, 1) 0%, 
              rgba(15, 15, 30, 1) 50%, 
              rgba(20, 10, 30, 1) 100%
            )
          `
        }}
      />

      {/* 主光源 - 青色径向渐变（主导） */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 辅助光源 - 粉紫色（辅助） */}
      <motion.div
        className="absolute right-1/4 bottom-1/3 h-[500px] w-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* 顶部光晕 - 制造空间感 */}
      <div 
        className="absolute top-0 left-0 right-0 h-[500px]"
        style={{
          background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.03) 0%, transparent 100%)',
        }}
      />

      {/* 微妙噪点纹理 */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 网格背景 - 更 subtle */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
