import { ProjectTool, ToolItem } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const ToolsData: Record<ProjectTool, ToolItem> = {
  [ProjectTool.GIT]: {
    name: ProjectTool.GIT,
    icon: getIcon('git_ico-color.svg', 'tools', 'git'),
  },
  [ProjectTool.JIRA]: {
    name: ProjectTool.JIRA,
    icon: getIcon('jira_ico-color.svg', 'tools', 'jira'),
  },
  [ProjectTool.CONFLUENCE]: {
    name: ProjectTool.CONFLUENCE,
    icon: getIcon('confluence_ico-color.svg', 'tools', 'confluence'),
  },
  [ProjectTool.PHOTOSHOP]: {
    name: ProjectTool.PHOTOSHOP,
    icon: getIcon('photoshop_ico-color.svg', 'tools', 'photoshop'),
  },
  [ProjectTool.FIGMA]: {
    name: ProjectTool.FIGMA,
    icon: getIcon('figma_ico-color.svg', 'tools', 'figma'),
  },
};
