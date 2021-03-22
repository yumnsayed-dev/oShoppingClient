import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',loadChildren:()=> import('./shop/shop.module').then(module=>module.ShopModule)},
  {path:'basket',loadChildren:()=> import('./basket/basket.module').then(module=>module.BasketModule)},
  {path:'checkout',loadChildren:()=> import('./checkout/checkout.module').then(module=>module.CheckoutModule)},
  {path:'account',loadChildren:()=> import('./account/account.module').then(module=>module.AccountModule)},
  {path:'**',redirectTo:'',pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
