import { ICON_INSTITUTION_COLOR } from '@/constants/icons';
import { InstitutionItem, Institution } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const institutionsData: Record<Institution, InstitutionItem> = {
  [Institution.NAU]: {
    name: Institution.NAU,
    icon: getIcon(
      `${Institution.NAU}_ico-${ICON_INSTITUTION_COLOR}.svg`,
      'institutions',
      Institution.NAU,
    ),
  },
  [Institution.ATLASSIAN]: {
    name: Institution.ATLASSIAN,
    icon: getIcon(
      `${Institution.ATLASSIAN}_ico-${ICON_INSTITUTION_COLOR}.svg`,
      'institutions',
      Institution.ATLASSIAN,
    ),
  },
  [Institution.FREECODECAMP]: {
    name: Institution.FREECODECAMP,
    icon: getIcon(
      `${Institution.FREECODECAMP}_ico-${ICON_INSTITUTION_COLOR}.svg`,
      'institutions',
      Institution.FREECODECAMP,
    ),
  },
  [Institution.HACKERRANK]: {
    name: Institution.HACKERRANK,
    icon: getIcon(
      `${Institution.HACKERRANK}_ico-${ICON_INSTITUTION_COLOR}.svg`,
      'institutions',
      Institution.HACKERRANK,
    ),
  },
  [Institution.LINKEDIN]: {
    name: Institution.LINKEDIN,
    icon: getIcon(
      `${Institution.LINKEDIN}_ico-${ICON_INSTITUTION_COLOR}.svg`,
      'institutions',
      Institution.LINKEDIN,
    ),
  },
  [Institution.UDEMY]: {
    name: Institution.UDEMY,
    icon: getIcon(
      `${Institution.UDEMY}_ico-${ICON_INSTITUTION_COLOR}.svg`,
      'institutions',
      Institution.UDEMY,
    ),
  },
  [Institution.FCT]: {
    name: Institution.FCT,
    icon: getIcon(
      `${Institution.FCT}_ico-${ICON_INSTITUTION_COLOR}.svg`,
      'institutions',
      Institution.FCT,
    ),
  },
};
