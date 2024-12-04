import { ZoneSchedule } from './types';

export const zoneSchedules: { [zoneId: string]: ZoneSchedule } = {
  // Adelaide Metro (Zone 15)
  '15': {
    Monday: [{ start: '00:00', end: '07:00' }, { start: '08:00', end: '18:00' }],
    Tuesday: [{ start: '08:00', end: '18:00' }],
    Thursday: [{ start: '08:00', end: '18:00' }],
    Friday: [{ start: '08:00', end: '18:00' }],
    Saturday: [{ start: '00:00', end: '07:00' }],
    Sunday: [{ start: '00:00', end: '07:00' }]
  },

  // Brisbane Metro (Zone 10)
  '10': {
    Monday: [{ start: '00:00', end: '07:00' }],
    Tuesday: [{ start: '00:00', end: '07:00' }],
    Wednesday: [{ start: '00:00', end: '07:00' }],
    Thursday: [{ start: '00:00', end: '07:00' }],
    Friday: [{ start: '08:00', end: '18:00' }],
    Saturday: [{ start: '00:00', end: '07:00' }],
    Sunday: [{ start: '00:00', end: '07:00' }]
  },

  // Melbourne Metro (Zone 5)
  '5': {
    Monday: [{ start: '00:00', end: '07:00' }],
    Tuesday: [{ start: '00:00', end: '07:00' }],
    Wednesday: [{ start: '00:00', end: '07:00' }],
    Thursday: [{ start: '00:00', end: '07:00' }],
    Friday: [{ start: '00:00', end: '07:00' }],
    Saturday: [{ start: '00:00', end: '07:00' }],
    Sunday: [{ start: '00:00', end: '07:00' }]
  }
};