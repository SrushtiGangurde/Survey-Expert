import { Component, OnInit } from '@angular/core';
import { survey } from 'src/model/survey';
import { LoginService } from 'src/services/login.service';
import { ViewResponseService } from 'src/services/view-response.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {

  surveys;
  s;
  userDet;
  response;
  user_id;

  constructor(private _login:LoginService,private _viewResponse: ViewResponseService) { }

  ngOnInit(){
    this._login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userDet=data;
        //console.log(this.userDet);
        this.user_id=this.userDet['user_id'];
        
         this.showSurveys(this.user_id)      
      }
    );
  }
  

  showSurveys(user_id){
    this._viewResponse.getUserSurvey(user_id).subscribe(
      (data:any) => {
        this.surveys = data;
         console.log(this.surveys);
         console.log("after service");
  
      },
      (error) => {
        console.log(error);
      }
    );
    }

}
