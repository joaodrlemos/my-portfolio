import { InstitutionItem, Institution } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const institutionsData: Record<Institution, InstitutionItem> = {
  [Institution.NAU]: {
    name: Institution.NAU,
    icon: getIcon('nau_ico-color.svg', 'institutions', 'nau'),
  },
  [Institution.ATLASSIAN]: {
    name: Institution.ATLASSIAN,
    icon: getIcon('atlassian_ico-color.svg', 'institutions', 'atlassian'),
  },
  [Institution.FREECODECAMP]: {
    name: Institution.FREECODECAMP,
    icon: getIcon('freecodecamp_ico-color.svg', 'institutions', 'freecodecamp'),
  },
  [Institution.HACKERRANK]: {
    name: Institution.HACKERRANK,
    icon: getIcon('hackerrank_ico-color.svg', 'institutions', 'hackerrank'),
  },
  [Institution.LINKEDIN]: {
    name: Institution.LINKEDIN,
    icon: getIcon('linkedin_ico-color.svg', 'institutions', 'linkedin'),
  },
  [Institution.UDEMY]: {
    name: Institution.UDEMY,
    icon: getIcon('udemy_ico-color.svg', 'institutions', 'udemy'),
  },
  [Institution.FCT]: {
    name: Institution.FCT,
    icon: getIcon('fct_ico-color.svg', 'institutions', 'fct'),
  },
};
