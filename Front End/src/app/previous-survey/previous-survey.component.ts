import { Component, OnInit } from '@angular/core';
import { survey } from 'src/model/survey';
import { ViewSurveysService } from 'src/services/view-surveys.service';

@Component({
  selector: 'app-previous-survey',
  templateUrl: './previous-survey.component.html',
  styleUrls: ['./previous-survey.component.css']
})
export class PreviousSurveyComponent implements OnInit {

  surveys : survey [] = [];
  public errorMsg: any;

  constructor(private _ViewSurveysService: ViewSurveysService) { }

  ngOnInit() {
    this._ViewSurveysService.getSurveys()
      .subscribe((data: any) => this.surveys = data);

      console.log(this.surveys);
  }

}
