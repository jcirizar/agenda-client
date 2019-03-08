import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ji-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {
  @Input() time: Date;
  @Input() booked: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
