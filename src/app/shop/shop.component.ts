import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/ICategory';
import { IProduct } from '../models/IProduct';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
    products : IProduct[];
    category : ICategory[];
    catIdSelect  =0;
    sortSelected ='name';
    sortOptions = [{name :'Alphabetical',value:'name'},{name :'Price Low to High',value:'priceAsc'},
    {name :'Price High to Low',value:'priceDesc'}] 
  constructor(private shopService : ShopService) {

   }

  ngOnInit() {
    
    this.getProducts();
    this.getCategories();

    
  }
  getProducts (){
    this.shopService.getProduct(this.catIdSelect,this.sortSelected).subscribe(res =>{
      this.products = res;
      console.log(res);
      console.log(this.sortSelected);
    },err =>{
      console.log(err);
    })
  }
  getCategories () {
    this.shopService.getCategory().subscribe(res =>{
      this.category = [{baseId:0,categoryName:'All'},...res];
    },err =>{
      console.log(err);
    })
  }

  onCatSelected (catId : number){
    this.catIdSelect = catId;
    this.getProducts();
  }
  onSortSelect(sort : string){
    this.sortSelected = sort;
    this.getProducts();
  }

}
