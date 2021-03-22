import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalComponent } from './order-total.component';



@NgModule({
  declarations: [OrderTotalComponent],
  imports: [
    CommonModule
  ],
  exports:[OrderTotalComponent]
})
export class OrderTotalModule { }
