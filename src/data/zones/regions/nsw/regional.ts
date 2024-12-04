import { ZoneInfo } from '../../zoneTypes';
import { createZoneEntries } from '../../utils';

export const nswRegionalZones: { [postcode: string]: ZoneInfo } = {
  // Sydney Regional (Zone 2)
  ...createZoneEntries(
    ['2753', '2156', '2159', '2077', '2555', '2765', '2081', '2082', '2157', '2158', '2159', '2745', '2747', '2748', '2749', '2750', '2751', '2752', '2753', '2754', '2755', '2756', '2757', '2758', '2759', '2760', '2761', '2762', '2763', '2765', '2766', '2767', '2768', '2769', '2770', '2773', '2774', '2776', '2777', '2778', '2779'],
    '2',
    'SYD REGIONAL',
    'Sydney'
  ),

  // Sydney Southwest (Zone 3)
  ...createZoneEntries(
    ['2556', '2557', '2558', '2559', '2560', '2563', '2564', '2565', '2566', '2567', '2568', '2569', '2570', '2571', '2572', '2573', '2574', '2575', '2576', '2577'],
    '3',
    'SYD SOUTHWEST',
    'Sydney'
  )
};