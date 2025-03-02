import { FunctionItem, ProjectFunctions } from '@/typings/generalTypes';

export const FunctionsData: FunctionItem[] = [
  {
    name: ProjectFunctions.PLANNED,
    icon: '/assets/icons/planned.ico',
    desc: 'Defined project scope, goals, and initial architecture to ensure a structured workflow.',
  },
  {
    name: ProjectFunctions.DESIGNED,
    icon: '/assets/icons/designed.ico',
    desc: 'Created wireframes, prototypes, and UI/UX layouts to establish a cohesive design.',
  },
  {
    name: ProjectFunctions.DEVELOPED,
    icon: '/assets/icons/developed.ico',
    desc: 'Built and structured the core functionalities and features using best coding practices.',
  },
  {
    name: ProjectFunctions.IMPLEMENTED,
    icon: '/assets/icons/implemented.ico',
    desc: 'Integrated features, APIs, and third-party services to enhance application capabilities.',
  },
  {
    name: ProjectFunctions.OPTIMIZED,
    icon: '/assets/icons/optimized.ico',
    desc: 'Refactored code, improved performance, and ensured maintainability of the project.',
  },
  {
    name: ProjectFunctions.DEPLOYED,
    icon: '/assets/icons/deployed.ico',
    desc: 'Successfully launched the project to production with monitoring and CI/CD workflows.',
  },
];
