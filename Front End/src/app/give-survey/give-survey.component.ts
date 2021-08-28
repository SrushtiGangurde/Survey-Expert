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
    answer1:'',
    answer2:'',
    answer3:'',
    answer4:'',
  }

  constructor(
    private _route:ActivatedRoute,
    private _display:DisplayQuestionServiceService

  ) { }

  
  ngOnInit(){
    this.survey_id=this._route.snapshot.params.sid;
    this.name=this._route.snapshot.params.name;
    //this.response.question['question_id']=this.
    this.response.survey['survey_id']=this.survey_id;

    this._display.displayQuestion(this.survey_id).subscribe(
      (data:any) => {
        this.questions = data;
        console.log(this.questions);
        localStorage.setItem("questions",JSON.stringify(this.questions));
        let q=localStorage.getItem("questions");
        q=JSON.parse(q);
        console.log(q);

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
