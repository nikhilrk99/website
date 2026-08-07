export type JobHistoryEntry = {
  date: string;
  location: string;
  title: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  bullets: string[];
};

export const jobHistory: JobHistoryEntry[] = [
  {
    date: "Feb 2026 - Present",
    location: "Chicago, IL",
    title: "Product Manager",
    company: "Valcre",
    companyUrl: "https://www.valcre.com/",
    logo: "/valcre.jpeg",
    bullets: [
      "**Spearheaded end-to-end analytics initiative** by auditing existing event infrastructure, closing instrumentation gaps, and establishing a **data-driven decision-making culture** across the organization.",
      "**Led discovery, scoping, and launch of the Photos Tab**, enabling users to upload and curate property photos directly within their workspace, saving appraisers **30 minutes per day per user**.",
      "**Partnered with the CEO and sales team** to drive two strategic expansion initiatives: the Cost Approach module targeting a new appraiser segment, and an AI-powered banking product targeting a **$40B market**.",
      ],
  },
  {
    date: "Oct 2025 - Jan 2026",
    location: "Chicago, IL",
    title: "Contract Product Manager",
    company: "Outcome",
    companyUrl: "https://outcomelabs.ai/",
    logo: "/outcome.jpeg",
    bullets: [
      "**Partnered directly with leading real estate firms** to identify automation opportunities, convert workflows into engineering requirements, and **drive the delivery of 10+ reusable AI workflows**.",
      "**Standardized AI prompting across the team** by formulating a step-by-step framework, **improving accuracy and consistency of extraction agents by 20%** while reducing turnaround time of client deployments.",
      "**Advocated for and spearheaded the integration of Amplitude** (a user analytics platform) into the website and core agentic product to bridge gaps in event tracking and drive visibility into user behavior."
      ],
  },
  {
    date: "Oct 2024 - June 2025",
    location: "Bangalore, India",
    title: "Product Manager",
    company: "SpotDraft",
    companyUrl: "https://www.spotdraft.com/",
    logo: "/spotdraft.jpeg",
    bullets: [
      "**Partnered with Engineering and Legal Ops to launch an internal AI tool** that enabled the Legal Ops team to detect syntax issues in computation code **reducing turnaround time by 10%.**",
      "**Collaborated with Design, Engineering, and Customer Success** to launch a feature called **”Signing Queue”** which presented contracts in a continuous, prioritized flow, **reducing unsigned contract backlog by 45%.**", 
      "**Released a feature called ”Contract Context”**, improving signatory confidence and **cutting drop-offs by 35%** after surfacing key friction points from analytics and aligning with leadership for a swift release.",
      "**Redesigned onboarding for add-on products called Clickwrap and Legal Hub**, using customer feedback and usability tests to **increase completion rates by 30%.**"
      ],
  },
  {
    date: "Apr 2023 - Sept 2024",
    location: "Bangalore, India",
    title: "Associate Product Manager",
    company: "SpotDraft",
    companyUrl: "https://www.spotdraft.com/",
    logo: "/spotdraft.jpeg",
    bullets: [
      "**Released archiving features for Contract Types and Counterparties**, by collaborating with the Support team to identify high-friction manual processes **saving the support team 10 business days per user per month**.",
      "**Launched Workflow Manager**, a tool that **saved over 20 hours per user per month** by enabling a fully self-serve workflow creation experience, designed through feedback sessions with key users and cross-functional teams.",
      "**Drove $50,000 in ARR** through Workflow Manager by delivering actionable insights on customer subscription usage, enabling product-led growth opportunities, and partnering with business teams for adoption."
      ],
  },
  {
    date: "Jan 2022 - Mar 2023",
    location: "Bangalore, India",
    title: "Associate Product Manager",
    company: "threedots",
    companyUrl: "",
    logo: "/threedots.png",
    bullets: [],
  },
];
