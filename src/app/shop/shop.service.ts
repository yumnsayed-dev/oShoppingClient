import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { IProduct } from '../models/IProduct';
import { ICategory } from '../models/ICategory';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl ="https://localhost:44392/api/";

  constructor(private Http: HttpClient) {

   }

  public getProduct(catId  ? : number,sort?: string): Observable<IProduct[]>
    {
      let params = new HttpParams();
      if(catId){
        params = params.append('catId',catId.toString());
      }
      if(sort){
        params = params.append('sort',sort.toString());
      }
     return this.Http.get<IProduct[]>(this.baseUrl+'Product/GetListOfProducts',{observe:'response',params})
     .pipe( 
       map(res => {return res.body})
      );
    }
  public getCategory(): Observable<ICategory[]>
  {
    return this.Http.get<ICategory[]>(this.baseUrl+'Category'+'/GetListOfCategory');
  }
  public singleProductById(id : number):Observable<IProduct>
  {
    console.log("here"+id)
    return this.Http.get<IProduct>(this.baseUrl+'Product/GetSingleProduct/'+id)
  }

 
}
