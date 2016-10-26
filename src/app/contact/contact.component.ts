import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {Contact} from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  authenticated: boolean
  profile : Object;

  constructor(fb: FormBuilder){
    if(localStorage.getItem('jwt')){
      this.authenticated = true;
      this.profile = JSON.parse(localStorage.getItem('profile'));
    }
    this.contactForm = fb.group({
      'name' : [null, Validators.required],
      'email': [null, Validators.required],
      'comment': [null, Validators.required]
    })
  }


    ngOnInit() {
     }


  title = 'Contact us';

}


