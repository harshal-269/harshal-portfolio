
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Code2,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/xyeerpkr";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Get in touch
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Let's Start a Conversation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have an opportunity, a project idea, or simply want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-2">

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Let's connect.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              I'm interested in software development opportunities,
              meaningful collaborations and connecting with fellow
              developers and technology enthusiasts.
            </p>

            <div className="mt-9 space-y-5">

              {/* PROFESSIONAL EMAIL */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=darandaleharshal3933@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Mail size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-slate-900">
                    Professional Email
                  </h4>
                  <p className="mt-1 break-all text-sm text-slate-500">
                    darandaleharshal3933@gmail.com
                  </p>
                </div>

                <ArrowUpRight size={19} className="shrink-0 text-slate-400" />
              </a>

              {/* ALTERNATE EMAIL */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=harshaldev20@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Mail size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-slate-900">
                    Alternate Email
                  </h4>
                  <p className="mt-1 break-all text-sm text-slate-500">
                    harshaldev20@gmail.com
                  </p>
                </div>

                <ArrowUpRight size={19} className="shrink-0 text-slate-400" />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/harshal-darandale-65a5132b5/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Code2 size={23} />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">
                    LinkedIn
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Connect with me professionally
                  </p>
                </div>

                <ArrowUpRight size={19} className="text-slate-400" />
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/harshal-269"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Code2 size={23} />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">
                    GitHub
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Explore my projects and repositories
                  </p>
                </div>

                <ArrowUpRight size={19} className="text-slate-400" />
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-5">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <MessageCircle size={23} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Open to Opportunities
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Internships, collaborations and learning
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Send me a message
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Fill in the details below. I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                  maxLength={150}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  maxLength={3000}
                  className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {status === "success" && (
                <div role="status" className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle2 size={20} />
                  Your message was sent successfully. Thank you!
                </div>
              )}

              {status === "error" && (
                <div role="alert" className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <AlertCircle size={20} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-slate-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <Send size={17} />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-slate-400">
          <Mail size={16} />
          Looking forward to hearing from you.
        </div>

      </div>
    </section>
  );
};

export default Contact;
