import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class userComponent {

  // interpolacion aceder a los elemento del ts desde el html
  nameUser: 'Sabrina';
  surnameUser: 'Fiore';
  edad: number = 28 + 1;

  // metodo --> se puede aceder a la variable tmb desde un metodo
  getAge(): number {
    return this.edad;
  }

  constructor() { }

}
