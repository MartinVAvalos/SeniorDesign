import { Component, OnInit } from '@angular/core';

import { Event } from '../../shared/event.model';
import { EventService } from './event.service';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.css'],
  providers: [EventService]
})
export class HomeEventsComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
