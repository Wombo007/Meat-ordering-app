import { createZoneEntries } from '../utils';
import { ZoneInfo } from '../types';

export const brisbaneZones: { [postcode: string]: ZoneInfo } = {
  // Brisbane Metro (Zone 10)
  ...createZoneEntries(
    ['4110', '4035', '4010', '4051', '4161', '4115', '4306', '4103', '4070', '4054', '4108'],
    '10',
    'BNE METRO',
    'Brisbane'
  ),

  // Gold Coast (Zone 11)
  ...createZoneEntries(
    ['4211', '4207', '4214', '4217', '4214', '4213', '4215', '4207', '4207', '4211'],
    '11',
    'GOLD COAST',
    'Brisbane'
  )
  // Add remaining Brisbane zones...
};