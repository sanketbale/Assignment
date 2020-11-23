import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UsersService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title = 'Please select a user to find their comments:';
  errorMessage = '';
  users: IUser[] = [];
  selectedUser: IUser = undefined;

  @Output() selectedUserEvent = new EventEmitter<string>();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => this.errorMessage = err
    });
  }

  selectUser( user: IUser): void {
    this.selectedUser = user;
    this.selectedUserEvent.emit(JSON.stringify(this.selectedUser));
  }
  }
