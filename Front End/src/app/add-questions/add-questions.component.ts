import { Component, OnInit } from '@angular/core';
import { home } from 'src/model/home';
import { questionOption } from 'src/model/questionOption';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  //home=new home()
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


