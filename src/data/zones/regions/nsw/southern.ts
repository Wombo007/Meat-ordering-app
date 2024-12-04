import { ZoneInfo } from '../../zoneTypes';
import { createZoneEntries } from '../../utils';

export const nswSouthernZones: { [postcode: string]: ZoneInfo } = {
  // Yass (Zone 37) - Including Wagga Wagga and surrounding areas
  ...createZoneEntries(
    [
      '2650', '2651', '2652', '2653', '2655', '2656', '2658', '2659', '2660', 
      '2661', '2663', '2665', '2666', '2668', '2669', '2671', '2672', '2675', 
      '2678', '2680', '2681', '2700', '2701', '2702', '2703', '2705', '2706', 
      '2707', '2708', '2709', '2710', '2711', '2712', '2713', '2714', '2715', 
      '2716', '2717', '2720', '2721', '2722', '2725', '2726', '2727', '2729', 
      '2730', '2731', '2732', '2733', '2734', '2735', '2736', '2737', '2738', 
      '2739'
    ],
    '37',
    'YASS',
    'Canberra'
  ),

  // Albury (Zone 52)
  ...createZoneEntries(
    ['2640', '2641', '2642', '2643', '2644', '2645', '2646', '2647', '3691', '3694', '3749'],
    '52',
    'ALBURY',
    'Albury'
  ),

  // Albury Regional (Zone 91)
  ...createZoneEntries(
    ['2642', '2644', '2645', '2646', '2647', '2648', '2649', '2659', '2712', '2716', '2717'],
    '91',
    'ALBURY REGIONAL',
    'Albury'
  ),

  // South Coast Regional (Zone 72)
  ...createZoneEntries(
    ['2546', '2548', '2549', '2550', '2551', '2536', '2537', '2545'],
    '72',
    'SOUTH COAST REGIONAL',
    'Canberra'
  ),

  // Griffith (Zone 50)
  ...createZoneEntries(
    ['2680', '2681', '2705', '2706', '2707'],
    '50',
    'GRIFFITH',
    'Canberra'
  )
};