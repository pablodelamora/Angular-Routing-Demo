import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // eslint-disable-next-line arrow-body-style
    loadChildren: ()=>import('./admin/admin.module').then(m => m.AdminModule),
    path:'admin'
  },
  {
    // eslint-disable-next-line arrow-body-style
    loadChildren: ()=>import('./client/client.module').then(m => m.ClientModule),
    path:'client'
  },
  {
    // eslint-disable-next-line arrow-body-style
    loadChildren: ()=>import('./product/product.module').then(m => m.ProductModule),
    path:'product'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
