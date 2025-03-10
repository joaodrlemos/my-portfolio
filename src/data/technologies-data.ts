import { ICON_COLOR } from '@/constants/icons';
import { ProjectTechnology, TechnologyItem } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const TechnologiesData: Record<ProjectTechnology, TechnologyItem> = {
  [ProjectTechnology.HTML]: {
    name: ProjectTechnology.HTML,
    icon: getIcon(
      `${ProjectTechnology.HTML}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.HTML,
    ),
  },
  [ProjectTechnology.CSS]: {
    name: ProjectTechnology.CSS,
    icon: getIcon(
      `${ProjectTechnology.CSS}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.CSS,
    ),
  },
  [ProjectTechnology.JAVASCRIPT]: {
    name: ProjectTechnology.JAVASCRIPT,
    icon: getIcon(
      `${ProjectTechnology.JAVASCRIPT}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.JAVASCRIPT,
    ),
  },
  [ProjectTechnology.TYPESCRIPT]: {
    name: ProjectTechnology.TYPESCRIPT,
    icon: getIcon(
      `${ProjectTechnology.TYPESCRIPT}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.TYPESCRIPT,
    ),
  },
  [ProjectTechnology.REACT]: {
    name: ProjectTechnology.REACT,
    icon: getIcon(
      `${ProjectTechnology.REACT}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.REACT,
    ),
  },
  [ProjectTechnology.REACT_NATIVE]: {
    name: 'react native',
    icon: getIcon(
      `${ProjectTechnology.REACT_NATIVE}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.REACT_NATIVE,
    ),
  },
  [ProjectTechnology.SCSS]: {
    name: ProjectTechnology.SCSS,
    icon: getIcon(
      `${ProjectTechnology.SCSS}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.SCSS,
    ),
  },
  [ProjectTechnology.VITE]: {
    name: ProjectTechnology.VITE,
    icon: getIcon(
      `${ProjectTechnology.VITE}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.VITE,
    ),
  },
  [ProjectTechnology.EXPO]: {
    name: ProjectTechnology.EXPO,
    icon: getIcon(
      `${ProjectTechnology.EXPO}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.EXPO,
    ),
  },
  [ProjectTechnology.NEXT_JS]: {
    name: ProjectTechnology.NEXT_JS,
    icon: getIcon(
      `${ProjectTechnology.NEXT_JS}_ico-${ICON_COLOR}.svg`,
      'technologies',
      ProjectTechnology.NEXT_JS,
    ),
  },
};
