import { InstitutionItem, Institution } from '@/types/projectTypes';

export const institutionsData: Record<Institution, InstitutionItem> = {
  [Institution.NAU]: {
    name: Institution.NAU,
    icon: '/src/assets/icons/institutions/nau/nau_ico-color.svg',
  },
  [Institution.ATLASSIAN]: {
    name: Institution.ATLASSIAN,
    icon: '/src/assets/icons/institutions/atlassian/atlassian_ico-color.svg',
  },
  [Institution.FREECODECAMP]: {
    name: Institution.FREECODECAMP,
    icon: '/src/assets/icons/institutions/freecodecamp/freecodecamp_ico-color.svg',
  },
  [Institution.HACKERRANK]: {
    name: Institution.HACKERRANK,
    icon: '/src/assets/icons/institutions/hackerrank/hackerrank_ico-color.svg',
  },
  [Institution.LINKEDIN]: {
    name: Institution.LINKEDIN,
    icon: '/src/assets/icons/institutions/linkedin/linkedin_ico-color.svg',
  },
  [Institution.UDEMY]: {
    name: Institution.UDEMY,
    icon: '/src/assets/icons/institutions/udemy/udemy_ico-color.svg',
  },
  [Institution.FCT]: {
    name: Institution.FCT,
    icon: '/src/assets/icons/institutions/fct/fct_ico-color.svg',
  },
};
