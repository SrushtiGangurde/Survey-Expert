import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { survey } from 'src/model/survey';
import { LoginService } from 'src/services/login.service';
import { ViewResponseService } from 'src/services/view-response.service';
import { Survey } from '../create-survey/data-models';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {

  surveys;
  previous = [];
  uniqueItems = [];
  s;
  i;
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
        
         this.showSurveys(this.user_id);      
      }
    );
  }
  

  showSurveys(user_id){
    this._viewResponse.getUserResponse(user_id).subscribe(
      (data:any) => {
        this.surveys = data;
        for(this.i=0; this.i<this.surveys.length; this.i++){
          if(this.surveys[this.i].survey['status']){
            this.previous[this.i] = this.surveys[this.i];
            console.log(this.previous[this.i]);
          }
        }

        let uniqueItems = [...new Set(this.previous)];
        console.log("Unique below");
        console.log(uniqueItems);
        
         console.log(this.user_id);
         console.log(this.surveys);
         console.log("after service");
  
      },
      (error) => {
        console.log(error);
      }
    );
    }

}