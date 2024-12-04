import { ZoneInfo } from './types';
import { zoneSchedules } from './schedules';

const zoneRegistry: { [postcode: string]: ZoneInfo } = {};

export const registerZone = (
  postcode: string,
  zoneId: string,
  zoneName: string,
  depot: string
) => {
  zoneRegistry[postcode] = { id: zoneId, name: zoneName, depot };
};

export const getZoneInfo = (postcode: string): ZoneInfo | null => {
  return zoneRegistry[postcode] || null;
};

export const getZoneSchedule = (zoneId: string) => {
  return zoneSchedules[zoneId] || null;
};

export const getZonesByDepot = (depot: string): ZoneInfo[] => {
  return Object.values(zoneRegistry).filter(zone => zone.depot === depot);
};

export const getZoneById = (zoneId: string): ZoneInfo[] => {
  return Object.values(zoneRegistry).filter(zone => zone.id === zoneId);
};

export { zoneRegistry };