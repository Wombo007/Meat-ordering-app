import { createZoneEntries } from '../utils';
import { ZoneInfo } from '../types';

export const gippslandZones: { [postcode: string]: ZoneInfo } = {
  // Gippsland (Zone 23)
  ...createZoneEntries(
    ['3825', '3851', '3823', '3825', '3818', '3875', '3875', '3875', '3888', '3844'],
    '23',
    'GIPPSLAND',
    'Melbourne'
  ),

  // Gippsland South (Zone 46)
  ...createZoneEntries(
    ['3984', '3962', '3971', '3971', '3871', '3871', '3979', '3995', '3951', '3995'],
    '46',
    'GIPPSLAND SOUTH',
    'Melbourne'
  )
};