import { ApiConfig } from './types';

export const apiConfig: ApiConfig = {
  baseUrl: process.env.VITE_API_BASE_URL || '',
  apiKey: process.env.VITE_API_KEY || ''
};