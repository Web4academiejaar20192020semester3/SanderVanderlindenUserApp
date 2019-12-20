import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})

export class UsersComponent implements OnInit {
  users: User[];
  userSet: User;

  constructor(public userService: UserService) {
  }
  getUsers(): void {
    timer(0, 2500)
      .subscribe(() => {
        this.userService.getUsers()
          .subscribe(data => this.users = data);
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }
  setUser(user) {
    this.userSet = user;
  }
}
