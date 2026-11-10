
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Harshal<span className="text-blue-600">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 lg:inline-flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-800 transition hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-6 shadow-lg lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
