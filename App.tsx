import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BackToTop from './components/ui/BackToTop';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-brand-dark min-h-screen text-neutral-50 selection:bg-brand-yellow selection:text-brand-dark">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;