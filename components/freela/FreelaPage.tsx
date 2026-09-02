import React, { useState, useEffect } from 'react';
import FreelaHeader from './FreelaHeader';
import FreelaHero from './FreelaHero';
import CredentialsMarquee from './CredentialsMarquee';
import ProductsServicesSection from './ProductsServicesSection';
import CreationsCarousel from './CreationsCarousel';
import TrustedBySection from './TrustedBySection';
import AIMetadataSection from './AIMetadataSection';
import FreelaContactCTA from './FreelaContactCTA';
import BackToTop from '../ui/BackToTop';
import { useTheme } from '../../context/ThemeContext';

interface FreelaPageProps {
  onNavigateHome: () => void;
}

const FreelaPage: React.FC<FreelaPageProps> = ({ onNavigateHome }) => {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('Adequação de Design System para IA');
  const { setTheme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Denis Piaia | Freelance, Design Systems para IA & Desenvolvimento';
  }, []);

  const handleSelectServiceFromCatalog = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
  };

  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen text-brand-dark dark:text-neutral-50 selection:bg-brand-lead dark:selection:bg-brand-yellow selection:text-white dark:selection:text-brand-dark transition-colors duration-300">
      {/* Invisible Schema.org JSON-LD & AI Crawler metadata injected into <head> */}
      <AIMetadataSection />

      {/* 1. Header: Back to Portfolio + Contact + Language + Dark/Light Theme */}
      <FreelaHeader onNavigateHome={onNavigateHome} />

      <main>
        {/* 2. Space Themed Hero with Moving Cosmic Illustration & Clear Deliverables */}
        <FreelaHero />

        {/* 3. Credentials & Highlights Marquee: +15 anos, Professor PUC, Empresas de Sucesso, Palestrante, AI First... */}
        <CredentialsMarquee />

        {/* 4. Productized Services: Digital (Adequação DS IA, Sites, Landing Pages, Google Ads) & Gráfico (Logo, Folhetos, Cartão) */}
        <ProductsServicesSection onSelectService={handleSelectServiceFromCatalog} />

        {/* 5. Creations Carousel: Netshoes Run, Netshoes Copa, iFood Colômbia, Clinicorp, Superlógica, Zattini */}
        <CreationsCarousel onNavigateHome={onNavigateHome} />

        {/* 6. Trusted By Carousel: Logos (Netshoes, Zattini, iFood, Visa, Superlógica, Clinicorp, Cielo, Mercado Livre, etc.) */}
        <TrustedBySection />

        {/* 7. Final Contact Channels & Conversion Form */}
        <div id="contact-freela">
          <FreelaContactCTA 
            onNavigateHome={onNavigateHome} 
            selectedServiceTitle={selectedServiceTitle}
          />
        </div>
      </main>

      <BackToTop />
    </div>
  );
};

export default FreelaPage;
