import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { lienheComponent } from './lienhe.component';
import { lienheRoutingModule } from './lienhe-routing.module';
import {GMapModule} from 'primeng/gmap';
@NgModule({
  imports: [
    FormsModule,
    lienheRoutingModule,
    GMapModule
  ],
  declarations: [ lienheComponent ]
})


export class lienheModule {
  

 }
