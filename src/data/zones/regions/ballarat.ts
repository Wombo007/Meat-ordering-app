import { createZoneEntries } from '../utils';
import { ZoneInfo } from '../types';

export const ballaratZones: { [postcode: string]: ZoneInfo } = {
  // Ballarat (Zone 60)
  ...createZoneEntries(
    ['3352', '3465', '3350', '3364', '3465', '3371', '3364', '3467', '3350', '3364'],
    '60',
    'BALLARAT',
    'Melbourne'
  )
};