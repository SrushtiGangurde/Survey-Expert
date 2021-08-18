// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-add-questions',
//   templateUrl: './add-questions.component.html',
//   styleUrls: ['./add-questions.component.css']
// })
// export class AddQuestionsComponent implements OnInit {

//   //Qid: any;
//   question ={ 
//     quiz: {},
//     content :'',
//     type :'',
//     option1 :'',
//     option2 :'',
//     option3 :'',
//     option4 :'',
//   }
//   constructor() { 

//   }

//   ngOnInit(): void {
//   }

// }







import { Component, OnInit } from '@angular/core';
import { questionOption } from 'src/model/questionOption';
import { question } from 'src/model/question';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  question = new question();
  option = new questionOption();
  qArray:question[]=[];
  oArray:questionOption[]=[];
  constructor() { }

  ngOnInit() {
  }

  addForm()
  {
    this.question=new question()
    this.qArray.push(this.question);
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


