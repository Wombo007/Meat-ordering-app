import { createZoneEntries } from '../utils';
import { ZoneInfo } from '../types';

export const southWestVicZones: { [postcode: string]: ZoneInfo } = {
  // South West VIC (Zone 65)
  ...createZoneEntries(
    ['3237', '3277', '3305', '3249', '3233', '3268', '3238', '3249', '3249', '3249'],
    '65',
    'SOUTH WEST VIC',
    'Melbourne'
  )
};