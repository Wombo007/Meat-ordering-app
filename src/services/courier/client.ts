import { getDeliveryOptions } from './api';
import { DeliveryOption, DeliveryTimeSlot } from './types';
import { HttpError } from './http';

class CourierClient {
  private formatTimeSlots(timeSlots: DeliveryTimeSlot[]): DeliveryOption['timeWindows'] {
    return timeSlots
      .filter(slot => slot.start_time && slot.end_time)
      .map(slot => ({
        startTime: slot.start_time,
        endTime: slot.end_time,
        available: slot.available
      }));
  }

  async getAvailableDeliveryOptions(postcode: string): Promise<DeliveryOption[]> {
    if (!postcode || postcode.length !== 4) {
      throw new HttpError('Invalid postcode format');
    }

    try {
      const response = await getDeliveryOptions(postcode);

      if (!response.success || !response.data?.dates) {
        throw new HttpError('No delivery options available');
      }

      return response.data.dates.map(date => ({
        date: date.date,
        timeWindows: this.formatTimeSlots(date.time_slots)
      }));
    } catch (error) {
      if (error instanceof HttpError) {
        throw error;
      }
      throw new HttpError('Failed to fetch delivery options');
    }
  }
}

export const courierClient = new CourierClient();