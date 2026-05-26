"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <section>
        <SectionTitle
          subtitle="精选作品"
          title="全部项目"
        />
        <p className="mb-12 max-w-2xl text-lg text-zinc-400">
          精选项目展示，每一个都代表着对技术的探索与对设计的追求。
          点击查看项目详情。
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tech}
              year={project.year}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500">
            共 {projects.length} 个项目
          </p>
        </motion.div>
      </section>
    </Container>
  );
}
