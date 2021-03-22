import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/account.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  constructor(private accountService : AccountService,private router:Router) { }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm (){
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',Validators.required)
    })
  }
  onSubmit (){
    console.log(this.loginForm.value);
    this.accountService.login(this.loginForm.value).subscribe(()=>{
      this.router.navigateByUrl('/shop')
    },err=>{
      console.log(err)
    })
  } 
}
