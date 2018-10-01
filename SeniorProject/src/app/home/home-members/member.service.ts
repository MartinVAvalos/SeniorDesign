import { Member } from '../../shared/member.model';
import { EventEmitter } from '@angular/core';

export class MemberService {
  private members: Member[] = [
      new Member('Martin', 'Vera', 2, 30, 'guerovera37@icloud.com'),
      new Member('Emmanuel', 'Esgae',  4, 19, 'red@gmail.com')
    ];

    getMembers() {
      return this.members.slice();
    }
}
