export enum Language {
  EN = 'en',
  PT = 'pt',
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
  url?: string | null;
};

export type AppContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};
