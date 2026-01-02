import Container from "../layout/ui/Container";


const skills = {
  Frontend: ["React", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express.js", "MongoDB", "JWT"],
  Tools: ["Git", "GitHub", "Postman", "Vercel"],
};

const Skills = () => {
  return (
    <section className="py-24 bg-white">
     <Container>
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2 text-muted">
                {items.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
