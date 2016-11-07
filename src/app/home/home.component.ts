import { Component, OnInit } from '@angular/core';
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

  	var editor = new Richeditor('#editor', {
    uploader: {
        url: '../data/upload.php?action=upload',
        process: function (resp) {
            resp.baseurl = './data/user/files/';
            return resp;
        }
    },
    filebrowser: {
        ajax: {
            url: '../data/upload.php',
            process: function (resp) {
                resp.baseurl = './data/user/files/';
                return resp;
            },
       	 }
    	}
	});

  }

}
