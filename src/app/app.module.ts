import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders }  from './app.routes';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LoginComponent } from './login/login.component';

import { ContactService } from './service/contact.service';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    MainmenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    ContactService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
