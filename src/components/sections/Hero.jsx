
import { motion } from "framer-motion";
import Container from "../layout/ui/Container";
import Button from "../layout/ui/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-primary font-medium mb-4">
            Hi, I’m Miaad Asjad
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            I build{" "}
            <span className="text-primary">
              full-stack web applications
            </span>{" "}
            with MERN Stack.
          </h1>

          <p className="text-muted text-lg mb-8">
            A MERN Stack Developer focused on building secure, scalable,
            and real-world web applications with clean UI and solid backend
            architecture.
          </p>

          <div className="flex gap-4">
            {/* SCROLL TO PROJECTS */}
            <a href="#projects">
              <Button>View Projects</Button>
            </a>

            {/* SCROLL TO CONTACT */}
            <a href="#contact">
              <Button variant="outline">Contact Me</Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
