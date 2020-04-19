import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // eslint-disable-next-line arrow-body-style
    loadChildren: ()=>import('./admin/admin.module').then(m => m.AdminModule),
    path:'admin'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnonymousModule { }
