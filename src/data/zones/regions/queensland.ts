import { ZoneInfo } from '../zoneTypes';

const createZoneEntries = (postcodes: string[], zoneId: string, zoneName: string, depot: string) => {
  return postcodes.reduce((acc, postcode) => {
    acc[postcode] = { id: zoneId, name: zoneName, depot };
    return acc;
  }, {} as { [key: string]: ZoneInfo });
};

export const queenslandZones: { [postcode: string]: ZoneInfo } = {
  // Brisbane Metro (Zone 10)
  ...createZoneEntries(
    ['4000', '4001', '4002', '4003', '4004', '4005', '4006', '4007', '4008', '4009', '4010', '4011', '4012', '4013'],
    '10',
    'BNE METRO',
    'Brisbane'
  ),

  // Gold Coast (Zone 11)
  ...createZoneEntries(
    ['4211', '4212', '4213', '4214', '4215', '4216', '4217', '4218', '4219', '4220'],
    '11',
    'GOLD COAST',
    'Brisbane'
  ),

  // Sunshine Coast (Zone 12)
  ...createZoneEntries(
    ['4550', '4551', '4552', '4553', '4554', '4555', '4556', '4557', '4558', '4559', '4560'],
    '12',
    'SUNSHINE COAST',
    'Brisbane'
  )
  // Add remaining Queensland zones...
};