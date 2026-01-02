// import Container from "../layout/ui/Container";

import Container from "../layout/ui/Container";

// const projects = [
//   {
//     title: "Blog Platform",
//     description:
//       "A full-stack blog application with secure authentication and complete CRUD functionality.",
//     points: [
//       "JWT-based authentication & protected routes",
//       "Create, edit, delete blog posts",
//       "Category-based filtering & clean UI",
//     ],
//     tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
//   },
//   {
//     title: "Course Platform",
//     description:
//       "An online course management platform with separate roles for admin and users.",
//     points: [
//       "Admin dashboard to manage courses",
//       "User enrollment & protected access",
//       "Scalable backend structure",
//     ],
//     tech: ["React", "Node.js", "Express", "MongoDB"],
//   },
//   {
//     title: "Arab Oasis Transport",
//     description:
//       "A professional business website built for a real transport company.",
//     points: [
//       "Clean and responsive UI for customers",
//       "Service-focused layout with clear CTAs",
//       "Production-ready structure",
//     ],
//     tech: ["React", "Tailwind CSS"],
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24">
//       <Container>
//         {/* Section Heading */}
//         <h2 className="text-3xl font-bold mb-4">Projects</h2>
//         <p className="text-muted max-w-2xl mb-12">
//           A selection of real-world projects that demonstrate my ability to build
//           scalable, secure, and user-focused web applications.
//         </p>

//         {/* Project Cards */}
//         <div className="space-y-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="border rounded-2xl p-8 hover:shadow-md transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-muted mb-4">
//                 {project.description}
//               </p>

//               <ul className="list-disc list-inside space-y-2 text-sm mb-4">
//                 {project.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>

//               <div className="flex flex-wrap gap-2">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Projects;




const projects = [
  {
    title: "Blog Platform",
    description:
      "A full-stack blog application with secure authentication and complete CRUD functionality.",
    points: [
      "JWT-based authentication & protected routes",
      "Create, edit, delete blog posts",
      "Category-based filtering & clean UI",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://blogsite-frontend-mauve.vercel.app/",
    code: "https://github.com/Miaad-Asjad/Blogsite-frontend",
  },
  {
    title: "Course Platform",
    description:
      "An online course management platform with separate roles for admin and users.",
    points: [
      "Admin dashboard to manage courses",
      "User enrollment & protected access",
      "Scalable backend structure",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://www.almaahir.online/",
    code: "https://github.com/Miaad-Asjad/Al-Maahir-Frontend",
  },

  {
    title: "Arab Oasis Transport",
    description:
      "A professional business website built for a real transport company.",
    points: [
      "Clean and responsive UI for customers",
      "Service-focused layout with clear CTAs",
      "Production-ready structure",
    ],
    tech: ["React", "Tailwind CSS"],
    live: "https://arab-oasis-frontend.vercel.app/", 
    code: "https://github.com/Miaad-Asjad/Arab-Oasis-Frontend",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <Container>
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-muted max-w-2xl mb-12">
          Real-world projects demonstrating my ability to build secure,
          scalable, and user-focused applications.
        </p>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-muted mb-4">
                {project.description}
              </p>

              <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-6 text-sm font-medium">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Live Demo →
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
