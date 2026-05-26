import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "个人作品集网站",
    description: "使用 Next.js 构建的个人作品集，采用深色主题和流畅动画效果。",
    longDescription: "一个现代化的个人作品集网站，展示我的技能和项目。使用 Next.js 14、Tailwind CSS 和 Framer Motion 构建，具有流畅的动画效果。功能包括深色模式、响应式设计和动态项目页面。",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/bbbooo-alt/Personal-website",
    demo: "https://ggb.dev",
    image: "/images/portfolio.jpg",
    features: [
      "深色主题与青色强调色",
      "流畅的页面过渡动画",
      "响应式设计",
      "动态项目页面",
      "联系表单",
    ],
    year: "2024",
  },
  {
    slug: "dashboard",
    title: "数据仪表盘 UI",
    description: "现代化的管理后台，具有实时数据可视化和响应式设计。",
    longDescription: "一个综合性的数据分析和管理后台。具有实时图表、用户管理和基于角色的访问控制功能。在构建时充分考虑了性能和可扩展性。",
    tech: ["React", "D3.js", "TypeScript", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/images/dashboard.jpg",
    features: [
      "实时数据可视化",
      "使用 D3.js 的交互式图表",
      "用户认证系统",
      "基于角色的访问控制",
      "深色模式支持",
    ],
    year: "2024",
  },
  {
    slug: "ecommerce",
    title: "电商平台",
    description: "全栈电商解决方案，集成支付系统和用户认证功能。",
    longDescription: "一个完整的电商平台，具有产品管理、购物车、结账流程和支付集成功能。支持多种支付方式，并包含库存管理后台。",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/images/ecommerce.jpg",
    features: [
      "带搜索功能的产品目录",
      "购物车与结账流程",
      "Stripe 支付集成",
      "订单管理系统",
      "管理后台",
    ],
    year: "2024",
  },
  {
    slug: "mobile-app",
    title: "移动应用",
    description: "跨平台移动应用，支持离线使用和推送通知。",
    longDescription: "一个 React Native 移动应用，在 iOS 和 Android 上提供无缝的用户体验。功能包括离线模式、推送通知和与后端的实时同步。",
    tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/images/mobile.jpg",
    features: [
      "跨平台支持（iOS 和 Android）",
      "离线使用支持",
      "推送通知",
      "实时同步",
      "生物识别认证",
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
