import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  data = {};
  loginFormSubmit(form: any): void {  
    console.log('you submitted value:', form);  
    
  }

}
