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
  dataarray:questionOption[]=[];
  optionarray:questionOption[]=[];
  constructor() { }

  ngOnInit() {
    //this.home=new home()
    //this.dataarray.push(this.home);
  }

  addForm()
  {
    this.option=new questionOption()
    this.dataarray.push(this.option);
  }

  addOption()
  {
    this.option=new questionOption()
    this.optionarray.push(this.option);
  }

  removeForm(index)
  {
    this.dataarray.splice(index,1);
  }

  removeOption(index)
  {
    this.optionarray.splice(index,1);
  }

  onsubmit()
  {
    console.log(this.dataarray);
  }


}
