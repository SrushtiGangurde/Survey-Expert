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
  surveyDet;
  previous = [];
  s;
  i;
  userDet;
  response;
  user_id;
  sarray = [];

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
            this.previous[this.i] = this.surveys[this.i].survey['survey_id'];
            console.log(this.previous[this.i]);
          }
        }
        let uniqueItems=[...new Set(this.previous)];
        console.log(uniqueItems);
         
        for(this.i=0; this.i<uniqueItems.length; this.i++){
          console.log("In loop");
          // this.sarray[this.i] = this.showName(uniqueItems[this.i]);
          console.log(this.showName(uniqueItems[this.i]));
          
        }

        console.log("Sarray");
        console.log(this.sarray);
        


         //console.log(this.surveys);
         //console.log("after service");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showName(survey_id){
    this._viewResponse.getSurveyById(survey_id).subscribe(
      (data:any) => {
        this.surveyDet = data;
        console.log("Survey by id");
        console.log(this.surveyDet);
        this.sarray=this.sarray.concat(this.surveyDet);
      },
      (error) => {
        console.log(error);
      }
    );
    
  }
}