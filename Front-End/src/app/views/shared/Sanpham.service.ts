import { Injectable } from '@angular/core';
import {Http,  Headers, RequestOptions, RequestMethod} from '@angular/http';
import {sanpham} from '../models/sanpham.class';


@Injectable({
  providedIn: 'root'
})
export class SanPhamService {

  API_URL: string = 'http://5b8e41aa5722ac0014317527.mockapi.io/car-small';
  constructor( public http: Http) { }
  getsanphamsSmall() {
    return this.http.get(this.API_URL);
  }

  putsanphams(sp: sanpham){
    return this.http.put(`${this.API_URL}/${sp.id}`, sp);
  }
}
