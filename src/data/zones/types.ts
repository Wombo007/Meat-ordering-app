export interface ZoneInfo {
  id: string;
  name: string;
  depot: string;
}

export interface DeliveryWindow {
  start: string; // Format: "HH:mm" 
  end: string; // Format: "HH:mm"
}

export interface ZoneSchedule {
  [day: string]: DeliveryWindow[];
}

export interface SuburbInfo {
  suburb: string;
  postcode: string;
  zoneName: string;
  zoneId: string;
  depot: string;
}

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface ZoneData {
  info: ZoneInfo;
  suburbs: SuburbInfo[];
  schedule: Partial<Record<DayOfWeek, DeliveryWindow[]>>;
}