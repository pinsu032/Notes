import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NriRoutingModule } from './nri-routing.module';
import { NriComponent } from './nri.component';


@NgModule({
  declarations: [
    NriComponent
  ],
  imports: [
    CommonModule,
    NriRoutingModule
  ]
})
export class NriModule { }
