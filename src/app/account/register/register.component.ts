import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private router : Router,private formbuilder: FormBuilder,private accountService : AccountService) { }

  ngOnInit() {
    this.createResgiterForm();
  }

  createResgiterForm(){
    this.registerForm = this.formbuilder.group({
      displayName : [null,[Validators.required]],
      EmailAddress : [null,[Validators.required,Validators.email]],
      password : [null,[Validators.required]]
    });
  }
  onSubmit (){
    console.log(this.registerForm.value);
    this.accountService.register(this.registerForm.value).subscribe(response=>{
      this.router.navigateByUrl('/shop');
    },err=>{
      console.log(err);
    });
  } 

}
