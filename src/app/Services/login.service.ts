import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http : HttpClient) { }

  login(body :any){
    const url : any = 'https://rnfi.co.in/latest-backup/api/app/task/login/login';
    return this.http.post(url, body)
  }

  verifyOTP(body : any){
    const url = 'https://rnfi.co.in/latest-backup/api/app/task/login/verifyOtp';
    return this.http.post(url, body)
  }
}
