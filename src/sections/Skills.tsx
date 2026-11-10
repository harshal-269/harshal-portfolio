
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Globe,
  Wrench,
  Brain,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Languages I use to solve problems and build applications.",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Building APIs, application logic and secure backend systems.",
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
    title: "Computer Science",
    icon: Brain,
    description: "Core concepts and problem-solving foundations.",
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
    <section id="skills" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            My technical toolkit
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Technologies and concepts I work with while developing
            applications and strengthening my software engineering skills.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
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
