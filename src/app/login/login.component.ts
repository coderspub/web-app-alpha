import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from'../auth.service';
import { Router, RoutesRecognized } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginAlert:Boolean = false;
  constructor(private Auth:AuthService, private router : Router) { }

  ngOnInit() {
  }
sub(form:NgForm){

  const username = form.value.username;
  const passwrd = form.value.passwrd;
  // this.Auth.getUserDetails(username,passwrd).subscribe(data=>{
  //   // if(data.success){
  //   //   //redirect to home
  //   // }
  //   // else{
  //   //   window.alert("invalid");
  //   // }
  //   console.log(data);
  // },
  // error =>{
  //   console.log("error",error);
  // });
  if(username === "admin" && passwrd === "admin"){
    //redirect to home
   this.router.navigate(["home"])
  }
  else{
    this.loginAlert = true;
  }
}
}
