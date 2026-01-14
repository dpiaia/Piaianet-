import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
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
    </div>
  );
}

export default App;