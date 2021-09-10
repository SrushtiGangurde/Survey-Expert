import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './base-url';


@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor(private http : HttpClient) { }

  downloadFile = () => {
   return this.http.get(`${baseUrl}/excel/download`, {
      responseType : 'blob'
    });
  }



}
