import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    FormsModule,
    TestRoutingModule
  ],
  declarations: [ TestComponent ]
})
export class TestModule { }


