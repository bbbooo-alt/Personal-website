"use client";

import Container from "@/components/layout/Container";
import ProjectCard from "@/components/project/ProjectCard";
import TiltCard from "@/components/effects/TiltCard";
import Terminal from "@/components/effects/Terminal";
import { projects } from "@/data/projects";
import { ArrowRight, Code2, Brain, Layers } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "全栈开发",
    description: "React, Next.js, Node.js, PostgreSQL",
  },
  {
    icon: Brain,
    title: "AI 应用",
    description: "OpenAI, LangChain, 智能助手开发",
  },
  {
    icon: Code2,
    title: "现代技术栈",
    description: "TypeScript, Prisma, Tailwind CSS",
  },
];

/**
 * 首页组件
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 lg:py-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
            {/* 左侧内容 */}
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium uppercase tracking-[0.3em]"
                style={{ color: 'var(--accent-primary)' }}
              >
                全栈开发者 · AI 应用爱好者
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                ggb大王
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-lg text-lg"
                style={{ color: 'var(--foreground-muted)' }}
              >
                热衷于构建智能全栈应用，探索 AI 与 Web 技术的无限可能。
                从优雅的前端界面到强大的后端服务，再到智能 AI 集成，追求技术与体验的完美结合。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 hover:scale-105 active:scale-95"
                >
                  查看项目
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-[var(--accent-primary)]/30 hover:bg-white/[0.06]"
                >
                  联系我
                </Link>
              </motion.div>
            </div>

            {/* 右侧 Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <Terminal />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <TiltCard
                key={feature.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-white/[0.12]"
                tiltAmount={5}
              >
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'var(--accent-primary-subtle)' }}
                >
                  <feature.icon 
                    className="h-6 w-6" 
                    style={{ color: 'var(--accent-primary)' }}
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p 
                  className="mt-2 text-sm"
                  style={{ color: 'var(--foreground-muted)' }}
                >
                  {feature.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <p 
                className="text-sm font-medium uppercase tracking-[0.3em]"
                style={{ color: 'var(--accent-primary)' }}
              >
                精选项目
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-tight text-white">
                最近的作品
              </h2>
            </div>
            <Link
              href="/projects"
              className="group hidden items-center gap-2 text-sm transition-colors hover:text-white sm:inline-flex"
              style={{ color: 'var(--foreground-muted)' }}
            >
              查看全部
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <TiltCard
                key={project.slug}
                className="h-full"
                tiltAmount={8}
              >
                <ProjectCard project={project} index={index} />
              </TiltCard>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: 'var(--foreground-muted)' }}
            >
              查看全部项目
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
