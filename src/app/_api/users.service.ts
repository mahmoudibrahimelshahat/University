import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
    USER_API: string = 'https://jsonplaceholder.typicode.com/users';
    constructor(private http: HttpClient) { }
  
    createUser(value: User) {
      return this.http.post(this.USER_API, value);
    }
}
