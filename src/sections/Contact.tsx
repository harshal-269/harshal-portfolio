
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Code2,
} from "lucide-react";

const email = "YOUR_EMAIL_ADDRESS";

const Contact = () => {
  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Get in touch
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Let's Build Something Together.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I'm always interested in learning opportunities, meaningful
            projects and connecting with people in technology.
            Feel free to reach out!
          </p>

          <a
            href={`mailto:${email}`}
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-slate-900 px-7 py-4 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Mail size={19} />
            Say Hello
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-3xl gap-5 sm:grid-cols-2">

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-4 rounded-xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
              <Mail size={23} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Email
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get in touch directly
              </p>
            </div>
          </a>

          <a
            href="https://github.com/harshal-269"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
              <Code2 size={23} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                GitHub
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Explore my repositories
              </p>
            </div>
          </a>

        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-slate-400">
          <MessageCircle size={16} />
          Open to connecting and collaborating.
        </div>

      </div>
    </section>
  );
};

export default Contact;
