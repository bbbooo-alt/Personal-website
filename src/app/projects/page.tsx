import Container from "@/components/Container";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory and seamless checkout experience.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    year: "2024",
  },
  {
    title: "Dashboard Analytics",
    description: "Data visualization dashboard with interactive charts and real-time updates.",
    tags: ["React", "D3.js", "WebSocket"],
    year: "2024",
  },
  {
    title: "Mobile App Design",
    description: "Cross-platform mobile application with native-like performance.",
    tags: ["React Native", "TypeScript", "Firebase"],
    year: "2023",
  },
];

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <section>
        <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
          Projects
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          精选项目展示，每一个都代表着对技术的探索与对设计的追求。
        </p>

        <div className="mt-16 space-y-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group border-b border-zinc-800 pb-12 transition-colors hover:border-zinc-600"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-light text-white transition-colors group-hover:text-zinc-300">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-zinc-600">
                  {project.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
