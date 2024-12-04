import { ZoneInfo } from '../zoneTypes';

// Helper function to create zone entries for a range of postcodes
const createZoneEntries = (postcodes: string[], zoneId: string, zoneName: string, depot: string) => {
  return postcodes.reduce((acc, postcode) => {
    acc[postcode] = { id: zoneId, name: zoneName, depot };
    return acc;
  }, {} as { [key: string]: ZoneInfo });
};

export const nswZones: { [postcode: string]: ZoneInfo } = {
  // Sydney Metro (Zone 1)
  ...createZoneEntries(
    ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    '1',
    'SYD METRO',
    'Sydney'
  ),

  // Sydney Regional (Zone 2)
  ...createZoneEntries(
    ['2753', '2156', '2159', '2077', '2555', '2765', '2081', '2082', '2159'],
    '2',
    'SYD REGIONAL',
    'Sydney'
  ),

  // Sydney Southwest (Zone 3)
  ...createZoneEntries(
    ['2560', '2179', '2565', '2570', '2571', '2572', '2573', '2574', '2575', '2576', '2577'],
    '3',
    'SYD SOUTHWEST',
    'Sydney'
  ),

  // Newcastle (Zone 4)
  ...createZoneEntries(
    ['2289', '2283', '2284', '2280', '2290', '2287', '2281', '2292', '2293', '2294', '2295'],
    '4',
    'NEWCASTLE',
    'Newcastle'
  ),

  // Newcastle Regional (Zone 24)
  ...createZoneEntries(
    ['2320', '2321', '2322', '2323', '2324', '2325', '2326', '2327', '2328', '2329'],
    '24',
    'NEWCASTLE REGIONAL',
    'Newcastle'
  ),

  // Taree (Zone 33)
  ...createZoneEntries(
    ['2430', '2431', '2439', '2440', '2441', '2442', '2443', '2444', '2445'],
    '33',
    'TAREE',
    'Newcastle'
  ),

  // Port Macquarie (Zone 34)
  ...createZoneEntries(
    ['2444', '2445', '2446', '2447', '2448', '2449'],
    '34',
    'PORT MACQUARIE',
    'Newcastle'
  ),

  // Singleton (Zone 36)
  ...createZoneEntries(
    ['2330', '2331', '2333', '2334', '2335', '2336', '2337', '2338'],
    '36',
    'SINGLETON',
    'Newcastle'
  ),

  // Wollongong (Zone 18)
  ...createZoneEntries(
    ['2500', '2501', '2502', '2503', '2504', '2505', '2506', '2515', '2516', '2517', '2518', '2519'],
    '18',
    'WOLLONGONG',
    'Sydney'
  ),

  // Central Coast (Zone 19)
  ...createZoneEntries(
    ['2250', '2251', '2252', '2253', '2254', '2255', '2256', '2257', '2258', '2259', '2260', '2261', '2262', '2263'],
    '19',
    'CENTRAL COAST',
    'Sydney'
  ),

  // Southern Highlands (Zone 21)
  ...createZoneEntries(
    ['2571', '2572', '2573', '2574', '2575', '2576', '2577', '2578', '2579', '2580'],
    '21',
    'SOUTHERN HIGHLANDS',
    'Sydney'
  ),

  // Goulburn (Zone 22)
  ...createZoneEntries(
    ['2580', '2581', '2582', '2583', '2584', '2585', '2586'],
    '22',
    'GOULBURN',
    'Canberra'
  ),

  // Blue Mountains (Zone 29)
  ...createZoneEntries(
    ['2774', '2776', '2777', '2778', '2779', '2780', '2782', '2783', '2784', '2785', '2786'],
    '29',
    'BLUE MOUNTAINS',
    'Sydney'
  ),

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

  // South Coast (Zone 35)
  ...createZoneEntries(
    ['2535', '2536', '2537', '2538', '2539', '2540', '2541'],
    '35',
    'SOUTH COAST',
    'Sydney'
  ),

  // Yass (Zone 37)
  ...createZoneEntries(
    ['2581', '2582', '2583', '2584', '2585', '2586', '2587'],
    '37',
    'YASS',
    'Canberra'
  ),

  // Coffs Harbour (Zone 38)
  ...createZoneEntries(
    ['2450', '2452', '2453', '2454', '2455', '2456', '2457'],
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
  ...createZoneEntries(
    ['2455'],
    '95',
    'URUNGA',
    'Coffs Harbour'
  ),

  // South Coast Regional (Zone 72)
  ...createZoneEntries(
    ['2546', '2550', '2536', '2537', '2538', '2539', '2540', '2541'],
    '72',
    'SOUTH COAST REGIONAL',
    'Canberra'
  )
};