import { User } from './list-of-users.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
})

export class ListOfUsersComponent {
  title = '03. List of users';
  users: User[] = [new User('Sabrina', 'Fiore'), new User('Laura', 'Fiore')];

  onUserAdd(user: User): void {
    this.users.push(user);
  }
}
