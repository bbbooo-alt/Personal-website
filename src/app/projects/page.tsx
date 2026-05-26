import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, Tailwind CSS and modern web technologies. Features dark theme and smooth animations.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Dashboard UI",
    description: "Modern admin dashboard with real-time data visualization, dark mode support and responsive design.",
    tags: ["React", "D3.js", "Node.js"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management and user authentication.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application built with React Native. Features offline support and push notifications.",
    tags: ["React Native", "Firebase", "Redux"],
  },
];

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <section>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Selected Work
          </p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            精选项目展示，每一个都代表着对技术的探索与对设计的追求。
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
