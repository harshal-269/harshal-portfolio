
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers, Globe } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "LocalWorker",
    category: "Full Stack Web Application",
    description:
      "A local service booking platform connecting customers with workers. Customers can discover services, request bookings and manage their interactions with workers.",
    features: [
      "Role-based access for Customers, Workers and Admins",
      "JWT authentication and Google OAuth",
      "Service booking and management",
      "Worker profiles and notifications",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "MySQL",
      "Spring Security",
      "JWT",
    ],
    github: "https://github.com/harshal-269/Worker-Management",
    live: "http://workermanagement.vercel.app/",
  },
  {
    number: "02",
    title: "NexDrive",
    category: "Full Stack Web Application",
    description:
      "A web application project built using a modern React frontend and Java Spring Boot backend. Explore the repository to see its implementation and features.",
    features: [
      "React-based frontend",
      "Spring Boot backend",
      "REST API integration",
      "Modern application architecture",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "MySQL",
    ],
    github: "https://github.com/harshal-269/NexDrive",
    live: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            Things I've built
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A selection of projects where I apply my knowledge,
            explore technologies and solve practical problems.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-blue-800 dark:hover:shadow-black/30 md:grid-cols-[0.8fr_1.2fr] md:p-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                    PROJECT {project.number}
                  </span>

                  <div className="rounded-xl bg-white p-3 text-blue-700 dark:bg-slate-800 dark:text-blue-400">
                    <Layers size={24} />
                  </div>
                </div>

                <h3 className="mt-7 text-3xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-700 dark:text-blue-400">
                  {project.category}
                </p>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
                    >
                      <Globe size={17} />
                      Live Demo
                      <ArrowUpRight size={17} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
                  >
                    <Code2 size={17} />
                    View Source Code
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:p-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Features
                </h4>

                <ul className="mt-5 space-y-4">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="my-7 h-px bg-slate-100 dark:bg-slate-700" />

                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Technologies Used
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
