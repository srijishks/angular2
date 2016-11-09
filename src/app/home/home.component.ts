import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
// import { MainmenuComponent } from './mainmenu/mainmenu.component';

declare var Richeditor: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(environment.API_BASE_URL);
  	var editor = new Richeditor('#editor', {
    uploader: {
        url: environment.API_BASE_URL+'/upload.php?action=upload',
        process: (resp)  => {
            resp.baseurl = environment.API_BASE_URL+'/user/files/';
            return resp;
        }
    },
    filebrowser: {
        ajax: {
            url: environment.API_BASE_URL+'/upload.php',
            process: (resp) => {
                resp.baseurl = environment.API_BASE_URL+'/user/files/';
                return resp;
            },
       	 }
    	}
	});

  }

}
