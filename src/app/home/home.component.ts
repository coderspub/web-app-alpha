import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  val:JSON;
  lat:string;
  long:string;
  c_id:string = "bs000c1";
  a_id:string = "a1";
  constructor(private location:LocationService, private router : Router) {
    //dynamic updation
    // setInterval(()=>{
    //   this.getData();
    //   },1000);
   }
  ngOnInit() {
  }
  logout(){
   this.router.navigate([''])
  }
getData(){
  this.location.getlocation(this.c_id,this.a_id);
  this.lat = this.location.lat;
  this.long = this.location.long;
} 
}