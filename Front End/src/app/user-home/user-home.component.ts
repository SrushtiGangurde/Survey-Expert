import { Component, OnInit } from '@angular/core';
import { surveyInfo } from 'src/model/surveyInfo';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {

  surveys : surveyInfo [] = [];

  constructor() { }

  ngOnInit(){
    this.initProperties();
  }
  
  initProperties(){
    this.surveys=[
      {name: 'Prep up Session Survey', description: 'Feedback for the Prep Up sessions Conducted'},
      
    ]
  }
}
