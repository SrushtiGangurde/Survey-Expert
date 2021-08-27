import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  survey_id = 0;

  constructor(private _view: ViewSurveysService,private _route:ActivatedRoute) { }

  ngOnInit() {

    this.survey_id=this._route.snapshot.params.sid;
    //alert(this.survey_id);

    this._view.getSurveys().subscribe(
      (data:any) => {
        this.surveys = data;
        console.log(this.surveys);

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
