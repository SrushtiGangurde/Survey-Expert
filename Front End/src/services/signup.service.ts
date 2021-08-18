import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base-url';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient  :HttpClient) { }

  // register user
  public addUser(user : any){
    return this.httpClient.post(baseUrl + "/user/addUser", user);
  }
}
