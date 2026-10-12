export const site = {
  name: "Your Name",
  // Set to false when the site is ready to publish.
  comingSoon: true,
  role: "Medical student · researcher · builder",
  tagline:
    "I work at the seam of clinical questions, data, and systems that actually ship.",
  description:
    "Personal site of a medical student interested in research, data science, machine learning, software, and digital operations.",
  email: "hello@example.com",
  location: "Write from wherever you are",
  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle",
    twitter: "https://x.com/yourhandle",
  },
  nav: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/research", label: "Research" },
    { href: "/blog", label: "Blog" },
    { href: "/poems", label: "Poems" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const lanes = [
  {
    title: "Clinic & inquiry",
    body: "Medicine trains you to notice, differential, and sit with uncertainty. Research is that habit made systematic.",
  },
  {
    title: "Data & models",
    body: "R, pandas, NumPy, then neural nets in TensorFlow when the question needs a model rather than a table.",
  },
  {
    title: "Products & growth",
    body: "Go, JavaScript, GoHighLevel, ClickUp, Make, Zapier — the unglamorous work of making ideas usable for real people.",
  },
] as const;

export const skillGroups = [
  {
    title: "Medicine & research",
    items: [
      "Clinical reasoning",
      "Study design literacy",
      "Scientific writing",
      "Evidence appraisal",
    ],
  },
  {
    title: "Data science",
    items: ["R", "Python", "pandas", "NumPy", "Exploratory analysis", "Visualization"],
  },
  {
    title: "Machine learning",
    items: ["Neural networks", "TensorFlow", "Supervised learning", "Model evaluation"],
  },
  {
    title: "Software",
    items: ["Go", "JavaScript", "TypeScript", "Next.js", "APIs", "Automation"],
  },
  {
    title: "Growth systems",
    items: [
      "Website design",
      "GoHighLevel",
      "ClickUp",
      "Make.com",
      "Zapier",
      "Funnels & CRM",
    ],
  },
] as const;
