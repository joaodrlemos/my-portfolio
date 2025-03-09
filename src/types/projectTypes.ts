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

export enum IconType {
  DEFAULT = '',
  OUTLINE = '-outline',
}

export enum IconColor {
  GRAY = 'gray',
  BLACK = 'black',
  WHITE = 'white',
  COLOR = 'color',
}

export enum Platform {
  WEB = 'web',
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}

export enum Social {
  FACEBOOK = 'facebook',
  GITHUB = 'github',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  YOUTUBE = 'youtube',
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
  HTML = 'html',
  CSS = 'css',
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript',
  REACT = 'react',
  REACT_NATIVE = 'reactnative',
  SCSS = 'scss',
  VITE = 'vite',
  EXPO = 'expo',
  NEXT_JS = 'nextjs',
}

export enum ProjectTool {
  GIT = 'git',
  JIRA = 'jira',
  CONFLUENCE = 'confluence',
  PHOTOSHOP = 'photoshop',
  FIGMA = 'figma',
}

export enum ProjectFunction {
  PLANNED = 'planned',
  DESIGNED = 'designed',
  DEVELOPED = 'developed',
  IMPLEMENTED = 'implemented',
  OPTIMIZED = 'optimized',
  DEPLOYED = 'deployed',
}

export enum Institution {
  ATLASSIAN = 'atlassian',
  NAU = 'nau',
  FREECODECAMP = 'freecodecamp',
  UDEMY = 'udemy',
  LINKEDIN = 'linkedin',
  HACKERRANK = 'hackerrank',
  FCT = 'fct',
}

export enum CredentialType {
  DEGREE = 'degree',
  CERTIFICATION = 'certification',
  LICENSE = 'license',
}

export enum ProjectType {
  ACADEMICAL = 'academical',
  FREELANCE = 'freelance',
  PROFESSIONAL = 'professional',
}

//---------------------------------
//------------TYPES----------------
//---------------------------------

export type ItemElement = {
  name: Object;
  icon?: string;
  link?: string;
  img?: string;
  desc?: string;
};

export type ImageElement = ItemElement & {
  width?: number;
  height?: number;
};

export type PlatformItem = ItemElement & {
  name: Platform;
};

export type SocialItem = ItemElement & {
  name: Social;
};

export type DocumentItem = ItemElement & {
  name: DocumentName;
};

export type TechnologyItem = ItemElement & {
  name: ProjectTechnology;
};

export type ToolItem = ItemElement & {
  name: ProjectTool;
};

export type FunctionItem = ItemElement & {
  name: ProjectFunction;
};

export type InstitutionItem = ItemElement & {
  name: Institution;
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
  aboutEn: string;
  aboutPt: string;
  client?: string;
  platforms: [PlatformItem, ...PlatformItem[]];
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
