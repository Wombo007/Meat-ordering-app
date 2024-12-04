import { sealConfig } from './config';
import { CreateSubscriptionPayload, SealApiResponse } from './types';

class SealClient {
  private async fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${sealConfig.apiUrl}${endpoint}`, {
      ...options,
      headers: {
        ...sealConfig.headers,
        ...options.headers
      }
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to process subscription request');
    }

    return response.json();
  }

  async createSubscription(payload: CreateSubscriptionPayload): Promise<SealApiResponse> {
    try {
      return await this.fetchApi<SealApiResponse>('/subscription', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Failed to create subscription:', error);
      throw error;
    }
  }

  getIntervalFromFrequency(frequency: string): { type: 'day' | 'week' | 'month'; number: number } {
    switch (frequency) {
      case 'week':
        return { type: 'week', number: 1 };
      case '2-weeks':
        return { type: 'week', number: 2 };
      case '4-weeks':
        return { type: 'week', number: 4 };
      case '8-weeks':
        return { type: 'week', number: 8 };
      default:
        return { type: 'month', number: 1 };
    }
  }
}

export const sealClient = new SealClient();