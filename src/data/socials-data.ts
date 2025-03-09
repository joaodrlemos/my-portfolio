import { Social, SocialItem } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const SocialsData: Record<Social, SocialItem> = {
  [Social.FACEBOOK]: {
    name: Social.FACEBOOK,
    icon: getIcon('facebook_ico-color.png', 'socials', 'facebook'),
    link: 'https://www.facebook.com/JoaoDRLemos',
  },
  [Social.INSTAGRAM]: {
    name: Social.INSTAGRAM,
    icon: getIcon('instagram_ico-color.png', 'socials', 'instagram'),
    link: 'https://www.instagram.com/johny_lemings/',
  },
  [Social.GITHUB]: {
    name: Social.GITHUB,
    icon: getIcon('github_ico-color.png', 'socials', 'github'),
    link: 'https://github.com/joaodrlemos',
  },
  [Social.YOUTUBE]: {
    name: Social.YOUTUBE,
    icon: getIcon('youtube_ico-color.png', 'socials', 'youtube'),
    link: 'https://www.youtube.com/@johny_lemings',
  },
  [Social.LINKEDIN]: {
    name: Social.LINKEDIN,
    icon: getIcon('linkedin_ico-color.png', 'socials', 'linkedin'),
    link: 'https://www.linkedin.com/in/joaodrlemos/',
  },
};
