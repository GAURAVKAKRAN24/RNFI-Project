import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpVerifyRoutingModule } from './otp-verify-routing.module';
import { OtpVerifyComponent } from './otp-verify.component';
import { AuthGuard } from '../Guards/auth.guard';


@NgModule({
  declarations: [
    OtpVerifyComponent
  ],
  imports: [
    CommonModule,
    OtpVerifyRoutingModule,
    ReactiveFormsModule
  ],
  providers : [AuthGuard]
})
export class OtpVerifyModule { }
