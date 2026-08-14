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
    description: "Everything you wanted from a wizarding duel, minus the detention.",
    context: "Personal",
    role: "[Add your role on this project]",
    hasPhoto: true,
    photo: "", // e.g. "/projects/hp-battle-card-game.jpg"
    brief: "I designed a wizarding duel that plays out across a table with a single deck and a pair of dice. Two players start at ten hearts, draw a hand, and reveal a spell at the same moment, then roll to see whether it finds its target. Because neither side knows what the other has committed to, every turn is a read on your opponent as much as a choice from your own hand. Most of the design work went into the relationship between damage and probability, making the devastating spells hard enough to land that reaching for them is a real gamble, and the reliable ones modest enough that a duel has room to swing.",
    whatIDid: [
      "Designed the 52-card spell set around a damage and probability curve",
      "Wrote the rules and resolved the edge cases",
      "Created a Claude Artifact to playtest the game and collect feedback",
    ],
    results: [
    
    ],
    tools: ["Claude Artifacts", "Google Docs"],
    fullBreakdown: 
    `Fans of most fictional universes imagine themselves as a character. People want to be Batman, Spider-Man, Iron Man. Harry Potter works differently. The fans I know don't want to be Harry, they want to be themselves in that world, holding their own wand, sorted into their own house, casting the spells they've had memorised since they were eleven. That distinction turned out to be the whole design brief. A game built on it can't ask you to play as someone. It has to hand you a wand and get out of the way.

    The idea arrived somewhere between a run of board game nights and another rewatch of the films. A duel between two friends, fought with spell cards. Each spell carries a damage rating and a probability of connecting, you reveal your card, roll to see whether it lands, and track your health down from ten. No characters to pick, no abilities to inherit. The only thing separating the two players is what's in their hand and what they do with it.

    I started a document to work through the mechanics and built out the full spell list, giving each one a damage value and a hit probability tied to specific dice outcomes. The two ends of that range set the rule for everything in between. Avada Kedavra ends the duel on contact, so it has to be the hardest thing in the deck to land, sitting at two sixes on a double roll. Stupefy is the spell everyone knows and everyone throws, so it does modest damage but connects five times out of six. Every other card was placed on the line between those two, and I added healing, defensive spells and special effects on top so the duel had a shape beyond trading damage.

    Playtesting was the next problem. Printing real cards was too slow and too expensive for something still changing every few days, so I used Claude Artifacts to build a playable prototype instead. I handed it the rules document, the card wireframes and the spell list with their characteristics, and got back a working version I could play myself and send to other people. Feedback came back in days instead of weeks.

    That loop is what let me rebalance properly. I adjusted damage values and hit probabilities until the devastating spells stayed genuinely rare and the safe ones stayed worth playing. Next is another pass on the mechanics, particularly status effects and how long they persist. Longer term, a licensed version would need the right partner, and that's a conversation worth having once the design holds up on its own.`,
    link: { label: "Play the prototype here", href: "https://claude.ai/public/artifacts/3a3c5d33-8e6d-4018-891b-6af72f1d34e3" },
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
