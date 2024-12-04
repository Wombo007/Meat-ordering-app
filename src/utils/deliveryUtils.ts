import { deliveryService } from '../services/courier';
import { DeliveryDate, HttpError } from '../services/courier';

export async function getDeliveryOptions(postcode: string): Promise<DeliveryDate[]> {
  if (!postcode || postcode.length !== 4) {
    return [];
  }

  try {
    return await deliveryService.getAvailableDeliveryDates(postcode);
  } catch (error) {
    console.error('Error fetching delivery options:', error);
    if (error instanceof HttpError) {
      throw new Error(error.message);
    }
    throw new Error('Unable to get delivery options');
  }
}

export function formatTimeWindow(startTime: string, endTime: string): string {
  if (!startTime || !endTime) return '';
  
  try {
    const formatTime = (time: string) => {
      const [hours, minutes] = time.split(':').map(Number);
      const date = new Date();
      date.setHours(hours, minutes);
      
      return date.toLocaleTimeString('en-AU', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    };

    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  } catch (error) {
    console.error('Error formatting time window:', error);
    return `${startTime} - ${endTime}`;
  }
}