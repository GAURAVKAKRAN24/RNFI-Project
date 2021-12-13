import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './Guards/auth.guard';
import { HeaderInterceptorService } from './Interceptors/header-interceptor.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard, 
  {
    provide : HTTP_INTERCEPTORS,
    useClass : HeaderInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
