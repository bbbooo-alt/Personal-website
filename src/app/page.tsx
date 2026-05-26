"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { fadeUp, staggerContainer, scaleOnHover, tapScale } from "@/lib/motion";

const skills = [
  { name: "React", level: "精通" },
  { name: "Next.js", level: "精通" },
  { name: "TypeScript", level: "高级" },
  { name: "Tailwind CSS", level: "精通" },
  { name: "Node.js", level: "高级" },
  { name: "Figma", level: "中级" },
];

const featuredProjects = [
  {
    slug: "portfolio",
    title: "个人作品集网站",
    description: "使用 Next.js 构建的个人作品集，采用深色主题和流畅动画效果。",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    slug: "dashboard",
    title: "数据仪表盘 UI",
    description: "现代化的管理后台，具有实时数据可视化和响应式设计。",
    tags: ["React", "D3.js", "TypeScript"],
  },
  {
    slug: "ecommerce",
    title: "电商平台",
    description: "全栈电商解决方案，集成支付系统和用户认证功能。",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    slug: "mobile-app",
    title: "移动应用",
    description: "跨平台移动应用，支持离线使用和推送通知。",
    tags: ["React Native", "Firebase"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* 背景效果 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* 首页主区域 */}
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
              作品集 2024
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-4xl text-5xl font-light leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              构建现代化的
              <br />
              网络体验
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400"
            >
              专注于性能、交互和简洁界面的前端开发者。
              深耕 React 生态系统与现代前端技术。
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="/projects"
                whileHover={scaleOnHover}
                whileTap={tapScale}
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                查看项目
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={scaleOnHover}
                whileTap={tapScale}
                className="rounded-xl border border-zinc-700 px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/5"
              >
                联系我
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-20 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-12 sm:grid-cols-4"
            >
              {[
                { number: "5+", label: "年经验" },
                { number: "50+", label: "项目" },
                { number: "20+", label: "客户" },
                { number: "100%", label: "满意度" },
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

      {/* 技能区域 */}
      <section className="relative py-20">
        <Container>
          <SectionTitle
            subtitle="专业技能"
            title="技术栈"
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

      {/* 精选项目区域 */}
      <section className="relative py-20">
        <Container>
          <SectionTitle
            subtitle="精选作品"
            title="特色项目"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
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
              查看全部项目
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </Container>
      </section>

      {/* 关于预览区域 */}
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
                关于我
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
                了解更多关于我
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
                    <span className="text-zinc-300">前端开发</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-zinc-300">UI/UX 设计</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-zinc-300">性能优化</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-zinc-300">响应式设计</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 联系号召区域 */}
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
              一起合作
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-light tracking-tight text-white sm:text-4xl">
              有项目想法？
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
              联系我
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
