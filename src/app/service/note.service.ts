import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class NoteService {

  constructor(private http:Http) { }

	getNote(authData:string){
		  let authDatas = authData;
	   	let authDataParsed = JSON.parse(authDatas);
			let userid = authDataParsed.id;
			console.log(userid);
	  		let body = {
              "params": {
                userid: userid
              },
              "function": "notelist"
            };
	       let bodyString = JSON.stringify(body); // Stringify payload      
	       let headers = new Headers();
	       headers.append('Content-Type', 'application/json');

        return this.http.post(environment.API_BASE_URL+"jsonp.php", bodyString, { headers: headers }) // ...using post request
                         .map((res:Response) => res.json()) ;
                      
                       

      
  		
  	}
}
