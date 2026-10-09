import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About SaaS" },
  { href: "/contact", label: "Links" },
];

const Header = () => {
  return (
    <header className="border-b border-slate-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold text-slate-900">
            Sims as a Service
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
