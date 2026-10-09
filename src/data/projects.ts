import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Frontend Portfolio",
    description:
      "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/portfolio",
  },
  {
    id: 2,
    title: "UI Component Demo",
    description:
      "A small design system playground with reusable frontend components.",
    stack: ["React", "TypeScript", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/ui-demo",
  },
  {
    id: 3,
    title: "Game Feature Concept",
    description:
      "A mock interface for a live content browsing experience inspired by game service UIs.",
    stack: ["Next.js", "Tailwind CSS", "Figma"],
    githubUrl: "https://github.com/your-username/game-feature-concept",
  },
];
