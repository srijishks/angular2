import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {
  form:Object;
  constructor(private http:Http) { }
  	makeLogin(form: any){
  		let body = {
              "params": {
                email: form.email,
                password: form.password
              },
              "function": "login"
            };
      let bodyString = JSON.stringify(body); // Stringify payload      
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

        return this.http.post(environment.API_BASE_URL+"jsonp.php", bodyString, { headers: headers }) // ...using post request
                         .map((res:Response) => res.json()) ;


  		
  	}
}
