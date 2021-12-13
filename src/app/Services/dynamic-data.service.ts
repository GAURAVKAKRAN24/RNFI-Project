import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  constructor(private http : HttpClient) { }

  getDynamicForm(body : any){
    const url = 'https://paysprint.in/service-api/testangular/api/TestAngular/getDynamicform';
    return this.http.post(url, body)
  }
}
