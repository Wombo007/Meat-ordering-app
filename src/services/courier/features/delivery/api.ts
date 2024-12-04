import { fetchWithTimeout } from '../../core/http';
import { courierConfig } from '../../config';
import { DeliveryOptionsResponse } from './types';
import { validatePostcode } from '../../core/validation';
import { HttpError } from '../../core/errors';

export async function fetchDeliveryOptions(postcode: string): Promise<DeliveryOptionsResponse> {
  validatePostcode(postcode);

  try {
    const url = `${courierConfig.baseUrl}${courierConfig.endpoints.deliveryOptions}?postcode=${postcode}`;
    const response = await fetchWithTimeout<DeliveryOptionsResponse>(url);

    if (!response.success) {
      throw new HttpError('Failed to fetch delivery options');
    }

    return response;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError('An unexpected error occurred while fetching delivery options');
  }
}