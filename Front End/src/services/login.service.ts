import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import baseUrl from './base-url';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }


  // calling server to generate token
  
  public generateToken(credentials) : Observable<any>{
    // token generate
    return this.http.post(baseUrl + '/generate-token',credentials)
  
  }


  // funtion to login
  public login(token){
    localStorage.setItem("token", token);
    return true;
  }


  // function to check user is loggin or not
  public isLoggedIn(){
    let token = localStorage.getItem("token");

    if(token == undefined || token === '' || token == null){
      return false;
    }
    else{
      return true;
    }

  }

  // function to logout

  public logout (){
    localStorage.removeItem("token");
    localStorage.removeItem("credentials")
    return true;
  }

  // getting token 
  public getToken(){
    return localStorage.getItem("token");
  }

  // set User Details
  public setUser(user){
    localStorage.setItem('user', JSON.stringify(user))
  }

  // get User
  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  // get User Role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
