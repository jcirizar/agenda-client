import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Appointment} from '../appointments/appointments.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ji-name-phone',
  templateUrl: './name-phone.component.html',
  styleUrls: ['./name-phone.component.scss']
})
export class NamePhoneComponent implements OnInit {
  appointment: Appointment;
  variableText: string;
  namePhoneForm: FormGroup;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NamePhoneComponent>) {
    this.appointment = data.appointment;
    this.variableText = this.appointment.booked ? 'Modify' : 'Book';
  }

  ngOnInit() {
    this.namePhoneForm = this.fb.group({
      name: [this.appointment.name, [Validators.required]],
      phone: [this.appointment.phone, [Validators.required]]
    });
  }

  cancelDialog($event) {
    $event.preventDefault();
    this.dialogRef.close();
  }

  formSubmit() {
    const data = Object.assign({}, this.appointment, this.namePhoneForm.getRawValue(), {booked: true});
    this.dialogRef.close(data);
  }

}
