import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    // eslint-disable-next-line arrow-body-style
    component: LoginComponent,
    path:'login'
  },
  {
    // eslint-disable-next-line arrow-body-style
    component: SignupComponent,
    path:'signup'
  }
];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
