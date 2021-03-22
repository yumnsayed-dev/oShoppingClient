import { NumberValueAccessor } from '@angular/forms';
import {v4 as uuidv4} from 'uuid';
import { IProduct } from "./IProduct";

export interface IBasket {
    id: string;
    products : IProduct[];
}

export class Basket implements IBasket{
    id= uuidv4();
    products: IProduct[] = [];
    
}

export interface IBasketTotals
{
    afterSaleTotal : number;
    TotalPrice : number;
    numOfItems : number;
    TaxVal : number;
    TaxId: number;
    TaxPerc : number;
    DiscountVal : number;
    DiscountPerc : number;
    DiscountId : number;
    TotalValue :number;

}