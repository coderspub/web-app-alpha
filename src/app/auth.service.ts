import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { }

  getUserDetails(username1,passwrd1){
    let data ={
      username : username1,
      passwrd:passwrd1

    }
    console.log(data);
    //post details to API
return this.http.post('http://127.0.0.1:8001/fleet/rest/auth',{
data,
headers:new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded").append("status","200").append("ok","true")
   })
  }
}
