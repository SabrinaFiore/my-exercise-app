import { User } from './list-of-users/list-of-users.model';

export class UserService {
  users: User[] = [
    new User('Sabrina', 'Fiore'),
    new User('Laura', 'Fiore')
  ];

  addUser(user: User): void {
    this.users.push(user);
  }
}
