import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, featuring dark theme and smooth animations.",
    longDescription: "A modern personal portfolio website showcasing my skills and projects. Built with Next.js 14, Tailwind CSS, and Framer Motion for smooth animations. Features include dark mode, responsive design, and dynamic project pages.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/bbbooo-alt/Personal-website",
    demo: "https://ggb.dev",
    image: "/images/portfolio.jpg",
    features: [
      "Dark theme with cyan accent",
      "Smooth page transitions",
      "Responsive design",
      "Dynamic project pages",
      "Contact form",
    ],
    year: "2024",
  },
  {
    slug: "dashboard",
    title: "Dashboard UI",
    description: "Modern admin dashboard with real-time data visualization and responsive design.",
    longDescription: "A comprehensive admin dashboard for data analytics and management. Features real-time charts, user management, and role-based access control. Built with performance and scalability in mind.",
    tech: ["React", "D3.js", "TypeScript", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/images/dashboard.jpg",
    features: [
      "Real-time data visualization",
      "Interactive charts with D3.js",
      "User authentication",
      "Role-based access control",
      "Dark mode support",
    ],
    year: "2024",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and user authentication.",
    longDescription: "A complete e-commerce platform with product management, shopping cart, checkout flow, and payment integration. Supports multiple payment methods and includes an admin panel for inventory management.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/images/ecommerce.jpg",
    features: [
      "Product catalog with search",
      "Shopping cart & checkout",
      "Stripe payment integration",
      "Order management",
      "Admin dashboard",
    ],
    year: "2024",
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    description: "Cross-platform mobile application with offline support and push notifications.",
    longDescription: "A React Native mobile app providing seamless user experience across iOS and Android. Features offline mode, push notifications, and real-time synchronization with the backend.",
    tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/images/mobile.jpg",
    features: [
      "Cross-platform (iOS & Android)",
      "Offline support",
      "Push notifications",
      "Real-time sync",
      "Biometric authentication",
    ],
    year: "2023",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
