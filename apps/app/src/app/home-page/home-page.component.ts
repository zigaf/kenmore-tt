import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/interface';
import { UsersService } from '../shared/users.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UploadImagesComponent } from '../upload-images/upload-images.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  users?: User[];
  uSub?: Subscription;

  // displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];

  constructor(public usersService: UsersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }

  delete() {}

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub?.unsubscribe();
    }
  }

  uploadFiles() {
    this.dialog.open(UploadImagesComponent, {
      width: '250px',
    });
  }
}
