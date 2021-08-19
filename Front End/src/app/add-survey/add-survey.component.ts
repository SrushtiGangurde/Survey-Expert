import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  data = {
    questionList: [
      {
        question: "",
        optionList: [
          {
            option: "",
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      questionList: this.fb.array([])
    })

    this.setquestionList();
  }

  onSubmit() {
    alert(this.myForm.value);
  }

  addNewquestion() {
    let control = <FormArray>this.myForm.controls.questionList;
    control.push(
      this.fb.group({
        question: [''],
        optionList: this.fb.array([])
      })
    )
  }

  deletequestion(index) {
    let control = <FormArray>this.myForm.controls.questionList;
    control.removeAt(index)
  }

  addNewoption(control) {
    control.push(
      this.fb.group({
        option: ['']
      }))
  }

  deleteoption(control, index) {
    control.removeAt(index)
  }

  setquestionList() {
    let control = <FormArray>this.myForm.controls.questionList;
    this.data.questionList.forEach(x => {
      control.push(this.fb.group({ 
        question: x.question, 
        optionList: this.setoptionList(x) }))
    })
  }

  setoptionList(x) {
    let arr = new FormArray([])
    x.optionList.forEach(y => {
      arr.push(this.fb.group({ 
        option: y.option 
      }))
    })
    return arr;
  }

}
