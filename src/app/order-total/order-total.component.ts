import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from '../basket/basket.service';
import { IBasketTotals } from '../models/IBasket';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.scss']
})
export class OrderTotalComponent implements OnInit {
  basketTotal$ : Observable<IBasketTotals>;

  constructor(private basketServices :BasketService) { }

  ngOnInit() {
    
    this.basketTotal$ = this.basketServices.basketTotals$;
    console.log(this.basketTotal$)
  }

}
