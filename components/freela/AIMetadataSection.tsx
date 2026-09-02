import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Headless/Invisible SEO & AI Metadata Injector.
 * Injects structured Schema.org JSON-LD and AI metadata directly into the document <head>
 * without rendering any visible UI elements to end users.
 */
const AIMetadataSection: React.FC = () => {
  const { language } = useLanguage();

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://denispiaia.com/#denispiaia",
        "name": "Denis Piaia",
        "jobTitle": "Design Ops Tech Leader & AI Design Systems Specialist",
        "url": "https://denispiaia.com",
        "sameAs": [
          "https://linkedin.com/in/denispiaia",
          "https://github.com/dpiaia",
          "https://behance.net/denispiaia"
        ],
        "knowsAbout": [
          "Design Systems",
          "AI-Driven Frontend Engineering",
          "Design Tokens (W3C)",
          "UI/UX Design",
          "React",
          "Next.js",
          "Tailwind CSS",
          "shadcn/ui",
          "Google Ads",
          "Conversion Rate Optimization"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance & Consulting"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "PUC-Campinas"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://denispiaia.com/#services",
        "name": "Denis Piaia - Design, Frontend & AI Consulting",
        "description": "Bespoke digital product design, AI-ready design systems, high-converting landing pages, websites, Google Ads, and brand identity.",
        "areaServed": "Global (Brazil, Latin America, Remote)",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Freelance & Consulting Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Adequação de Design System para IA",
                "description": "Design Token mapping, AGENTS.md rulebook generation, and 1:1 Figma-to-code parity for AI coding agents."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Criação de Sites e Landing Pages",
                "description": "High-performance React/Next.js corporate websites and conversion-focused landing pages."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tráfego Pago Google Ads",
                "description": "Conversion-focused search, PMax, and remarketing campaigns with tracking setup."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Design Gráfico & Identidade Visual",
                "description": "Logo design, brand manuals, corporate stationery, and print editorial collateral."
              }
            }
          ]
        }
      }
    ]
  };

  useEffect(() => {
    // Inject or update Schema.org JSON-LD in document head
    const scriptId = 'json-ld-freela';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(jsonLdData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [language]);

  // Completely invisible to human users, strictly parsed by robots and crawlers
  return null;
};

export default AIMetadataSection;
