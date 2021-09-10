import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDet: any;
  userName = "";

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
