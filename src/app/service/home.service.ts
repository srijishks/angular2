import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {

  constructor(private http:Http) { }

	SaveNote(htmls: any){
  		let body = {
              "params": {
                html: htmls
              },
              "function": "notesave"
            };
      let bodyString = JSON.stringify(body); // Stringify payload      
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

        return this.http.post(environment.API_BASE_URL+"jsonp.php", bodyString, { headers: headers }) // ...using post request
                         .map((res:Response) => res.json()) ;


  		
  	}
}
