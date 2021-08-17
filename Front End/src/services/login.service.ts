import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import baseUrl from './base-url';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  getCurrentUser = () => {
    return this.http.get(`${baseUrl}/current-user`);
  }


  // calling server to generate token
  
  generateToken(credentials) : Observable<any>{
    // token generate
    return this.http.post(baseUrl + '/generate-token',credentials)
  
  }


  // funtion to login
  login = (token) => {
    localStorage.setItem("token", token);
    return true;
  }


  // function to check user is loggin or not
  isLoggedIn = () => {
    let token = localStorage.getItem("token");

    if(token == undefined || token === '' || token == null){
      return false;
    }
    else{
      return true;
    }

  }

  // function to logout

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("credentials")
    return true;
  }

  // getting token 
  getToken = () => {
    return localStorage.getItem("token");
  }

  // set User Details
  setUser = (credentials) => {
    localStorage.setItem('credentials', JSON.stringify(credentials))
  }

  // get User
  getUser = () => {
    let userStr = localStorage.getItem("credentials");
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  // get User Role
  getUserRole = () => {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
