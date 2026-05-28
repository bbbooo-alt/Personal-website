import Container from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "关于",
  description: "了解更多关于我的技能、经验和工作方式",
});

const skills = [
  { category: "前端", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "后端", items: ["Node.js", "Java Spring", "PostgreSQL", "Prisma", "GraphQL"] },
  { category: "AI", items: ["OpenAI API", "LangChain", "LangGraph", "AI Agents", "Prompt Engineering"] },
  { category: "工具", items: ["Git", "Docker", "Vercel", "Figma"] },
];

/**
 * 关于页面
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function AboutPage() {
  return (
    <Container className="py-20">
      <section className="max-w-3xl">
        <p 
          className="text-sm font-medium uppercase tracking-[0.3em]"
          style={{ color: 'var(--accent-primary)' }}
        >
          关于我
        </p>
        <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
          全栈开发 + AI 应用
        </h1>

        <div 
          className="mt-12 space-y-6 text-lg leading-relaxed"
          style={{ color: 'var(--foreground-muted)' }}
        >
          <p>
            我是一名全栈开发者，热衷于探索 AI 与 Web 技术的结合。
            从优雅的前端界面到强大的后端服务，再到智能的 AI 集成，
            我追求技术与用户体验的完美平衡。
          </p>
          <p>
            在 AI 应用开发方面，我专注于构建智能助手、自动化工作流和 AI 增强的应用程序。
            相信人工智能正在重塑我们构建和使用软件的方式，
            而我希望成为这场变革的参与者。
          </p>
          <p>
            无论是开发一个完整的 SaaS 产品，还是将 AI 能力集成到现有应用中，
            我都乐于接受挑战，不断学习新技术，创造有价值的数字产品。
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h2 
                className="text-sm font-medium uppercase tracking-widest"
                style={{ color: 'var(--foreground-muted)' }}
              >
                {group.category}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:border-[var(--accent-primary)]/30 hover:text-[var(--accent-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
