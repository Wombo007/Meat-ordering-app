import { ZoneInfo } from '../../zoneTypes';
import { createZoneEntries } from '../../utils';

export const nswInlandZones: { [postcode: string]: ZoneInfo } = {
  // Lithgow (Zone 30)
  ...createZoneEntries(
    ['2785', '2786', '2787', '2790', '2845', '2846', '2847'],
    '30',
    'LITHGOW',
    'Orange'
  ),

  // Bathurst (Zone 31)
  ...createZoneEntries(
    ['2795', '2796', '2797', '2798', '2799'],
    '31',
    'BATHURST',
    'Orange'
  ),

  // Orange (Zone 32)
  ...createZoneEntries(
    ['2800', '2865', '2866', '2867', '2868', '2869', '2870'],
    '32',
    'ORANGE',
    'Orange'
  ),

  // Dubbo (Zone 47)
  ...createZoneEntries(
    ['2820', '2830', '2831'],
    '47',
    'DUBBO',
    'Orange'
  ),

  // Forbes (Zone 48)
  ...createZoneEntries(
    ['2871', '2806', '2870', '2869'],
    '48',
    'FORBES',
    'Orange'
  ),

  // Mudgee (Zone 49)
  ...createZoneEntries(
    ['2850', '2852', '2849', '2848'],
    '49',
    'MUDGEE',
    'Orange'
  ),

  // Cowra (Zone 92)
  ...createZoneEntries(
    ['2794', '2793'],
    '92',
    'COWRA',
    'Orange'
  )
};