import { ICON_COLOR } from '@/constants/icons';
import { ProjectTool, ToolItem } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const ToolsData: Record<ProjectTool, ToolItem> = {
  [ProjectTool.GIT]: {
    name: ProjectTool.GIT,
    icon: getIcon(
      `${ProjectTool.GIT}_ico-${ICON_COLOR}.svg`,
      'tools',
      ProjectTool.GIT,
    ),
  },
  [ProjectTool.JIRA]: {
    name: ProjectTool.JIRA,
    icon: getIcon(
      `${ProjectTool.JIRA}_ico-${ICON_COLOR}.svg`,
      'tools',
      ProjectTool.JIRA,
    ),
  },
  [ProjectTool.CONFLUENCE]: {
    name: ProjectTool.CONFLUENCE,
    icon: getIcon(
      `${ProjectTool.CONFLUENCE}_ico-${ICON_COLOR}.svg`,
      'tools',
      ProjectTool.CONFLUENCE,
    ),
  },
  [ProjectTool.PHOTOSHOP]: {
    name: ProjectTool.PHOTOSHOP,
    icon: getIcon(
      `${ProjectTool.PHOTOSHOP}_ico-${ICON_COLOR}.svg`,
      'tools',
      ProjectTool.PHOTOSHOP,
    ),
  },
  [ProjectTool.FIGMA]: {
    name: ProjectTool.FIGMA,
    icon: getIcon(
      `${ProjectTool.FIGMA}_ico-${ICON_COLOR}.svg`,
      'tools',
      ProjectTool.FIGMA,
    ),
  },
};
