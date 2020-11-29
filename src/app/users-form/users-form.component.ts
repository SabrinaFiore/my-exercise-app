import { LogginService } from './../logginService.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './users-form.component.html',
})

export class UsersFormComponent implements OnInit {
  @Output() userAdd = new EventEmitter<User>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('surnameInput') surnameInput: ElementRef;

  constructor(private logginService: LogginService ) { }

  ngOnInit(): void {
  }

  onAddUser(): void {
    const user1 = new User(this.nameInput.nativeElement.value, this.surnameInput.nativeElement.value);
    this.logginService.sendConsolTxt('Send user:' + user1.name + ' ' + 'surname:' + user1.surname);
    this.userAdd.emit(user1);
  }
}
