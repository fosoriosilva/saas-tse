import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const AboutPage = () => {
  return (
    <main className="py-20">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="A frontend developer with a strong eye for usability"
          description="I have worked with React, Next.js, Tailwind CSS, TypeScript, and GitHub, and I am now reconnecting with frontend development while working in QA at EA."
        />

        <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-slate-700">
          <p>
            My background is in frontend development, where I focused on
            building responsive and user-friendly interfaces using modern web
            technologies.
          </p>

          <p>
            More recently, I have been working as a QA tester. That experience
            has helped me strengthen my product thinking, attention to detail,
            and understanding of quality from the user’s perspective.
          </p>

          <p>
            I am now investing again in my frontend path, refreshing my skills
            and building polished projects that reflect both technical ability
            and a thoughtful approach to user experience.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">Core skills</h2>

          <ul className="mt-4 flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "GitHub",
              "JavaScript",
            ].map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
