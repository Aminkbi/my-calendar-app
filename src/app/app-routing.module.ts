import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';

const routes: Routes = [
  { path: '', component: CalendarViewComponent },
  {
    path: 'new',
    component: NewAppointmentComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
