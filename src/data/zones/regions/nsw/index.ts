import { ZoneInfo } from '../../zoneTypes';
import { nswMetroZones } from './metro';
import { nswRegionalZones } from './regional';
import { nswNewcastleZones } from './newcastle';
import { nswCoastalZones } from './coastal';
import { nswInlandZones } from './inland';
import { nswSouthernZones } from './southern';
import { nswNorthernZones } from './northern';

export const nswZones: { [postcode: string]: ZoneInfo } = {
  ...nswMetroZones,
  ...nswRegionalZones,
  ...nswNewcastleZones,
  ...nswCoastalZones,
  ...nswInlandZones,
  ...nswSouthernZones,
  ...nswNorthernZones
};