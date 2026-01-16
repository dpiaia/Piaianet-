import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
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
  useEffect(() => {
    toast('Site em construção', {
      description: 'Ainda estou aprimorando este site, volte em breve para uma melhor experiência.',
      duration: 6000,
      style: {
        background: '#FACC15',
        color: '#0A0A0A',
        border: '1px solid #CA8A04',
        fontWeight: '500'
      },
    });
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-brand-dark min-h-screen text-neutral-50 selection:bg-brand-yellow selection:text-brand-dark">
        <Toaster position="top-center" />
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