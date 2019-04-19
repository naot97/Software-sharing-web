import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {setTheme } from 'ngx-bootstrap/utils';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { 
    setTheme('bs4');
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
