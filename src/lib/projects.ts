export type Project = {
  slug: string;
  title: string;
  description: string;
};

// TODO: replace description placeholders with real copy.
export const projects: Project[] = [
  {
    slug: "ai-ux-researcher",
    title: "AI UX Researcher",
    description: "[Add a short project description here]",
  },
  {
    slug: "harry-potter-battle-card-game",
    title: "Harry Potter Battle Card Game",
    description: "[Add a short project description here]",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
