import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/Services/common.service';
import { DynamicDataService } from 'src/app/Services/dynamic-data.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  dynamicForm : FormGroup | any
  constructor(private dynSrv : DynamicDataService,
    private commonSrv : CommonService,
    private fb : FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      firstname : [''],
    });
    const obj = {
      token : 'e090c25187ee2b3f9f1f8a02747356641',
      authToken : localStorage.getItem('authToken')
    }
    this.dynSrv.getDynamicForm(this.commonSrv.convertInToFormData(obj)).subscribe((res : any) =>{
      // console.log("Data ",res.data, typeof(res.data[0]))
      // const rnfi = this.dynamicForm.get('rnfi') as FormArray
        this.createEmailFormGroup(res.data)
    })
    console.log(this.dynamicForm)
  }
  private createEmailFormGroup(data : any) {
    // console.log(data)
    for(let r of data){
      // console.log(r)
      Object.keys(r).map(x => {
        this.dynamicForm.addControl(x, this.fb.array([this.createFormControls(r, x)]))
      })
      // console.log("Dynamic form :",this.dynamicForm.value)
    }
  }
  createFormControls(data : any, controlName : any) : any{
    const controlNames : any = []
    Object.keys(data).map(y => {
      if(y === controlName){
        controlNames.push(data[y].map((x : any) => new FormControl(x)))
      }
    })
    return controlNames
  }
  getObject(obj : any){
    console.log("Got from tempate : ", obj)
  }

  onSubmit(){
    console.log(this.dynamicForm.value)
  }
}
