import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class LoginService {

  constructor(private http:Http) { }
  	makeLogin(email:String,  password:String){
  		let body = {email: email, password:password }
  		// let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post("http://localhost/note3/login", body, options) // ...using post request
                         .map((res:Response) => res.json()) ;

  		
  	}
}
