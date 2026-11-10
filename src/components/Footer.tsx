
import { ArrowUp, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Harshal<span className="text-blue-600 dark:text-blue-400">.</span>
        </a>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Harshal. Built with React & TypeScript.
        </p>

        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
        >
          Back to top
          <ArrowUp size={17} />
        </a>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
        <Code2 size={14} />
        Designed and developed with care.
      </div>
    </footer>
  );
};

export default Footer;
