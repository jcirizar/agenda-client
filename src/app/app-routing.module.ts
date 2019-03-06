import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppointmentsComponent} from './appointments/appointments.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
