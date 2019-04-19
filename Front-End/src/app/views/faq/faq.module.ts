import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';

@NgModule({
  imports: [
    FormsModule,
    FaqRoutingModule
  ],
  declarations: [ FaqComponent ]
})
export class FaqModule { }




