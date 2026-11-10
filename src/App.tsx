
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
