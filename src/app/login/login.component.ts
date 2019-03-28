import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from'../auth.service';
import { Router } from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginAlert:Boolean = false;
  pageinfo:string = "Sign in";

  constructor(private Auth:AuthService, private router : Router,private http: HttpClient) { }

  ngOnInit() {
  }
sub(form:NgForm){

  const username = form.value.username;
  const passwrd = form.value.passwrd;
if( username !='' && passwrd != '' ){
  this.Auth.getUserDetails(username,passwrd).subscribe(data=>{
    if(data['status']===true){
      console.log("authenticated");
    }
    else{
      this.loginAlert = true;
    }
  });
}

}
}




