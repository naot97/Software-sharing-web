import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { TestComponent } from './test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    data: {
      title: 'Profile'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}


