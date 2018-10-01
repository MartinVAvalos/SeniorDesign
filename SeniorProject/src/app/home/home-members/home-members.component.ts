import { Component, OnInit } from '@angular/core';

import { Member } from '../../shared/member.model';
import { MemberService } from './member.service';

@Component({
  selector: 'app-home-members',
  templateUrl: './home-members.component.html',
  styleUrls: ['./home-members.component.css'],
  providers: [MemberService]
})
export class HomeMembersComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

}
