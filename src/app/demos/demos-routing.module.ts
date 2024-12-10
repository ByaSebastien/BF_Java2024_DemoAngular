import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoBindingsComponent} from './demo-bindings/demo-bindings.component';
import {DemoPipesComponent} from './demo-pipes/demo-pipes.component';
import {DemoDirectivesComponent} from './demo-directives/demo-directives.component';
import {DemoInputOutputComponent} from './demo-input-output/demo-input-output.component';
import {DemoFormulaireComponent} from './demo-formulaire/demo-formulaire.component';
import {DemoHttpComponent} from './demo-http/demo-http.component';
import {DemoFormulaire2Component} from './demo-formulaire2/demo-formulaire2.component';

const routes: Routes = [
  {path: 'demo01', component: DemoBindingsComponent},
  {path: 'demo02', component: DemoPipesComponent},
  {path: 'demo03', component: DemoDirectivesComponent},
  {path: 'demo04', component: DemoInputOutputComponent},
  {path: 'demo05', component: DemoFormulaireComponent},
  {path: 'demo06', component: DemoHttpComponent},
  {path: 'demo07', component: DemoFormulaire2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule {
}
