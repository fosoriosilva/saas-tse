import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/features/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              TSE SaaS Team
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Building modern, responsive, and thoughtful web experiences.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              I work with React, Next.js, TypeScript, and Tailwind CSS to create
              clean and user-focused interfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about">About Me</Button>
              <Button href="/contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionTitle
            eyebrow="Projects"
            title="Featured work"
            description="A selection of frontend-focused projects that reflect my skills, design thinking, and engineering approach."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
