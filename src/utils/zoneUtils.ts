import { postcodeToZone } from '../data/zones/postcodeMapping';
import { ZoneInfo } from '../data/zones/zoneTypes';

export function getZoneFromPostcode(postcode: string): ZoneInfo | null {
  return postcodeToZone[postcode] || null;
}

export function validatePostcode(code: string): boolean {
  const isValidFormat = /^\d{4}$/.test(code);
  const hasValidZone = Boolean(getZoneFromPostcode(code));
  return isValidFormat && hasValidZone;
}