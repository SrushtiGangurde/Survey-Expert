import { Component, OnInit } from '@angular/core';
import { home } from 'src/model/home';
import { questionOption } from 'src/model/questionOption';

@Component({
  selector: 'app-survey-creation',
  templateUrl: './survey-creation.component.html',
  styleUrls: ['./survey-creation.component.css']
})
export class SurveyCreationComponent implements OnInit {

  option=new questionOption()
  qArray:questionOption[]=[];
  oArray:questionOption[]=[];
  constructor() { }

  ngOnInit() {
    //this.home=new home()
    //this.qArray.push(this.home);
  }

  addForm()
  {
    this.option=new questionOption()
    this.qArray.push(this.option);
  }

  addOption()
  {
    this.option=new questionOption()
    this.oArray.push(this.option);
  }

  removeForm(index)
  {
    this.qArray.splice(index,1);
  }

  removeOption(index)
  {
    this.oArray.splice(index,1);
  }

  onsubmit()
  {
    console.log(this.qArray);
  }


}
