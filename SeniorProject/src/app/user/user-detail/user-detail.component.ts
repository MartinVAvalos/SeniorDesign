import { Component, OnInit } from '@angular/core';

import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: User[] = [
    new User('Martin', 'Vera', 2, 30, 'guerovera37@icloud.com'),
    new User('Emmanuel',  'Fonseca',  4, 19, 'red@gmail.com')
  ];

  constructor() { }

  ngOnInit() {
  }

}
