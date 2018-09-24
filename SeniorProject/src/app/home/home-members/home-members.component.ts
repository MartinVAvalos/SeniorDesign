import { Component, OnInit } from '@angular/core';

import { Member } from '../member.model';

@Component({
  selector: 'app-home-members',
  templateUrl: './home-members.component.html',
  styleUrls: ['./home-members.component.css']
})
export class HomeMembersComponent implements OnInit {

  members: Member[] = [
    new Member('Martin', 'Vera', 2, 30, 'guerovera37@icloud.com'),
    new Member('Emmanuel',  'Esgae',  4, 19, 'red@gmail.com')
  ];

  constructor() { }

  ngOnInit() {
  }

}
