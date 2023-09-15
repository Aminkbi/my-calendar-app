import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

const routes: Routes = [
  { path: '', component: CalendarViewComponent },
  {
    path: 'new',
    loadChildren: () =>
      import('../app/new-appointment/new-appointment.component').then(
        (m) => m.NewAppointmentComponent
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
