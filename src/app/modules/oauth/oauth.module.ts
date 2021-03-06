import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OauthLayoutComponent } from './oauth-layout/oauth-layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    OauthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OauthModule { }
