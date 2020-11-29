import { UserService } from './../user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './users-form.component.html',
})

export class UsersFormComponent implements OnInit {
  nameInput: string;
  surnameInput: string;

  constructor(private userService: UserService ) {
    this.userService.wave.subscribe(
      (index: number) => alert('Alert number:' + index)
    );
  }

  ngOnInit(): void {
  }

  onAddUser(): void {
    const user1 = new User(this.nameInput, this.surnameInput);
    this.userService.addUser(user1);
  }
}
