import {Component, OnInit} from '@angular/core';
import {TimeHelpersService} from '../time-helpers.service';

@Component({
  selector: 'ji-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor(private time: TimeHelpersService) {
  }

  ngOnInit() {
    const intervals = this.time.getSlotsIntervals('900', 8, 60);

  }

}
