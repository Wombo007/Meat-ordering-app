import { addDays, format } from 'date-fns';
import { DeliveryOptionsResponse } from './types';

function generateTimeSlots() {
  return [
    { start_time: '09:00', end_time: '12:00', available: true },
    { start_time: '12:00', end_time: '15:00', available: true },
    { start_time: '15:00', end_time: '18:00', available: true }
  ];
}

function generateDeliveryDates() {
  const dates = [];
  const today = new Date();

  // Generate next 7 days of delivery options
  for (let i = 1; i <= 7; i++) {
    const date = addDays(today, i);
    // Skip Sundays
    if (date.getDay() !== 0) {
      dates.push({
        date: format(date, 'yyyy-MM-dd'),
        time_slots: generateTimeSlots()
      });
    }
  }

  return dates;
}

export const mockDeliveryResponse: DeliveryOptionsResponse = {
  success: true,
  data: {
    zone_id: 'MOCK_ZONE',
    dates: generateDeliveryDates()
  }
};

// Valid postcodes for testing
export const validPostcodes = [
  '2000', '2010', '2020', '2030', '2040', '2050', // Sydney
  '3000', '3010', '3020', '3030', '3040', '3050', // Melbourne
  '4000', '4010', '4020', '4030', '4040', '4050'  // Brisbane
];