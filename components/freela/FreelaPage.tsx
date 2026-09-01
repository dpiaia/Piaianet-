import React, { useState, useEffect } from 'react';
import FreelaHeader from './FreelaHeader';
import FreelaHero from './FreelaHero';
import AIDesignSystemCarroChefe from './AIDesignSystemCarroChefe';
import ServicesCatalog from './ServicesCatalog';
import ScopeCalculator from './ScopeCalculator';
import ProcessSection from './ProcessSection';
import WhyHireSection from './WhyHireSection';
import FAQSection from './FAQSection';
import FreelaContactCTA from './FreelaContactCTA';
import BackToTop from '../ui/BackToTop';

interface FreelaPageProps {
  onNavigateHome: () => void;
}

const FreelaPage: React.FC<FreelaPageProps> = ({ onNavigateHome }) => {
  const [selectedServiceForCalc, setSelectedServiceForCalc] = useState<string>('ai-ds');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Denis Piaia | Freelance & Design Systems com IA';
  }, []);

  const handleSelectServiceFromCatalog = (serviceId: string) => {
    setSelectedServiceForCalc(serviceId);
  };

  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen text-brand-dark dark:text-neutral-50 selection:bg-brand-lead dark:selection:bg-brand-yellow selection:text-white dark:selection:text-brand-dark transition-colors duration-300">
      {/* Sticky Commercial Header */}
      <FreelaHeader onNavigateHome={onNavigateHome} />

      <main>
        {/* Commercial Hero */}
        <FreelaHero />

        {/* The Flagship: Adequação de Design Systems para IA */}
        <AIDesignSystemCarroChefe />

        {/* Complete Services Catalog */}
        <ServicesCatalog onSelectService={handleSelectServiceFromCatalog} />

        {/* Interactive Scope & Briefing Calculator */}
        <ScopeCalculator selectedServiceId={selectedServiceForCalc} />

        {/* Agile 4-Step Process */}
        <ProcessSection />

        {/* Commercial Differentials & Trust */}
        <WhyHireSection />

        {/* Commercial FAQ */}
        <FAQSection />

        {/* Final Conversion CTA & Contact */}
        <FreelaContactCTA onNavigateHome={onNavigateHome} />
      </main>

      <BackToTop />
    </div>
  );
};

export default FreelaPage;
