import { addDays, setHours, setMinutes, format } from 'date-fns';
import { DeliveryOption, DeliveryOptionsResponse } from './types';

function generateTimeSlots() {
  return [
    { startTime: '09:00', endTime: '12:00', available: true },
    { startTime: '12:00', endTime: '15:00', available: true },
    { startTime: '15:00', endTime: '18:00', available: true }
  ];
}

function generateDeliveryDates(): DeliveryOption[] {
  const options: DeliveryOption[] = [];
  const today = new Date();

  // Generate next 7 days of delivery options
  for (let i = 1; i <= 7; i++) {
    const date = addDays(today, i);
    // Skip Sundays
    if (date.getDay() !== 0) {
      options.push({
        date: format(date, 'yyyy-MM-dd'),
        timeWindows: generateTimeSlots()
      });
    }
  }

  return options;
}

export const mockDeliveryResponse: DeliveryOptionsResponse = {
  success: true,
  data: {
    zone_id: 'MOCK_ZONE',
    dates: generateDeliveryDates().map(option => ({
      date: option.date,
      time_slots: option.timeWindows.map(window => ({
        start_time: window.startTime,
        end_time: window.endTime,
        available: window.available
      }))
    }))
  }
};

// Valid postcodes for testing
export const validPostcodes = [
  '2000', '2010', '2020', '2030', '2040', '2050', // Sydney
  '3000', '3010', '3020', '3030', '3040', '3050', // Melbourne
  '4000', '4010', '4020', '4030', '4040', '4050'  // Brisbane
];