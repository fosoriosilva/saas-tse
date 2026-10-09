import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 py-6">
      <Container>
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Francwow. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
