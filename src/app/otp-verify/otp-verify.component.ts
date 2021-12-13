import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../Services/common.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {
  optForm : FormGroup | any
  authToken : any
  loader : Boolean = false
  constructor(
    private _fb : FormBuilder,
    private commonSrv : CommonService,
    private loginSrv : LoginService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.authToken = localStorage.getItem('authToken')
    this.optForm = this._fb.group({
      otp : ['']
    })
  }

  
  numberOnly(event : any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  verifyOTP(){
    this.loader = true
    const obj = {
      authToken : this.authToken,
      token : 'e090c25187ee2b3f9f1f8a02747356641',
      otp : this.optForm.controls.otp.value
    }
    console.log(obj)
    this.loginSrv.verifyOTP(this.commonSrv.convertInToFormData(obj)).subscribe((res : any) =>{
      console.log(res)
      if(res.status === false){
        alert(res.message)
        this.optForm.reset()
        this.loader = false
      }
      else{
        this.loader = false
        localStorage.setItem('userData', JSON.stringify(res))
        this.router.navigate(['/dashboard'])        
      }
    })
  }

}
