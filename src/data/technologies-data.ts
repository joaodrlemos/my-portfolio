import { ProjectTechnology, TechnologyItem } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const TechnologiesData: Record<ProjectTechnology, TechnologyItem> = {
  [ProjectTechnology.HTML]: {
    name: ProjectTechnology.HTML,
    icon: getIcon('html_ico-color.svg', 'technologies', 'html'),
  },
  [ProjectTechnology.CSS]: {
    name: ProjectTechnology.CSS,
    icon: getIcon('css_ico-color.svg', 'technologies', 'css'),
  },
  [ProjectTechnology.JAVASCRIPT]: {
    name: ProjectTechnology.JAVASCRIPT,
    icon: getIcon('javascript_ico-color.svg', 'technologies', 'javascript'),
  },
  [ProjectTechnology.TYPESCRIPT]: {
    name: ProjectTechnology.TYPESCRIPT,
    icon: getIcon('typescript_ico-color.svg', 'technologies', 'typescript'),
  },
  [ProjectTechnology.REACT]: {
    name: ProjectTechnology.REACT,
    icon: getIcon('react_ico-color.svg', 'technologies', 'react'),
  },
  [ProjectTechnology.REACT_NATIVE]: {
    name: ProjectTechnology.REACT_NATIVE,
    icon: getIcon('reactnative_ico-color.svg', 'technologies', 'reactNative'),
  },
  [ProjectTechnology.SCSS]: {
    name: ProjectTechnology.SCSS,
    icon: getIcon('scss_ico-color.svg', 'technologies', 'scss'),
  },
  [ProjectTechnology.VITE]: {
    name: ProjectTechnology.VITE,
    icon: getIcon('vite_ico-color.svg', 'technologies', 'vite'),
  },
  [ProjectTechnology.EXPO]: {
    name: ProjectTechnology.EXPO,
    icon: getIcon('expo_ico-white.svg', 'technologies', 'expo'),
  },
  [ProjectTechnology.NEXT_JS]: {
    name: ProjectTechnology.NEXT_JS,
    icon: getIcon('nextjs_ico-black.svg', 'technologies', 'nextJs'),
  },
};
