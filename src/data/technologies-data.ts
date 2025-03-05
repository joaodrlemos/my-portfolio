import { ProjectTechnology, TechnologyItem } from '@/types/projectTypes';

export const TechnologiesData: Record<ProjectTechnology, TechnologyItem> = {
  [ProjectTechnology.HTML]: {
    name: ProjectTechnology.HTML,
    icon: '/src/assets/icons/technologies/html/html_ico-color.svg',
  },
  [ProjectTechnology.CSS]: {
    name: ProjectTechnology.CSS,
    icon: '/src/assets/icons/technologies/css/css_ico-color.svg',
  },
  [ProjectTechnology.JAVASCRIPT]: {
    name: ProjectTechnology.JAVASCRIPT,
    icon: '/src/assets/icons/technologies/javascript/javascript_ico-color.svg',
  },
  [ProjectTechnology.TYPESCRIPT]: {
    name: ProjectTechnology.TYPESCRIPT,
    icon: '/src/assets/icons/technologies/typescript/typescript_ico-color.svg',
  },
  [ProjectTechnology.REACT]: {
    name: ProjectTechnology.REACT,
    icon: '/src/assets/icons/technologies/react/react_ico-color.svg',
  },
  [ProjectTechnology.REACT_NATIVE]: {
    name: ProjectTechnology.REACT_NATIVE,
    icon: '/src/assets/icons/technologies/reactNative/reactnative_ico-color.svg',
  },
  [ProjectTechnology.SCSS]: {
    name: ProjectTechnology.SCSS,
    icon: '/src/assets/icons/technologies/scss/scss_ico-color.svg',
  },
  [ProjectTechnology.VITE]: {
    name: ProjectTechnology.VITE,
    icon: '/src/assets/icons/technologies/vite/vite_ico-color.svg',
  },
  [ProjectTechnology.EXPO]: {
    name: ProjectTechnology.EXPO,
    icon: '/src/assets/icons/technologies/expo/expo_ico-white.svg',
  },
  [ProjectTechnology.NEXT_JS]: {
    name: ProjectTechnology.NEXT_JS,
    icon: '/src/assets/icons/technologies/nextJs/nextjs_ico-black.svg',
  },
};
