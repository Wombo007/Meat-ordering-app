import { ZoneInfo } from './zoneTypes';
import { adelaideZones } from './regions/adelaide';
import { victoriaZones } from './regions/victoria';
import { queenslandZones } from './regions/queensland';
import { nswZones } from './regions/nsw';

// Combine all regional zones into a single mapping
export const postcodeToZone: { [key: string]: ZoneInfo } = {
  ...adelaideZones,
  ...victoriaZones,
  ...queenslandZones,
  ...nswZones
};