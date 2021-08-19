import { Component, OnInit } from '@angular/core';
import { survey } from 'src/model/survey';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {

  surveys : survey [] = [];

  constructor() { }

  ngOnInit(){
    this.initProperties();
  }
  
  initProperties(){
    this.surveys=[
      {surveyName: 'Prep up Session Survey', surveyDesc: 'Feedback for the Prep Up sessions Conducted', 
      surveyId: 1, lastEditedBy: 5, link : 'abcsurvey', createdDate: '12/8/2021'},
      
    ]
  }
}
