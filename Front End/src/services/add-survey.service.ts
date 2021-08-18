import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddSurveyService {

  //base url
  baseurl  = "http://localhost:8080"
  constructor(private _http:HttpClient) { }

  public addSurvey(survey: any){
    return this._http.post(`${this.baseurl}/addSurvey`,survey);
  }
}
