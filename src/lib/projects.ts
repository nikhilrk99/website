export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  context: "Work" | "Personal";
  role?: string;
  // Set to false to skip the header photo for projects that don't have one.
  hasPhoto?: boolean;
  // Path to the header photo, e.g. "/projects/my-project.jpg" (place the file in `public/`).
  // Leave unset to show a placeholder box until a photo is ready.
  photo?: string;
  // Blank lines become paragraph breaks (rendered with whitespace-pre-line).
  brief: string;
  whatIDid: string[];
  results: ProjectStat[];
  tools: string[];
  // Blank lines become paragraph breaks. "**bold**" renders as bold. A block
  // where every line starts with "1. " (etc.) renders as a numbered list; a
  // block where every line starts with "- " or "* " renders as bullets.
  fullBreakdown: string;
  confidentialityNote?: string;
  link?: ProjectLink;
};

export const projects: Project[] = [
  {
    slug: "ai-ux-researcher",
    title: "AI UX Researcher",
    description: "Synthetic users that run your usability tests.",
    context: "Personal",
    role: "[Add your role on this project]",
    hasPhoto: false,
    photo: "/uxresearch.png",
    brief: 
    `Most unmoderated usability testing today runs on panels of paid participants, and that model has three problems I kept hearing about. Feedback quality is uneven when people are optimizing for a quick incentive. Costs scale linearly, so testing twenty users across a handful of flows adds up quickly. And recruiting takes days, which pushes teams to test once at the end rather than continuously.

    I'm building an AI UX research platform that replaces the human panel with synthetic users. You point it at a Figma prototype or a live URL, describe the task, pick a persona, and choose how many testers you want. A fleet of AI agents then runs the flow and reports back on completion rates, time to complete, where they hesitated, and the reasoning behind each step. Because these models are probabilistic rather than deterministic, you get real variation in behavior instead of one scripted path.

    The bet is that cheap, fast, repeatable testing changes when teams test, not just how. Currently in discovery and prototyping with UX researchers and designers.`,
    whatIDid: [
      "Created a high fidelity prototype using Claude Design",
      "Conducted numerous user interviews to test the hypothesis and solution",
      "Gathered feedback to iterate on prototype, positioning and shape the roadmap",
    ],
    results: [
      { value: "100+", label: "Outreach to designers and researchers" },
      { value: "15", label: "User interviews conducted" },
    ],
    tools: ["Claude Design", "User Interviews", "Sales pitch"],
    fullBreakdown: `
      **Where this came from**

      I was signing up for usertesting.com to make extra money while job hunting, which is how I got acquainted with unmoderated usability testing from the participant side. As a PM I made sure to give genuinely actionable feedback on every flow I tested, but I kept wondering what percentage of participants actually do that. I was being paid $10 a test. Add the platform fee and a company is spending roughly $15 per participant, so even a modest 10 person test runs $150.

      Around the same time I was thinking about why so many AI automation projects struggle. LLMs are probabilistic, meaning the same input can produce different outputs, and most teams were trying to force them into workflows that demand deterministic, repeatable results. I wanted a use case where that variance was the feature rather than the bug. Usability testing fit. I was already running product copy through Claude for feedback, and these models can reason and hold a persona. Run the same persona multiple times and each synthetic user diverges slightly, which is exactly how a panel of real humans behaves.

      **The hypotheses**

      I went in with three assumptions about what UX researchers actually struggle with.

      1. Cost scales linearly. At roughly $15 per participant, every additional user is another line on the bill. Teams cap tests at 10 to 15 people even though larger samples produce more reliable insight, which forces them to be selective about what gets tested at all. Iterating on a flow and testing each version is treated as too much investment for a single screen.
      2. Feedback quality is unreliable. Participants qualify by answering screener questions, and because there is money attached, some will say whatever gets them through. The researcher then spends time analyzing input from someone outside the target segment.
      3. Tests take too long. The more niche the audience, the longer recruiting takes, which caps how many tests a researcher can run in a quarter. Small changes never get tested and only large redesigns clear the bar.

      **What discovery actually showed**

      I reached out to over 100 UX researchers and designers. Around 15 have talked to me so far.

      * **Cost**: $10 to $50 per participant depending on how niche the audience is, at 8 to 10 participants per test and 1 to 2 tests a month. A $25 per user test with 8 participants is $200, putting a single researcher at roughly $300 a month on unmoderated testing alone.
      * **Time**: 2 to 3 weeks end to end, from scoping with the product team through analysis.
      * **Quality**: This tracks with sourcing. Researchers with a curated panel are satisfied. Those recruiting from the general public are not. One estimated up to 20% of participants were fraudulent.
      * **The surprise**: Unmoderated tests are only about 30% of their volume despite being cheaper and parallelizable, because the quality problem pushes them toward moderated sessions.
      * **A gap I did not expect**: Analysis tooling is weak across the board, so results get exported elsewhere or worked through manually in Excel.

      **The prototype, and where it stands**

      To make those calls more useful, I built a high fidelity prototype instead of describing the idea verbally. I started in v0 and later moved it to Claude Design. Walking researchers through a working interface produced far sharper feedback than a pitch would have.

      * Roughly **80%** said they would pay for it, and a few asked for early access assuming it was already live.
      * The framing they gave me mattered more than the enthusiasm. They saw it as an early directional signal for iterating before committing to a human study, not as a replacement for one.
      * Several wanted to hand it to PMs and designers so smaller tests stop landing on the research team.
      * Some were flatly skeptical and said they would not use it, which is a signal I am still working to understand.

      The project is in discovery. I am continuing interviews, and the next step is building an MVP I can actually sell.`,
    confidentialityNote:
      "",
    link: { label: "View the prototype", href: "https://claude.ai/code/artifact/600ca869-57f5-4abf-8eda-e4c15a46d470" },
  },
  {
    slug: "hp-battle-card-game",
    title: "Harry Potter Battle Card Game",
    description: "[Add a short project description here]",
    context: "Personal",
    role: "[Add your role on this project]",
    hasPhoto: true,
    photo: "", // e.g. "/projects/hp-battle-card-game.jpg"
    brief: "[Add a short paragraph summarizing the project]",
    whatIDid: [
      "[Add a bullet describing what you did]",
      "[Add another bullet]",
      "[Add another bullet]",
    ],
    results: [
      { value: "[#]", label: "[Add a stat label]" },
      { value: "[#]", label: "[Add a stat label]" },
    ],
    tools: ["[Tool]", "[Tool]", "[Tool]"],
    fullBreakdown: `[Add the full write-up for this project here — background, process, and outcome.

Leave a blank line between paragraphs to break them up.]`,
    link: { label: "[Add link label, e.g. View on GitHub]", href: "#" },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1 || projects.length < 2) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
