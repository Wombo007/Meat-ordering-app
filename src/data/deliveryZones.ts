// Map of postcodes to their respective zones
export interface ZoneInfo {
  id: string;
  name: string;
  depot: string;
}

// Build postcode mapping from the data
export const postcodeToZone: { [key: string]: ZoneInfo } = {
  // Adelaide Metro (All 5000-5999 postcodes for Adelaide area)
  ...Array.from({ length: 1000 }, (_, i) => i + 5000).reduce((acc, code) => ({
    ...acc,
    [code]: { id: '15', name: 'ADL METRO', depot: 'Adelaide' }
  }), {}),

  // Brisbane Metro (4000-4499)
  ...Array.from({ length: 500 }, (_, i) => i + 4000).reduce((acc, code) => ({
    ...acc,
    [code]: { id: '10', name: 'BNE METRO', depot: 'Brisbane' }
  }), {}),

  // Sydney Metro (2000-2999)
  ...Array.from({ length: 1000 }, (_, i) => i + 2000).reduce((acc, code) => ({
    ...acc,
    [code]: { id: '1', name: 'SYD METRO', depot: 'Sydney' }
  }), {}),

  // Melbourne Metro (3000-3999)
  ...Array.from({ length: 1000 }, (_, i) => i + 3000).reduce((acc, code) => ({
    ...acc,
    [code]: { id: '5', name: 'MEL METRO', depot: 'Melbourne' }
  }), {}),

  // Add more specific overrides for exact postcodes from the data
  // These will override the general ranges above where needed
};

export interface DeliveryWindow {
  start: string;
  end: string;
}

export interface ZoneSchedule {
  [day: string]: DeliveryWindow[];
}

export const zoneSchedules: { [zoneId: string]: ZoneSchedule } = {
  // Adelaide Metro
  '15': {
    Monday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Tuesday: [{ start: '08:00', end: '18:00' }],
    Thursday: [{ start: '08:00', end: '18:00' }],
    Friday: [{ start: '08:00', end: '18:00' }],
    Saturday: [{ start: '00:00', end: '07:00' }],
    Sunday: [{ start: '00:00', end: '07:00' }]
  },
  
  // Brisbane Metro
  '10': {
    Monday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Tuesday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Wednesday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Thursday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Friday: [{ start: '08:00', end: '18:00' }],
    Saturday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Sunday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }]
  },

  // Sydney Metro
  '1': {
    Monday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Tuesday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Wednesday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Thursday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Friday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Saturday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Sunday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }]
  },

  // Melbourne Metro
  '5': {
    Monday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Tuesday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Wednesday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Thursday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Friday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Saturday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Sunday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }]
  }
};