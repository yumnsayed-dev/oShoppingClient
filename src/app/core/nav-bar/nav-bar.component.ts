import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { Basket, IBasket } from 'src/app/models/IBasket';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$ :Observable<IBasket>;
  currentUser$ : Observable<IUser>;

  constructor(private accountService :AccountService,private basketService : BasketService) { }

  ngOnInit() {
    console.log("nav-barCounter")
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;

  }
  logOut(){
    this.accountService.logout();
  }

}
