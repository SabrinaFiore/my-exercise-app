import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';

@Component({
  selector: 'app-form',
  templateUrl: './users-form.component.html',
})

export class UsersFormComponent implements OnInit {
  @Output() userAdd = new EventEmitter<User>();

  nameInput: string;
  surnameInput: string;

  ngOnInit() {}

  onAddUser() {
    let user1 = new User(this.nameInput, this.surnameInput);
    this.userAdd.emit(user1);
  }
}
