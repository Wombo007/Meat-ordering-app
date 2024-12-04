export interface DeliveryTimeWindow {
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface DeliveryDate {
  date: string;
  timeWindows: DeliveryTimeWindow[];
}

export interface DeliveryTimeSlot {
  start_time: string;
  end_time: string;
  available: boolean;
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