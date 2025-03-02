export enum Language {
  EN = 'en',
  PT = 'pt',
}

export enum ProjectType {
  ACADEMICAL = 'academical',
  PERSONAL = 'personal',
  PROFESSIONAL = 'professional',
}

export enum ProjectFunctions {
  PLANNED = 'PLANNED',
  DESIGNED = 'DESIGNED',
  DEVELOPED = 'DEVELOPED',
  IMPLEMENTED = 'IMPLEMENTED',
  OPTIMIZED = 'OPTIMIZED',
  DEPLOYED = 'DEPLOYED',
}

export enum ProjectTechnologies {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  SCSS = 'SCSS',
  VITE = 'Vite',
  EXPO = 'Expo',
  NEXT_JS = 'Next.js',
  GIT = 'Git',
  JIRA = 'Jira',
  CONFLUENCE = 'Confluence',
  PHOTOSHOP = 'Photoshop',
  FIGMA = 'Figma',
}

export type ProjectItem = {
  id: string | number;
  name: string;
  descEn: string;
  descPt: string;
  img: string;
  logo?: string;
  startBackgroundColor?: boolean;
  backgroundColor: string;
  font?: string;
  url?: string | null | undefined;
  type: ProjectType;
  functions: ProjectFunctions[];
  technologies: ProjectTechnologies[];
};

export type AppContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export type TechnologyItem = {
  name: string;
  icon: string;
  logo: string;
};

export type FunctionItem = {
  name: string;
  icon: string;
  desc: string;
};
