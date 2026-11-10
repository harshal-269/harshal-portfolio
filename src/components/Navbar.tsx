
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";

type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section) {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop <= 150) {
            currentSection = link.href.substring(1);
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const ThemeButton = () => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:border-blue-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-yellow-300 dark:hover:bg-slate-700"
    >
      {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
    </button>
  );

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-md transition-shadow duration-300 dark:border-slate-700 dark:bg-slate-950/90 ${
        isScrolled ? "shadow-md shadow-slate-200/40 dark:shadow-black/30" : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
        aria-label="Main navigation"
      >
        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Harshal<span className="text-blue-600">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-700 transition-all duration-300 dark:bg-blue-400 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeButton />

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeButton />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-800 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-6 py-6 shadow-lg dark:border-slate-800 dark:bg-slate-950 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "location" : undefined}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-slate-700 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-700 dark:bg-blue-400" />
                  )}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
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
