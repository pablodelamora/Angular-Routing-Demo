import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
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
    component: DeleteComponent,
    path:'delete'
  }
];

@NgModule({
  declarations: [QueryComponent, ViewComponent, DeleteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
