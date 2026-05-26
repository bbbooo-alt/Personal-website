"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { fadeUp, staggerContainer, scaleOnHover, tapScale } from "@/lib/motion";

const skills = [
  { name: "React", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "Figma", level: "Intermediate" },
];

const featuredProjects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, featuring dark theme and smooth animations.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Dashboard UI",
    description: "Modern admin dashboard with real-time data visualization and responsive design.",
    tags: ["React", "D3.js", "TypeScript"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack solution with payment integration and user authentication.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Mobile App",
    description: "Cross-platform application with offline support and push notifications.",
    tags: ["React Native", "Firebase"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container className="py-24">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex min-h-[70vh] flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400"
            >
              Portfolio 2024
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-4xl text-5xl font-light leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Building modern
              <br />
              web experiences
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400"
            >
              Frontend developer focused on performance, interaction and clean UI.
              专注于 React 生态系统与现代前端技术。
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="/projects"
                whileHover={scaleOnHover}
                whileTap={tapScale}
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={scaleOnHover}
                whileTap={tapScale}
                className="rounded-xl border border-zinc-700 px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/5"
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-20 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-12 sm:grid-cols-4"
            >
              {[
                { number: "5+", label: "Years" },
                { number: "50+", label: "Projects" },
                { number: "20+", label: "Clients" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-light text-white sm:text-4xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="relative py-20">
        <Container>
          <SectionTitle
            subtitle="Expertise"
            title="Skills & Technologies"
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                custom={index}
                whileHover={scaleOnHover}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-cyan-500/30"
              >
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-sm text-zinc-500">{skill.level}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20">
        <Container>
          <SectionTitle
            subtitle="Selected Work"
            title="Featured Projects"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                index={index}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/projects"
              whileHover={scaleOnHover}
              whileTap={tapScale}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-all hover:border-cyan-500/50 hover:text-cyan-400"
            >
              View All Projects
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </Container>
      </section>

      {/* About Preview Section */}
      <section className="relative py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl">
                创造优雅的数字体验
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                我是一名前端开发者，专注于创造优雅且高性能的 Web 体验。
                热爱探索新技术，追求代码与设计的完美结合。
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                在这个快速变化的数字世界中，我相信好的设计应该是简洁而有力的。
              </p>
              <motion.a
                href="/about"
                whileHover={scaleOnHover}
                whileTap={tapScale}
                className="mt-8 inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Learn More About Me
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
                <div className="flex h-full flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-zinc-300">Frontend Development</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-zinc-300">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-zinc-300">Performance Optimization</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-zinc-300">Responsive Design</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-20">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 p-12 text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Let&apos;s Work Together
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-light tracking-tight text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              有项目想法或合作意向？欢迎随时联系我，让我们一起创造精彩。
            </p>
            <motion.a
              href="/contact"
              whileHover={scaleOnHover}
              whileTap={tapScale}
              className="mt-8 inline-flex rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
