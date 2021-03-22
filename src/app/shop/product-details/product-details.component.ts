import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/models/IProduct';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  Product :IProduct;
 Quantity : 1;

  constructor(private shopService : ShopService,
    private activatedRoute : ActivatedRoute,
    private basketService :BasketService) { }

  ngOnInit() {
    this.loadProduct()
    this.Quantity =1;
  }

  addItemToCard (){
    this.basketService.addItemtoBasket(this.Product,this.Quantity);
  }
  incermentQuantity(){
    this.Quantity++;
  }
  DecermentQuantity(){
    this.Quantity--;
  }

  loadProduct(){
    this.shopService.singleProductById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(prod => {
    this.Product =prod
    },err =>{
      console.log(err)
    })
  }
}
