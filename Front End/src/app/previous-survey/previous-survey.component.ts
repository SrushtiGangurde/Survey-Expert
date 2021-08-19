import { Component, OnInit } from '@angular/core';
import { survey } from 'src/model/survey';
import { ViewSurveysService } from 'src/services/view-surveys.service';

@Component({
  selector: 'app-previous-survey',
  templateUrl: './previous-survey.component.html',
  styleUrls: ['./previous-survey.component.css']
})
export class PreviousSurveyComponent implements OnInit {

  /* surveys = {
    name : '',
    description :'',
  } */
  surveys : any[] = [];
  public errorMsg: any;

  constructor(private _view: ViewSurveysService) { }

  ngOnInit() {
    this._view.getSurveys().subscribe(
      (data:any) => {
        this.surveys = data;
        console.log("From TS 123:"+this.surveys);

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
