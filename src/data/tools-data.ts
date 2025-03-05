import { ProjectTool, ToolItem } from '@/types/projectTypes';

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
