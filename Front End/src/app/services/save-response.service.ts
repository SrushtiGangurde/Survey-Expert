import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveResponseService {

  baseurl  = "http://localhost:8080"

  constructor(private _http:HttpClient) { }
  public saveResponse(response){
    return this._http.post(`${this.baseurl}/response/addResponse`,response);

  }
}
