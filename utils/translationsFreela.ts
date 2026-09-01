export interface FreelaTranslations {
  nav: {
    backToPortfolio: string;
    services: string;
    aiDesignSystem: string;
    calculator: string;
    process: string;
    differentials: string;
    faq: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    availabilityBadge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: {
      experience: { number: string; label: string };
      speed: { number: string; label: string };
      pedigree: { number: string; label: string };
      satisfaction: { number: string; label: string };
    };
  };
  flagship: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    whyItMatters: {
      title: string;
      desc: string;
    };
    pillars: {
      title: string;
      desc: string;
      icon: string;
    }[];
    comparison: {
      beforeTitle: string;
      beforeList: string[];
      afterTitle: string;
      afterList: string[];
    };
    cta: string;
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    allFilter: string;
    categories: {
      all: string;
      ds_ai: string;
      web: string;
      product: string;
      dev: string;
    };
    items: {
      id: string;
      category: 'ds_ai' | 'web' | 'product' | 'dev';
      isFlagship?: boolean;
      title: string;
      tagline: string;
      description: string;
      deliverables: string[];
      timeline: string;
      idealFor: string;
      tech: string[];
      highlightBadge?: string;
    }[];
    cardCta: string;
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
    estimatedDelivery: string;
    urgencyLabel: string;
    whatsappButton: string;
    emailButton: string;
    customNotePlaceholder: string;
  };
  process: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
      deliverable: string;
    }[];
  };
  differentials: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      tag: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    directTitle: string;
    directDesc: string;
    whatsappTitle: string;
    whatsappDesc: string;
    emailTitle: string;
    emailDesc: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formProject: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    backHome: string;
    rights: string;
  };
}

