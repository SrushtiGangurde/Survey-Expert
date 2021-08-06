import { Component, OnInit } from '@angular/core';
import { surveyInfo } from 'src/model/surveyInfo';

@Component({
  selector: 'app-previous-survey',
  templateUrl: './previous-survey.component.html',
  styleUrls: ['./previous-survey.component.css']
})
export class PreviousSurveyComponent implements OnInit {

  surveys : surveyInfo [] = [];

  constructor() { }

  ngOnInit(){
    this.initProperties();
  }
  
  initProperties(){
    this.surveys=[
      {name: 'Survey1', description: 'descibes survey1'},
      {name: 'Survey2', description: 'descibes survey2'},
      {name: 'Survey3', description: 'descibes survey3'}
    ]
  }

}
