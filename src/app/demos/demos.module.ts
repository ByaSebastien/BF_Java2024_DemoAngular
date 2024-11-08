import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';


@NgModule({
  declarations: [
    DemoBindingsComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
