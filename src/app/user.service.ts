import { LogginService } from './logginService.service';
import { User } from './list-of-users/list-of-users.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('Sabrina', 'Fiore'),
    new User('Laura', 'Fiore')
  ];

  wave = new EventEmitter<number>();

  constructor(private logginService: LogginService) {}

  addUser(user: User): void {
    this.logginService.sendConsolTxt('add user:' + user.name);
    this.users.push(user);
  }
}
