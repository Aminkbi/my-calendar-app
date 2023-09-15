import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../services/calendar.service';
import { CalendarEvent } from 'angular-calendar';
import { colors } from '../utils/colors';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    RouterLink,
  ],
})
export class NewAppointmentComponent {
  constructor(
    private calendarService: CalendarService,
    private router: Router
  ) {}

  selectedDate: Date | null = null;

  goHome() {
    this.router.navigate(['/']);
  }
  submitForm(AppointmentForm: NgForm) {
    if (AppointmentForm.valid) {
      const title = AppointmentForm.value.appointmentName;
      const startDate = AppointmentForm.value.appointmentDate
        ? AppointmentForm.value.appointmentDate
        : new Date();

      const event: CalendarEvent = {
        title,
        start: startDate,
        color: colors.yellow,
        draggable: true,
        actions: [
          {
            label: '<i class="fas fa-fw fa-trash-alt"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
              this.calendarService.deleteEvent(event);
            },
          },
        ],
      };

      this.calendarService.addEvent(event);
      AppointmentForm.reset();
      this.goHome();
    }
  }
}
