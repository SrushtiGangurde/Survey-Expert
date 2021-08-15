import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //base url
  url  = "https://localhost:8080/"

  constructor(private http : HttpClient) { }


  // calling server to generate token
  
  generateToken = (credentials) => {
    // token generate
    return this.http.post(`${this.url}/token`, credentials)
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
    return true;
  }

  // getting token 
  getToken = () => {
    return localStorage.getItem("token");
  }



}
