import { Component, OnInit } from '@angular/core';

import { Event } from '../event.model';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.css']
})
export class HomeEventsComponent implements OnInit {

  events: Event[] = [
    new Event('Hackathon', 2, 30, 'We`ll be helping students learn the basics of hacking'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
