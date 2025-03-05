import { Platform, PlatformItem } from '@/types/projectTypes';

export const PlatformsData: Record<Platform, PlatformItem> = {
  [Platform.WEB]: {
    name: Platform.WEB,
    icon: '/src/assets/icons/platforms/web/web_ico-gray.svg',
  },
  [Platform.MOBILE]: {
    name: Platform.MOBILE,
    icon: '/src/assets/icons/platforms/mobile/mobile_ico-gray.svg',
  },
  [Platform.DESKTOP]: {
    name: Platform.DESKTOP,
    icon: '/src/assets/icons/platforms/desktop/desktop_ico-gray.svg',
  },
};
