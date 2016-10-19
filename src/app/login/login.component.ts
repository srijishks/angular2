import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginService }  from '../service/login.service';


@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  getData: String;
  email:String;
  password:String;

  constructor(private _loginservice : LoginService) {}

  ngOnInit() {

  }

  loginFormSubmit(form: any): void {  
    let email = 'srijishks@gmail.com';
    let password = 'qwer';
    this._loginservice.makeLogin(email, password )
    .subscribe(
      data => this.getData = data,
      error => alert('error'),
      () => console.log("just finished")
      );
    console.log('you submitted value:', form);  
    
  }

}
