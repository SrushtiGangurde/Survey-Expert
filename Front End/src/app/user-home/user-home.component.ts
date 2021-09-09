import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { ViewResponseService } from 'src/services/view-response.service';
import { ViewUserSurveysService } from '../services/view-user-surveys.service';

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
  SurveyData:any[]=[];

  constructor(private _login:LoginService,
    private _viewResponse: ViewResponseService,
    private _display:ViewUserSurveysService
    ) { }

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
            //console.log(this.previous[this.i]);
          }
        }

        let uniqueItems = [...new Set(this.previous)];
        //console.log("Unique below");
        //console.log(uniqueItems);

        //Calling Display Survey service
        for(this.i=0;this.i<uniqueItems.length;this.i++){
          //console.log(uniqueItems[this.i])
          this._display.getUserSurvey(uniqueItems[this.i]).subscribe(
            (data:any) => {
              this.SurveyData=this.SurveyData.concat(data);
              //console.log("Displaying Survey Data");
              //console.log(this.SurveyData);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
    }

}