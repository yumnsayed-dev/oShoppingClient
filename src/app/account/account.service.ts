import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
  })
 
  
export class AccountService {
  
  baseUrl ="https://localhost:44392/api/";
  private currentUsersrc = new BehaviorSubject<IUser>(null);
  currentUser$ = this.currentUsersrc.asObservable();
  constructor(private Http: HttpClient,private router:Router) {

  }
  getCurrentUserValue(){
    return this.currentUsersrc.value;
  }
  loadCurrentUser(token:string){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}`);
    return this.Http.get(this.baseUrl+'account',{headers}).pipe(
      map((user:IUser)=>{
        if(user){
          console.log(user);
          localStorage.setItem('token',user.token);
          this.currentUsersrc.next(user);
        }
      })
    );
  }
  login(values: any){
    return this.Http.post(this.baseUrl+'account/UserLogin',values).pipe(
      map((user:IUser)=>{
        if(user){
          console.log(user);
          localStorage.setItem('token',user.token);
          this.currentUsersrc.next(user);
        }
      })
    )
    }
    register(values: any){
      return this.Http.post(this.baseUrl+'account/CreateUser',values).pipe(
        map((user:IUser)=>{
          if(user){
            localStorage.setItem('token',user.token);
            this.currentUsersrc.next(user);
          }
        })
      )
      }
      logout(){
        localStorage.removeItem('token');
        this.currentUsersrc.next(null);
        this.router.navigateByUrl('/');
      }
      CheckEmailExits(email: string){
      return this.Http.get(this.baseUrl+'account/EmailExits?email='+email)
      }

}
