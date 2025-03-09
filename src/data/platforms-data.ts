import { ICON_COLOR } from '@/constants/icons';
import { Platform, PlatformItem } from '@/types/projectTypes';
import { getIcon } from '@/utils/imageUtils';

export const PlatformsData: Record<Platform, PlatformItem> = {
  [Platform.WEB]: {
    name: Platform.WEB,
    icon: getIcon(
      `${Platform.WEB}_ico-${ICON_COLOR}.svg`,
      'platforms',
      Platform.WEB,
    ),
  },
  [Platform.MOBILE]: {
    name: Platform.MOBILE,
    icon: getIcon(
      `${Platform.MOBILE}_ico-${ICON_COLOR}.svg`,
      'platforms',
      Platform.MOBILE,
    ),
  },
  [Platform.DESKTOP]: {
    name: Platform.DESKTOP,
    icon: getIcon(
      `${Platform.DESKTOP}_ico-${ICON_COLOR}.svg`,
      'platforms',
      Platform.DESKTOP,
    ),
  },
};
