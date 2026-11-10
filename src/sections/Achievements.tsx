
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Trophy,
  BookOpen,
  Target,
  ArrowUpRight,
} from "lucide-react";

const topics = [
  "Arrays & Strings",
  "Linked Lists",
  "Stacks & Queues",
  "Hashing",
  "Binary Search",
  "Sliding Window",
  "Sorting",
  "Bit Manipulation",
  "Trees & Binary Trees",
  "Recursion",
];

const highlights = [
  {
    icon: Code2,
    title: "Consistent Problem Solving",
    description:
      "Practicing coding problems to improve logical thinking and implementation skills.",
  },
  {
    icon: Brain,
    title: "Data Structures & Algorithms",
    description:
      "Building a strong foundation in fundamental data structures and algorithms.",
  },
  {
    icon: BookOpen,
    title: "Computer Science Fundamentals",
    description:
      "Strengthening knowledge of OOP, DBMS, Operating Systems and Computer Networks.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
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
            Beyond building projects
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            DSA & Problem Solving
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I regularly practice Data Structures and Algorithms to improve
            my problem-solving ability, coding efficiency and understanding
            of core computer science concepts.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* LEFT: DSA TOPICS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-9"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                <Target size={24} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Topics Practiced
              </h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Core topics I have studied and practiced through coding problems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: HIGHLIGHTS */}
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
                  className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="h-fit rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/60 dark:bg-blue-950/40">
              <div className="flex items-center gap-3">
                <Trophy className="text-blue-700 dark:text-blue-400" size={23} />

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  My Learning Philosophy
                </h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Consistency over shortcuts. I believe every problem solved
                is an opportunity to understand a concept more deeply.
              </p>
            </div>
          </div>
        </div>

        {/* LEETCODE PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:p-9"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Coding Profile
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              Find me on LeetCode
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Explore my coding practice, problem-solving journey and
              solutions to Data Structures and Algorithms problems.
            </p>
          </div>

          <a
            href="https://leetcode.com/u/harshal-269/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <Code2 size={18} />
            View LeetCode Profile
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
