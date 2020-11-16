import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class usersComponent {
  addUser = false;
  addUserStatus = 'No se ha agregado ninguna user';
  titleUser = 'Engineer';
  userCreated = false;

  constructor() {
    setTimeout(
      () => {
        this.addUser = false;
      });
  }

  // method -> event binding
  onCreateUser() {
    this.userCreated = true;
    this.addUserStatus = 'Add user';
  }

  // onModificaruser(event: KeyboardEvent) {
  //   this.titleUser = (event.target as HTMLInputElement).value;
  //   console.log('entra');
  // }

}
