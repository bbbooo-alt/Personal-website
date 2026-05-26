"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers } from "lucide-react";
import Container from "@/components/Container";
import { getProjectBySlug, projects } from "@/data/projects";
import { fadeUp, staggerContainer, scaleOnHover } from "@/lib/motion";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <Container className="py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
          <p className="mt-4 text-zinc-400">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* Background Effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <Container className="py-12">
        {/* Back Link */}
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
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
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

          {/* Action Buttons */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={scaleOnHover}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={scaleOnHover}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/5"
              >
                <Github className="h-4 w-4" />
                View Code
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Project Image Placeholder */}
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
                <p className="mt-4 text-sm text-zinc-600">Project Preview</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Details Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {/* Tech Stack */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-medium text-white">
              <Layers className="h-5 w-5 text-cyan-400" />
              Tech Stack
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

          {/* Project Info */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <Calendar className="h-4 w-4" />
                Year
              </h3>
              <p className="mt-1 text-white">{project.year}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500">Category</h3>
              <p className="mt-1 text-white">Web Development</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500">Status</h3>
              <p className="mt-1 flex items-center gap-2 text-white">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Completed
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-lg font-medium text-white">Key Features</h2>
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

        {/* Next Project Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-zinc-800 pt-12"
        >
          <p className="text-sm text-zinc-500">Next Project</p>
          {(() => {
            const currentIndex = projects.findIndex((p) => p.slug === project.slug);
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
