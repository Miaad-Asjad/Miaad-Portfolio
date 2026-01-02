import { useState } from "react";
import Container from "./ui/Container";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-light/80 backdrop-blur border-b">
      <Container>
        <nav className="flex items-center justify-between h-16">
          
          {/* Brand */}
          <div className="font-semibold text-sm">
            Miaad Asjad <span className="text-muted">· MERN</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sm font-medium"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-light">
          <Container>
            <ul className="flex flex-col py-4 space-y-4 text-sm font-medium">
              <li>
                <a
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
