import { User } from './list-of-users.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
})

export class ListOfUsersComponent {
  title = 'List of users';
  users: User[] = [new User('Sabrina', 'Fiore'), new User('Laura', 'Fiore')];

  onUserAdd(user: User) {
    this.users.push(user);
  }
}
