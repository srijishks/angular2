import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {Contact} from './contact';
import { ContactService }  from '../service/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  authenticated: boolean
  profile : Object;
  getData : Object;

  constructor(private _contactservice : ContactService, fb: FormBuilder){
    this.contactForm = fb.group({
      'name' : [null, Validators.required],
      'email': [null, Validators.required],
      'comment': [null, Validators.required]
    })
  }


    ngOnInit() {
     }

  
   doSubmit(value: any){
    let form = {
      'name' : value.name,
      'email' : value.email,
      'comment' : value.comment
    };

    this._contactservice.contactus(form)
    .subscribe(
      data => this.getData = data,
      error => alert('error in callin APi'),
      () => console.log("just finished")
      );

  }

  title = 'Contact us';

}


