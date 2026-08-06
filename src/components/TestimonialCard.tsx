"use client";

import { useState } from "react";

export default function TestimonialCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-card p-6">
      <div className="relative">
        <p
          className={`whitespace-pre-line leading-relaxed text-offwhite ${
            expanded ? "" : "h-48 overflow-hidden"
          }`}
        >
          &ldquo;{quote}&rdquo;
        </p>
        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card to-transparent" />
        )}
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted">{name}</p>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="shrink-0 font-mono text-xs uppercase tracking-wide text-signal transition-colors hover:text-signal-deep"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
}
