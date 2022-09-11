import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interface';
import { environment } from '../../environments/environment';
import { filter, map, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnInit {
  users?: User[];
  constructor(protected http: HttpClient) {}

  ngOnInit(): void {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users`);
  }
}
