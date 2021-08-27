import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayQuestionServiceService } from '../services/display-question-service.service';

@Component({
  selector: 'app-give-survey',
  templateUrl: './give-survey.component.html',
  styleUrls: ['./give-survey.component.css']
})
export class GiveSurveyComponent implements OnInit {

  questions = [];
  survey_id: any;
  name: any;
  response = {
    user : {},
    survey :{},
    question :{},
    save_unsave:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
  }

  constructor(
    private _route:ActivatedRoute,
    private _display:DisplayQuestionServiceService

  ) { }

  
  ngOnInit(){
    this.survey_id=this._route.snapshot.params.sid;
    this.name=this._route.snapshot.params.name;

    this._display.displayQuestion(this.survey_id).subscribe(
      (data:any) => {
        this.questions = data;
        console.log(this.questions);

      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Post method for saving responses 
  saveResponse(){

  }

}
