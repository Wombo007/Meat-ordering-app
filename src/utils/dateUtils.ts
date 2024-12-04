import { format, addDays } from 'date-fns';
import { zoneSchedules } from '../data/zones/schedules';
import { DeliveryWindow } from '../data/zones/zoneTypes';

export function isValidDeliveryDay(zoneId: string, date: Date): boolean {
  const dayName = format(date, 'EEEE');
  const schedule = zoneSchedules[zoneId];
  return Boolean(schedule && schedule[dayName] && schedule[dayName].length > 0);
}

export function getAvailableTimeSlots(zoneId: string, date: Date): DeliveryWindow[] {
  const dayName = format(date, 'EEEE');
  const schedule = zoneSchedules[zoneId];
  return (schedule && schedule[dayName]) || [];
}

export function getAvailableDeliveryDates(zoneId: string): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  const maxDays = 14; // Show availability for next 14 days

  for (let i = 1; i <= maxDays; i++) {
    const date = addDays(today, i);
    if (isValidDeliveryDay(zoneId, date)) {
      dates.push(date);
    }
  }

  return dates;
}

export function formatTimeWindow(window: DeliveryWindow): string {
  return `${window.start} - ${window.end}`;
}