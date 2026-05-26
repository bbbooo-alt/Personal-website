import Container from "@/components/Container";

export default function HomePage() {
  return (
    <Container className="py-24">
      <section className="flex min-h-[70vh] flex-col justify-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Portfolio 2024
        </p>

        <h1 className="max-w-4xl text-5xl font-light leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Building modern
          <br />
          web experiences
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
          Frontend developer focused on performance, interaction and clean UI.
          专注于 React 生态系统与现代前端技术。
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/projects"
            className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="rounded-xl border border-zinc-700 px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-zinc-900 pt-12 sm:grid-cols-4">
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
        </div>
      </section>
    </Container>
  );
}
