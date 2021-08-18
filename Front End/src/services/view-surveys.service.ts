import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { survey } from 'src/model/survey';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ViewSurveysService {

  private url: string = "https://localhost:8080/survey/allSurveys"

  constructor(private http:HttpClient) { }

  public getSurveys(){
    return this.http.get<survey[]>(this.url);
  }
}
