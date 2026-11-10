
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Target,
  Lightbulb,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Engineering Student",
    description:
      "Pursuing a degree in Artificial Intelligence and Data Science, with an interest in software engineering.",
  },
  {
    icon: Code2,
    title: "Backend & Full-Stack Development",
    description:
      "Building applications using Java, Spring Boot, React, TypeScript and MySQL.",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description:
      "Practicing Data Structures and Algorithms to strengthen logical thinking and coding skills.",
  },
  {
    icon: Lightbulb,
    title: "Learning by Building",
    description:
      "Applying concepts through practical projects and exploring real-world software development.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            Get to know me
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            About Me
          </h2>

          <div className="mt-12 grid gap-14 lg:grid-cols-2">
            {/* ABOUT CONTENT */}
            <div>
              <h3 className="text-2xl font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
                I enjoy turning ideas into practical software solutions
                and understanding how systems work behind the scenes.
              </h3>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                I'm an Artificial Intelligence and Data Science engineering
                student interested in backend engineering and full-stack
                development. My primary focus is Java and Spring Boot,
                where I work on building REST APIs, implementing
                authentication and developing application logic.
              </p>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Alongside backend development, I use React and TypeScript
                to create user interfaces and MySQL to manage application
                data. I enjoy bringing these technologies together to
                build complete applications.
              </p>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Beyond projects, I consistently practice Data Structures
                and Algorithms and strengthen my understanding of
                fundamental computer science concepts. I believe in
                continuous learning, consistency and learning through
                hands-on experience.
              </p>

              {/* INTERESTS */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Backend Engineering",
                  "Full-Stack Development",
                  "Problem Solving",
                  "Software Engineering",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="space-y-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-800"
                  >
                    <div className="h-fit rounded-lg bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
