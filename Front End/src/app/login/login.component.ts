import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { SignupService } from 'src/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token : string = null;

  credentials = {
    username: '',
    password : '',
  }



  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  onSignIn = ()=>{

    console.log("form is submitted");

    if((this.credentials.username != '' && this.credentials.password != '') &&
    (this.credentials.username != null && this.credentials.password != null) ){
        // console.log("we have to fill the form");
        this.loginService.generateToken(this.credentials).subscribe(
          (response : any) => {
            // success
            console.log("success");
            console.log(response);
            this.loginService.login(this.credentials);
            this.loginService.getCurrentUser().subscribe(
              (user : any) => {
                this.loginService.setUser(user);
                console.log(user);
                // redirect : admin dashboard
                // rdirect : user dashboard
              },
              (error)=>{

              }
            )
            // window.location.href = "/adminHome"

          },
          (error) => {
            // fail
            console.log("error");

            console.log(error);
          }
        )

        
    }else{
      console.log("fields are empty !!");
      
    }
    
  }

}

