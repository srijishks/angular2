import { Component, OnInit } from '@angular/core';
import { LoginService }  from '../service/login.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {Login} from './login';


@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  getData: String;
  email:String;
  password:String;
  form:Object;

  constructor(private _loginservice : LoginService, fb: FormBuilder) {
    let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;
    this.loginForm = fb.group({
      'password' : [null, Validators.required],
      'email': [null, [<any>Validators.required,  <any>Validators.pattern(emailRegex) ]]
    })
  }

  ngOnInit() {

  }

  loginFormSubmit(value: any){
    console.log(value);
    if(!value)
       return;
    let form = {
      'email' : value.email,
      'password' : value.password
    };
    this._loginservice.makeLogin(form)
    .subscribe(
      data => {
        this.getData = data;
        localStorage.setItem('authData',JSON.stringify(data.params));
      },
      error => alert('error in callin APi'),
      () => console.log("just finished")
      );
    console.log('you submitted value:', form);  
    
  }

}
