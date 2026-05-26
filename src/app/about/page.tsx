import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container className="py-20">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
          About
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

        <div className="mt-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Skills
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Figma"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
