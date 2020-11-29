import { LogginService } from './../logginService.service';
import { Component, Input } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent {
  @Input() user: User;
  @Input() index: number;
}
