import { FunctionItem, ProjectFunction } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const FunctionsData: Record<ProjectFunction, FunctionItem> = {
  [ProjectFunction.PLANNED]: {
    name: ProjectFunction.PLANNED,
    icon: getIcon('planned_ico-color.svg', 'functions', 'planned'),
    desc: 'Defined project scope, goals, and initial architecture to ensure a structured workflow.',
  },
  [ProjectFunction.DESIGNED]: {
    name: ProjectFunction.DESIGNED,
    icon: getIcon('designed_ico-color.svg', 'functions', 'designed'),
    desc: 'Created wireframes, prototypes, and UI/UX layouts to establish a cohesive design.',
  },
  [ProjectFunction.DEVELOPED]: {
    name: ProjectFunction.DEVELOPED,
    icon: getIcon('developed_ico-color.svg', 'functions', 'developed'),
    desc: 'Built and structured the core functionalities and features using best coding practices.',
  },
  [ProjectFunction.IMPLEMENTED]: {
    name: ProjectFunction.IMPLEMENTED,
    icon: getIcon('implemented_ico-color.svg', 'functions', 'implemented'),
    desc: 'Integrated features, APIs, and third-party services to enhance application capabilities.',
  },
  [ProjectFunction.OPTIMIZED]: {
    name: ProjectFunction.OPTIMIZED,
    icon: getIcon('optimized_ico-color.svg', 'functions', 'optimized'),
    desc: 'Refactored code, improved performance, and ensured maintainability of the project.',
  },
  [ProjectFunction.DEPLOYED]: {
    name: ProjectFunction.DEPLOYED,
    icon: getIcon('deployed_ico-color.svg', 'functions', 'deployed'),
    desc: 'Successfully launched the project to production with monitoring and CI/CD workflows.',
  },
};
