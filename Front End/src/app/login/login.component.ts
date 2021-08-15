import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

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

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  onSubmit = ()=>{

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

}
