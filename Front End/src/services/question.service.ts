import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './base-url';

@Injectable({
  providedIn: 'root',
})

export class QuestionService {

  constructor(private http: HttpClient) {}

  public getSurveyId(){
    
  }

  public getQuestionsBySurveyId(sid) {
    return this.http.get(`${baseUrl}/allQuestions/${sid}`);
  }
  


  // Survey Id -> survey id se sare questions
  // when we got all question, 
  // we store individual qn id into a array called questionArray.

  // to geeting one by one question, we iterate through the array for qn id.


  // from qn id , store all option id in array called optionArray.

  // to get options , we iterate through the optionArray.


  
}
