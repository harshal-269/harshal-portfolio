
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Eye,
  ArrowUpRight,
} from "lucide-react";

const Resume = () => {
  return (
    <section className="bg-slate-50 px-6 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-14"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
            <FileText size={32} />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            My Resume
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Want to know more about my journey?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
            Explore my educational background, technical skills,
            projects and experience in one place.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              download="Harshal_Darandale_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3.5 text-sm font-medium text-slate-800 transition hover:border-blue-500 hover:text-blue-700 dark:border-slate-600 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              <Eye size={18} />
              View Resume
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
