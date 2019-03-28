import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  val:JSON;
  lat:string;
  long:string;
  constructor(private httpClient: HttpClient) { }
  getlocation(c: string,i: string){
    const  params = new  HttpParams().set('c_id', c).set('a_id',i)
    this.httpClient.get('http://192.168.0.13:5000/location', {params}).subscribe(data => {
      this.val = data as JSON;
      this.lat = data['latitude'];
      this.long = data['longitude'];
      return(this.lat,this.long);
  })
}
}
