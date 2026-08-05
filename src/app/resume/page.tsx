import { siteConfig } from "@/lib/site-config";
import { jobHistory } from "@/lib/resume";

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-20">
      <a
        href={siteConfig.resumeUrl}
        download
        className="flex w-full flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-signal to-signal-deep px-8 py-16 text-center transition-opacity hover:opacity-90"
      >
        <span className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
          [Add a catchy resume download title here]
        </span>
        <span className="font-mono text-sm uppercase tracking-wide text-offwhite/80">
          Download resume
        </span>
      </a>

      <div className="mt-16 flex flex-col gap-10">
        {jobHistory.map((job, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 border-b border-white/10 pb-8 last:border-none sm:flex-row sm:gap-8"
          >
            <span className="font-mono text-sm text-muted sm:w-32 sm:shrink-0">
              {job.year}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-xl font-bold text-offwhite">
                {job.title}
              </h2>
              <p className="font-mono text-sm text-signal">{job.company}</p>
              <p className="mt-1 text-muted">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
