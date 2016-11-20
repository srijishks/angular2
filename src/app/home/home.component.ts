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
        url: 'http://localhost/noteit class/fileupload.php',
        process: (resp)  => {
            resp.baseurl = 'http://localhost/noteit class/fileupload.php';
            return resp;
        }
    },
    filebrowser: {
        ajax: {
            url: 'http://localhost/noteit class/fileupload.php',
            process: (resp) => {
                resp.baseurl = 'http://localhost/noteit class/fileupload.php';
                return resp;
            },
       	 }
    	}
	});

  }

}
