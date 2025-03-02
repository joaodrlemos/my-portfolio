import {
  ProjectTechnology,
  TechnologyItem,
  ProjectTool,
  ToolItem,
} from '@/typings/generalTypes';

export const TechnologiesData: Record<ProjectTechnology, TechnologyItem> = {
  [ProjectTechnology.HTML]: {
    name: ProjectTechnology.HTML,
    icon: '/assets/icons/html.svg',
    logo: '/assets/logos/html.png',
  },
  [ProjectTechnology.CSS]: {
    name: ProjectTechnology.CSS,
    icon: '/assets/icons/css.svg',
    logo: '/assets/logos/css.png',
  },
  [ProjectTechnology.JAVASCRIPT]: {
    name: ProjectTechnology.JAVASCRIPT,
    icon: '/assets/icons/javascript.svg',
    logo: '/assets/logos/javascript.png',
  },
  [ProjectTechnology.TYPESCRIPT]: {
    name: ProjectTechnology.TYPESCRIPT,
    icon: '/assets/icons/typescript.svg',
    logo: '/assets/logos/typescript.png',
  },
  [ProjectTechnology.REACT]: {
    name: ProjectTechnology.REACT,
    icon: '/assets/icons/react.svg',
    logo: '/assets/logos/react.png',
  },
  [ProjectTechnology.REACT_NATIVE]: {
    name: ProjectTechnology.REACT_NATIVE,
    icon: '/assets/icons/react-native.svg',
    logo: '/assets/logos/react-native.png',
  },
  [ProjectTechnology.SCSS]: {
    name: ProjectTechnology.SCSS,
    icon: '/assets/icons/scss.svg',
    logo: '/assets/logos/scss.png',
  },

  [ProjectTechnology.VITE]: {
    name: ProjectTechnology.VITE,
    icon: '/assets/icons/vite.svg',
    logo: '/assets/logos/vite.png',
  },

  [ProjectTechnology.EXPO]: {
    name: ProjectTechnology.EXPO,
    icon: '/assets/icons/expo.svg',
    logo: '/assets/logos/expo.png',
  },

  [ProjectTechnology.NEXT_JS]: {
    name: ProjectTechnology.NEXT_JS,
    icon: '/assets/icons/next-js.svg',
    logo: '/assets/logos/next-js.png',
  },
};

export const ToolsData: Record<ProjectTool, ToolItem> = {
  [ProjectTool.GIT]: {
    name: ProjectTool.GIT,
    icon: '/assets/icons/git.svg',
    logo: '/assets/logos/git.png',
  },
  [ProjectTool.JIRA]: {
    name: ProjectTool.JIRA,
    icon: '/assets/icons/jira.svg',
    logo: '/assets/logos/jira.png',
  },
  [ProjectTool.CONFLUENCE]: {
    name: ProjectTool.CONFLUENCE,
    icon: '/assets/icons/confluence.svg',
    logo: '/assets/logos/confluence.png',
  },
  [ProjectTool.PHOTOSHOP]: {
    name: ProjectTool.PHOTOSHOP,
    icon: '/assets/icons/photoshop.svg',
    logo: '/assets/logos/photoshop.png',
  },
  [ProjectTool.FIGMA]: {
    name: ProjectTool.FIGMA,
    icon: '/assets/icons/figma.svg',
    logo: '/assets/logos/figma.png',
  },
};
