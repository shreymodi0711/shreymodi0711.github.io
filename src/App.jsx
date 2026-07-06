import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SidebarNav from './components/SidebarNav';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <div className="bg-ambient" aria-hidden="true" />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />

      <SidebarNav />

      <main className="container">
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
