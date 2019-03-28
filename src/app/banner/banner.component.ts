import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from'../auth.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor( private router : Router,private Auth:AuthService) { }

  ngOnInit() {
  }
  signout(){
    this.router.navigate([''])
    this.Auth.setLoggedIn(false);
  }

}
