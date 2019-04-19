import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// Import containers
import { DefaultLayoutComponent } from '../app/containers/default-layout/default-layout.component';

import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { HttpModule} from '@angular/http';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppHeaderModule,
  AppSidebarModule,
  AppBreadcrumbModule,
} from '@coreui/angular';
// import kendo grid ui


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components

//import service


import {ToastrModule} from 'ngx-toastr';
import { SanPhamModule } from './views/sanpham/sanpham.module';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { TestModule } from './views/test/test.module';
import { AboutModule } from './views/about/about.module';
import { FaqModule } from './views/faq/faq.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppSidebarModule,
    FormsModule,
    HttpModule,
    SanPhamModule,
    ButtonsModule,
    WavesModule,
    IconsModule,
    TestModule,
    FaqModule,
    AboutModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    //TabsModule.forRoot(),
    //ChartsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CarouselModule.forRoot()
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
