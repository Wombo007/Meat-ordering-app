import { createZoneEntries } from '../utils';
import { ZoneInfo } from '../types';

export const westVicZones: { [postcode: string]: ZoneInfo } = {
  // West VIC (Zone 64)
  ...createZoneEntries(
    ['3468', '3377', '3350', '3364', '3465', '3371', '3364', '3467', '3350', '3364'],
    '64',
    'WEST VIC',
    'Melbourne'
  )
};