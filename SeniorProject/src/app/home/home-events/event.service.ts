import { Event } from '../../shared/event.model';
import { EventEmitter } from '@angular/core';

export class EventService {
  eventSelected = new EventEmitter<Event>();

  private events: Event[] = [
    new Event('Hackathon', 2, 30, 'We`ll be helping students learn the basics of hacking'),
  ];

  getEvents() {
    return this.events.slice();
  }
}
