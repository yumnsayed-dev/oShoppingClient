import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Basket, IBasket, IBasketTotals } from '../models/IBasket';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
   basket = new Basket();
   private basketSource = new BehaviorSubject<IBasket>(null); 
   basket$ = this.basketSource.asObservable();
   
   private basketTotals = new BehaviorSubject<IBasketTotals>(null);
   basketTotals$ = this.basketTotals.asObservable();
   
  constructor() {}

  public addItemtoBasket(item : IProduct,defualtQuantity =1){
    console.log("basketServie");
    console.log(item);
    const itemToAdd : IProduct = this.pushToBasket(item,defualtQuantity);
  
    console.log(this.basket);
    this.basket.products = this.addOrUpdateBasket(this.basket.products,itemToAdd,defualtQuantity);
    console.log(this.basket);
    this.calTotals();
 
    this.basketSource.next(this.basket);
  }
  private addOrUpdateBasket(products: IProduct[], itemToAdd: IProduct, defualtQuantity: number): IProduct[] {
    console.log(itemToAdd);
    const index = products.findIndex(x=>x.productId === itemToAdd.productId);
    if(index === -1){
      itemToAdd.availablelQuantity = defualtQuantity;
      products.push(itemToAdd);
    }
    else
    {
      products[index].availablelQuantity +=defualtQuantity;
    }
   return products;
  } 
  
  private pushToBasket(item: IProduct, defualtQuantity: number): IProduct {
   return {
     productId : item.productId,
     onSalePrice : item.onSalePrice,
     availablelQuantity :defualtQuantity,
     category :item.category,
     description : item.description,
     discountPerc : item.discountPerc,
     productImg : item.productImg,
     productName : item.productName,
     totalPrice : item.totalPrice,
     unitOfMeasure : item.unitOfMeasure
   };
  }
  incermentItemQuantity(item: IProduct){
    const currentBasket = this.basket;
    const ItemIndex = currentBasket.products.findIndex(x=>x.productId == item.productId);
    currentBasket.products[ItemIndex].availablelQuantity++;
    this.basket =currentBasket;
    this.calTotals()
    this.basketSource.next(this.basket);
  }
  DcermentItemQuantity(item: IProduct){
    const currentBasket = this.basket;
    const ItemIndex = currentBasket.products.findIndex(x=>x.productId == item.productId);
    if (currentBasket.products[ItemIndex].availablelQuantity >1){
      currentBasket.products[ItemIndex].availablelQuantity--;
      this.basket =currentBasket;
      this.calTotals()
      this.basketSource.next(this.basket);
    }
    else{
      this.removeItemFromBasket(item);
      this.calTotals()
      this.basketSource.next(this.basket);
    }
    
  }
  removeItemFromBasket(item: IProduct) {
    const currentBasket = this.basket;
    if(currentBasket.products.some(x=>x.productId === item.productId)){
      currentBasket.products = currentBasket.products.filter(x=>x.productId !=+ item.productId);
      if(currentBasket.products.length >0){
        this.basket =currentBasket;
        this.calTotals()
      }else
      {
        this.basket = new Basket();
        this.calTotals()
      }
    }
  }

  private calTotals(){
    const basket = this.basket;
    const TaxId = 1;
    const TaxVal =basket.products.reduce(
      (a,b)=>((b.onSalePrice * b.availablelQuantity)*14)/100+a,0);
    const TaxPerc = 14;
    const DiscountVal = basket.products.reduce(
      (a,b)=>((b.onSalePrice * b.availablelQuantity)*10)/100+a,0);
    const DiscountPerc =10;
    const DiscountId = 5
      const Val = basket.products.reduce(
        (a,b)=>(b.totalPrice * b.availablelQuantity)+a,0);
    const subTotal = basket.products.reduce(
      (a,b)=>(b.onSalePrice * b.availablelQuantity)+a,0);
      const number = basket.products.reduce(
        (a,b)=>(1 * b.availablelQuantity)+a,0);

      const total  =(subTotal + TaxVal) -DiscountVal
      this.basketTotals.next({DiscountId:DiscountId,DiscountPerc:DiscountPerc,
      DiscountVal : DiscountVal,TaxId :TaxId,TaxPerc:TaxPerc
      ,TotalPrice:total,TaxVal:TaxVal,afterSaleTotal:subTotal,numOfItems:number,TotalValue:Val});
  }

}
