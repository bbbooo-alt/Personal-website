import Container from "@/components/Container";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "Tools", items: ["Git", "Figma", "Docker", "Vercel"] },
];

export default function AboutPage() {
  return (
    <Container className="py-20">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>
        <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
          创造优雅的数字体验
        </h1>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-zinc-400">
          <p>
            我是一名前端开发者，专注于创造优雅且高性能的 Web 体验。
            热爱探索新技术，追求代码与设计的完美结合。
          </p>
          <p>
            在这个快速变化的数字世界中，我相信好的设计应该是简洁而有力的。
            每一个像素、每一行代码都应该有其存在的意义。
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                {group.category}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
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
