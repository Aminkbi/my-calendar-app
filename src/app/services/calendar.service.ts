import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { colors } from '../utils/colors';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CalendarService {
  getFutureDate(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }

  private events: CalendarEvent[] = [
    {
      title: 'Draggable event',
      color: colors.yellow,
      start: new Date(),
      draggable: true,
      actions: [
        {
          label: '<i class="fas fa-fw fa-trash-alt"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.deleteEvent(event);
          },
        },
      ],
    },
  ];

  events$ = new BehaviorSubject<CalendarEvent[]>(this.events);

  getEvents() {
    return this.events;
  }

  deleteEvent(event: CalendarEvent) {
    this.events = this.events.filter((iEvent) => iEvent !== event);
    this.events$.next(this.events);
    console.log('Event deleted', event);
  }
  addEvent(event: CalendarEvent) {
    this.events.push(event);
    console.log('Event added', event);
    console.log('Events', this.events);

    this.events$.next(this.events);
  }
}
