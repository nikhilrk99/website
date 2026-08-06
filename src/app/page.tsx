import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/projects";

// TODO: replace testimonial placeholders with real LinkedIn testimonials.
const testimonials = [
  { quote: "[Add a LinkedIn testimonial quote here]", name: "[Name, Title]" },
  { quote: "[Add a LinkedIn testimonial quote here]", name: "[Name, Title]" },
  { quote: "[Add a LinkedIn testimonial quote here]", name: "[Name, Title]" },
];

export default function Home() {
  const heroProject = projects[0];

  return (
    <main className="flex-1">
      {/* Landing */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-24 sm:flex-row sm:py-32">
        <div className="flex flex-1 flex-col gap-6 text-center sm:text-left">
          <p className="font-mono text-md uppercase tracking-widest text-signal">
            [Add a large hook line here]
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-offwhite sm:text-6xl">
            [Add your headline here]
          </h1>
          <p className="max-w-md text-lg text-muted sm:mx-0 mx-auto">
            [Add a very short introductory paragraph about yourself here]
          </p>
        </div>
        <ImagePlaceholder
          label="Your photo"
          className="aspect-square w-64 shrink-0 rounded-2xl sm:w-80"
        />
      </section>

      {/* Hero project */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="font-mono text-sm uppercase tracking-widest text-muted">
          Featured project
        </p>
        <Link
          href={`/projects/${heroProject.slug}`}
          className="group mt-6 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-colors hover:border-signal/50 sm:flex-row"
        >
          <ImagePlaceholder
            label="Hero project photo"
            className="h-56 w-full sm:h-auto sm:w-1/2"
          />
          <div className="flex w-full flex-col justify-center gap-3 px-8 py-8 sm:w-1/2">
            <h2 className="font-display text-3xl font-bold text-offwhite group-hover:text-signal">
              {heroProject.title}
            </h2>
            <p className="text-muted">{heroProject.description}</p>
          </div>
        </Link>
      </section>

      {/* Navigation boxes */}
      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-3">
        {[
          { href: "/projects", label: "Projects" },
          { href: "/resume", label: "Resume" },
          { href: "/about", label: "About Me" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex aspect-square flex-col items-start justify-end rounded-2xl border border-white/10 bg-card p-8 transition-colors hover:border-signal/50"
          >
            <span className="font-display text-2xl font-bold text-offwhite">
              {item.label}
            </span>
          </Link>
        ))}
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold text-offwhite">
          What people say
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-card p-6"
            >
              <p className="text-offwhite">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-mono text-sm text-muted">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
          [Add a closing call-to-action line here]
        </h2>
        <a
          href={siteConfig.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-signal px-8 py-3 font-mono text-sm uppercase tracking-wide text-offwhite transition-colors hover:bg-signal-deep"
        >
          Work with me
        </a>
      </section>
    </main>
  );
}
