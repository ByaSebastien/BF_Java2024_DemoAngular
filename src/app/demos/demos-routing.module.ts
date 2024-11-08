import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoBindingsComponent} from './demo-bindings/demo-bindings.component';
import {DemoPipesComponent} from './demo-pipes/demo-pipes.component';

const routes: Routes = [
  {path: 'demo01', component: DemoBindingsComponent},
  {path: 'demo02', component: DemoPipesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule {
}
