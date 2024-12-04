import { fetchFromApi } from './api';
import { ZoneInfo } from './types';

export async function getZones(): Promise<ZoneInfo[]> {
  return fetchFromApi<ZoneInfo[]>('/zones/zonedpins') || [];
}

export async function findZoneByPostcode(postcode: string): Promise<ZoneInfo | null> {
  try {
    const zones = await getZones();
    return zones.find(zone => zone.postcode === postcode) || null;
  } catch (error) {
    console.error('Error finding zone:', error);
    return null;
  }
}