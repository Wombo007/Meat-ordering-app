import { ZoneInfo, DeliveryWindow, SuburbInfo, DayOfWeek } from './types';

export const createZoneEntries = (data: SuburbInfo[]): { [postcode: string]: ZoneInfo } => {
  return data.reduce((acc, { postcode, zoneId, zoneName, depot }) => {
    acc[postcode] = { id: zoneId, name: zoneName, depot };
    return acc;
  }, {} as { [key: string]: ZoneInfo });
};

export const parseTimeWindow = (timeStr: string): DeliveryWindow | null => {
  if (!timeStr) return null;
  const [start, end] = timeStr.split(' - ');
  if (!start || !end) return null;
  return { start, end };
};

export const formatTimeWindow = (window: DeliveryWindow): string => {
  return `${window.start} - ${window.end}`;
};

export const isValidDeliveryTime = (time: string): boolean => {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timeRegex.test(time);
};

export const isValidPostcode = (postcode: string): boolean => {
  return /^\d{4}$/.test(postcode);
};

export const parseSchedule = (scheduleStr: string): DeliveryWindow[] => {
  if (!scheduleStr) return [];
  return scheduleStr.split(',').map(window => {
    const [start, end] = window.trim().split(' - ');
    return { start, end };
  });
};

export const getDaySchedule = (schedules: string[]): Record<DayOfWeek, DeliveryWindow[]> => {
  const days: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days.reduce((acc, day, index) => {
    acc[day] = schedules[index] ? parseSchedule(schedules[index]) : [];
    return acc;
  }, {} as Record<DayOfWeek, DeliveryWindow[]>);
};