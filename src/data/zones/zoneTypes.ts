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

export interface PostcodeData {
  id: string;
  zoneName: string;
  suburb: string;
  postcode: string;
  depot: string;
}