//---------------------------------
//-----------GENERAL---------------
//---------------------------------

export type AppContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

//---------------------------------
//-------------ENUMS---------------
//---------------------------------

export enum Language {
  EN = 'en',
  PT = 'pt',
}

export enum DocumentName {
  BACHELORS_COMPUTER_SCIENCE = 'Bachelors Computer Science Diploma',
  GDPR = 'Gdpr Certification',
  CIBERSAFE_CITIZEN = 'Cyber Safety Certification',
  JIRA_FUNDAMENTALS = 'Jira Fundamentals Certification',
  CONFLUENCE_FUNDAMENTALS = 'Confluence Fundamentals Certification',
  RESPONSIVE_WEBDESIGN = 'Responsive WebDesign Certification',
  JAVASCRIPT_ALGORITHMS_AND_DATA_STRUCTURES = 'JavaScript Algorithms And Data Structures Certification',
  UNDERSTANDING_TYPESCRIPT = 'Understanding Typescript Certification',
  FRONTEND_DEVELOPER = 'FrontEnd Developer Certification',
  LEARNING_NEXTJS = 'Learning NextJs Certification',
}

export enum ProjectTechnology {
  HTML = 'Html',
  CSS = 'Css',
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  REACT = 'React',
  REACT_NATIVE = 'ReactNative',
  SCSS = 'Scss',
  VITE = 'Vite',
  EXPO = 'Expo',
  NEXT_JS = 'NextJs',
}

export enum ProjectTool {
  GIT = 'Git',
  JIRA = 'Jira',
  CONFLUENCE = 'Confluence',
  PHOTOSHOP = 'Photoshop',
  FIGMA = 'Figma',
}

export enum ProjectFunction {
  PLANNED = 'Planned',
  DESIGNED = 'Designed',
  DEVELOPED = 'Developed',
  IMPLEMENTED = 'Implemented',
  OPTIMIZED = 'Optimized',
  DEPLOYED = 'Deployed',
}

export enum Institution {
  ATLASSIAN = 'Atlassian',
  NAU = 'NAU',
  FREECODECAMP = 'FreeCodeCamp',
  UDEMY = 'Udemy',
  LINKEDIN = 'LinkedIn',
  HACKERRANK = 'HackerRank',
  FCT = 'FCT',
}

export enum CredentialType {
  DEGREE = 'Degree',
  CERTIFICATION = 'Certification',
  LICENSE = 'License',
}

export enum ProjectType {
  ACADEMICAL = 'academical',
  FREELANCE = 'freelance',
  PROFESSIONAL = 'professional',
}

//---------------------------------
//------------TYPES----------------
//---------------------------------

export type DocumentItem = {
  name: DocumentName;
  link?: string;
  img?: string;
};

export type TechnologyItem = {
  name: ProjectTechnology;
  icon: string;
};

export type ToolItem = {
  name: ProjectTool;
  icon: string;
};

export type FunctionItem = {
  name: ProjectFunction;
  icon: string;
  desc: string;
};

export type InstitutionItem = {
  name: Institution;
  icon: string;
};

export type CredentialItem = {
  name: string;
  institution: InstitutionItem;
  type: CredentialType;
  startDate?: string;
  endDate: string;
  skills?: string[];
  technologies?: TechnologyItem[];
  document?: DocumentItem | undefined;
};

export type ProjectItem = {
  id: string | number;
  name: string;
  descEn: string;
  descPt: string;
  client?: string;
  platform: 'WEB' | 'MOBILE';
  img: string;
  logo?: string;
  startBackgroundColor?: boolean;
  backgroundColor: string;
  font?: string;
  url?: string | null | undefined;
  preview?: string;
  type: ProjectType;
  year: number;
  technologies: [TechnologyItem, ...TechnologyItem[]];
  tools: [ToolItem, ...ToolItem[]];
  functions: [FunctionItem, ...FunctionItem[]];
};

//---------------------------------
//---------------------------------
//---------------------------------
