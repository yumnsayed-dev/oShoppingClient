import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {
@Input() product : IProduct;
  constructor(private basketService : BasketService) { }

  ngOnInit() {
  }
  addItemToBasket(){
    console.log("Clicked Basket")
    this.basketService.addItemtoBasket(this.product);
  }

}
