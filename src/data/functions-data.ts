import { FunctionItem, ProjectFunction } from '@/typings/generalTypes';

export const FunctionsData: Record<ProjectFunction, FunctionItem> = {
  [ProjectFunction.PLANNED]: {
    name: ProjectFunction.PLANNED,
    icon: '/assets/icons/planned.ico',
    desc: 'Defined project scope, goals, and initial architecture to ensure a structured workflow.',
  },
  [ProjectFunction.DESIGNED]: {
    name: ProjectFunction.DESIGNED,
    icon: '/assets/icons/designed.ico',
    desc: 'Created wireframes, prototypes, and UI/UX layouts to establish a cohesive design.',
  },
  [ProjectFunction.DEVELOPED]: {
    name: ProjectFunction.DEVELOPED,
    icon: '/assets/icons/developed.ico',
    desc: 'Built and structured the core functionalities and features using best coding practices.',
  },
  [ProjectFunction.IMPLEMENTED]: {
    name: ProjectFunction.IMPLEMENTED,
    icon: '/assets/icons/implemented.ico',
    desc: 'Integrated features, APIs, and third-party services to enhance application capabilities.',
  },
  [ProjectFunction.OPTIMIZED]: {
    name: ProjectFunction.OPTIMIZED,
    icon: '/assets/icons/optimized.ico',
    desc: 'Refactored code, improved performance, and ensured maintainability of the project.',
  },
  [ProjectFunction.DEPLOYED]: {
    name: ProjectFunction.DEPLOYED,
    icon: '/assets/icons/deployed.ico',
    desc: 'Successfully launched the project to production with monitoring and CI/CD workflows.',
  },
};
