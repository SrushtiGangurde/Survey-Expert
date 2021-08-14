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


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  home=new home()
  dataarray:home[]=[];
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

  removeForm(index)
  {
    this.dataarray.splice(index);
  }

  onsubmit()
  {
    console.log(this.dataarray);
  }

}