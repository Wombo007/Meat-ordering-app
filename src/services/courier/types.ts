export interface DeliveryTimeSlot {
  start_time: string;
  end_time: string;
  available: boolean;
}

export interface ZoneInfo {
  zone_id: string;
  name: string;
  postcode: string;
}

export interface DeliveryOptionsResponse {
  success: boolean;
  data: {
    zone_id: string;
    dates: Array<{
      date: string;
      time_slots: DeliveryTimeSlot[];
    }>;
  };
}

export interface DeliveryOption {
  date: string;
  timeWindows: {
    startTime: string;
    endTime: string;
    available: boolean;
  }[];
}