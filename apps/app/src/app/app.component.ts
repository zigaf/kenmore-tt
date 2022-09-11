import { Component } from '@angular/core';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public usersService: UsersService) {
    usersService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
  title = 'app';
}
