export interface ServiceItem {
  id: string;
  category: 'digital' | 'grafico';
  isFlagship?: boolean;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
  tech: string[];
  highlightBadge?: string;
  productType: string;
}

export interface CreationItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  deliverables: string[];
  tag: string;
}

export interface TrustedPartner {
  name: string;
  logo: string;
  category?: string;
}

export interface FreelaTranslations {
  nav: {
    backToPortfolio: string;
    services: string;
    cases: string;
    trustedBy: string;
    calculator: string;
    contact: string;
    quoteCta: string;
  };
  hero: {
    availabilityBadge: string;
    greeting: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    aboutSummary: string;
    deliveryPromise: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaWhatsApp: string;
  };
  credentials: {
    title: string;
    items: {
      number: string;
      title: string;
      subtitle: string;
      icon: string;
    }[];
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    digitalTitle: string;
    digitalSubtitle: string;
    graficoTitle: string;
    graficoSubtitle: string;
    items: ServiceItem[];
    cardCta: string;
    productBadge: string;
  };
  creations: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewAllCases: string;
    items: CreationItem[];
  };
  trustedBy: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    partners: TrustedPartner[];
  };
  calculator: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    timelineOptions: {
      urgent: { label: string; desc: string };
      standard: { label: string; desc: string };
      flexible: { label: string; desc: string };
    };
    summaryTitle: string;
    summaryDesc: string;
    selectedServices: string;
    emptySelection: string;
    urgencyLabel: string;
    whatsappButton: string;
    emailButton: string;
    customNotePlaceholder: string;
  };
  aiMetadata: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    copyPromptLabel: string;
    copiedSuccess: string;
    forHumansTitle: string;
    forAIsTitle: string;
    aiPromptSummary: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappDesc: string;
    emailTitle: string;
    emailDesc: string;
    backHome: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formProject: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    rights: string;
  };
}

