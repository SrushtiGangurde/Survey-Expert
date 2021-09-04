import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'src/model/response';
import { DisplayQuestionServiceService } from '../services/display-question-service.service';

@Component({
  selector: 'app-give-survey',
  templateUrl: './give-survey.component.html',
  styleUrls: ['./give-survey.component.css']
})
export class GiveSurveyComponent implements OnInit {

  questions = [];
  survey_id: any;
  name: any;
  temp;
  i=0;
  response = {
    user : {},
    survey :{},
    question :{},
    save_unsave:'',
    answer1:'',
    answer2:'',
    answer3:'',
    answer4:'',
  }
  q_array = [];
  constructor(
    private _route:ActivatedRoute,
    private _display:DisplayQuestionServiceService

  ) { }

  ngOnInit(){
    this.survey_id=this._route.snapshot.params.sid;
    this.name=this._route.snapshot.params.name;
    this.response.survey['survey_id']=this.survey_id;

    this._display.displayQuestion(this.survey_id).subscribe(
      (data:any) => {
        this.questions = data;
        //this.response.question['question_id']=this.questions[this.i].question_id;

        /* console.log(this.questions);
        localStorage.setItem("questions",JSON.stringify(this.questions));
        let q=localStorage.getItem("questions");
        q=JSON.parse(q);
        console.log(q); */
        this.i=this.i+1;

      },
      (error) => {
        console.log(error);
      }
    );
  }
  check(qid,option1,option2,option3,option4){
    console.log("From Check");
    console.log(this.response.answer1);

    if (String(this.response.answer1)=='true'){
      console.log("In condition")
      console.log(this.response.answer1);
      this.response.answer1=option1;
    }
    else{
      this.response.answer1="";
    }
    if(String(this.response.answer2)=="true"){
      this.response.answer2=option2;
    }
    else{
    this.response.answer2="";
    }
    if(String(this.response.answer3)=="true"){
      this.response.answer3=option3;
    }
    else{
      this.response.answer3="";
      }
    if (String(this.response.answer4)=="true"){
      this.response.answer4=option4;
    }
    else{
      this.response.answer4="";
      }
    console.log(this.response);
      this.saveData(qid);
  }
  saveData(qid){
    console.log(qid);
    this.response.question['question_id']=qid;
    console.log(this.response);
    this.q_array=this.q_array.concat(this.response);
    
    this.response = {
      user : {},
      survey :{},
      question :{},
      save_unsave:'',
      answer1:'',
      answer2:'',
      answer3:'',
      answer4:'',
    }
    
    console.log(this.q_array);

  }

  
  /*checkCheckBoxvalue(check,answer){
    if (check.checked==true){
      
    if(check.checked==false){
      this.q_array.pop()
    }
      console.log(check.checked,answer);
    }
  }/*
  fun(qid){
    this.q_array.push(qid);
    console.log(this.q_array);
    this.q_array.length=0;

  }
  Radiovalue(answer){
    if (answer!="undefined" && answer!=""){
      this.q_array.push(answer)
      console.log(answer);
    }

  }
  Radiofun(qid){
    this.q_array.push(qid);
    console.log(this.q_array);
    this.q_array.length=0;

  } */
  //Post method for saving responses 
  saveResponse(){

  }

}
