"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/project/ProjectCard";
import TiltCard from "@/components/effects/TiltCard";
import { projects } from "@/data/projects";

/**
 * 项目列表页面
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <section>
        <SectionTitle subtitle="精选作品" title="全部项目" />
        <p 
          className="mb-12 max-w-2xl text-lg"
          style={{ color: 'var(--foreground-muted)' }}
        >
          精选项目展示，每一个都代表着对技术的探索与对设计的追求。
          点击查看项目详情。
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="h-full" tiltAmount={8}>
                <ProjectCard project={project} index={index} />
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p style={{ color: 'var(--foreground-muted)' }}>
            共 {projects.length} 个项目
          </p>
        </motion.div>
      </section>
    </Container>
  );
}
