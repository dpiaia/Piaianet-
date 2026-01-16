export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      testimonials: 'Depoimentos',
      contact: 'Contato',
    },
    hero: {
      badge: 'Portfólio Profissional',
      titleHighlight: "I'm Denis.",
      titleStart: 'Hi There,',
      intro: 'UX Design Leader com mais de 10 anos de experiência criando produtos digitais intuitivos, acessíveis e focados na conversão e satisfação do usuário.',
      ctaProjects: 'Ver Projetos',
      ctaContact: 'Entrar em Contato',
      scroll: 'Scroll',
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Mim',
      p1: 'Minha jornada no design começou na interseção entre tecnologia e psicologia. Acredito que o bom design não é apenas sobre pixels bonitos, mas sobre resolver problemas reais de forma elegante e invisível.',
      p2: 'Como UX Leader, meu foco mudou da execução individual para a orquestração de experiências. Trabalho lado a lado com PMs e Engenheiros para garantir que a voz do usuário seja ouvida em cada etapa do desenvolvimento.',
      p3: 'Fora do trabalho, sou entusiasta de fotografia urbana e estudo neurociência cognitiva aplicada ao design.',
      skills: {
        leadership: { title: "Liderança de Equipe", desc: "Mentoria e gestão de times de alta performance." },
        research: { title: "User Research", desc: "Decisões baseadas em dados e comportamento real." },
        designSystems: { title: "Design Systems", desc: "Escalabilidade e consistência visual." },
        prototyping: { title: "Prototipagem Ágil", desc: "Validação rápida de hipóteses e conceitos." },
      }
    },
    experience: {
      title: 'Trajetória',
      titleHighlight: 'Profissional',
      subtitle: 'Liderança e impacto em grandes players do mercado de tecnologia.',
      jobs: [
        {
          role: "Design Manager",
          company: "Clinicorp Solutions",
          period: "2023 - Presente",
          description: "Liderança estratégica da equipe de Product Design focada em SaaS para gestão de clínicas. Responsável pela evolução da maturidade de design (Design Ops), mentoria do time e alinhamento de visão de produto junto aos C-levels para escalar a plataforma.",
          skills: ["Liderança", "SaaS", "Design Ops"]
        },
        {
          role: "UX Tech Leader",
          company: "Mercado Livre",
          period: "2022 - 2023",
          description: "Atuação como referência técnica em UX no maior e-commerce da América Latina. Liderei iniciativas de Design Engineering, garantindo a fidelidade e escalabilidade do Design System entre protótipos e código em produção em múltiplos países.",
          skills: ["E-commerce", "Design Systems", "Tech Leadership"]
        },
        {
          role: "Senior Product Designer",
          company: "IFood / Sindelantal",
          period: "2018 - 2022",
          description: "Foco na experiência do usuário para o mercado de Food Delivery. Liderei projetos cruciais para a operação internacional (Sindelantal - México) e iFood Brasil, otimizando jornadas de descoberta de restaurantes e checkout para milhões de usuários.",
          skills: ["FoodTech", "Mobile First", "Internationalization"]
        },
        {
          role: "Head of Design",
          company: "Superlógica / PJBank",
          period: "2009 - 2018",
          description: "Uma jornada de quase uma década, evoluindo de designer para a liderança da área. Estruturei o departamento de design do zero, conduzi o rebranding completo da Superlógica e atuei no lançamento e consolidação da experiência digital do PJBank.",
          skills: ["Fintech", "Team Building", "Branding"]
        }
      ],
      consulting: {
        title: 'Consultoria &',
        titleHighlight: 'Parcerias Estratégicas',
        desc: 'Projetos paralelos, freelas e consultorias de alto impacto.',
        label: 'Projetos Entregues'
      }
    },
    projects: {
      title: 'Projetos',
      titleHighlight: 'Selecionados',
      subtitle: 'Clique nos cards para ver o estudo de caso detalhado.',
      ctaBehance: 'Ver Behance Completo',
      items: [
        {
          title: "CliniDS",
          category: "DESIGNOPS • HEALTHTECH",
          shortDescription: "Criando um Design System para a Clinicorp.",
          challenge: "Escalar a consistência visual e funcional entre múltiplos módulos da plataforma Clinicorp estava se tornando insustentável, gerando débito técnico e de design.",
          solution: "Criação e implementação do CliniDS: uma biblioteca de componentes centralizada, documentada e agnóstica, facilitando a colaboração entre designers e desenvolvedores.",
          results: [
            "Aumento de 40% na velocidade de entrega de novas telas.",
            "Redução drástica de inconsistências visuais no produto.",
            "Adoção de 100% pelo time de engenharia em 6 meses."
          ]
        },
        {
          title: "Acelerando o crescimento do iFood em Latam",
          category: "ONBOARDING • FOODTECH",
          shortDescription: "Landing Page automatizada para cadastros de novos restaurantes.",
          challenge: "O processo de cadastro de parceiros era manual e burocrático, limitando a velocidade de expansão agressiva necessária para o mercado Latino-americano.",
          solution: "Desenvolvimento de um fluxo de onboarding self-service automatizado, com validação de documentos em tempo real e UX otimizada para conversão.",
          results: [
            "Redução de 70% no tempo médio de aprovação de restaurantes.",
            "Crescimento exponencial da base de parceiros no México e Colômbia.",
            "Melhoria significativa no NPS de entrada dos parceiros."
          ]
        },
        {
          title: "Recriando o agendamento de consultas",
          category: "CALENDAR • HEALTHTECH",
          shortDescription: "Simplificando a complexidade de agendamentos.",
          challenge: "A gestão de agenda complexa com múltiplos profissionais e cadeiras gerava conflitos de horários e dificuldade de visualização para as recepcionistas.",
          solution: "Redesign completo da interface de agenda focado em usabilidade cognitiva, com recursos de 'arrastar e soltar' e sugestões inteligentes de horários.",
          results: [
            "Otimização de 20% na ocupação das cadeiras/salas.",
            "Redução de cliques para realizar um agendamento.",
            "Feedback extremamente positivo das recepcionistas (Power Users)."
          ]
        },
        {
          title: "Projetos variados com Inteligência Artificial",
          category: "AI • VIBEDESIGN",
          shortDescription: "Compilado de projetos que fiz com uso das IAs.",
          challenge: "Explorar como as novas ferramentas de IA Generativa podem ser integradas ao fluxo de trabalho de design para expandir a criatividade e eficiência.",
          solution: "Uma coleção de experimentos visuais e funcionais utilizando Midjourney, Stable Diffusion e LLMs para prototipagem rápida e geração de assets.",
          results: [
            "Criação de identidades visuais conceituais em tempo recorde.",
            "Exploração de novas estéticas (Vibe Design).",
            "Automação de tarefas repetitivas no processo de discovery."
          ]
        }
      ],
      modal: {
        challenge: 'O Desafio',
        tech: 'Tech & Tools',
        solution: 'A Solução',
        results: 'Resultados Alcançados',
        confidential: 'Confidencial © 2024',
        close: 'Fechar Case'
      }
    },
    testimonials: {
      title: 'O que dizem',
      titleHighlight: 'Colegas e Clientes',
      subtitle: 'Feedback real de quem já trabalhou comigo em projetos internacionais e de alta complexidade.',
      items: [
        {
          quote: "Denis é um designer incrível com quem tive o prazer de trabalhar, ele é um product designer completo, com habilidades em pesquisa, prototipagem e entrega de design.",
        },
        {
          quote: "Denis é o tipo de pessoa que faz o possível para encontrar e corrigir problemas onde quer que a empresa precise, sempre tentando melhorar.",
        },
        {
          quote: "Denis tem um coração enorme e está sempre preocupado com as pessoas ao seu redor. Ele é alguém que se apaixona pelos problemas e fará de tudo para aprender mais sobre o que pode ser feito para resolvê-los da melhor maneira possível :)",
        },
        {
          quote: "Tive a oportunidade de ser liderado pelo Denis em um momento em que me faltava confiança e direção. Sua liderança foi fundamental para que eu encontrasse meu caminho e desenvolvesse meu trabalho de uma forma que não sabia que era capaz.",
        },
        {
          quote: "Um professor dedicado e muito elogiado por suas turmas. Além de colaborativo e especialista em sua área, Denis tem empatia de sobra.",
        },
        {
          quote: "Um profissional completo, mentor, palestrante e, acima de tudo, um grande amigo. É raro encontrar alguém que entenda tanto de UI/UX e tenha tanta empatia pelo usuário. É um profissional inquieto, sempre questionador, proativo e entregando mais do que lhe é pedido.",
        }
      ]
    },
    contact: {
      title: 'Vamos construir algo',
      titleHighlight: 'Incrível',
      titleEnd: 'juntos?',
      subtitle: 'Estou sempre aberto a discutir design de produto, colaborar em novos projetos ou falar sobre oportunidades de liderança.',
      cta: 'Mande um Olá 👋',
      rights: 'Todos os direitos reservados.',
      location: 'na ensolarada cidade de Campinas/SP.'
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      badge: 'Professional Portfolio',
      titleHighlight: "I'm Denis.",
      titleStart: 'Hi There,',
      intro: 'UX Design Leader with over 10 years of experience creating intuitive, accessible digital products focused on conversion and user satisfaction.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      scroll: 'Scroll',
    },
    about: {
      title: 'About',
      titleHighlight: 'Me',
      p1: 'My journey in design began at the intersection of technology and psychology. I believe good design isn\'t just about pretty pixels, but about solving real problems elegantly and invisibly.',
      p2: 'As a UX Leader, my focus shifted from individual execution to orchestrating experiences. I work side-by-side with PMs and Engineers to ensure the user voice is heard at every stage of development.',
      p3: 'Outside of work, I\'m an urban photography enthusiast and I study cognitive neuroscience applied to design.',
      skills: {
        leadership: { title: "Team Leadership", desc: "Mentoring and managing high-performance teams." },
        research: { title: "User Research", desc: "Decisions based on data and real behavior." },
        designSystems: { title: "Design Systems", desc: "Scalability and visual consistency." },
        prototyping: { title: "Agile Prototyping", desc: "Rapid validation of hypotheses and concepts." },
      }
    },
    experience: {
      title: 'Professional',
      titleHighlight: 'Journey',
      subtitle: 'Leadership and impact at major technology players.',
      jobs: [
        {
          role: "Design Manager",
          company: "Clinicorp Solutions",
          period: "2023 - Present",
          description: "Strategic leadership of the Product Design team focused on SaaS for clinic management. Responsible for evolving design maturity (Design Ops), team mentoring, and aligning product vision with C-levels to scale the platform.",
          skills: ["Leadership", "SaaS", "Design Ops"]
        },
        {
          role: "UX Tech Leader",
          company: "Mercado Libre",
          period: "2022 - 2023",
          description: "Acted as a technical reference in UX at the largest e-commerce in Latin America. Led Design Engineering initiatives, ensuring fidelity and scalability of the Design System between prototypes and production code across multiple countries.",
          skills: ["E-commerce", "Design Systems", "Tech Leadership"]
        },
        {
          role: "Senior Product Designer",
          company: "IFood / Sindelantal",
          period: "2018 - 2022",
          description: "Focused on user experience for the Food Delivery market. Led crucial projects for international operations (Sindelantal - Mexico) and iFood Brazil, optimizing restaurant discovery journeys and checkout for millions of users.",
          skills: ["FoodTech", "Mobile First", "Internationalization"]
        },
        {
          role: "Head of Design",
          company: "Superlógica / PJBank",
          period: "2009 - 2018",
          description: "A journey of almost a decade, evolving from designer to area leadership. Structured the design department from scratch, led the complete rebranding of Superlógica, and acted in the launch and consolidation of PJBank's digital experience.",
          skills: ["Fintech", "Team Building", "Branding"]
        }
      ],
      consulting: {
        title: 'Consulting &',
        titleHighlight: 'Strategic Partnerships',
        desc: 'Side projects, freelance work, and high-impact consulting.',
        label: 'Delivered Projects'
      }
    },
    projects: {
      title: 'Selected',
      titleHighlight: 'Projects',
      subtitle: 'Click on the cards to view the detailed case study.',
      ctaBehance: 'View Full Behance',
      items: [
        {
          title: "CliniDS",
          category: "DESIGNOPS • HEALTHTECH",
          shortDescription: "Creating a Design System for Clinicorp.",
          challenge: "Scaling visual and functional consistency across multiple Clinicorp platform modules was becoming unsustainable, generating technical and design debt.",
          solution: "Creation and implementation of CliniDS: a centralized, documented, and agnostic component library, facilitating collaboration between designers and developers.",
          results: [
            "40% increase in delivery speed for new screens.",
            "Drastic reduction of visual inconsistencies in the product.",
            "100% adoption by the engineering team in 6 months."
          ]
        },
        {
          title: "Accelerating iFood's growth in Latam",
          category: "ONBOARDING • FOODTECH",
          shortDescription: "Automated Landing Page for new restaurant registrations.",
          challenge: "The partner registration process was manual and bureaucratic, limiting the aggressive expansion speed needed for the Latin American market.",
          solution: "Development of an automated self-service onboarding flow, with real-time document validation and UX optimized for conversion.",
          results: [
            "70% reduction in average restaurant approval time.",
            "Exponential growth of the partner base in Mexico and Colombia.",
            "Significant improvement in partner entry NPS."
          ]
        },
        {
          title: "Reinventing appointment scheduling",
          category: "CALENDAR • HEALTHTECH",
          shortDescription: "Simplifying scheduling complexity.",
          challenge: "Managing complex schedules with multiple professionals and chairs generated scheduling conflicts and visualization difficulties for receptionists.",
          solution: "Complete redesign of the schedule interface focused on cognitive usability, with 'drag and drop' features and intelligent time suggestions.",
          results: [
            "20% optimization in chair/room occupancy.",
            "Reduction in clicks to make an appointment.",
            "Extremely positive feedback from receptionists (Power Users)."
          ]
        },
        {
          title: "Various AI Projects",
          category: "AI • VIBEDESIGN",
          shortDescription: "Compilation of projects I did using AI.",
          challenge: "Explore how new Generative AI tools can be integrated into the design workflow to expand creativity and efficiency.",
          solution: "A collection of visual and functional experiments using Midjourney, Stable Diffusion, and LLMs for rapid prototyping and asset generation.",
          results: [
            "Creation of conceptual visual identities in record time.",
            "Exploration of new aesthetics (Vibe Design).",
            "Automation of repetitive tasks in the discovery process."
          ]
        }
      ],
      modal: {
        challenge: 'The Challenge',
        tech: 'Tech & Tools',
        solution: 'The Solution',
        results: 'Key Results',
        confidential: 'Confidential © 2024',
        close: 'Close Case'
      }
    },
    testimonials: {
      title: 'What',
      titleHighlight: 'Colleagues & Clients Say',
      subtitle: 'Real feedback from those who have worked with me on international and high-complexity projects.',
      items: [
        {
          quote: "Denis is an amazing designer that I had the pleasure to work with, he is a complete product designer, and he has skills in research, prototyping, and design delivery.",
        },
        {
          quote: "Denis is the kind of person that goes off his way to find and fix issues wherever the company needs it, always trying to improve.",
        },
        {
          quote: "Denis has a big heart and is always concerned about the people around him. He's someone who falls in love with problems and will do everything to learn more about what can be done to solve them in the best way possible :)",
        },
        {
          quote: "I had the opportunity to be led by Denis at a time when I lacked confidence and direction. His leadership was fundamental in enabling me to find my way and develop my work in a way that I didn't know I was capable of.",
        },
        {
          quote: "A dedicated professor who is highly praised by his classes. As well as being collaborative and an expert in his field, Denis has empathy to spare.",
        },
        {
          quote: "A complete professional, mentor, speaker and, above all, a great friend. It's rare to find someone who understands so much about UI/UX and has so much empathy for the user. He's a restless professional, always questioning, proactive and offering more than is asked of him.",
        }
      ]
    },
    contact: {
      title: 'Let\'s build something',
      titleHighlight: 'Amazing',
      titleEnd: 'together?',
      subtitle: 'I\'m always open to discussing product design, collaborating on new projects, or talking about leadership opportunities.',
      cta: 'Say Hello 👋',
      rights: 'All rights reserved.',
      location: 'in the sunny city of Campinas/SP.'
    }
  },
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Portafolio Profesional',
      titleHighlight: "I'm Denis.",
      titleStart: 'Hi There,',
      intro: 'UX Design Leader con más de 10 años de experiencia creando productos digitales intuitivos, accesibles y enfocados en la conversión y satisfacción del usuario.',
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Ponerse en contacto',
      scroll: 'Scroll',
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Mí',
      p1: 'Mi viaje en el diseño comenzó en la intersección entre tecnología y psicología. Creo que un buen diseño no se trata solo de píxeles bonitos, sino de resolver problemas reales de manera elegante e invisible.',
      p2: 'Como UX Leader, mi enfoque cambió de la ejecución individual a la orquestación de experiencias. Trabajo codo a codo con PMs e Ingenieros para asegurar que la voz del usuario sea escuchada en cada etapa del desarrollo.',
      p3: 'Fuera del trabajo, soy un entusiasta de la fotografía urbana y estudio neurociencia cognitiva aplicada al diseño.',
      skills: {
        leadership: { title: "Liderazgo de Equipo", desc: "Mentoría y gestión de equipos de alto rendimiento." },
        research: { title: "User Research", desc: "Decisiones basadas en datos y comportamiento real." },
        designSystems: { title: "Design Systems", desc: "Escalabilidad y consistencia visual." },
        prototyping: { title: "Prototipado Ágil", desc: "Validación rápida de hipótesis y conceptos." },
      }
    },
    experience: {
      title: 'Trayectoria',
      titleHighlight: 'Profesional',
      subtitle: 'Liderazgo e impacto en grandes actores del mercado tecnológico.',
      jobs: [
        {
          role: "Design Manager",
          company: "Clinicorp Solutions",
          period: "2023 - Presente",
          description: "Liderazgo estratégico del equipo de Product Design enfocado en SaaS para la gestión de clínicas. Responsable de la evolución de la madurez del diseño (Design Ops), mentoría del equipo y alineación de la visión del producto con los C-levels para escalar la plataforma.",
          skills: ["Liderazgo", "SaaS", "Design Ops"]
        },
        {
          role: "UX Tech Leader",
          company: "Mercado Libre",
          period: "2022 - 2023",
          description: "Actuación como referencia técnica en UX en el mayor e-commerce de América Latina. Lideré iniciativas de Design Engineering, garantizando la fidelidad y escalabilidad del Design System entre prototipos y código en producción en múltiples países.",
          skills: ["E-commerce", "Design Systems", "Tech Leadership"]
        },
        {
          role: "Senior Product Designer",
          company: "IFood / Sindelantal",
          period: "2018 - 2022",
          description: "Enfoque en la experiencia del usuario para el mercado de Food Delivery. Lideré proyectos cruciales para la operación internacional (Sindelantal - México) and iFood Brasil, optimizando jornadas de descubrimiento de restaurantes y checkout para millones de usuarios.",
          skills: ["FoodTech", "Mobile First", "Internacionalización"]
        },
        {
          role: "Head of Design",
          company: "Superlógica / PJBank",
          period: "2009 - 2018",
          description: "Un viaje de casi una década, evolucionando de diseñador al liderazgo del área. Estructuré el departamento de diseño desde cero, conduje el rebranding completo de Superlógica y actué en el lanzamiento y consolidación de la experiencia digital de PJBank.",
          skills: ["Fintech", "Team Building", "Branding"]
        }
      ],
      consulting: {
        title: 'Consultoría y',
        titleHighlight: 'Alianzas Estratégicas',
        desc: 'Proyectos paralelos, freelance y consultorías de alto impacto.',
        label: 'Proyectos Entregados'
      }
    },
    projects: {
      title: 'Proyectos',
      titleHighlight: 'Seleccionados',
      subtitle: 'Haga clic en las tarjetas para ver el estudio de caso detallado.',
      ctaBehance: 'Ver Behance Completo',
      items: [
        {
          title: "CliniDS",
          category: "DESIGNOPS • HEALTHTECH",
          shortDescription: "Creando un Design System para Clinicorp.",
          challenge: "Escalar la consistencia visual y funcional entre múltiples módulos de la plataforma Clinicorp se estaba volviendo insostenible, generando deuda técnica y de diseño.",
          solution: "Creación e implementación de CliniDS: una biblioteca de componentes centralizada, documentada y agnóstica, facilitando la colaboración entre diseñadores y desarrolladores.",
          results: [
            "Aumento del 40% en la velocidad de entrega de nuevas pantallas.",
            "Reducción drástica de inconsistencias visuales en el producto.",
            "Adopción del 100% por el equipo de ingeniería en 6 meses."
          ]
        },
        {
          title: "Acelerando el crecimiento de iFood en Latam",
          category: "ONBOARDING • FOODTECH",
          shortDescription: "Landing Page automatizada para registros de nuevos restaurantes.",
          challenge: "El proceso de registro de socios era manual y burocrático, limitando la velocidad de expansión agresiva necesaria para el mercado latinoamericano.",
          solution: "Desarrollo de un flujo de onboarding self-service automatizado, con validación de documentos en tiempo real y UX optimizada para conversión.",
          results: [
            "Reducción del 70% en el tiempo promedio de aprobación de restaurantes.",
            "Crecimiento exponencial de la base de socios en México y Colombia.",
            "Mejora significativa en el NPS de entrada de los socios."
          ]
        },
        {
          title: "Reinventando la programación de citas",
          category: "CALENDAR • HEALTHTECH",
          shortDescription: "Simplificando la complejidad de las agendas.",
          challenge: "La gestión de agendas complejas con múltiples profesionales y sillas generaba conflictos de horarios y dificultades de visualización para las recepcionistas.",
          solution: "Rediseño completo de la interfaz de agenda enfocado en usabilidad cognitiva, con recursos de 'arrastrar y soltar' y sugerencias inteligentes de horarios.",
          results: [
            "Optimización del 20% en la ocupación de sillas/salas.",
            "Reducción de clics para realizar una programación.",
            "Feedback extremadamente positivo de las recepcionistas (Power Users)."
          ]
        },
        {
          title: "Varios proyectos de IA",
          category: "AI • VIBEDESIGN",
          shortDescription: "Compilado de proyectos que hice usando IA.",
          challenge: "Explorar cómo las nuevas herramientas de IA Generativa pueden integrarse al flujo de trabajo de diseño para expandir la creatividad y eficiencia.",
          solution: "Una colección de experimentos visuales y funcionales utilizando Midjourney, Stable Diffusion y LLM para prototipado rápido y generación de activos.",
          results: [
            "Creación de identidades visuales conceptuales en tiempo récord.",
            "Exploración de nuevas estéticas (Vibe Design).",
            "Automatización de tareas repetitivas en el proceso de descubrimiento."
          ]
        }
      ],
      modal: {
        challenge: 'El Desafío',
        tech: 'Tech & Tools',
        solution: 'La Solución',
        results: 'Resultados Clave',
        confidential: 'Confidencial © 2024',
        close: 'Cerrar Caso'
      }
    },
    testimonials: {
      title: 'Lo que dicen',
      titleHighlight: 'Colegas y Clientes',
      subtitle: 'Feedback real de quienes ya han trabajado conmigo en proyectos internacionales y de alta complejidad.',
      items: [
        {
          quote: "Denis es un diseñador increíble con el que tuve el placer de trabajar, es un diseñador de productos completo, con habilidades en investigación, creación de prototipos y entrega de diseño.",
        },
        {
          quote: "Denis es el tipo de persona que hace todo lo posible para encontrar y solucionar problemas donde sea que la empresa lo necesite, siempre tratando de mejorar.",
        },
        {
          quote: "Denis tiene un gran corazón y siempre se preocupa por las personas que lo rodean. Es alguien que se enamora de los problemas y hará todo lo posible para aprender más sobre lo que se puede hacer para resolverlos de la mejor manera posible :)",
        },
        {
          quote: "Tuve la oportunidad de ser liderado por Denis en un momento en que me faltaba confianza y dirección. Su liderazgo fue fundamental para permitirme encontrar mi camino y desarrollar mi trabajo de una manera que no sabía que era capaz.",
        },
        {
          quote: "Un profesor dedicado que es muy elogiado por sus clases. Además de ser colaborativo y un experto en su campo, a Denis le sobra empatía.",
        },
        {
          quote: "Un profesional completo, mentor, orador y, sobre todo, un gran amigo. Es raro encontrar a alguien que entienda tanto de UI/UX y tenga tanta empatía por el usuario. Es un profesional inquieto, siempre cuestionando, proactivo y ofreciendo más de lo que se le pide.",
        }
      ]
    },
    contact: {
      title: '¿Vamos a construir algo',
      titleHighlight: 'Increíble',
      titleEnd: 'juntos?',
      subtitle: 'Siempre estoy abierto a discutir diseño de producto, colaborar en nuevos proyectos o hablar sobre oportunidades de liderazgo.',
      cta: 'Manda un Hola 👋',
      rights: 'Todos los derechos reservados.',
      location: 'en la soleada ciudad de Campinas/SP.'
    }
  }
};