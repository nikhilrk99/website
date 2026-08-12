import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

// Incrementing per-section delay so the page cascades in on load/scroll
// instead of every section fading up simultaneously.
const STAGGER = 0.08;

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-20">
      <ScrollReveal delay={0 * STAGGER}>
        <h1 className="font-display text-4xl font-bold text-offwhite sm:text-5xl">
          Projects
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          [Add a short intro to your projects section here]
        </p>
      </ScrollReveal>

      <div className="mt-12 flex flex-col gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={1 * STAGGER + i * 0.08}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex overflow-hidden rounded-2xl border border-white/10 bg-card transition-colors hover:border-signal/50"
            >
              <div className="relative w-1/4 shrink-0">
                {project.photo ? (
                  <Image
                    src={project.photo}
                    alt={`${project.title} photo`}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                ) : (
                  <ImagePlaceholder label="Project photo" className="h-full w-full" />
                )}
              </div>
              <div className="flex w-3/4 flex-col justify-center gap-2 px-8 py-6">
                <h2 className="font-display text-2xl font-bold text-offwhite group-hover:text-signal">
                  {project.title}
                </h2>
                <p className="text-muted">{project.description}</p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
