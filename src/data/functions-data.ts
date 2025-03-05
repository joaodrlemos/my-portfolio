import { FunctionItem, ProjectFunction } from '@/types/projectTypes';

export const FunctionsData: Record<ProjectFunction, FunctionItem> = {
  [ProjectFunction.PLANNED]: {
    name: ProjectFunction.PLANNED,
    icon: '/src/assets/icons/functions/planned/planned_ico-color.svg',
    desc: 'Defined project scope, goals, and initial architecture to ensure a structured workflow.',
  },
  [ProjectFunction.DESIGNED]: {
    name: ProjectFunction.DESIGNED,
    icon: '/src/assets/icons/functions/designed/designed_ico-color.svg',
    desc: 'Created wireframes, prototypes, and UI/UX layouts to establish a cohesive design.',
  },
  [ProjectFunction.DEVELOPED]: {
    name: ProjectFunction.DEVELOPED,
    icon: '/src/assets/icons/functions/developed/developed_ico-color.svg',
    desc: 'Built and structured the core functionalities and features using best coding practices.',
  },
  [ProjectFunction.IMPLEMENTED]: {
    name: ProjectFunction.IMPLEMENTED,
    icon: '/src/assets/icons/functions/implemented/implemented_ico-color.svg',
    desc: 'Integrated features, APIs, and third-party services to enhance application capabilities.',
  },
  [ProjectFunction.OPTIMIZED]: {
    name: ProjectFunction.OPTIMIZED,
    icon: '/src/assets/icons/functions/optimized/optimized_ico-color.svg',
    desc: 'Refactored code, improved performance, and ensured maintainability of the project.',
  },
  [ProjectFunction.DEPLOYED]: {
    name: ProjectFunction.DEPLOYED,
    icon: '/src/assets/icons/functions/deployed/deployed_ico-color.svg',
    desc: 'Successfully launched the project to production with monitoring and CI/CD workflows.',
  },
};
