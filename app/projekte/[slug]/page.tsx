import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject, projects } from "@/lib/projects";
import { siteName, socialImage } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Projekt nicht gefunden" };
  }

  const title = `${project.title} · Projekt`;
  const url = `/projekte/${project.slug}`;

  return {
    title,
    description: project.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "de_CH",
      siteName,
      title,
      description: project.summary,
      url,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: [socialImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <ProjectCaseStudy project={project} nextProject={nextProject} />
      <SiteFooter />
    </>
  );
}
