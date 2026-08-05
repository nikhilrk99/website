import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { getProjectBySlug, projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
      <Link
        href="/projects"
        className="font-mono text-sm uppercase tracking-wide text-muted transition-colors hover:text-offwhite"
      >
        ← All projects
      </Link>

      <h1 className="mt-6 font-display text-4xl font-bold text-offwhite sm:text-5xl">
        {project.title}
      </h1>

      <ImagePlaceholder label="Project photo" className="mt-8 h-64 w-full" />

      <div className="mt-8 rounded-2xl border border-dashed border-muted/50 bg-card p-8 text-muted">
        [Content for this project is coming soon — details, write-up, and
        helpful links will go here]
      </div>
    </main>
  );
}
