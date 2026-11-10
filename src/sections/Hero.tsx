
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Layers,
  Mail,
  Code,
} from "lucide-react";

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "MySQL",
  "REST APIs",
  "JWT",
  "Git",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 pb-16 pt-32 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 dark:border-blue-900 dark:bg-blue-950">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Java & Spring Boot Developer
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            Hi, I'm Harshal.
            <br />
            <span className="text-blue-700 dark:text-blue-400">
              I build real-world applications.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I'm an Artificial Intelligence and Data Science engineering
            student focused on Java backend development and full-stack
            engineering. I enjoy building practical applications using
            Spring Boot, React and modern web technologies while
            continuously improving my problem-solving skills.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-800 transition hover:border-blue-500 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <Mail size={17} />
              Contact Me
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/harshal-269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <Code2 size={17} />
              GitHub
              <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/harshal-darandale-65a5132b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <Code2 size={17} />
              LinkedIn
              <ArrowUpRight size={15} />
            </a>

            <a
              href="https://leetcode.com/u/harshal-269/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <Code size={17} />
              LeetCode
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="h-px w-10 bg-slate-300 dark:bg-slate-700" />
            Learning, building and solving problems.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 transition-colors duration-300 sm:p-9 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  MY DEVELOPER PROFILE
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                  Building with purpose.
                </h2>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                <Code2 size={28} />
              </div>
            </div>

            <div className="my-8 h-px bg-slate-100 dark:bg-slate-800" />

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Backend Development
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Java, Spring Boot, REST APIs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400">
                  <Layers size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Frontend Development
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    React, TypeScript, Tailwind CSS
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-sky-50 p-3 text-sky-700 dark:bg-sky-950 dark:text-sky-400">
                  <Database size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Database & Security
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    MySQL, JWT Authentication
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8 h-px bg-slate-100 dark:bg-slate-800" />

            <p className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              TECHNOLOGIES I WORK WITH
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-400 transition hover:text-blue-700 dark:text-slate-500 dark:hover:text-blue-400 md:block"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
};

export default Hero;
