import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 py-6">
      <Container>
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} The TSE SaaS Team, Bogota, Colombia.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
