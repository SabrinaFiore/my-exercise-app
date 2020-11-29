import { UserService } from './../user.service';
import { User } from './list-of-users.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
})

export class ListOfUsersComponent implements OnInit{
  title = '03. List of users';
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
