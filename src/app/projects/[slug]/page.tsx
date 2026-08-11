import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";
import { formatBreakdown } from "@/lib/format-breakdown";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Incrementing per-section delay so the page cascades in on load/scroll
// instead of every section fading up simultaneously.
const STAGGER = 0.08;

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
      <Link
        href="/projects"
        className="font-mono text-sm uppercase tracking-wide text-muted transition-colors hover:text-offwhite"
      >
        ← All projects
      </Link>

      <ScrollReveal
        delay={0 * STAGGER}
        className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex-1">
          <span className="rounded-full border border-signal/40 bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-signal">
            {project.context}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-offwhite sm:text-5xl">
            {project.title}
          </h1>
          {project.context === "Work" && project.role && (
            <p className="mt-2 text-muted">{project.role}</p>
          )}
        </div>
        {project.hasPhoto !== false && (
          project.photo ? (
            <Image
              src={project.photo}
              alt={`${project.title} photo`}
              width={224}
              height={224}
              className="h-44 w-44 shrink-0 rounded-2xl object-cover sm:h-56 sm:w-56"
            />
          ) : (
            <ImagePlaceholder
              label="Project photo"
              className="h-44 w-44 shrink-0 rounded-2xl sm:h-56 sm:w-56"
            />
          )
        )}
      </ScrollReveal>

      <ScrollReveal delay={1 * STAGGER} className="mt-16">
        <h2 className="font-display text-2xl font-bold text-offwhite">
          Brief
        </h2>
        <p className="mt-4 whitespace-pre-line leading-relaxed text-muted">
          {project.brief}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={2 * STAGGER} className="mt-16">
        <h2 className="font-display text-2xl font-bold text-offwhite">
          What I Did
        </h2>
        <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-muted marker:text-signal">
          {project.whatIDid.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={3 * STAGGER} className="mt-16">
        <h2 className="font-display text-2xl font-bold text-offwhite">
          Results
        </h2>
        <div className="mt-6 flex flex-wrap gap-6">
          {project.results.map((stat, i) => (
            <ScrollReveal
              key={i}
              delay={3 * STAGGER + i * 0.06}
              className="min-w-[140px] flex-1 rounded-2xl border border-white/10 bg-card p-6 text-center"
            >
              <p className="font-display text-3xl font-bold text-signal sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={4 * STAGGER} className="mt-16">
        <h2 className="font-display text-2xl font-bold text-offwhite">
          Tools &amp; Skills
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 bg-card px-3 py-1 font-mono text-xs uppercase tracking-wide text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={5 * STAGGER} className="mt-16">
        <h2 className="font-display text-2xl font-bold text-offwhite">
          Full breakdown
        </h2>
        <div className="mt-4 flex flex-col gap-4 text-muted">
          {formatBreakdown(project.fullBreakdown)}
        </div>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-signal transition-colors hover:text-signal-deep"
          >
            {project.link.label}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </ScrollReveal>

      {project.confidentialityNote && (
        <ScrollReveal delay={6 * STAGGER} className="mt-8">
          <p className="text-sm italic text-muted/70">
            {project.confidentialityNote}
          </p>
        </ScrollReveal>
      )}

      {(previous || next) && (
        <ScrollReveal
          delay={7 * STAGGER}
          className="mt-20 flex items-center justify-between gap-4 border-t border-white/10 pt-8"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-muted transition-colors group-hover:text-offwhite">
                ← Previous
              </span>
              <span className="text-offwhite transition-colors group-hover:text-signal">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-end gap-1 text-right"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-muted transition-colors group-hover:text-offwhite">
                Next →
              </span>
              <span className="text-offwhite transition-colors group-hover:text-signal">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </ScrollReveal>
      )}
    </main>
  );
}
