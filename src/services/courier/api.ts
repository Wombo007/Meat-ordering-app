import { courierConfig } from './config';
import { HttpError, fetchWithTimeout } from './http';
import { DeliveryOptionsResponse } from './types';
import { mockDeliveryResponse, validPostcodes } from './mockData';

const MOCK_MODE = true; // Toggle this to switch between mock and real API

export async function getDeliveryOptions(postcode: string): Promise<DeliveryOptionsResponse> {
  if (MOCK_MODE) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check if postcode is in valid list
    if (!validPostcodes.includes(postcode)) {
      throw new HttpError('Delivery is not available in this area');
    }

    return mockDeliveryResponse;
  }

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