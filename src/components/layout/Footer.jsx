import Container from "./ui/Container";

const Footer = () => {
  return (
    <footer className="border-t py-8 mt-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          
          {/* Left */}
          <p>
            © {new Date().getFullYear()} Miaad Asjad. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Miaad-Asjad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/miaad-asjad-853430353/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:buildwithmiaad@email.com"
              className="hover:text-primary transition"
            >
              Email
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
