import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  // interpolacion aceder a los elemento del ts desde el html
  title = '01. Profession od user list';
  nameUser: 'Sabrina';
  surnameUser: 'Fiore';
  edad: number = 28 + 1;
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
  onCreateUser(): void {
    this.userCreated = true;
    this.addUserStatus = 'Add user';
  }

  // metodo --> se puede aceder a la variable tmb desde un metodo
  getAge(): number {
    return this.edad;
  }

  // onModificaruser(event: KeyboardEvent) {
  //   this.titleUser = (event.target as HTMLInputElement).value;
  //   console.log('entra');
  // }
}
