import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NoteService }  from '../service/note.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
	getNoteData:any;
	msg:Boolean;
	processedHtml:any;
  constructor(private _noteservice : NoteService) { }

  ngOnInit() {
  	 let authData = localStorage.getItem('authData');
  	 if(authData!=undefined)
	  	 this._noteservice.getNote(authData)
	    .subscribe(
	      data => {
	        this.getNoteData = data.result; 
	        console.log(data);
	        this.msg = data.status;

	      },
	      error => alert('error in callin APi'),
	      () => console.log("just finished api call")
	      );
  }

}
