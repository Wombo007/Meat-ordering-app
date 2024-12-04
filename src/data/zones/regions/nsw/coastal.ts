import { ZoneInfo } from '../../zoneTypes';
import { createZoneEntries } from '../../utils';

export const nswCoastalZones: { [postcode: string]: ZoneInfo } = {
  // Wollongong (Zone 18)
  ...createZoneEntries(
    [
      '2500', '2502', '2505', '2506', '2508', '2515', '2516', '2517', '2518', '2519',
      '2525', '2526', '2527', '2528', '2529', '2530', '2533', '2534'
    ],
    '18',
    'WOLLONGONG',
    'Sydney'
  ),

  // Central Coast (Zone 19)
  ...createZoneEntries(
    [
      '2250', '2251', '2256', '2257', '2258', '2259', '2260', '2261', '2262', '2263',
      '2264', '2265', '2267'
    ],
    '19',
    'CENTRAL COAST',
    'Sydney'
  ),

  // South Coast (Zone 35)
  ...createZoneEntries(
    ['2535', '2536', '2537', '2538', '2539', '2540', '2541'],
    '35',
    'SOUTH COAST',
    'Sydney'
  )
};