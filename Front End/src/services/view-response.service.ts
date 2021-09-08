import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './base-url';

@Injectable({
  providedIn: 'root'
})
export class ViewResponseService {

  constructor(private _http:HttpClient) { }

  public getUserSurvey(user_id): Observable<any>{
    console.log("From service");
    console.log(this._http.get(`${baseUrl}/response/user/{user_id}`,user_id));
    return this._http.get(`${baseUrl}/response/user/{user_id}`, user_id);
  }
}
