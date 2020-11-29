import { LogginService } from './../logginService.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../list-of-users/list-of-users.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  emitWave(): void {
    this.userService.wave.emit(this.index);
  }
}
