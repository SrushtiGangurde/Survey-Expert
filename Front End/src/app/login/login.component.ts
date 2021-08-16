import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { SignupService } from 'src/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password : '',
  }

  public user = {
    firstname : '',
    lastname : '',
    email : '',
    password: '',
    repassword: '',
  }


  constructor(private loginService : LoginService, private signupService : SignupService) { }

  ngOnInit(): void {
  }

  onSignIn = ()=>{

    console.log("form is submitted");

    if((this.credentials.email != '' && this.credentials.password != '') &&
    (this.credentials.email != null && this.credentials.password != null) ){
        console.log("we have to fill the form");
        this.loginService.generateToken(this.credentials).subscribe(
          (response : any) => {
            // success
            console.log(response.token);
            this.loginService.login(response.token);
            window.location.href = "/adminHome"

          },
          (error) => {
            // fail
            console.log(error);
          }
        )

        
    }else{
      console.log("fields are empty !!");
      
    }
    
  }
  
  // register user
  registerUser = () => {

    console.log(this.user);

    if(this.user.firstname == '' || this.user.lastname == ''){
      alert('username is required!');
      return;
    }

    this.signupService.registerUser(this.user).subscribe(
      (success) => {
        // success
        console.log(success)
        alert("success");
      },
      (error) => {
        // error
        console.log(error);
        alert("something went wrong!");
      }
    )



  }

}

