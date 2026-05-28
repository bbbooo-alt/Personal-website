"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * 光标光晕效果组件
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* 主光标光晕 - 使用主色 */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute h-[400px] w-[400px] rounded-full"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, var(--accent-primary-glow) 0%, var(--accent-primary-subtle) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* 小光标点 - 使用主色 */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden h-2 w-2 rounded-full mix-blend-screen lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          backgroundColor: 'var(--accent-primary)',
        }}
      />
    </>
  );
}
