import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../Services/common.service';
import { LoginService } from '../Services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  loader : Boolean = false
  constructor(
    private loginSrv : LoginService, 
    private commonSrv : CommonService,
    private _fb : FormBuilder, 
    private router :  Router
    ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.loginForm = this._fb.group({
      username : [''],
      password : ['']
    })
  }

  onSubmit(){
    this.loader = true
    console.log(this.loginForm)
    var obj = {
      username : this.loginForm.controls.username.value,
      password : this.loginForm.controls.password.value,
      token : 'e090c25187ee2b3f9f1f8a02747356641'
    }
    this.loginSrv.login(this.commonSrv.convertInToFormData(obj)).subscribe((res : any) =>{
      if(res.status === false){
        alert(res.message)
        this.loginForm.reset()
        this.loader = false
      }
      else{
        console.log(res, "TwoStep : ", res.twostep)
        localStorage.setItem('authToken', res.authToken)
        this.loader = false
        if(res.twostep === 1){
          this.router.navigate(['/otp-verify'])
          
        }
        else{
          this.router.navigate(['/dashboard'])
        }
      }
    })
  }

}
