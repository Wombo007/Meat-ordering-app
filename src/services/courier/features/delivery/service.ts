import { mockDeliveryResponse, validPostcodes } from './mockData';
import { DeliveryDate, DeliveryTimeWindow } from './types';
import { HttpError } from '../../core/errors';
import { validatePostcode } from '../../core/validation';

const MOCK_MODE = true; // Toggle this to switch between mock and real API

export class DeliveryService {
  private formatTimeWindows(timeSlots: Array<{ start_time: string; end_time: string; available: boolean }>): DeliveryTimeWindow[] {
    return timeSlots
      .filter(slot => slot.start_time && slot.end_time)
      .map(slot => ({
        startTime: slot.start_time,
        endTime: slot.end_time,
        available: slot.available
      }));
  }

  async getAvailableDeliveryDates(postcode: string): Promise<DeliveryDate[]> {
    validatePostcode(postcode);

    if (MOCK_MODE) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check if postcode is in valid list
      if (!validPostcodes.includes(postcode)) {
        throw new HttpError('Delivery is not available in this area');
      }

      return mockDeliveryResponse.data.dates.map(date => ({
        date: date.date,
        timeWindows: this.formatTimeWindows(date.time_slots)
      }));
    }

    try {
      // Real API implementation would go here
      throw new HttpError('Live API not yet implemented');
    } catch (error) {
      if (error instanceof HttpError) {
        throw error;
      }
      throw new HttpError('Failed to get delivery dates');
    }
  }
}

export const deliveryService = new DeliveryService();