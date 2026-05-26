"use client";

import Container from "@/components/layout/Container";
import ProjectCard from "@/components/project/ProjectCard";
import TiltCard from "@/components/effects/TiltCard";
import Terminal from "@/components/effects/Terminal";
import { projects } from "@/data/projects";
import { ArrowRight, Code2, Palette, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code2,
    title: "全栈开发",
    description: "React, Next.js, TypeScript 生态",
  },
  {
    icon: Palette,
    title: "UI/UX 设计",
    description: "Tailwind CSS, Framer Motion",
  },
  {
    icon: Zap,
    title: "性能优化",
    description: "Core Web Vitals, SEO",
  },
];

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
                className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400"
              >
                前端开发者
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                尊敬的
                <br />
                <span className="font-normal">ggb大王</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-lg text-lg text-zinc-400"
              >
                专注于创造优雅且高性能的 Web 体验。
                热爱现代前端技术栈，追求极致的用户体验。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-zinc-200 hover:scale-105 active:scale-95"
                >
                  查看项目
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-cyan-500/50 hover:bg-zinc-800"
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
      <section className="border-y border-zinc-900 bg-zinc-950/30 py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((feature, index) => (
              <TiltCard
                key={feature.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
                tiltAmount={5}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
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
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                精选项目
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-tight text-white">
                最近的作品
              </h2>
            </div>
            <Link
              href="/projects"
              className="group hidden items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white sm:inline-flex"
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
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
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
