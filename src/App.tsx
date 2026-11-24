import { About } from './components/About';
import { AmbientBackground } from './components/AmbientBackground';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { ProjectDetails } from './components/ProjectDetails';

export default function App() {
  const projectMatch = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (projectMatch) return <ProjectDetails id={decodeURIComponent(projectMatch[1])} />;

  return (
    <>
      <a href="#main" className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-brand px-4 py-2 font-semibold text-white focus:translate-y-0">Skip to content</a>
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
