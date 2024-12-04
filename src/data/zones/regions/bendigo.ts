import { createZoneEntries } from '../utils';
import { ZoneInfo } from '../types';

export const bendigoZones: { [postcode: string]: ZoneInfo } = {
  // Bendigo (Zone 26)
  ...createZoneEntries(
    ['3475', '3465', '3350', '3364', '3465', '3371', '3364', '3467', '3350', '3364'],
    '26',
    'BENDIGO',
    'Melbourne'
  )
};