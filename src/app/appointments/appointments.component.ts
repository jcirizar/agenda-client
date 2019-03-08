import {Component, OnInit} from '@angular/core';
import {TimeHelpersService} from '../time-helpers.service';
import {NamePhoneComponent} from '../name-phone/name-phone.component';
import {MatDialog} from '@angular/material';
import {format} from 'date-fns';

export interface Appointment {
  booked: boolean;
  time: Date;
  name?: string;
  phone?: string;
}

@Component({
  selector: 'ji-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  date = new Date();
  appointments: Appointment[];

  constructor(private time: TimeHelpersService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.drawAppointments();
    console.log('|=> AppointmentsComponent.ngOnInit() this.appointments', this.appointments);


  }

  openDialog(appointment: Appointment, index): void {
    const dialogRef = this.dialog.open(NamePhoneComponent, {
      width: '80%',
      panelClass: 'no-background',
      backdropClass: 'darker-backdrop',
      data: {appointment}
    });

    dialogRef.afterClosed()
      .subscribe((result: Appointment) => {
        if (!result) {
          console.log('Dialog cancelled');
        }
        if (result) {

          const newAppointments = this.appointments.map((app, i) => {
            if (index === i) {
              return result;
            }
            return app;
          });

          this.appointments = newAppointments;
          this.setAppointmentsWithDate(this.date, newAppointments);
        }
      });
  }

  onDateChange($event) {
    this.date = $event.value;
    this.drawAppointments();
  }

  formatAsKeyDate(date: Date): string {
    return format(date, 'M/d/yyyy');
  }

  getAppointmentsWithDate(date: Date): Appointment[] {
    let appointments;

    try {
      appointments = JSON.parse(localStorage.getItem(this.formatAsKeyDate(date)));
    } catch (e) {
      appointments = null;
    }
    return appointments;
  }

  setAppointmentsWithDate(date: Date, appointments: Appointment[]) {
    localStorage.setItem(this.formatAsKeyDate(date), JSON.stringify(appointments));
  }

  private drawAppointments() {
    const dateData = this.getAppointmentsWithDate(this.date);
    if (dateData) {
      this.appointments = dateData;
    } else {
      this.appointments = this.time
        .getSlotsIntervals(this.date, '9:00', 9, '60')
        .map((time) => {
          return {
            booked: false,
            time
          };
        });
    }

  }
}
