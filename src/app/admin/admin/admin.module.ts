import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  declarations: [QueryComponent, ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
