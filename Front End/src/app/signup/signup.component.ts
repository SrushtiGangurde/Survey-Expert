import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from 'src/services/signup.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public user = {
    first_name : '',
    last_name : '',
    username : '',
    password: '',
  }

  constructor(private signupService : SignupService, private toster:ToastrService) { }

  ngOnInit(): void {
  }


  // register user
  public registerUser() {

    console.log(this.user);

    if(this.user.first_name == '' || this.user.first_name == null){
      // alert('username is required!');
      // this.snack.open("First Name is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      // this.toster.warning("First Name is  required!");
      this.toster.warning("First Name is required!");
      return;
    }

    if(this.user.last_name == '' || this.user.last_name == null){
      // this.snack.open("Last Name is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      this.toster.warning("Last Name is required!");

      return;
    }

    if(this.user.username == '' || this.user.username == null){
      // alert('username is required!');
      // this.snack.open("Email is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      this.toster.warning("Email is required!");

      return;
    }

    if(this.user.password == '' || this.user.password == null){
      // alert('username is required!');
      // this.snack.open("Password is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      this.toster.warning("Password is required!");

      return;
    }

    this.signupService.addUser(this.user).subscribe(
      (success) => {
        // success
        console.log(success)
        // alert("success");
        // this.snack.open("Successfully Signed Up!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
        this.toster.success("Successfully Signed Up!");
      },
      (error) => {
        // error
        console.log(error);
        // this.snack.open("Something went wrong!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
        this.toster.error("Something Went Wrong!");
      }
    )
  }
}
