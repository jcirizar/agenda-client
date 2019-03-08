import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import {SlotComponent} from './slot/slot.component';
import {NamePhoneComponent} from './name-phone/name-phone.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PhoneNumberFormatterDirective} from './phone-number-formatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppointmentsComponent,
    SlotComponent,
    NamePhoneComponent,
    PhoneNumberFormatterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    NamePhoneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
