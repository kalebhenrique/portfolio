export const languages = {
  pt: "Português",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "pt";

export const ui = {
  pt: {
    "nav.about": "Sobre",
    "nav.stack": "Stack",
    "nav.portfolio": "Portfólio",
    "nav.chat": "Chat",
    "nav.switch_lang": "Mudar idioma",
    "hero.popover":
      "Montanha do jogo eletrônico Celeste, obra que aborda temas de superação e perseverança — qualidades essenciais para programadores!",
    "hero.subtitle":
      "Sou apaixonado por criar experiências envolventes, acessíveis e centradas no usuário.",
    "about.title": "Eu sou um dev fullstack.",
    "about.bio1":
      "Estudante de Engenharia de Computação na Universidade de Brasília e Técnico em Informática formado pela Escola Técnica de Brasília.",
    "about.bio2":
      "Atuo com desenvolvimento de software de ponta a ponta e análise de requisitos, com foco constante em boas práticas de engenharia, arquitetura limpa e escabilidade.",
    "about.purpose_title": "Motivação e Propósito",
    "about.purpose_desc":
      "Busco ambientes colaborativos onde possa aprender continuamente, resolver problemas complexos e construir produtos que gerem impacto real.",
    "about.cta_question": "Tem um projeto em mente ou quer trocar uma ideia?",
    "about.cta_button": "Falar no Chat",
    "stack.title": "Stack & Trajetória",
    "stack.experience_title": "Experiência Profissional",
    "portfolio.title": "Portfólio",
    "portfolio.open_post": "Abrir post sobre",
    "project.back": "Voltar aos Projetos",
    "project.visit": "Acessar Projeto",
    "project.github": "Ver Código no GitHub",
    "project.other": "Outros Projetos",
    "project.scroll_top": "Voltar ao topo",
    "footer.where": "Onde estou",
    "footer.contact": "Contato",
    "footer.cv": "Baixar CV",
    "footer.copy_email": "Copiar email",
    "footer.copied": "Email copiado!",
    "chat.title": "Chat com Kaleb",
    "chat.initial": "Como posso ajudar?",
    "chat.opt_repo": "Cadê o repositório deste portfólio?",
    "chat.opt_cat": "Quero uma foto surpresa de gato! 🐱",
    "chat.opt_contact": "Gostaria de entrar em contato.",
    "chat.repo_msg": "O link do repositório está ",
    "chat.here": "aqui.",
    "chat.cat_msg": "Aqui está uma foto surpresa de gato! 🐱",
    "chat.cat_more": "Quero mais uma foto!",
    "chat.contact_msg": "Me chama no LinkedIn! Respondo rápido por lá.",
    "chat.back_menu": "Voltar ao menu",
    "chat.loading": "Carregando...",
    "types.Trainee Struct": "Trainee Struct",
    "types.Freelancer": "Freelancer",
    "types.Empresa Júnior Struct": "Empresa Júnior Struct",
    "types.Projeto Pessoal": "Projeto Pessoal",
    "types.Open Source": "Open Source",
    "types.Acadêmico": "Acadêmico",
  },
  en: {
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.portfolio": "Portfolio",
    "nav.chat": "Chat",
    "nav.switch_lang": "Switch language",
    "hero.popover":
      "Mountain from the video game Celeste, a masterpiece exploring themes of resilience and overcoming obstacles — essential qualities for software developers!",
    "hero.subtitle":
      "I'm passionate about building engaging, accessible, and user-centered digital experiences.",
    "about.title": "I'm a fullstack developer.",
    "about.bio1":
      "Computer Engineering student at University of Brasília (UnB) and Information Technology graduate from Brasília Technical School (ETB).",
    "about.bio2":
      "I work with end-to-end software development and requirements engineering, constantly focused on clean architecture, sound engineering practices, and scalability.",
    "about.purpose_title": "Motivation & Purpose",
    "about.purpose_desc":
      "I seek collaborative environments where I can continuously learn, tackle complex problems, and build products with real impact.",
    "about.cta_question": "Have a project in mind or want to talk?",
    "about.cta_button": "Open Chat",
    "stack.title": "Stack & Journey",
    "stack.experience_title": "Work Experience",
    "portfolio.title": "Portfolio",
    "portfolio.open_post": "Open post about",
    "project.back": "Back to Projects",
    "project.visit": "Visit Project",
    "project.github": "View Code on GitHub",
    "project.other": "Other Projects",
    "project.scroll_top": "Back to top",
    "footer.where": "Online",
    "footer.contact": "Contact",
    "footer.cv": "Download CV",
    "footer.copy_email": "Copy email",
    "footer.copied": "Email copied!",
    "chat.title": "Chat with Kaleb",
    "chat.initial": "How can I help you?",
    "chat.opt_repo": "Where is this portfolio's repository?",
    "chat.opt_cat": "Surprise me with a cat photo! 🐱",
    "chat.opt_contact": "I'd like to get in touch.",
    "chat.repo_msg": "The repository link is right ",
    "chat.here": "here.",
    "chat.cat_msg": "Here is a surprise cat photo! 🐱",
    "chat.cat_more": "Give me another photo!",
    "chat.contact_msg": "Reach out on LinkedIn! I reply quickly there.",
    "chat.back_menu": "Back to menu",
    "chat.loading": "Loading...",
    "types.Trainee Struct": "Trainee Struct",
    "types.Freelancer": "Freelancer",
    "types.Empresa Júnior Struct": "Struct Junior Enterprise",
    "types.Projeto Pessoal": "Personal Project",
    "types.Open Source": "Open Source",
    "types.Acadêmico": "Academic Project",
  },
} as const;

export type TranslationKey = keyof (typeof ui)["pt"];

export function useTranslations(lang: Lang = "pt") {
  return function t(key: TranslationKey): string {
    const currentLang = (lang === "en" ? "en" : "pt") as Lang;
    return ui[currentLang]?.[key] ?? ui[defaultLang][key];
  };
}

export interface ExperienceItem {
  startDate: string;
  endDate: string;
  position: string;
  enterprise: string;
  enterpriseUrl: string;
  summary: string[];
}

export const experiencesEn: ExperienceItem[] = [
  {
    startDate: "2025",
    endDate: "Present",
    position: "Full Stack Developer",
    enterprise: "Switch Dreams",
    enterpriseUrl: "https://www.linkedin.com/company/switch-dreams/home/",
    summary: [
      "Development of websites and mobile applications, legacy codebase refactoring, AI API integrations, MCP, GitHub Actions, test profiling, and SaaS maintenance.",
    ],
  },
  {
    startDate: "2024",
    endDate: "2025",
    position: "Commercial Director",
    enterprise: "Empresa Júnior Struct",
    enterpriseUrl: "https://www.linkedin.com/company/struct-ej/home/",
    summary: [
      "Leadership of the <u>commercial</u> and <u>internal software</u> teams, coordinating activities and defining strategic goals.",
    ],
  },
  {
    startDate: "2023",
    endDate: "2024",
    position: "Full Stack Developer",
    enterprise: "Empresa Júnior Struct",
    enterpriseUrl: "https://www.linkedin.com/company/struct-ej/home/",
    summary: [
      "Development of websites and applications using <u>Next.js</u> and <u>React Native</u>.",
    ],
  },
  {
    startDate: "2023",
    endDate: "2023",
    position: "IT Technical Support",
    enterprise: "Escola Técnica de Brasília",
    enterpriseUrl:
      "https://www.linkedin.com/company/etb-escola-t-cnica-de-brasilia/posts/",
    summary: [
      "Completed mandatory internship for IT Technical degree, learning technical support for computers and servers.",
    ],
  },
];