export const translationsFreela: Record<'pt' | 'en' | 'es', FreelaTranslations> = {
  pt: {
    nav: {
      backToPortfolio: 'Voltar ao Portfólio',
      services: 'Serviços',
      cases: 'Criações',
      trustedBy: 'Clientes',
      calculator: 'Orçamento',
      contact: 'Contato',
      quoteCta: 'Falar Comigo',
    },
    hero: {
      availabilityBadge: 'Disponível para novos projetos & sprints',
      greeting: 'Olá, sou Denis Piaia 👋',
      titleStart: 'Transformando ideias em produtos digitais e marcas que',
      titleHighlight: 'geram resultados reais',
      titleEnd: 'com design, código e IA.',
      aboutSummary: 'Com mais de 15 anos de estrada liderando Design de Produto, Frontend e Design Systems em grandes empresas como Netshoes, iFood e Clinicorp, além de lecionar na PUC-Campinas. Domino o ciclo completo: da estratégia visual ao código pronto em produção.',
      deliveryPromise: 'O que posso entregar para você: Soluções empacotadas de ponta a ponta — desde a adequação do seu Design System para Inteligência Artificial até sites ultra-rápidos, landing pages de alta conversão, identidade visual de autoridade e tráfego qualificado no Google Ads.',
      ctaPrimary: 'Ver Serviços & Produtos',
      ctaSecondary: 'Montar Briefing Rápido',
      ctaWhatsApp: 'Chamar no WhatsApp',
    },
    credentials: {
      title: 'Destaques & Credenciais',
      items: [
        {
          number: '+15 Anos',
          title: 'Experiência de Mercado',
          subtitle: 'Liderando Design & Frontend em grandes players',
          icon: 'Rocket',
        },
        {
          number: 'PUC-Campinas',
          title: 'Professor Universitário',
          subtitle: 'Formando novas gerações em Design e Tecnologia',
          icon: 'GraduationCap',
        },
        {
          number: 'Unicórnios & Líderes',
          title: 'Grandes Ecossistemas',
          subtitle: 'Netshoes, iFood, Superlógica, Clinicorp, Visa',
          icon: 'Building2',
        },
        {
          number: 'Palestrante',
          title: 'TDC, IxDA & Eventos Tech',
          subtitle: 'Disseminando Design Ops, UI/UX e IA aplicada',
          icon: 'Mic',
        },
        {
          number: 'AI-First',
          title: 'Design Ops com IA',
          subtitle: 'Fluxos avançados com Gemini, Claude e Cursor',
          icon: 'Bot',
        },
        {
          number: 'Full-Cycle',
          title: 'Design ao Código',
          subtitle: 'Do protótipo no Figma à interface em React/Tailwind',
          icon: 'Code2',
        },
        {
          number: 'Atuação Global',
          title: 'Brasil & América Latina',
          subtitle: 'Projetos entregues com impacto internacional',
          icon: 'Globe',
        },
        {
          number: '100% Pontual',
          title: 'Compromisso com Prazos',
          subtitle: 'Comunicação transparente e entregas ágeis',
          icon: 'ShieldCheck',
        },
      ],
    },
    services: {
      badge: 'Soluções Sob Medida',
      title: 'O Que Eu Posso',
      titleHighlight: 'Fazer Por Você',
      subtitle: 'Serviços estruturados como produtos fechados: com escopo claro, metodologia ágil, alta qualidade e prazos definidos.',
      digitalTitle: 'Digital & Engenharia',
      digitalSubtitle: 'Soluções modernas para escalar sua presença, acelerar seu time e multiplicar conversões.',
      graficoTitle: 'Design Gráfico & Marca',
      graficoSubtitle: 'Identidade e materiais impressos com acabamento refinado para gerar autoridade imediata.',
      productBadge: 'PRODUTO',
      cardCta: 'Solicitar este serviço',
      items: [
        // DIGITAL
        {
          id: 'ai-ds',
          category: 'digital',
          isFlagship: true,
          productType: 'DesignOps & IA',
          title: 'Adequação de Design System para IA',
          tagline: 'Otimize seu Design System para desenvolvimento 5x mais rápido com agentes de IA.',
          description: 'Estruturação profunda de Design Tokens (W3C), paridade 1:1 entre Figma e React/Tailwind, criação de regras de contexto (AGENTS.md) e automações para que ferramentas como Claude, Gemini, Cursor e Copilot escrevam código perfeito e sem alucinações visuais.',
          deliverables: [
            'Mapeamento completo e arquitetura de Tokens semânticos',
            'Arquivo AGENTS.md e prompt guidelines para IAs',
            'Paridade atômica 1:1 entre Figma e componentes React',
            'Documentação viva e guia de boas práticas para engenharia'
          ],
          timeline: '15 a 30 dias úteis',
          idealFor: 'Startups, scale-ups e empresas de tecnologia que usam ou querem usar IA no desenvolvimento.',
          tech: ['Design Tokens', 'Figma Variables', 'Tailwind CSS', 'shadcn/ui', 'Claude/Gemini/Cursor'],
          highlightBadge: '⭐ CARRO-CHEFE',
        },
        {
          id: 'sites',
          category: 'digital',
          productType: 'Web Development',
          title: 'Criação de Sites',
          tagline: 'Sites institucionais e corporativos ultra-rápidos, responsivos e otimizados para SEO.',
          description: 'Desenvolvimento de sites profissionais focados em contar a história da sua marca, transmitir autoridade e conquistar novos clientes. Código limpo, tempo de carregamento instantâneo, total acessibilidade e suporte completo a mobile.',
          deliverables: [
            'Arquitetura de informação e wireframes estratégicos',
            'Layout visual exclusivo no Figma com aprovação de etapas',
            'Desenvolvimento em React / Next.js / Astro com Tailwind CSS',
            'SEO técnico estruturado e pontuação 95+ no Google PageSpeed',
            'Integração com formulários, WhatsApp e Google Analytics'
          ],
          timeline: '10 a 20 dias úteis',
          idealFor: 'Empresas, consultorias, clínicas e profissionais que precisam de presença digital de alto nível.',
          tech: ['React', 'Next.js', 'Tailwind CSS', 'SEO Técnico', 'Framer Motion'],
          highlightBadge: 'MAIS PEDIDO',
        },
        {
          id: 'landing-pages',
          category: 'digital',
          productType: 'Performance & CRO',
          title: 'Criação de Landing Pages',
          tagline: 'Páginas de alta conversão para produtos, campanhas e lançamentos.',
          description: 'Landing pages desenhadas cirurgicamente com técnicas de neuromarketing, copywriting persuasivo, hierarquia visual impecável e micro-interações que retêm a atenção e maximizam as taxas de conversão (leads ou vendas).',
          deliverables: [
            'Estrutura de copy e funil de conversão focado em vendas',
            'Design responsivo sob medida (Mobile First)',
            'Implementação em código ultra-leve e veloz',
            'Trackeamento de cliques, pixels e conversões configurados',
            'Otimização de tempo de carregamento e testes A/B ready'
          ],
          timeline: '5 a 10 dias úteis',
          idealFor: 'Lançamentos de produtos, infoprodutos, serviços B2B, SaaS e campanhas patrocinadas.',
          tech: ['Tailwind CSS', 'Framer Motion', 'Conversion Rate Optimization', 'Meta Pixel & GA4'],
        },
        {
          id: 'google-ads',
          category: 'digital',
          productType: 'Mídia & Performance',
          title: 'Tráfego Pago Google ADS',
          tagline: 'Campanhas estratégicas para colocar sua empresa no topo das buscas com alto ROI.',
          description: 'Criação, configuração e otimização contínua de campanhas no Google Ads (Rede de Pesquisa, Performance Max, Display e Remarketing). Foco absoluto em custo por lead (CPL) otimizado e retorno sobre investimento.',
          deliverables: [
            'Estudo aprofundado de palavras-chave e concorrência',
            'Criação de anúncios com copies persuasivas e extensões',
            'Configuração de conversões no Google Tag Manager e GA4',
            'Negativação de termos irrelevantes e otimização de lances',
            'Relatório mensal de desempenho claro e acionável'
          ],
          timeline: 'Setup em 5 dias + Gestão Contínua',
          idealFor: 'Empresas que precisam de novos clientes qualificados todos os dias pelo Google.',
          tech: ['Google Ads', 'Google Tag Manager', 'Google Analytics 4', 'Looker Studio'],
        },

        // GRÁFICO
        {
          id: 'logo-brand',
          category: 'grafico',
          productType: 'Branding & Identidade',
          title: 'Criação de Logo & Identidade Visual',
          tagline: 'Construção de marcas memoráveis que transmitem valor e confiança imediata.',
          description: 'Desenvolvimento completo de identidade visual: desde a pesquisa de conceito, criação do símbolo e logotipo exclusivo, até a definição da paleta de cores cromáticas, sistema tipográfico e manual de aplicação da marca.',
          deliverables: [
            'Símbolo e logotipo exclusivo vetorizado em alta resolução',
            'Variações de cores (positivo, negativo, monocromático)',
            'Manual de Identidade Visual com regras de uso e tipografia',
            'Arquivos finais organizados para web e impressão (.AI, .EPS, .PDF, .SVG, .PNG)'
          ],
          timeline: '10 a 15 dias úteis',
          idealFor: 'Novas empresas, rebranding de marcas consolidadas e produtos que buscam autoridade.',
          tech: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Craft'],
          highlightBadge: 'EXCLUSIVO',
        },
        {
          id: 'folhetos-folders',
          category: 'grafico',
          productType: 'Design Editorial & Print',
          title: 'Folhetos, Folders & Materiais Promocionais',
          tagline: 'Peças gráficas impressas de alto impacto visual e diagramação impecável.',
          description: 'Criação e diagramação de folders institucionais, flyers promocionais, catálogos de produtos e folhetos comerciais. Arte preparada com precisão técnica gráfica (CMYK, sangria, marcas de corte e fechamento em PDF/X-1a).',
          deliverables: [
            'Design personalizado frente e verso (ou dobras múltiplas)',
            'Tratamento profissional de imagens e tipografia editorial',
            'Fechamento de arquivo pronto para gráfica de alta qualidade',
            'Versão digital interativa em PDF para envio via WhatsApp e e-mail'
          ],
          timeline: '5 a 8 dias úteis',
          idealFor: 'Feiras, eventos, forças de vendas, clínicas, imobiliárias e comércio.',
          tech: ['InDesign', 'Illustrator', 'Photoshop', 'PDF/X-1a Ready'],
        },
        {
          id: 'cartao-papelaria',
          category: 'grafico',
          productType: 'Papelaria Corporativa',
          title: 'Cartão de Visita & Papelaria',
          tagline: 'Cartões executivos sofisticados com QR Code dinâmico e papelaria completa.',
          description: 'Design de cartões de visita premium (com acabamentos especiais como verniz localizado, hot stamping ou corte especial) integrados com QR Code para salvar o contato direto na agenda do celular, além de papel timbrado, envelopes e pastas corporativas.',
          deliverables: [
            'Design de cartão de visita moderno com QR Code dinâmico',
            'Papel timbrado em formato editável (Word / Google Docs) e PDF',
            'Pastas com bolsa, envelopes saco e ofício',
            'Arquivos técnicos com gabarito de facas especiais para gráfica'
          ],
          timeline: '4 a 7 dias úteis',
          idealFor: 'Executivos, advogados, médicos, dentistas, arquitetos e empresas corporativas.',
          tech: ['Illustrator', 'InDesign', 'QR Code Generator', 'Print Pre-press'],
        },
      ],
    },
    creations: {
      badge: 'Portfólio Selecionado',
      title: 'Algumas',
      titleHighlight: 'Criações Emblemáticas',
      subtitle: 'Conheça um pouco do trabalho entregue para marcas de impacto nacional e internacional.',
      viewAllCases: 'Ver todos os projetos no portfólio',
      items: [
        {
          id: 'netshoes-run',
          title: 'Netshoes Run',
          client: 'Netshoes / Magalu',
          category: 'Identidade de Evento & Landing Pages',
          description: 'Criação da identidade visual, páginas promocionais e peças de engajamento para as etapas do maior circuito de corridas de rua do e-commerce esportivo da América Latina.',
          image: 'https://piaianet.page.gd/gifs/run.gif',
          deliverables: ['Identidade Visual', 'Landing Page Responsiva', 'Banners Promocionais', 'Kits de Corrida'],
          tag: 'CAMPANHA ESPORTIVA',
        },
        {
          id: 'netshoes-copa',
          title: 'Netshoes na Copa',
          client: 'Netshoes / Magalu',
          category: 'Gamificação & Campanha Digital',
          description: 'Ações digitais interativas, interfaces comemorativas e landing pages temáticas durante a Copa do Mundo, gerando recordes de tráfego e engajamento para a marca.',
          image: 'https://piaianet.page.gd/gifs/copa.gif',
          deliverables: ['Interface Interativa', 'Gamificação Promocional', 'Banners Dinâmicos', 'E-commerce Theme'],
          tag: 'ALTA CONVERSÃO',
        },
        {
          id: 'ifood-colombia',
          title: 'iFood Colômbia',
          client: 'iFood Internacional',
          category: 'Expansão de Produto & UX/UI',
          description: 'Adaptação do ecossistema do iFood para o mercado colombiano, incluindo fluxos do aplicativo, comunicação promocional e identidade adaptada para a América Latina.',
          image: 'https://piaianet.page.gd/imgs/ifood.jpg',
          deliverables: ['Localização de UX/UI', 'Comunicação Promocional', 'Design de Telas', 'Design System'],
          tag: 'EXPANSÃO LATAM',
        },
        {
          id: 'clinicorp-ds',
          title: 'Clinicorp Design System & AI',
          client: 'Clinicorp Healthtech',
          category: 'Design System & AI Integration',
          description: 'Desenvolvimento do sistema de design com tokens semânticos OKLCH, paridade atômica com shadcn/ui e integração com modelos de IA para software clínico odontológico.',
          image: 'https://picsum.photos/id/1/800/600',
          deliverables: ['Design Tokens W3C', 'Biblioteca shadcn/ui', 'Documentação Interativa', 'AI Context Guidelines'],
          tag: 'HEALTHTECH & AI',
        },
        {
          id: 'superlogica',
          title: 'Superlógica Fintech & ERP',
          client: 'Superlógica',
          category: 'Plataformas Financeiras & UX',
          description: 'Interface e arquitetura de dashboards financeiros, gestão de condomínios e fluxos de pagamentos recorrentes utilizados por milhares de administradoras.',
          image: 'https://picsum.photos/id/180/800/600',
          deliverables: ['Dashboards Financeiros', 'Fluxos de Checkout', 'Design System', 'User Research'],
          tag: 'FINTECH',
        },
        {
          id: 'zattini',
          title: 'Zattini Fashion E-commerce',
          client: 'Zattini / Netshoes',
          category: 'E-commerce & Editoriais de Moda',
          description: 'Direção de arte digital, landing pages de coleções de moda e campanhas sazonais de conversão rápida (Black Friday, Dia das Mães e Lançamentos).',
          image: 'https://piaianet.page.gd/gifs/lojas.gif',
          deliverables: ['Landing Pages Sazonais', 'Editoriais de Moda', 'UI de E-commerce', 'Testes A/B'],
          tag: 'E-COMMERCE',
        },
      ],
    },
    trustedBy: {
      badge: 'Marcas & Parceiros',
      title: 'Quem Já Acreditou no',
      titleHighlight: 'Meu Trabalho',
      subtitle: 'Histórico de colaboração com líderes de mercado, startups e instituições de ensino.',
      partners: [
        { name: 'Netshoes', logo: 'https://piaianet.page.gd/imgs/netshoes.svg', category: 'E-commerce' },
        { name: 'Zattini', logo: 'https://piaianet.page.gd/imgs/zattini.svg', category: 'Moda & E-commerce' },
        { name: 'iFood', logo: 'https://piaianet.page.gd/imgs/ifood.svg', category: 'Foodtech' },
        { name: 'Visa', logo: 'https://piaianet.page.gd/imgs/cielo.svg', category: 'Pagamentos' },
        { name: 'Superlógica', logo: 'https://piaianet.page.gd/imgs/clientefc.svg', category: 'Fintech' },
        { name: 'Clinicorp', logo: 'https://piaianet.page.gd/imgs/unibr.svg', category: 'Healthtech' },
        { name: 'Cielo', logo: 'https://piaianet.page.gd/imgs/cielo.svg', category: 'Meios de Pagamento' },
        { name: 'Mercado Livre', logo: 'https://piaianet.page.gd/imgs/meli.svg', category: 'Marketplace' },
        { name: 'PUC Campinas', logo: 'https://piaianet.page.gd/imgs/puc.svg', category: 'Educação' },
        { name: 'Athlético PR', logo: 'https://piaianet.page.gd/imgs/cap.svg', category: 'Esportes' },
        { name: 'TDC', logo: 'https://piaianet.page.gd/imgs/tdc.svg', category: 'Tech Events' },
        { name: 'IxDA', logo: 'https://piaianet.page.gd/imgs/ixda.svg', category: 'Design Community' },
      ],
    },
    calculator: {
      badge: 'Calculadora de Escopo',
      title: 'Monte o Seu',
      titleHighlight: 'Briefing Personalizado',
      subtitle: 'Selecione os serviços digitais ou gráficos de interesse para gerar uma mensagem pronta e falar diretamente comigo.',
      step1Title: '1. Selecione os serviços desejados:',
      step2Title: '2. Qual é a sua urgência no prazo?',
      step3Title: '3. Detalhes adicionais (opcional):',
      timelineOptions: {
        urgent: { label: 'Urgente (Sprint acelerada)', desc: 'Prioridade máxima na esteira de produção' },
        standard: { label: 'Padrão (Cronograma regular)', desc: 'Tempo ideal com etapas estruturadas de aprovação' },
        flexible: { label: 'Flexível / Planejamento', desc: 'Início planejado para as próximas semanas' },
      },
      summaryTitle: 'Resumo da Sua Solicitação',
      summaryDesc: 'Clique abaixo para enviar seu briefing pronto direto no WhatsApp ou por E-mail:',
      selectedServices: 'Serviços selecionados:',
      emptySelection: 'Nenhum serviço selecionado ainda. Clique nos cards acima para montar seu escopo.',
      urgencyLabel: 'Prazo desejado:',
      whatsappButton: 'Enviar Briefing via WhatsApp 💬',
      emailButton: 'Enviar por E-mail ✉️',
      customNotePlaceholder: 'Conte um pouco sobre sua empresa, público-alvo ou referências visuais que você gosta...',
    },
    aiMetadata: {
      badge: 'Schema & AI Index',
      title: 'Metadados & Indexação',
      titleHighlight: 'Para Buscadores e IAs',
      subtitle: 'Estrutura semântica JSON-LD e dados otimizados para motores de busca e agentes de inteligência artificial (ChatGPT, Gemini, Perplexity, Claude).',
      copyPromptLabel: 'Copiar Perfil em Markdown para IAs',
      copiedSuccess: 'Perfil copiado para a área de transferência!',
      forHumansTitle: 'Sobre Denis Piaia (Resumo para IAs):',
      forAIsTitle: 'JSON-LD Structured Data (Schema.org):',
      aiPromptSummary: `### Denis Piaia - Especialista em Design de Produto, Frontend e Design Systems com IA
- **Experiência:** +15 anos de atuação em grandes players (Netshoes, iFood, Clinicorp, Superlógica) e Professor Universitário na PUC-Campinas.
- **Serviços Digitais:** Adequação de Design Systems para IA (W3C Tokens, AGENTS.md, shadcn/ui), Criação de Sites institucionais (React, Next.js, Tailwind), Criação de Landing Pages de alta conversão (CRO, micro-interações) e Tráfego Pago Google Ads.
- **Serviços Gráficos:** Criação de Logos e Identidade Visual corporativa, Folhetos e Folders promocionais, Cartão de Visita e Papelaria executiva.
- **Disponibilidade:** Projetos pontuais, sprints aceleradas e consultoria para empresas no Brasil e no exterior.
- **Contato Direto:** dpiaia@gmail.com | WhatsApp: +55 (19) 98151-7551 | LinkedIn: linkedin.com/in/denispiaia`,
    },
    contact: {
      badge: 'Vamos Conversar',
      title: 'Pronto Para Tirar Seu',
      titleHighlight: 'Projeto do Papel?',
      subtitle: 'Entre em contato direto pelo canal de sua preferência ou preencha o formulário para receber uma proposta rápida.',
      whatsappTitle: 'WhatsApp Direto',
      whatsappDesc: '+55 (19) 98151-7551 • Resposta rápida',
      emailTitle: 'E-mail Comercial',
      emailDesc: 'dpiaia@gmail.com',
      backHome: 'Voltar para a Página Inicial / Portfólio',
      formTitle: 'Envie uma Mensagem Rápida',
      formName: 'Seu Nome ou Empresa',
      formEmail: 'Seu E-mail',
      formProject: 'Qual é o seu objetivo?',
      formMessage: 'Mensagem ou Briefing do Projeto',
      formSubmit: 'Enviar Mensagem',
      formSubmitting: 'Enviando...',
      formSuccess: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      backToPortfolio: 'Back to Portfolio',
      services: 'Services',
      cases: 'Work',
      trustedBy: 'Clients',
      calculator: 'Quote',
      contact: 'Contact',
      quoteCta: 'Talk to Me',
    },
    hero: {
      availabilityBadge: 'Available for new projects & sprints',
      greeting: "Hello, I'm Denis Piaia 👋",
      titleStart: 'Transforming ideas into digital products and brands that',
      titleHighlight: 'drive real business results',
      titleEnd: 'through design, code and AI.',
      aboutSummary: 'Over 15 years leading Product Design, Frontend Engineering, and Design Systems at market giants like Netshoes, iFood, and Clinicorp, along with teaching at PUC-Campinas. I handle the full cycle: from strategic aesthetics to production-ready code.',
      deliveryPromise: 'What I deliver for you: Packaged end-to-end solutions — from adapting your Design System for AI agents to ultra-fast websites, high-converting landing pages, authoritative visual branding, and targeted Google Ads traffic.',
      ctaPrimary: 'Explore Services & Products',
      ctaSecondary: 'Quick Scope Builder',
      ctaWhatsApp: 'Chat on WhatsApp',
    },
    credentials: {
      title: 'Highlights & Credentials',
      items: [
        {
          number: '15+ Years',
          title: 'Industry Experience',
          subtitle: 'Leading Design & Frontend in top-tier companies',
          icon: 'Rocket',
        },
        {
          number: 'PUC-Campinas',
          title: 'University Professor',
          subtitle: 'Mentoring new generations in Design and Tech',
          icon: 'GraduationCap',
        },
        {
          number: 'Unicorns & Leaders',
          title: 'Proven Track Record',
          subtitle: 'Netshoes, iFood, Superlógica, Clinicorp, Visa',
          icon: 'Building2',
        },
        {
          number: 'Speaker',
          title: 'TDC, IxDA & Tech Events',
          subtitle: 'Sharing Design Ops, UI/UX, and applied AI',
          icon: 'Mic',
        },
        {
          number: 'AI-First',
          title: 'Design Ops with AI',
          subtitle: 'Advanced workflows with Gemini, Claude & Cursor',
          icon: 'Bot',
        },
        {
          number: 'Full-Cycle',
          title: 'Design to Code',
          subtitle: 'From Figma components to React/Tailwind code',
          icon: 'Code2',
        },
        {
          number: 'Global Reach',
          title: 'Brazil & Latin America',
          subtitle: 'Delivering international impact',
          icon: 'Globe',
        },
        {
          number: '100% On-Time',
          title: 'Deadline Reliability',
          subtitle: 'Transparent communication and agile delivery',
          icon: 'ShieldCheck',
        },
      ],
    },
    services: {
      badge: 'Tailored Solutions',
      title: 'What I Can',
      titleHighlight: 'Deliver For You',
      subtitle: 'Structured as productized services: clear deliverables, agile methodologies, high quality, and guaranteed timelines.',
      digitalTitle: 'Digital & Engineering',
      digitalSubtitle: 'Modern solutions to scale your digital presence, empower your engineering team, and boost conversions.',
      graficoTitle: 'Graphic Design & Branding',
      graficoSubtitle: 'Refined brand identity and print assets engineered for instant authority.',
      productBadge: 'PRODUCT',
      cardCta: 'Request this service',
      items: [
        // DIGITAL
        {
          id: 'ai-ds',
          category: 'digital',
          isFlagship: true,
          productType: 'DesignOps & AI',
          title: 'Design System Adaptation for AI',
          tagline: 'Optimize your Design System for 5x faster engineering with AI coding agents.',
          description: 'Deep structuring of W3C semantic Design Tokens, 1:1 parity between Figma and React/Tailwind, AGENTS.md context rulebooks, and prompts so Claude, Gemini, Cursor, and Copilot write pristine UI code without hallucinations.',
          deliverables: [
            'Complete semantic Design Token mapping and architecture',
            'AGENTS.md guidelines and LLM context files',
            '1:1 Atomic parity between Figma variables and React components',
            'Living documentation and engineering best practices guide'
          ],
          timeline: '15 to 30 business days',
          idealFor: 'Startups, scale-ups, and tech companies leveraging AI coding agents in production.',
          tech: ['Design Tokens', 'Figma Variables', 'Tailwind CSS', 'shadcn/ui', 'Claude/Gemini/Cursor'],
          highlightBadge: '⭐ FLAGSHIP',
        },
        {
          id: 'sites',
          category: 'digital',
          productType: 'Web Development',
          title: 'Website Creation',
          tagline: 'Ultra-fast, responsive corporate and institutional websites optimized for SEO.',
          description: 'Custom professional websites engineered to elevate your brand authority, engage visitors, and convert leads. Clean code, instant load times, full accessibility, and flawless mobile responsiveness.',
          deliverables: [
            'Information architecture and strategic wireframing',
            'Bespoke Figma UI/UX design with milestone reviews',
            'React / Next.js / Tailwind CSS modern web development',
            'Technical SEO setup and 95+ Google PageSpeed score',
            'Form, WhatsApp, and Google Analytics integrations'
          ],
          timeline: '10 to 20 business days',
          idealFor: 'Businesses, consultancies, healthcare clinics, and executives seeking a premier digital presence.',
          tech: ['React', 'Next.js', 'Tailwind CSS', 'Technical SEO', 'Framer Motion'],
          highlightBadge: 'POPULAR',
        },
        {
          id: 'landing-pages',
          category: 'digital',
          productType: 'Performance & CRO',
          title: 'High-Converting Landing Pages',
          tagline: 'Conversion-driven landing pages for product launches and campaigns.',
          description: 'Engineered with proven neuromarketing principles, persuasive copy structure, visual hierarchy, and smooth micro-interactions that captivate users and maximize conversion rates.',
          deliverables: [
            'Persuasive copy hierarchy designed for high conversion',
            'Mobile-first bespoke responsive layout',
            'Ultra-lightweight and lightning-fast frontend code',
            'Event, conversion, and pixel tracking integration',
            'Speed optimization and A/B test readiness'
          ],
          timeline: '5 to 10 business days',
          idealFor: 'Product launches, SaaS, B2B services, digital courses, and paid media funnels.',
          tech: ['Tailwind CSS', 'Framer Motion', 'Conversion Rate Optimization', 'Meta Pixel & GA4'],
        },
        {
          id: 'google-ads',
          category: 'digital',
          productType: 'Media & Performance',
          title: 'Google Ads Paid Traffic',
          tagline: 'Strategic search and performance campaigns engineered for maximum ROI.',
          description: 'Setup, launch, and continuous optimization of Google Ads campaigns (Search, Performance Max, Display, and Remarketing). Relentless focus on lowering cost-per-lead (CPL) and maximizing return on ad spend.',
          deliverables: [
            'Comprehensive keyword intent and competitor research',
            'Compelling ad copy with high-performing extensions',
            'GA4 and Google Tag Manager conversion tracking setup',
            'Negative keyword filtering and continuous bid optimization',
            'Clear and actionable monthly performance reporting'
          ],
          timeline: '5-day setup + Ongoing Management',
          idealFor: 'Companies seeking qualified leads and high-intent buyers daily via Google.',
          tech: ['Google Ads', 'Google Tag Manager', 'Google Analytics 4', 'Looker Studio'],
        },

        // GRÁFICO
        {
          id: 'logo-brand',
          category: 'grafico',
          productType: 'Branding & Identity',
          title: 'Logo & Visual Identity Design',
          tagline: 'Memorable brand identities that command instant trust and market authority.',
          description: 'End-to-end visual identity development: conceptual discovery, custom logo crafting, chromatic color system, typography curation, and brand application guidelines.',
          deliverables: [
            'Exclusive vector logo and symbol in ultra-high resolution',
            'Color variations (positive, negative, monochrome)',
            'Brand guidelines manual with typography and application rules',
            'Organized production files for web and print (.AI, .EPS, .PDF, .SVG, .PNG)'
          ],
          timeline: '10 to 15 business days',
          idealFor: 'New ventures, established business rebranding, and products needing elite authority.',
          tech: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Craft'],
          highlightBadge: 'BESPOKE',
        },
        {
          id: 'folhetos-folders',
          category: 'grafico',
          productType: 'Print & Editorial',
          title: 'Brochures, Folders & Promotional Assets',
          tagline: 'High-impact printed promotional pieces with immaculate editorial design.',
          description: 'Design and layout of corporate brochures, multi-fold flyers, sales folders, and product catalogs. Prepared with rigorous prepress technical standards (CMYK, bleed, PDF/X-1a).',
          deliverables: [
            'Custom double-sided or multi-fold editorial design',
            'Professional image retouching and typography hierarchy',
            'Press-ready files formatted for premium commercial printers',
            'Interactive digital PDF for instant WhatsApp and email distribution'
          ],
          timeline: '5 to 8 business days',
          idealFor: 'Trade shows, field sales, clinics, real estate, and retail businesses.',
          tech: ['InDesign', 'Illustrator', 'Photoshop', 'PDF/X-1a Ready'],
        },
        {
          id: 'cartao-papelaria',
          category: 'grafico',
          productType: 'Corporate Stationery',
          title: 'Business Cards & Stationery',
          tagline: 'Executive business cards with interactive dynamic QR Codes and stationery.',
          description: 'Premium business card design (with support for spot UV, hot foil, or custom die-cuts) paired with smart QR Codes for 1-tap phone contact saving, plus letterheads and folders.',
          deliverables: [
            'Modern executive business card with dynamic QR Code',
            'Editable letterhead (Word / Docs) and PDF formats',
            'Corporate presentation folders and envelopes',
            'Technical prepress files with specialized finishing guides'
          ],
          timeline: '4 to 7 business days',
          idealFor: 'Executives, physicians, dentists, attorneys, architects, and corporate firms.',
          tech: ['Illustrator', 'InDesign', 'QR Code Generator', 'Print Pre-press'],
        },
      ],
    },
    creations: {
      badge: 'Selected Work',
      title: 'Emblematic',
      titleHighlight: 'Creations & Cases',
      subtitle: 'A glimpse into high-impact work delivered for regional and global market leaders.',
      viewAllCases: 'View all projects in the main portfolio',
      items: [
        {
          id: 'netshoes-run',
          title: 'Netshoes Run',
          client: 'Netshoes / Magalu',
          category: 'Event Identity & Landing Pages',
          description: 'Visual identity, promotional landing pages, and digital engagement assets for Latin America’s premier sporting e-commerce running circuit.',
          image: 'https://piaianet.page.gd/gifs/run.gif',
          deliverables: ['Visual Identity', 'Responsive Landing Page', 'Promotional Banners', 'Runner Kits'],
          tag: 'SPORTS CAMPAIGN',
        },
        {
          id: 'netshoes-copa',
          title: 'Netshoes World Cup',
          client: 'Netshoes / Magalu',
          category: 'Gamification & Digital Campaign',
          description: 'Interactive digital promotions, celebratory campaign interfaces, and thematic landing pages during the World Cup, breaking traffic and engagement records.',
          image: 'https://piaianet.page.gd/gifs/copa.gif',
          deliverables: ['Interactive UI', 'Gamified Promotions', 'Dynamic Banners', 'E-commerce Theme'],
          tag: 'HIGH CONVERSION',
        },
        {
          id: 'ifood-colombia',
          title: 'iFood Colombia',
          client: 'iFood International',
          category: 'Product Expansion & UX/UI',
          description: 'Localization and expansion of the iFood ecosystem for the Colombian market, including mobile flows, marketing communications, and Latin American assets.',
          image: 'https://piaianet.page.gd/imgs/ifood.jpg',
          deliverables: ['UX/UI Localization', 'Campaign Assets', 'Screen Design', 'Design System'],
          tag: 'LATAM EXPANSION',
        },
        {
          id: 'clinicorp-ds',
          title: 'Clinicorp Design System & AI',
          client: 'Clinicorp Healthtech',
          category: 'Design System & AI Integration',
          description: 'Design system architecture with OKLCH semantic tokens, shadcn/ui parity, and AI model context integration for clinical dental software.',
          image: 'https://picsum.photos/id/1/800/600',
          deliverables: ['W3C Design Tokens', 'shadcn/ui Component Library', 'Living Docs', 'AI Context Guidelines'],
          tag: 'HEALTHTECH & AI',
        },
        {
          id: 'superlogica',
          title: 'Superlógica Fintech & ERP',
          client: 'Superlógica',
          category: 'Financial Platforms & UX',
          description: 'UI and UX architecture for financial dashboards, condo management platforms, and recurring billing engines trusted by thousands of enterprises.',
          image: 'https://picsum.photos/id/180/800/600',
          deliverables: ['Financial Dashboards', 'Checkout Flows', 'Design System', 'User Research'],
          tag: 'FINTECH',
        },
        {
          id: 'zattini',
          title: 'Zattini Fashion E-commerce',
          client: 'Zattini / Netshoes',
          category: 'E-commerce & Fashion Editorials',
          description: 'Digital art direction, high-converting collection pages, and seasonal campaigns (Black Friday, Mother’s Day, Seasonal Fashion Releases).',
          image: 'https://piaianet.page.gd/gifs/lojas.gif',
          deliverables: ['Seasonal Landing Pages', 'Fashion Editorials', 'E-commerce UI', 'A/B Testing'],
          tag: 'E-COMMERCE',
        },
      ],
    },
    trustedBy: {
      badge: 'Brands & Partners',
      title: 'Brands That Have Trusted',
      titleHighlight: 'My Work',
      subtitle: 'A track record of high-impact collaboration with market leaders, unicorns, and universities.',
      partners: [
        { name: 'Netshoes', logo: 'https://piaianet.page.gd/imgs/netshoes.svg', category: 'E-commerce' },
        { name: 'Zattini', logo: 'https://piaianet.page.gd/imgs/zattini.svg', category: 'Fashion & E-commerce' },
        { name: 'iFood', logo: 'https://piaianet.page.gd/imgs/ifood.svg', category: 'Foodtech' },
        { name: 'Visa', logo: 'https://piaianet.page.gd/imgs/cielo.svg', category: 'Payments' },
        { name: 'Superlógica', logo: 'https://piaianet.page.gd/imgs/clientefc.svg', category: 'Fintech' },
        { name: 'Clinicorp', logo: 'https://piaianet.page.gd/imgs/unibr.svg', category: 'Healthtech' },
        { name: 'Cielo', logo: 'https://piaianet.page.gd/imgs/cielo.svg', category: 'Payments' },
        { name: 'Mercado Libre', logo: 'https://piaianet.page.gd/imgs/meli.svg', category: 'Marketplace' },
        { name: 'PUC Campinas', logo: 'https://piaianet.page.gd/imgs/puc.svg', category: 'Education' },
        { name: 'Athlético PR', logo: 'https://piaianet.page.gd/imgs/cap.svg', category: 'Sports' },
        { name: 'TDC', logo: 'https://piaianet.page.gd/imgs/tdc.svg', category: 'Tech Events' },
        { name: 'IxDA', logo: 'https://piaianet.page.gd/imgs/ixda.svg', category: 'Design Community' },
      ],
    },
    calculator: {
      badge: 'Scope Calculator',
      title: 'Build Your Custom',
      titleHighlight: 'Project Briefing',
      subtitle: 'Select the digital or graphic services you need to generate an instant briefing and connect with me directly.',
      step1Title: '1. Select desired services:',
      step2Title: '2. What is your timeline urgency?',
      step3Title: '3. Additional project details (optional):',
      timelineOptions: {
        urgent: { label: 'Urgent (Accelerated sprint)', desc: 'Top priority in production pipeline' },
        standard: { label: 'Standard (Regular roadmap)', desc: 'Ideal timeline with structured review milestones' },
        flexible: { label: 'Flexible / Planning ahead', desc: 'Planned launch over the coming weeks' },
      },
      summaryTitle: 'Your Scope Summary',
      summaryDesc: 'Click below to send your structured briefing directly via WhatsApp or Email:',
      selectedServices: 'Selected services:',
      emptySelection: 'No services selected yet. Click the cards above to build your scope.',
      urgencyLabel: 'Desired timeline:',
      whatsappButton: 'Send Briefing via WhatsApp 💬',
      emailButton: 'Send via Email ✉️',
      customNotePlaceholder: 'Tell me a bit about your company, target audience, or visual references...',
    },
    aiMetadata: {
      badge: 'Schema & AI Index',
      title: 'Metadata & Indexing',
      titleHighlight: 'For Search Engines & AIs',
      subtitle: 'Structured JSON-LD schema and optimized context for search engines and AI agents (ChatGPT, Gemini, Perplexity, Claude).',
      copyPromptLabel: 'Copy Markdown Profile for AIs',
      copiedSuccess: 'Profile copied to clipboard!',
      forHumansTitle: 'About Denis Piaia (AI Summary):',
      forAIsTitle: 'JSON-LD Structured Data (Schema.org):',
      aiPromptSummary: `### Denis Piaia - Product Designer, Frontend Engineer & AI Design Systems Specialist
- **Experience:** 15+ years delivering for market leaders (Netshoes, iFood, Clinicorp, Superlógica) and University Professor at PUC-Campinas.
- **Digital Services:** AI Design System Adaptation (W3C Tokens, AGENTS.md, shadcn/ui), High-performance Websites (React, Next.js, Tailwind), High-converting Landing Pages (CRO, micro-interactions), and Google Ads Paid Traffic.
- **Graphic Services:** Logo & Visual Identity Design, Brochures & Folders, Business Cards & Corporate Stationery.
- **Availability:** Bespoke projects, accelerated sprints, and strategic consulting worldwide.
- **Direct Contact:** dpiaia@gmail.com | WhatsApp: +55 (19) 98151-7551 | LinkedIn: linkedin.com/in/denispiaia`,
    },
    contact: {
      badge: "Let's Connect",
      title: 'Ready to Bring Your',
      titleHighlight: 'Vision to Life?',
      subtitle: 'Get in touch directly via WhatsApp or fill out the quick form to receive an immediate proposal.',
      whatsappTitle: 'Direct WhatsApp',
      whatsappDesc: '+55 (19) 98151-7551 • Fast response',
      emailTitle: 'Business Email',
      emailDesc: 'dpiaia@gmail.com',
      backHome: 'Back to Main Portfolio / Home',
      formTitle: 'Send a Quick Message',
      formName: 'Your Name or Company',
      formEmail: 'Your Email',
      formProject: 'What is your primary goal?',
      formMessage: 'Project Details / Briefing',
      formSubmit: 'Send Message',
      formSubmitting: 'Sending...',
      formSuccess: 'Message sent successfully! I will get back to you shortly.',
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      backToPortfolio: 'Volver al Portafolio',
      services: 'Servicios',
      cases: 'Trabajos',
      trustedBy: 'Clientes',
      calculator: 'Cotización',
      contact: 'Contacto',
      quoteCta: 'Hablemos',
    },
    hero: {
      availabilityBadge: 'Disponible para nuevos proyectos y sprints',
      greeting: 'Hola, soy Denis Piaia 👋',
      titleStart: 'Transformando ideas en productos digitales y marcas que',
      titleHighlight: 'generan resultados reales',
      titleEnd: 'con diseño, código e IA.',
      aboutSummary: 'Con más de 15 años liderando Diseño de Producto, Frontend y Design Systems en grandes empresas como Netshoes, iFood y Clinicorp, además de ser docente en la PUC-Campinas. Domino el ciclo completo: desde la estrategia visual hasta el código listo en producción.',
      deliveryPromise: 'Lo que puedo entregar para ti: Soluciones empaquetadas de extremo a extremo — desde la adecuación de tu Design System para Inteligencia Artificial hasta sitios ultra-rápidos, landing pages de alta conversión, identidad visual de autoridad y tráfico en Google Ads.',
      ctaPrimary: 'Ver Servicios & Productos',
      ctaSecondary: 'Armar Briefing Rápido',
      ctaWhatsApp: 'Contactar por WhatsApp',
    },
    credentials: {
      title: 'Destacados & Credenciales',
      items: [
        {
          number: '+15 Años',
          title: 'Experiencia de Mercado',
          subtitle: 'Liderando Diseño y Frontend en grandes empresas',
          icon: 'Rocket',
        },
        {
          number: 'PUC-Campinas',
          title: 'Profesor Universitario',
          subtitle: 'Formando nuevas generaciones en Diseño y Tecnología',
          icon: 'GraduationCap',
        },
        {
          number: 'Unicornios & Líderes',
          title: 'Grandes Ecosistemas',
          subtitle: 'Netshoes, iFood, Superlógica, Clinicorp, Visa',
          icon: 'Building2',
        },
        {
          number: 'Conferencista',
          title: 'TDC, IxDA y Eventos Tech',
          subtitle: 'Compartiendo Design Ops, UI/UX e IA aplicada',
          icon: 'Mic',
        },
        {
          number: 'AI-First',
          title: 'Design Ops con IA',
          subtitle: 'Flujos avanzados con Gemini, Claude y Cursor',
          icon: 'Bot',
        },
        {
          number: 'Full-Cycle',
          title: 'Del Diseño al Código',
          subtitle: 'Desde el Figma hasta la interfaz en React/Tailwind',
          icon: 'Code2',
        },
        {
          number: 'Alcance Global',
          title: 'Brasil y Latinoamérica',
          subtitle: 'Proyectos entregados con impacto internacional',
          icon: 'Globe',
        },
        {
          number: '100% Puntual',
          title: 'Compromiso con Plazos',
          subtitle: 'Comunicación transparente y entregas ágiles',
          icon: 'ShieldCheck',
        },
      ],
    },
    services: {
      badge: 'Soluciones a Medida',
      title: 'Lo Que Puedo',
      titleHighlight: 'Hacer Por Ti',
      subtitle: 'Servicios estructurados como productos: alcance claro, metodología ágil, alta calidad y plazos definidos.',
      digitalTitle: 'Digital & Ingeniería',
      digitalSubtitle: 'Soluciones modernas para escalar tu presencia digital y multiplicar conversiones.',
      graficoTitle: 'Diseño Gráfico & Marca',
      graficoSubtitle: 'Identidad y materiales impresos de acabado refinado para generar autoridad inmediata.',
      productBadge: 'PRODUCTO',
      cardCta: 'Solicitar este servicio',
      items: [
        // DIGITAL
        {
          id: 'ai-ds',
          category: 'digital',
          isFlagship: true,
          productType: 'DesignOps & IA',
          title: 'Adecuación de Design System para IA',
          tagline: 'Optimiza tu Design System para programar 5x más rápido con agentes de IA.',
          description: 'Estructuración profunda de Design Tokens (W3C), paridad 1:1 entre Figma e React/Tailwind, creación de reglas de contexto (AGENTS.md) para que Claude, Gemini, Cursor y Copilot escriban código sin alucinaciones.',
          deliverables: [
            'Mapeo completo y arquitectura de Tokens semánticos',
            'Archivo AGENTS.md y prompt guidelines para IAs',
            'Paridad atómica 1:1 entre Figma y componentes React',
            'Documentación viva y guía de buenas prácticas'
          ],
          timeline: '15 a 30 días hábiles',
          idealFor: 'Startups y empresas de tecnología que usan o quieren usar agentes de IA.',
          tech: ['Design Tokens', 'Figma Variables', 'Tailwind CSS', 'shadcn/ui', 'Claude/Gemini/Cursor'],
          highlightBadge: '⭐ DESTACADO',
        },
        {
          id: 'sites',
          category: 'digital',
          productType: 'Web Development',
          title: 'Creación de Sitios Web',
          tagline: 'Sitios institucionales y corporativos ultra-rápidos, responsivos y con SEO técnico.',
          description: 'Desarrollo de sitios web profesionales enfocados en contar la historia de tu marca, transmitir autoridad y captar clientes. Código limpio, carga instantánea y soporte móvil impecable.',
          deliverables: [
            'Arquitectura de información y wireframes estratégicos',
            'Diseño visual exclusivo en Figma con aprobaciones por etapas',
            'Desarrollo en React / Next.js / Tailwind CSS',
            'SEO técnico estructurado y puntuación 95+ en Google PageSpeed',
            'Integración con formularios, WhatsApp y Google Analytics'
          ],
          timeline: '10 a 20 días hábiles',
          idealFor: 'Empresas, consultoras, clínicas y profesionales que buscan presencia digital de alto nivel.',
          tech: ['React', 'Next.js', 'Tailwind CSS', 'SEO Técnico', 'Framer Motion'],
          highlightBadge: 'MÁS PEDIDO',
        },
        {
          id: 'landing-pages',
          category: 'digital',
          productType: 'Performance & CRO',
          title: 'Creación de Landing Pages',
          tagline: 'Páginas de alta conversión para productos, campañas y lanzamientos.',
          description: 'Landing pages diseñadas con técnicas de neuromarketing, copywriting persuasivo, jerarquía visual y micro-interacciones que maximizan las tasas de conversión.',
          deliverables: [
            'Estructura de copy y embudo de conversión optimizado',
            'Diseño responsivo a medida (Mobile First)',
            'Código ligero y de carga instantánea',
            'Configuración de píxeles y seguimiento de eventos',
            'Optimización de velocidad y preparado para pruebas A/B'
          ],
          timeline: '5 a 10 días hábiles',
          idealFor: 'Lanzamientos de productos, SaaS, servicios B2B y campañas de tráfico pago.',
          tech: ['Tailwind CSS', 'Framer Motion', 'Conversion Rate Optimization', 'Meta Pixel & GA4'],
        },
        {
          id: 'google-ads',
          category: 'digital',
          productType: 'Medios & Performance',
          title: 'Tráfico Pago Google ADS',
          tagline: 'Campañas estratégicas para posicionar tu empresa en el tope de búsquedas con alto ROI.',
          description: 'Creación, configuración y optimización continua de campañas en Google Ads (Búsqueda, Performance Max, Display y Remarketing) enfocadas en maximizar el retorno de inversión.',
          deliverables: [
            'Estudio exhaustivo de palabras clave y competencia',
            'Creación de anuncios con copies persuasivos y extensiones',
            'Configuración de conversiones en Google Tag Manager y GA4',
            'Filtrado de términos negativos y optimización de pujas',
            'Reporte mensual de rendimiento claro y accionable'
          ],
          timeline: 'Setup en 5 días + Gestión Continua',
          idealFor: 'Empresas que buscan clientes calificados diariamente a través de Google.',
          tech: ['Google Ads', 'Google Tag Manager', 'Google Analytics 4', 'Looker Studio'],
        },

        // GRÁFICO
        {
          id: 'logo-brand',
          category: 'grafico',
          productType: 'Branding & Identidad',
          title: 'Creación de Logo & Identidad Visual',
          tagline: 'Marcas memorables que transmiten valor y confianza inmediata.',
          description: 'Desarrollo integral de identidad visual: desde la investigación conceptual, diseño del isotipo y logotipo exclusivo, hasta la paleta cromática, tipografía y manual de marca.',
          deliverables: [
            'Símbolo y logotipo exclusivo vectorizado en alta resolución',
            'Variaciones de color (positivo, negativo, monocromático)',
            'Manual de Identidad Visual con normas de aplicación',
            'Archivos organizados para web e impresión (.AI, .EPS, .PDF, .SVG, .PNG)'
          ],
          timeline: '10 a 15 días hábiles',
          idealFor: 'Nuevos negocios, rebranding de empresas consolidadas y productos de alta gama.',
          tech: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Craft'],
          highlightBadge: 'EXCLUSIVO',
        },
        {
          id: 'folhetos-folders',
          category: 'grafico',
          productType: 'Diseño Editorial & Print',
          title: 'Folletos, Folders & Materiales Promocionales',
          tagline: 'Piezas gráficas impresas de alto impacto visual y diagramación impecable.',
          description: 'Diseño y diagramación de folders corporativos, volantes promocionales, catálogos y folletos comerciales con precisión técnica gráfica (CMYK, sangría, marcas de corte).',
          deliverables: [
            'Diseño personalizado frente y dorso (o múltiples pliegues)',
            'Tratamiento profesional de imágenes y tipografía editorial',
            'Archivos finales listos para imprenta de alta calidad (PDF/X-1a)',
            'Versión digital interactiva en PDF para WhatsApp y correo'
          ],
          timeline: '5 a 8 días hábiles',
          idealFor: 'Ferias, eventos, fuerzas de venta, clínicas, inmobiliarias y comercios.',
          tech: ['InDesign', 'Illustrator', 'Photoshop', 'PDF/X-1a Ready'],
        },
        {
          id: 'cartao-papelaria',
          category: 'grafico',
          productType: 'Papelería Corporativa',
          title: 'Tarjeta de Presentación & Papelería',
          tagline: 'Tarjetas ejecutivas con Código QR dinámico y papelería corporativa.',
          description: 'Diseño de tarjetas de presentación premium con acabados especiales (laca sectorizada, stamping) integradas con QR Code para guardar el contacto directamente en el celular, hojas membretadas y carpetas.',
          deliverables: [
            'Diseño de tarjeta moderna con Código QR dinámico',
            'Hoja membretada editable (Word / Docs) y PDF',
            'Carpetas corporativas y sobres institucionales',
            'Archivos técnicos con troqueles para imprenta'
          ],
          timeline: '4 a 7 días hábiles',
          idealFor: 'Ejecutivos, médicos, abogados, odontólogos, arquitectos y empresas.',
          tech: ['Illustrator', 'InDesign', 'QR Code Generator', 'Print Pre-press'],
        },
      ],
    },
    creations: {
      badge: 'Portafolio Seleccionado',
      title: 'Algunas',
      titleHighlight: 'Creaciones Emblemáticas',
      subtitle: 'Conoce un poco del trabajo entregado para marcas de impacto nacional e internacional.',
      viewAllCases: 'Ver todos los proyectos en el portafolio',
      items: [
        {
          id: 'netshoes-run',
          title: 'Netshoes Run',
          client: 'Netshoes / Magalu',
          category: 'Identidad de Evento & Landing Pages',
          description: 'Creación de la identidad visual, páginas promocionales y piezas de interacción para el circuito de carreras más grande del e-commerce deportivo en Latinoamérica.',
          image: 'https://piaianet.page.gd/gifs/run.gif',
          deliverables: ['Identidad Visual', 'Landing Page Responsiva', 'Banners Promocionales', 'Kits de Carrera'],
          tag: 'CAMPAÑA DEPORTIVA',
        },
        {
          id: 'netshoes-copa',
          title: 'Netshoes en el Mundial',
          client: 'Netshoes / Magalu',
          category: 'Gamificación & Campaña Digital',
          description: 'Acciones digitales interactivas, interfaces conmemorativas y landing pages temáticas durante la Copa del Mundo, alcanzando récords de tráfico.',
          image: 'https://piaianet.page.gd/gifs/copa.gif',
          deliverables: ['Interfaz Interactiva', 'Gamificación Promocional', 'Banners Dinámicos', 'E-commerce Theme'],
          tag: 'ALTA CONVERSIÓN',
        },
        {
          id: 'ifood-colombia',
          title: 'iFood Colombia',
          client: 'iFood Internacional',
          category: 'Expansión de Producto & UX/UI',
          description: 'Adaptación del ecosistema de iFood para el mercado colombiano, incluyendo flujos de la app, comunicación promocional e identidad visual.',
          image: 'https://piaianet.page.gd/imgs/ifood.jpg',
          deliverables: ['Localización UX/UI', 'Comunicación Promocional', 'Diseño de Pantallas', 'Design System'],
          tag: 'EXPANSIÓN LATAM',
        },
        {
          id: 'clinicorp-ds',
          title: 'Clinicorp Design System & AI',
          client: 'Clinicorp Healthtech',
          category: 'Design System & Integración IA',
          description: 'Desarrollo del sistema de diseño con tokens semánticos OKLCH, paridad atómica con shadcn/ui e integración con modelos de IA para software clínico.',
          image: 'https://picsum.photos/id/1/800/600',
          deliverables: ['Design Tokens W3C', 'Biblioteca shadcn/ui', 'Documentación Viva', 'AI Context Guidelines'],
          tag: 'HEALTHTECH & IA',
        },
        {
          id: 'superlogica',
          title: 'Superlógica Fintech & ERP',
          client: 'Superlógica',
          category: 'Plataformas Financieras & UX',
          description: 'Interfaz y arquitectura de dashboards financieros, gestión de condominios y flujos de cobro recurrente para miles de empresas.',
          image: 'https://picsum.photos/id/180/800/600',
          deliverables: ['Dashboards Financieros', 'Flujos de Checkout', 'Design System', 'User Research'],
          tag: 'FINTECH',
        },
        {
          id: 'zattini',
          title: 'Zattini Fashion E-commerce',
          client: 'Zattini / Netshoes',
          category: 'E-commerce & Editoriales de Moda',
          description: 'Direção de arte digital, landing pages de coleções e campanhas estacionais de rápida conversão.',
          image: 'https://piaianet.page.gd/gifs/lojas.gif',
          deliverables: ['Landing Pages Estacionales', 'Editoriales de Moda', 'UI de E-commerce', 'Pruebas A/B'],
          tag: 'E-COMMERCE',
        },
      ],
    },
    trustedBy: {
      badge: 'Marcas & Aliados',
      title: 'Marcas Que Han Confiado en',
      titleHighlight: 'Mi Trabajo',
      subtitle: 'Historial de colaboración con líderes de mercado, startups y universidades.',
      partners: [
        { name: 'Netshoes', logo: 'https://piaianet.page.gd/imgs/netshoes.svg', category: 'E-commerce' },
        { name: 'Zattini', logo: 'https://piaianet.page.gd/imgs/zattini.svg', category: 'Moda & E-commerce' },
        { name: 'iFood', logo: 'https://piaianet.page.gd/imgs/ifood.svg', category: 'Foodtech' },
        { name: 'Visa', logo: 'https://piaianet.page.gd/imgs/cielo.svg', category: 'Pagos' },
        { name: 'Superlógica', logo: 'https://piaianet.page.gd/imgs/clientefc.svg', category: 'Fintech' },
        { name: 'Clinicorp', logo: 'https://piaianet.page.gd/imgs/unibr.svg', category: 'Healthtech' },
        { name: 'Cielo', logo: 'https://piaianet.page.gd/imgs/cielo.svg', category: 'Medios de Pago' },
        { name: 'Mercado Libre', logo: 'https://piaianet.page.gd/imgs/meli.svg', category: 'Marketplace' },
        { name: 'PUC Campinas', logo: 'https://piaianet.page.gd/imgs/puc.svg', category: 'Educación' },
        { name: 'Athlético PR', logo: 'https://piaianet.page.gd/imgs/cap.svg', category: 'Deportes' },
        { name: 'TDC', logo: 'https://piaianet.page.gd/imgs/tdc.svg', category: 'Eventos Tech' },
        { name: 'IxDA', logo: 'https://piaianet.page.gd/imgs/ixda.svg', category: 'Comunidad Design' },
      ],
    },
    calculator: {
      badge: 'Calculadora de Alcance',
      title: 'Arma Tu',
      titleHighlight: 'Briefing Personalizado',
      subtitle: 'Selecciona los servicios digitales o gráficos de tu interés para generar un mensaje listo y hablar directamente conmigo.',
      step1Title: '1. Selecciona los servicios deseados:',
      step2Title: '2. ¿Cuál es la urgencia de tu plazo?',
      step3Title: '3. Detalles adicionales (opcional):',
      timelineOptions: {
        urgent: { label: 'Urgente (Sprint acelerada)', desc: 'Máxima prioridad en la línea de producción' },
        standard: { label: 'Estándar (Cronograma regular)', desc: 'Tiempo ideal con etapas estructuradas de aprobación' },
        flexible: { label: 'Flexible / Planificación', desc: 'Inicio planificado para las próximas semanas' },
      },
      summaryTitle: 'Resumen de Tu Solicitud',
      summaryDesc: 'Haz clic abajo para enviar tu briefing listo por WhatsApp o por Correo:',
      selectedServices: 'Servicios seleccionados:',
      emptySelection: 'Ningún servicio seleccionado todavía. Haz clic en las tarjetas de arriba para armar tu alcance.',
      urgencyLabel: 'Plazo deseado:',
      whatsappButton: 'Enviar Briefing por WhatsApp 💬',
      emailButton: 'Enviar por Correo ✉️',
      customNotePlaceholder: 'Cuéntame un poco sobre tu empresa, público objetivo o referencias visuales...',
    },
    aiMetadata: {
      badge: 'Schema & AI Index',
      title: 'Metadatos & Indexación',
      titleHighlight: 'Para Buscadores e IAs',
      subtitle: 'Estructura semántica JSON-LD y datos optimizados para motores de búsqueda y agentes de inteligencia artificial (ChatGPT, Gemini, Perplexity, Claude).',
      copyPromptLabel: 'Copiar Perfil en Markdown para IAs',
      copiedSuccess: '¡Perfil copiado al portapapeles!',
      forHumansTitle: 'Sobre Denis Piaia (Resumen para IAs):',
      forAIsTitle: 'JSON-LD Structured Data (Schema.org):',
      aiPromptSummary: `### Denis Piaia - Especialista en Diseño de Producto, Frontend y Design Systems con IA
- **Experiencia:** +15 años de trayectoria en grandes empresas (Netshoes, iFood, Clinicorp, Superlógica) y Profesor Universitario en la PUC-Campinas.
- **Servicios Digitales:** Adecuación de Design Systems para IA (W3C Tokens, AGENTS.md, shadcn/ui), Creación de Sitios Web (React, Next.js, Tailwind), Landing Pages de alta conversión (CRO, micro-interacciones) e Tráfico Pago Google Ads.
- **Servicios Gráficos:** Creación de Logos e Identidad Visual corporativa, Folletos y Folders promocionales, Tarjetas de Presentación y Papelería ejecutiva.
- **Disponibilidad:** Proyectos puntuales, sprints aceleradas e consultoría estratégica en Brasil y en el exterior.
- **Contacto Directo:** dpiaia@gmail.com | WhatsApp: +55 (19) 98151-7551 | LinkedIn: linkedin.com/in/denispiaia`,
    },
    contact: {
      badge: 'Hablemos',
      title: '¿Listo Para Llevar Tu',
      titleHighlight: 'Proyecto a Otro Nivel?',
      subtitle: 'Contáctame directamente por WhatsApp o completa el formulario para recibir una propuesta rápida.',
      whatsappTitle: 'WhatsApp Directo',
      whatsappDesc: '+55 (19) 98151-7551 • Respuesta rápida',
      emailTitle: 'Correo Comercial',
      emailDesc: 'dpiaia@gmail.com',
      backHome: 'Volver a la Página Principal / Portafolio',
      formTitle: 'Envía un Mensaje Rápido',
      formName: 'Tu Nombre o Empresa',
      formEmail: 'Tu Correo',
      formProject: '¿Cuál es tu objetivo?',
      formMessage: 'Mensaje o Briefing del Proyecto',
      formSubmit: 'Enviar Mensaje',
      formSubmitting: 'Enviando...',
      formSuccess: '¡Mensaje enviado con éxito! Me pondré en contacto pronto.',
      rights: 'Todos los derechos reservados.',
    },
  },
};
