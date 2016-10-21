import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class LoginService {

  constructor(private http:Http) { }
  	makeLogin(email:String,  password:String){
  		let body = {
              "params": {
                email: email,
                password: password
              },
              "function": "login"
            };
  		let bodyString = JSON.stringify(body); // Stringify payload
      let headers      = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' ,'Access-Control-Allow-Headers':'Content-Type'}); // ... Set content type to JSON
      let options       = new RequestOptions({ headers: headers }); // Create a request option


        //Really need post for login
        //but, in this case its useing get data
        /*return this.http.post("../data/login.json", bodyString, options) // ...using post request
                         .map((res:Response) => res.json()) ;
                         */

        return this.http.get("../data/login.json") // ...using get request
                         .map((res:Response) => res.json()) ;

  		
  	}
}
