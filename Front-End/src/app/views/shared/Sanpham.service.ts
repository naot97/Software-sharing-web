import { Injectable } from '@angular/core';
import {Http,  Headers, RequestOptions, RequestMethod} from '@angular/http';
import {sanpham} from '../models/sanpham.class';


@Injectable({
  providedIn: 'root'
})
export class SanPhamService {

  //API_URL: string = 'http://5b8e41aa5722ac0014317527.mockapi.io/car-small';
  API_URL: string = 'http://localhost/Software-sharing-website/Back-End//index.php?controller=Sanpham&action=load_data'

  constructor( public http: Http) { }
  getsanphamsSmall() {
    return this.http.get(this.API_URL);
  }

  putsanphams(sp: sanpham){
    //let header =
    return this.http.put(`${this.API_URL}/${sp.id}`, sp);
  }
}
