import { Component, OnInit } from '@angular/core';
import { Basket } from '../models/IBasket';
import { IProduct } from '../models/IProduct';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket = new Basket();
  constructor(private basketService : BasketService) { }

  ngOnInit() {
    this.basket = this.basketService.basket;
  }
   printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
    removeBasketItem(item: IProduct){
      this.basketService.removeItemFromBasket(item);
    }
    incermentItemQuantity(item: IProduct){
      this.basketService.incermentItemQuantity(item);
    }
    DecrmentItemQuantity(item: IProduct){
      this.basketService.DcermentItemQuantity(item);
    }
}
