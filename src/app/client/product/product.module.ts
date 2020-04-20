import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { ViewComponent } from './view/view.component';
import { BuyComponent } from './buy/buy.component';



@NgModule({
  declarations: [QueryComponent, ViewComponent, BuyComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
