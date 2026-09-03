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
  actionText?: string;
  whatsappMessage?: string;
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
    portfolio: string;
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
    rotatingTitles: {
      prefix: string;
      highlight: string;
      suffix?: string;
    }[];
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
    talkOnWhatsApp?: string;
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
      backToPortfolio: 'Voltar ao portfólio',
      portfolio: 'Portfólio',
      services: 'Serviços',
      cases: 'Criações',
      trustedBy: 'Clientes',
      calculator: 'Orçamento',
      contact: 'Contato',
      quoteCta: 'Falar comigo',
    },
    hero: {
      availabilityBadge: 'Disponível para novos projetos',
      greeting: 'Denis Piaia • Design Ops & Tech Leader',
      rotatingTitles: [
        { prefix: 'Design Systems para IA & ', highlight: 'frontend de alta performance' },
        { prefix: 'Sites pessoais ou para ', highlight: 'sua empresa' },
        { prefix: 'Imagens para ', highlight: 'redes sociais, impressos ou anúncios' },
      ],
      titleStart: 'Design Systems para IA &',
      titleHighlight: 'frontend de alta performance',
      titleEnd: '',
      aboutSummary: '+15 anos escalando produtos digitais na Netshoes, iFood e Clinicorp. Da arquitetura de tokens ao código em produção.',
      deliveryPromise: '',
      ctaPrimary: 'Explorar serviços',
      ctaSecondary: 'Solicitar orçamento',
      ctaWhatsApp: 'WhatsApp',
    },
    credentials: {
      title: 'Destaques & credenciais',
      items: [
        {
          number: '+15 Anos',
          title: 'Experiência de mercado',
          subtitle: 'Liderando Design & Frontend em grandes players',
          icon: 'Rocket',
        },
        {
          number: 'PUC-Campinas',
          title: 'Professor universitário',
          subtitle: 'Formando novas gerações em Design e Tecnologia',
          icon: 'GraduationCap',
        },
        {
          number: 'Unicórnios & Líderes',
          title: 'Grandes ecossistemas',
          subtitle: 'Netshoes, iFood, Superlógica, Clinicorp, Visa',
          icon: 'Building2',
        },
        {
          number: 'Palestrante',
          title: 'TDC, IxDA & eventos tech',
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
          title: 'Design ao código',
          subtitle: 'Do protótipo no Figma à interface em React/Tailwind',
          icon: 'Code2',
        },
        {
          number: 'Atuação Global',
          title: 'Brasil & América Latina',
          subtitle: 'Projetos entregados com impacto internacional',
          icon: 'Globe',
        },
        {
          number: '100% Pontual',
          title: 'Compromisso com prazos',
          subtitle: 'Comunicação transparente e entregas ágeis',
          icon: 'ShieldCheck',
        },
      ],
    },
    services: {
      badge: 'Soluções sob medida',
      title: 'O que eu',
      titleHighlight: 'posso fazer por você',
      subtitle: 'Serviços estruturados como produtos fechados: com escopo claro, metodologia ágil, alta qualidade e prazos definidos.',
      digitalTitle: 'Digital & engenharia',
      digitalSubtitle: 'Soluções modernas para escalar sua presença, acelerar seu time e multiplicar conversões.',
      graficoTitle: 'Design gráfico & marca',
      graficoSubtitle: 'Identidade e materiais impressos com acabamento refinado para gerar autoridade imediata.',
      productBadge: 'PRODUTO',
      cardCta: 'Solicitar este serviço',
      talkOnWhatsApp: 'Falar no WhatsApp',
      items: [
        // DIGITAL
        // DOBRA 1: MODERNIZAÇÃO DE DESIGN SYSTEM PARA IA
        {
          id: 'ai-ds-modernization',
          category: 'digital',
          productType: 'Design System & IA',
          title: 'Faça a inteligência artificial entender o seu design system sem erros',
          tagline: 'Modernização e adequação para quem já tem um Design System travado ou confuso para as ferramentas modernas.',
          description: 'Se você já tentou usar Cursor, Claude ou Copilot para programar e o resultado visual veio todo quebrado, o problema não é a IA: é o seu Design System falando uma língua antiga. Eu traduzo e migro a sua biblioteca atual para tecnologias que a IA domina nativamente (como React, Tailwind e componentes padronizados). Mapeio cada cor, espaçamento e componente para que seus desenvolvedores gerem telas perfeitas e padronizadas no primeiro comando, sem retrabalho.',
          actionText: 'Destravar meu design system para IA',
          whatsappMessage: 'Olá Denis! Gostaria de falar sobre adequação de Design System para IA.',
          deliverables: [
            'Auditoria de componentes legados e mapeamento de tokens',
            'Migração para React + Tailwind com TypeScript rígido',
            'Estruturação semântica para prompts precisos em Cursor e Claude',
            'Documentação viva pronta para consumo de LLMs e devs'
          ],
          timeline: '10 a 20 dias úteis',
          idealFor: 'Equipes com design systems legados que enfrentam código quebrado ou retrabalho ao usar assistentes de IA.',
          tech: ['Design Tokens', 'Tailwind CSS', 'React / TypeScript', 'shadcn/ui', 'Cursor / Claude'],
        },
        // DOBRA 2: CRIAÇÃO DE DESIGN SYSTEM COMPATÍVEL COM IA
        {
          id: 'ai-ds-creation',
          category: 'digital',
          productType: 'Design system do zero',
          title: 'Pare de reinventar a roda: um design system pronto para o futuro',
          tagline: 'Criação estrutural completa para quem ainda não tem padrão nenhum e quer nascer pronto pro futuro.',
          description: 'Criar telas do zero a cada novo projeto queima tempo, dinheiro e cansa seu time. Eu construo a base visual e estrutural completa do seu produto digital do absoluto zero — já 100% pensada para trabalhar lado a lado com assistentes de IA. Você recebe uma biblioteca viva, intuitiva e organizada, onde criar uma nova página ou tela para o seu sistema leva minutos em vez de semanas.',
          actionText: 'Criar meu design system',
          whatsappMessage: 'Olá Denis! Gostaria de falar sobre criação de Design System do zero.',
          deliverables: [
            'Biblioteca modular de componentes (UI Kit no Figma e Código)',
            'Tokens de cor, tipografia, espaçamento, sombras e raios',
            'Padrões de acessibilidade WCAG e variantes Dark / Light',
            'Integração pronta para gerar novas telas via prompts de IA'
          ],
          timeline: '15 a 30 dias úteis',
          idealFor: 'Startups, novos produtos e empresas que precisam de velocidade escalável desde o primeiro dia.',
          tech: ['Figma Variables', 'React', 'Tailwind CSS', 'Radix / shadcn', 'AI Prompts'],
        },
        // DOBRA 3: WEBSITES INSTITUCIONAIS & PROFISSIONAIS
        {
          id: 'websites',
          category: 'digital',
          productType: 'Websites & autoridade',
          title: 'Seu negócio precisa de uma casa própria na internet',
          tagline: 'Websites institucionais e profissionais com foco em autoridade e posse do próprio espaço digital.',
          description: 'Depender apenas de redes sociais é construir sua empresa em terreno alugado. Um site institucional profissional é o endereço oficial da sua marca, o lugar onde clientes em potencial encontram você no Google, entendem exatamente o valor do seu trabalho e sentem segurança imediata para fechar negócio. Seja você uma empresa sólida ou um profissional autônomo construindo sua autoridade pessoal, crio uma página rápida, elegante e pronta para colocar seu nome no topo.',
          actionText: 'Construir minha casa digital',
          whatsappMessage: 'Olá Denis! Gostaria de falar sobre criação de website institucional.',
          deliverables: [
            'Design exclusivo e alinhado com a autoridade da sua marca',
            'Desenvolvimento responsivo com pontuação 95+ no PageSpeed',
            'Otimização técnica para ranqueamento orgânico no Google (SEO)',
            'Integração com WhatsApp, formulários e domínio personalizado'
          ],
          timeline: '10 a 20 dias úteis',
          idealFor: 'Empresas, consultores, clínicas e profissionais autônomos que desejam consolidar sua autoridade.',
          tech: ['React / Next.js', 'Tailwind CSS', 'SEO Técnico', 'Framer Motion'],
        },
        // DOBRA 4: LANDING PAGES DE ALTA CONVERSÃO
        {
          id: 'landing-pages',
          category: 'digital',
          productType: 'Landing pages & conversão',
          title: 'Uma página com um único objetivo: transformar visitantes em vendas',
          tagline: 'Páginas de alta conversão com foco na urgência, vendas diretas e validação rápida.',
          description: 'Se você tem um produto novo, um serviço específico ou uma campanha que precisa dar retorno rápido, mandar as pessoas para a página inicial comum é perder dinheiro. A Landing Page é um funil cirúrgico: ela pega o cliente pela mão, explica sua oferta com clareza, quebra objeções e foca em uma única ação imediata — comprar ou chamar no WhatsApp. Sem distrações, com carregamento instantâneo no celular e desenhada para vender.',
          actionText: 'Quero vender mais rápido',
          whatsappMessage: 'Olá Denis! Gostaria de falar sobre landing page de alta conversão.',
          deliverables: [
            'Estrutura de copy cirúrgica para quebra de objeções',
            'Carregamento instantâneo em mobile (menos de 1 segundo)',
            'Botões de ação estratégicos com direcionamento direto ao WhatsApp',
            'Trackeamento de pixels (Meta, Google) e eventos de conversão'
          ],
          timeline: '5 a 10 dias úteis',
          idealFor: 'Lançamentos, infoprodutos, serviços específicos e campanhas de tráfego pago.',
          tech: ['Tailwind CSS', 'Conversion Rate Optimization', 'Meta Pixel', 'GA4'],
        },
        // DOBRA 5: PRESENÇA DIGITAL & REDES SOCIAIS
        {
          id: 'social-media',
          category: 'digital',
          productType: 'Presença digital & redes',
          title: 'Seja visto, lembrado e respeitado todos os dias nas redes',
          tagline: 'Planejamento, constância, autoridade e design visual de alto impacto para suas redes sociais.',
          description: 'Estar nas redes sociais não é sobre postar qualquer coisa por obrigação, mas sobre ocupar espaço na mente do seu público com autoridade. Eu cuido do planejamento, dos temas que atraem clientes reais e da criação visual dos posts e carrosséis com um design profissional que destaca seu perfil da concorrência. Você foca em atender os clientes enquanto sua marca se mantém viva, atraente e gerando novas conversas.',
          actionText: 'Profissionalizar minhas redes',
          whatsappMessage: 'Olá Denis! Gostaria de falar sobre presença digital e redes sociais.',
          deliverables: [
            'Calendário editorial com temas e formatos estratégicos',
            'Design de posts para feed (carrosséis informativos e estáticos)',
            'Templates para stories e capas para destaques',
            'Copywriting persuasivo e hashtags otimizadas por nicho'
          ],
          timeline: 'Gestão Contínua (Mensual) ou Pacotes',
          idealFor: 'Marcas, clínicas, consultores e empresas que precisam de presença ativa e visual impecável.',
          tech: ['Instagram', 'LinkedIn', 'Figma', 'Photoshop', 'Meta Business'],
        },
        // DOBRA 6: TRÁFEGO PAGO & GOOGLE ADS
        {
          id: 'google-ads',
          category: 'digital',
          productType: 'Tráfego pago & performance',
          title: 'Esteja exatamente na frente de quem quer comprar de você',
          tagline: 'A ponte direta com quem já está procurando ativamente pelo seu serviço no Google agora.',
          description: 'Todos os dias, centenas de pessoas abrem o Google buscando ativamente a solução que você vende. Se o seu negócio não aparece ali, seu concorrente fica com a venda. Crio e acompanho campanhas de anúncios estratégicas no Google para colocar sua marca em primeiro lugar para o público certo, sem desperdiçar dinheiro com cliques vazios e buscando sempre o menor custo para cada novo contato de cliente gerado.',
          actionText: 'Atrair clientes no Google',
          whatsappMessage: 'Olá Denis! Gostaria de falar sobre tráfego pago e Google Ads.',
          deliverables: [
            'Pesquisa de palavras-chave com alta intenção de contratação',
            'Criação e estruturação técnica de anúncios na Rede de Pesquisa',
            'Configuração de conversões no Google Analytics 4 e GTM',
            'Otimização contínua de termos negativos e redução do custo por lead'
          ],
          timeline: 'Setup em 5 dias + Gestão Contínua',
          idealFor: 'Negócios locais, prestadores de serviços e empresas que precisam de novos contatos comerciais todos os dias.',
          tech: ['Google Ads', 'Google Tag Manager', 'GA4', 'Looker Studio'],
        },

        // GRÁFICO
        // DOBRA 7: IDENTIDADE VISUAL & BRANDING
        {
          id: 'branding',
          category: 'grafico',
          productType: 'Identidade visual & branding',
          title: 'Uma marca que inspira confiança antes de você falar o preço',
          tagline: 'O nascimento da percepção de valor: identidade visual profissional e memorável.',
          description: 'A primeira impressão define se o cliente vai achar seu produto caro ou valioso. Uma identidade visual profissional vai muito além de um desenho bonito: ela traduz a personalidade, o cuidado e a solidez do seu trabalho. Desenvolvo marcas completas, do logotipo às paletas de cores e tipografia, para que seu negócio passe credibilidade instantânea em qualquer lugar do mundo.',
          actionText: 'Criar minha marca marcante',
          whatsappMessage: 'Olá Denis! Gostaria de falar sobre identidade visual e branding.',
          deliverables: [
            'Logotipo exclusivo vetorizado (símbolo + tipografia)',
            'Variações de aplicação (positivo, negativo, monocromático)',
            'Paleta de cores estratégica e sistema tipográfico',
            'Manual de Identidade Visual em PDF e arquivos finais (.AI, .EPS, .PDF, .SVG, .PNG)'
          ],
          timeline: '10 a 15 dias úteis',
          idealFor: 'Empresas em fase de abertura, rebranding e negócios que desejam cobrar mais caro posicionando-se com autoridade.',
          tech: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Craft'],
        },
        // DOBRA 8: DESIGN GRÁFICO & MATERIAIS IMPRESSOS
        {
          id: 'printed-materials',
          category: 'grafico',
          productType: 'Design gráfico & impressos',
          title: 'O toque físico da sua empresa com acabamento impecável',
          tagline: 'O contato físico impecável e sem surpresas na gráfica: cartões, folders, catálogos e papelaria.',
          description: 'Entregar um cartão de visitas de alta qualidade, um catálogo bem diagramado ou um folder elegante em uma reunião ainda tem um peso enorme na decisão de compra. Crio peças gráficas completas e preparo os arquivos com rigor técnico total para a gráfica, garantindo que as cores, dobras e cortes saiam exatamente como planejado no papel, sem dores de cabeça ou surpresas na impressão.',
          actionText: 'Produzir meus materiais impressos',
          whatsappMessage: 'Olá Denis! Gostaria de falar sobre design gráfico e materiais impressos.',
          deliverables: [
            'Design de cartões de visita executivos (com QR Code inteligente opcional)',
            'Folders institucionais, panfletos comerciais e catálogos diagramados',
            'Papelaria corporativa completa (papel timbrado, pastas e envelopes)',
            'Fechamento técnico com sangria, marcas de corte e perfis CMYK (PDF/X-1a)'
          ],
          timeline: '5 a 8 dias úteis',
          idealFor: 'Reuniões executivas, forças de vendas, feiras, consultórios, clínicas e comércios.',
          tech: ['Adobe InDesign', 'Illustrator', 'Photoshop', 'PDF/X-1a Pre-press'],
        },
      ],
    },
    creations: {
      badge: 'Portfólio selecionado',
      title: 'Algumas',
      titleHighlight: 'criações emblemáticas',
      subtitle: 'Conheça um pouco do trabalho entregue para marcas de impacto nacional e internacional.',
      viewAllCases: 'Ver todos os projetos no portfólio',
      items: [
        {
          id: 'netshoes-run',
          title: 'Netshoes Run',
          client: 'Netshoes / Magalu',
          category: 'Identidade de evento & landing pages',
          description: 'Criação da identidade visual, páginas promocionais e peças de engajamento para as etapas do maior circuito de corridas de rua do e-commerce esportivo da América Latina.',
          image: 'https://piaianet.page.gd/gifs/run.gif',
          deliverables: ['Identidade visual', 'Landing page responsiva', 'Banners promocionais', 'Kits de corrida'],
          tag: 'CAMPANHA ESPORTIVA',
        },
        {
          id: 'netshoes-copa',
          title: 'Netshoes na Copa',
          client: 'Netshoes / Magalu',
          category: 'Gamificação & campanha digital',
          description: 'Ações digitais interativas, interfaces comemorativas e landing pages temáticas durante a Copa do Mundo, gerando recordes de tráfego e engajamento para a marca.',
          image: 'https://piaianet.page.gd/gifs/copa.gif',
          deliverables: ['Interface interativa', 'Gamificação promocional', 'Banners dinâmicos', 'E-commerce theme'],
          tag: 'ALTA CONVERSÃO',
        },
        {
          id: 'ifood-colombia',
          title: 'iFood Colômbia',
          client: 'iFood Internacional',
          category: 'Expansão de produto & UX/UI',
          description: 'Adaptação do ecossistema do iFood para o mercado colombiano, incluindo fluxos do aplicativo, comunicação promocional e identidade adaptada para a América Latina.',
          image: 'https://piaianet.page.gd/imgs/ifood.jpg',
          deliverables: ['Localização de UX/UI', 'Comunicação promocional', 'Design de telas', 'Design System'],
          tag: 'EXPANSÃO LATAM',
        },
        {
          id: 'clinicorp-ds',
          title: 'Clinicorp Design System & AI',
          client: 'Clinicorp Healthtech',
          category: 'Design System & integração com IA',
          description: 'Desenvolvimento do sistema de design com tokens semânticos OKLCH, paridade atômica com shadcn/ui e integração com modelos de IA para software clínico odontológico.',
          image: 'https://picsum.photos/id/1/800/600',
          deliverables: ['Design Tokens W3C', 'Biblioteca shadcn/ui', 'Documentação interativa', 'AI Context Guidelines'],
          tag: 'HEALTHTECH & AI',
        },
        {
          id: 'superlogica',
          title: 'Superlógica Fintech & ERP',
          client: 'Superlógica',
          category: 'Plataformas financeiras & UX',
          description: 'Interface e arquitetura de dashboards financeiros, gestão de condomínios e fluxos de pagamentos recorrentes utilizados por milhares de administradoras.',
          image: 'https://picsum.photos/id/180/800/600',
          deliverables: ['Dashboards financeiros', 'Fluxos de checkout', 'Design System', 'User research'],
          tag: 'FINTECH',
        },
        {
          id: 'zattini',
          title: 'Zattini Fashion E-commerce',
          client: 'Zattini / Netshoes',
          category: 'E-commerce & editoriais de moda',
          description: 'Direção de arte digital, landing pages de coleções de moda e campanhas sazonais de conversão rápida (Black Friday, Dia das Mães e Lançamentos).',
          image: 'https://piaianet.page.gd/gifs/lojas.gif',
          deliverables: ['Landing pages sazonais', 'Editoriais de moda', 'UI de e-commerce', 'Testes A/B'],
          tag: 'E-COMMERCE',
        },
      ],
    },
    trustedBy: {
      badge: 'Marcas & parceiros',
      title: 'Quem já acreditou em',
      titleHighlight: 'mim',
      subtitle: 'Histórico de colaboração com líderes de mercado, startups e instituições de ensino.',
      partners: [
        { name: 'Netshoes', logo: '/logos/netshoes.svg', category: 'E-commerce' },
        { name: 'Zattini', logo: '/logos/zattini.svg', category: 'Moda & e-commerce' },
        { name: 'iFood', logo: '/logos/ifood.svg', category: 'Foodtech' },
        { name: 'Visa', logo: '/logos/visa.svg', category: 'Pagamentos' },
        { name: 'Superlógica', logo: '/logos/clientefc.svg', category: 'Fintech' },
        { name: 'Clinicorp', logo: '/logos/clinicorp.svg', category: 'Healthtech' },
        { name: 'Cielo', logo: '/logos/cielo.svg', category: 'Meios de pagamento' },
        { name: 'Mercado Livre', logo: '/logos/meli.svg', category: 'Marketplace' },
        { name: 'PUC Campinas', logo: '/logos/puc.svg', category: 'Educação' },
        { name: 'Athlético PR', logo: '/logos/cap.svg', category: 'Esportes' },
        { name: 'TDC', logo: '/logos/tdc.svg', category: 'Eventos tech' },
        { name: 'IxDA', logo: '/logos/ixda.svg', category: 'Comunidade design' },
      ],
    },
    calculator: {
      badge: 'Calculadora de escopo',
      title: 'Monte o seu',
      titleHighlight: 'briefing personalizado',
      subtitle: 'Selecione os serviços digitais ou gráficos de interesse para gerar uma mensagem pronta e falar diretamente comigo.',
      step1Title: '1. Selecione os serviços desejados:',
      step2Title: '2. Qual é a sua urgência no prazo?',
      step3Title: '3. Detalhes adicionais (opcional):',
      timelineOptions: {
        urgent: { label: 'Urgente (Sprint acelerada)', desc: 'Prioridade máxima na esteira de produção' },
        standard: { label: 'Padrão (Cronograma regular)', desc: 'Tempo ideal com etapas estruturadas de aprovação' },
        flexible: { label: 'Flexível / Planejamento', desc: 'Início planejado para as próximas semanas' },
      },
      summaryTitle: 'Resumo da sua solicitação',
      summaryDesc: 'Clique abaixo para enviar seu briefing pronto direto no WhatsApp ou por E-mail:',
      selectedServices: 'Serviços selecionados:',
      emptySelection: 'Nenhum serviço selecionado ainda. Clique nos cards acima para montar seu escopo.',
      urgencyLabel: 'Prazo desejado:',
      whatsappButton: 'Enviar briefing via WhatsApp 💬',
      emailButton: 'Enviar por e-mail ✉️',
      customNotePlaceholder: 'Conte um pouco sobre sua empresa, público-alvo ou referências visuais que você gosta...',
    },
    aiMetadata: {
      badge: 'Schema & IA',
      title: 'Metadados & indexação',
      titleHighlight: 'para buscadores e IAs',
      subtitle: 'Estrutura semântica JSON-LD e dados otimizados para motores de busca e agentes de inteligência artificial (ChatGPT, Gemini, Perplexity, Claude).',
      copyPromptLabel: 'Copiar perfil em Markdown para IAs',
      copiedSuccess: 'Perfil copiado para a área de transferência!',
      forHumansTitle: 'Sobre Denis Piaia (Resumo para IAs):',
      forAIsTitle: 'JSON-LD Structured Data (Schema.org):',
      aiPromptSummary: `### Denis Piaia - Especialista em Design de Produto, Frontend e Design Systems com IA
- **Experiência:** +15 anos de atuação em grandes players (Netshoes, iFood, Clinicorp, Superlógica) e Professor Universitário na PUC-Campinas.
- **Serviços Digitais:** Adequação de Design Systems para IA (W3C Tokens, AGENTS.md, shadcn/ui), Criação de Sites institucionais (React, Next.js, Tailwind), Criação de Landing Pages de alta conversão (CRO, micro-interações) e Tráfego Pago Google Ads.
- **Serviços Gráficos:** Criação de Logos e Identidade Visual corporativa, Folhetos e Folders promocionais, Cartão de Visita e Papelaria executiva.
- **Disponibilidade:** Projetos pontuais, sprints aceleradas e consultoria para empresas no Brasil e no exterior.
- **Contato Direto:** dpiaia@gmail.com | WhatsApp: +55 (19) 99111-9674 | LinkedIn: linkedin.com/in/denispiaia`,
    },
    contact: {
      badge: 'Vamos conversar',
      title: 'Pronto para tirar seu',
      titleHighlight: 'projeto do papel?',
      subtitle: 'Entre em contato direto pelo canal de sua preferência ou preencha o formulário para receber uma proposta rápida.',
      whatsappTitle: 'WhatsApp direto',
      whatsappDesc: '+55 (19) 99111-9674 • Resposta rápida',
      emailTitle: 'E-mail comercial',
      emailDesc: 'dpiaia@gmail.com',
      backHome: 'Voltar para a página inicial / portfólio',
      formTitle: 'Envie uma mensagem rápida',
      formName: 'Seu nome ou empresa',
      formEmail: 'Seu e-mail',
      formProject: 'Qual é o seu objetivo?',
      formMessage: 'Mensagem ou briefing do projeto',
      formSubmit: 'Enviar mensagem',
      formSubmitting: 'Enviando...',
      formSuccess: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      backToPortfolio: 'Back to portfolio',
      portfolio: 'Portfolio',
      services: 'Services',
      cases: 'Work',
      trustedBy: 'Clients',
      calculator: 'Quote',
      contact: 'Contact',
      quoteCta: 'Talk to me',
    },
    hero: {
      availabilityBadge: 'Available for new projects',
      greeting: 'Denis Piaia • Design Ops & Tech Leader',
      rotatingTitles: [
        { prefix: 'AI Design Systems & ', highlight: 'high-performance frontend' },
        { prefix: 'Websites for personal or ', highlight: 'your company' },
        { prefix: 'Visuals for ', highlight: 'social media, print or ads' },
      ],
      titleStart: 'AI Design Systems &',
      titleHighlight: 'high-performance frontend',
      titleEnd: '',
      aboutSummary: '15+ years scaling digital products at market leaders like Netshoes, iFood, and Clinicorp. From token architecture to production code.',
      deliveryPromise: '',
      ctaPrimary: 'Explore services',
      ctaSecondary: 'Request a quote',
      ctaWhatsApp: 'WhatsApp',
    },
    credentials: {
      title: 'Highlights & credentials',
      items: [
        {
          number: '15+ Years',
          title: 'Industry experience',
          subtitle: 'Leading Design & Frontend in top-tier companies',
          icon: 'Rocket',
        },
        {
          number: 'PUC-Campinas',
          title: 'University professor',
          subtitle: 'Mentoring new generations in Design and Tech',
          icon: 'GraduationCap',
        },
        {
          number: 'Unicorns & Leaders',
          title: 'Proven track record',
          subtitle: 'Netshoes, iFood, Superlógica, Clinicorp, Visa',
          icon: 'Building2',
        },
        {
          number: 'Speaker',
          title: 'TDC, IxDA & tech events',
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
          title: 'Design to code',
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
          title: 'Deadline reliability',
          subtitle: 'Transparent communication and agile delivery',
          icon: 'ShieldCheck',
        },
      ],
    },
    services: {
      badge: 'Tailored solutions',
      title: 'What I can',
      titleHighlight: 'deliver for you',
      subtitle: 'Structured as productized services: clear deliverables, agile methodologies, high quality, and guaranteed timelines.',
      digitalTitle: 'Digital & engineering',
      digitalSubtitle: 'Modern solutions to scale your digital presence, empower your engineering team, and boost conversions.',
      graficoTitle: 'Graphic design & branding',
      graficoSubtitle: 'Refined brand identity and print assets engineered for instant authority.',
      productBadge: 'PRODUCT',
      cardCta: 'Request this service',
      talkOnWhatsApp: 'Talk on WhatsApp',
      items: [
        // DIGITAL
        // DOBRA 1: MODERNIZAÇÃO DE DESIGN SYSTEM PARA IA
        {
          id: 'ai-ds-modernization',
          category: 'digital',
          productType: 'Design System & AI',
          title: 'Make artificial intelligence understand your design system flawlessly',
          tagline: 'Modernization and alignment for existing Design Systems that stall modern AI coding workflows.',
          description: 'If you have tried using Cursor, Claude, or Copilot to code and the visual UI output came back broken, the issue isn’t AI: it is your Design System speaking an obsolete dialect. I translate and migrate your component library to AI-native standards (React, Tailwind, and semantic tokens). Every color, spacing rule, and component is mathematically structured so your developers generate production-ready screens on the very first prompt, with zero rework.',
          actionText: 'Unlock my design system for AI',
          whatsappMessage: "Hi Denis! I'd like to talk about Design System modernization for AI.",
          deliverables: [
            'Legacy component audit and Design Token mapping',
            'Migration to React + Tailwind with strict TypeScript',
            'Semantic prompt guidelines and context files for Cursor & Claude',
            'Living documentation ready for LLMs and engineering teams'
          ],
          timeline: '10 to 20 business days',
          idealFor: 'Engineering teams with legacy design systems facing broken code or constant rework when using AI assistants.',
          tech: ['Design Tokens', 'Tailwind CSS', 'React / TypeScript', 'shadcn/ui', 'Cursor / Claude'],
        },
        // DOBRA 2: CRIAÇÃO DE DESIGN SYSTEM COMPATÍVEL COM IA
        {
          id: 'ai-ds-creation',
          category: 'digital',
          productType: 'Design system from scratch',
          title: 'Stop reinventing the wheel: a future-proof design system',
          tagline: 'Complete visual and structural foundation built from scratch, 100% optimized for AI.',
          description: 'Building screens from scratch for every project burns time, budget, and exhausts your engineering team. I architect your entire digital product foundation from absolute zero — built from day one to work hand-in-hand with AI assistants. You get an intuitive, living component library where spinning up a new screen or feature takes minutes instead of weeks.',
          actionText: 'Create my design system',
          whatsappMessage: "Hi Denis! I'd like to talk about building a Design System from scratch.",
          deliverables: [
            'Modular component library (UI Kit in Figma & Code)',
            'Semantic tokens for colors, typography, spacing, shadows, and radii',
            'WCAG accessibility compliance and Dark / Light modes',
            'Ready-to-prompt AI code generation pipelines'
          ],
          timeline: '15 to 30 business days',
          idealFor: 'Startups, new digital products, and companies needing scalable speed from day one.',
          tech: ['Figma Variables', 'React', 'Tailwind CSS', 'Radix / shadcn', 'AI Prompts'],
        },
        // DOBRA 3: WEBSITES INSTITUCIONAIS & PROFISSIONAIS
        {
          id: 'websites',
          category: 'digital',
          productType: 'Websites & authority',
          title: 'Your business deserves its own home on the internet',
          tagline: 'Institutional and professional websites focused on authoritative digital ownership.',
          description: 'Relying solely on social platforms is building your business on rented land. A bespoke institutional website is your brand’s official headquarters — where prospects discover you on Google, understand your unique value, and feel immediate confidence to close deals. Whether you are an established company or an independent leader building personal authority, I build fast, elegant pages engineered to position you at the top.',
          actionText: 'Build my digital home',
          whatsappMessage: "Hi Denis! I'd like to talk about creating an institutional website.",
          deliverables: [
            'Bespoke design aligned with your brand authority',
            'Responsive development with 95+ Google PageSpeed score',
            'Technical SEO optimization for organic Google ranking',
            'WhatsApp, custom contact forms, and custom domain setup'
          ],
          timeline: '10 to 20 business days',
          idealFor: 'Businesses, consultancies, healthcare clinics, and independent professionals.',
          tech: ['React / Next.js', 'Tailwind CSS', 'Technical SEO', 'Framer Motion'],
        },
        // DOBRA 4: LANDING PAGES DE ALTA CONVERSÃO
        {
          id: 'landing-pages',
          category: 'digital',
          productType: 'Landing pages & conversion',
          title: 'One page with a single purpose: turn visitors into customers',
          tagline: 'High-converting landing pages built for urgency, fast validation, and direct sales.',
          description: 'If you have a new product, specific service, or ad campaign that needs fast ROI, sending visitors to a generic homepage loses money. A high-converting Landing Page is a surgical funnel: it takes prospects by the hand, articulates your offer with crystal clarity, dismantles objections, and drives a single decisive action — buy or message on WhatsApp. Zero distractions, instant mobile load, engineered to convert.',
          actionText: 'I want to sell faster',
          whatsappMessage: "Hi Denis! I'd like to talk about a high-converting landing page.",
          deliverables: [
            'Surgical copy structure engineered for objection breaking',
            'Instant mobile loading (< 1 second)',
            'Strategic CTA triggers directly integrated with WhatsApp',
            'Meta Pixel, Google Tag Manager, and GA4 event tracking'
          ],
          timeline: '5 to 10 business days',
          idealFor: 'Product launches, specialized services, and targeted paid ad campaigns.',
          tech: ['Tailwind CSS', 'Conversion Rate Optimization', 'Meta Pixel', 'GA4'],
        },
        // DOBRA 5: PRESENÇA DIGITAL & REDES SOCIAIS
        {
          id: 'social-media',
          category: 'digital',
          productType: 'Digital presence & social',
          title: 'Be seen, remembered, and respected every day across social media',
          tagline: 'Strategic planning, consistency, authority, and high-impact visual design for social channels.',
          description: 'Social media success isn’t about posting random content out of obligation, but commanding space in your audience’s mind with authority. I handle content strategy, customer-attracting themes, and high-impact visual design for carousels and posts that stand out from competitors. You focus on closing clients while your brand stays vibrant, authoritative, and sparking conversations.',
          actionText: 'Professionalize my social channels',
          whatsappMessage: "Hi Denis! I'd like to talk about digital presence and social media.",
          deliverables: [
            'Monthly editorial calendar with high-converting formats',
            'Feed post graphics (informative carousels & key visuals)',
            'Story templates and highlight covers',
            'Persuasive copywriting and niche-tailored hashtags'
          ],
          timeline: 'Ongoing Monthly Retainer or Packages',
          idealFor: 'Brands, healthcare clinics, consultants, and companies requiring active presence.',
          tech: ['Instagram', 'LinkedIn', 'Figma', 'Photoshop', 'Meta Business'],
        },
        // DOBRA 6: TRÁFEGO PAGO & GOOGLE ADS
        {
          id: 'google-ads',
          category: 'digital',
          productType: 'Paid traffic & performance',
          title: 'Be exactly where high-intent buyers are searching right now',
          tagline: 'The direct bridge to customers actively searching for your services on Google today.',
          description: 'Every single day, hundreds of potential clients open Google searching for the exact solutions you offer. If your business doesn’t appear there, your competitor wins the deal. I create and optimize strategic Google Ads campaigns to put your brand at the very top for high-intent queries, eliminating wasted budget on empty clicks and relentlessly lowering cost per lead.',
          actionText: 'Attract clients on Google',
          whatsappMessage: "Hi Denis! I'd like to talk about paid traffic and Google Ads.",
          deliverables: [
            'High-intent keyword and competitor search research',
            'Search ad creation with persuasive copy and extensions',
            'GA4 & Google Tag Manager conversion configuration',
            'Continuous negative keyword pruning and CPL reduction'
          ],
          timeline: '5-day setup + Ongoing Management',
          idealFor: 'Local businesses, service providers, and companies seeking continuous qualified leads.',
          tech: ['Google Ads', 'Google Tag Manager', 'GA4', 'Looker Studio'],
        },

        // GRÁFICO
        // DOBRA 7: IDENTIDADE VISUAL & BRANDING
        {
          id: 'branding',
          category: 'grafico',
          productType: 'Visual identity & branding',
          title: 'A brand that inspires trust before you even mention price',
          tagline: 'The foundation of perceived value: memorable, authoritative visual identity design.',
          description: 'First impressions dictate whether clients perceive your offering as expensive or invaluable. Professional visual identity goes far beyond a pretty logo: it encapsulates the craftsmanship, personality, and trustworthiness of your business. I craft complete brand systems, from logo design to chromatic color palettes and typography, ensuring your brand commands instant respect worldwide.',
          actionText: 'Create my memorable brand',
          whatsappMessage: "Hi Denis! I'd like to talk about visual identity and branding.",
          deliverables: [
            'Exclusive vector logo and symbol (high-resolution & vector)',
            'Comprehensive application variants (light, dark, monochrome)',
            'Chromatic color system and typographic hierarchy',
            'Complete Brand Guidelines Manual in PDF and source files (.AI, .EPS, .PDF, .SVG, .PNG)'
          ],
          timeline: '10 to 15 business days',
          idealFor: 'New ventures, business rebranding, and leaders seeking authoritative premium positioning.',
          tech: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Craft'],
        },
        // DOBRA 8: DESIGN GRÁFICO & MATERIAIS IMPRESSOS
        {
          id: 'printed-materials',
          category: 'grafico',
          productType: 'Graphic design & print',
          title: 'The tactile touch of your business with flawless craftsmanship',
          tagline: 'Impeccable physical print collateral with zero prepress surprises: cards, folders, and catalogs.',
          description: 'Handing over an executive business card, a curated product catalog, or a sleek folder in a business meeting still holds immense influence over buying decisions. I design complete print assets and prepare files with total prepress technical precision, guaranteeing that colors, folds, and die-cuts translate onto paper with zero headaches or print surprises.',
          actionText: 'Produce my printed materials',
          whatsappMessage: "Hi Denis! I'd like to talk about graphic design and printed materials.",
          deliverables: [
            'Executive business card design with smart dynamic QR Code',
            'Corporate brochures, sales folders, and product catalogs',
            'Complete corporate stationery (letterheads, envelopes, presentation folders)',
            'Prepress validation with bleed, crop marks, and CMYK profiles (PDF/X-1a)'
          ],
          timeline: '5 to 8 business days',
          idealFor: 'Executive meetings, field sales, trade shows, healthcare clinics, and retail businesses.',
          tech: ['Adobe InDesign', 'Illustrator', 'Photoshop', 'PDF/X-1a Pre-press'],
        },
      ],
    },
    creations: {
      badge: 'Selected work',
      title: 'Emblematic',
      titleHighlight: 'creations & cases',
      subtitle: 'A glimpse into high-impact work delivered for regional and global market leaders.',
      viewAllCases: 'View all projects in the main portfolio',
      items: [
        {
          id: 'netshoes-run',
          title: 'Netshoes Run',
          client: 'Netshoes / Magalu',
          category: 'Event identity & landing pages',
          description: 'Visual identity, promotional landing pages, and digital engagement assets for Latin America’s premier sporting e-commerce running circuit.',
          image: 'https://piaianet.page.gd/gifs/run.gif',
          deliverables: ['Visual Identity', 'Responsive Landing Page', 'Promotional Banners', 'Runner Kits'],
          tag: 'SPORTS CAMPAIGN',
        },
        {
          id: 'netshoes-copa',
          title: 'Netshoes World Cup',
          client: 'Netshoes / Magalu',
          category: 'Gamification & digital campaign',
          description: 'Interactive digital promotions, celebratory campaign interfaces, and thematic landing pages during the World Cup, breaking traffic and engagement records.',
          image: 'https://piaianet.page.gd/gifs/copa.gif',
          deliverables: ['Interactive UI', 'Gamified Promotions', 'Dynamic Banners', 'E-commerce Theme'],
          tag: 'HIGH CONVERSION',
        },
        {
          id: 'ifood-colombia',
          title: 'iFood Colombia',
          client: 'iFood International',
          category: 'Product expansion & UX/UI',
          description: 'Localization and expansion of the iFood ecosystem for the Colombian market, including mobile flows, marketing communications, and Latin American assets.',
          image: 'https://piaianet.page.gd/imgs/ifood.jpg',
          deliverables: ['UX/UI Localization', 'Campaign Assets', 'Screen Design', 'Design System'],
          tag: 'LATAM EXPANSION',
        },
        {
          id: 'clinicorp-ds',
          title: 'Clinicorp Design System & AI',
          client: 'Clinicorp Healthtech',
          category: 'Design System & AI integration',
          description: 'Design system architecture with OKLCH semantic tokens, shadcn/ui parity, and AI model context integration for clinical dental software.',
          image: 'https://picsum.photos/id/1/800/600',
          deliverables: ['W3C Design Tokens', 'shadcn/ui Component Library', 'Living Docs', 'AI Context Guidelines'],
          tag: 'HEALTHTECH & AI',
        },
        {
          id: 'superlogica',
          title: 'Superlógica Fintech & ERP',
          client: 'Superlógica',
          category: 'Financial platforms & UX',
          description: 'UI and UX architecture for financial dashboards, condo management platforms, and recurring billing engines trusted by thousands of enterprises.',
          image: 'https://picsum.photos/id/180/800/600',
          deliverables: ['Financial Dashboards', 'Checkout Flows', 'Design System', 'User Research'],
          tag: 'FINTECH',
        },
        {
          id: 'zattini',
          title: 'Zattini Fashion E-commerce',
          client: 'Zattini / Netshoes',
          category: 'E-commerce & fashion editorials',
          description: 'Digital art direction, high-converting collection pages, and seasonal campaigns (Black Friday, Mother’s Day, Seasonal Fashion Releases).',
          image: 'https://piaianet.page.gd/gifs/lojas.gif',
          deliverables: ['Seasonal Landing Pages', 'Fashion Editorials', 'E-commerce UI', 'A/B Testing'],
          tag: 'E-COMMERCE',
        },
      ],
    },
    trustedBy: {
      badge: 'Brands & partners',
      title: 'Brands that have trusted',
      titleHighlight: 'my work',
      subtitle: 'A track record of high-impact collaboration with market leaders, unicorns, and universities.',
      partners: [
        { name: 'Netshoes', logo: '/logos/netshoes.svg', category: 'E-commerce' },
        { name: 'Zattini', logo: '/logos/zattini.svg', category: 'Fashion & E-commerce' },
        { name: 'iFood', logo: '/logos/ifood.svg', category: 'Foodtech' },
        { name: 'Visa', logo: '/logos/visa.svg', category: 'Payments' },
        { name: 'Superlógica', logo: '/logos/clientefc.svg', category: 'Fintech' },
        { name: 'Clinicorp', logo: '/logos/clinicorp.svg', category: 'Healthtech' },
        { name: 'Cielo', logo: '/logos/cielo.svg', category: 'Payments' },
        { name: 'Mercado Libre', logo: '/logos/meli.svg', category: 'Marketplace' },
        { name: 'PUC Campinas', logo: '/logos/puc.svg', category: 'Education' },
        { name: 'Athlético PR', logo: '/logos/cap.svg', category: 'Sports' },
        { name: 'TDC', logo: '/logos/tdc.svg', category: 'Tech Events' },
        { name: 'IxDA', logo: '/logos/ixda.svg', category: 'Design Community' },
      ],
    },
    calculator: {
      badge: 'Scope calculator',
      title: 'Build your custom',
      titleHighlight: 'project briefing',
      subtitle: 'Select the digital or graphic services you need to generate an instant briefing and connect with me directly.',
      step1Title: '1. Select desired services:',
      step2Title: '2. What is your timeline urgency?',
      step3Title: '3. Additional project details (optional):',
      timelineOptions: {
        urgent: { label: 'Urgent (Accelerated sprint)', desc: 'Top priority in production pipeline' },
        standard: { label: 'Standard (Regular roadmap)', desc: 'Ideal timeline with structured review milestones' },
        flexible: { label: 'Flexible / Planning ahead', desc: 'Planned launch over the coming weeks' },
      },
      summaryTitle: 'Your scope summary',
      summaryDesc: 'Click below to send your structured briefing directly via WhatsApp or Email:',
      selectedServices: 'Selected services:',
      emptySelection: 'No services selected yet. Click the cards above to build your scope.',
      urgencyLabel: 'Desired timeline:',
      whatsappButton: 'Send Briefing via WhatsApp 💬',
      emailButton: 'Send via Email ✉️',
      customNotePlaceholder: 'Tell me a bit about your company, target audience, or visual references...',
    },
    aiMetadata: {
      badge: 'Schema & AI index',
      title: 'Metadata & indexing',
      titleHighlight: 'for search engines & AIs',
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
- **Direct Contact:** dpiaia@gmail.com | WhatsApp: +55 (19) 99111-9674 | LinkedIn: linkedin.com/in/denispiaia`,
    },
    contact: {
      badge: "Let's connect",
      title: 'Ready to bring your',
      titleHighlight: 'vision to life?',
      subtitle: 'Get in touch directly via WhatsApp or fill out the quick form to receive an immediate proposal.',
      whatsappTitle: 'Direct WhatsApp',
      whatsappDesc: '+55 (19) 99111-9674 • Fast response',
      emailTitle: 'Business email',
      emailDesc: 'dpiaia@gmail.com',
      backHome: 'Back to main portfolio / home',
      formTitle: 'Send a quick message',
      formName: 'Your Name or Company',
      formEmail: 'Your Email',
      formProject: 'What is your primary goal?',
      formMessage: 'Project Details / Briefing',
      formSubmit: 'Send message',
      formSubmitting: 'Sending...',
      formSuccess: 'Message sent successfully! I will get back to you shortly.',
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      backToPortfolio: 'Volver al portafolio',
      portfolio: 'Portafolio',
      services: 'Servicios',
      cases: 'Trabajos',
      trustedBy: 'Clientes',
      calculator: 'Cotización',
      contact: 'Contacto',
      quoteCta: 'Hablemos',
    },
    hero: {
      availabilityBadge: 'Disponible para nuevos proyectos',
      greeting: 'Denis Piaia • Design Ops & Tech Leader',
      rotatingTitles: [
        { prefix: 'Design Systems para IA y ', highlight: 'frontend de alto rendimiento' },
        { prefix: 'Sitios web personales o para ', highlight: 'su empresa' },
        { prefix: 'Imágenes para ', highlight: 'redes sociales, impresos o anuncios' },
      ],
      titleStart: 'Design Systems para IA y',
      titleHighlight: 'frontend de alto rendimiento',
      titleEnd: '',
      aboutSummary: '+15 años escalando productos digitales en líderes como Netshoes, iFood y Clinicorp. De la arquitectura de tokens al código en producción.',
      deliveryPromise: '',
      ctaPrimary: 'Explorar servicios',
      ctaSecondary: 'Solicitar cotización',
      ctaWhatsApp: 'WhatsApp',
    },
    credentials: {
      title: 'Destacados & credenciales',
      items: [
        {
          number: '+15 Años',
          title: 'Experiencia de mercado',
          subtitle: 'Liderando Diseño y Frontend en grandes empresas',
          icon: 'Rocket',
        },
        {
          number: 'PUC-Campinas',
          title: 'Profesor universitario',
          subtitle: 'Formando nuevas generaciones en Diseño y Tecnología',
          icon: 'GraduationCap',
        },
        {
          number: 'Unicornios & Líderes',
          title: 'Grandes ecosistemas',
          subtitle: 'Netshoes, iFood, Superlógica, Clinicorp, Visa',
          icon: 'Building2',
        },
        {
          number: 'Conferencista',
          title: 'TDC, IxDA y eventos tech',
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
          title: 'Del diseño al código',
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
          title: 'Compromiso con plazos',
          subtitle: 'Comunicación transparente y entregas ágiles',
          icon: 'ShieldCheck',
        },
      ],
    },
    services: {
      badge: 'Soluciones a medida',
      title: 'Lo que puedo',
      titleHighlight: 'hacer por ti',
      subtitle: 'Servicios estructurados como productos: alcance claro, metodología ágil, alta calidad y plazos definidos.',
      digitalTitle: 'Digital & ingeniería',
      digitalSubtitle: 'Soluciones modernas para escalar tu presencia digital y multiplicar conversiones.',
      graficoTitle: 'Diseño gráfico & marca',
      graficoSubtitle: 'Identidad y materiales impresos de acabado refinado para generar autoridad inmediata.',
      productBadge: 'PRODUCTO',
      cardCta: 'Solicitar este servicio',
      talkOnWhatsApp: 'Hablar por WhatsApp',
      items: [
        // DIGITAL
        // DOBRA 1: MODERNIZAÇÃO DE DESIGN SYSTEM PARA IA
        {
          id: 'ai-ds-modernization',
          category: 'digital',
          productType: 'Design System & IA',
          title: 'Haz que la inteligencia artificial entienda tu design system sin errores',
          tagline: 'Modernización y adecuación para quienes ya tienen un Design System desactualizado para herramientas de IA.',
          description: 'Si has intentado usar Cursor, Claude o Copilot para programar y el resultado visual salió roto, el problema no es la IA: es tu Design System hablando un idioma obsoleto. Traduzco y migro tu biblioteca a tecnologías que la IA domina de forma nativa (React, Tailwind y tokens estandarizados). Mapeo cada color, espaciado y componente para que tus desarrolladores generen pantallas perfectas al primer comando.',
          actionText: 'Destrabar mi design system para IA',
          whatsappMessage: '¡Hola Denis! Me gustaría hablar sobre modernización de Design System para IA.',
          deliverables: [
            'Auditoría de componentes legados y mapeo de tokens',
            'Migración a React + Tailwind con TypeScript estricto',
            'Estructuración semántica para prompts precisos en Cursor y Claude',
            'Documentación viva lista para consumo de LLMs y desarrolladores'
          ],
          timeline: '10 a 20 días hábiles',
          idealFor: 'Equipos con design systems legados que enfrentan código roto o retrabajo al usar asistentes de IA.',
          tech: ['Design Tokens', 'Tailwind CSS', 'React / TypeScript', 'shadcn/ui', 'Cursor / Claude'],
        },
        // DOBRA 2: CRIAÇÃO DE DESIGN SYSTEM COMPATÍVEL COM IA
        {
          id: 'ai-ds-creation',
          category: 'digital',
          productType: 'Design system desde cero',
          title: 'Deja de reinventar la rueda: un design system listo para el futuro',
          tagline: 'Creación de la base visual y estructural completa desde cero, pensada 100% para IA.',
          description: 'Crear pantallas desde cero en cada proyecto quema tiempo, dinero y agota a tu equipo. Construyo la base visual e estructural completa de tu producto digital desde cero — pensada para trabajar mano a mano con asistentes de IA. Recibes una biblioteca viva y organizada donde crear una nueva pantalla toma minutos en lugar de semanas.',
          actionText: 'Crear mi design system',
          whatsappMessage: '¡Hola Denis! Me gustaría hablar sobre creación de Design System desde cero.',
          deliverables: [
            'Biblioteca modular de componentes (UI Kit en Figma y Código)',
            'Tokens semánticos de color, tipografía, espaciado, sombras y radios',
            'Cumplimiento de accesibilidad WCAG y variantes Dark / Light',
            'Integración lista para generar nuevas pantallas con prompts de IA'
          ],
          timeline: '15 a 30 días hábiles',
          idealFor: 'Startups, nuevos productos digitales y empresas que buscan velocidad escalable desde el primer día.',
          tech: ['Figma Variables', 'React', 'Tailwind CSS', 'Radix / shadcn', 'AI Prompts'],
        },
        // DOBRA 3: WEBSITES INSTITUCIONAIS & PROFISSIONAIS
        {
          id: 'websites',
          category: 'digital',
          productType: 'Sitios web & autoridad',
          title: 'Tu negocio necesita una casa propia en internet',
          tagline: 'Sitios web institucionales y profesionales enfocados en autoridad y propiedad de tu espacio digital.',
          description: 'Depender solo de redes sociales es construir tu empresa en terreno alquilado. Un sitio web institucional profesional es la dirección oficial de tu marca, donde clientes potenciales te encuentran en Google, entienden tu valor y sienten seguridad para cerrar tratos. Creo páginas rápidas, elegantes y listas para posicionar tu nombre en la cima.',
          actionText: 'Construir mi casa digital',
          whatsappMessage: '¡Hola Denis! Me gustaría hablar sobre creación de sitio web institucional.',
          deliverables: [
            'Diseño exclusivo alineado con la autoridad de tu marca',
            'Desarrollo responsivo con puntuación 95+ en PageSpeed',
            'Optimización técnica para posicionamiento orgánico en Google (SEO)',
            'Integración con WhatsApp, formularios y dominio personalizado'
          ],
          timeline: '10 a 20 días hábiles',
          idealFor: 'Empresas, consultores, clínicas y profesionales que desean consolidar su autoridad.',
          tech: ['React / Next.js', 'Tailwind CSS', 'SEO Técnico', 'Framer Motion'],
        },
        // DOBRA 4: LANDING PAGES DE ALTA CONVERSÃO
        {
          id: 'landing-pages',
          category: 'digital',
          productType: 'Landing pages & conversión',
          title: 'Una página con un único objetivo: transformar visitas en ventas',
          tagline: 'Páginas de alta conversión con foco en urgencia, validación rápida y ventas directas.',
          description: 'Si tienes un producto nuevo o una campaña que necesita retorno rápido, enviar personas a una página genérica es perder dinero. La Landing Page es un embudo quirúrgico: toma al cliente de la mano, explica tu oferta con claridad, disuelve objeciones y se enfoca en una sola acción — comprar o contactar por WhatsApp. Carga instantánea en móviles y diseñada para convertir.',
          actionText: 'Quero vender más rápido',
          whatsappMessage: '¡Hola Denis! Me gustaría hablar sobre landing page de alta conversión.',
          deliverables: [
            'Estructura de copy quirúrgica para eliminación de objeciones',
            'Carga instantánea en móviles (menos de 1 segundo)',
            'Botones de acción estratégicos con enlace directo a WhatsApp',
            'Seguimiento de píxeles (Meta, Google) e eventos de conversión'
          ],
          timeline: '5 a 10 días hábiles',
          idealFor: 'Lanzamientos de productos, servicios específicos y campañas de tráfico pago.',
          tech: ['Tailwind CSS', 'Conversion Rate Optimization', 'Meta Pixel', 'GA4'],
        },
        // DOBRA 5: PRESENÇA DIGITAL & REDES SOCIAIS
        {
          id: 'social-media',
          category: 'digital',
          productType: 'Presencia digital & redes',
          title: 'Sé visto, recordado y respetado todos los días en redes',
          tagline: 'Estrategia de contenidos, constancia, autoridad y diseño visual de alto impacto para redes sociales.',
          description: 'Estar en redes sociales no es publicar por obligación, sino ocupar espacio en la mente de tu público con autoridad. Me encargo de la planificación, temas estratégicos y diseño visual de publicaciones y carruseles profesionales. Tú te enfocas en atender clientes mientras tu marca se mantiene activa y generando conversaciones.',
          actionText: 'Profesionalizar mis redes',
          whatsappMessage: '¡Hola Denis! Me gustaría hablar sobre presencia digital y redes sociales.',
          deliverables: [
            'Calendario editorial con temas y formatos estratégicos',
            'Diseño de posts para feed (carruseles informativos e estáticos)',
            'Plantillas para historias y portadas para destacados',
            'Redacción persuasiva y hashtags optimizados por nicho'
          ],
          timeline: 'Gestão Continua (Mensual) o Paquetes',
          idealFor: 'Marcas, clínicas, consultores y empresas que necesitan presencia activa e impecable.',
          tech: ['Instagram', 'LinkedIn', 'Figma', 'Photoshop', 'Meta Business'],
        },
        // DOBRA 6: TRÁFEGO PAGO & GOOGLE ADS
        {
          id: 'google-ads',
          category: 'digital',
          productType: 'Tráfico pago & rendimiento',
          title: 'Ponte exactamente frente a quienes quieren comprarte ahora',
          tagline: 'El puente directo con clientes que ya están buscando tus servicios en Google.',
          description: 'Todos os días, cientos de personas abren Google buscando activamente la solución que vendes. Si tu negocio no aparece ahí, tu competencia se queda con la venta. Creo y optimizo campañas estratégicas en Google Ads para posicionarte en primer lugar ante el público correcto, sin desperdiciar presupuesto y reduciendo el costo por contacto.',
          actionText: 'Atraer clientes en Google',
          whatsappMessage: '¡Hola Denis! Me gustaría hablar sobre tráfico pago e Google Ads.',
          deliverables: [
            'Investigación de palabras clave con alta intención de compra',
            'Creación y estructuración técnica de anuncios en Red de Búsqueda',
            'Configuración de conversiones en Google Analytics 4 y GTM',
            'Optimización continua de términos negativos y reducción del costo por lead'
          ],
          timeline: 'Setup en 5 días + Gestión Continua',
          idealFor: 'Negocios locales, proveedores de servicios y empresas que requieren nuevos prospectos comerciales a diario.',
          tech: ['Google Ads', 'Google Tag Manager', 'GA4', 'Looker Studio'],
        },

        // GRÁFICO
        // DOBRA 7: IDENTIDADE VISUAL & BRANDING
        {
          id: 'branding',
          category: 'grafico',
          productType: 'Identidad visual & branding',
          title: 'Una marca que inspira confianza antes de que digas el precio',
          tagline: 'El nacimiento de la percepción de valor: identidad visual profesional y memorable.',
          description: 'La primera impresión define si el cliente percibirá tu producto como costoso o valioso. Una identidad visual profesional va mucho más allá de un dibujo: refleja la solidez y el cuidado de tu trabajo. Desarrollo marcas completas, desde el logotipo hasta paletas de colores y tipografía, para proyectar credibilidad instantánea.',
          actionText: 'Crear mi marca memorable',
          whatsappMessage: '¡Hola Denis! Me gustaría hablar sobre identidad visual y branding.',
          deliverables: [
            'Logotipo exclusivo vectorizado (símbolo + tipografía)',
            'Variaciones de aplicación (positivo, negativo, monocromático)',
            'Paleta de colores estratégica y sistema tipográfico',
            'Manual de Identidad Visual en PDF y archivos finales (.AI, .EPS, .PDF, .SVG, .PNG)'
          ],
          timeline: '10 a 15 días hábiles',
          idealFor: 'Nuevos negocios, rebranding de marcas consolidadas y posicionamiento de alto valor.',
          tech: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Craft'],
        },
        // DOBRA 8: DESIGN GRÁFICO & MATERIAIS IMPRESSOS
        {
          id: 'printed-materials',
          category: 'grafico',
          productType: 'Diseño gráfico & impresos',
          title: 'El toque físico de tu empresa con un acabado impecable',
          tagline: 'Presencia física impecable y sin sorpresas en imprenta: tarjetas, folders y catálogos.',
          description: 'Entregar una tarjeta de presentación de alta calidad o un catálogo bien diagramado en una reunión todavía tiene un peso enorme en la decisión de compra. Creo piezas gráficas completas y preparo archivos con rigor técnico total para imprenta (CMYK, sangrías, marcas de corte), garantizando un resultado idéntico a lo planeado en papel.',
          actionText: 'Producir mis materiales impresos',
          whatsappMessage: '¡Hola Denis! Me gustaría hablar sobre diseño gráfico e materiales impresos.',
          deliverables: [
            'Diseño de tarjetas de presentación ejecutivas (con Código QR inteligente)',
            'Folders institucionales, folletos comerciales y catálogos diagramados',
            'Papelería corporativa completa (hojas membretadas, carpetas y sobres)',
            'Validación técnica con sangrías, marcas de corte y perfiles CMYK (PDF/X-1a)'
          ],
          timeline: '5 a 8 días hábiles',
          idealFor: 'Reuniones ejecutivas, fuerzas de venta, ferias, consultorios, clínicas y comercios.',
          tech: ['Adobe InDesign', 'Illustrator', 'Photoshop', 'PDF/X-1a Pre-press'],
        },
      ],
    },
    creations: {
      badge: 'Portafolio seleccionado',
      title: 'Algunas',
      titleHighlight: 'creaciones emblemáticas',
      subtitle: 'Conoce un poco del trabajo entregado para marcas de impacto nacional e internacional.',
      viewAllCases: 'Ver todos los proyectos en el portafolio',
      items: [
        {
          id: 'netshoes-run',
          title: 'Netshoes Run',
          client: 'Netshoes / Magalu',
          category: 'Identidad de evento & landing pages',
          description: 'Creación de la identidad visual, páginas promocionales y piezas de interacción para el circuito de carreras más grande del e-commerce deportivo en Latinoamérica.',
          image: 'https://piaianet.page.gd/gifs/run.gif',
          deliverables: ['Identidad Visual', 'Landing Page Responsiva', 'Banners Promocionales', 'Kits de Carrera'],
          tag: 'CAMPAÑA DEPORTIVA',
        },
        {
          id: 'netshoes-copa',
          title: 'Netshoes en el Mundial',
          client: 'Netshoes / Magalu',
          category: 'Gamificación & campaña digital',
          description: 'Acciones digitales interactivas, interfaces conmemorativas y landing pages temáticas durante la Copa del Mundo, alcanzando récords de tráfico.',
          image: 'https://piaianet.page.gd/gifs/copa.gif',
          deliverables: ['Interfaz Interactiva', 'Gamificación Promocional', 'Banners Dinámicos', 'E-commerce Theme'],
          tag: 'ALTA CONVERSIÓN',
        },
        {
          id: 'ifood-colombia',
          title: 'iFood Colombia',
          client: 'iFood Internacional',
          category: 'Expansión de producto & UX/UI',
          description: 'Adaptación del ecosistema de iFood para el mercado colombiano, incluyendo flujos de la app, comunicación promocional e identidad visual.',
          image: 'https://piaianet.page.gd/imgs/ifood.jpg',
          deliverables: ['Localización UX/UI', 'Comunicación Promocional', 'Diseño de Pantallas', 'Design System'],
          tag: 'EXPANSIÓN LATAM',
        },
        {
          id: 'clinicorp-ds',
          title: 'Clinicorp Design System & AI',
          client: 'Clinicorp Healthtech',
          category: 'Design System & integración IA',
          description: 'Desarrollo del sistema de diseño con tokens semánticos OKLCH, paridad atómica con shadcn/ui e integración con modelos de IA para software clínico.',
          image: 'https://picsum.photos/id/1/800/600',
          deliverables: ['Design Tokens W3C', 'Biblioteca shadcn/ui', 'Documentación Viva', 'AI Context Guidelines'],
          tag: 'HEALTHTECH & IA',
        },
        {
          id: 'superlogica',
          title: 'Superlógica Fintech & ERP',
          client: 'Superlógica',
          category: 'Plataformas financieras & UX',
          description: 'Interfaz y arquitectura de dashboards financieros, gestión de condominios y flujos de cobro recurrente para miles de empresas.',
          image: 'https://picsum.photos/id/180/800/600',
          deliverables: ['Dashboards Financieros', 'Flujos de Checkout', 'Design System', 'User Research'],
          tag: 'FINTECH',
        },
        {
          id: 'zattini',
          title: 'Zattini Fashion E-commerce',
          client: 'Zattini / Netshoes',
          category: 'E-commerce & editoriales de moda',
          description: 'Direção de arte digital, landing pages de coleções e campanhas estacionais de rápida conversão.',
          image: 'https://piaianet.page.gd/gifs/lojas.gif',
          deliverables: ['Landing Pages Estacionales', 'Editoriales de Moda', 'UI de E-commerce', 'Pruebas A/B'],
          tag: 'E-COMMERCE',
        },
      ],
    },
    trustedBy: {
      badge: 'Marcas & aliados',
      title: 'Marcas que han confiado en',
      titleHighlight: 'mi trabajo',
      subtitle: 'Historial de colaboración con líderes de mercado, startups y universidades.',
      partners: [
        { name: 'Netshoes', logo: '/logos/netshoes.svg', category: 'E-commerce' },
        { name: 'Zattini', logo: '/logos/zattini.svg', category: 'Moda & e-commerce' },
        { name: 'iFood', logo: '/logos/ifood.svg', category: 'Foodtech' },
        { name: 'Visa', logo: '/logos/visa.svg', category: 'Pagos' },
        { name: 'Superlógica', logo: '/logos/clientefc.svg', category: 'Fintech' },
        { name: 'Clinicorp', logo: '/logos/clinicorp.svg', category: 'Healthtech' },
        { name: 'Cielo', logo: '/logos/cielo.svg', category: 'Medios de pago' },
        { name: 'Mercado Libre', logo: '/logos/meli.svg', category: 'Marketplace' },
        { name: 'PUC Campinas', logo: '/logos/puc.svg', category: 'Educación' },
        { name: 'Athlético PR', logo: '/logos/cap.svg', category: 'Deportes' },
        { name: 'TDC', logo: '/logos/tdc.svg', category: 'Eventos tech' },
        { name: 'IxDA', logo: '/logos/ixda.svg', category: 'Comunidad design' },
      ],
    },
    calculator: {
      badge: 'Calculadora de alcance',
      title: 'Arma tu',
      titleHighlight: 'briefing personalizado',
      subtitle: 'Selecciona los servicios digitales o gráficos de tu interés para generar un mensaje listo y hablar directamente conmigo.',
      step1Title: '1. Selecciona los servicios deseados:',
      step2Title: '2. ¿Cuál es la urgencia de tu plazo?',
      step3Title: '3. Detalles adicionales (opcional):',
      timelineOptions: {
        urgent: { label: 'Urgente (Sprint acelerada)', desc: 'Máxima prioridad en la línea de producción' },
        standard: { label: 'Estándar (Cronograma regular)', desc: 'Tiempo ideal con etapas estructuradas de aprobación' },
        flexible: { label: 'Flexible / Planificación', desc: 'Inicio planificado para las próximas semanas' },
      },
      summaryTitle: 'Resumen de tu solicitud',
      summaryDesc: 'Haz clic abajo para enviar tu briefing listo por WhatsApp o por Correo:',
      selectedServices: 'Servicios seleccionados:',
      emptySelection: 'Ningún servicio seleccionado todavía. Haz clic en las tarjetas de arriba para armar tu alcance.',
      urgencyLabel: 'Plazo deseado:',
      whatsappButton: 'Enviar briefing por WhatsApp 💬',
      emailButton: 'Enviar por correo ✉️',
      customNotePlaceholder: 'Cuéntame un poco sobre tu empresa, público objetivo o referencias visuales...',
    },
    aiMetadata: {
      badge: 'Schema & IA',
      title: 'Metadados & indexación',
      titleHighlight: 'para buscadores e IAs',
      subtitle: 'Estructura semántica JSON-LD y datos optimizados para motores de búsqueda y agentes de inteligencia artificial (ChatGPT, Gemini, Perplexity, Claude).',
      copyPromptLabel: 'Copiar perfil en Markdown para IAs',
      copiedSuccess: '¡Perfil copiado al portapapeles!',
      forHumansTitle: 'Sobre Denis Piaia (Resumen para IAs):',
      forAIsTitle: 'JSON-LD Structured Data (Schema.org):',
      aiPromptSummary: `### Denis Piaia - Especialista en Diseño de Producto, Frontend y Design Systems con IA
- **Experiencia:** +15 años de trayectoria en grandes empresas (Netshoes, iFood, Clinicorp, Superlógica) y Profesor Universitario en la PUC-Campinas.
- **Servicios Digitales:** Adecuación de Design Systems para IA (W3C Tokens, AGENTS.md, shadcn/ui), Creación de Sitios Web (React, Next.js, Tailwind), Landing Pages de alta conversión (CRO, micro-interacciones) e Tráfico Pago Google Ads.
- **Servicios Gráficos:** Creación de Logos e Identidad Visual corporativa, Folletos y Folders promocionales, Tarjetas de Presentación y Papelería ejecutiva.
- **Disponibilidad:** Proyectos puntuales, sprints aceleradas e consultoría estratégica en Brasil y en el exterior.
- **Contacto Directo:** dpiaia@gmail.com | WhatsApp: +55 (19) 99111-9674 | LinkedIn: linkedin.com/in/denispiaia`,
    },
    contact: {
      badge: 'Hablemos',
      title: '¿Listo para llevar tu',
      titleHighlight: 'proyecto a otro nivel?',
      subtitle: 'Contáctame directamente por WhatsApp o completa el formulario para recibir una propuesta rápida.',
      whatsappTitle: 'WhatsApp directo',
      whatsappDesc: '+55 (19) 99111-9674 • Respuesta rápida',
      emailTitle: 'Correo comercial',
      emailDesc: 'dpiaia@gmail.com',
      backHome: 'Volver a la página principal / portafolio',
      formTitle: 'Envía un mensaje rápido',
      formName: 'Tu nombre o empresa',
      formEmail: 'Tu correo',
      formProject: '¿Cuál es tu objetivo?',
      formMessage: 'Mensaje o briefing del proyecto',
      formSubmit: 'Enviar mensaje',
      formSubmitting: 'Enviando...',
      formSuccess: '¡Mensaje enviado con éxito! Me pondré en contacto pronto.',
      rights: 'Todos los derechos reservados.',
    },
  },
};