export const translationsFreela: Record<'pt' | 'en' | 'es', FreelaTranslations> = {
  pt: {
    nav: {
      backToPortfolio: '← Ver Trajetória & Portfólio',
      services: 'O que eu faço',
      aiDesignSystem: 'IA + Design System',
      calculator: 'Calculadora de Escopo',
      process: 'Como Funciona',
      differentials: 'Diferenciais',
      faq: 'Dúvidas',
      contact: 'Contato',
      getQuote: 'Solicitar Orçamento',
    },
    hero: {
      availabilityBadge: 'Disponível para novos projetos & sprints',
      titleStart: 'Design de Alto Impacto,',
      titleHighlight: 'Design Systems com IA',
      titleEnd: '& Frontend Moderno.',
      subtitle: 'Transformo requisitos complexos em produtos digitais de alta conversão. Da concepção de interfaces de elite ao código pronto para produção, potencializado por inteligência artificial.',
      ctaPrimary: 'Montar Escopo do Projeto',
      ctaSecondary: 'Conhecer Todos os Serviços',
      metrics: {
        experience: { number: '15+ Anos', label: 'de experiência em Tech & UX' },
        speed: { number: '3x Mais Rápido', label: 'com metodologia AI-First' },
        pedigree: { number: 'Líderes de Mercado', label: 'Netshoes, iFood, Meli, Clinicorp' },
        satisfaction: { number: '100% Código & Design', label: 'entrega ponta a ponta sem ruído' },
      },
    },
    flagship: {
      badge: '★ O Carro-Chefe',
      titleStart: 'Adequação de',
      titleHighlight: 'Design Systems para IA',
      titleEnd: 'e Engenharia Acelerada',
      description: 'Prepare o ecossistema visual e técnico da sua empresa para a era dos Agentes de IA (Claude, Gemini, Cursor, Copilot). Eu transformo tokens, componentes e documentações em especificações legíveis por máquina para geração de código com fidelidade pixel-perfect.',
      whyItMatters: {
        title: 'Por que sua empresa precisa disso agora?',
        desc: 'A maioria dos times tenta usar IA para gerar código de tela, mas obtém interfaces genéricas, desalinhadas e cheias de inconsistências visuais. Com uma arquitetura de Design System devidamente estruturada para IA, seus desenvolvedores geram interfaces perfeitas na primeira tentativa.',
      },
      pillars: [
        {
          title: 'Design Tokens em OKLCH & JSON',
          desc: 'Padronização de cores, espaçamentos, tipografia e raios exportáveis automaticamente para Tailwind CSS e frameworks modernos.',
          icon: 'Palette',
        },
        {
          title: 'Regras de Contexto para Agentes (AGENTS.md)',
          desc: 'Diretrizes semânticas e restrições de UX prontas para alimentar LLMs e ferramentas como Cursor, Claude e GitHub Copilot.',
          icon: 'Bot',
        },
        {
          title: 'Componentes Atômicos Código ↔ Figma',
          desc: 'Paridade absoluta 1:1 entre a biblioteca do Figma e os componentes em React/Tailwind, eliminando débito técnico.',
          icon: 'Layers',
        },
        {
          title: 'Multiplicação de Velocidade da Equipe',
          desc: 'Redução de até 70% no tempo de criação de novas telas e features completas por desenvolvedores e designers.',
          icon: 'Zap',
        },
      ],
      comparison: {
        beforeTitle: 'Sem Adequação para IA (Fluxo Tradicional)',
        beforeList: [
          'IA inventa cores e fontes fora do padrão da marca',
          'Códigos com CSS inline e classes desordenadas',
          'Refação constante de telas pelos designers e devs',
          'Perda de consistência entre diferentes squads',
        ],
        afterTitle: 'Com Design System IA-Ready (Meu Método)',
        afterList: [
          'IA consome tokens exatos e gera telas 100% dentro do guia',
          'Código limpo usando Tailwind e componentes oficiais da marca',
          'Geração de protótipos funcionais em minutos, não semanas',
          'Escalabilidade total e governança visual automática',
        ],
      },
      cta: 'Quero preparar meu Design System para IA',
    },
    services: {
      badge: 'Catálogo de Serviços',
      title: 'O que eu posso',
      titleHighlight: 'fazer por você',
      subtitle: 'Soluções sob medida para startups, scale-ups, agências e empresas consolidadas que buscam velocidade e sofisticação.',
      allFilter: 'Todos os Serviços',
      categories: {
        all: 'Todos',
        ds_ai: 'Design System & IA',
        web: 'Web & Landing Pages',
        product: 'Produto & UX/UI',
        dev: 'Frontend & Código',
      },
      items: [
        {
          id: 'ai-ds',
          category: 'ds_ai',
          isFlagship: true,
          highlightBadge: 'Mais Procurado',
          title: 'Adequação de Design System para IA',
          tagline: 'Otimização de tokens, componentes e contexto para desenvolvimento acelerado por LLMs.',
          description: 'Estruturação de design tokens semânticos, documentação em markdown para agentes de IA, paridade Figma-Código e criação de regras de desenvolvimento para Cursor/Copilot/Claude.',
          deliverables: [
            'Design Tokens padronizados (JSON, CSS, Tailwind)',
            'Prompt Engineering & Regras de Contexto (AGENTS.md)',
            'Componentes React/Tailwind alinhados ao Figma',
            'Workshop de aceleração com IA para o time',
          ],
          timeline: '1 a 3 semanas',
          idealFor: 'Startups e times de engenharia que querem usar IA para codificar telas sem perder a identidade visual.',
          tech: ['Figma Tokens', 'Tailwind CSS', 'Claude/Gemini AI', 'React', 'OKLCH'],
        },
        {
          id: 'landing-pages',
          category: 'web',
          highlightBadge: 'Alta Conversão',
          title: 'Landing Pages de Alta Conversão',
          tagline: 'Páginas que encantam visualmente e convertem visitantes em clientes.',
          description: 'Desenvolvimento completo de páginas de vendas, lançamentos de infoprodutos, campanhas sazonais e captura de leads com design premium e copywriting persuasivo.',
          deliverables: [
            'Design exclusivo e responsivo no Figma',
            'Desenvolvimento frontend ultra-rápido (Next.js/React/HTML)',
            'Animações sutis e micro-interações envolventes',
            'Integração com analytics, tags e formulários',
          ],
          timeline: '3 a 7 dias úteis',
          idealFor: 'Empresas lançando produtos, campanhas de tráfego pago ou precisando renovar a apresentação comercial.',
          tech: ['React / HTML5', 'Tailwind CSS', 'Framer Motion', 'SEO & Analytics'],
        },
        {
          id: 'institutional-sites',
          category: 'web',
          title: 'Sites Institucionais & Portais',
          tagline: 'Autoridade digital impecável para sua marca ou empresa.',
          description: 'Criação de websites corporativos modernos, focados em credibilidade, posicionamento de mercado e facilidade de navegação para múltiplos perfis de clientes.',
          deliverables: [
            'Arquitetura de informação e wireframing',
            'Design de todas as páginas institucionais',
            'Código leve, acessível e otimizado para SEO',
            'Painel administrativo ou CMS se necessário',
          ],
          timeline: '2 a 4 semanas',
          idealFor: 'Empresas, clínicas, escritórios e consultorias que buscam transmitir prestígio e inovação.',
          tech: ['React', 'TypeScript', 'Tailwind', 'Next.js / Vite', 'CMS Headless'],
        },
        {
          id: 'promotional-campaigns',
          category: 'web',
          title: 'Sites Promocionais & Especiais',
          tagline: 'Experiências interativas imersivas para grandes campanhas.',
          description: 'Páginas temáticas para lançamentos de grande porte, eventos esportivos, festivais e campanhas promocionais com alto volume de acessos e interatividade rica.',
          deliverables: [
            'Conceito visual temático de alto impacto',
            'Gamificação, contadores e elementos interativos',
            'Otimização extrema para tráfego simultâneo intenso',
            'Páginas especiais para marcas e parceiros',
          ],
          timeline: '1 a 2 semanas',
          idealFor: 'E-commerces, marcas esportivas, varejo e grandes eventos (ex: Netshoes Run, Copa do Mundo).',
          tech: ['JavaScript / Canvas', 'Micro-animações', 'Performance Máxima', 'Mobile First'],
        },
        {
          id: 'design-system-creation',
          category: 'ds_ai',
          title: 'Criação de Design System do Zero',
          tagline: 'A base visual e funcional definitiva para produtos digitais escaláveis.',
          description: 'Construção de ecossistemas de design robustos: paleta de cores, tipografia, grid, componentes atômicos (botões, inputs, modais) e documentação para devs e designers.',
          deliverables: [
            'Biblioteca completa de componentes no Figma',
            'Variáveis e tokens de tema (Dark / Light mode)',
            'Guia de estilo e boas práticas de uso',
            'Implementação inicial em componentes React',
          ],
          timeline: '3 a 6 semanas',
          idealFor: 'Empresas de SaaS e produtos em crescimento que sofrem com retrabalho e inconsistência visual.',
          tech: ['Figma Pro', 'Storybook', 'Radix / shadcn', 'Tailwind CSS'],
        },
        {
          id: 'ux-ui-product',
          category: 'product',
          title: 'UX/UI Design para Aplicativos & SaaS',
          tagline: 'Experiências intuitivas para softwares complexos, dashboards e mobile apps.',
          description: 'Design de interfaces com foco no usuário final: mapeamento de jornadas, arquitetura de fluxos, testes de usabilidade e telas prontas para implementação pelos engenheiros.',
          deliverables: [
            'Mapeamento de jornadas de usuário e fluxogramas',
            'Protótipos navegáveis interativos de alta fidelidade',
            'Telas de onboarding, dashboards e operações críticas',
            'Hand-off detalhado com especificações para devs',
          ],
          timeline: '2 a 5 semanas',
          idealFor: 'Founders e Product Managers construindo MVPs, novas funcionalidades ou redesenhando plataformas existentes.',
          tech: ['Figma', 'UX Research', 'Design Ops', 'User Testing'],
        },
        {
          id: 'frontend-dev',
          category: 'dev',
          title: 'Desenvolvimento Frontend Especializado',
          tagline: 'Código limpo, moderno e fiel 100% ao design aprovado.',
          description: 'Codificação de interfaces em React, Tailwind CSS e TypeScript com foco em performance, acessibilidade, animações suaves e arquitetura modular.',
          deliverables: [
            'Repositório limpo e organizado em TypeScript',
            'Layout 100% responsivo para todos os dispositivos',
            'Animações profissionais com Framer Motion',
            'Integração com APIs RESTful ou GraphQL',
          ],
          timeline: '1 a 3 semanas por sprint',
          idealFor: 'Equipes que precisam de reforço técnico sênior para entregar interfaces desafiadoras no prazo.',
          tech: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
        },
        {
          id: 'design-consulting',
          category: 'product',
          title: 'Consultoria & Sprints de Design Ops',
          tagline: 'Diagnóstico e destravamento de processos de design e produto.',
          description: 'Mentoria técnica, auditoria de usabilidade (heurística), otimização de handoff entre design e desenvolvimento e estruturação de squads ágeis com IA.',
          deliverables: [
            'Relatório diagnóstico de gargalos e oportunidades',
            'Plano de ação prioritário para produto e design',
            'Sessões de alinhamento estratégico com liderança técnica',
            'Templates e automações de fluxo de trabalho',
          ],
          timeline: 'Por Sprint ou Pacote de Horas',
          idealFor: 'Lideranças que querem elevar a maturidade de design e a velocidade de entrega do time.',
          tech: ['Design Ops', 'Agile Methodology', 'Team Mentorship', 'UX Audit'],
        },
      ],
      cardCta: 'Solicitar Proposta deste Serviço',
    },
    calculator: {
      badge: 'Orçamento Interativo',
      title: 'Monte o Escopo do',
      titleHighlight: 'seu Projeto',
      subtitle: 'Selecione os serviços que você precisa para gerar um briefing instantâneo e receber uma proposta personalizada.',
      step1Title: '1. Quais serviços você precisa?',
      step2Title: '2. Qual é a urgência da entrega?',
      step3Title: '3. Detalhes adicionais (opcional):',
      timelineOptions: {
        urgent: { label: 'Urgente / Sprint Relâmpago', desc: 'Prioridade máxima, entrega no menor prazo possível' },
        standard: { label: 'Prazo Padrão', desc: 'Cronograma equilibrado com revisões planejadas' },
        flexible: { label: 'Flexível / Longo Prazo', desc: 'Projetos contínuos, consultoria ou backlog futuro' },
      },
      summaryTitle: 'Resumo do Briefing',
      summaryDesc: 'Com base nas suas seleções, preparamos uma mensagem direta para você falar comigo no WhatsApp ou por e-mail:',
      selectedServices: 'Serviços selecionados:',
      emptySelection: 'Nenhum serviço selecionado ainda. Clique nas opções acima para começar.',
      estimatedDelivery: 'Estimativa de início:',
      urgencyLabel: 'Prazo escolhido:',
      whatsappButton: 'Conversar no WhatsApp com este Escopo',
      emailButton: 'Enviar Briefing por E-mail',
      customNotePlaceholder: 'Conte brevemente sobre sua empresa, objetivo ou link de referência...',
    },
    process: {
      badge: 'Metodologia Ágil',
      title: 'Como funciona',
      titleHighlight: 'o processo de trabalho',
      subtitle: 'Sem burocracia, com comunicação clara e entregas contínuas em cada etapa.',
      steps: [
        {
          number: '01',
          title: 'Alinhamento & Briefing',
          desc: 'Reunião rápida ou troca de mensagens para entender objetivos, público, referências e prazos.',
          deliverable: 'Escopo fechado, cronograma e contrato claro.',
        },
        {
          number: '02',
          title: 'Prototipagem & Validação',
          desc: 'Criação dos layouts no Figma ou protótipos interativos com revisões ágeis.',
          deliverable: 'Design visual aprovado e pronto para produção.',
        },
        {
          number: '03',
          title: 'Desenvolvimento & IA Flow',
          desc: 'Codificação limpa com React/Tailwind ou estruturação do Design System para agentes de IA.',
          deliverable: 'Código funcional, responsivo e testado.',
        },
        {
          number: '04',
          title: 'Entrega & Suporte',
          desc: 'Publicação em produção, handoff de arquivos, documentação e garantia pós-entrega.',
          deliverable: 'Projeto no ar com suporte e documentação.',
        },
      ],
    },
    differentials: {
      badge: 'Por que me contratar?',
      title: 'Diferenciais que geram',
      titleHighlight: 'resultados reais',
      subtitle: 'Mais de uma década entregando soluções digitais para os maiores players de tecnologia do país.',
      items: [
        {
          title: 'Design + Código na Mesma Pessoa',
          desc: 'Você não precisa gerenciar um designer que não entende de código ou um dev que não liga para tipografia. Eu domino as duas pontas com maestria.',
          tag: 'Full-Cycle Delivery',
        },
        {
          title: 'Vanguarda em Inteligência Artificial',
          desc: 'Utilizo IA como acelerador e sou especialista em preparar design systems para serem consumidos por LLMs, multiplicando a velocidade de entrega.',
          tag: 'AI-First Native',
        },
        {
          title: 'Bagagem de Líderes de Mercado',
          desc: 'Trabalhei em operações complexas como Mercado Livre, iFood, Netshoes e Clinicorp. Trago práticas de grandes empresas para o seu projeto.',
          tag: 'Enterprise Pedigree',
        },
        {
          title: 'Comunicação Direta & Sem Burocracia',
          desc: 'Sem intermediários, sem gerentes de conta. Você fala diretamente com quem está desenhando e codificando a sua solução.',
          tag: 'Agilidade Total',
        },
      ],
    },
    faq: {
      badge: 'Perguntas Frequentes',
      title: 'Tire suas',
      titleHighlight: 'dúvidas sobre o freela',
      subtitle: 'Tudo o que você precisa saber antes de iniciarmos nossa parceria.',
      items: [
        {
          question: 'Como funciona a forma de pagamento?',
          answer: 'Geralmente trabalhamos com 50% de entrada no início do projeto e 50% na aprovação/entrega final. Para projetos maiores ou consultorias recorrentes, podemos estruturar pagamentos por sprint semanal/quinzenal ou marcos (milestones). Emitimos nota fiscal para empresas.',
        },
        {
          question: 'O que exatamente é a "Adequação de Design System para IA"?',
          answer: 'É o processo de organizar os tokens visuais, componentes e documentação do seu produto de uma forma semântica e estruturada para que ferramentas de IA (como Cursor, Claude, Copilot e Gemini) consigam gerar novas telas em código seguindo 100% a identidade da sua marca, sem erros visuais.',
        },
        {
          question: 'Você assina termo de confidencialidade (NDA)?',
          answer: 'Sim, com certeza. A confidencialidade das informações da sua empresa, código e estratégia de produto é garantida por contrato sempre que necessário.',
        },
        {
          question: 'Você entrega apenas o design ou também o código pronto?',
          answer: 'Ambos! Você pode me contratar apenas para a etapa de UI/UX Design no Figma, apenas para o desenvolvimento Frontend em React/Tailwind, ou para o pacote completo ponta a ponta (Design + Código).',
        },
        {
          question: 'Qual é o prazo médio de uma Landing Page ou Site?',
          answer: 'Uma Landing Page típica leva entre 3 e 7 dias úteis do briefing ao código final no ar. Sites institucionais maiores ou Design Systems levam entre 2 e 4 semanas dependendo da quantidade de páginas e regras.',
        },
        {
          question: 'Como faço para receber um orçamento rápido?',
          answer: 'Você pode usar a calculadora interativa nesta página para montar seu escopo e me enviar direto no WhatsApp, ou mandar uma mensagem pelo formulário de contato abaixo.',
        },
      ],
    },
    contact: {
      badge: 'Iniciar Projeto',
      title: 'Pronto para elevar o nível do',
      titleHighlight: 'seu produto digital?',
      titleEnd: '',
      subtitle: 'Me conte sobre seu desafio e vamos transformar sua visão em realidade com velocidade e sofisticação.',
      directTitle: 'Canais Diretos de Contato',
      directDesc: 'Atendimento rápido e direto com Denis Piaia.',
      whatsappTitle: 'WhatsApp Direto',
      whatsappDesc: 'Resposta rápida em horário comercial',
      emailTitle: 'E-mail Profissional',
      emailDesc: 'dpiaia@gmail.com',
      formTitle: 'Envie uma mensagem rápida',
      formName: 'Seu Nome ou Empresa',
      formEmail: 'Seu E-mail de Contato',
      formProject: 'Tipo de Projeto / Serviço',
      formMessage: 'Descreva seu projeto ou objetivo...',
      formSubmit: 'Enviar Mensagem & Solicitar Proposta',
      formSubmitting: 'Enviando...',
      formSuccess: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      backHome: 'Voltar ao Portfólio Principal',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      backToPortfolio: '← View Career & Portfolio',
      services: 'What I Do',
      aiDesignSystem: 'AI + Design System',
      calculator: 'Scope Calculator',
      process: 'How It Works',
      differentials: 'Why Me',
      faq: 'FAQ',
      contact: 'Contact',
      getQuote: 'Request a Quote',
    },
    hero: {
      availabilityBadge: 'Available for new projects & sprints',
      titleStart: 'High-Impact Design,',
      titleHighlight: 'AI-Ready Design Systems',
      titleEnd: '& Modern Frontend.',
      subtitle: 'I turn complex requirements into high-converting digital products. From elite UI/UX design to production-ready code, supercharged with Artificial Intelligence.',
      ctaPrimary: 'Build Project Scope',
      ctaSecondary: 'Explore All Services',
      metrics: {
        experience: { number: '15+ Years', label: 'in Tech & Product Design' },
        speed: { number: '3x Faster', label: 'with AI-First workflows' },
        pedigree: { number: 'Market Leaders', label: 'Netshoes, iFood, Meli, Clinicorp' },
        satisfaction: { number: '100% Design & Code', label: 'end-to-end seamless delivery' },
      },
    },
    flagship: {
      badge: '★ The Flagship Offering',
      titleStart: 'Adapting',
      titleHighlight: 'Design Systems for AI',
      titleEnd: '& Accelerated Engineering',
      description: 'Prepare your company visual and technical ecosystem for the era of AI Agents (Claude, Gemini, Cursor, Copilot). I transform tokens, components, and documentation into machine-readable specs for pixel-perfect code generation.',
      whyItMatters: {
        title: 'Why your team needs this right now?',
        desc: 'Most teams try using AI to generate frontend code, only to get generic layouts with broken styles and design drift. With an AI-Ready Design System, your developers generate production-grade UI on the very first prompt.',
      },
      pillars: [
        {
          title: 'Design Tokens in OKLCH & JSON',
          desc: 'Standardized colors, spacing, typography, and corner radii automatically exported to Tailwind CSS and modern frameworks.',
          icon: 'Palette',
        },
        {
          title: 'Agent Context Rules (AGENTS.md)',
          desc: 'Semantic constraints and prompt guidelines ready to feed LLMs in tools like Cursor, Claude, and GitHub Copilot.',
          icon: 'Bot',
        },
        {
          title: 'Atomic Components Code ↔ Figma',
          desc: '1:1 parity between Figma UI kits and React/Tailwind components, completely eliminating visual debt.',
          icon: 'Layers',
        },
        {
          title: 'Team Velocity Multiplication',
          desc: 'Up to 70% reduction in time needed to ship new features and screens by developers and designers.',
          icon: 'Zap',
        },
      ],
      comparison: {
        beforeTitle: 'Without AI Optimization (Standard DS)',
        beforeList: [
          'AI invents arbitrary colors and non-compliant fonts',
          'Code generated with inline styles and messy classes',
          'Endless manual touchups by designers and devs',
          'Visual drift and inconsistency across squads',
        ],
        afterTitle: 'With AI-Ready Design System (My Approach)',
        afterList: [
          'AI reads exact tokens and outputs 100% compliant UI',
          'Clean, maintainable code using official brand components',
          'Functional prototypes delivered in minutes, not weeks',
          'Automated design governance and infinite scalability',
        ],
      },
      cta: 'Get my Design System AI-Ready',
    },
    services: {
      badge: 'Services Catalog',
      title: 'What I can',
      titleHighlight: 'do for you',
      subtitle: 'Tailored solutions for startups, scale-ups, agencies, and enterprise brands demanding velocity and craft.',
      allFilter: 'All Services',
      categories: {
        all: 'All',
        ds_ai: 'Design System & AI',
        web: 'Web & Landing Pages',
        product: 'Product & UX/UI',
        dev: 'Frontend & Code',
      },
      items: [
        {
          id: 'ai-ds',
          category: 'ds_ai',
          isFlagship: true,
          highlightBadge: 'Most Requested',
          title: 'AI Design System Adaptation',
          tagline: 'Optimizing tokens, components, and context for LLM-accelerated development.',
          description: 'Structuring semantic design tokens, markdown documentation for AI agents, Figma-to-code parity, and development rule sets for Cursor/Copilot/Claude.',
          deliverables: [
            'Standardized Design Tokens (JSON, CSS, Tailwind)',
            'Prompt Engineering & Context Rules (AGENTS.md)',
            'React/Tailwind components synced with Figma',
            'Team AI acceleration workshop & documentation',
          ],
          timeline: '1 to 3 weeks',
          idealFor: 'Startups and engineering teams wanting to code with AI without breaking brand guidelines.',
          tech: ['Figma Tokens', 'Tailwind CSS', 'Claude/Gemini AI', 'React', 'OKLCH'],
        },
        {
          id: 'landing-pages',
          category: 'web',
          highlightBadge: 'High Conversion',
          title: 'High-Converting Landing Pages',
          tagline: 'Pages that captivate visually and convert visitors into customers.',
          description: 'Full-cycle creation of sales pages, product launches, seasonal campaigns, and lead capture with premium visual design and persuasive UX.',
          deliverables: [
            'Custom, responsive Figma design',
            'Lightning-fast frontend development (Next.js/React/HTML)',
            'Smooth animations and micro-interactions',
            'Analytics, conversion tags, and form integrations',
          ],
          timeline: '3 to 7 business days',
          idealFor: 'Companies launching products, paid traffic campaigns, or refreshing their commercial presence.',
          tech: ['React / HTML5', 'Tailwind CSS', 'Framer Motion', 'SEO & Analytics'],
        },
        {
          id: 'institutional-sites',
          category: 'web',
          title: 'Corporate Websites & Portals',
          tagline: 'Flawless digital authority for your brand or company.',
          description: 'Modern corporate websites built for high credibility, market positioning, and frictionless navigation across customer segments.',
          deliverables: [
            'Information architecture and wireframing',
            'Full visual design for all institutional pages',
            'Lightweight, accessible, SEO-optimized code',
            'Admin dashboard or Headless CMS integration',
          ],
          timeline: '2 to 4 weeks',
          idealFor: 'Enterprises, clinics, firms, and consultancies looking to convey prestige and modern innovation.',
          tech: ['React', 'TypeScript', 'Tailwind', 'Next.js / Vite', 'Headless CMS'],
        },
        {
          id: 'promotional-campaigns',
          category: 'web',
          title: 'Promotional & Special Event Sites',
          tagline: 'Immersive interactive web experiences for landmark campaigns.',
          description: 'Themed landing hubs for major product rollouts, sporting events, festivals, and high-traffic promotional pushes.',
          deliverables: [
            'High-impact thematic visual concept',
            'Gamification, countdowns, and dynamic interactions',
            'Extreme performance tuning for traffic spikes',
            'Co-branded landing pages for partners',
          ],
          timeline: '1 to 2 weeks',
          idealFor: 'E-commerce, sports brands, retail, and major events (e.g., Netshoes Run, World Cup).',
          tech: ['JavaScript / Canvas', 'Micro-animations', 'Peak Performance', 'Mobile First'],
        },
        {
          id: 'design-system-creation',
          category: 'ds_ai',
          title: 'Design System Creation from Scratch',
          tagline: 'The foundational visual and functional source of truth for scalable digital products.',
          description: 'Robust design systems: color palettes, typography, grid, atomic components (buttons, inputs, modals), and comprehensive dev/design guides.',
          deliverables: [
            'Complete Figma component library',
            'Theming tokens (Dark / Light mode support)',
            'Style guide and usage best practices',
            'Initial React component library implementation',
          ],
          timeline: '3 to 6 weeks',
          idealFor: 'SaaS companies and growing products suffering from visual inconsistency and dev rework.',
          tech: ['Figma Pro', 'Storybook', 'Radix / shadcn', 'Tailwind CSS'],
        },
        {
          id: 'ux-ui-product',
          category: 'product',
          title: 'UX/UI Design for Apps & SaaS',
          tagline: 'Intuitive user experiences for complex software, dashboards, and mobile apps.',
          description: 'User-centered interface design: journey mapping, workflow architecture, usability validation, and developer-ready handoff.',
          deliverables: [
            'User journey maps and user flows',
            'Interactive high-fidelity clickable prototypes',
            'Onboarding flows, dashboards, and core screens',
            'Detailed developer handoff with tokens & specs',
          ],
          timeline: '2 to 5 weeks',
          idealFor: 'Founders and Product Managers building MVPs, new feature modules, or revamping existing platforms.',
          tech: ['Figma', 'UX Research', 'Design Ops', 'User Testing'],
        },
        {
          id: 'frontend-dev',
          category: 'dev',
          title: 'Specialized Frontend Engineering',
          tagline: 'Clean, modern code with 100% fidelity to approved designs.',
          description: 'React, Tailwind CSS, and TypeScript development focused on performance, accessibility, butter-smooth animations, and modular architecture.',
          deliverables: [
            'Clean, modular TypeScript repository',
            '100% responsive across all screen sizes',
            'Professional Framer Motion animations',
            'Seamless RESTful or GraphQL API integrations',
          ],
          timeline: '1 to 3 weeks per sprint',
          idealFor: 'Engineering teams needing senior reinforcement to deliver challenging interfaces on schedule.',
          tech: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
        },
        {
          id: 'design-consulting',
          category: 'product',
          title: 'Design Ops Consulting & Sprints',
          tagline: 'Diagnosing and unblocking product design workflows.',
          description: 'Technical mentorship, heuristic usability audits, design-to-code handoff streamlining, and agile squad acceleration using AI tooling.',
          deliverables: [
            'Bottleneck diagnostic and opportunity report',
            'Prioritized product & design action plan',
            'Strategic alignment sessions with tech leadership',
            'Workflow templates and automation scripts',
          ],
          timeline: 'Per Sprint or Hourly Retainer',
          idealFor: 'Leaders wanting to boost design maturity and team shipping speed.',
          tech: ['Design Ops', 'Agile Methodology', 'Team Mentorship', 'UX Audit'],
        },
      ],
      cardCta: 'Request a Quote for this Service',
    },
    calculator: {
      badge: 'Interactive Estimator',
      title: 'Build your',
      titleHighlight: 'Project Scope',
      subtitle: 'Select the services you need to generate an instant briefing and receive a customized commercial proposal.',
      step1Title: '1. What services do you need?',
      step2Title: '2. What is your desired timeline?',
      step3Title: '3. Additional details (optional):',
      timelineOptions: {
        urgent: { label: 'Urgent / Flash Sprint', desc: 'Highest priority, delivered in the shortest timeframe possible' },
        standard: { label: 'Standard Timeline', desc: 'Balanced schedule with structured review milestones' },
        flexible: { label: 'Flexible / Long Term', desc: 'Continuous sprints, consulting, or future backlog' },
      },
      summaryTitle: 'Briefing Summary',
      summaryDesc: 'Based on your selections, we formatted a direct message ready for WhatsApp or Email:',
      selectedServices: 'Selected services:',
      emptySelection: 'No services selected yet. Click on the options above to get started.',
      estimatedDelivery: 'Estimated kickoff:',
      urgencyLabel: 'Selected timeline:',
      whatsappButton: 'Chat on WhatsApp with this Scope',
      emailButton: 'Send Briefing via Email',
      customNotePlaceholder: 'Briefly tell me about your company, goals, or reference links...',
    },
    process: {
      badge: 'Agile Methodology',
      title: 'How the',
      titleHighlight: 'workflow works',
      subtitle: 'Zero bureaucracy, crystal-clear communication, and continuous deliveries at every milestone.',
      steps: [
        {
          number: '01',
          title: 'Briefing & Discovery',
          desc: 'A quick sync or message exchange to grasp goals, target audience, benchmarks, and timelines.',
          deliverable: 'Clear scope, transparent schedule, and contract.',
        },
        {
          number: '02',
          title: 'Prototyping & Validation',
          desc: 'High-fidelity Figma layouts or interactive prototypes with rapid iteration loops.',
          deliverable: 'Approved visual design ready for development.',
        },
        {
          number: '03',
          title: 'Development & AI Flow',
          desc: 'Clean code in React/Tailwind or structured Design System rules for AI agents.',
          deliverable: 'Tested, responsive, high-performance code.',
        },
        {
          number: '04',
          title: 'Launch & Support',
          desc: 'Production deployment, asset handoff, documentation, and post-delivery warranty.',
          deliverable: 'Live project backed by full documentation.',
        },
      ],
    },
    differentials: {
      badge: 'Why Hire Denis?',
      title: 'Commercial advantages that',
      titleHighlight: 'drive real outcomes',
      subtitle: 'Over 15 years delivering high-stakes digital solutions for top-tier tech brands.',
      items: [
        {
          title: 'Design + Code in One Person',
          desc: 'You won’t need to mediate between a designer who does not code and a developer who overlooks typography. I master both ends seamlessly.',
          tag: 'Full-Cycle Delivery',
        },
        {
          title: 'Pioneer in Generative AI for Design',
          desc: 'I leverage AI as a speed multiplier and specialize in structuring design systems for LLM consumption, multiplying engineering velocity.',
          tag: 'AI-First Native',
        },
        {
          title: 'Enterprise Pedigree',
          desc: 'Proven track record at high-scale operations like Mercado Libre, iFood, Netshoes, and Clinicorp. I bring enterprise-grade craft to your project.',
          tag: 'Enterprise Pedigree',
        },
        {
          title: 'Direct, Frictionless Communication',
          desc: 'No middlemen or junior account managers. You speak directly with the senior specialist designing and coding your product.',
          tag: 'Direct Agility',
        },
      ],
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Answers to your',
      titleHighlight: 'freelance questions',
      subtitle: 'Everything you need to know before we kick off our collaboration.',
      items: [
        {
          question: 'How do payments work?',
          answer: 'Typically, we structure projects with 50% upfront to reserve the sprint and 50% upon final delivery/approval. For ongoing consulting, we work with weekly/biweekly sprints or project milestones. Invoices provided.',
        },
        {
          question: 'What exactly is "AI Design System Adaptation"?',
          answer: 'It is the specialized process of restructuring your product tokens, UI components, and documentation in a machine-readable format so AI tools (like Cursor, Claude, Copilot, and Gemini) can generate new screen code that adheres 100% to your brand guidelines without visual drift.',
        },
        {
          question: 'Do you sign Non-Disclosure Agreements (NDAs)?',
          answer: 'Yes, absolutely. The confidentiality of your company data, codebase, and strategic plans is safeguarded by contract.',
        },
        {
          question: 'Do you deliver only design or also production-ready code?',
          answer: 'Both! You can hire me purely for UI/UX Design in Figma, strictly for Frontend development in React/Tailwind, or for the full end-to-end package (Design + Code).',
        },
        {
          question: 'What is the average turnaround time for a Landing Page or Website?',
          answer: 'A standard high-converting Landing Page takes between 3 and 7 business days from briefing to live production code. Full corporate websites or Design Systems typically take 2 to 4 weeks depending on scope.',
        },
        {
          question: 'How can I get a fast quote?',
          answer: 'You can use the interactive scope calculator on this page to build your briefing and send it straight to WhatsApp, or submit a message through the contact form below.',
        },
      ],
    },
    contact: {
      badge: 'Start Project',
      title: 'Ready to elevate your',
      titleHighlight: 'digital product?',
      titleEnd: '',
      subtitle: 'Tell me about your project and let us turn your vision into reality with speed and aesthetic precision.',
      directTitle: 'Direct Contact Channels',
      directDesc: 'Fast and direct communication with Denis Piaia.',
      whatsappTitle: 'Direct WhatsApp',
      whatsappDesc: 'Quick response during business hours',
      emailTitle: 'Professional Email',
      emailDesc: 'dpiaia@gmail.com',
      formTitle: 'Send a quick message',
      formName: 'Your Name or Company',
      formEmail: 'Your Contact Email',
      formProject: 'Project Type / Desired Service',
      formMessage: 'Describe your project or goals...',
      formSubmit: 'Send Message & Get Quote',
      formSubmitting: 'Sending...',
      formSuccess: 'Message sent successfully! I will reach out to you shortly.',
      backHome: 'Back to Main Portfolio',
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      backToPortfolio: '← Ver Trayectoria y Portafolio',
      services: 'Qué puedo hacer',
      aiDesignSystem: 'IA + Design System',
      calculator: 'Calculadora de Alcance',
      process: 'Cómo Funciona',
      differentials: 'Diferenciales',
      faq: 'Preguntas',
      contact: 'Contacto',
      getQuote: 'Solicitar Cotización',
    },
    hero: {
      availabilityBadge: 'Disponible para nuevos proyectos y sprints',
      titleStart: 'Diseño de Alto Impacto,',
      titleHighlight: 'Design Systems con IA',
      titleEnd: 'y Frontend Moderno.',
      subtitle: 'Transformo requisitos complejos en productos digitales de alta conversión. Desde la concepción de interfaces de élite hasta el código listo para producción, potenciado por Inteligencia Artificial.',
      ctaPrimary: 'Armar Alcance del Proyecto',
      ctaSecondary: 'Ver Todos los Servicios',
      metrics: {
        experience: { number: '15+ Años', label: 'de experiencia en Tech & UX' },
        speed: { number: '3x Más Rápido', label: 'con flujo AI-First' },
        pedigree: { number: 'Líderes de Mercado', label: 'Netshoes, iFood, Meli, Clinicorp' },
        satisfaction: { number: '100% Diseño y Código', label: 'entrega integral sin fricción' },
      },
    },
    flagship: {
      badge: '★ El Servicio Estrella',
      titleStart: 'Adecuación de',
      titleHighlight: 'Design Systems para IA',
      titleEnd: 'e Ingeniería Acelerada',
      description: 'Prepare el ecosistema visual y técnico de su empresa para la era de los Agentes de IA (Claude, Gemini, Cursor, Copilot). Transformo tokens, componentes y documentación en especificaciones legibles por máquina para generar código pixel-perfect.',
      whyItMatters: {
        title: '¿Por qué su empresa necesita esto ahora?',
        desc: 'La mayoría de los equipos intenta usar IA para generar código de interfaz, pero obtiene pantallas genéricas y desalineadas. Con un Design System optimizado para IA, sus desarrolladores generan interfaces perfectas en el primer intento.',
      },
      pillars: [
        {
          title: 'Design Tokens en OKLCH y JSON',
          desc: 'Estandarización de colores, espacios, tipografía y radios exportables a Tailwind CSS y frameworks modernos.',
          icon: 'Palette',
        },
        {
          title: 'Reglas de Contexto para Agentes (AGENTS.md)',
          desc: 'Directrices semánticas y restricciones de UX listas para alimentar LLMs en Cursor, Claude y GitHub Copilot.',
          icon: 'Bot',
        },
        {
          title: 'Componentes Atómicos Código ↔ Figma',
          desc: 'Paridad 1:1 absoluta entre las librerías de Figma y los componentes en React/Tailwind, eliminando la deuda técnica.',
          icon: 'Layers',
        },
        {
          title: 'Multiplicación de la Velocidad del Equipo',
          desc: 'Reducción de hasta un 70% en el tiempo de creación de nuevas pantallas y funcionalidades por diseñadores y devs.',
          icon: 'Zap',
        },
      ],
      comparison: {
        beforeTitle: 'Sin Optimización para IA (DS Tradicional)',
        beforeList: [
          'La IA inventa colores y fuentes fuera de la guía de marca',
          'Código desordenado con estilos inline y clases arbitrarias',
          'Ajustes manuales constantes por parte de diseñadores y devs',
          'Pérdida de consistencia visual entre squads',
        ],
        afterTitle: 'Con Design System IA-Ready (Mi Enfoque)',
        afterList: [
          'La IA lee tokens exactos y genera interfaces 100% fieles a la marca',
          'Código limpio usando Tailwind y componentes oficiales',
          'Prototipos funcionales en minutos, no semanas',
          'Gobernanza visual automática y escalabilidad infinita',
        ],
      },
      cta: 'Quiero preparar mi Design System para IA',
    },
    services: {
      badge: 'Catálogo de Servicios',
      title: 'Qué puedo',
      titleHighlight: 'hacer por ti',
      subtitle: 'Soluciones a medida para startups, scale-ups, agencias y empresas consolidadas que buscan velocidad y sofisticación.',
      allFilter: 'Todos los Servicios',
      categories: {
        all: 'Todos',
        ds_ai: 'Design System e IA',
        web: 'Web y Landing Pages',
        product: 'Producto y UX/UI',
        dev: 'Frontend y Código',
      },
      items: [
        {
          id: 'ai-ds',
          category: 'ds_ai',
          isFlagship: true,
          highlightBadge: 'Más Solicitado',
          title: 'Adecuación de Design System para IA',
          tagline: 'Optimización de tokens, componentes y contexto para desarrollo acelerado con LLMs.',
          description: 'Estructuración de design tokens semánticos, documentación markdown para agentes de IA, paridad Figma-Código y reglas de desarrollo para Cursor/Copilot/Claude.',
          deliverables: [
            'Design Tokens estandarizados (JSON, CSS, Tailwind)',
            'Prompt Engineering y Reglas de Contexto (AGENTS.md)',
            'Componentes React/Tailwind sincronizados con Figma',
            'Workshop de aceleración con IA para el equipo',
          ],
          timeline: '1 a 3 semanas',
          idealFor: 'Startups y equipos de ingeniería que desean codificar con IA sin perder la identidad de marca.',
          tech: ['Figma Tokens', 'Tailwind CSS', 'Claude/Gemini AI', 'React', 'OKLCH'],
        },
        {
          id: 'landing-pages',
          category: 'web',
          highlightBadge: 'Alta Conversión',
          title: 'Landing Pages de Alta Conversión',
          tagline: 'Páginas que cautivan visualmente y convierten visitantes en clientes.',
          description: 'Desarrollo integral de páginas de venta, lanzamientos de producto, campañas estacionales y captura de leads con diseño premium y UX persuasiva.',
          deliverables: [
            'Diseño exclusivo y responsivo en Figma',
            'Desarrollo frontend ultrarrápido (Next.js/React/HTML)',
            'Animaciones sutiles y microinteracciones fluidas',
            'Integración con analítica, etiquetas y formularios',
          ],
          timeline: '3 a 7 días hábiles',
          idealFor: 'Empresas lanzando productos, campañas de tráfico pago o renovando su presencia comercial.',
          tech: ['React / HTML5', 'Tailwind CSS', 'Framer Motion', 'SEO y Analítica'],
        },
        {
          id: 'institutional-sites',
          category: 'web',
          title: 'Sitios Web Corporativos y Portales',
          tagline: 'Autoridad digital impecable para su marca o empresa.',
          description: 'Creación de sitios web corporativos modernos, enfocados en credibilidad, posicionamiento de mercado y facilidad de navegación.',
          deliverables: [
            'Arquitectura de información y wireframes',
            'Diseño visual completo para todas las páginas',
            'Código ligero, accesible y optimizado para SEO',
            'Integración con panel administrativo o Headless CMS',
          ],
          timeline: '2 a 4 semanas',
          idealFor: 'Empresas, clínicas, firmas y consultorías que buscan transmitir prestigio e innovación.',
          tech: ['React', 'TypeScript', 'Tailwind', 'Next.js / Vite', 'CMS Headless'],
        },
        {
          id: 'promotional-campaigns',
          category: 'web',
          title: 'Sitios Promocionales y Campañas',
          tagline: 'Experiencias interactivas inmersivas para grandes lanzamientos.',
          description: 'Páginas temáticas para lanzamientos de gran escala, eventos deportivos, festivales y campañas promocionales de alto tráfico.',
          deliverables: [
            'Concepto visual temático de alto impacto',
            'Gamificación, contadores y elementos dinámicos',
            'Optimización extrema para picos de tráfico',
            'Páginas especiales para marcas y aliados',
          ],
          timeline: '1 a 2 semanas',
          idealFor: 'E-commerce, marcas deportivas, retail y grandes eventos (ej: Netshoes Run, Copa del Mundo).',
          tech: ['JavaScript / Canvas', 'Microanimaciones', 'Máximo Rendimiento', 'Mobile First'],
        },
        {
          id: 'design-system-creation',
          category: 'ds_ai',
          title: 'Creación de Design System desde Cero',
          tagline: 'La base visual y funcional definitiva para productos escalables.',
          description: 'Construcción de ecosistemas de diseño robustos: paleta de colores, tipografía, cuadrículas, componentes atómicos y guías completas.',
          deliverables: [
            'Biblioteca completa de componentes en Figma',
            'Tokens de tema (Soporte a Modo Oscuro y Claro)',
            'Guía de estilo y mejores prácticas de uso',
            'Implementación inicial de componentes en React',
          ],
          timeline: '3 a 6 semanas',
          idealFor: 'Empresas de SaaS y productos en crecimiento que sufren por inconsistencias visuales y retrabajo.',
          tech: ['Figma Pro', 'Storybook', 'Radix / shadcn', 'Tailwind CSS'],
        },
        {
          id: 'ux-ui-product',
          category: 'product',
          title: 'Diseño UX/UI para Aplicaciones y SaaS',
          tagline: 'Experiencias intuitivas para software complejo, dashboards y apps móviles.',
          description: 'Diseño centrado en el usuario: mapas de viaje, arquitectura de flujos, validación de usabilidad y entregables listos para desarrollo.',
          deliverables: [
            'Mapas de viaje del usuario y flujogramas',
            'Prototipos interactivos navegables de alta fidelidad',
            'Pantallas de onboarding, dashboards y flujos críticos',
            'Handoff detallado con especificaciones para devs',
          ],
          timeline: '2 a 5 semanas',
          idealFor: 'Founders y Product Managers construyendo MVPs, nuevos módulos o rediseñando plataformas existentes.',
          tech: ['Figma', 'UX Research', 'Design Ops', 'User Testing'],
        },
        {
          id: 'frontend-dev',
          category: 'dev',
          title: 'Desarrollo Frontend Especializado',
          tagline: 'Código limpio, moderno y con 100% de fidelidad al diseño aprobado.',
          description: 'Codificación en React, Tailwind CSS y TypeScript enfocada en rendimiento, accesibilidad, animaciones fluidas y arquitectura modular.',
          deliverables: [
            'Repositorio limpio y modular en TypeScript',
            'Diseño 100% responsivo para todos los dispositivos',
            'Animaciones profesionales con Framer Motion',
            'Integración fluida con APIs RESTful o GraphQL',
          ],
          timeline: '1 a 3 semanas por sprint',
          idealFor: 'Equipos que necesitan refuerzo técnico senior para entregar interfaces desafiantes a tiempo.',
          tech: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
        },
        {
          id: 'design-consulting',
          category: 'product',
          title: 'Consultoría y Sprints de Design Ops',
          tagline: 'Diagnóstico y desbloqueo de procesos de diseño y producto.',
          description: 'Mentoría técnica, auditorías de usabilidad (heurística), optimización del handoff entre diseño y desarrollo y aceleración de squads con IA.',
          deliverables: [
            'Informe diagnóstico de cuellos de botella y oportunidades',
            'Plan de acción prioritario para producto y diseño',
            'Sesiones de alineación estratégica con líderes técnicos',
            'Plantillas y automatizaciones de flujos de trabajo',
          ],
          timeline: 'Por Sprint o Paquete de Horas',
          idealFor: 'Líderes que buscan elevar la madurez de diseño y la velocidad de entrega del equipo.',
          tech: ['Design Ops', 'Metodología Ágil', 'Mentoría de Equipo', 'Auditoría UX'],
        },
      ],
      cardCta: 'Solicitar Cotización de este Servicio',
    },
    calculator: {
      badge: 'Presupuesto Interactivo',
      title: 'Arma el Alcance de',
      titleHighlight: 'tu Proyecto',
      subtitle: 'Selecciona los servicios que necesitas para generar un briefing instantáneo y recibir una propuesta personalizada.',
      step1Title: '1. ¿Qué servicios necesitas?',
      step2Title: '2. ¿Cuál es la urgencia de entrega?',
      step3Title: '3. Detalles adicionales (opcional):',
      timelineOptions: {
        urgent: { label: 'Urgente / Sprint Relámpago', desc: 'Prioridad máxima, entrega en el menor plazo posible' },
        standard: { label: 'Plazo Estándar', desc: 'Cronograma equilibrado con revisiones estructuradas' },
        flexible: { label: 'Flexible / Largo Plazo', desc: 'Sprints continuos, consultoría o backlog futuro' },
      },
      summaryTitle: 'Resumen del Briefing',
      summaryDesc: 'Con base en tus selecciones, preparamos un mensaje directo para WhatsApp o correo electrónico:',
      selectedServices: 'Servicios seleccionados:',
      emptySelection: 'Aún no has seleccionado servicios. Haz clic en las opciones arriba para comenzar.',
      estimatedDelivery: 'Inicio estimado:',
      urgencyLabel: 'Plazo seleccionado:',
      whatsappButton: 'Conversar por WhatsApp con este Alcance',
      emailButton: 'Enviar Briefing por Correo',
      customNotePlaceholder: 'Cuéntame brevemente sobre tu empresa, objetivos o enlaces de referencia...',
    },
    process: {
      badge: 'Metodología Ágil',
      title: 'Cómo funciona',
      titleHighlight: 'el proceso de trabajo',
      subtitle: 'Sin burocracia, con comunicación clara y entregas continuas en cada hito.',
      steps: [
        {
          number: '01',
          title: 'Alineación y Briefing',
          desc: 'Reunión rápida o intercambio de mensajes para comprender objetivos, público, referencias y plazos.',
          deliverable: 'Alcance cerrado, cronograma y contrato transparente.',
        },
        {
          number: '02',
          title: 'Prototipado y Validación',
          desc: 'Creación de layouts en Figma o prototipos interactivos con iteraciones ágiles.',
          deliverable: 'Diseño visual aprobado y listo para producción.',
        },
        {
          number: '03',
          title: 'Desarrollo y Flujo IA',
          desc: 'Codificación limpia en React/Tailwind o estructuración de Design System para agentes de IA.',
          deliverable: 'Código funcional, probado y responsivo.',
        },
        {
          number: '04',
          title: 'Lanzamiento y Soporte',
          desc: 'Puesta en producción, entrega de archivos, documentación y garantía posterior.',
          deliverable: 'Proyecto en vivo respaldado por documentación completa.',
        },
      ],
    },
    differentials: {
      badge: '¿Por qué contratar a Denis?',
      title: 'Ventajas comerciales que',
      titleHighlight: 'generan resultados reales',
      subtitle: 'Más de 15 años entregando soluciones digitales para los mayores referentes tecnológicos.',
      items: [
        {
          title: 'Diseño + Código en la Misma Persona',
          desc: 'No necesitas mediar entre un diseñador que no programa y un desarrollador que descuida la tipografía. Domino ambos extremos con fluidez.',
          tag: 'Full-Cycle Delivery',
        },
        {
          title: 'Pionero en Inteligencia Artificial para Diseño',
          desc: 'Utilizo la IA como acelerador y me especializo en estructurar design systems para agentes LLM, multiplicando la velocidad de desarrollo.',
          tag: 'AI-First Native',
        },
        {
          title: 'Experiencia en Grandes Empresas',
          desc: 'Trayectoria comprobada en operaciones de gran escala como Mercado Libre, iFood, Netshoes y Clinicorp. Aporto solidez a su proyecto.',
          tag: 'Enterprise Pedigree',
        },
        {
          title: 'Comunicación Directa y Sin Burocracia',
          desc: 'Sin intermediarios ni ejecutivos de cuenta. Hablas directamente con el especialista senior que diseña y programa tu solución.',
          tag: 'Agilidad Total',
        },
      ],
    },
    faq: {
      badge: 'Preguntas Frecuentes',
      title: 'Respuestas a tus',
      titleHighlight: 'dudas sobre el freelance',
      subtitle: 'Todo lo que necesitas saber antes de iniciar nuestra colaboración.',
      items: [
        {
          question: '¿Cómo funciona la forma de pago?',
          answer: 'Generalmente trabajamos con 50% de anticipo para reservar el sprint y 50% contra entrega y aprobación final. Para consultoría continua, estructuramos pagos por sprint semanal/quincenal o hitos de proyecto. Facturación disponible.',
        },
        {
          question: '¿Qué es exactamente la "Adequación de Design System para IA"?',
          answer: 'Es el proceso especializado de estructurar los tokens visuales, componentes y documentación de su producto en un formato semántico y legible por máquina para que herramientas de IA (como Cursor, Claude, Copilot y Gemini) generen código siguiendo el 100% de la identidad de su marca.',
        },
        {
          question: '¿Firmas acuerdos de confidencialidad (NDA)?',
          answer: 'Sí, totalmente. La confidencialidad de la información de su empresa, código y estrategia de producto está garantizada por contrato.',
        },
        {
          question: '¿Entregas solo diseño o también código listo para producción?',
          answer: '¡Ambos! Puedes contratarme exclusivamente para la etapa de diseño UI/UX en Figma, solo para desarrollo frontend en React/Tailwind, o para el paquete completo de punta a punta (Diseño + Código).',
        },
        {
          question: '¿Cuál es el tiempo promedio de entrega de una Landing Page o Sitio?',
          answer: 'Una Landing Page de alta conversión toma entre 3 y 7 días hábiles desde el briefing hasta el código final en vivo. Sitios corporativos completos o Design Systems toman de 2 a 4 semanas según el alcance.',
        },
        {
          question: '¿Cómo puedo recibir una cotización rápida?',
          answer: 'Puedes utilizar la calculadora interactiva de esta página para armar tu alcance y enviármelo directamente por WhatsApp, o mandar un mensaje mediante el formulario de contacto.',
        },
      ],
    },
    contact: {
      badge: 'Iniciar Proyecto',
      title: '¿Listo para elevar el nivel de',
      titleHighlight: 'tu producto digital?',
      titleEnd: '',
      subtitle: 'Cuéntame sobre tu proyecto y convirtamos tu visión en realidad con velocidad y precisión estética.',
      directTitle: 'Canales Directos de Contacto',
      directDesc: 'Atención rápida y directa con Denis Piaia.',
      whatsappTitle: 'WhatsApp Directo',
      whatsappDesc: 'Respuesta rápida en horario comercial',
      emailTitle: 'Correo Profesional',
      emailDesc: 'dpiaia@gmail.com',
      formTitle: 'Envía un mensaje rápido',
      formName: 'Tu Nombre o Empresa',
      formEmail: 'Tu Correo de Contacto',
      formProject: 'Tipo de Proyecto / Servicio Deseado',
      formMessage: 'Describe tu proyecto o metas...',
      formSubmit: 'Enviar Mensaje y Solicitar Cotización',
      formSubmitting: 'Enviando...',
      formSuccess: '¡Mensaje enviado con éxito! Me pondré en contacto contigo a la brevedad.',
      backHome: 'Volver al Portafolio Principal',
      rights: 'Todos los derechos reservados.',
    },
  },
};
