import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './base-url';

@Injectable({
  providedIn: 'root'
})
export class ViewResponseService {

  constructor(private _http:HttpClient) { }

  public getUserResponse(user_id): Observable<any>{
    console.log("From service");
    console.log(this._http.get(`${baseUrl}/response/user/${user_id}`));
    return this._http.get(`${baseUrl}/response/user/${user_id}`);
  }

  public getSurveyById(survey_id): Observable<any>{
    console.log("From service");
    console.log(this._http.get(`${baseUrl}/survey/${survey_id}`));
    return this._http.get(`${baseUrl}/survey/${survey_id}`);
  }
  

//   public getUserSurvey(user_id){
//     console.log("From service");
//     console.log(this._http.get(`${baseUrl}/survey/user/{user_id}`));
//     return this._http.get(`${baseUrl}/survey/user/{user_id}`);
// }

}
