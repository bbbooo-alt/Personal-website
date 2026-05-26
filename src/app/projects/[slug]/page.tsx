"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Layers } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <Container className="py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">项目未找到</h1>
          <p className="mt-4 text-zinc-400">您查找的项目不存在。</p>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            返回项目列表
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* 背景效果 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <Container className="py-12">
        {/* 返回链接 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            返回项目列表
          </Link>
        </motion.div>

        {/* 标题区域 */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mt-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="text-sm text-cyan-400">{project.year}</span>
            <span className="h-px w-8 bg-zinc-700" />
            <span className="text-sm text-zinc-500">{project.tech[0]}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            {project.longDescription || project.description}
          </motion.p>

          {/* 操作按钮 */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            {project.demo && (
              <Button href={project.demo} variant="primary">
                <ExternalLink className="h-4 w-4" />
                在线演示
              </Button>
            )}
            {project.github && (
              <Button href={project.github} variant="secondary">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                查看源码
              </Button>
            )}
          </motion.div>
        </motion.div>

        {/* 项目图片占位 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Layers className="mx-auto h-16 w-16 text-zinc-700" />
                <p className="mt-4 text-sm text-zinc-600">项目预览</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 详情网格 */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {/* 技术栈 */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-medium text-white">
              <Layers className="h-5 w-5 text-cyan-400" />
              技术栈
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 项目信息 */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <Calendar className="h-4 w-4" />
                年份
              </h3>
              <p className="mt-1 text-white">{project.year}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500">类别</h3>
              <p className="mt-1 text-white">网页开发</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500">状态</h3>
              <p className="mt-1 flex items-center gap-2 text-white">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                已完成
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* 功能特性 */}
        {project.features && project.features.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-lg font-medium text-white">核心功能</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span className="text-zinc-400">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* 下一个项目导航 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-zinc-800 pt-12"
        >
          <p className="text-sm text-zinc-500">下一个项目</p>
          {(() => {
            const currentIndex = projects.findIndex(
              (p) => p.slug === project.slug
            );
            const nextProject = projects[currentIndex + 1] || projects[0];
            return (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group mt-2 inline-flex items-center gap-2 text-2xl font-light text-white transition-colors hover:text-cyan-400"
              >
                {nextProject.title}
                <ExternalLink className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            );
          })()}
        </motion.div>
      </Container>
    </>
  );
}
