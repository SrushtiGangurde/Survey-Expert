import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user = {
    first_name : '',
    last_name : '',
    username : '',
    password: '',
  }

  constructor(private signupService : SignupService) { }

  ngOnInit(): void {
  }


  // register user
  registerUser = () => {

    console.log(this.user);

    if(this.user.first_name == '' || this.user.last_name == ''){
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
