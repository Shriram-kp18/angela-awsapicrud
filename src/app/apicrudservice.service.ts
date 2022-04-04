import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urldata } from "./urldata.model";
@Injectable({
  providedIn: 'root'
})
export class ApicrudserviceService {

  constructor(private http:HttpClient) { }
  geturldata(){
    return this.http.get<urldata[]>("https://ct80vmmoie.execute-api.ap-south-1.amazonaws.com/new/fetch");
  }
}
