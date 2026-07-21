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
          title: 'Independent iOS Developer & Mobile Architect',
          place: 'Porto Alegre · remote',
          description: 'Building Doppio and Raipe, and consulting on iOS architecture for product teams. Swift, SwiftUI, and the occasional strong opinion about dependency graphs.',
        },
        {
          title: 'Mobile Architect',
          place: 'Placeholder Corp — replace with real role',
          description: 'Led the iOS practice through the transition from Objective-C to Swift; shipped and maintained consumer apps used by millions.',
        },
        {
          title: 'Senior Software Engineer',
          place: 'Placeholder Systems — replace with real role',
          description: 'Desktop and embedded systems in C and C++. Learned that shipping is a feature.',
        },
        {
          title: "Master's in Computer Science",
          place: 'UFRGS — Universidade Federal do Rio Grande do Sul',
          description: 'Research placeholder — replace with thesis topic.',
        },
        {
          title: 'First line of assembly',
          place: 'A TK85, a bedroom, a cassette deck',
          description: 'Where it all started.',
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
    cv: {
      headline: 'The full trajectory, on paper.',
      subline: 'Forty years condensed into two pages.',
      button: 'DOWNLOAD CV ↓',
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
          title: 'Desenvolvedor iOS Independente & Arquiteto Mobile',
          place: 'Porto Alegre · remoto',
          description: 'Construindo o Doppio e o Raipe, e consultando equipes de produto em arquitetura iOS. Swift, SwiftUI e opiniões fortes sobre grafos de dependência.',
        },
        {
          title: 'Arquiteto Mobile',
          place: 'Placeholder Corp — substituir com empresa real',
          description: 'Liderou a prática iOS durante a transição de Objective-C para Swift; entregou e manteve apps com milhões de usuários.',
        },
        {
          title: 'Engenheiro de Software Sênior',
          place: 'Placeholder Systems — substituir com empresa real',
          description: 'Sistemas desktop e embarcados em C e C++. Aprendi que entregar é uma feature.',
        },
        {
          title: 'Mestrado em Ciência da Computação',
          place: 'UFRGS — Universidade Federal do Rio Grande do Sul',
          description: 'Placeholder de pesquisa — substituir com tema da dissertação.',
        },
        {
          title: 'Primeira linha de assembly',
          place: 'Um TK85, um quarto, um gravador cassete',
          description: 'Onde tudo começou.',
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
    cv: {
      headline: 'A trajetória completa, no papel.',
      subline: 'Quarenta anos condensados em duas páginas.',
      button: 'BAIXAR CV ↓',
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
