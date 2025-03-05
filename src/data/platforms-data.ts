import { Platform, PlatformItem } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const PlatformsData: Record<Platform, PlatformItem> = {
  [Platform.WEB]: {
    name: Platform.WEB,
    icon: getIcon('web_ico-gray.svg', 'platforms', 'web'),
  },
  [Platform.MOBILE]: {
    name: Platform.MOBILE,
    icon: getIcon('mobile_ico-gray.svg', 'platforms', 'mobile'),
  },
  [Platform.DESKTOP]: {
    name: Platform.DESKTOP,
    icon: getIcon('desktop_ico-gray.svg', 'platforms', 'desktop'),
  },
};
