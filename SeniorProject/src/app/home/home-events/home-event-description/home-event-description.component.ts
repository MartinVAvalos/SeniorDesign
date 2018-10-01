import { Component, OnInit } from '@angular/core';

import { Event } from '../../../shared/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home-event-description',
  templateUrl: './home-event-description.component.html',
  styleUrls: ['./home-event-description.component.css'],
  providers: [EventService]
})
export class HomeEventDescriptionComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
