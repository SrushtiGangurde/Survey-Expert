import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
 
  userDet: any;
  userName: "";

  constructor(private _login:LoginService) { }

  ngOnInit(): void {

    this._login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userDet=data;
        //console.log(this.userDet);
        this.userName =this.userDet['first_name'];

      }
    );
  }

}
