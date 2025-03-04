import {
  ProjectTechnology,
  TechnologyItem,
  ProjectTool,
  ToolItem,
} from '@/typings/generalTypes';

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

export const ToolsData: Record<ProjectTool, ToolItem> = {
  [ProjectTool.GIT]: {
    name: ProjectTool.GIT,
    icon: '/src/assets/icons/tools/git/git_ico-color.svg',
  },
  [ProjectTool.JIRA]: {
    name: ProjectTool.JIRA,
    icon: '/src/assets/icons/tools/jira/jira_ico-color.svg',
  },
  [ProjectTool.CONFLUENCE]: {
    name: ProjectTool.CONFLUENCE,
    icon: '/src/assets/icons/tools/confluence/confluence_ico-color.svg',
  },
  [ProjectTool.PHOTOSHOP]: {
    name: ProjectTool.PHOTOSHOP,
    icon: '/src/assets/icons/tools/photoshop/photoshop_ico-color.svg',
  },
  [ProjectTool.FIGMA]: {
    name: ProjectTool.FIGMA,
    icon: '/src/assets/icons/tools/figma/figma_ico-color.svg',
  },
};
