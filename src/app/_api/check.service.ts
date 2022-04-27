import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Check } from '../models/check.model';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  USER_API: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  createUser(value: Check) {
    return this.http.post(this.USER_API, value);
  }
}
