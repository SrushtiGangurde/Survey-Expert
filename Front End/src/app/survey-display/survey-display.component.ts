import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/services/question.service';
import { Question } from '../create-survey/data-models';

@Component({
  selector: 'app-survey-display',
  templateUrl: './survey-display.component.html',
  styleUrls: ['./survey-display.component.css']
})
export class SurveyDisplayComponent implements OnInit {

  q;
  questions =   [1,2,3,4,5];
  // answertype = ["radio", "checkbox"];

  constructor(private question : QuestionService) { }

  ngOnInit(): void {
    // this.sid =  
  }
8
}
