import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 为静态导出生成所有项目路径
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 生成页面元数据
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "项目未找到 | ggb大王",
    };
  }
  
  return {
    title: `${project.title} | ggb大王`,
    description: project.description,
  };
}

/**
 * 项目详情页面 (服务端组件)
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
