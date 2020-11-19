import { Component, Input } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class userComponent {
  @Input() user: User;
  @Input() index: number;
}
