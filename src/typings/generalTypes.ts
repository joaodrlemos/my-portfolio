//---------------------------------
//-----------GENERAL---------------
//---------------------------------

export type AppContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export enum Language {
  EN = 'en',
  PT = 'pt',
}

//---------------------------------
//--------TECHNOLOGIES-------------
//---------------------------------

export enum ProjectTechnology {
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
}

export type TechnologyItem = {
  name: ProjectTechnology;
  icon: string;
  logo: string;
};

//---------------------------------
//------------TOOLS----------------
//---------------------------------

export enum ProjectTool {
  GIT = 'Git',
  JIRA = 'Jira',
  CONFLUENCE = 'Confluence',
  PHOTOSHOP = 'Photoshop',
  FIGMA = 'Figma',
}

export type ToolItem = {
  name: ProjectTool;
  icon: string;
  logo: string;
};

//---------------------------------
//----------FUNCTIONS--------------
//---------------------------------

export enum ProjectFunction {
  PLANNED = 'PLANNED',
  DESIGNED = 'DESIGNED',
  DEVELOPED = 'DEVELOPED',
  IMPLEMENTED = 'IMPLEMENTED',
  OPTIMIZED = 'OPTIMIZED',
  DEPLOYED = 'DEPLOYED',
}

export type FunctionItem = {
  name: ProjectFunction;
  icon: string;
  desc: string;
};

//---------------------------------
//-----------PROJECTS--------------
//---------------------------------

export enum ProjectType {
  ACADEMICAL = 'academical',
  PERSONAL = 'personal',
  PROFESSIONAL = 'professional',
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
  year: number;
  technologies: [TechnologyItem, ...TechnologyItem[]];
  tools: [ToolItem, ...ToolItem[]];
  functions: [FunctionItem, ...FunctionItem[]];
};

//---------------------------------
//---------------------------------
//---------------------------------
