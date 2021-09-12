import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './base-url';


@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {


  constructor(private http : HttpClient) { }

  generateResponseId = (survey_id : any) => {

    return this.http.get(`${baseUrl}/response/survey/${survey_id}`); 
  }

  downloadFile = (response_id : number []) => {
    console.log("Inside Download file response id : ", response_id);
    return this.http.get(`${baseUrl}/excel/download/${response_id}`, {
      responseType : 'blob' 
    });
  }



}
