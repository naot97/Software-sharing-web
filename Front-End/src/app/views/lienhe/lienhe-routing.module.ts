import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { lienheComponent } from './lienhe.component';

const routes: Routes = [
  {
    path: '',
    component: lienheComponent,
    data: {
      title: 'Liên hệ'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class lienheRoutingModule {}
