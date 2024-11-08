import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoBindingsComponent} from './demo-bindings/demo-bindings.component';

const routes: Routes = [
  {path: 'demo01', component: DemoBindingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule {
}
