import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '../../../../node_modules/@progress/kendo-angular-grid';
import {FormsModule} from '@angular/forms';
import { SanPhamComponent } from './sanpham.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { DataViewModule } from 'primeng/dataview';
import { SanPhamRoutingModule } from './sanpham-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {SplitButtonModule, SplitButton} from 'primeng/splitbutton';
import {GalleriaModule} from 'primeng/galleria';
import {ToastModule} from 'primeng/toast';
@NgModule({
  imports: [
    CommonModule,
    GridModule,
    DataViewModule,
    GalleriaModule,
    SanPhamRoutingModule,
    DropdownModule,
    InputTextModule,
    ToastModule,
    DynamicDialogModule,
    ButtonModule,
    DialogModule,
    SplitButtonModule,
    PaginatorModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    TypeaheadModule.forRoot(),
    FormsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      primaryColour: '#ff6358', 
      secondaryColour: '#ff6358', 
      tertiaryColour: '#ff6358'
  })

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ SanPhamComponent],
  
})
export class SanPhamModule { }