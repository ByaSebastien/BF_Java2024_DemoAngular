import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DemoBindingsComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule
  ]
})
export class DemosModule { }
