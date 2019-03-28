import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public loggedInStatus = false;

  constructor(private http: HttpClient) { }

  getUserDetails(username,passwrd){
    const data ={
      username: username,
       passwrd: passwrd
      }
    return this.http.post("http://192.168.1.3:5000/authorize",data,{headers:new HttpHeaders().set("Content-type", 'application/json')})

  }
  setLoggedIn(val){
    this.loggedInStatus = val;
  }
  get isLoggedIn(){
    return this.loggedInStatus;
  }
}
