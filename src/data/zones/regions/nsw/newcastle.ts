import { ZoneInfo } from '../../zoneTypes';
import { createZoneEntries } from '../../utils';

export const nswNewcastleZones: { [postcode: string]: ZoneInfo } = {
  // Newcastle (Zone 4)
  ...createZoneEntries(
    ['2282', '2283', '2284', '2285', '2286', '2287', '2289', '2290', '2291', '2292', '2293', '2294', '2295', '2296', '2297', '2298', '2299', '2300', '2302', '2303', '2304', '2305', '2306', '2307', '2308', '2309'],
    '4',
    'NEWCASTLE',
    'Newcastle'
  ),

  // Newcastle Regional (Zone 24)
  ...createZoneEntries(
    ['2311', '2312', '2314', '2315', '2316', '2317', '2318', '2319', '2320', '2321', '2322', '2323', '2324', '2325', '2326', '2327', '2328', '2329', '2330'],
    '24',
    'NEWCASTLE REGIONAL',
    'Newcastle'
  )
};