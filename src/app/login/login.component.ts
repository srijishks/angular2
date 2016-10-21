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
    let email = form.email;
    let password = form.password;
    this._loginservice.makeLogin(email, password )
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
