import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanPhamComponent } from './sanpham.component';

const routes: Routes = [
  {
    path: '',
    component: SanPhamComponent,
    data: {
      title: 'Tải về'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanPhamRoutingModule {}
