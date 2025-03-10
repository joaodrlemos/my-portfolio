import { ICON_SOCIALS_TYPE, ICON_SOCIALS_COLOR } from '@/constants/icons';
import { Social, SocialItem } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const SocialsData: Partial<Record<Social, SocialItem>> = {
  [Social.GITHUB]: {
    name: Social.GITHUB,
    icon: getIcon(
      `${Social.GITHUB}${ICON_SOCIALS_TYPE}_ico-${ICON_SOCIALS_COLOR}.svg`,
      'socials',
      Social.GITHUB,
    ),
    link: 'https://github.com/joaodrlemos',
  },
  [Social.LINKEDIN]: {
    name: Social.LINKEDIN,
    icon: getIcon(
      `${Social.LINKEDIN}${ICON_SOCIALS_TYPE}_ico-${ICON_SOCIALS_COLOR}.svg`,
      'socials',
      Social.LINKEDIN,
    ),
    link: 'https://www.linkedin.com/in/joaodrlemos/',
  },
  [Social.INSTAGRAM]: {
    name: Social.INSTAGRAM,
    icon: getIcon(
      `${Social.INSTAGRAM}${ICON_SOCIALS_TYPE}_ico-${ICON_SOCIALS_COLOR}.svg`,
      'socials',
      Social.INSTAGRAM,
    ),
    link: 'https://www.instagram.com/johny_lemings/',
  },
  [Social.FACEBOOK]: {
    name: Social.FACEBOOK,
    icon: getIcon(
      `${Social.FACEBOOK}${ICON_SOCIALS_TYPE}_ico-${ICON_SOCIALS_COLOR}.svg`,
      'socials',
      Social.FACEBOOK,
    ),
    link: 'https://www.facebook.com/JoaoDRLemos',
  },
  // [Social.YOUTUBE]: {
  //   name: Social.YOUTUBE,
  //   icon: getIcon(
  //    `${Social.YOUTUBE}${ICON_SOCIALS_TYPE}_ico-${ICON_SOCIALS_COLOR}.svg`,
  //    'socials',
  //   Social.YOUTUBE,
  //   ),
  //   link: 'https://www.youtube.com/@johny_lemings',
  // },
};
