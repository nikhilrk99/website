"use client";

import { useState, type FormEvent } from "react";

const purposes = ["Hiring", "Product Queries", "General Chat"];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real visitors never fill this in.
    if (formData.get("botcheck")) {
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Form isn't configured yet — missing access key.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const purpose = formData.get("purpose");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get("name"),
          email: formData.get("email"),
          purpose,
          message: formData.get("message"),
          subject: `Portfolio contact — ${purpose}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl flex-col gap-6">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-xs uppercase tracking-wide text-muted"
          >
            Name <span className="text-signal" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-white/10 bg-void px-4 py-3 text-offwhite outline-none transition-colors focus:border-signal"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-xs uppercase tracking-wide text-muted"
          >
            Email <span className="text-signal" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-white/10 bg-void px-4 py-3 text-offwhite outline-none transition-colors focus:border-signal"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="purpose"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-muted"
        >
          Purpose <span className="text-signal" aria-hidden="true">*</span>
        </label>
        <select
          id="purpose"
          name="purpose"
          required
          defaultValue=""
          className="w-full rounded-lg border border-white/10 bg-void px-4 py-3 text-offwhite outline-none transition-colors focus:border-signal"
        >
          <option value="" disabled>
            Select a reason
          </option>
          {purposes.map((purpose) => (
            <option key={purpose} value={purpose}>
              {purpose}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-muted"
        >
          Message <span className="text-signal" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-white/10 bg-void px-4 py-3 text-offwhite outline-none transition-colors focus:border-signal"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-signal px-8 py-3 font-mono text-sm uppercase tracking-wide text-offwhite transition-colors hover:bg-signal-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {status === "success" && (
          <p className="font-mono text-sm text-signal">Thanks — I&apos;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="font-mono text-sm text-signal">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}
