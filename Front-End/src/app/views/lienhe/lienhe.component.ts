import { Component, OnInit } from '@angular/core';
import {GMap} from 'primeng/gmap'
declare var google: any;

@Component({
  templateUrl: 'lienhe.component.html'
})
export class lienheComponent implements OnInit {
  options: any;

  overlays: any[];

  infoWindow: any;

  ngOnInit(): void {
    this.options = {
      center: {lat: 10.773511, lng: 106.660733},
      zoom: 14
    };
    
    this.infoWindow = new google.maps.InfoWindow();
  this.overlays = [
    new google.maps.Marker({position: {lat: 10.773511, lng: 106.660733}, title:"Đại học Bách Khoa TP.HCM"}),
  ];
  

  }
}
