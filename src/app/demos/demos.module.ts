import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import {SharedModule} from '../shared/shared.module';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { DeleteDialogComponent } from './demo-input-output/delete-dialog/delete-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DemoFormulaireComponent } from './demo-formulaire/demo-formulaire.component';


@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoPipesComponent,
    DemoDirectivesComponent,
    DemoInputOutputComponent,
    DeleteDialogComponent,
    DemoFormulaireComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule,
  ]
})
export class DemosModule { }
