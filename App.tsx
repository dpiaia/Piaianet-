import { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BackToTop from './components/ui/BackToTop';
import FreelaPage from './components/freela/FreelaPage';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (pathname.includes('/freela') || hash.includes('#freela')) {
        return '/freela';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (pathname.includes('/freela') || hash.includes('#freela')) {
        setCurrentPath('/freela');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToFreela = () => {
    window.history.pushState({}, '', '/freela');
    setCurrentPath('/freela');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFreelaPage = currentPath === '/freela';

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Toaster position="top-center" />
        {isFreelaPage ? (
          <FreelaPage onNavigateHome={navigateToHome} />
        ) : (
          <div className="bg-brand-light dark:bg-brand-dark min-h-screen text-brand-dark dark:text-neutral-50 selection:bg-brand-lead dark:selection:bg-brand-yellow selection:text-white dark:selection:text-brand-dark transition-colors duration-300">
            <Header />
            <main>
              <Hero />
              <Projects />
              <Experience />
              <About />
              <Testimonials />
              <Contact onNavigateFreela={navigateToFreela} />
            </main>
            <BackToTop />
          </div>
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
