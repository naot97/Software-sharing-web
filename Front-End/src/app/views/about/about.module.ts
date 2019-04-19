import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AboutRoutingModule
  ],
  declarations: [ AboutComponent ]
})
export class AboutModule{ }
