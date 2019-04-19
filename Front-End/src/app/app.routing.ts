import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { SanPhamComponent } from './views/sanpham/sanpham.component';
import { TestComponent } from './views/test/test.component';
import { AboutComponent } from './views/about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'trangchu',
    pathMatch:'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    } 
  },
  // {
  //   path: 'sanpham',
  //   component: sanphamComponent,
  //   data: {
  //     title: 'Hang hoa'
  //   }
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'sanpham',
        loadChildren: './views/sanpham/sanpham.module#SanPhamModule'
      }
      ,{
        path: 'trangchu',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'hoso',
        loadChildren: './views/test/test.module#TestModule'
      },
      {
        path: 'gioithieu',
        loadChildren: './views/about/about.module#AboutModule'
      },
      {
        path: 'faq',
        loadChildren: './views/faq/faq.module#FaqModule'
      },
      {
        path: 'lienhe',
        loadChildren: './views/lienhe/lienhe.module#lienheModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
