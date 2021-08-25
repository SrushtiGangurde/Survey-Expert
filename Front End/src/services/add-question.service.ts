import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  baseurl  = "http://localhost:8080"
  constructor(private _http:HttpClient) { }

  public addQuestion(question: any){
    return this._http.post(`${this.baseurl}/question/addQuestion`,question);
  }
  
}
