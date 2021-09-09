import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from 'src/services/base-url';

@Injectable({
  providedIn: 'root'
})
export class ViewUserSurveysService {

  constructor(private _http:HttpClient) { }

  public getUserSurvey(survey_id): Observable<any>{
    return this._http.get(`${baseUrl}/survey/${survey_id}`);

  }
}
