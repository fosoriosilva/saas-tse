import ContactForm from "@/components/features/ContactForm";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const Contact = () => {
  return (
    <main className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s connect"
          description="If you’d like to talk about frontend development, projects, or opportunities, feel free to reach out."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6 text-slate-700">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Email</h2>
              <a
                href="mailto:your-email@example.com"
                className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800"
              >
                your-email@example.com
              </a>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">GitHub</h2>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800"
              >
                github.com/your-username
              </a>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">LinkedIn</h2>
              <a
                href="https://linkedin.com/in/your-name"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800"
              >
                linkedin.com/in/your-name
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
