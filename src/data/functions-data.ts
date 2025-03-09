import { ICON_COLOR } from '@/constants/icons';
import { FunctionItem, ProjectFunction } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const FunctionsData: Record<ProjectFunction, FunctionItem> = {
  [ProjectFunction.PLANNED]: {
    name: ProjectFunction.PLANNED,
    icon: getIcon(
      `${ProjectFunction.PLANNED}_ico-${ICON_COLOR}.svg`,
      'functions',
      ProjectFunction.PLANNED,
    ),
    desc: 'Defined project scope, goals, and initial architecture to ensure a structured workflow.',
  },
  [ProjectFunction.DESIGNED]: {
    name: ProjectFunction.DESIGNED,
    icon: getIcon(
      `${ProjectFunction.DESIGNED}_ico-${ICON_COLOR}.svg`,
      'functions',
      ProjectFunction.DESIGNED,
    ),
    desc: 'Created wireframes, prototypes, and UI/UX layouts to establish a cohesive design.',
  },
  [ProjectFunction.DEVELOPED]: {
    name: ProjectFunction.DEVELOPED,
    icon: getIcon(
      `${ProjectFunction.DEVELOPED}_ico-${ICON_COLOR}.svg`,
      'functions',
      ProjectFunction.DEVELOPED,
    ),
    desc: 'Built and structured the core functionalities and features using best coding practices.',
  },
  [ProjectFunction.IMPLEMENTED]: {
    name: ProjectFunction.IMPLEMENTED,
    icon: getIcon(
      `${ProjectFunction.IMPLEMENTED}_ico-${ICON_COLOR}.svg`,
      'functions',
      ProjectFunction.IMPLEMENTED,
    ),
    desc: 'Integrated features, APIs, and third-party services to enhance application capabilities.',
  },
  [ProjectFunction.OPTIMIZED]: {
    name: ProjectFunction.OPTIMIZED,
    icon: getIcon(
      `${ProjectFunction.OPTIMIZED}_ico-${ICON_COLOR}.svg`,
      'functions',
      ProjectFunction.OPTIMIZED,
    ),
    desc: 'Refactored code, improved performance, and ensured maintainability of the project.',
  },
  [ProjectFunction.DEPLOYED]: {
    name: ProjectFunction.DEPLOYED,
    icon: getIcon(
      `${ProjectFunction.DEPLOYED}_ico-${ICON_COLOR}.svg`,
      'functions',
      ProjectFunction.DEPLOYED,
    ),
    desc: 'Successfully launched the project to production with monitoring and CI/CD workflows.',
  },
};
