import { Component } from '@angular/core';
import { IUser } from './users/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Please select a user to find their comments:';
  selectedUser: IUser = undefined;

  loadPostsForUser(data: string): void {
    this.selectedUser =  JSON.parse(data);
  }
}
