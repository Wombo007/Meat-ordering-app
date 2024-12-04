import { createZoneEntries } from '../utils';
import { ZoneInfo } from '../types';

export const melbourneZones: { [postcode: string]: ZoneInfo } = {
  // Melbourne Metro (Zone 5)
  ...createZoneEntries(
    ['3067', '3040', '3042', '3021', '3206', '3020', '3078', '3018', '3025', '3025', '3028', '3025'],
    '5',
    'MEL METRO',
    'Melbourne'
  ),

  // Geelong (Zone 6)
  ...createZoneEntries(
    ['3231', '3213', '3230', '3217', '3212', '3331', '3220', '3221', '3227', '3213'],
    '6',
    'GEELONG',
    'Melbourne'
  ),

  // Mornington Peninsula (Zone 7)
  ...createZoneEntries(
    ['3936', '3926', '3926', '3911', '3918', '3942', '3939', '3939', '3940', '3919'],
    '7',
    'MORNINGTON PENINSULA',
    'Melbourne'
  ),

  // Central Highlands (Zone 8)
  ...createZoneEntries(
    ['3336', '3340', '3342', '3340', '3340', '3458', '3342', '3458', '3342', '3335'],
    '8',
    'CENTRAL HIGHLANDS',
    'Melbourne'
  ),

  // Yarra Ranges (Zone 9)
  ...createZoneEntries(
    ['3782', '3777', '3139', '3160', '3160', '3160', '3799', '3777', '3116', '3775'],
    '9',
    'YARRA RANGES', 
    'Melbourne'
  )
};