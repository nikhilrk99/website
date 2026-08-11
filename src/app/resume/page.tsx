import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/site-config";
import { jobHistory } from "@/lib/resume";
import { formatBoldText } from "@/lib/format-bold-text";

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-20">
      <ScrollReveal className="flex w-full flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-card px-8 py-8 text-center sm:flex-row sm:text-left">
        <span className="flex items-center gap-2 font-display text-xl font-bold text-offwhite sm:text-2xl">
          Skip the scroll, get the PDF
          <span className="text-signal" aria-hidden="true">&rarr;</span>
        </span>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-signal px-6 py-2.5 font-mono text-sm uppercase tracking-wide text-offwhite transition-colors hover:bg-signal-deep"
        >
          View Resume PDF
        </a>
      </ScrollReveal>

      <div className="mt-16 flex flex-col gap-10">
        {jobHistory.map((job, i) => (
          <ScrollReveal
            key={i}
            delay={i * 0.08}
            className="flex flex-col gap-3 border-b border-white/10 pb-8 last:border-none"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="flex gap-4">
                {job.logo ? (
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <ImagePlaceholder label="Logo" className="h-12 w-12 shrink-0 rounded-lg" />
                )}
                <div className="flex flex-col gap-1">
                  <h2 className="font-display text-xl font-bold text-offwhite">
                    {job.title}
                  </h2>
                  <p className="font-mono text-sm text-signal">
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-signal/40 underline-offset-4 transition-colors hover:text-offwhite hover:decoration-offwhite"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-0.5 sm:items-end">
                <span className="whitespace-nowrap font-mono text-sm text-muted sm:text-right">
                  {job.date}
                </span>
                <span className="whitespace-nowrap font-mono text-xs text-muted/70 sm:text-right">
                  {job.location}
                </span>
              </div>
            </div>
            <ul className="flex list-disc flex-col gap-1 pl-4 text-muted marker:text-muted/50 sm:ml-16">
              {job.bullets.map((bullet, j) => (
                <li key={j}>{formatBoldText(bullet)}</li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
