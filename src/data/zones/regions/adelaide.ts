import { createZoneEntries } from '../utils';
import { ZoneInfo } from '../types';

export const adelaideZones: { [postcode: string]: ZoneInfo } = {
  // Adelaide Metro (Zone 15)
  ...createZoneEntries(
    ['5159', '5000', '5950', '5014', '5014', '5154', '5173', '5173', '5009', '5373', '5351', '5114'],
    '15',
    'ADL METRO',
    'Adelaide'
  )
  // Add remaining Adelaide zones...
};