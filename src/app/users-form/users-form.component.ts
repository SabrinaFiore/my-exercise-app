import { UserService } from './../user.service';
import { LogginService } from './../logginService.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './users-form.component.html',
})

export class UsersFormComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('surnameInput') surnameInput: ElementRef;

  constructor(private logginService: LogginService, private userService: UserService ) { }

  ngOnInit(): void {
  }

  onAddUser(): void {
    const user1 = new User(this.nameInput.nativeElement.value, this.surnameInput.nativeElement.value);
    this.logginService.sendConsolTxt('Send user:' + user1.name + ' ' + 'surname:' + user1.surname);
    this.userService.addUser(user1);
  }
}
