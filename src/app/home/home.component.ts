import { Component, OnInit, ElementRef, Renderer, ViewChild} from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HomeService }  from '../service/home.service';
// import {BrowserModule} from '@angular/platform-browser'
// import { MainmenuComponent } from './mainmenu/mainmenu.component';

declare var Richeditor: any;
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isValueEntered: any;
  editor: any;
  getData:any;
  msg:Boolean;
  show:boolean = false;
  getNoteData:string;
  @ViewChild('textareaWrapper') changedata:ElementRef;
  constructor(private _homeservice : HomeService) { }

  ngOnInit() {
    console.log(environment.API_BASE_URL);
  	var editor = new Richeditor('#editor', {
    buttons: ['bold', 'italic', 'source'],
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
     // console.log(editor.imageprocessor);

    editor.events.on('changeElementValue', (data) =>{
        this.isValueEntered = editor.$element[0].value!=""? true :false;
      
      });
    
    jQuery( ".textareaWrapper" ).hide();
  } // end of onInit
Submited(value: any){
  let processContainer = this.changedata.nativeElement.innerHTML;
  let processedHtml = jQuery( processContainer ).find( ".richeditor_editor" ).html();
      processedHtml = processedHtml.replace(/'/g, "\\'"); // escape single quotes
  let stripedHtml = processedHtml.replace(/<(?:.|\n)*?>/gm, '');

  if(stripedHtml=="")
    return

  
   this._homeservice.SaveNote(processedHtml)
    .subscribe(
      data => {
        this.getData = data.result;; 
        this.msg = data.status;
        this.getNoteData = '{"status":1,"result":[{"id":"1","notedata":"2","userid":"1","created_on":"2016-11-24 00:00:00"}]}';
      },
      error => alert('error in callin APi'),
      () => console.log("just finished api call")
      );

 
}
  hideandShow(){
   jQuery( ".textareaWrapper" ).toggle( "slow");
    let compose = jQuery( ".compose" ).hasClass("compose-now")? 'compose-close':'compose-now';
    jQuery( ".compose" ).removeClass('compose-now compose-close').addClass(compose);
 }
  

 


}
