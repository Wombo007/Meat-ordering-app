import { ApiConfig, DeliveryZone, DeliverySchedule, ApiError } from './types';
import { apiConfig } from './config';

class DeliveryService {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  private async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error: ApiError = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  }

  async getZoneByPostcode(postcode: string): Promise<DeliveryZone> {
    return this.fetchWithAuth(`/zones/postcode/${postcode}`);
  }

  async getDeliverySchedule(zoneId: string, date: string): Promise<DeliverySchedule> {
    return this.fetchWithAuth(`/schedules/${zoneId}?date=${date}`);
  }

  async validateDeliveryTime(zoneId: string, date: string, time: string): Promise<boolean> {
    const response = await this.fetchWithAuth(`/schedules/${zoneId}/validate`, {
      method: 'POST',
      body: JSON.stringify({ date, time }),
    });
    return response.valid;
  }
}

export const deliveryService = new DeliveryService(apiConfig);