
import { motion } from "framer-motion";
import { GraduationCap, Code2, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Engineering Student",
    description: "Pursuing Artificial Intelligence and Data Science.",
  },
  {
    icon: Code2,
    title: "Backend Focused",
    description: "Interested in Java, Spring Boot and full-stack development.",
  },
  {
    icon: Target,
    title: "Continuous Learner",
    description: "Improving through projects, DSA and practical problem-solving.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Get to know me
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            About Me
          </h2>

          <div className="mt-12 grid gap-14 lg:grid-cols-2">

            <div>
              <h3 className="text-2xl font-semibold leading-relaxed text-slate-900">
                I enjoy building things, solving problems, and learning how
                software works behind the scenes.
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                I'm an Artificial Intelligence and Data Science engineering
                student with a strong interest in software development.
                My current focus is backend engineering with Java and
                Spring Boot, while also developing my frontend skills.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                I believe the best way to learn technology is by building
                real applications. Through personal projects and consistent
                problem-solving practice, I'm working towards becoming
                a well-rounded software developer.
              </p>
            </div>

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
                    className="flex gap-5 rounded-xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="h-fit rounded-lg bg-blue-50 p-3 text-blue-700">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
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
