import { UserService } from './../user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './users-form.component.html',
})

export class UsersFormComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('surnameInput') surnameInput: ElementRef;

  constructor(private userService: UserService ) {
    this.userService.wave.subscribe(
      (index: number) => alert('Alert number:' + index + 1)
    );
  }

  ngOnInit(): void {
  }

  onAddUser(): void {
    const user1 = new User(this.nameInput.nativeElement.value, this.surnameInput.nativeElement.value);
    this.userService.addUser(user1);
  }
}
