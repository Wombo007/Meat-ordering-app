import { fetchFromApi } from './api';
import { DeliveryTimeSlot } from './types';

export async function getTimeWindows(zoneId: number): Promise<DeliveryTimeSlot[]> {
  return fetchFromApi<DeliveryTimeSlot[]>(`/zones/${zoneId}/timewindows`) || [];
}