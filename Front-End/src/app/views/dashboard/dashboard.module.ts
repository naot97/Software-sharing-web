import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { FooterModule } from '@progress/kendo-angular-grid';
import { DataViewModule } from 'primeng/dataview';
@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    WavesModule,
    ButtonsModule,
    FooterModule,
    IconsModule,
    DataViewModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
