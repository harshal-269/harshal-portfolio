
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Globe,
  Wrench,
  Brain,
  Layers,
} from "lucide-react";

const skillGroups = [
  {
    title: "Backend Development",
    icon: Server,
    description: "Building REST APIs, application logic and secure backend systems.",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Languages I use to solve problems and build applications.",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    description: "Creating responsive and interactive user interfaces.",
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Working with relational databases and data management.",
    skills: ["MySQL", "MongoDB", "H2"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    description: "Tools I use during development and collaboration.",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
  },
  {
    title: "Computer Science Fundamentals",
    icon: Brain,
    description: "Core concepts that support my software engineering foundation.",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-50 px-6 py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            My technical toolkit
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            My technical skills span backend engineering, frontend
            development, databases and core computer science concepts.
            I continuously learn and apply these technologies through
            practical projects.
          </p>
        </motion.div>

        {/* PRIMARY TECHNOLOGY STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 dark:border-blue-900/60 dark:bg-slate-900 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
              <Layers size={23} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Primary Technology Stack
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Technologies I focus on for full-stack application development.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Java",
              "Spring Boot",
              "Spring Security",
              "React",
              "TypeScript",
              "MySQL",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>

        {/* SKILL CATEGORIES */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800 dark:hover:shadow-black/30"
              >
                <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
