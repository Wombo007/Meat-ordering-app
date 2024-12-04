export interface ApiConfig {
  baseUrl: string;
  apiKey: string;
}

export interface DeliveryZone {
  id: string;
  name: string;
  postcodes: string[];
  schedules: {
    [day: string]: Array<{
      start: string;
      end: string;
    }>;
  };
}

export interface DeliverySchedule {
  zoneId: string;
  date: string;
  windows: Array<{
    start: string;
    end: string;
  }>;
}

export interface ApiError {
  code: string;
  message: string;
}