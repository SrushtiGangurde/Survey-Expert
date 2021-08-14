// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-questions',
//   templateUrl: './add-questions.component.html',
//   styleUrls: ['./add-questions.component.css']
// })
// export class AddQuestionsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { home } from 'src/model/home';
import { option } from 'src/model/option';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  home=new home()
  option=new option()
  dataarray:home[]=[];
  optionarray:option[]=[];
  constructor() { }

  ngOnInit() {
    //this.home=new home()
    //this.dataarray.push(this.home);
  }

  addForm()
  {
    this.home=new home()
    this.dataarray.push(this.home);
  }

  addOption()
  {
    this.option=new option()
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


// <div class="form-row" *ngFor="let opt of optionarray; let j=index">
// <label>Options</label>
// <input type="text" class="form-control" name="name{{j}}" [(ngModel)]="opt.name">
// <div (click)="addOption()" class="btn btn-success btn-sm">Add Question</div> 
// </div>