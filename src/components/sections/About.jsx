import Container from "../layout/ui/Container";


const About = () => {
  return (
    <section id="about-me" className="py-24 bg-light">
      <Container>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <div className="max-w-3xl space-y-5 text-muted leading-relaxed">
          <p>
            I’m a <span className="text-dark font-medium">MERN Stack Developer</span> {" "} with hands-on experience in building full-stack web applications using
            MongoDB, Express, React, and Node.js.
          </p>

          <p>
            I focus on writing clean, maintainable code and building applications
            that solve real-world problems. My projects include authentication
            systems, role-based access, CRUD operations, and responsive UIs.
          </p>

          <p>
            I enjoy learning new technologies, improving backend architecture,
            and polishing user experience with subtle animations using Framer Motion.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
