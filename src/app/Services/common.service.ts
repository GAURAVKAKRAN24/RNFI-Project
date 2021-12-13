import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  convertInToFormData(obj : any){
    var form_data = new FormData();
    for(var key in obj){
      form_data.append(key, obj[key])
    }
    return form_data;
  }
}
