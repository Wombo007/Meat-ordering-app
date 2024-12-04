import { ZoneInfo } from '../../zoneTypes';
import { createZoneEntries } from '../../utils';

export const nswNorthernZones: { [postcode: string]: ZoneInfo } = {
  // Coffs Harbour (Zone 38)
  ...createZoneEntries(
    [
      '2450', '2452', '2453', '2454', '2455', '2456', '2457', '2441', '2442', '2443', 
      '2444', '2445', '2446', '2447', '2448', '2449'
    ],
    '38',
    'COFFS HARBOUR',
    'Coffs Harbour'
  ),

  // Grafton (Zone 88)
  ...createZoneEntries(
    ['2460', '2461', '2462', '2463', '2464', '2465', '2466'],
    '88',
    'GRAFTON',
    'Coffs Harbour'
  ),

  // Urunga (Zone 95)
  ...createZoneEntries(['2455'],
    '95',
    'URUNGA',
    'Coffs Harbour'
  )
};