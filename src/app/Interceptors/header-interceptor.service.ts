import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {
  httpHeader : any
  url = ''
  constructor() { 
    this.url = window.location.href

  }
  intercept(req: HttpRequest<any>, next: HttpHandler){
        
    if(this.url.includes('dynamicForm') || this.url.includes('updateDynamicForm')){    
      console.log("Inside Dynamic url")  
      this.httpHeader = req.clone({
        setHeaders : {
          Authkey : 'test-angular-2021'
        }
      })
      return next.handle(this.httpHeader)
    }
    return next.handle(req)
  }
}
