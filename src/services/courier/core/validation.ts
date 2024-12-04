import { ValidationError } from './errors';

export function validatePostcode(postcode: string): void {
  if (!postcode) {
    throw new ValidationError('Postcode is required');
  }
  
  if (postcode.length !== 4) {
    throw new ValidationError('Postcode must be 4 digits');
  }
  
  if (!/^\d+$/.test(postcode)) {
    throw new ValidationError('Postcode must contain only numbers');
  }
}

export function validateTimeWindow(startTime: string, endTime: string): void {
  if (!startTime || !endTime) {
    throw new ValidationError('Start time and end time are required');
  }

  const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!timeFormat.test(startTime) || !timeFormat.test(endTime)) {
    throw new ValidationError('Invalid time format. Use HH:mm');
  }
}