export type Lang = 'en' | 'pt';

export const translations = {
  en: {
    hero: {
      role: 'Senior iOS Developer · Mobile Architect',
      bio: 'Forty years of writing software, from 8-bit assembly to Swift. The night sky and the inside of a coffee cup share the same darkness — I work in both.',
      cta_work: 'SEE THE WORK',
      cta_cv: 'download_cv.pdf ↓',
      stat_years: 'years coding',
      stat_apps: 'apps shipped',
    },
    work: {
      title: 'Work',
      entries: [
        {
          title: 'Freelance iOS Developer',
          place: 'Confidential client · via Techflow',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
          title: 'Senior iOS Engineer',
          place: 'DBServices · remote · international team',
          description: 'Architecture review of a Fintech app for App Store compliance. Development of the Fox One streaming app (SwiftUI/MVVM). Implemented flows for the McClatchy white label app, powering 33 US local newspapers including The Miami Herald.',
        },
        {
          title: 'Senior iOS Engineer',
          place: 'BairesDev · remote · international team',
          description: "Codebase modernization for ViaPath's ConnectNetwork — a platform enabling communication and money transfers from families to incarcerated individuals. Led Objective-C to Swift migration, implemented unit and UI testing from scratch, and improved architecture, code quality, and stability.",
        },
        {
          title: 'Senior iOS Developer',
          place: 'Hefesto · remote',
          description: 'Solved a novel 3D capture problem for broken limbs — built a reliable method for LiDAR-based scanning to print custom plastic orthosis, replacing plaster casts. Also developed a macOS app for photogrammetry sessions using iOS-captured photos.',
        },
        {
          title: 'Senior iOS Developer',
          place: 'Zup · Banco Itaú · remote',
          description: 'Worked on the Itaú credit card app — one of the most widely used banking apps in South America, with 1M+ active users. Fully rebuilt the debt renegotiation flow, eliminating a long-standing iOS gap relative to Android and Web.',
        },
        {
          title: 'Mobile Architect',
          place: '+A Educação · remote',
          description: 'Conceived and led development of the Consulta +Rápida by ArtMed platform — medical and psychiatric content apps. Designed infrastructure to host multiple apps, including backend, database, and content indexing systems. Collaborated with C-level executives and doctors.',
        },
        {
          title: "Master's in Computer Science",
          place: 'UFRGS — Universidade Federal do Rio Grande do Sul',
          description: 'Graduate research in computer science. Bachelor in Computer Science from the same institution (1983–1988).',
        },
        {
          title: 'First line of assembly',
          place: 'A TK85, a bedroom, a cassette deck',
          description: 'Programmer since 1980. The machine was slow. The curiosity was not.',
        },
      ],
    },
    apps: {
      title: 'Apps',
      entries: [
        {
          description: 'A guide to the specialty coffee shops of Porto Alegre. Curated roasters, brew methods, and neighborhood maps.',
        },
        {
          description: 'Commercial iOS app built for a client, in active development. Swift end to end.',
        },
      ],
    },
    articles: {
      title: 'Articles',
      entries: [
        { subtitle: 'A pragmatic layering for SwiftUI apps.' },
        { subtitle: 'Forty years of typed characters.' },
        { subtitle: 'Precision as a hobby.' },
      ],
    },
    community: {
      title: 'Community',
      tdc_label: 'TheDevConf (TDC)',
      tdc_description: "Brazil's largest tech conference. iOS Track Coordinator across 5 editions in Porto Alegre, Florianópolis, and São Paulo (2018–2019). Also coordinated the Visual Thinking track in 2 editions. Speaker and organizing committee member.",
      cocoaheads_label: 'CocoaHeads Porto Alegre',
      cocoaheads_description: 'Co-organizer of the Porto Alegre iOS developer community.',
    },
    cv: {
      headline: 'The full trajectory, on paper.',
      subline: 'Forty years condensed into two pages.',
      button_en: 'DOWNLOAD CV (EN) ↓',
      button_pt: 'DOWNLOAD CV (PT) ↓',
    },
    contact: {
      title: 'Contact',
      line: 'Open to senior iOS and mobile architecture roles, remote or hybrid, anywhere on Earth.',
    },
    footer: {
      coords: '30.03°S · 51.23°W — PORTO ALEGRE, BRAZIL',
    },
  },
  pt: {
    hero: {
      role: 'Desenvolvedor iOS Sênior · Arquiteto Mobile',
      bio: 'Quarenta anos escrevendo software, do assembly 8-bit ao Swift. O céu noturno e o interior de uma xícara de café compartilham a mesma escuridão — trabalho nos dois.',
      cta_work: 'VER O TRABALHO',
      cta_cv: 'baixar_cv.pdf ↓',
      stat_years: 'anos de código',
      stat_apps: 'apps entregues',
    },
    work: {
      title: 'Experiência',
      entries: [
        {
          title: 'Desenvolvedor iOS Freelance',
          place: 'Cliente confidencial · via Techflow',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
          title: 'Engenheiro iOS Sênior',
          place: 'DBServices · remoto · equipe internacional',
          description: 'Revisão de arquitetura de app Fintech para conformidade com App Store. Desenvolvimento do Fox One (streaming, SwiftUI/MVVM). Implementação de fluxos no app white label da McClatchy para 33 jornais americanos, incluindo o Miami Herald.',
        },
        {
          title: 'Engenheiro iOS Sênior',
          place: 'BairesDev · remoto · equipe internacional',
          description: 'Modernização do ConnectNetwork da ViaPath — plataforma que permite comunicação e transferências de dinheiro de familiares para pessoas encarceradas. Migração de Objective-C para Swift, implementação de testes unitários e de UI do zero, melhorias de arquitetura, qualidade e estabilidade.',
        },
        {
          title: 'Desenvolvedor iOS Sênior',
          place: 'Hefesto · remoto',
          description: 'Solucionou um problema inédito de captura 3D para ossos quebrados — método de escaneamento LiDAR para impressão de órteses plásticas personalizadas, substituindo o gesso. Também desenvolveu app macOS para sessões de fotogrametria com imagens iOS.',
        },
        {
          title: 'Desenvolvedor iOS Sênior',
          place: 'Zup · Banco Itaú · remoto',
          description: 'Trabalhou no app de cartão de crédito do Itaú — um dos apps bancários mais utilizados na América do Sul, com mais de 1 milhão de usuários ativos. Reconstruiu integralmente o fluxo de renegociação de dívidas, eliminando uma lacuna histórica do iOS em relação às plataformas Android e Web.',
        },
        {
          title: 'Arquiteto Mobile',
          place: '+A Educação · remoto',
          description: 'Concebeu e liderou o desenvolvimento da plataforma Consulta +Rápida by ArtMed — apps de conteúdo médico e psiquiátrico. Projetou infraestrutura para múltiplos apps, incluindo backend, banco de dados e sistema de indexação de conteúdo. Colaboração com C-level e médicos.',
        },
        {
          title: 'Mestrado em Ciência da Computação',
          place: 'UFRGS — Universidade Federal do Rio Grande do Sul',
          description: 'Pesquisa de pós-graduação em ciência da computação. Bacharelado em Ciência da Computação pela mesma instituição (1983–1988).',
        },
        {
          title: 'Primeira linha de assembly',
          place: 'Um TK85, um quarto, um gravador cassete',
          description: 'Programador desde 1980. A máquina era lenta. A curiosidade, não.',
        },
      ],
    },
    apps: {
      title: 'Apps',
      entries: [
        {
          description: 'Um guia das cafeterias especiais de Porto Alegre. Torrefações curadas, métodos de preparo e mapas por bairro.',
        },
        {
          description: 'App iOS comercial desenvolvido para um cliente, em desenvolvimento ativo. Swift do início ao fim.',
        },
      ],
    },
    articles: {
      title: 'Artigos',
      entries: [
        { subtitle: 'Uma arquitetura pragmática para apps SwiftUI.' },
        { subtitle: 'Quarenta anos de caracteres digitados.' },
        { subtitle: 'Precisão como hobby.' },
      ],
    },
    community: {
      title: 'Comunidade',
      tdc_label: 'TheDevConf (TDC)',
      tdc_description: 'O maior evento de tecnologia do Brasil. Coordenador da Trilha iOS em 5 edições em Porto Alegre, Florianópolis e São Paulo (2018–2019). Também coordenou a trilha Visual Thinking em 2 edições. Palestrante e membro do comitê organizador.',
      cocoaheads_label: 'CocoaHeads Porto Alegre',
      cocoaheads_description: 'Co-organizador da comunidade de desenvolvedores iOS de Porto Alegre.',
    },
    cv: {
      headline: 'A trajetória completa, no papel.',
      subline: 'Quarenta anos condensados em duas páginas.',
      button_en: 'BAIXAR CV (EN) ↓',
      button_pt: 'BAIXAR CV (PT) ↓',
    },
    contact: {
      title: 'Contato',
      line: 'Aberto a vagas de desenvolvimento iOS sênior e arquitetura mobile, remoto ou híbrido, em qualquer lugar do mundo.',
    },
    footer: {
      coords: '30.03°S · 51.23°W — PORTO ALEGRE, BRASIL',
    },
  },
} as const;

export type Translations = typeof translations;
