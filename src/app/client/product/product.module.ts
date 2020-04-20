import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { QueryComponent } from './query/query.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    // eslint-disable-next-line arrow-body-style
    component: QueryComponent,
    path:'query'
  },
  {
    // eslint-disable-next-line arrow-body-style
    component: ViewComponent,
    path:'view'
  },
  {
    // eslint-disable-next-line arrow-body-style
    component: BuyComponent,
    path:'buy'
  }
];

@NgModule({
  declarations: [QueryComponent, ViewComponent, BuyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
