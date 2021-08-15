import { Component, OnInit } from '@angular/core';
import { survey } from 'src/model/survey';

@Component({
  selector: 'app-previous-survey',
  templateUrl: './previous-survey.component.html',
  styleUrls: ['./previous-survey.component.css']
})
export class PreviousSurveyComponent implements OnInit {

  surveys : survey [] = [];

  constructor() { }

  ngOnInit(){
    this.initProperties();
  }
  
  initProperties(){
    this.surveys=[
      {surveyName: 'Survey1', surveyDesc: 'descibes survey1', surveyId: 1, lastEditedBy: 5, link : 'abcsurvey', createdDate: '12/8/2021'},
    ]
  }

}
