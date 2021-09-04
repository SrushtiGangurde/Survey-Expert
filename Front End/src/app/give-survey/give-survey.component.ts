import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'src/model/response';
import { DisplayQuestionServiceService } from '../services/display-question-service.service';
import { LoginService } from 'src/services/login.service';
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
  q;
  current=0;
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
  userDet;
  constructor(
    private _route:ActivatedRoute,
    private _display:DisplayQuestionServiceService,
    private _login:LoginService
  ) { }

  ngOnInit(){
    this.survey_id=this._route.snapshot.params.sid;
    this.name=this._route.snapshot.params.name;
    this.response.survey['survey_id']=this.survey_id;
    this._login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userDet=data;
        console.log(this.userDet);
        this.response.user['user_id']=this.userDet['user_id'];

      }
    );
    //console.log(this.userDet);
    //console.log()
    this.show(this.survey_id);
  }

  show(survey_id){
  this._display.displayQuestion(survey_id).subscribe(
    (data:any) => {
      this.questions = data;
        this.q = this.questions[this.current];
        console.log(this.q);
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
    this.current++;
    this.show(this.survey_id);
  }

  onAnswer(){
    this.current++;
  }
  
  //Post method for saving responses 
  SaveResponse(){
    
  }

}
