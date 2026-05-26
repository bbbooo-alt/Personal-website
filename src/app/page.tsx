import Container from "@/components/Container";

export default function HomePage() {
  return (
    <Container className="py-32">
      <section className="flex min-h-[60vh] flex-col justify-center">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Frontend Developer
          </p>
          
          <h1 className="mt-6 text-5xl font-light leading-tight tracking-tight text-white sm:text-7xl">
            尊敬的ggb大王
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-zinc-400">
            创造优雅且高性能的 Web 体验。
            <br />
            专注于 React 生态系统与现代前端技术。
          </p>

          <div className="mt-12 flex gap-4">
            <a
              href="/projects"
              className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:bg-zinc-200"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="rounded-full border border-zinc-700 px-8 py-3 text-sm font-medium text-white transition-all hover:border-white"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-8 border-t border-zinc-900 pt-12">
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-light text-white">{stat.number}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
