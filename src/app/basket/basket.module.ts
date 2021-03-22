import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { OrderTotalModule } from '../order-total/order-total.module';



@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    OrderTotalModule
  ]
})
export class BasketModule { }
