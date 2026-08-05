import ImagePlaceholder from "@/components/ImagePlaceholder";
import { coreValues } from "@/lib/about";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-20">
      <div className="flex flex-col gap-16 sm:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <ImagePlaceholder
            label="Your photo"
            className="aspect-square w-full rounded-2xl sm:max-w-sm"
          />
          <h1 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
            [Add your about-page headline here]
          </h1>
          <p className="text-muted">
            [Add a short description about yourself here]
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <h2 className="font-display text-2xl font-bold text-offwhite">
            Core values &amp; beliefs
          </h2>
          <div className="flex flex-col gap-6">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-card p-6"
              >
                <h3 className="font-display text-lg font-bold text-signal">
                  {value.title}
                </h3>
                <p className="mt-2 text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
