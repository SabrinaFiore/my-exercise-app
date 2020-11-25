import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';

@Component({
  selector: 'app-form',
  templateUrl: './users-form.component.html',
})

export class UsersFormComponent implements OnInit {
  @Output() userAdd = new EventEmitter<User>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('surnameInput') surnameInput: ElementRef;

  // nameInput: string;
  // surnameInput: string;

  ngOnInit(): void {
  }

  onAddUser() {
    let user1 = new User(this.nameInput.nativeElement.value, this.surnameInput.nativeElement.value);
    this.userAdd.emit(user1);
  }
}
