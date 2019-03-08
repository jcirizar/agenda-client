import {Injectable} from '@angular/core';
import {addHours, addMinutes, isBefore, isDate, setHours, setMinutes, startOfDay, startOfHour, startOfMinute, subMinutes} from 'date-fns';
import {last} from 'rxjs/operators';

const twenty4HoursClock = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
// this is for simplicity at the moment;
export type AppointmentDuration = '15' | '30' | '60';


@Injectable({
  providedIn: 'root'
})
export class TimeHelpersService {


  constructor() {
  }

  getSlotsIntervals(date: Date, start: string, shiftLength: number, appointmentsDuration: AppointmentDuration): Date[] {
    if (!isDate(date)) {
      throw new Error('date should be a proper Date instance');
    }
    if (typeof start !== 'string' || !twenty4HoursClock.test(start)) {
      throw new Error('start must be a valid 24 hours format string. Example: 19:12');
    }

    if (typeof shiftLength !== 'number' || shiftLength > 24 || shiftLength < 1) {
      throw new Error('shiftLength must be a number from 1 to 23 inclusive');
    }

    const [hour, minutes] = start.split(':');
    const hourSet = setHours(date, +hour);
    const minutesSet = setMinutes(hourSet, +minutes);
    const startOfDayWork = startOfMinute(minutesSet);

    // for simplicity lets assume meetings always start at even hours (9:00, 10:00, etc) then we will add the intervals
    // sub a min to avoid starting at 10 if 9:00 is the starting point
    const firstAppointment = startOfHour(subMinutes(addHours(minutesSet, 1), 1));

    const appointments = [];
    const timeAgregator = (time: Date) => {
      return addMinutes(time, +appointmentsDuration);
    };


    // Assuming is always 8 hours shift, could add an end of the day param too.
    const endOfDayWork = addHours(startOfDayWork, shiftLength);
    let lastAppointment = firstAppointment;

    while (isBefore(lastAppointment, endOfDayWork)) {
      appointments.push(lastAppointment);
      lastAppointment = timeAgregator(lastAppointment);
    }

    return appointments;
  }
}
