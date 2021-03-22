import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  
  constructor(private accountService : AccountService) {
    
    
  }
  ngOnInit(): void {
    this.loadCurrentUser();
  }
  loadCurrentUser(){
    const token = localStorage.getItem('token');
    if(token){
      this.accountService.loadCurrentUser(token).subscribe(()=>{
        console.log("LoadedUser");
      },err=>{
        console.log(err)});
    }

  }
  
}
